import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL('https://herotime.com'), // Replace with your actual domain
  title: "Avengers: Doomsday - The Countdown | HeroTime",
  description: "Join the Avengers: Doomsday community countdown to December 18, 2026. Connect with fans worldwide, share your favorite heroes, vote in polls, and track the global fan movement on our interactive world map.",
  keywords: "Avengers Doomsday, Avengers, doomsday countdown, December 18 2026, fan community, world map, superhero fans, Marvel fans, countdown timer",
  authors: [{ name: "HeroTime" }],
  creator: "HeroTime",
  publisher: "HeroTime",
  robots: "index, follow",
  openGraph: {
    title: "Avengers: Doomsday - The Countdown",
    description: "Join thousands of fans counting down to December 18, 2026. Register, vote, and see your location on our global fan map.",
    url: "https://herotime.com",
    siteName: "HeroTime - Avengers: Doomsday",
    images: [
      {
        url: "/og-image.png", // Create this image later
        width: 1200,
        height: 630,
        alt: "Avengers: Doomsday Countdown",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avengers: Doomsday - The Countdown",
    description: "Join the global countdown to December 18, 2026. Track fans worldwide!",
    images: ["/og-image.png"], // Create this image later
    creator: "@herotime", // Replace with actual Twitter handle
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4ade80",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script - Add your publisher ID when ready */}
        {/* 
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
        */}
      </head>
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
