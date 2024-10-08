# THE BEST APPI OF VIDEO GAMES BY JUAN FELIPE PULGARIN 

## Autenticación con Google

Para utilizar la autenticación con Google, debes acceder a la siguiente ruta desde tu navegador:

http://localhost:3001/auth/google


Desde allí, serás registrado o, en caso de que ya estés registrado, solo te autenticarás y serás redirigido a la página de inicio.

## Endpoints Disponibles

### Players

- **GET** `/players`  
  Recupera todos los jugadores.

- **GET** `/players/:id`  
  Recupera un jugador específico por ID.

- **PATCH** `/players/:id`  
  Actualiza un jugador específico por ID.

- **DELETE** `/players/:id`  
  Elimina un jugador específico por ID.

- **PATCH** `/players/:id/match-random-tournament`  
  Asigna un torneo aleatorio a un jugador específico por ID.

### Tournaments

- **GET** `/tournaments`  
  Recupera todos los torneos.

- **POST** `/tournaments`  
  Crea un nuevo torneo.

- **GET** `/tournaments/:id`  
  Recupera un torneo específico por ID.

- **PUT** `/tournaments/:id`  
  Actualiza un torneo específico por ID.

- **DELETE** `/tournaments/:id`  
  Elimina un torneo específico por ID.

### Scores

- **GET** `/scores`  
  Recupera todos los puntajes.

- **GET** `/scores/:id`  
  Recupera un puntaje específico por ID.

## Tecnologías Utilizadas

Este proyecto está construido utilizando las siguientes tecnologías:

- **NestJS**: Un marco de trabajo para construir aplicaciones de servidor.
- **TypeORM**: Para interactuar con bases de datos SQL.
- **Swagger**: Para la documentación de la API.
- **JWT**: Para la autenticación de usuarios.
- **Passport**: Para implementar estrategias de autenticación (Google OAuth).
- **Bcrypt**: Para el hash de contraseñas.
- **Class-validator** y **Class-transformer**: Para la validación y transformación de datos.
- **MySQL**: Como sistema de gestión de bases de datos.

### Otras Características

- **Excepciones**: Implementación de filtros de excepciones personalizados para manejar errores.
- **DTOs**: Uso de objetos de transferencia de datos para validar las entradas y salidas.
- **Interceptors**: Para manejar la transformación de resultados y la gestión de respuestas.

## Comandos Disponibles

- `npm run build`: Compila el proyecto.
- `npm run start`: Inicia la aplicación en modo producción.
- `npm run start:dev`: Inicia la aplicación en modo desarrollo.
- `npm run test`: Ejecuta las pruebas.
- `npm run lint`: Lint el código con ESLint.

