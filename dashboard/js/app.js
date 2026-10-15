const brokerUrl = 'ws://localhost:9001'; 
const client = mqtt.connect(brokerUrl);
const topico = 'iot/invernadero/iluminacion';
const UMBRAL_ALERTA = 1000;
const MAX_LUX_VISUAL = 1250; // Para calcular el porcentaje de la barra

const valorLuxDOM = document.getElementById('valor-lux');
const barraLuxDOM = document.getElementById('barra-lux');
const alertaBoxDOM = document.getElementById('alerta-box');
const timestampDOM = document.getElementById('timestamp');
const iconContainerDOM = document.getElementById('icon-container');

client.on('connect', () => {
    console.log('✅ Conectado al Broker MQTT');
    client.subscribe(topico, (err) => {
        if (!err) console.log(`📡 Suscrito a: ${topico}`);
    });
});

client.on('message', (topic, message) => {
    const data = JSON.parse(message.toString());
    const lux = data.iluminacion_lux;
    
    // Actualizar Texto
    valorLuxDOM.innerText = lux;
    timestampDOM.innerText = new Date(data.timestamp).toLocaleTimeString();

    // Actualizar Barra (Porcentaje)
    let porcentaje = (lux / MAX_LUX_VISUAL) * 100;
    if(porcentaje > 100) porcentaje = 100;
    barraLuxDOM.style.width = `${porcentaje}%`;

    // Reglas de estado visual y Alertas
    if (lux >= UMBRAL_ALERTA) {
        valorLuxDOM.classList.replace('text-slate-700', 'text-red-600');
        barraLuxDOM.classList.replace('bg-blue-500', 'bg-red-500');
        iconContainerDOM.className = "p-3 bg-red-100 rounded-full text-red-600 transition-colors duration-300";
        alertaBoxDOM.classList.remove('hidden');
    } else {
        valorLuxDOM.classList.replace('text-red-600', 'text-slate-700');
        barraLuxDOM.classList.replace('bg-red-500', 'bg-blue-500');
        iconContainerDOM.className = "p-3 bg-blue-100 rounded-full text-blue-600 transition-colors duration-300";
        alertaBoxDOM.classList.add('hidden');
    }
});