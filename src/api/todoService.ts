import TodoistApiREST from 'todoist-api-ts';

const apiService = new TodoistApiREST(process.env
  .REACT_APP_USER_TOKEN as string);

export default apiService;
