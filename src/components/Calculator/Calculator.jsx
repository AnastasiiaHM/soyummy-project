import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalOpened } from 'redux/selectors';
import * as yup from 'yup';
import Message from 'components/Message/Message';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { InputWraper } from 'components/Form/Input.styled';
import { selectError } from 'redux/user/selectors';

import {
  CalculatorStyled,
  InputsWrapper,
  FormWrapper,
  RadioGroup,
  RadioTitle,
  RadioLabel,
  RadioInput,
  ButtonCalc,
  ErrorMSG,
} from './Calculator.styled';
import { setModalOpened } from 'redux/modalOpenedSlice';
import { ModalDailyCalories } from 'components/ModalDailyCalories';
import { calculatorAnonim, calculatorLogIn } from 'redux/user/operations';
import {
  selectIsLoggedIn,
  selectUser,
  selectFullfilledCalculator,
} from 'redux/user/selectors';

export const CalculatorEl = () => {
  const dispatch = useDispatch();
  const isFullfilled = useSelector(selectFullfilledCalculator);
  const user = useSelector(selectUser);
  const userWeight = user.userData?.weight ?? '';
  const userHeight = user.userData?.height ?? '';
  const userAge = user.userData?.age ?? '';
  const userdesiredWeight = user.userData?.desiredWeight ?? '';
  const userBloodType = user.userData?.bloodType ?? '';

  const [weight, setWeight] = useState(userWeight);
  const [height, setHeight] = useState(userHeight);
  const [age, setAge] = useState(userAge);
  const [desiredWeight, setDesiredWeight] = useState(userdesiredWeight);
  const [bloodType, setBloodType] = useState(userBloodType);

  const handleOnChange = e => {
    switch (e.target.name) {
      case 'weight':
        setWeight(Number(e.target.value));
        break;

      case 'height':
        setHeight(Number(e.target.value));
        break;

      case 'age':
        setAge(Number(e.target.value));
        break;

      case 'bloodType':
        setBloodType(Number(e.target.value));
        break;

      case 'desiredWeight':
        setDesiredWeight(Number(e.target.value));
        break;

      default:
        break;
    }
  };

  const schema = yup.object().shape({
    weight: yup
      .number()
      .required('Weight is a required field')
      .min(20)
      .max(500)
      .positive()
      .integer(),
    height: yup
      .number()
      .required('Height is a required field')
      .min(100)
      .max(250)
      .positive()
      .integer(),
    age: yup
      .number()
      .required('Age is a required field')
      .min(18)
      .max(100)
      .positive()
      .integer(),
    desiredWeight: yup
      .number()
      .min(20)
      .max(500)
      .required('Desired weight is a required field')
      .positive()
      .integer(),
    bloodType: yup
      .number()
      .min(1)
      .max(4)
      .required('Blood type is a required field')
      .positive()
      .integer(),
  });

  const initialValues = {
    weight: String(weight),
    height: String(height),
    age: String(age),
    desiredWeight: String(desiredWeight),
    bloodType: String(bloodType),
  };

  const message = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const modalOpened = useSelector(selectModalOpened);

  const openModal = () => {
    dispatch(setModalOpened(true));
  };

  const handleSubmit = ({ weight, height, age, desiredWeight, bloodType }) => {
    const sendData = {
      weight: Number(weight),
      height: Number(height),
      age: Number(age),
      desiredWeight: Number(desiredWeight),
      bloodType: Number(bloodType),
    };

    const id = user.id;
    isLoggedIn
      ? dispatch(calculatorLogIn([id, sendData]))
      : dispatch(calculatorAnonim(sendData));

    openModal();
  };

  return (
    <>
      <CalculatorStyled>
        <h2>Calculate your daily calorie intake right now</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off" onChange={handleOnChange}>
            <FormWrapper>
              <InputsWrapper>
                <InputWraper>
                  <Field
                    type="text"
                    name="height"
                    placeholder=" "
                    value={height || ''}
                  />
                  <label htmlFor="height">Height *</label>
                  <ErrorMessage
                    className="error"
                    component="div"
                    name="height"
                  />
                </InputWraper>
                <InputWraper>
                  <Field
                    type="text"
                    name="age"
                    placeholder=" "
                    value={age || ''}
                  />
                  <label htmlFor="age">Age *</label>
                  <ErrorMessage className="error" component="div" name="age" />
                </InputWraper>
                <InputWraper>
                  <Field
                    type="text"
                    name="weight"
                    placeholder=" "
                    value={weight || ''}
                  />
                  <label htmlFor="weight">Current weight *</label>
                  <ErrorMessage
                    className="error"
                    component="div"
                    name="weight"
                  />
                </InputWraper>
              </InputsWrapper>
              <InputsWrapper>
                <InputWraper>
                  <Field
                    type="text"
                    name="desiredWeight"
                    placeholder=" "
                    value={desiredWeight || ''}
                  />
                  <label htmlFor="desiredWeight">Desired weight *</label>
                  <ErrorMessage
                    className="error"
                    component="div"
                    name="desiredWeight"
                  />
                </InputWraper>

                <RadioTitle>Blood type *</RadioTitle>
                <RadioGroup>
                  <RadioLabel>
                    <RadioInput type="radio" name="bloodType" value="1" />1
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="bloodType" value="2" />2
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="bloodType" value="3" />3
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="bloodType" value="4" />4
                  </RadioLabel>
                </RadioGroup>
                <ErrorMSG component="div" name="bloodType" />
              </InputsWrapper>
            </FormWrapper>
            <ButtonCalc className="orange" type="submit">
              Start losing weight
            </ButtonCalc>
          </Form>
        </Formik>
        {message && <Message>{message}</Message>}
      </CalculatorStyled>
      {isFullfilled && <ModalDailyCalories modalOpened={modalOpened} />}
    </>
  );
};
