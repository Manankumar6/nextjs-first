import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./_components/ProtectiveRoute";
import Footer from "./_components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import StaticCallButton from "./_components/CallButton";
import Script from "next/script";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "TechCanva | Best Web Development & Digital Marketing Services in Firozabad",
  description: "TechCanva offers premium web development, MERN stack solutions, and professional video editing services in Firozabad and Agra. Elevate your brand with Elite designs.",
  keywords: ["web development Firozabad", "video editor Agra", "TechCanva", "Next.js developer India", "web designer in firozabad"],
  alternates: {
    canonical: 'https://techcanva.in',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ You can safely include meta tags or link tags here */}
        <meta name="facebook-domain-verification" content="oo82fj2ls2k40ernv1zac7errhpf20" />
          {/* ✅ Move Script outside <Head> */}
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "TechCanva",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Firozabad",
                "addressRegion": "UP",
                "addressCountry": "IN"
              },
              "url": "https://techcanva.in",
              "priceRange": "$$"
            })
          }}
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5317982228910759"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={inter.className}>
      
        {/* ✅ Use Next.js <Image /> instead of <img> */}
        <noscript>
          <Image
            src="https://www.facebook.com/tr?id=1521058109016649&ev=PageView&noscript=1"
            alt=""
            width={1}
            height={1}
            unoptimized
            style={{ display: "none" }}
          />
        </noscript>


        <AuthProvider>
          <ChakraProvider>
            <ProtectedRoute>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar />
                {children}
                <StaticCallButton />
                <Footer />
              </ThemeProvider>
            </ProtectedRoute>
          </ChakraProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

