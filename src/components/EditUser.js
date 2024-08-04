
const EditUser = ({ user, onEdit }) => {
  const handleEdit = () => {
    onEdit(user)
  }

  return <button onClick={handleEdit}>Edit</button>
}

export default EditUser
