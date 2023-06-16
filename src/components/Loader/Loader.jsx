import { useEffect } from 'react';
import {
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Circle6,
  Circle7,
  DNAAnimation,
  Wrapper,
} from './Loader.styled';

export const Loader = () => {
  useEffect(() => {
    const blockEvents = event => {
      event.preventDefault();
      event.stopPropagation();
    };

    document.addEventListener('keydown', blockEvents, true);
    document.addEventListener('mousedown', blockEvents, true);
    document.addEventListener('mouseup', blockEvents, true);
    document.addEventListener('click', blockEvents, true);

    return () => {
      document.removeEventListener('keydown', blockEvents, true);
      document.removeEventListener('mousedown', blockEvents, true);
      document.removeEventListener('mouseup', blockEvents, true);
      document.removeEventListener('click', blockEvents, true);
    };
  }, []);

  return (
    <Wrapper>
      <DNAAnimation>
        <Circle1>S</Circle1>
        <Circle2>o</Circle2>
        <Circle3>Y</Circle3>
        <Circle4>u</Circle4>
        <Circle5>m</Circle5>
        <Circle6>m</Circle6>
        <Circle7>y</Circle7>
      </DNAAnimation>
    </Wrapper>
  );
};
