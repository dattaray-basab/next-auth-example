import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"
// import '../globals.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
