import { NextResponse } from "next/server";

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // 1. Safely parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Unable to send your message." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Unable to send your message." },
        { status: 400 }
      );
    }

    const { name, email, message } = body as Record<string, unknown>;

    // 2. Validate field types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Unable to send your message." },
        { status: 400 }
      );
    }

    // 3. Trim values
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // 4. Validate non-empty
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { success: false, error: "Unable to send your message." },
        { status: 400 }
      );
    }

    // 5. Validate email format
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Unable to send your message." },
        { status: 400 }
      );
    }

    // 6. Check environment variable
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl || scriptUrl === "YOUR_WEB_APP_URL_HERE") {
      // Server is not yet configured with the actual Web App URL
      return NextResponse.json(
        { success: false, error: "Unable to send your message." },
        { status: 500 }
      );
    }

    // 7. Forward data to Google Apps Script Web App
    const payload = {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Unable to send your message." },
        { status: 502 }
      );
    }

    // 8. Return success
    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch {
    // 9. Catch any unexpected network / runtime errors
    return NextResponse.json(
      { success: false, error: "Unable to send your message." },
      { status: 500 }
    );
  }
}
