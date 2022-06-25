# Toolbox Challenge

El api se encuentra en la carpeta `api` y la app react en la carpeta `front`.
Para iniciar cada una, se debe ingresar a cada una y correr el comando:
```bash
npm start
```

El api se debe montar en el puerto `3000` y el front en el `3001`.

El backend cuenta con test, los cuales se los puede correr (estando dentro de la carpeta `api`) con el comando:
```bash
npm test
```

### Con docker
El repositorio cuenta con un archivo docker compose, el cual levanta ambas aplicaciones.

- Backend -> Node 14
- Frontend -> Node 16

Para levantar las imagenes:

```bash
docker-compose up
```

El api se debe montar en el puerto `3000` y el front en el `3001`.