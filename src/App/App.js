import './App.css';
import { CardList, FilterInput, Modal, Button, AddUser } from '../Components/index'
import { useState } from 'react';

function App() {
  const [clickToggle, setClickToggel] = useState(true);
  const [filter, setFilter] = useState("")
  const [modal, setModal] = useState(false)
  const [state, setState] = useState([
    {
      id: 1,
      name: 'john',
      age: '36',
      address: 'nag hmady',
      phone: '0987654321',
      type: 'boy'
    },
    {
      id: 2,
      name: 'basel',
      age: '23',
      address: 'qane',
      phone: '0901142551',
      type: 'boy'
    },
    {
      id: 3,
      name: 'omar',
      age: '19',
      address: 'new jearsy',
      phone: '0945213721',
      type: 'boy'
    },
    {
      id: 4,
      name: 'farah',
      age: '22',
      address: 'cairo',
      phone: '09875345211',
      type: 'girl'
    },
    {
      id: 5,
      name: 'sbaa',
      age: '15',
      address: 'paric',
      phone: '05674255677',
      type: 'girl'
    },
    {
      id: 6,
      name: 'alaa',
      age: '19',
      address: 'london',
      phone: '01224587331',
      type: 'girl'
    }

  ]);

  const addNewUserHandller = (data) => {
    setState([...state, data])  
  };

  const handleDelete = (e, selectedId) => {
    const deleteOberation = state.filter(el => el.id !== selectedId)
    setState(deleteOberation)
  }

  const filterNames = (name) => {
    setFilter(name)
  }

  const nameHandler = () => {
    if (filter.length !== 0) {
      return state.filter(el => el.name.includes(filter))
    }
    return state
  }

  return (
    <>
      <div className="App">
        <h1>List of Data</h1>

        <div style={{ display: 'flex' }}>
          <Button onClick={() => setClickToggel(!clickToggle)}>
            {clickToggle ? 'Hide' : 'Show'}
          </Button>

          <Button onClick={() => setModal(true)}>
            New Record
          </Button>
        </div>

        <FilterInput filteration={filterNames} />
        <div className={clickToggle ? 'show' : 'hide'}>
          <CardList
            datalist={nameHandler()}
            delBtn={handleDelete}
          />
        </div>
      </div>
      <Modal show={modal} closeModel = {() => setModal(false)} >
        <AddUser 
          addNewUserHandller={addNewUserHandller}
          closeModel = {() => setModal(false)}
         />
      </Modal>  
    </>

  );
}

export default App;
