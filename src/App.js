import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import operation from './redux/operation';

import Filters from "./components/Filters/Filters";
import ListUsers from "./components/ListUsers/ListUsers";

const defaultFilters = {
  name: '',
  lastname: '',
  age: '',
  sex:'',
}

function App() {
  const [filters, setFilters] = useState(defaultFilters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.getUsers());
  },[])

  const handleFilterChange = event => {
    const { name, value } = event.target;
    const alreadyChecked = filters[name] === event.target.value;
    const isSexField = name === 'sex';
    if (isSexField && alreadyChecked) {
      event.target.checked = false;
    }
    setFilters(prevState => ({
      ...prevState,
      [name]: isSexField && alreadyChecked ? '' : value
    }))
  };
  
  const handleResetForm = () => setFilters(defaultFilters);


  return (
    <div className="App">
      <Filters
        handleResetForm={handleResetForm}
        handleFilterChange={handleFilterChange}
        filters={filters}
      />
      <ListUsers filters={filters}/>
    </div>
  );
}

export default App;
