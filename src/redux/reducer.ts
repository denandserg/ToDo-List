import { combineReducers } from 'redux';

import API_REQ from './actions';

export interface ApiState {
  tasks: [];
  currentTask: Task | null;
  allProjects: [];
  currentProject: Project | null;
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
  },
  allProjects(state = [], { type, payload }) {
    switch (type) {
      case API_REQ.PROJECTS.FETCH_ALL_PROJECTS_BY_USER_TOKEN:
        return payload;
      default:
        return state;
    }
  },
  currentProject(state = null, { type, payload }) {
    switch (type) {
      case API_REQ.PROJECTS.SET_CURRENT_PROJECT:
        return payload;
      default:
        return state;
    }
  }
});

export default api;
