import React from "react"
import { useState } from 'react'
import './style.css'
import comp_button from "./CompButton"

const Content = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="content_main">
            <div className="buttons">
                <comp_button onClick={() => setCount((count) => count + 1)}>
                    счетчик равен {count}
                </comp_button>
                <br/>
                <comp_button onClick={() => alert("Hello world")}>
                    вывод alert
                </comp_button>
            </div>
        </div>
    )
}
export default Content