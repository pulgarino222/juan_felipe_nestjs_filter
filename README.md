# 🎮 THE BEST APP OF VIDEO GAMES BY JUAN FELIPE PULGARIN 🎮

## 🔐 Autenticación con Google

Para utilizar la autenticación con Google, accede a la siguiente ruta desde tu navegador:

### [http://localhost:3001/auth/google](http://localhost:3001/auth/google)

Desde allí, podrás registrarte. Si ya estás registrado, solo necesitarás autenticarte y serás redirigido a la página de inicio.

---

## 📡 Endpoints Disponibles

### **Players**

- **GET** `/players`  
  Recupera **todos los jugadores**.

- **GET** `/players/:id`  
  Recupera un **jugador específico** por ID.

- **PATCH** `/players/:id`  
  Actualiza un **jugador específico** por ID.

- **DELETE** `/players/:id`  
  Elimina un **jugador específico** por ID.

- **PATCH** `/players/:id/match-random-tournament`  
  Asigna un **torneo aleatorio** a un jugador específico por ID.

---

### **Tournaments**

- **GET** `/tournaments`  
  Recupera **todos los torneos**.

- **POST** `/tournaments`  
  Crea un **nuevo torneo**.

- **GET** `/tournaments/:id`  
  Recupera un **torneo específico** por ID.

- **PUT** `/tournaments/:id`  
  Actualiza un **torneo específico** por ID.

- **DELETE** `/tournaments/:id`  
  Elimina un **torneo específico** por ID.

---

### **Scores**

- **GET** `/scores`  
  Recupera **todos los puntajes**.

- **GET** `/scores/:id`  
  Recupera un **puntaje específico** por ID.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido utilizando las siguientes tecnologías:

- **NestJS**: Framework potente para construir aplicaciones de servidor.
- **TypeORM**: Para la interacción con bases de datos SQL.
- **Swagger**: Para la **documentación** de la API.
- **JWT**: Para la **autenticación** de usuarios.
- **Passport**: Implementación de estrategias de autenticación (Google OAuth).
- **Bcrypt**: Para el **hashing** de contraseñas.
- **Class-validator** y **Class-transformer**: Para la **validación** y **transformación** de datos.
- **MySQL**: Sistema de gestión de bases de datos.

---

### 🌟 Otras Características

- **Excepciones**: Implementación de filtros de excepciones personalizadas para un manejo efectivo de errores.
- **DTOs**: Uso de **Data Transfer Objects** para validar las entradas y salidas.
- **Interceptors**: Para manejar la **transformación** de resultados y la gestión de respuestas.

---

## 🏗️ Comandos Disponibles

- `npm run build`: Compila el proyecto.
- `npm run start`: Inicia la aplicación en **modo producción**.
- `npm run start:dev`: Inicia la aplicación en **modo desarrollo**.
- `npm run test`: Ejecuta las **pruebas**.
- `npm run lint`: Aplica **linting** al código con ESLint.

---

¡Disfruta de la mejor experiencia en videojuegos! 🎮



json para pruebas:

{
    "nickname": "gamer123",
    "fullname": "Juan Felipe Pulgarin",
    "email": "juan.pulgarin@example.com",
    "age": 25,
    "isActive": true,
    "password": "securePassword123",
    "confirmPassword": "securePassword123",
    "whatsapp": 1234567890,
    "roles": [1, 2]
}

