import { Title } from './Title';
import { Board } from "./Board";
import './index.css'

const TURNS = {
  X: "X",
  O: 'O'
}

// posiciones del tablero
const board = new Array(9).fill(null);

function App() {

  return (
    <>
      <Title />
      <Board posiciones={board} />
    </>
  )


}

export default App
