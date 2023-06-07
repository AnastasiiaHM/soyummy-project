import styled from '@emotion/styled';

export const RecipeTitle = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 44px;
    text-align: center;
    letter-spacing: -0.02em;

    color: #8BAA36;

    margin-top: 113px;
`;

export const RecipeText = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    text-align: center;
    letter-spacing: -0.02em;

    color: #23262A;
    
    width: 656px;
    height: 72px;
    margin: 0 auto;
    margin-top: 30px;
`;

export const RecipeTiming = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    gap: 10px;
    color: rgba(35, 38, 42, 1);
`;

export const RecipeIngContainer = styled.div`
    width: 1240px;
    margin: 0 auto;
    margin-top: 50px;
`

export const RecipeIngTable = styled.div`
    display: flex;
    height: 60px;
    left: 0px;
    right: 0px;
    top: 0px;

    background: #8BAA36;
    border-radius: 8px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;
    letter-spacing: 0.03em;

    color: #FAFAFA;

    margin-bottom: 50px

`

export const IngTable = styled.div`
    display: flex;
    margin-left: 761px;
`

export const IngText = styled.p`
    margin-right: 109px;
`

export const RecipeIngText = styled.p`
    margin-left: 40px;
`

export const IngItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 32px;
    isolation: isolate;

    height: 182px;

    background: #EBF3D4;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 24px;
`

export const IngItemName = styled.div`
    display: flex;
    flex-direction: row;
    gap: 66px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;

    letter-spacing: -0.24px;

    color: #3E4462;
    align-items: center;
`

export const IngItemDeskr = styled.div`
    display: flex;
    flex-direction: row;
    gap: 150px;
    margin-right: 70px;
`

export const IngInput = styled.input`
border: 2px solid rgba(126, 126, 126, 0.5);
border-radius: 4px;
background: transparent;
width: 35px;
height: 35px;
position: relative;
appearance: none;

&:before {
    content: '✓';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 21px;
    color: #8BAA36;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

&:checked:before {
  opacity: 1;
}
`

export const IngAmount = styled.div`
    width: 68px;
    height: 35px;
    background: #8BAA36;
    border-radius: 4px;
    
    display: flex;
    align-items: center;
    justify-content: center;
`
export const RecipeDescr = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const PreparationTitle = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;

    letter-spacing: -0.24px;

    color: #3E4462;
    margin-bottom: 33px;
`

export const PreparationItem = styled.li`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.02em;

    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 21px;
    position: relative;
    counter-increment: custom-counter;
`

export const CustomNumbering = styled.div`
  &::before {
    content: counter(custom-counter);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 12px 12px;
    gap: 10px;
    isolation: isolate;

    width: 21px;
    height: 21px;

    background: #8BAA36;
    border-radius: 100px;
    color: #fff;
  }
`

export const PreparationText = styled.p`
  margin-left: 35px;
`
