import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Scrap Hub - Second Hand Spare Parts Marketplace",
  description: "Buy and sell second-hand car scrap parts easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
