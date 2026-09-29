import type { Metadata } from "next";
import "@/styles/globals.css";
import LenisProvider from "@/lib/lenis-provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";

export const metadata: Metadata = {
  title: {
    default: "BVM Tech Limited | Enterprise Technology, Consulting & Digital Engineering",
    template: "%s | BVM Tech Limited",
  },
  description:
    "Enterprise technology, consulting and digital engineering company in Dubai (DIFC). BVM Tech helps organizations modernize core systems, adopt AI, connect enterprise platforms, and scale technology delivery across the GCC and global markets.",

  icons: {
    // Standard browser favicon
    icon: [
      {
        url: "/images/favicon.ico",
        sizes: "any",
      },
      {
        url: "/images/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    // Apple devices / Safari
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Apple Touch Icon - iPhone / iPad */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome 6 */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Prevent browser from automatically restoring scroll position */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history){history.scrollRestoration='manual';}`,
          }}
        />
      </head>

      <body className="loading">
        <LenisProvider>
          <Preloader />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}