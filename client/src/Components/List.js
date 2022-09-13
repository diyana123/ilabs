import {React,useState} from 'react';
import data from '../db.json';

function List(props) {

    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })








    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.category}</li>
            ))}
        </ul>
    )
}

export default List