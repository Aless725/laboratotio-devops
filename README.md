Aquí tienes el archivo `README.md` completo y estructurado en Markdown, listo para que lo copies y lo subas a tu repositorio de GitHub.

```markdown
# Laboratorio 01 DevOps - Monitorización IoT de Invernadero 🌱

Este repositorio contiene la solución a la evaluación práctica del **Laboratorio 01 de DevOps**. Consiste en un prototipo IoT contenerizado diseñado para monitorizar la intensidad de iluminación dentro de un invernadero. 

El proyecto demuestra la integración de un flujo de telemetría completo (generación, publicación, distribución, suscripción y visualización) junto con la aplicación de buenas prácticas de control de versiones utilizando Git y GitHub.

## 📌 Arquitectura del Sistema (Flujo de Telemetría)

El proyecto simula el viaje de una lectura de iluminación extremo a extremo. Los componentes desempeñan las siguientes funciones:

1. **Nodo IoT (Generación y Publicación):** Un script en Node.js simula las lecturas del sensor físico. Genera datos de intensidad lumínica (incluyendo un valor crítico de 1250 lux) y los publica mediante el protocolo MQTT en el tópico `iot/invernadero/iluminacion`.
2. **Broker MQTT (Distribución):** Desplegado localmente con Eclipse Mosquitto vía Docker. Actúa como enrutador, recibiendo los mensajes del nodo IoT y distribuyéndolos a todos los clientes suscritos.
3. **Dashboard Web (Suscripción, Procesamiento y Visualización):** Una interfaz web suscrita al broker a través de WebSockets. Recibe los mensajes en tiempo real, procesa los datos mediante una regla de negocio y actualiza la visualización gráfica para el usuario final.

## 🛠️ Tecnologías Utilizadas

* **Infraestructura y Contenedores:** Docker, Docker Compose.
* **Mensajería IoT:** MQTT (Eclipse Mosquitto).
* **Backend (Simulador):** Node.js, paquete `mqtt`.
* **Frontend (Dashboard):** HTML5, JavaScript Vainilla, Tailwind CSS, Lucide Icons.
* **Control de Versiones:** Git, GitHub.

## 📂 Estructura del Repositorio

```text
laboratorio-devops/
│── docker-compose.yml       # Configuración para levantar el contenedor del broker
│── mosquitto.conf           # Configuración de puertos y permisos (MQTT y WebSockets)
│── README.md                # Documentación del proyecto
├── simulador/
│   ├── package.json         # Dependencias de Node.js
│   └── sensor.js            # Script del Nodo IoT publicador
└── dashboard/
    ├── index.html           # Interfaz gráfica principal
    ├── css/
    │   └── style.css        # Estilos personalizados
    └── js/
        └── app.js           # Lógica de suscripción MQTT y reglas de alerta

```

## 🚀 Instrucciones de Ejecución

Para ejecutar este proyecto en tu máquina local, sigue estos pasos en paralelo:

### 1. Levantar el Broker MQTT

Asegúrate de tener Docker Desktop ejecutándose. Abre una terminal en la raíz del proyecto y ejecuta:

```bash
docker compose up -d

```

*Esto iniciará Mosquitto en los puertos `1883` (MQTT) y `9001` (WebSockets).*

### 2. Iniciar el Nodo IoT (Simulador)

Abre una nueva terminal, navega a la carpeta del simulador e instala las dependencias (solo la primera vez):

```bash
cd simulador
npm install

```

Luego, inicia la simulación:

```bash
node sensor.js

```

*El terminal mostrará los valores de lux publicándose cada 3 segundos.*

### 3. Visualizar el Dashboard

Abre tu explorador de archivos y haz doble clic en `dashboard/index.html` para abrirlo en tu navegador web. Verás los datos reflejarse en tiempo real.

## ⚠️ Reto Adicional Resuelto (Reglas de Alerta)

El sistema está preparado para manejar lecturas elevadas intencionadas. El script inyecta un valor de **1250 lux**.
El componente que implementa la regla para manejar esto es el **Dashboard Frontend** (`app.js`). Al recibir el dato, el script evalúa si el nivel de iluminación supera el umbral establecido de **1000 lux**. Si la condición se cumple, se altera el DOM para detonar una alerta visual crítica (color rojo), indicando estrés lumínico en el cultivo.

---

**Desarrollado por:** Roberto Hugo Angeles Neciosup
**Curso:** Herramientas de Desarrollo Profesional TIC

```

```
