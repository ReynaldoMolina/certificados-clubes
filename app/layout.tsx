import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Certificados de investidura para clubes adventistas",
  description:
    "Crea certificados de investidura para Aventureros, Conquistadores o Guías Mayores. Genera un PDF listo para imprimir.",
  verification: {
    google: "y2XmurUXOKuCqgKtQ5ICqHkFb-zHVlKVxBKUSiB519U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex relative flex-col gap-6">
            <Header />
            <main className="flex flex-col w-full p-4 max-w-5xl mx-auto gap-6 mb-12">
              {children}
            </main>
          </div>
          <Toaster closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
