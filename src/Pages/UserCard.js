import React from 'react'

const UserCard = ({user}) => {
  return (
    
        <div>
          <h4>Name:{user.name}</h4>
          <h4>Username:{user.username}</h4>
          <h4>Email:{user.email}</h4>
          <h4>Adress:{user.adress}</h4>
        </div>
    
  )
}


export default UserCard