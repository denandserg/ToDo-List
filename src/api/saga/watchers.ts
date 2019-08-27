import { call, put, takeEvery } from 'redux-saga/effects';
import TodoistApiREST from 'todoist-api-ts';

import API_REQ from '../../redux/actions';
import apiService from '../todoService';

export default function* watchersSaga() {
  yield takeEvery(['TASKS_REQUESTED'], fetchTasks);

  yield takeEvery(['TASK_DELETED'], deleteTask);

  yield takeEvery(['ADD_TASK'], addTask);

  yield takeEvery(['EDIT_TASK'], editTask);

  yield takeEvery(['CURRENT_TASK'], currentTask);
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
  yield call(fetchTasks);
}

function* addTask({ type, payload }: { type: string; payload: string }) {
  const api = new TodoistApiREST('9ea02f65a3203b7c30a1c67f05f96c8cb5437dd7');
  yield api.createNewTask({
    content: payload,
    // eslint-disable-next-line @typescript-eslint/camelcase
    project_id: 2215859840
  });
  yield call(fetchTasks);
}

function* deleteTask({
  type,
  payload
}: {
  type: string;
  payload: { id: number };
}) {
  yield apiService.deleteTaskById(payload.id.toString());
  yield call(fetchTasks);
}

function* fetchTasks() {
  const allTasks = yield apiService
    .getTasksFiltered({
      // eslint-disable-next-line @typescript-eslint/camelcase
      project_id: 2215859840
    })
    .then(val => new Array(...val));

  yield put({
    type: API_REQ.TASKS.FETCH_ALL_TASKS_BY_PROJECT_ID.SUCCESS,
    payload: allTasks
  });
}
