import cn from 'classnames';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import sm from './styles.module.scss';

function AddTaskField(props: InjectedFormProps) {
  const { pristine, submitting, reset, handleSubmit } = props;
  return (
    <div className={sm.AddTaskField}>
      <div className={sm.AddTaskField_Title}>ToDo. Take it & do it!</div>
      <form onSubmit={handleSubmit} className={sm.AddTaskField_Form}>
        <Field
          name="addTask"
          component="input"
          type="text"
          placeholder="Add you task"
          className={sm.AddTaskField_Input}
        />
        <div>
          <button
            type="button"
            className={cn(
              sm.AddTaskField_FormButton,
              sm.AddTaskField_FormButton__Warning
            )}
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
          <button
            type="submit"
            disabled={pristine || submitting}
            className={sm.AddTaskField_FormButton}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'addTaskForm'
})(AddTaskField);
