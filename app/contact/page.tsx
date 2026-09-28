import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Start a Project | BVM Tech Limited UAE",
  description:
    "Share your project vision. We sign mutual NDAs upfront and deliver fixed-price technical proposals within 24 business hours from our Dubai headquarter.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
