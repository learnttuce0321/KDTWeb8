import { useState } from 'react';

function App() {
    const [toDoInput, setTodoInput] = useState('')
  const [toDoList, setTodoList] = useState([])

  return (
    <>
      <input placeholder='할일 추가' value={toDoInput} onChange={(e) => {
        setTodoInput(e.target.value)
      }}/>
      <button onClick={() => {
        if(toDoList.length >= 10) {
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
              <li key={indexN}>
                <input type='checkbox' checked={todoItem.checked} onChange={(e) => {
                  // const index = toDoList.findIndex(item => item.toDoInput === e.target.parentNode.innerText)

                  // const tempTodoList = [...toDoList]
                  // tempTodoList[index].checked = !tempTodoList[index].checked
                  // setTodoList(tempTodoList)     

                  const tempTodoList = toDoList.map(todoItem => todoItem.toDoInput === e.target.parentNode.innerText ? {...todoItem, checked: !todoItem.checked} : {...todoItem})
                  setTodoList(tempTodoList)
                }}/>
                {todoItem.toDoInput}
              </li>
            )
          })
        }
      </ul>
      <button onClick={() => {
        const deletedList = toDoList.filter((toDoItem) => toDoItem.checked === false)

        setTodoList(deletedList)
      }}>완료된 할 일 삭제</button>
      </>
  )
}

export default App