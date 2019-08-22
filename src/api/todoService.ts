import TodoistApiREST from 'todoist-api-ts';

const api = new TodoistApiREST('9ea02f65a3203b7c30a1c67f05f96c8cb5437dd7');

function getAllTasksProject() {
  const tasks = api
    .getTasksFiltered({
      // eslint-disable-next-line @typescript-eslint/camelcase
      project_id: 2215859840
    })
    .then(val => new Array(...val));
  return tasks;
}

export { api, getAllTasksProject };
