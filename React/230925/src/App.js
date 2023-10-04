import logo from './logo.svg';
import './App.css';
import SassComponent from './SassComponent';
import styled from 'styled-components'
import { useState, useRef } from 'react';

const ColorDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color}
`
const Container = styled.div`
  max-height: 200px;
  height: 200px;
  overflow-y: scroll;
  width: 300px;

  p {
    border-bottom: 1px solid black;
  }
`

const _Input = styled.input`

`
function App() {
  const [text, setText] = useState('흰색')
  const [color, setcolor] = useState('white')
  const [backgroundColor, setBackgroundcolor] = useState('blue')

  const inputRef = useRef()
  const [todos, setTodos] = useState([])
  const [Input, setInput] = useState('')
  return (
    <div>
      {/* <ColorDiv backgroundColor={backgroundColor} color={color}>{text}</ColorDiv>
      <button onClick={() => {
        if(backgroundColor === 'blue') {
          setcolor('black')
          setBackgroundcolor('red')
          setText('검은색')
        } else {
          setcolor('white')
          setBackgroundcolor('blue')
          setText('흰색') 
        }
      }}>색상 변경</button> */}
      {/* <input ref={inputRef}/>  */}
      <_Input ref={inputRef} />
      <_Input onChange={(e) => {
        setInput(e.target.value) 
        console.log(Input)
      }} />
      <button onClick={() => {
        // useRef 용
        // const input = inputRef.current
        // setTodos(prev => [...prev, input.value])

        // onChange 용
        const input = Input
        setTodos(prev => [...prev, input])

        
      }}>Add</button>
      <Container >
        {
          todos.map((todo, index) => {
            return (
              <p key={index}>{todo}</p>
            )
          })
        }
      </Container>
    </div>
  );
}

export default App;
