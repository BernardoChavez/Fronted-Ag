# Actualización de CORS en el Backend

## 🔧 **Actualizar settings.py**

En tu archivo `settings.py` del backend, actualiza la configuración de CORS:

```python
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://tu-dominio-frontend.com',  # Agrega tu dominio de producción
    'https://agmantto.vercel.app',      # Si usas Vercel
    'https://agmantto.netlify.app',     # Si usas Netlify
]
```

O si quieres permitir todos los orígenes durante desarrollo:

```python
CORS_ALLOW_ALL_ORIGINS = True  # Solo para desarrollo
```

## 🚀 **Tu frontend ya está configurado**

Ahora tu frontend está completamente configurado para trabajar con tu backend Django:

### ✅ **Funcionalidades implementadas:**

1. **Autenticación JWT** - Login/logout con tokens
2. **APIs actualizadas** - Endpoints correctos para Django
3. **Manejo de datos** - Estructura correcta para tus modelos
4. **Dashboard funcional** - Muestra servicios y usuarios
5. **Manejo de errores** - Errores de autenticación y API

### 📝 **Para probar:**

1. **Ejecuta el frontend:**
```bash
npm run dev
```

2. **Ve a `/login`** y usa:
   - Username: tu_usuario
   - Password: tu_password

3. **Si funciona**, te redirigirá al dashboard

### 🔧 **Credenciales de prueba:**

Necesitas crear un usuario en tu backend Django para probar:

```python
# En Django shell o admin
from django.contrib.auth.models import User
from api.models import Usuario

user = User.objects.create_user(
    username='testuser',
    password='testpass123',
    email='test@example.com'
)

usuario = Usuario.objects.create(
    user=user,
    telefono='123456789',
    direccion='Calle Test 123'
)
```

¿Ya tienes usuarios creados en tu backend para probar? 