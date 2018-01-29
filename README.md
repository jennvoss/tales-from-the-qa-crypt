# Tales from the QA Crypt

## Start the site
### Development mode:

`docker-compose up`

Visit http://localhost:3000

### Production mode:

`docker-compose -f docker-compose.nginx.yml up`

Visit http://localhost:4000

### Test mode:

`docker-compose -f docker-compose.test.yml up --abort-on-container-exit`

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [react-todo-cypress](https://github.com/avanslaars/react-todo-cypress)