"use client"

import { ThemeProvider } from 'next-themes'

const Provider = ({children}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
            {children}
        </ThemeProvider>
    )

}

export default Provider;