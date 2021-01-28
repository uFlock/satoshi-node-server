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





