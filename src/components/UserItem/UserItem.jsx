
import male from '../../image/male.svg';
import female from '../../image/female.svg';
import { ageDeclination } from '../../helpers/functions';

export default function UserItem({ user }) {
  return (
    <>
      <img src={user.sex === 'm' ? male : female} alt="user avatar" />
      <p>{user.name} {user.lastname}</p>
      <p className='user_age'>{user.age} {ageDeclination(user.age)}</p>
      <p className='user_sex'>{user.sex==='m' ? "Мужской" : "Женский"}</p>
    </>
  );
}