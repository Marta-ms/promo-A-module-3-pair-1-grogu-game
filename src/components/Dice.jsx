import "../scss/App.scss";


function Dice() {

    return (
    <div>
        <button className="dice" onClick={rollDice} >🎲</button>
    </div>
    
    )
}

export default Dice;