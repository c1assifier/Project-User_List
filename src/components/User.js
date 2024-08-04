import React, { useState } from "react"
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser"

const User = ({ user, onDelete, onEdit }) => {
  // Используем useState для управления состоянием editForm
  const [editForm, setEditForm] = useState(false)

  // Функция для переключения состояния формы редактирования
  const toggleEditForm = () => {
    setEditForm(!editForm)
  }

  return (
    <div className="user">
      <IoCloseCircleSharp
        onClick={() => onDelete(user.id)} // Вызываем onDelete с id пользователя
        className="delete-icon"
      />
      <IoHammerSharp
        onClick={toggleEditForm} // Переключаем состояние формы редактирования
        className="edit-icon"
      />

      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <img src={user.avatar} alt="" />
      {editForm && <AddUser user={user} onAdd={onEdit} />}
    </div>
  )
}

export default User
