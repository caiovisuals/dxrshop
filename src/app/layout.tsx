import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "DXRSHOP",
    description: "DXRSHOP",
}

export default function Layout({children,}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="pt-br">
            <body className="flex flex-col">
                {children}
            </body>
        </html>
    )
}