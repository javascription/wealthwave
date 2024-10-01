"use client"

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const Provider = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider>
    )

}

export default Provider;