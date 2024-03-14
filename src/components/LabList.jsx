import React from "react"
import './style.css'

const LabList = () =>{
    return(
        <div className="labslist_main">
            <h2>Список лабораторных работ</h2>
            <ul>
                <li><a href='#lab1'>Лабораторная 1</a></li>
                <li><a href='#lab2'>Лабораторная 2</a></li>
                <li><a href='#lab3'>Лабораторная 3</a></li>
                <li><a href='#lab4'>Лабораторная 4</a></li>
                <li><a href='#lab5'>Лабораторная 5</a></li>
            </ul>
        </div>
    )
}
export default LabList