import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, InjectedFormProps } from 'redux-form';

import enhance from './enhance';
import sm from './styles.module.scss';

interface _Props extends Props, InjectedFormProps {}

interface Props {
  task: Task;
}

const CheckFinishedTaskField = enhance<_Props, Props>(_CheckFinishedTaskField);

export default CheckFinishedTaskField;

function _CheckFinishedTaskField(props: _Props) {
  const { handleSubmit, task } = props;

  const dispatch = useDispatch();

  function handleToggleFinishedTask(data: Record<string, string>) {
    Promise.resolve(
      dispatch({
        type: 'TOGGLE_FINISHED_TASK',
        payload: task
      })
    );
  }

  return (
    <form onSubmit={handleSubmit} className={sm.CheckFinishedTaskField}>
      <Field
        name={task.url}
        component="input"
        type="checkbox"
        className={sm.CheckFinishedTaskField_CheckBox}
        onChange={handleSubmit(handleToggleFinishedTask)}
      />
    </form>
  );
}
