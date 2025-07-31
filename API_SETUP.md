# Configuración de APIs - AG Mantenimiento

## 📋 Información necesaria del Backend

Para que el frontend se comunique correctamente con tu backend, necesito que me proporciones:

### 1. **URL del Backend**
- ¿Es la URL actual: `https://backend-ag-main-2.onrender.com/tecnico/api`?
- ¿O tienes una URL diferente?

### 2. **Endpoints Disponibles**
Por favor confirma qué endpoints tiene tu backend:

#### Autenticación:
- `POST /login/` - ¿Qué datos espera? (email, password)
- `POST /logout/` - ¿Requiere token?
- `POST /register/` - ¿Qué campos requiere?
- `GET /user/profile/` - ¿Para obtener datos del usuario actual?

#### Servicios:
- `GET /servicios/` - ¿Lista todos los servicios?
- `GET /servicios/{id}` - ¿Obtiene servicio específico?
- `POST /servicios/` - ¿Crear servicio?
- `PUT /servicios/{id}` - ¿Actualizar servicio?
- `DELETE /servicios/{id}` - ¿Eliminar servicio?

#### Usuarios:
- `GET /usuarios/` - ¿Lista todos los usuarios?
- `GET /usuarios/{id}` - ¿Obtiene usuario específico?
- `POST /usuarios/` - ¿Crear usuario?
- `PUT /usuarios/{id}` - ¿Actualizar usuario?
- `DELETE /usuarios/{id}` - ¿Eliminar usuario?

### 3. **Formato de Autenticación**
- ¿Usa JWT tokens?
- ¿Usa session cookies?
- ¿Qué formato espera para el login?
- ¿Cómo se envía el token en las requests?

### 4. **Estructura de Respuesta**
Ejemplo de respuesta del login:
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "role": "admin"
  }
}
```

### 5. **Estructura de Datos**
Ejemplo de servicio:
```json
{
  "id": 1,
  "nombre": "Mantenimiento de Cocina",
  "descripcion": "Servicio completo de mantenimiento",
  "precio": 150.00
}
```

## 🚀 Configuración Actual

### Archivos Creados:
- ✅ `src/api/axios.js` - Configuración de axios con interceptores
- ✅ `src/api/authApi.js` - APIs de autenticación
- ✅ `src/api/servicioApi.js` - APIs de servicios
- ✅ `src/api/userApi.js` - APIs de usuarios
- ✅ `src/hooks/useAuth.js` - Hook de autenticación
- ✅ `src/hooks/useApiError.js` - Hook de manejo de errores
- ✅ `src/components/ProtectedRoute.jsx` - Rutas protegidas
- ✅ `src/components/Dashboard.jsx` - Dashboard de ejemplo
- ✅ `src/config/env.js` - Configuración de variables

### Funcionalidades Implementadas:
- ✅ Autenticación con JWT
- ✅ Manejo de errores de API
- ✅ Rutas protegidas
- ✅ Interceptores de axios
- ✅ Hooks personalizados para APIs
- ✅ Dashboard funcional

## 📝 Próximos Pasos

1. **Proporciona la información del backend** (endpoints, formato de datos)
2. **Crea un archivo `.env`** con las variables de entorno
3. **Ajusta las APIs** según tu backend específico
4. **Prueba la conexión** con tu backend

## 🔧 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_BASE_URL=https://tu-backend-url.com/api
VITE_APP_NAME=AG Mantenimiento
VITE_WHATSAPP_NUMBER=+59170000000
```

## 🧪 Pruebas

Para probar la conexión:

1. Ejecuta `npm run dev`
2. Ve a `/login`
3. Intenta hacer login con credenciales válidas
4. Si funciona, te redirigirá al dashboard

¿Puedes proporcionarme la información del backend para ajustar todo correctamente? 