# RoadStack 101

A teaching resource for university students learning to build and deploy full-stack web applications using Docker, Django, and Next.js.

## Purpose

This repository serves as a hands-on tutorial for students who are new to containerized development. The goal is to demystify the tools and workflows used in modern software teams, providing a foundation that students can build upon in their own projects.

## Project Structure

```
roadstack101/
├── backend/          # Django REST API
├── frontend/         # Next.js application
├── docker/           # Dockerfiles and Docker workshop guide
├── docker-compose.yml
└── docker-compose.watch.yml
```

## Workshop Guides

This project is divided into three parts, each with its own README:

| Guide | Description |
|-------|-------------|
| [Docker Workshop](docker/README.md) | Start here. Learn containerization from basic CLI commands to orchestrating multi-service applications with Docker Compose. |
| [Backend Guide](backend/README.md) | Learn to build a REST API with Django and Django REST Framework. |
| [Frontend Guide](frontend/README.md) | Learn to build a modern frontend with Next.js and React. |

## Getting Started

We recommend starting with the [Docker Workshop](docker/README.md), as it provides the foundation for running the entire application stack.

Once you're comfortable with Docker, the backend and frontend guides will walk you through the application code.
