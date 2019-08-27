import subSelectorCreator from '../utils/subSelectorCreator';
import { ApiState } from './reducer';

const createApiSelector = subSelectorCreator<ApiState>(state => state.api);

const ApiSelectors = {
  allTasks: createApiSelector(({ tasks }) => tasks),
  allProjects: createApiSelector(({ allProjects }) => allProjects),
  currentProject: createApiSelector(({ currentProject }) => currentProject),
  currentTask: createApiSelector(({ currentTask }) => currentTask)
};

export default ApiSelectors;
