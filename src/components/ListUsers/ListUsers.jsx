import { useSelector } from "react-redux";
import selector from '../../redux/selector';
import UserItem from "../UserItem/UserItem";
import './ListUsers.css';

export default function ListUsers({filters}) {
  const users = useSelector(selector.getUsers);

  const newArray = users.filter(user =>
    Object
      .keys(filters)
      .map(fil => (filters[fil]
        ? String(user[fil]).toLowerCase().includes(filters[fil].toLowerCase())
        : true
      )).every(el => el)
  )

  return (
    <ul className="list_users">
      <li className="list_item titles">
        <p>Имя Фамилия</p>
        <p className='user_age'>Возраст</p>
        <p className='user_sex'>Пол</p>
      </li>
      {newArray.length === 0 && <p className="notFound">Результатов нет</p>}
      {users && newArray.map(el => (
        <li key={el.age} className="list_item">
          <UserItem user={el} />
        </li>
      ))}
    </ul>
  );
}