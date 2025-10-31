import React, { useState } from 'react'
import { Themes } from './components/Themes/Themes'
import useLocalStorage from 'use-local-storage'
import './App.sass'

export const App = () => {

    const [isDark, setIsDark] = useLocalStorage("isDark", false)

    return (
        <div className='App' data-theme={isDark ? "dark" : "light"}>
            <Themes isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
            <h1 className='title'>Hello World!</h1>
            <div className='box'>
                <h2>This is a box</h2>
            </div>
        </div>
    )
}
