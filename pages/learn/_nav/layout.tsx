import Header from "./header";
import type { ReactNode } from "react";


export default function Layout2({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <section className='fixed h-full w-1/4'>
          <div className='center py-4'>{children}</div>
        </section>
      </main>
    </>
  );
}
