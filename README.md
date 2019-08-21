This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Name | Description
---|---
`start` | Starts web server which serves application in development mode
`build` | Bundles application and puts it under `/build` folder
`lint:all:check`<br>`lint:all:fix`<br>`lint:all:fix`<br>`lint:scripts:check`<br>`lint:scripts:fix`<br>`lint:styles:check`<br>`lint:styles:fix` | Run static code quality check. Corresponding suffix allow specify to lint `all`/`scripts`/`styles`.<br>Postfix `check`/`fix` allows to switch between check only or apply automatic fix for issues where possible


## Environment

List of supported env variables and example file can be seen in `.env.local.example`

## CI/CD

CI/CD works using gitlab pipelines. Configuration stored in `.gitlab-ci.yaml`.
Read [more](https://docs.gitlab.com/ee/ci/yaml/).

##### Hosting

App supposed to be hosted as static files using AWS S3.
 
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

