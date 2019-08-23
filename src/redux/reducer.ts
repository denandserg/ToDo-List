import { combineReducers } from 'redux';

import API_REQ from './actions';

export interface ApiState {
  tasks: [];
  currentTask: Task | null;
}

const api = combineReducers<ApiState>({
  tasks(state = [], { type, payload }) {
    switch (type) {
      case API_REQ.TASKS.FETCH_ALL_TASKS_BY_PROJECT_ID.SUCCESS:
        return payload;
      default:
        return state;
    }
  },
  currentTask(state = null, { type, payload }) {
    switch (type) {
      case API_REQ.TASKS.CURRENT_TASK:
        return payload;
      default:
        return state;
    }
  }
});

export default api;
