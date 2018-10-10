# Tales from the QA Crypt

## Start the site
### Development mode:

`docker-compose up`

Visit http://localhost:3333

### Production mode:

`docker-compose -f docker-compose.nginx.yml up --build`

Visit http://localhost:4000

### Test mode:

`docker-compose -f docker-compose.test.yml up --exit-code-from tests`

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [react-todo-cypress](https://github.com/avanslaars/react-todo-cypress)


## Helpful docker commands

List containers

`docker ps`

Stop container & ensure all networks are removed
`docker-compose down`