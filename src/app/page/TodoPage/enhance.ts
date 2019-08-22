import { ComponentType } from 'react';
import { compose, setDisplayName } from 'recompose';

import withErrorBoundary from '../../../hocs/withErrorBoundary';

const enhance = <I, O>(component: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('TodoPage'),
    withErrorBoundary
  )(component);

export default enhance;
