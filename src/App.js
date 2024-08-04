import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'
import axios from 'axios'

const baseUrl = "https://reqres.in/api/users?page=1"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setUsers(res.data.data)
    })
  }, [])

  const addUser = (user) => {
    const id = users.length + 1
    setUsers([...users, { id, ...user }])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((el) => el.id !== id))
  }

  const editUser = (user) => {
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u))
    setUsers(updatedUsers)
  }

  return (
    <div>
      <Header />
      <main>
        <Users users={users} onEdit={editUser} onDelete={deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={addUser} />
      </aside>
    </div>
  )
}

export default App
