import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "ElisaLab",
  description: "ElisaLab - помошник в лабораторной диагностике",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
