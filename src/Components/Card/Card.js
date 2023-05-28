import style from './Card.module.css'

const Card = ({id, name, age, address, phone, delBtn, type}) => {
    return (<div
        style={{backgroundColor: type === 'girl' ? 'pink' : 'green'}}
        className={style.wrapper} 
        >
            <div>Name : {name}  </div>
            <div>Age : {age} </div>
            <div>Address : {address} </div>
            <div>Phone : {phone}</div>
            <div className={style.delbtn} onClick={(e) => delBtn(e, id)}>
                x
            </div>
        </div>
    )
}

export default Card