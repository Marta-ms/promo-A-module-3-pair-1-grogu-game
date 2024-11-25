import Grogu from './Grogu';
import {useState} from "react";

function Board (){
    
    Array(7).fill(null);
    console.log(Array(7).fill(null));


    return (
    <section className="board">
        {Array(7).fill(null).map((cell, index) => {
            return <div className="cell" key={index}>

            </div>


        }) } 

        
      </section>

    )
}


export default Board;