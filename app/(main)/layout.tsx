import { Header } from "@/components/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex relative flex-col gap-6">
      <Header />
      <main className="flex flex-col w-full p-4 max-w-5xl mx-auto gap-6">
        {children}
      </main>
    </div>
  );
}
