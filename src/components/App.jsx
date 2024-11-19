//import { useState } from 'react'
import Header from './Header';
import Board from "./Board";
import "../scss/App.scss";
import {useState} from "react";
//import groguImg from "../images/grogu.jpg";

function App() {
  const [randomNumber, setRandomNumber] = useState ("Lanzar dado");
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() *4) +1; //genera un número aleatorio entre 1 y 4
    setRandomNumber(randomNumber);

  };
  return (
    <>
    
    <main className="page">
      
      <Header />
      <Board />
      
  
      <section>
        <button className="dice" onClick={rollDice} >{randomNumber}</button>
        <div className="game-status">En curso</div>
      </section>

      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>

    </>

  )

  





}

//Pasos 
/* Cuando la usuaria haga click en lanzar dado
 - generar número aleatorio entre 1 y 4
 - si es 4 --> grogu avanza 1 casilla 
      y si  es 1 -->quitar una galleta
      si es 2 --> quitar una huevo
      si es 3 --> quitar una rana
- Saber en qué posición se encuentra el grogu o mercancias 
   - Mostrar en pantalla el estado del juego
      -si grogu avanza --> mostrar mesanje  "Grogu ha avanzado"
      -si se quita una galleta --> mostrar mensaje "Se ha quitado una galleta"
      -si se quita un huevo --> mostrar mensaje "Se ha quitado un huevo"
      -si se quita una rana --> mostrar mensaje "Se ha quitado una rana"


      */




export default App
