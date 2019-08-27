import { ComponentType } from 'react';
import { compose, setDisplayName } from 'recompose';
import { reduxForm } from 'redux-form';

import withErrorBoundary from '../../../hocs/withErrorBoundary';

const enhance = <I, O>(component: ComponentType<I>) =>
  compose<I, O>(
    withErrorBoundary,
    setDisplayName('SelectProject'),
    reduxForm({
      form: 'selectProject',
      enableReinitialize: true
    })
  )(component);

export default enhance;
