import React, { useEffect, useState } from "react";

function UserTodos({user}) {
  
  const [userId, setUserId] = useState(null);
  const [toDos, setToDos] = useState([]);
  
  const handleClick = (userId) => {
    setUserId(userId)
  }
  
  useEffect(() => {
    if(userId){
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then(setToDos)
      .catch((error) => {
        console.log(error);
      });
    }
  }, [userId]);
  
  return(
    <div>
      <h4 onClick={() => handleClick(user.id)}>{user.name}</h4>
      {toDos.map((toDo) => (
        <div>{toDo.title}</div>
      ))}
    </div>
  )
}

export default UserTodos;
