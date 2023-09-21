import classes from './App.module.css'

function App() {
  const colors = ['red', 'orange', 'yellow', 'green', 'skyblue', 'navy', 'purple']

  const users = [
              {
                id:1, name: 'jhon',age: 25, vip: true
              },
              {
                id:2, name: 'jane',age: 19, vip: false
              },
              {
                id:3, name: 'alice',age: 30, vip: true
              },
              {
                id:4, name: 'bob',age: 18, vip: false
              },
              {
                id:5, name: 'charlie',age: 35, vip: true
              }
            ]
  return (
    <>
      {
        users.filter(user => user.vip).map((filteredUser, index) => <h1 key={index}>{filteredUser.name}</h1>)
      }
    </>
  );
}

export default App;
