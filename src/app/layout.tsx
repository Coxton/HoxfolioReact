import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "./globals.scss"
import StarField from "../components/Starfield/StarField"




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