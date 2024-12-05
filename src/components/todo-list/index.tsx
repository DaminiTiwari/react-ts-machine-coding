import React, { useEffect, useState } from 'react'

const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([{
        item : "first",
        completed: false,

    }]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value);
        setInputValue(e.target.value)

    }

    const handleAddList =()=>{
        setTodoList(prev => [...prev,{
            item: inputValue,
            completed:false
        }]);
        setInputValue("")
    }
    
  return (
    <div>
        <div>
            <input type='text' 
             value={inputValue}
             onChange={(e) => onChangeHandler(e)}  />
            <button onClick={handleAddList}>Add</button>
        </div>
        {todoList?.map((todo, index)=>{
            return (
                <div key={index}>{
                todo?.item}</div>
            )
        })}</div>
  )
}

export default ToDo;