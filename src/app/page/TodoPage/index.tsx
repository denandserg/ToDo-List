import React from 'react';

import AddTaskField from '../../components/AddTaskField';
import enhance from './enhance';

_TodoPage.defaultProps = {};

const TodoPage = enhance(_TodoPage);

export default TodoPage;

function _TodoPage(props: typeof _TodoPage.defaultProps) {
  return <AddTaskField />;
}
