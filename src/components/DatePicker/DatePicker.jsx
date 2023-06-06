import { useEffect, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarIcon,
  CustomDatePicker,
  DatePickerContainer,
} from './DatePicker.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from 'redux/user/slice';
import { selectSelectedDate, selectUser } from 'redux/user/selectors';

const DatePicker = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);
  const user = useSelector(selectUser);
  const isFirstLoad = useRef(false);

  useEffect(() => {
    if (!isFirstLoad.current) {
      isFirstLoad.current = true;
      return;
    }

    // dispatch(diaryDayInfo(selectedDate));
    dispatch(setSelectedDate(selectedDate));
  }, [dispatch, selectedDate]);

  const dateProduct = () => {
    return [
      {
        'curent-day': [new Date()],
      },
      {
        'product-days': user.days
          ? user.days
              .filter(day => day.eatenProducts.length > 0)
              .map(day => new Date(day.date))
          : [],
      },
    ];
  };

  const changeDate = date => {
    const formattedDate = date.toISOString().slice(0, 10);

    dispatch(setSelectedDate(formattedDate));
  };

  return (
    <DatePickerContainer>
      <CustomDatePicker
        id="date-picker"
        dateFormat="dd.MM.yyyy"
        selected={new Date(selectedDate)}
        onChange={changeDate}
        readonly
        highlightDates={dateProduct()}
      />
      <label htmlFor="date-picker">
        <CalendarIcon color="#9B9FAA" />
      </label>
    </DatePickerContainer>
  );
};

export default DatePicker;
