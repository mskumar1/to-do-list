import React from 'react'
import { useState } from 'react';

function todo({todo, index, delTodo}) {

  const [isChecked, setIsChecked] = useState(false);


  return (
    <div className='todo'>
          <p>{todo}</p>
          <div className='action'>
            <input className='check-box' type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <button onClick={() => {
                if (isChecked) {
                  if (window.confirm("⚠️ Are you sure you want to delete this task?")) {
                    delTodo(index);
                  }
                } else {
                  alert("⚠️ Please check the box before deleting this task.");
                }
              }}
            >
              Delete
            </button>
          </div>
    </div>
  )
}

export default todo