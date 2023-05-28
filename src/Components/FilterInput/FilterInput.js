import { useState } from 'react';
import style from './FilterInput.module.css';

const FilterInput = ({ filteration }) => {

  const [filter, setFilter] = useState('')

  const filterHandler = (e) => {
    const name = e.target.value
    setFilter(name)
    filteration(name)
  }

  return (
    <div className={style.mb}>
      <input
        className={style.input}
        type="text"
        placeholder='filter by name'
        value={filter}
        onChange={filterHandler} 
      />
    </div>
  )
}

export default FilterInput