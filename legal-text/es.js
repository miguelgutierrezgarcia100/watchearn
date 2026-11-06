'use strict';
// Spanish legal text: the version that prevails. Translations in this folder must keep the same structure,
// placeholders ({…}), links and markup (tests/legal.test.cjs). Markup: **bold**, `code`, [label](page).
Legal.add('es', {
  note: '',
  pending: 'pendiente',
  fields: {name: 'nombre o razón social', taxId: 'NIF', address: 'domicilio', email: 'correo de contacto', hosting: 'proveedor de alojamiento'},
  registry: ', inscrita en {registry}',
  adrYes: 'Estamos adheridos a {adr}.',
  adrNo: 'No estamos adheridos a ningún sistema de resolución alternativa de litigios de consumo.',
  allCountries: 'cualquier país en el que podamos pagarte por PayPal y la ley permita participar (salvo {excluded})',
  version: 'Versión {version} · Última actualización: {date}',
  rules: {
    intro: 'Hasta {c25} monedas, el factor de los premios baja del {f0} al {f25} de su valor base; hasta {c30}, al {f30}; hasta {c40}, al {f40}, y después la caída se acelera. Desde {c45} monedas, un segundo freno progresivo reduce todas las recompensas hasta dividirlas entre 300 al llegar a {c50}. Ningún premio individual supera {max} monedas.',
    reference: 'Tu referencia actual · 5 segundos de vídeo',
    coins: '{n} monedas',
    head: ['Saldo', 'Vídeo · 5 s', 'Cofre máximo'],
    rounding: 'Los importes se muestran redondeados, pero los cálculos usan seis decimales. La retirada solo se habilita al alcanzar realmente el importe elegido.'
  },
  terms: {
    title: 'Condiciones de uso',
    summaryTitle: '**Lo esencial** (este resumen no sustituye al texto completo):',
    summary: [
      'WatchEarn es gratuito. Solo para mayores de {age} años residentes en {countries}.',
      '{c1} monedas = {rate}. La primera retirada es de {goal} y se revisa a mano antes de pagarla.',
      '**Las recompensas decrecen.** Llegar a la primera retirada requiere unas {range} horas de uso activo; el último 10 % de la meta, más de {last} horas. No es una fuente de ingresos.',
      'Tu saldo se guarda solo en este dispositivo (en el navegador o en la app). Si borras sus datos, desinstalas la app o cambias de dispositivo, se pierde y no podemos recuperarlo.',
      'Bots, trampas o varios perfiles por persona anulan las monedas y las retiradas.'
    ],
    sections: [
      ['1. Titular del servicio', [
        'WatchEarn es un servicio prestado por {name}, con NIF {taxId} y domicilio en {address}{registry}. Correo de contacto: {email}. Información facilitada conforme al artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI).'
      ]],
      ['2. Objeto y aceptación', [
        'Estas condiciones regulan el uso de WatchEarn: un servicio gratuito en el que ves vídeos cortos, completas tareas y juegos y acumulas monedas canjeables por dinero según el apartado 6. No hace falta ninguna compra, pago ni suscripción.',
        'El servicio puede tener errores e interrupciones y cambiar conforme al apartado 9. No garantizamos su disponibilidad continuada.',
        'Para aceptar estas condiciones debes pulsar «He leído y acepto». Al aceptarlas declaras que cumples los requisitos del apartado 3. Sin aceptarlas no se reproducen vídeos ni se obtienen recompensas. Guardamos en tu navegador la versión aceptada y la fecha.',
        'No archivamos una copia individual de tu aceptación: estas condiciones están siempre disponibles en la página [Condiciones de uso](terms.html), donde puedes guardarlas o imprimirlas (artículo 27 LSSI). Se ofrecen en varios idiomas; si una traducción difiere, prevalece la versión en español.'
      ]],
      ['3. Quién puede participar', [
        'Puedes usar WatchEarn si tienes {age} años o más, capacidad para contratar y resides en {countries}. Cada persona puede participar con un único perfil, es decir, un navegador en un dispositivo. Los saldos de distintos navegadores o dispositivos no se pueden sumar, transferir ni canjear juntos.'
      ]],
      ['4. Cómo se obtienen monedas', [
        '**Visionado.** Cuenta el tiempo de reproducción activa de la primera visualización de cada aparición de un vídeo, abonado en intervalos de 3,5 a 6,5 segundos. No suman las pausas, la app en segundo plano, los saltos ni las repeticiones automáticas.',
        '**Bonus y juegos.** Cada 2 a 4 vídeos puede aparecer un bonus opcional: cofres (tres premios posibles, con probabilidad de 1 entre 3 cada uno), bonus de monedas, regalo o multiplicador (×2 55 %, ×3 25 %, ×4 12 %, ×5 6 %, ×10 1,8 % y ×20 0,2 %). Además hay un premio diario, cinco tareas que se renuevan cada hora y cuatro juegos con tres partidas diarias cada uno; la ruleta y el rasca tienen seis premios equiprobables.',
        'Todo es gratuito: no hay apuestas, compras ni participación de pago. Los resultados aleatorios se generan en tu dispositivo con su generador criptográfico. La app para Android incluye publicidad y vídeos con recompensa opcionales (apartado 16); la versión web no tiene publicidad.'
      ]],
      ['5. Valor de las monedas y recompensas decrecientes', [
        'Las monedas no son dinero, dinero electrónico ni un depósito: no generan intereses, no se pueden transferir ni vender y solo se canjean conforme al apartado 6. Su valor de canje depende de la moneda de tu país de residencia: la primera retirada, {c50} monedas, equivale a {goal}, y {c1} monedas, a {rate}. El importe que muestra la app es esa equivalencia, no un saldo bancario. Valor de la primera retirada en cada moneda:',
        '{currencies}',
        '**Las recompensas disminuyen a medida que crece tu saldo:**',
        '{rules}',
        '**Tiempo estimado.** Según nuestras simulaciones del sistema actual, llegar a la primera retirada requiere entre unas {range} horas de uso activo, con o sin bonus y juegos. Viendo solo vídeos: la mitad de la meta en menos de {m25} minutos, el 80 % en unas {h40} horas, el 90 % en unas {h45} horas, el 98 % en unas {h49} horas y la meta completa en unas {h50} horas. Con tres horas diarias son más de dos años. Son estimaciones, no una garantía, y WatchEarn no es un empleo ni una fuente de ingresos.'
      ]],
      ['6. Retiradas', [
        'Puedes solicitar una retirada de {amounts} cuando tu saldo alcance ese importe. Pagamos por PayPal o, en España, por Bizum, a una cuenta a tu nombre.',
        'Al confirmar la retirada en la Cartera se descuentan las monedas y se abre tu correo con la solicitud y su código. Envíala a {email} con los datos de tu cuenta de cobro y el nombre de su titular. Si no llega a enviarse, puedes reenviarla o copiarla desde la Cartera.',
        'Revisamos cada solicitud y podemos pedirte información razonable para comprobar tu identidad, edad, residencia y la titularidad de la cuenta. Pagamos las solicitudes válidas en un máximo de {payoutDays} días naturales desde que recibimos la solicitud completa. No cobramos comisiones; tu proveedor de pago puede aplicar las suyas.',
        'Si una solicitud incumple estas condiciones, te lo comunicaremos por correo con el motivo y podrás responder. Si el problema se puede corregir, te indicaremos cómo hacerlo sin que pierdas el importe.',
        'Las cantidades recibidas pueden tener efectos fiscales y eres responsable de declararlas. Si la normativa nos obliga a practicar retenciones o a informar a la Administración tributaria, lo haremos y te lo indicaremos.'
      ]],
      ['7. Uso correcto y prevención del fraude', [
        'No está permitido obtener monedas mediante bots, scripts, emuladores o cualquier automatización; manipular el almacenamiento, el código, el reloj del dispositivo o las peticiones de la app; aprovechar errores; usar varios perfiles para multiplicar recompensas, ni vender o ceder monedas o perfiles.',
        'Si detectamos estas conductas, podremos anular las monedas obtenidas indebidamente, rechazar las retiradas afectadas y excluirte del servicio, de forma proporcionada y comunicándote el motivo cuando sea posible. También podemos corregir los importes abonados por un error técnico manifiesto.'
      ]],
      ['8. Contenidos y propiedad intelectual', [
        'Los vídeos pertenecen a sus creadores y titulares de derechos; WatchEarn muestra el nombre del creador y un enlace al original. No recibes ningún derecho sobre ellos: solo puedes verlos dentro de la app, para uso personal. Los enlaces a YouTube y a otros sitios llevan a servicios de terceros con sus propias condiciones.',
        'Si eres titular de derechos y consideras que un contenido se usa sin autorización, escríbenos a {email} indicando el contenido, tus derechos y tus datos de contacto. Lo retiraremos con diligencia cuando tengamos conocimiento efectivo de su ilicitud.',
        'El nombre, el diseño y el código de WatchEarn pertenecen al titular, salvo los recursos de terceros con licencia propia, como las fuentes DM Sans y Manrope (SIL Open Font License).'
      ]],
      ['9. Cambios y cierre del servicio', [
        'Podemos modificar el servicio, las recompensas o estas condiciones por motivos válidos (legales, técnicos, de seguridad, prevención del fraude, sostenibilidad o evolución del servicio), avisándote en la app con al menos 15 días de antelación, salvo cambios urgentes exigidos por la ley o la seguridad. Para seguir usando la app deberás aceptar la nueva versión; si no la aceptas, puedes dejar de usarla y solicitar las retiradas a las que ya tuvieras derecho. Las monedas ya obtenidas conservan su valor de canje.',
        'Si cerramos el servicio, lo avisaremos con al menos {noticeDays} días de antelación, y podrás solicitar retiradas del saldo que alcance el umbral hasta {claimDays} días después del cierre. **El saldo inferior a la primera retirada no es canjeable y se extingue al cerrar el servicio.**'
      ]],
      ['10. Responsabilidad', [
        'Respondemos de los daños causados por dolo o culpa grave y de aquellos cuya responsabilidad no pueda excluirse legalmente. No respondemos de interrupciones ajenas a nuestro control ni de la pérdida del saldo por borrar los datos del navegador, usar navegación privada o cambiar de dispositivo. Nada en estas condiciones limita tus derechos como consumidor.'
      ]],
      ['11. Duración, baja y desistimiento', [
        'El contrato dura mientras uses el servicio y, como máximo, hasta el cierre del servicio. Puedes dejar de usar WatchEarn cuando quieras, sin coste, y borrar todos sus datos desde Ajustes → Borrar mis datos. También puedes desistir del contrato durante los 14 días naturales que reconoce el artículo 102 del Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios, sin indicar el motivo: basta con dejar de usar la app y, si quieres, comunicárnoslo. Podemos resolver el contrato si incumples estas condiciones, comunicándote el motivo.'
      ]],
      ['12. Privacidad', [
        'El tratamiento de tus datos se describe en la [Política de privacidad](privacy.html).'
      ]],
      ['13. Atención al usuario y reclamaciones', [
        'Puedes enviarnos consultas y reclamaciones a {email}. Responderemos lo antes posible y, como máximo, en un mes. {adr} También puedes dirigirte a las autoridades de consumo de tu lugar de residencia o solicitar un arbitraje de consumo, que es voluntario para ambas partes.'
      ]],
      ['14. Ley aplicable y jurisdicción', [
        'Estas condiciones se rigen por la ley española. Si eres consumidor, puedes acudir a los tribunales de tu domicilio y conservas la protección de las normas imperativas de tu país de residencia.'
      ]],
      ['15. Nulidad parcial', [
        'Si alguna cláusula se declara nula, las demás seguirán vigentes y la afectada se sustituirá por la regulación legal aplicable.'
      ]],
      ['16. App para Android y publicidad', [
        'WatchEarn también se ofrece como app para Android, con el mismo servicio y estas mismas condiciones. En la app, las referencias al navegador se entienden hechas a la app: tu saldo se guarda en ella y se pierde si borras sus datos o la desinstalas, y cada instalación en un dispositivo cuenta como un perfil (apartado 3).',
        'La app muestra publicidad servida por AppLovin y sus socios de mediación: **anuncios a pantalla completa** entre vídeos, como máximo cada pocos vídeos y sin monedas, y **vídeos con recompensa** opcionales, que eliges ver para obtener monedas extra en Recompensas (hasta {adsPerDay} al día) o para doblar un premio de cofre o un bonus de monedas. Un premio doblado tampoco supera {max} monedas.',
        'Las monedas de un vídeo con recompensa solo se abonan si AppLovin confirma que lo has visto completo. Si lo cierras antes o falla, no hay recompensa y el premio pendiente se conserva sin doblar. No garantizamos que siempre haya anuncios disponibles. Pulsar un anuncio es voluntario y no da monedas; generar visualizaciones o clics artificiales está prohibido (apartado 7). Los anuncios y lo que anuncian son responsabilidad de sus anunciantes.',
        'Los anuncios personalizados solo se muestran con tu consentimiento, que puedes cambiar en Ajustes; el tratamiento de tus datos se explica en la [Política de privacidad](privacy.html).'
      ]]
    ]
  },
  privacy: {
    title: 'Política de privacidad',
    summaryTitle: '**Lo esencial**',
    intro: 'WatchEarn («nosotros») se compromete a proteger tu privacidad. Esta política explica qué información recogemos, cómo la usamos y cómo la protegemos cuando usas WatchEarn, incluidos los servicios de terceros integrados en la app.',
    summary: [
      'No hay registro ni cuentas: tu progreso se guarda en tu dispositivo y no lo recibimos.',
      'Solo tratamos datos personales si nos escribes o solicitas una retirada.',
      'La web no tiene publicidad, analítica ni cookies de seguimiento. La app para Android muestra anuncios de AppLovin, que recibe datos de tu dispositivo; los personalizados, solo con tu consentimiento.',
      'Puedes borrar tus datos desde Ajustes → Borrar mis datos y ejercer tus derechos escribiéndonos.'
    ],
    sections: [
      ['1. Información que recogemos', [
        '**1.1 Datos personales.** Si nos envías una solicitud de retirada o nos escribes, tratamos tu correo electrónico, tu nombre, los datos de tu cuenta de cobro (número de Bizum o correo de PayPal), tu país de residencia, el código, importe y fecha de la solicitud y el contenido de los mensajes. Si es necesario para comprobar los requisitos, podemos pedirte información que acredite tu identidad, edad y residencia; solo la imprescindible.',
        '**1.2 Datos de uso.** La app guarda en el almacenamiento local de tu navegador tu saldo, movimientos, tareas, juegos, vídeos guardados, orden del feed, tiempo de visionado, premios pendientes, solicitudes de retirada, ajustes e idioma, y la versión y fecha de las condiciones aceptadas, en los registros `watchearn-v1`, `watchearn-terms` y `watchearn-language`. No se envían a nuestros servidores ni tenemos acceso a ellos.',
        '**1.3 Datos del dispositivo.** En la app para Android, el SDK de publicidad de AppLovin recoge datos técnicos del dispositivo, como el identificador de publicidad, la dirección IP, el modelo y el sistema operativo (apartado 3). Si visitas la web de WatchEarn, el proveedor de alojamiento ({hosting}) recibe tu dirección IP, la página solicitada, la fecha y hora y datos técnicos del navegador para servirla y protegerla. La moneda y el idioma se eligen con la zona horaria y los idiomas de tu dispositivo, sin enviarlos a nadie ni usar tu ubicación.',
        '**1.4 Enlaces.** Si abres un vídeo original irás a YouTube, que trata tus datos según su propia política. Si usas Compartir, el título y el enlace se entregan a la función de compartir de tu dispositivo.',
        'No recogemos datos sensibles, como el origen étnico, las creencias religiosas, la salud o los datos biométricos, y te pedimos que no nos los envíes.',
        '**Almacenamiento local y cookies.** WatchEarn no usa cookies. Los registros locales son estrictamente necesarios para prestar el servicio que solicitas, por lo que no requieren consentimiento (artículo 22.2 LSSI). La web no tiene analítica, publicidad ni seguimiento de terceros. En la app para Android, el SDK de AppLovin guarda y lee información en tu dispositivo para mostrar anuncios (apartado 3).'
      ]],
      ['2. Cómo usamos tu información', [
        [
          'Prestar el servicio (vídeos, recompensas, ajustes y aceptación de las condiciones): ejecución del contrato (art. 6.1.b RGPD).',
          'Tramitar, verificar y pagar las retiradas: ejecución del contrato (art. 6.1.b RGPD).',
          'Prevenir el fraude: interés legítimo en proteger el programa y a sus participantes (art. 6.1.f RGPD).',
          'Atender consultas, reclamaciones y el ejercicio de derechos: ejecución del contrato y obligación legal (art. 6.1.b y 6.1.c RGPD).',
          'Cumplir las obligaciones contables y fiscales de los pagos: obligación legal (art. 6.1.c RGPD).',
          'Servir el sitio con seguridad: interés legítimo (art. 6.1.f RGPD).'
        ],
        'No elaboramos perfiles ni tomamos decisiones solo automatizadas: cada retirada la revisa una persona. En la app para Android, AppLovin y sus socios solo personalizan los anuncios si das tu consentimiento (apartado 3).'
      ]],
      ['3. Servicios y SDK de terceros', [
        '**Quién.** La app para Android integra el SDK AppLovin MAX de AppLovin Corporation, que sirve los anuncios directamente o a través de las redes publicitarias de su mediación. AppLovin y esas redes tratan los datos como responsables independientes, según sus propias políticas ([política de privacidad de AppLovin](https://legal.applovin.com/privacy/)). Nosotros no recibimos esos datos de forma que te identifiquen; solo informes agregados de anuncios e ingresos.',
        '**Qué datos.** El identificador de publicidad de tu dispositivo (salvo que lo hayas eliminado en los ajustes de Android), la dirección IP, el modelo y el sistema operativo, el idioma, la zona horaria, el operador y el tipo de conexión, la app y los anuncios mostrados y tus interacciones con ellos (visualizaciones, clics y recompensas).',
        '**Finalidades y bases jurídicas.** Mostrar anuncios no personalizados, limitar su frecuencia, medirlos, abonar las recompensas y prevenir el fraude publicitario: interés legítimo en financiar el servicio gratuito y protegerlo (art. 6.1.f RGPD). Mostrar anuncios personalizados según tus intereses y medirlos: solo con tu consentimiento (art. 6.1.a RGPD).',
        '**Tu elección.** La primera vez que abres la app te preguntamos si aceptas anuncios personalizados; rechazarlos es igual de fácil y no te impide usar la app ni obtener recompensas. Puedes retirar o dar el consentimiento cuando quieras en Ajustes → Anuncios personalizados, y restablecer o eliminar tu identificador de publicidad en los ajustes de Android. También puedes oponerte al tratamiento basado en el interés legítimo escribiéndonos.',
        '**Transferencias y conservación.** AppLovin y algunas redes tratan datos en Estados Unidos y en otros países fuera del Espacio Económico Europeo, con las garantías del capítulo V del RGPD (como el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo). Los conservan durante los plazos que indican sus políticas.',
        'Te recomendamos leer las políticas de privacidad de estos terceros:',
        [
          'AppLovin (publicidad, SDK AppLovin MAX): [política de privacidad](https://legal.applovin.com/privacy/)',
          'Google (Google Play, desde donde descargas la app, y el identificador de publicidad de Android; YouTube, si abres un vídeo original): [política de privacidad](https://policies.google.com/privacy)',
          'GitHub (alojamiento de la web): [declaración de privacidad](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement)'
        ],
        'No integramos otros SDK de analítica, atribución ni publicidad. Si añadimos alguno, lo incluiremos en esta lista antes de activarlo.'
      ]],
      ['4. Con quién compartimos tu información', [
        'El proveedor de alojamiento y el de correo electrónico del responsable, como encargados del tratamiento; PayPal o la entidad bancaria que procese el pago, como responsables independientes; en la app para Android, AppLovin y las redes publicitarias de su mediación (apartado 3), y las autoridades cuando lo exija la ley. No vendemos tus datos.',
        'También podemos comunicar datos cuando lo exija la ley, una orden judicial o una autoridad; para proteger nuestros derechos, a los usuarios o a terceros frente al fraude o a actividades ilícitas, y, si el servicio se transmite a otro titular, al nuevo titular, que deberá respetar esta política. Te avisaremos antes de esa transmisión.',
        '**Transferencias internacionales.** Si algún proveedor trata datos fuera del Espacio Económico Europeo, lo hará con las garantías del capítulo V del RGPD, como una decisión de adecuación o las cláusulas contractuales tipo de la Comisión Europea.'
      ]],
      ['5. Seguridad y conservación', [
        'Las páginas web de WatchEarn se sirven por HTTPS. Los correos con solicitudes de retirada y datos de pago se guardan en un buzón protegido al que solo accede el titular, y solo se usan para tramitar los pagos. Los datos de la app no se cifran en tu dispositivo: quien tenga acceso a él podría verlos o modificarlos. Ningún sistema garantiza una seguridad absoluta.',
        '**Conservación.** Conservamos cada dato solo el tiempo necesario:',
        [
          'Datos de tu dispositivo: hasta que los borres.',
          'Solicitudes de retirada y pagos: el tiempo necesario para tramitarlos y, después, bloqueados durante los plazos legales (en general, 4 años en materia tributaria y 6 años para la contabilidad).',
          'Consultas y reclamaciones: hasta resolverlas y, después, durante el plazo de posibles reclamaciones.',
          'Registros técnicos: el plazo que aplique el proveedor de alojamiento.'
        ]
      ]],
      ['6. Menores de edad', [
        'WatchEarn es solo para mayores de {age} años. Si sabemos que una solicitud procede de un menor, la rechazaremos y suprimiremos sus datos, salvo los que debamos conservar por ley.'
      ]],
      ['7. Tus derechos y opciones', [
        'Puedes usar WatchEarn sin darnos ningún dato personal: solo los necesitamos si nos escribes o solicitas una retirada.',
        'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {email}. Respondemos en un mes, ampliable en dos meses más en casos complejos. Los datos de tu dispositivo puedes borrarlos tú mismo en Ajustes → Borrar mis datos. También puedes reclamar ante la [Agencia Española de Protección de Datos](https://www.aepd.es/) o ante la autoridad de protección de datos de tu país.'
      ]],
      ['8. Cambios', [
        'Si cambiamos esta política, actualizaremos la versión y la fecha y te avisaremos en la app de los cambios relevantes. Si un nuevo tratamiento requiere tu consentimiento, te lo pediremos antes de activarlo.'
      ]],
      ['9. Contacto', [
        '**Responsable del tratamiento.** {name}, con NIF {taxId} y domicilio en {address}{registry}. Correo de contacto y de privacidad: {email}.',
        'Si tienes preguntas, dudas o solicitudes sobre esta política o sobre el tratamiento de tus datos, escríbenos a {email}.'
      ]]
    ]
  }
});
