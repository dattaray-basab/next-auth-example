import Header2 from "./header2"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header2 />
      <main>{children}</main>
    </>
  );
}
