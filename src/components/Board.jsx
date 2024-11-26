import Grogu from './Grogu';
import {useState} from "react";

function Board ( {groguPosition} ){
    
    const cells = Array(7).fill(null);
    console.log(cells);


    return (
    <section className="board">
        {cells.map((cell, index) => {
            return <div className={`cell ${groguPosition === index ? 'grogu' : ''}`} key={index}>
                {groguPosition === index && <span>👣</span>} {/*por qué span?*/}
            </div>


        }) } 

        
      </section>

    );
};


export default Board;