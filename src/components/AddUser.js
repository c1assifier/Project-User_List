import React, { useState, useRef, useEffect } from 'react';
import { ErrorModal } from './ErrorModal';

const AddUser = ({ user, onAdd }) => {
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    bio: '',
    age: 1,
    email: '',
  });
  
  const [displayEmail, setDisplayEmail] = useState('');
  const [error, setError] = useState();

  const formRef = useRef(null);

  useEffect(() => {
    if (user) {
      setFormState({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        bio: user.bio || '',
        age: user.age || 1,
        email: user.email || '',
      });
      setDisplayEmail(user.email || '');
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age' && value < 0) return;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  const errorHandler = () => {
    setError(false)
  } // Очищаем ошибку после успешного добавления
  

  const handleSubmit = (e) => {

    e.preventDefault()
    
    // Валидация возраста
    if (formState.age <= 0) {
      setError({
        title: 'Invalid Age',
        message: 'Age must be a positive number.',
      });
      return;
    }
    

    // Валидация email
    if (!formState.email.includes('@')) {
      setError({
        title: 'Invalid Email',
        message: 'Please enter a valid email address.',
      });
      return;
    }
    

    // Сбрасываем форму
    formRef.current.reset();

    const userToAdd = { ...formState };
    if (user) {
      userToAdd.id = user.id;
    }
    onAdd(userToAdd);

    setDisplayEmail(formState.email); 

    setFormState({
      first_name: '',
      last_name: '',
      bio: '',
      age: 1,
      email: '',
    });
    
    
  };

  return (
    <div>
      {error && (
        <ErrorModal 
          onCloseModal = {errorHandler}
          title = {error.title} 
          message = {error.message} 
          
        />
      )}

      <form ref={formRef}>
        <input
          name="first_name"
          placeholder="First name"
          value={formState.first_name}
          onChange={handleChange}
        />
        <input
          name="last_name"
          placeholder="Last Name"
          value={formState.last_name}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={formState.bio}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={formState.age}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="e-mail"
          value={formState.email}
          onChange={handleChange}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
      
      {displayEmail && (
        <div>
          <p>User with email <strong>{displayEmail}</strong> was successfully added!</p>
        </div>
      )}
    </div>
  );
};

export default AddUser;
