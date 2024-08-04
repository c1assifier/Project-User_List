const DeleteUser = ({ id, onDelete }) => {
    
  const handleDelete = () => {
    onDelete(id)
  }

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteUser
