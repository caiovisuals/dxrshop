import type { Metadata } from "next"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ptBR } from "@clerk/localizations"

export const metadata: Metadata = {
    title: "DXRSHOP",
    description: "DXRSHOP",
}

export default function Layout({children,}: Readonly<{children: React.ReactNode}>) {
    return (
        <ClerkProvider localization={ptBR}>
            <html lang="pt-br">
                <body className="flex flex-col">
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}