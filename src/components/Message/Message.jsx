import { MessageStyled } from './Message.styled';

const Message = ({ children }) => {
  return (
    <MessageStyled>
      <p>{children} *</p>
    </MessageStyled>
  );
};

export default Message;
