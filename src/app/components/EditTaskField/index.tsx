import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, InjectedFormProps } from 'redux-form';

import enhance from './enhance';
import sm from './styles.module.scss';

interface _Props extends Props, InjectedFormProps {}

interface Props {
  task: Task;
  changeIsEdit: Function;
}

const EditTaskField = enhance<_Props, Props>(_EditTaskField);

export default EditTaskField;

function _EditTaskField(props: _Props) {
  const {
    pristine,
    submitting,
    reset,
    handleSubmit,
    changeIsEdit,
    task
  } = props;

  const dispatch = useDispatch();

  function handleEditTask(data: Record<string, string>) {
    Promise.resolve(
      dispatch({
        type: 'EDIT_TASK',
        payload: { ...task, content: data.editTask }
      })
    ).then(() => changeIsEdit(false));
  }

  return (
    <div className={sm.EditTaskField}>
      <form
        onSubmit={handleSubmit(handleEditTask)}
        className={sm.EditTaskField_Form}
      >
        <Field
          name="editTask"
          component="input"
          type="text"
          placeholder="Edit you task"
          className={sm.EditTaskField_Input}
        />
        <div>
          <button
            type="button"
            className={cn(
              sm.EditTaskField_FormButton,
              sm.EditTaskField_FormButton__Warning
            )}
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </button>
          <button
            type="button"
            className={cn(sm.EditTaskField_FormButton)}
            onClick={() => changeIsEdit(false)}
          >
            Return
          </button>
          <button
            type="submit"
            disabled={pristine || submitting}
            className={sm.EditTaskField_FormButton}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
