import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import sm from './styles.module.scss';

function TaskFilterField(props: InjectedFormProps) {
  return (
    <form className={sm.TaskFilterField}>
      <Field
        className={sm.TaskFilterField_CheckBox}
        name="TaskFilterField"
        component="input"
        type="checkbox"
      />
      <div className={sm.TaskFilterField_Label}>Filter by unfinished tasks</div>
    </form>
  );
}

export default reduxForm({
  form: 'TaskFilterField'
})(TaskFilterField);
