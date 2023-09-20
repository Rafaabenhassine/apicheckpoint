import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const UserList = () => {
    const [users,setUsers]=useState([])
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers(res.data))
    .catch(error=>console.log(error))
    }, [])
    console.log(users)
  return (
    <div>{users.map(user=><UserCard user={user} key={user.id} />)}</div>
  )
}

export default UserList