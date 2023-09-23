import './App.css';
import PostList from './PostList';
import {useState, useCallback} from 'react'

function App() {

  const [toggle, setToggle] = useState(true)
  const [text, setText] = useState('')

  const cb = useCallback(() => {
    console.log(text)
  }, [text])
  return (
    // <div className="App">
    //   <header>
    //     <h1>PostList</h1>
    //   </header>
    //   {
    //     toggle? <PostList /> : null
    //   }
    //   <button onClick={() => {
    //     setToggle(false)
    //   }}>해제</button>
    // </div>
    <div>
      <button onClick={() => {
        cb()
      }}>component1</button>
      <button onClick={() => {
        cb()
      }}>component2</button>
      <button onClick={() => {
        setText('1')
      }}>component3</button>
    </div>
  );
}

export default App;
