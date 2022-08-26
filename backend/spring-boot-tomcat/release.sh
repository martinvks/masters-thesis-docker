#!/bin/bash

mvn clean install
docker build -t martinvks/backend_spring-boot-tomcat .
docker push martinvks/backend_spring-boot-tomcat