import { ReactNode } from "react";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>hi</h1>

      <main className="flex-1">
        {children}
      </main>

      <h1>hello</h1>
    </>
  );
}