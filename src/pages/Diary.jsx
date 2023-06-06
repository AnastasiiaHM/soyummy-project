import Sidebar from 'components/Sidebar/Sidebar';
import { DiaryMain } from 'components/Diary/Diary';
import { DiaryStyled } from 'components/Styled/DiaryPage.styled';

const Diary = () => {
  return (
    <DiaryStyled>
      <DiaryMain />
      <Sidebar />
    </DiaryStyled>
  );
};

export default Diary;
