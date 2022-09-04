# master-docker

Source code for docker images used for testing different combinations of frontends and backends,
and protocol translation between different HTTP versions.

## Frontend

The source code for the frontend docker images are in the `./frontend` folder.  
They are based on the official docker images provided by the vendors and configured to:

- Enable downstream HTTP/2
- Enable downstream HTTP/3 (if supported)
- Block requests with a path starting with `/admin`
- Forward requests to a docker container with name `backend` running in the same docker network on port 8080 using
  HTTP/1.1

| Images                                                    | HTTP/2 downstream  | HTTP/3 downstream  |
|-----------------------------------------------------------|--------------------|--------------------|
| `martinvks/frontend_apache2`                              | :white_check_mark: | :x:                |
| `martinvks/frontend_envoy`                                | :white_check_mark: | :white_check_mark: |
| `martinvks/frontend_haproxy`                              | :white_check_mark: | :x:                |
| `martinvks/frontend_nginx`                                | :white_check_mark: | :x:                |
| `martinvks/frontend_traefik`                              | :white_check_mark: | :white_check_mark: |
| `martinvks/frontend_hitch` + `martinvks/frontend_varnish` | :white_check_mark: | :x:                |

## Backend

The source code for the backend docker images are in the `./backend` folder.  
They are configured to:

- Run on port 8080
- Serve static HTML files

Images:
- `martinvks/backend_spring-boot-tomcat`


## Compose
![Flowchart](./flow.svg)