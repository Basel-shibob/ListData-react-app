import ReactDOM from 'react-dom';

import style from './Modal.module.css'


const BackDrop = ({close, show}) => {
  return (
    <div className={`${style.backDrop} ${show ? style.show : null}`} onClick={close}>

    </div>
  )
}

const OverLay = ({show, children}) => { 
  return (
    <div className={`${style.overLay} ${show ? style.show : null}`}>
      {children}
    </div>
  )
}

const Modal = ({show, closeModel, children}) => {
  return (
    <>
      {
        ReactDOM.createPortal(
          <>
            <BackDrop close = {closeModel} show={show}/>,
            <OverLay  show={show}>{children}</OverLay>
          </>
          ,
          document.getElementById('modal')
        )
      }
    </>
  );
};

export default Modal