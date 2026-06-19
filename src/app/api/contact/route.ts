import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: "1128aastha@gmail.com",
    replyTo: email,
    subject: `New enquiry from ${name} — Portfolio`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1C1917;">
        <p style="font-size: 11px; letter-spacing: 0.3em; color: #C4A882; text-transform: uppercase; margin-bottom: 24px;">Portfolio Contact Form</p>
        <h2 style="font-weight: 300; font-size: 24px; margin-bottom: 24px;">New message from ${name}</h2>
        <hr style="border: none; border-top: 1px solid #E2DDD5; margin-bottom: 24px;" />
        <p style="font-size: 13px; color: #78716C; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.15em;">From</p>
        <p style="font-size: 15px; margin-bottom: 20px;">${name} &lt;<a href="mailto:${email}" style="color: #C4A882;">${email}</a>&gt;</p>
        <p style="font-size: 13px; color: #78716C; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.15em;">Message</p>
        <p style="font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #E2DDD5; margin-top: 32px; margin-bottom: 16px;" />
        <p style="font-size: 11px; color: #78716C;">Sent via aasthasharma.in — reply directly to this email to respond.</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
