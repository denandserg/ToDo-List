import createAsyncActionTypes from '../utils/createAsyncActionTypes';

const API_REQ = {
  TASKS: {
    FETCH_ALL_TASKS_BY_PROJECT_ID: createAsyncActionTypes(
      'API_REQ.TASKS.FETCH_ALL_TASKS_BY_PROJECT_ID'
    ),
    CURRENT_TASK: createAsyncActionTypes('API_REQ.TASKS.CURRENT_TASK')
  },
  PROJECTS: {
    FETCH_ALL_PROJECTS_BY_USER_TOKEN: createAsyncActionTypes(
      'API.REQ.PROJECTS.FETCH_ALL_PROJECTS_BY_USER_TOKEN'
    ),
    SET_CURRENT_PROJECT: createAsyncActionTypes(
      'API_REQ.PROJECTS.SET_CURRENT_PROJECT'
    )
  }
};

export default API_REQ;
