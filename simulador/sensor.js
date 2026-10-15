const mqtt = require('mqtt');
// Conexión al broker local (si usas Docker) o uno público de pruebas
const client = mqtt.connect('mqtt://localhost:1883'); 
// const client = mqtt.connect('mqtt://broker.emqx.io:1883'); // Alternativa en la nube

const topico = 'iot/invernadero/iluminacion';
const lecturas = [180, 350, 520, 750, 900, 1250]; // Incluye el reto de 1250 lux
let indice = 0;

client.on('connect', () => {
    console.log('Nodo IoT conectado al Broker MQTT.');
    
    setInterval(() => {
        const lux = lecturas[indice];
        const payload = JSON.stringify({
            sensor: "Invernadero_Sector_A",
            iluminacion_lux: lux,
            timestamp: new Date().toISOString()
        });

        client.publish(topico, payload);
        console.log(`Publicado: ${lux} lux en [${topico}]`);

        indice = (indice + 1) % lecturas.length;
    }, 3000); // Envía un dato cada 3 segundos
});