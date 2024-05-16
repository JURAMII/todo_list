import './App.css';
import { useCallback, useReducer, useRef } from 'react';

import { Contents, Reducer } from './data';
import Create from './components/create';
import List from './components/list';


function App() {
  //data useState
  const [state, dispatch] = useReducer(Reducer,Contents)
  const {datas} = state;
  const {todo} = state.inputs;
  const userId = useRef(3);

  const CreateTodo = useCallback((todo)=>{
    dispatch({
      type: 'create',
      dic: {
        id: userId.current,
        todo
      }
    })
    userId.current++
  },[todo])

  const deleteTodo = (id) => {
    // console.log(id)
    dispatch({
      type: 'delete',
      id
    })
    // console.log(datas)
  }

  const updateTodo = (id, todo) => {
    // console.log(id,todo)
    dispatch({
      type: 'update',
      id, todo
    })
  }

  const markTodo = (id) =>{
    dispatch({
      type: 'mark',
      id
    })
  }


const currentDate = new Date();
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
};


  return (
    <div className="App">
      <div className='todo_wrap'>
      <div className='top'>
      <h2>my task</h2>
      <p>{currentDate.toLocaleDateString("en-us", options)}</p>
      </div>
      <List datas={datas} deleteTodo={deleteTodo} updateTodo={updateTodo} markTodo={markTodo}/>
      <Create CreateTodo={CreateTodo}/>
      </div>
    </div>
  );
}

export default App;
