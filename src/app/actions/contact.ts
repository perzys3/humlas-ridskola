"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactFormState | null,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("website")?.toString().trim();
  if (honeypot) {
    return { success: true };
  }

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, error: "Alla fält måste fyllas i." };
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return { success: false, error: "Meddelandet är för långt." };
  }

  if (!emailPattern.test(email)) {
    return { success: false, error: "Ange en giltig e-postadress." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      success: false,
      error: "E-post är inte konfigurerad än. Ring eller maila oss direkt.",
    };
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Humlas Ridskola <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nytt meddelande från ${name}`,
    text: [
      "Nytt meddelande via humlas.se",
      "",
      `Namn: ${name}`,
      `E-post: ${email}`,
      "",
      "Meddelande:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      error: "Kunde inte skicka meddelandet. Försök igen eller ring oss.",
    };
  }

  return { success: true };
}
