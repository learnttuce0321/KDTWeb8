import './App.css';
import { useState } from 'react';
function App() {
  
  const [board, setBoard] = useState([])
  const [filteredBoard, setFilteredBoard] = useState([])
  const [isFiltering, setIsFiltering] = useState(false)
  const [visible, setVisible ] = useState(true)

  const [toDoInput, setTodoInput] = useState('')
  const [toDoList, setTodoList] = useState([])

  console.log(toDoList)
  return (
    <>
      <input placeholder='할일 추가' value={toDoInput} onChange={(e) => {
        setTodoInput(e.target.value)
      }}/>
      <button onClick={() => {
        if(toDoInput.length >= 10) {
          alert('할게 너무 많아요!')
          return
        }

        setTodoList(prev => [...prev, {toDoInput, checked: false}])
        setTodoInput('')
      }}>추가</button>

      <ul>
        {
          toDoList.map((todoItem, indexN) => {
            return(
              <li key={indexN}><input type='checkbox' onChange={(e) => {
                const index = toDoList.findIndex(item => item.toDoInput === e.target.parentNode.innerText)

                const tempTodoList = toDoList
                tempTodoList[index].checked = !tempTodoList[index].checked
                setTodoList(tempTodoList)     
              }}/>{todoItem.toDoInput}</li>
            )
          })
        }
      </ul>
      <button onClick={() => {
        const deletedList = toDoList.filter((toDoItem) => toDoItem.checked === false)

        setTodoList(deletedList)
      }}>완료된 할 일 삭제</button>
      {/* {
        visible ? <h1>사라져라 얍!</h1> : <h1 style={{visibility: 'hidden'}}>사라져라 얍!</h1>
      }
      <button onClick={() => {
        setVisible(prev => !prev)
      }}>사라지기</button> */}
      {/* <fieldset>
        <label>작성자</label>
        <input placeholder='작성자' id='id'></input>
        <label>제목</label>
        <input placeholder='제목' id='title'></input>
        <button onClick={() => {
          const writer = document.getElementById('id').value
          const title = document.getElementById('title').value

          setBoard(prev => [...prev, {writer, title}])
        }}>작성</button>
      </fieldset>

      <br />

      <div>
        <select id="standard">
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>

      <input placeholder='검색' id="word"></input>
      
      <button onClick={() => {
        const standard = document.querySelector('#standard').value
        const word = document.querySelector('#word').value

        setIsFiltering(true)

        let filteredList

        if(standard === '작성자') {
          filteredList = board.filter(item => item.writer.includes(word))
        } else {
          filteredList = board.filter(item => item.title.includes(word))
        }

        setFilteredBoard(filteredList)
      }}>검색</button>
      <button onClick={() => {
        setIsFiltering(false)
      }}>전체</button>
      </div>
      
      <table border={1}>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>

        {
          !isFiltering ? (
            board.map((item, index) => {
              return (
                <>
                  <tr key={index+1}>
                    <td >{index}</td>
                    <td >{item.title}</td>
                    <td >{item.writer}</td>
                  </tr>
                </>
              )
            })
          ) : (
            filteredBoard.map((item, index) => {
              return (
                <>
                  <tr key={index+1}>
                    <td>{index}</td>
                    <td>{item.title}</td>
                    <td>{item.writer}</td>
                  </tr>
                </>
              )
            })
          )
        }
      </table> */}
    </>
  );
}

export default App;
