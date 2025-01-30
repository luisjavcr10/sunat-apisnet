const axios = require('axios');

// Datos
const token = 'apis-token-1.aTSI1U7KEuT-6bbbCguH-4Y8TI6KS73N';
const ruc = '10460278975';

// Configuración de la solicitud
const config = {
  method: 'get',
  url: `https://api.apis.net.pe/v2/sunat/ruc?numero=${ruc}`,
  headers: {
    'Referer': 'http://apis.net.pe/api-ruc',
    'Authorization': `Bearer ${token}`
  }
};

// Realizar la solicitud
axios(config)
  .then(response => {
    // Procesar la respuesta
    const empresa = response.data;
    console.log('Datos de la empresa:', empresa);
  })
  .catch(error => {
    // Manejar errores
    console.error('Error al consultar la API:', error.message);
});