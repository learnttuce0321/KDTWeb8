import React from "react";

function Message({setColor}) {
    const clickHandler = (color) => {
        setColor(color)
    }   
    return (
        <>
            <button onClick={() => {clickHandler('blue')}}>Blue</button>
            <button onClick={() => {clickHandler('red')}}>Red</button>
        </>
    )
}

export default Message