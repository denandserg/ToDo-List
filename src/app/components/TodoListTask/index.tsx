import cn from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button';
import enhance from './enhance';
import sm from './styles.module.scss';

_TodoListTask.defaultProps = {};

interface Props {
  task: Task;
}

const TodoListTask = enhance<Props, Props>(_TodoListTask);

export default TodoListTask;

function _TodoListTask(props: Props) {
  const { task } = props;
  const dispatch = useDispatch();

  return (
    <li className={sm.TodoListTask}>
      <span className={sm.TodoListTask_Title}>{task.content}</span>
      <Button
        variant="linklike"
        iconPre="edit"
        className={sm.TodoListTask_Button}
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
