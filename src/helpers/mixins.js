import { mediaSizes } from 'constants';

export const transition = (...props) => {
  return `
    transition-property: ${props.join(', ')};
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  `;
};

export const ishidden = () => {
  return `
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    ${transition('visibility', 'opacity')};
  `;
};

export const container = () => {
  return `
    margin: 0 auto;
    width: ${mediaSizes.mobile};
    max-width: 100%;
    padding: 0 20px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding: 0 32px;
      width: ${mediaSizes.tablet};
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      padding: 0 32px;
      width: ${mediaSizes.desktop};
    }
  `;
};
