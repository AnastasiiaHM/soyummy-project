import { ForbiddenProducts, SidebarStyled } from './Sidebar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectSelectedDate } from 'redux/user/selectors';
import { formatDate } from 'helpers';
import { selectUser } from 'redux/user/selectors';
import { LoaderSmall } from 'components/Loader/Loader';

const Sidebar = () => {
  const user = useSelector(selectUser);
  const selectedDate = useSelector(selectSelectedDate);

  const daySummaryFiltered =
    user.days?.filter(day => day.daySummary.date === selectedDate) || [];

  const daySummary = daySummaryFiltered[0]?.daySummary || [];

  const dailyRate = user.userData.dailyRate;

  const forbiddenProducts = user.userData.notAllowedProducts;

  const isLoading = useSelector(selectIsLoading);

  return (
    <SidebarStyled>
      <div className="container">
        <div className="summary">
          <h2 className="title">Summary for {formatDate(selectedDate)}</h2>
          {isLoading && <LoaderSmall />}
          {!isLoading && (
            <ul className="listData">
              <li className="item">
                <h3 className="title__name">Left</h3>
                <p>{Math.ceil(daySummary.kcalLeft) || 0} kgal</p>
              </li>
              <li className="item">
                <h3 className="title__name">Consumed</h3>
                <p>{Math.ceil(daySummary.kcalConsumed) || 0} kcal</p>
              </li>
              <li className="item">
                <h3 className="title__name">Daily rate</h3>
                <p>{Math.ceil(dailyRate) || 0} kcal</p>
              </li>
              <li className="item">
                <h3 className="title__name">n% of normal</h3>
                <p>{Math.ceil(daySummary.percentsOfDailyRate) || 0} %</p>
              </li>
            </ul>
          )}
        </div>
        {forbiddenProducts.length > 0 && (
          <div className="reccommended">
            <h2 className="title">Food not reccommended</h2>
            <ForbiddenProducts className="listFood">
              {forbiddenProducts.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ForbiddenProducts>
          </div>
        )}
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
