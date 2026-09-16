export interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
}

interface PlacesResponse {
  reviews?: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
}

export interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
  fetchedAt: string;
}

const PLACE_ID = process.env.GOOGLE_PLACE_ID;
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function fetchGoogleReviews(): Promise<ReviewsData | null> {
  if (!PLACE_ID || !API_KEY) {
    console.warn("Missing GOOGLE_PLACE_ID or GOOGLE_PLACES_API_KEY");
    return null;
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=reviews,rating,userRatingCount`,
      {
        headers: {
          "X-Goog-Api-Key": API_KEY,
        },
        next: { revalidate: 86400 }, // Cache for 24 hours
      }
    );

    if (!res.ok) {
      console.error("Google Places API error:", res.status, await res.text());
      return null;
    }

    const data: PlacesResponse = await res.json();

    return {
      reviews: data.reviews ?? [],
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return null;
  }
}
