export interface GoogleReview {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  /** Link to the reviewer's Google Maps profile */
  reviewUrl?: string;
  /** Google profile photo URL (lh3.googleusercontent.com) */
  profilePhotoUrl?: string;
}

export interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  totalRatings: number;
}

type RawReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
  time?: number; // Unix timestamp — used to sort by newest
};

/**
 * Fetches the 5 most recent Google reviews via the Places API (legacy)
 * using reviews_sort=newest, which guarantees the latest reviews are returned.
 *
 * Results are ISR-cached server-side and revalidated every hour.
 *
 * Required env vars:
 *   GOOGLE_PLACES_API_KEY  — API key with "Places API" enabled
 *   GOOGLE_PLACE_ID        — Place ID of the business (ChIJ… format)
 */
export async function getGoogleReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
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
      { next: { revalidate: 3600 } }
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

  // reviews_sort=newest already returns them newest-first; we sort by `time`
  // as a safety net in case the API order shifts.
  const sorted = [...(place.reviews ?? [])].sort(
    (a: RawReview, b: RawReview) => (b.time ?? 0) - (a.time ?? 0)
  );

  const reviews: GoogleReview[] = sorted.slice(0, 5).map((r: RawReview) => ({
    authorName: r.author_name ?? "Anonyme",
    rating: r.rating ?? 5,
    text: r.text ?? "",
    relativeTime: r.relative_time_description ?? "",
    profilePhotoUrl: r.profile_photo_url,
    reviewUrl: r.author_url,
  }));

  return {
    reviews,
    rating: place.rating ?? 5.0,
    totalRatings: place.user_ratings_total ?? 0,
  };
}
