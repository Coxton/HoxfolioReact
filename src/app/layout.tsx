import Header from "../components/Header/Header"
import "./globals.scss"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        
        <body>
            <Header />
            {children}
        </body>
    </html>
  )
}