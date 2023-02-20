import Header from "./header";
import type { ReactNode } from "react";

export default function Layout2({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
