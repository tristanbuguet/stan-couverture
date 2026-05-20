export interface GoogleReview {
  authorName: string;
  authorUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  totalRatings: number;
}

type RawReview = {
  author_name?: string;
  author_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

/**
 * Fetches the 5 most recent Google reviews for the business via the Places API.
 * Results are cached server-side and revalidated every hour (ISR).
 *
 * Required env vars:
 *   GOOGLE_PLACES_API_KEY  — API key with Places API enabled
 *   GOOGLE_PLACE_ID        — Place ID of the business (e.g. ChIJ...)
 */
export async function getGoogleReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    // Return empty data so the component falls back to static reviews
    return { reviews: [], rating: 5.0, totalRatings: 0 };
  }

  const params = new URLSearchParams({
    place_id: placeId,
    fields: "reviews,rating,user_ratings_total",
    reviews_sort: "newest",
    language: "fr",
    key: apiKey,
  });

  let res: Response;
  try {
    res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
  } catch (err) {
    console.error("[Google Reviews] Fetch failed:", err);
    return { reviews: [], rating: 5.0, totalRatings: 0 };
  }

  if (!res.ok) {
    console.error(`[Google Reviews] HTTP error: ${res.status}`);
    return { reviews: [], rating: 5.0, totalRatings: 0 };
  }

  const data = await res.json();

  if (data.status !== "OK") {
    console.error(
      `[Google Reviews] API error: ${data.status} — ${data.error_message ?? "no message"}`
    );
    return { reviews: [], rating: 5.0, totalRatings: 0 };
  }

  const place = data.result;

  // Google Places API returns at most 5 reviews
  const reviews: GoogleReview[] = (place.reviews ?? [])
    .slice(0, 5)
    .map((r: RawReview) => ({
      authorName: r.author_name ?? "Anonyme",
      authorUrl: r.author_url,
      rating: r.rating ?? 5,
      text: r.text ?? "",
      relativeTime: r.relative_time_description ?? "",
    }));

  return {
    reviews,
    rating: place.rating ?? 5.0,
    totalRatings: place.user_ratings_total ?? 0,
  };
}
