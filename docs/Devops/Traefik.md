---
sidebar_position: 1
title: Traefik for Dummies
description: SSL go BRRRR
tags: [Documentation, Docusaurus]
---

```yml title="docker-compose.yml"
version: "3.3"

services:
    traefik:
        image: "traefik:v2.6"
        container_name: "traefik"
        networks:
            - proxy
        command:
            - "--api.insecure=true"
            - "--providers.docker=true"
            - "--providers.docker.exposedbydefault=false"
            - "--entrypoints.web.address=:80"
            - "--entrypoints.websecure.address=:443"
            - "--entrypoints.backendsecure.address=:8081"
            - "--certificatesresolvers.myresolver.acme.httpchallenge=true"
            - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
            - "--certificatesresolvers.myresolver.acme.email=mail@example.com"
            - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
        ports:
            - "80:80"
            - "443:443"
            - "8080:8080"
            - "8081:8081"
        volumes:
            - "./letsencrypt:/letsencrypt"
            - "/var/run/docker.sock:/var/run/docker.sock:ro"

networks:
    proxy:
        name: "proxy"
        external: true
```
