import { createContext } from 'react'

const myMode = createContext({
    lang: 'ko',
    setLang: () => {},
    theme: '',
    setTheme: () => {}
})

export default myMode