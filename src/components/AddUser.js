import React, { useState, useRef, useEffect } from 'react'

const AddUser = ({ user, onAdd }) => {
  // Используем useState для управления состоянием формы и отображением email
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    age: 1,
    email: '',
  })
  const [displayEmail, setDisplayEmail] = useState('') // Состояние для отображения email

  // Создаем ссылку на форму с помощью useRef
  const formRef = useRef(null)

  // Используем useEffect для заполнения формы данными пользователя при загрузке компонента или изменении пользователя
  useEffect(() => {
    if (user) {
      setFormState({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        bio: user.bio || '',
        age: user.age || 1,
        email: user.email || '', // Заполняем email
      });
      setDisplayEmail(user.email || '') // Устанавливаем отображение email
    }
  }, [user]) // Массив зависимостей содержит user, чтобы эффект срабатывал при изменении пользователя

  // Функция для обработки изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'age' && value < 0) return
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  // Функция для обработки отправки формы
  const handleSubmit = () => {
    // Сбрасываем форму
    formRef.current.reset()

    // Создаем объект пользователя на основе состояния формы
    const userToAdd = { ...formState } //spread
    if (user) {
      userToAdd.id = user.id// Если пользователь существует, добавляем его id
    }
    onAdd(userToAdd) // Вызываем функцию onAdd, передавая нового пользователя

    // Устанавливаем отображаемый email
    setDisplayEmail(formState.email)

    // Сбрасываем состояние формы
    setFormState({
      first_name: '',
      last_name: '',
      bio: '',
      age: 1,
      email: '',
    })
  }

  return (
    <div>
      <form ref={formRef}>
        <input
          name="first_name"
          placeholder="First name"
          value={formState.first_name} 
          onChange={handleChange} // Обрабатываем изменение поля
        />
        <input
          name="last_name"
          placeholder="Last Name"
          value={formState.last_name}
          onChange={handleChange} // Обрабатываем изменение поля
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={formState.bio}
          onChange={handleChange} // Обрабатываем изменение текстовой области
        />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={formState.age}
          onChange={handleChange} // Обрабатываем изменение поля
        />
        <input
          name="email"
          placeholder="e-mail"
          value={formState.email}
          onChange={handleChange} // Обрабатываем изменение поля
        />
        <button type="button" onClick={handleSubmit}>Add</button>
      </form>
      <div>
      </div>
    </div>
  )
}

export default AddUser
