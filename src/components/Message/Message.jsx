import { MessageStyled } from './Message.styled';
import { IoWarningOutline } from 'react-icons/io5';

const Message = ({ children }) => {
  return (
    <MessageStyled>
      <div>
        <IoWarningOutline />
        {children}
      </div>
    </MessageStyled>
  );
};

export default Message;
