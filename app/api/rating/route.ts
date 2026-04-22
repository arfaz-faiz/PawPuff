import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, petName, comment, rating } = body;

    // --- Validation ---
    if (!name || !petName || !comment || !rating) {
      return NextResponse.json(
        { error: "Missing required feedback fields" },
        { status: 400 }
      );
    }

    console.log("New Elite Rating Received:", {
      name,
      petName,
      comment,
      rating,
      timestamp: new Date().toISOString()
    });

    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Feedback delivered successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
