import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10)
});

export async function POST(req: Request) {
  try {
    const json = await req.json();

    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data." },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message } = parsed.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@gneinfra.com",
      replyTo: email,
      subject: `New Website Inquiry - ${name}`,
      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}