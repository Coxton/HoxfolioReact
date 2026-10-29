import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import StarField from "../components/Starfield/StarField"

import "./globals.scss"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Hoxton | Portfolio",
    description: "My personal developer portfolio.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        
        <body>
            <StarField />
            <Header />
            {children}
            <Footer />
        </body>
    </html>
  )
}