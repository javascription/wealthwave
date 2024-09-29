'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons/faCloudBolt';

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() =>  setMounted(true), [])

    if (!mounted) return (
        <button className="text-xl mo:text-[2.3rem]"><FontAwesomeIcon icon={faCloudBolt} /></button>
    )
    
    if (theme === 'dark') {
        return <button className="text-xl mo:text-[2.3rem]" ><FontAwesomeIcon icon={faMoon} onClick={() => setTheme('light')} /></button>
    }

    if (theme === 'light') {
        return <button className="text-xl mo:text-[2.3rem]"><FontAwesomeIcon icon={faSun} onClick={() => setTheme('dark')} /></button>
    }

}