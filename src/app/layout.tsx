import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Football Club",
  description: "Football club line up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
