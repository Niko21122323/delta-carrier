import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, message } = body;

    // Configure your transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or "Outlook", "Yahoo", or custom SMTP
      auth: {
        user: process.env.EMAIL_EMAIL, // your email
        pass: process.env.EMAIL_PASSWORD, // your app password
      },
    });

    // Send the mail
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_EMAIL}>`,
      to: "nikola211223232529321@gmail.com", // where you want to receive submissions
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
