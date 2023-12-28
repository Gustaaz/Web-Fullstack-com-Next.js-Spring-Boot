import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Breadcrumb, Footer, Header, Sidebar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gustavo G',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex h-screen w-screen overflow-hidden">
          <section>
            <Sidebar />
          </section>

          <section className="flex flex-1 flex-col pl-16">
            <Header />

            <div className="flex flex-1 flex-col overflow-y-scroll bg-[#f5f5f5]">
              <div className="pt-4 md:p-4">
                <Breadcrumb />

                <div className="mx-auto min-h-[85vh] ">
                  <div className="px-2 w-full h-full">{children}</div>
                </div>
              </div>

              <Footer />
            </div>
          </section>
        </div>
      </body>
    </html>
  )
}
