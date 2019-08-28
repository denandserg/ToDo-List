import { call, put, select, takeEvery } from 'redux-saga/effects';
import TodoistApiREST from 'todoist-api-ts';

import API_REQ from '../../redux/actions';
import ApiSelectors from '../../redux/selectors';
import apiService from '../todoService';

export default function* watchersSaga() {
  yield takeEvery(['TASK_DELETED'], deleteTask);

  yield takeEvery(['ADD_TASK'], addTask);

  yield takeEvery(['EDIT_TASK'], editTask);

  yield takeEvery(['CURRENT_TASK'], currentTask);

  yield takeEvery(['FETCH_ALL_PROJECTS'], fetchAllProjects);

  yield takeEvery(['CURRENT_PROJECT'], setCurrentProject);

  yield takeEvery(['TOGGLE_FINISHED_TASK'], changeFinishedTask);

  yield takeEvery(['IS_SIGNED'], checkSignInUser);
}

function* checkSignInUser({ type }: { type: string; payload: boolean }) {
  yield put({ type: API_REQ.SESSION.SIGNED });
}

function* changeFinishedTask({
  type,
  payload
}: {
  type: string;
  payload: { id: number };
}) {
  const api = new TodoistApiREST(process.env.REACT_APP_USER_TOKEN as string);
  const currentProject = yield select(ApiSelectors.currentProject);
  yield api.closeTaskById(payload.id);
  yield call(fetchTasks, currentProject);
}

function* setCurrentProject({
  type,
  payload
}: {
  type: string;
  payload: Project;
}) {
  yield put({ type: API_REQ.PROJECTS.SET_CURRENT_PROJECT, payload });
  yield call(fetchTasks, payload);
}

function* fetchAllProjects({
  type,
  payload
}: {
  type: string;
  payload: Project[];
}) {
  const allProjects = yield apiService.getAllProjects();
  yield put({
    type: API_REQ.PROJECTS.FETCH_ALL_PROJECTS_BY_USER_TOKEN,
    payload: allProjects
  });
}

function* currentTask({ type, payload }: { type: string; payload: Task }) {
  yield put({ type: API_REQ.TASKS.CURRENT_TASK, payload });
}

function* editTask({
  type,
  payload
}: {
  type: string;
  payload: { content: string; id: number };
}) {
  yield apiService.updateTaskById(payload.id, {
    content: payload.content
  });
  const currentProject = yield select(ApiSelectors.currentProject);
  yield call(fetchTasks, currentProject);
}

function* addTask({ type, payload }: { type: string; payload: string }) {
  const api = new TodoistApiREST(process.env.REACT_APP_USER_TOKEN as string);
  const currentProject = yield select(ApiSelectors.currentProject);
  yield api.createNewTask({
    content: payload,
    // eslint-disable-next-line @typescript-eslint/camelcase
    project_id: currentProject.id
  });
  yield call(fetchTasks, currentProject);
}

function* deleteTask({
  type,
  payload
}: {
  type: string;
  payload: { id: number };
}) {
  const currentProject = yield select(ApiSelectors.currentProject);
  yield apiService.deleteTaskById(payload.id.toString());
  yield call(fetchTasks, currentProject);
}

function* fetchTasks(project?: Project) {
  if (project) {
    const allTasks = yield apiService
      .getTasksFiltered({
        // eslint-disable-next-line @typescript-eslint/camelcase
        project_id: project.id
      })
      .then(val => new Array(...val));
    yield put({
      type: API_REQ.TASKS.FETCH_ALL_TASKS_BY_PROJECT_ID.SUCCESS,
      payload: allTasks
    });
  }
}
