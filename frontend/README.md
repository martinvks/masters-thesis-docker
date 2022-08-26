# Frontend

The frontends:
- Enables HTTP/2 between clients and the frontend
- Blocks request with a path starting with `admin`
- Forwards request to a docker container with name `backend` running in the same docker network on port 8080 using HTTP/1.1