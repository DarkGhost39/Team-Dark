import type { Metadata } from "next";
import ContactPage from "@/components/sections/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call, WhatsApp us, or send a message. Team Dark responds within 2 hours.",
};

export default function Contact() {
  return <ContactPage />;
}
