# Cache with Redis

<p align="center">
    <img src="https://img.shields.io/badge/SWAGGER_UI-1d4145?style=for-the-badge&logo=swagger&logoColor=85ea2d" alt="Logo Swagger UI"/>
    <img src="https://img.shields.io/badge/REDIS-D9281A?style=for-the-badge&logo=redis&logoColor=white" alt="Logo Swagger UI"/>
    <img src="https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Logo Swagger UI"/>
    <img src="https://img.shields.io/badge/-TypeScript-2f74c3?style=for-the-badge&logo=typescript&logoColor=white" alt="Logo TypeScript" />
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EuCarlos/cache_with_redis?color=orange&style=for-the-badge">
</p>

## Installation:
Clone the repo and Install dependencies using Yarn:
```bash
git clone https://github.com/EuCarlos/cache_with_redis.git <project-name> \
  && cd <project-name> \
  && yarn install
```

### Run redis on docker
```bash
docker run --name redis-cache -p 6379:6379 -d redis
```

### Run the project

```bash
yarn dev
```
## Documentation
All route information has been documented with **Swagger UI**, and can be found in the `/api/v1/docs` route
___

<p align="center">
Created with 💜 by <a href="https://github.com/eucarlos/">Carlos Alves</a></p>
