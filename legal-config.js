'use strict';
// Datos del titular y parámetros del servicio. RELLÉNALOS ANTES DE PUBLICAR: aparecen en las Condiciones,
// la Política de privacidad, los Ajustes y las solicitudes de retirada. Un campo vacío se muestra como
// «pendiente» y, si falta el correo, las retiradas quedan desactivadas. Comprueba con: npm run check-launch
const WatchEarnLegal = Object.freeze({
  operator: Object.freeze({
    name: 'Miguel Gutiérrez García',      // Nombre y apellidos (autónomo) o razón social (sociedad)
    taxId: '',     // NIF, DNI o CIF
    address: '',   // Domicilio completo, con código postal y localidad
    email: 'cashmasters.contact@gmail.com',     // Correo de contacto: soporte, privacidad, propiedad intelectual y retiradas
    registry: ''   // Solo sociedades: datos de inscripción en el Registro Mercantil (si eres autónomo, déjalo vacío)
  }),
  hosting: 'GitHub, Inc. (Estados Unidos)',     // Proveedor de alojamiento y país, p. ej. «Netlify, Inc. (Estados Unidos)»
  // Países cuyos residentes pueden participar y cobrar: 'ALL' (todos los países en los que podamos pagar por PayPal y la
  // ley permita participar, salvo excludedCountries) o una lista de códigos ISO, p. ej. ['ES', 'PT', 'GB'].
  countries: 'ALL',
  excludedCountries: ['BY', 'CU', 'IR', 'KP', 'RU', 'SY'],   // Sanciones internacionales; PayPal tampoco opera en ellos
  minAge: 18,
  payoutDays: 30,           // Plazo máximo para pagar una retirada válida, en días naturales
  closingNoticeDays: 30,    // Preaviso mínimo antes de cerrar el servicio
  closingClaimDays: 60,     // Plazo para solicitar el saldo canjeable tras el cierre
  adr: ''                   // Sistema de resolución alternativa de litigios al que estés adherido (vacío si ninguno)
});
