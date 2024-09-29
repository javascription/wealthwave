"use client"

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const Provider = ({children}) => {
    return (
        <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}

export default Provider;