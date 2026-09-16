import { NextResponse } from "next/server";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export const revalidate = 86400; // 24 hours

export async function GET() {
  const data = await fetchGoogleReviews();

  if (!data) {
    return NextResponse.json(
      { error: "Unable to fetch reviews" },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
