import style from './Form.module.css';

const Button = (props) => {
    return (
        <button
            type={`${props.type ? props.type : 'button'}`}
            onClick={props.onClick}
            className={style.button}
        >
            {props.children}
        </button>
    )

}

export default Button;