import React, { PropsWithChildren } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="h-full dark:bg-[#1F1F1F]">
        <Navbar />
        <main className="h-full pt-10">
          {children}
        </main>
        <Footer />
      </div>
    );
}

export default MarketingLayout;