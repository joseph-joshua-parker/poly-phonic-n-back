import useGameEngine from "../hooks/useGameEngine";

const GameScreen = ()=>{
    const {setGuess, chooseToken} = useGameEngine();
    const handleGuess = (answer:string)=>{
        setGuess(answer)
        chooseToken();
    }

    return (
        <div>
            <button onClick={()=>handleGuess('yes')} className="button is-large">Yes</button>
            <button onClick={()=>handleGuess('no')} className="button is-large">No</button>
        </div>
    )
}

export default GameScreen;