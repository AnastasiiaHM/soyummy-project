import styled from '@emotion/styled';
import { mediaSizes } from 'components/constants';
import { colors } from '../colors';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const RecipeWrapper = styled.div`
    width: 343px;
    margin: 0 auto;
    margin-top: 80px;

    @media (min-width: ${mediaSizes.tablet}) and (max-width: ${mediaSizes.desktop}) {
    width: 704px;
    margin: 0 auto;
    margin-top: 0px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
    width: 1240px;
    margin: 0 auto;
    margin-top: 64px;
    }
`;

export const RecipeTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.02em;
  


    color: ${colors.greenButton};

    @media (min-width: ${mediaSizes.tablet}) {
        font-size: 44px;
        line-height: 44px;
        margin-top: 72px;

    }

    @media (min-width: ${mediaSizes.desktop}) {
        margin-top: 100px;

    }
`;

export const RecipeText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    text-align: center;
    letter-spacing: -0.02em;

    color: ${colors.blackFont};
    
    width: 299px;
    height: 64px;
    margin: 0 auto;
    margin-top: 18px;

    @media (min-width: ${mediaSizes.tablet}) {
        font-size: 18px;
        line-height: 24px;

        width: 656px;
        height: 72px;
        margin-top: 30px;
    }
`;

export const RecipeTiming = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    margin-bottom: 82px;
    gap: 10px;
    color: ${colors.blackFont};

    @media (min-width: ${mediaSizes.tablet}) and (max-width: ${mediaSizes.desktop}) {
        margin-bottom: 55px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        
        margin-bottom: 25px;
    }
`;

export const RecipeIngContainer = styled.div`
    width: 343px;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 18px;

    @media (min-width: ${mediaSizes.tablet}) {
        width: 704px;
        margin: 0 auto;
        margin-bottom: 100px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        width: 1240px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`

export const RecipePrepContainer = styled.div`
    width: 343px;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 18px;

    @media (min-width: ${mediaSizes.tablet}) {
        width: 704px;
        margin: 0 auto;
        margin-bottom: 200px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        width: 1240px;
        margin-top: 50px;
        margin-bottom: 200px;
    }
`

export const RecipeIngTable = styled.div`
    display: flex;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 32px;
    background: ${colors.greenButton};
    border-radius: 8px;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    align-items: center;
    letter-spacing: 0.03em;
    color: ${colors.textGreenBtn};
    margin-bottom: 24px;

    @media (min-width: ${mediaSizes.tablet}) {
        height: 60px;
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 32px
    }

    @media (min-width: ${mediaSizes.desktop}) {
        height: 60px;
        margin-bottom: 50px;
        font-size: 18px;
        line-height: 27px;
    }
`

export const IngTable = styled.div`
    display: flex;
    margin-left: 122px;

    @media (min-width: ${mediaSizes.tablet}) {
        margin-left: 312px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        margin-left: 761px;
    }
`

export const IngText = styled.p`
    margin-right: 18px;

    @media (min-width: ${mediaSizes.tablet}) {
        margin-right: 38px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        margin-right: 109px;
    }
`

export const RecipeIngText = styled.p`
    margin-left: 10px;
    @media (min-width: ${mediaSizes.tablet}) {
        margin-left: 40px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        margin-left: 40px;
    }
`

export const IngItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 32px;
    isolation: isolate;
    height: 86px;
    background: ${colors.imageBC};
    border-radius: 8px;
    justify-content: space-between;
    margin-bottom: 16px;

    @media (min-width: ${mediaSizes.tablet}) {
        height: 178px;
        margin-bottom: 24px;
        align-items: center;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        height: 182px;
    }
`

export const IngImage = styled.img`
    width: 57px;
    height: 57px;

    @media (min-width: ${mediaSizes.tablet}) {
        width: 112px;
        height: 112px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        width: 128px;
        height: 128px;
    }
`

export const IngItemName = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    letter-spacing: -0.24px;

    color: ${colors.recipeCardText};
    align-items: center;

    @media (min-width: ${mediaSizes.tablet}) {
        gap: 40px;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        gap: 66px;
    }
`

export const IngItemDeskr = styled.div`
    display: flex;
    flex-direction: row;
    gap: 28px;
    margin-right: 28px;
    @media (min-width: ${mediaSizes.tablet}) {
        gap: 78px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        gap: 150px;
    }
`

export const IngInput = styled.input`
    border: 2px solid rgba(126, 126, 126, 0.5);
    border-radius: 4px;
    background: transparent;
    width: 18px;
    height: 18px;
    position: relative;
    appearance: none;
    cursor: pointer;

    &:before {
        content: '✓';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 21px;
        color: ${colors.greenButton};
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    &:checked:before {
    opacity: 1;
    }

    @media (min-width: ${mediaSizes.tablet}) {
        width: 35px;
        height: 35px;
    }
`

export const IngAmount = styled.div`
    min-width: 63px;
    height: 23px;
    padding: 7px;
    background: ${colors.greenButton};
    border-radius: 4px;
    font-size: 12px;
    color: ${colors.whiteColor};
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${mediaSizes.tablet}) {
        min-width: 68px;
        height: 36px;
        font-size: 16px;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        min-width: 68px;
        height: 35px;
    }
`
export const RecipeDescr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${mediaSizes.tablet}) {
        flex-direction: column;
    }

    @media (min-width: ${mediaSizes.desktop}) {
        flex-direction: row;
    }
`
export const PreparationTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;

    letter-spacing: -0.24px;

    color: ${colors.recipeCardText};
    margin-bottom: 33px;
`

export const PreparationItem = styled.li`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    letter-spacing: -0.02em;

    color: ${colors.blackFontBolt};
    margin-bottom: 21px;
    position: relative;
    counter-increment: custom-counter;

    @media (min-width: ${mediaSizes.tablet}) {
        font-size: 14px;
        line-height: 18px;
    }
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

    background: ${colors.greenButton};
    border-radius: 100px;
    color: ${colors.whiteColor};
  }
`

export const PreparationText = styled.p`
  margin-left: 35px;
`
export const PreparationImg = styled.img`
    width: 343px;
    height: 250px;

@media (min-width: ${mediaSizes.tablet}) {
    width: 433px;
    height: 332px;
}
`

export const ScrollContainer = styled(PerfectScrollbar)`
  max-height: 332px;
  max-width: 343px;
  overflow-x: hidden;

  .ps__rail-x {
    display: none;
  }

  .ps__rail-y {
    width: 15px;
    background-color: transparent;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }

    .ps__thumb-y {
      width: 100%;
      background-color: ${colors.primary};
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
  @media (min-width: ${mediaSizes.tablet}) {
    max-width: 704px;
}
`;