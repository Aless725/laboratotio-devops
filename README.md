# Laboratorio 01 DevOps - Monitorización IoT de Invernadero 🌱

Este proyecto es una prueba de concepto (PoC) para monitorizar la intensidad lumínica de un invernadero utilizando una arquitectura IoT contenerizada, resolviendo el caso de estudio propuesto para la evaluación práctica.

## 📌 Arquitectura del Proyecto

El sistema está dividido en tres componentes principales:
1. **Broker MQTT (Eclipse Mosquitto)**: Intermediario desplegado vía Docker que gestiona la mensajería.
2. **Nodo IoT Simulado (Node.js)**: Script que genera y publica lecturas simuladas (de 180 a 1250 lux) en el tópico `iot/invernadero/iluminacion`.
3. **Dashboard Web**: Interfaz Frontend interactiva suscrita al broker a través de WebSockets, encargada de la visualización en tiempo real y el procesamiento de la regla de alerta para lecturas críticas.

## 🛠️ Tecnologías Utilizadas

* **Gestión de versiones**: Git & GitHub
* **Contenedores**: Docker & Docker Compose
* **Protocolo**: MQTT (TCP y WebSockets)
* **Backend IoT**: Node.js & npm (`mqtt` package)
* **Frontend**: HTML5, JavaScript Vainilla, Tailwind CSS y Lucide Icons.

## 🚀 Instrucciones de Ejecución

### 1. Levantar la Infraestructura (Broker)
Es necesario tener Docker instalado. En la raíz del proyecto, ejecuta:
```bash
docker compose up -d