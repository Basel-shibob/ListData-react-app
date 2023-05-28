import { useState } from 'react'
import { Form, Button } from '../index'

const AddUser = ({addNewUserHandller , closeModel}) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        address: '',
        phone: '',
        type: '',
    })

    const resetButton = () => {
        setInput({
            name: '',
            age: '',
            address: '',
            phone: '',
            type: '',
        })
    }

    const onSubmitHandelr = (e) => {
        e.preventDefault()
        console.log(input.name, input.age, input.address, input.phone)
        addNewUserHandller({
            id: Math.round(Math.random() * 100),
            name: input.name,
            age: input.age,
            address: input.address,
            phone: input.phone,
            type: input.type,
        })
        setInput({
            name: '',
            age: '',
            address: '',
            phone: '',
            type: '',
        })
        closeModel()
    }

    const inputHandler = (e) => {
        const key = e.target.id
        const value = e.target.value
        setInput({ ...input, [key]: value })
    }

    return (
        <Form onSubmit={onSubmitHandelr}>
            <Form.Controller>
                <label htmlFor='name'>Name :</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className='input'
                    value={input.name}
                    onChange={inputHandler}
                    required
                />
            </Form.Controller>

            <Form.Controller>
                <label htmlFor='age'>Age :</label>
                <input
                    type="text"
                    id="age"
                    placeholder="Enter Age"
                    className='input'
                    value={input.age}
                    onChange={inputHandler}
                    required
                />
            </Form.Controller>

            <Form.Controller>
                <label htmlFor='address'>Address :</label>
                <input
                    type="text"
                    id="address"
                    placeholder="Enter Address"
                    className='input'
                    value={input.address}
                    onChange={inputHandler}
                    required
                />
            </Form.Controller>

            <Form.Controller>
                <label htmlFor='phone'>Phone :</label>
                <input
                    type="text"
                    id="phone"
                    placeholder="Enter Phone"
                    className='input'
                    value={input.phone}
                    onChange={inputHandler}
                    required
                />
            </Form.Controller>

            <Form.Controller>
                <label htmlFor='type'>Type :</label>
                <input
                    type="text"
                    id="type"
                    placeholder="Enter type"
                    className='input'
                    value={input.type}
                    onChange={inputHandler}
                    required
                />
            </Form.Controller>

            <div style={{ marginTop: '20px' }}>
                <Button type='submit'>Save</Button>
                <Button type='reset' onClick={resetButton}>Reset</Button>
            </div>

        </Form>
    );
}

export default AddUser;