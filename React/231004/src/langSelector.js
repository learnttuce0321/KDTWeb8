import { useContext } from "react";
import myMode from "./langContext";

export default function LanguageSelector() {
    const value = useContext(myMode)
    const h1Style = {
        backgroundColor: value.theme === 'night' ? 'black' : 'white',
        color: value.theme === 'night' ? 'white' : 'black'
    }
    return (
        <>
            <h1 style={h1Style}>{value.lang}</h1>
            <button onClick={() => {
                if(value.lang === 'ko') {
                    value.setLang('en')
                } else {
                    value.setLang('ko')
                }
            }}>언어 바꾸기</button>
            <button onClick={() => {
                if(value.theme === 'night') {
                    value.setTheme('day')
                } else {
                    value.setTheme('night')
                }
            }}>테마 바꾸기</button>
        </>
    )
}