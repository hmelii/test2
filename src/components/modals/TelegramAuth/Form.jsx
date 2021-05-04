import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Button } from '../../common/Form';
import styles from '../ModalRoot.module.scss';
import { usePublisher } from '../../../hooks/usePublisher';

const validate = (values) => {
  const errors = {};

  if (!values.token) {
    errors.token = 'Введите токен';
  }
  if (!values.name) {
    errors.name = 'Введите название канала';
  }

  return errors;
};

const RenderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <>
    <input className={styles.ModalField} {...input} placeholder={placeholder} type={type} />
    {touched && error && <span className={styles.ModalFieldError}>{error}</span>}
  </>
);

const Form = ({ handleSubmit, submitting }) => {
  const { getPublisherPages } = usePublisher();

  const submit = (values) => {
    getPublisherPages(values);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={styles.ModalFieldLine}>
        <Field
          name="token"
          component={RenderField}
          type="text"
          placeholder="Авторизационный токен"
        />
      </div>

      <div className={styles.ModalFieldLine}>
        <Field
          className={styles.ModalField}
          name="name"
          component={RenderField}
          type="text"
          placeholder="Название канала"
        />
      </div>
      <Button
        className={styles.ModalSubmitButton}
        styling="default"
        disabled={submitting}
        type="submit"
      >
        Продолжить
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'TelegramAuthForm',
  validate,
})(Form);
