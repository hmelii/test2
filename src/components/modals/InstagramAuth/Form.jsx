import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Button } from '../../common/Form';
import styles from '../ModalRoot.module.scss';
import { usePublisher } from '../../../hooks/usePublisher';
import { useInstagramAuthForm } from '../../../hooks/useInstagramAuthForm';

const validate = (values) => {
  const errors = {};

  if (!values.login) {
    errors.login = 'Введите логин';
  }
  if (!values.password) {
    errors.password = 'Введите пароль';
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
  const { InstagramAuthForm } = useInstagramAuthForm();

  const submit = (values) => {
    getPublisherPages(values);
  };

  useEffect(() => {
    const { values = null } = InstagramAuthForm;
    if (values) {
      Object.keys(values).forEach((key) => (values[key] = values[key].replace(/\s/g, '_')));
    }
  }, [InstagramAuthForm]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className={styles.ModalFieldLine}>
        <Field name="login" component={RenderField} type="text" placeholder="Login" />
      </div>

      <div className={styles.ModalFieldLine}>
        <Field
          className={styles.ModalField}
          name="password"
          component={RenderField}
          type="password"
          placeholder="Password"
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
  form: 'InstagramAuthForm',
  validate,
})(Form);
