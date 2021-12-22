import './Filters.css';

export default function Filters({ handleFilterChange, filters, handleResetForm }) {

  
  
  return (
    <div className="filters_container">
      <input
        onChange={handleFilterChange}
        type="text" name="name"
        value={filters.name}
        autoComplete="off"
        placeholder='Имя'
      />
      <input
        onChange={handleFilterChange}
        type="text" name="lastname"
        value={filters.lastname}
        autoComplete="off"
        placeholder='Фамилия'
      />
      <input
        onChange={handleFilterChange}
        type="number"
        name="age"
        value={filters.age}
        autoComplete="off"
        placeholder='Возраст'
      />
      
      <input
        id="male"
        onChange={() => { }}
        onClick={handleFilterChange}
        type="radio"
        name="sex"
        value="m"
        checked={filters.sex === "m"}
      />
      <label htmlFor="male">Мужчина</label>

      <input
        id="female"
        onChange={() => { }}
        onClick={handleFilterChange}
        type="radio"
        name="sex"
        value="f"
        checked={filters.sex === "f"}
      />
      <label htmlFor="female">Женщина</label>

      <button onClick={handleResetForm}>Сбросить</button>
    </div>
  );
}