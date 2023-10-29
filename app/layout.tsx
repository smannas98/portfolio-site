import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "../components/TopNav"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  const profileImage = {
    imgSrc: "https://placehold.co/120x120",
    imgText: "profile picture",
  };

  const navList = [{
    buttonUrl: "/About",
    buttonSlug: "About Me",
  }, {
    buttonUrl: "/Projects",
    buttonSlug: "Projects",
  }, {
    buttonUrl: "/Contact",
    buttonSlug: "Contact Me",
  }];
  return (
    <html lang="en" className="min-h-vh sm:h-full">
      <body className={`${inter.className} min-h-vh sm:h-full`}>
        <main className="h-full">
          {/* separate out Nav as separate component */}
          <TopNav
            buttonProps={navList}
            imageProps={profileImage}
          />
          <section className="flex flex-grow h-full">
            {/* Social links sidebar; separate out as separate component; also separate out each link as component with image prop */}
            <div className="min-w-[120px] bg-slate-600">Social Links</div>
            <div className="p-4 bg-gradient-to-br from-sky-900 via-sky-700 to-sky-500 navBorder">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
