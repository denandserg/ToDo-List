import subSelectorCreator from '../utils/subSelectorCreator';
import { ApiState } from './reducer';

const createApiSelector = subSelectorCreator<ApiState>(state => state.api);

const ApiSelectors = {
  allTasks: createApiSelector(({ tasks }) => tasks)
};

export default ApiSelectors;
