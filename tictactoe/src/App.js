
import React from "react"
import Board from "./Components/Board";


function App() {

  const Options = {
    squares : 9,
    Max_Board_Width : 750,
  }

  return (

    <div className=" min-h-screen grid items-center grid-cols-1">

      <Board 
        Options={Options}
      />
    </div>

  );
}

export default App;
