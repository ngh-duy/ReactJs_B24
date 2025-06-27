import React from 'react'
import { useState } from 'react'
import data from './data.json'
export default function ListKey() {
  const [user, setUser] = useState(data);
  const renderListUser =()=>{
    return user.map((user, index) => {
          return <li key={user.id}>id: {user.id} - Name: {user.name} - age: {user.age}</li>
        })
  }
  return (
    <div>
      <h1>List User</h1>
      <ul>
        {/* {user.map((user, index) => {
          return <li key={user.id}>id: {user.id} - Name: {user.name} - age: {user.age}</li>
        })} */}
        {renderListUser()}
      </ul>

    </div>
  )
}
