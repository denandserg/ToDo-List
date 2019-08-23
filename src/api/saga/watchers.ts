import { call, put, takeEvery } from 'redux-saga/effects';

import API_REQ from '../../redux/actions';
import apiService from '../todoService';

export default function* watchersSaga() {
  yield takeEvery(['TASKS_REQUESTED'], fetchTasks);

  yield takeEvery(['TASK_DELETED'], deleteTask);
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
