import { ComponentType } from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import { reduxForm } from 'redux-form';

import withErrorBoundary from '../../../hocs/withErrorBoundary';

const enhance = <I, O>(component: ComponentType<I>) =>
  compose<I, O>(
    withErrorBoundary,
    setDisplayName('CheckFinishedTaskField'),
    withProps(({ task }: { task: Task }) => ({
      initialValues: { editTask: task.completed }
    })),
    reduxForm({
      form: 'checkBoxTaskFinishedForm',
      enableReinitialize: true
    })
  )(component);

export default enhance;
