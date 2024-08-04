import User from "./User"

const Users = ({ users, onEdit, onDelete }) => {
  // Проверяем, есть ли пользователи в списке
  if (users.length > 0) {
    return (
      <div>
        {users.map((el) => (
          <User
            onEdit={onEdit}
            onDelete={onDelete}
            key={el.id}
            user={el}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div className="user">
        <h3>Пользователей нет</h3>
      </div>
    )
  }
}

export default Users
