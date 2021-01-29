# satoshi-node-service

## Project setup
```
npm install
```

### Run with development settings
Warning: won't work without .env.local file
```
npm run dev
```

.env.local example:
```dotenv
MONGO_DB_URI=<VALID_MONGOOSE_CONNECTION_URI>
ALLOWED_CORS=<REGEX_STRING_OF_ALLOWED_HOSTS>
SWAGGER_HOST=<YOU_HOST:PORT>
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





