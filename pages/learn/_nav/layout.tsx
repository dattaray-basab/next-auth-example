import Header2 from "./header"
import type { ReactNode } from "react"

export default function Layout2({ children }: { children: ReactNode }) {
  return (
    <>
      <Header2 />
      <main>{children}</main>
    </>
  );
}
