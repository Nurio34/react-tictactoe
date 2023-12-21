
import Square from "./Square"
import { useState } from "react"
import Status from "./Status"

const Board = ({ Options}) => {


    const [squares,setSquares] = useState(Array(Options.squares).fill(null))
    const [ xIsNext, setxIsNext ] = useState(true)
    const [ status,setStatus ] = useState("X")

    const Handle_Click = (i) => {
        if(squares[i] || Calculate_Winner(squares)) return
        const newSquares = JSON.parse(JSON.stringify(squares))
        if(xIsNext) {
            newSquares[i] = "X"
            setStatus("Next Player : O")
        }else{
            newSquares[i] = "O"
            setStatus("Next Player : X")
        }
        setSquares(newSquares)
        setxIsNext(!xIsNext)
        Calculate_Winner(newSquares)
        console.log(newSquares);
    }

    function Calculate_Winner(squares) {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log(`Winner is ${squares[a]}`);
                if(xIsNext) {
                    setStatus("Winner : X")
                }
                else{
                    setStatus("Winner : O")
                }
              return squares[a];
            }
          }
          return null;
    }



  return (
    
    <>
    <Status status={status}/>
    <div 
        className="grid grid-cols-3 border-2 border-black"
        style={{
            maxWidth:`${Options.Max_Board_Width}px`
        }}
    >
        {squares.map((square,i) => (
            <Square key={i} 
                index={i}
                value={squares[i]}
                onClick={()=> Handle_Click(i)}
            />
        ))}
    </div>
    </>
    

  )
}

export default Board