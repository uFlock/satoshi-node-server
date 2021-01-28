# satoshi-node-service

## Project setup
```
npm install
```

### Run with developement settings
Warning: won't work without .env.local file
```
npm run dev
```

.env.local example:
```dotenv
MONGO_DB_URI=mongodb+srv://<REST_OF_YOU_CONNECTION_STRING>
ALLOWED_CORS="<ARRAY/REGEX/STRING OF ALLOWED HOSTS>"
SWAGGER_HOST="<YOUR HOST> //example localhost:1337"
```

### Documentation and API tests
Go to http://localhost:1337/documentation

### Build Container
```
docker build -t test-node .
```
### Run Container In docker
```
docker run --name=test-node -d -p 1337:1337 test-node
```

### Deploy To Kubernetes
Use your own deployment configs





