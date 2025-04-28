import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";

import Loading from "@/components/loading";
import { Toaster } from "@/components/ui/sonner";

import { CartProvider } from "./[slug]/menu/contexts/cart";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FoodHub | Delivery de Comida Online",
  description: "Plataforma profissional de delivery de comida desenvolvida com React, Next.js e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CartProvider>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </CartProvider>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}