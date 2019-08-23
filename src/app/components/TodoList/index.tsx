import React from 'react';
import ScrollArea from 'react-scrollbar';

import TodoListTask from '../TodoListTask';
import enhance from './enhance';
import sm from './styles.module.scss';

_TodoList.defaultProps = {};

interface Props {
  tasks: Task[];
}

const TodoList = enhance<Props, Props>(_TodoList);

export default TodoList;

function _TodoList(props: Props) {
  const { tasks } = props;
  return (
    <ul className={sm.TodoList}>
      <ScrollArea
        speed={0.8}
        className={sm.TodoList_ScrollArea}
        contentClassName="content"
        horizontal={false}
      >
        {tasks.map(el => (
          <TodoListTask task={el} key={el.id} />
        ))}
      </ScrollArea>
    </ul>
  );
}
