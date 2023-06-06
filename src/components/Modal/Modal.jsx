const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  return createPortal(<div>modal</div>, modalRoot);
};

export default Modal;
