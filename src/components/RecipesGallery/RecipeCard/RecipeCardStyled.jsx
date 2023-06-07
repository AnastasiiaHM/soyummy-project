import styled from '@emotion/styled';

export const RecipeCardStyled = styled.li`
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  .image {
    object-fit: cover;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
      -webkit-transform: scale(1);
      transform: scale(1);
      cursor: pointer;
    }
  }

  .name {
    position: absolute;
    bottom: 24px;
    left: 16px;
    background: #ffffff;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: #3e4462;
    padding: 16px 16px;
    width: 268px;
  }
`;
