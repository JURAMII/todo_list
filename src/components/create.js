import { useState } from 'react';
import '../App.css';
import { Add } from '../assets/img/img';

const Create = ({CreateTodo})=>{

    const [inputs, setInputs] = useState({
        todo:'',
    })

    const {todo} = inputs

    function newTodo(e){
        const {name,value} = e.target
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    function createBtn(){
        
        CreateTodo(todo)
        setInputs({
            todo: ''
        })
    }
  
  return (
    <div className='create_wrap'>
        <input type="text" name='todo' value={todo} onChange={newTodo}/>
        <span onClick={createBtn} className='addBtn'><img src={Add} alt="추가" /></span>
    </div>
  );
}

export default Create;
