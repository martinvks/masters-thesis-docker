# Master Docker

Source code for docker images used in master's thesis to investigate the semantic gap in HTTP protocols.
![Flowchart](./flowchart.svg)

## Frontend

The source code for the frontend docker images are in the `./frontend` folder.  
The frontends are configured to:

- Enable downstream HTTP/2
- Enable downstream HTTP/3 (if supported)
- Block requests with a path starting with `/admin`
- Forward requests to a docker container with name `backend` running in the same docker network on port 8080 using
  HTTP/1.1

| Images                                     | HTTP/2 downstream  | HTTP/3 downstream  |
|--------------------------------------------|--------------------|--------------------|
| `martinvks/frontend_apache2`               | :white_check_mark: | :x:                |
| `martinvks/frontend_apache_traffic_server` | :white_check_mark: | :x:                |
| `martinvks/frontend_caddy`                 | :white_check_mark: | :white_check_mark: |
| `martinvks/frontend_envoy`                 | :white_check_mark: | :white_check_mark: |
| `martinvks/frontend_haproxy`               | :white_check_mark: | :x:                |
| `martinvks/frontend_nginx`                 | :white_check_mark: | :x:                |
| `martinvks/frontend_traefik`               | :white_check_mark: | :white_check_mark: |
| `martinvks/frontend_varnish`               | :white_check_mark: | :x:                |

## Backend

The source code for the backend docker images are in the `./backend` folder.  
They are configured to:

- Run on port 8080
- Respond with an index.html on requests to `/` and `/index.html`
- Respond with a text message on requests to `/admin`

Images:
- `martinvks/backend_express`
- `martinvks/backend_gin`
- `martinvks/backend_spring-boot-tomcat`

## Compose

The `docker-compose.yml` file can be used to set up a test environment using a specific frontend and backend image.
The following environment variables must be set:

| Key                        | Description                                     | Example value                        |
|----------------------------|-------------------------------------------------|--------------------------------------|
| DOCKER_FRONTEND_IMAGE      | Docker image to use as frontend                 | martinvks/frontend_envoy             |
| DOCKER_BACKEND_IMAGE       | Docker image to use as backend                  | martinvks/backend_spring-boot-tomcat |
| DOCKER_DEV_CERTIFICATE     | File with certificate data in PEM format        | ./fullchain.pem                      |
| DOCKER_DEV_CERTIFICATE_KEY | File with certificate private key in PEM format | ./privkey.pem                        |

Example:
```
$ cat .env
DOCKER_FRONTEND_IMAGE=martinvks/frontend_envoy
DOCKER_BACKEND_IMAGE=martinvks/backend_spring-boot-tomcat
DOCKER_DEV_CERTIFICATE=./fullchain.pem
DOCKER_DEV_CERTIFICATE_KEY=./privkey.pem
$ docker compose up
...
```

### Varnish

The open-source version of Varnish does not provide TLS termination.  
For Varnish frontend use the `docker-compose-varnish.yml` file instead, which uses
[Hitch](https://www.varnish-software.com/community/hitch/) as TLS proxy.

### Packet capture

Packet capturing is enabled on the backend and the pcap file is written to `./capture/backend.pcap`