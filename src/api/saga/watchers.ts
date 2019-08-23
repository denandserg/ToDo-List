import { put, takeEvery } from 'redux-saga/effects';

import API_REQ from '../../redux/actions';
import apiService from '../todoService';

export default function* watchersSaga() {
  yield takeEvery(['TASKS_REQUESTED'], function* fetchTasks() {
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
  });
}