# Configuración de Formspree para el Formulario de Contacto

El formulario de contacto enviará emails a **info@norteagestión.es** usando Formspree.

## 📋 Pasos para activar el envío de emails (MUY SIMPLE):

### 1️⃣ Crear cuenta en Formspree

1. Ve a [https://formspree.io/](https://formspree.io/)
2. Click en **"Get Started"** o **"Sign Up"**
3. Regístrate con tu email (puede ser cualquier email, no tiene que ser info@norteagestión.es)

---

### 2️⃣ Crear un nuevo formulario

1. Una vez dentro, click en **"+ New Form"**
2. Dale un nombre al formulario: **"Nortea - Formulario de Contacto"**
3. En **"Email"** escribe: **info@norteagestión.es** (aquí es donde llegarán los mensajes)
4. Click en **"Create Form"**

---

### 3️⃣ Obtener el Form ID

Después de crear el formulario verás algo como:

```
https://formspree.io/f/xpwzabcd
```

El **Form ID** es la parte después de `/f/`: **xpwzabcd**

✅ **Copia ese ID**

---

### 4️⃣ Configurar el Form ID en el código

1. Abre el archivo: **src/components/Contact.jsx**

2. Busca esta línea (alrededor de la línea 17):

```javascript
const formspreeEndpoint = "https://formspree.io/f/TU_FORM_ID";
```

3. Reemplaza **TU_FORM_ID** con tu Form ID:

```javascript
const formspreeEndpoint = "https://formspree.io/f/xpwzabcd";
```

4. **Guarda el archivo**

---

### 5️⃣ ¡Listo! Probar el formulario

1. El navegador se recargará automáticamente
2. Ve a la sección de contacto en tu web: http://localhost:5173/#contacto
3. Rellena el formulario de prueba
4. Click en **"Solicitar evaluación gratuita"**
5. **IMPORTANTE:** La primera vez que envíes un formulario, Formspree te pedirá que **confirmes tu email** (te enviarán un email de verificación)
6. Confirma el email y vuelve a enviar el formulario
7. ¡Deberías recibir el mensaje en **info@norteagestión.es**!

---

## ✅ Verificación

Si todo está correcto:
- ✅ El botón mostrará "Enviando..." mientras se procesa
- ✅ Aparecerá un mensaje verde: "¡Mensaje enviado correctamente!"
- ✅ El formulario se limpiará automáticamente
- ✅ Recibirás el email en **info@norteagestión.es**

Si hay errores:
- ❌ Aparecerá un mensaje rojo de error
- 🔑 Verifica que el Form ID sea correcto
- 📧 Asegúrate de haber confirmado el email de verificación (primera vez)

---

## 📊 Límites del plan gratuito

- **50 envíos/mes** gratis
- Si necesitas más, Formspree tiene planes desde **$10/mes** (100 envíos/mes)

---

## 📧 Formato del email que recibirás

Cuando alguien complete el formulario, recibirás un email en **info@norteagestión.es** con:

```
Nombre: [nombre del usuario]
Email: [email del usuario]
Teléfono: [teléfono]
Localidad del alojamiento: [localidad]
Tipo de alojamiento: [tipo]
Enlace al anuncio: [URL si lo proporcionó]
Necesidades: [lo que escribió]
```

---

## 🎨 Personalización adicional (Opcional)

En el dashboard de Formspree puedes:
- 📝 Personalizar el mensaje de confirmación
- 🔔 Añadir notificaciones a otros emails
- 📊 Ver estadísticas de envíos
- 🚫 Configurar spam protection
- ✉️ Personalizar el asunto del email

---

## 🆘 Soporte

Si tienes problemas:
1. Verifica que el Form ID esté correcto en Contact.jsx
2. Confirma que verificaste tu email en Formspree
3. Revisa la documentación: [https://help.formspree.io/](https://help.formspree.io/)

---

**¡Eso es todo!** Mucho más simple que EmailJS 🎉

El formulario ya estará enviando emails a **info@norteagestión.es**
