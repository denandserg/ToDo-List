import React from 'react';
import ScrollArea from 'react-scrollbar';

import TodoListTask from '../TodoListTask';
import enhance from './enhance';
import sm from './styles.module.scss';

_TodoList.defaultProps = {};

const TodoList = enhance(_TodoList);

export default TodoList;

function _TodoList(props: typeof _TodoList.defaultProps) {
  return (
    <ul className={sm.TodoList}>
      <ScrollArea
        speed={0.8}
        className={sm.TodoList_ScrollArea}
        contentClassName="content"
        horizontal={false}
      >
        <TodoListTask />
        <TodoListTask />
      </ScrollArea>
    </ul>
  );
}
