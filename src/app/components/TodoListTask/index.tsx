import cn from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button';
import CheckFinishedTaskField from '../CheckFinishedTaskField';
import EditTaskField from '../EditTaskField';
import enhance from './enhance';
import sm from './styles.module.scss';

_TodoListTask.defaultProps = {};

interface Props {
  task: Task;
}

const TodoListTask = enhance<Props, Props>(_TodoListTask);

export default TodoListTask;

function _TodoListTask(props: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const { task } = props;
  const dispatch = useDispatch();

  function handleSetIsEdit() {
    dispatch({ type: 'CURRENT_TASK', payload: task });
    setIsEdit(true);
  }

  return isEdit ? (
    <EditTaskField task={task} changeIsEdit={setIsEdit} />
  ) : (
    <li className={sm.TodoListTask}>
      <CheckFinishedTaskField key={task.id} task={task} />
      <span
        className={
          task.completed
            ? cn(sm.TodoListTask_Title, sm.TodoListTask_Title__Completed)
            : sm.TodoListTask_Title
        }
      >
        {task.content}
      </span>
      <Button
        variant="linklike"
        iconPre="edit"
        className={cn(sm.TodoListTask_Button, sm.TodoListTask_Button__Primary)}
        onClick={handleSetIsEdit}
      >
        Edit
      </Button>
      <Button
        variant="linklike"
        iconPre="minus"
        className={cn(sm.TodoListTask_Button, sm.TodoListTask_Button__Danger)}
        onClick={() => dispatch({ type: 'TASK_DELETED', payload: task })}
      >
        Delete
      </Button>
    </li>
  );
}
