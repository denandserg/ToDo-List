import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ApiSelectors from '../../../redux/selectors';
import AddTaskField from '../../components/AddTaskField';
import TaskFilterField from '../../components/TaskFilterField';
import TodoList from '../../components/TodoList';
import enhance from './enhance';

_TodoPage.defaultProps = {};

const TodoPage = enhance(_TodoPage);

export default TodoPage;

function _TodoPage(props: typeof _TodoPage.defaultProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_PROJECTS' });
    dispatch({ type: 'TASKS_REQUESTED' });
  }, [dispatch]);
  const allTasks = useSelector(ApiSelectors.allTasks);

  function handleAddTask(data: { addTask?: string }) {
    dispatch({ type: 'ADD_TASK', payload: data.addTask });
  }

  return (
    <>
      <AddTaskField onSubmit={handleAddTask} />
      <TaskFilterField />
      <TodoList tasks={allTasks} />
    </>
  );
}
