import { Geist, Geist_Mono } from "next/font/google";
import '../public/globals.css';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BRAHMS_INTERIOR – Luxury & Modern Interior Design",
  description:
    "BRAHMS_INTERIOR specializes in premium hotel, supermarket, office, and home furniture & furnishings. We offer expert interior design services, custom furniture, home styling, modular kitchen design, and office interior solutions.",
  keywords:
    "hotel furniture, supermarket furnishings, office interior design, home decor, custom furniture, modular kitchen, luxury interiors, space planning, home renovation, modern decor, bespoke furniture, sustainable design",
  openGraph: {
    title: "BRAHMS_INTERIOR – Premium Interior Design & Furnishings",
    description:
      "Transform your space with luxury furniture, modern home decor, and custom interior design solutions. Explore elegant home and office interiors by BRAHMS_INTERIOR.",
    url: "https://brahmsinterior.com/",
    siteName: "brahmsinterior",
    images: [
      {
        url: "https://brahmsinterior.com/images/featured-image.webp",
        width: 1200,
        height: 630,
        alt: "BRAHMS_INTERIOR featured image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAHMS_INTERIOR – Luxury & Modern Interior Design",
    description:
      "Transform your space with high-end furniture, modern decor, and expert interior design solutions.",
    images: ["https://brahmsinterior.com/images/featured-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.webp" type="image/webp" />

        <script async src="/analytics.js"></script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script src="/heavy-script.js" defer></script>
      </body>
    </html>
  );
}