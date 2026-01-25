# Configuración de EmailJS para el formulario de contacto

## Paso 1: Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

## Paso 2: Conectar tu servicio de email

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta
5. **IMPORTANTE**: Usa la cuenta que tenga acceso a info@norteagestionturistica.es
6. Guarda el **Service ID** que aparece (ej: "service_abc123")

## Paso 3: Crear plantilla de email

1. Ve a "Email Templates" en el menú
2. Haz clic en "Create New Template"
3. Configura la plantilla con estos campos:

**Subject (Asunto):**
```
Nueva consulta desde Nortea - {{name}}
```

**Content (Contenido):**
```
Has recibido una nueva consulta desde el formulario web de Nortea Gestión Turística.

Datos del contacto:
-----------------
Nombre: {{name}}
Email: {{email}}
Teléfono: {{phone}}

Datos del alojamiento:
---------------------
Localidad: {{location}}
Tipo de alojamiento: {{type}}
Enlace al anuncio: {{listing}}

Necesidades:
-----------
{{needs}}

---
Este mensaje fue enviado desde el formulario de contacto de www.norteagestionturistica.es
```

**To Email (Destinatario):**
```
info@norteagestionturistica.es
```

4. Guarda la plantilla y copia el **Template ID** (ej: "template_xyz789")

## Paso 4: Obtener tu Public Key

1. Ve a "Account" > "General" en el menú
2. Busca la sección "API Keys"
3. Copia tu **Public Key** (ej: "AbCdEfGhIjKlMnOp")

## Paso 5: Actualizar el código

Abre el archivo `src/components/Contact.jsx` y reemplaza estas líneas (líneas 17-19):

```javascript
const SERVICE_ID = "TU_SERVICE_ID"; // Reemplazar con tu Service ID
const TEMPLATE_ID = "TU_TEMPLATE_ID"; // Reemplazar con tu Template ID
const PUBLIC_KEY = "TU_PUBLIC_KEY"; // Reemplazar con tu Public Key
```

Por ejemplo:
```javascript
const SERVICE_ID = "service_abc123";
const TEMPLATE_ID = "template_xyz789";
const PUBLIC_KEY = "AbCdEfGhIjKlMnOp";
```

## Paso 6: Probar el formulario

1. Ejecuta `npm run dev`
2. Ve a la sección de contacto
3. Llena el formulario y envíalo
4. Verifica que llegue el email a info@norteagestionturistica.es

## Límites del plan gratuito

- 200 emails por mes
- Si necesitas más, puedes actualizar al plan de pago

## Solución de problemas

Si no recibes emails:
1. Verifica que los IDs estén correctamente copiados
2. Revisa la carpeta de spam
3. Confirma que la cuenta de email esté correctamente conectada en EmailJS
4. Revisa los logs en la consola del navegador (F12)
5. Verifica el dashboard de EmailJS para ver el historial de emails enviados

## Seguridad

**IMPORTANTE**: Los valores de SERVICE_ID, TEMPLATE_ID y PUBLIC_KEY pueden ser visibles en el código del frontend. Esto es normal para EmailJS, ya que el Public Key está diseñado para ser público. La seguridad se maneja del lado de EmailJS, no exponiendo credenciales sensibles.

Si quieres más seguridad, puedes:
1. Habilitar CAPTCHA en EmailJS
2. Limitar el dominio desde el cual se pueden enviar emails en la configuración de EmailJS
