import { useState } from "react"
import myMode from "./langContext"
import LanguageSelector from "./langSelector"
export default function LanguageProvider({children}) {

    const [lang, setLang] = useState('ko')
    const [theme, setTheme] = useState('night')

    return (
        <myMode.Provider value={{lang, setLang, theme, setTheme}}>
            {children}
            <LanguageSelector></LanguageSelector>
        </myMode.Provider>
    )
}   