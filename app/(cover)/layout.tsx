import React from "react";
import Header from "@/components/core/header";
import Footer from "@/components/core/footer";

export default async function CoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Header />
      <div className="flex-grow flex items-center justify-center w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
}
