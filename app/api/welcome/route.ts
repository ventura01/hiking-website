import { NextResponse } from "next/server";
import Welcome from "@/app/emails/Welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_KEY);

export async function GET() {
  try {
    const data = await resend.sendEmail({
      from: "onboarding@resend.dev",
      to: "rventu@gmail.com",
      subject: "Welcome to The Hiking Company",
      react: Welcome(), //({ firstName: "John", product: "Resend" })
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
