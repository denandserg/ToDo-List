import createAsyncActionTypes from '../utils/createAsyncActionTypes';

const API_REQ = {
  TASKS: {
    FETCH_ALL_TASKS_BY_PROJECT_ID: createAsyncActionTypes(
      'API_REQ.TASKS.FETCH_ALL_TASKS_BY_PROJECT_ID'
    )
  }
};

export default API_REQ;
