# Building images

## Build base (executable) image
```
docker build -t execimage .
```

## Build server image
```
docker build -t serverimage -f Dockerfile.server .
```

## Start executable image
```
docker run --rm -v $PWD:/output execimage 30 40
```

Runs the processor and the result of it will be written to a file named `result.txt` in this folder

## Start server image
```
docker run --rm -it -p 3000:3000 -v $PWD:/output serverimage
```

Starts listening port 3000

## start an execution
```
curl -X POST localhost:3000/run -H "Content-Type: application/json" --data '{"param1": "/test", "param2": 10}'
```

this POST request returns a JSON object with the ID of the execution. The console for the server docker container will have the output of the exection and result will be written to the `result.txt` file in the same folder.

