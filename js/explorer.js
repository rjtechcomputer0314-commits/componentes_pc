/* ════════════════════════════════════════════════════
   PC EXPLORER — js/explorer.js  (v2)
   Laboratorio Virtual · MSI A68HM-E33 V2 + AMD A6-7400
════════════════════════════════════════════════════ */
(function () {
'use strict';

/* ══════════════════════════════════════════════════
   DATOS — PERIFÉRICOS EXTERNOS (vista exterior)
══════════════════════════════════════════════════ */
const PERIFERICOS = {
  monitor: {
    tag: 'SALIDA', color: '#06b6d4',
    titulo: 'Monitor',
    desc: 'Dispositivo de salida que muestra la información visual procesada por la GPU. La imagen lo muestra como monitor gaming con pantalla curva e iluminación RGB.',
    items: [
      'Tipos de panel: IPS (colores), TN (velocidad), VA (contraste)',
      'Resoluciones: FHD 1080p, QHD 1440p, 4K 2160p',
      'Frecuencia: 60Hz (normal) hasta 360Hz (gaming)',
      'Conexión: HDMI, DisplayPort, VGA'
    ],
    dato: 'Los monitores IPS tienen mejores colores y ángulos de visión. Los TN son más rápidos (menor latencia) para gaming competitivo. Los OLED ofrecen negros perfectos.'
  },
  teclado: {
    tag: 'ENTRADA', color: '#ec4899',
    titulo: 'Teclado',
    desc: 'Dispositivo de entrada principal para escribir texto y ejecutar comandos. El setup muestra un teclado gaming mecánico con retroiluminación RGB.',
    items: [
      'Tipos: membrana (silencioso), mecánico (táctil y preciso)',
      'Switches mecánicos: rojo (lineal), azul (clic), marrón (mixto)',
      'Teclados: completo (104 teclas), TKL (sin numpad), 60%',
      'Conexión: USB o inalámbrico (Bluetooth / 2.4GHz)'
    ],
    dato: 'Los teclados mecánicos duran entre 50 a 100 millones de pulsaciones por switch. Son más duraderos y precisos que los de membrana, ideales para programadores y gamers.'
  },
  mouse: {
    tag: 'ENTRADA', color: '#22c55e',
    titulo: 'Mouse',
    desc: 'Dispositivo de entrada que controla el cursor en pantalla. El setup muestra un mouse gaming con sensor óptico de alta precisión.',
    items: [
      'Sensor: óptico (luz roja/infrarroja) o láser (máxima precisión)',
      'DPI: sensibilidad (400 DPI estándar, hasta 25.600 DPI gaming)',
      'Botones: básico 2+1, gaming con 5-12 botones programables',
      'Conexión: USB con cable o inalámbrico'
    ],
    dato: 'En gaming competitivo se usan entre 400 y 800 DPI con sensibilidad alta en juego. Más DPI no siempre es mejor: depende del tamaño del mousepad y el estilo de juego.'
  },
  auriculares: {
    tag: 'ENTRADA/SALIDA', color: '#7c6af5',
    titulo: 'Auriculares (Headset)',
    desc: 'Dispositivo combinado de entrada (micrófono) y salida (altavoces). El setup muestra unos auriculares gaming over-ear en su soporte.',
    items: [
      'Tipos: on-ear (sobre oreja), over-ear (envuelven la oreja)',
      'Audio: estéreo (2 canales) o surround virtual 7.1',
      'Micrófono integrado para comunicación en juegos y videollamadas',
      'Conexión: jack 3.5mm, USB, o inalámbrico'
    ],
    dato: 'El sonido posicional en auriculares gaming permite escuchar la dirección de los pasos de enemigos. Esto es crucial en juegos como Valorant o CS:GO.'
  },
  parlante: {
    tag: 'SALIDA', color: '#06b6d4',
    titulo: 'Parlantes (Altavoces)',
    desc: 'Dispositivos de salida que reproducen audio. El setup muestra dos parlantes estéreo flanqueando el monitor, típicos de un setup gaming.',
    items: [
      'Configuraciones: 2.0 (estéreo), 2.1 (+ subwoofer), 5.1 y 7.1',
      'Drivers: tweeter (agudos), woofer (graves)',
      'Potencia medida en vatios (W RMS)',
      'Conexión: jack 3.5mm, RCA, óptico o Bluetooth'
    ],
    dato: 'El subwoofer de una configuración 2.1 reproduce frecuencias bajas (20-120 Hz) que se sienten físicamente. Perfecto para cine en casa y música con graves pronunciados.'
  },
  impresora: {
    tag: 'SALIDA', color: '#f59e0b',
    titulo: 'Impresora',
    desc: 'Dispositivo de salida que transfiere texto e imágenes digitales a papel u otros medios físicos.',
    items: [
      'Inkjet: inyección de tinta, ideal para fotos y color',
      'Láser: tóner en polvo, rápida y económica para documentos',
      'Multifuncional: imprime, escanea y copia en un solo equipo',
      'Conexión: USB, WiFi o Ethernet'
    ],
    dato: 'Las impresoras láser son más económicas a largo plazo para imprimir documentos en blanco y negro. Las inkjet son mejores para fotografía e impresiones a color de alta calidad.'
  },
  webcam: {
    tag: 'ENTRADA', color: '#22c55e',
    titulo: 'Cámara Web (Webcam)',
    desc: 'Captura vídeo en tiempo real. En el setup se ve ubicada encima del monitor, posición ideal para videollamadas y streaming.',
    items: [
      'Resoluciones: 720p HD, 1080p Full HD, 4K Ultra HD',
      'FPS: 30fps (estándar) o 60fps (streaming fluido)',
      'Micrófono integrado en la mayoría de modelos',
      'Conexión: USB plug-and-play (sin drivers adicionales)'
    ],
    dato: 'Para streaming profesional se recomienda una cámara de al menos 1080p a 60fps. Streamers populares usan cámaras réflex o mirrorless con capturadora HDMI para calidad cinema.'
  }
};

/* ══════════════════════════════════════════════════
   DATOS — COMPONENTES INTERNOS (placa madre real)
══════════════════════════════════════════════════ */
const COMPONENTES = {
  cpu: {
    tag: 'CPU', color: '#7c6af5',
    titulo: 'Procesador AMD A6-7400 Series',
    desc: 'El cerebro de la computadora. Ejecuta todas las instrucciones del sistema y programas. La foto muestra un AMD A6-7400 instalado en el socket FM2+ de la placa MSI.',
    items: [
      'Velocidad: 3.5 GHz con 2 núcleos (dual-core)',
      'Es una APU: CPU + GPU Radeon R5 integrados en un chip',
      'Genera calor — necesita disipador y pasta térmica',
      'Socket FM2+: compatible con APUs AMD A-Series'
    ],
    dato: 'El AMD A6-7400 es una APU (Accelerated Processing Unit): tiene CPU y GPU integrados en un solo chip. Por eso puede funcionar sin tarjeta gráfica dedicada, ideal para PCs educativos y de oficina.'
  },
  ram: {
    tag: 'RAM DDR3', color: '#06b6d4',
    titulo: 'Memoria RAM DDR3',
    desc: 'Almacena temporalmente los datos de los programas abiertos. Al apagar el PC, todo se borra. La placa tiene 2 ranuras DDR3 en configuración Dual Channel.',
    items: [
      'Almacenamiento temporal y volátil (se borra al apagar)',
      'Dual Channel DDR3: mayor velocidad de transferencia',
      'Velocidades soportadas: 1333 / 1600 / 1866 MHz',
      'Soporta hasta 32 GB en 2 ranuras DIMM'
    ],
    dato: 'La MSI A68HM-E33 V2 soporta hasta 32 GB de RAM DDR3. En la foto puedes ver un módulo Kingston instalado en el primer slot. Más RAM = más programas abiertos sin lentitud.'
  },
  placa: {
    tag: 'CHIPSET A68H', color: '#22c55e',
    titulo: 'Chipset AMD A68H',
    desc: 'El controlador principal de la placa. Gestiona la comunicación entre CPU, RAM, discos SATA, puertos USB y todos los periféricos conectados.',
    items: [
      'Gestiona los puertos USB 2.0 y 3.0',
      'Controla los discos SATA III (hasta 4 discos)',
      'Integra audio Realtek y red Gigabit Realtek',
      'Trabaja con el procesador para distribuir datos'
    ],
    dato: 'En arquitecturas modernas AMD, las funciones del antiguo Northbridge (controlador de memoria y PCIe) están integradas directamente en el procesador, no en el chipset.'
  },
  sata: {
    tag: 'SATA III', color: '#06b6d4',
    titulo: 'Puertos SATA III',
    desc: 'Conectores en la esquina superior derecha visibles en la foto. Permiten conectar discos duros HDD y unidades SSD para almacenamiento permanente.',
    items: [
      'Velocidad máxima: 6 Gb/s (600 MB/s)',
      'Compatible con HDD y SSD SATA',
      'Esta placa tiene 4 puertos SATA III',
      'Conector en forma de L para fácil identificación'
    ],
    dato: 'Un SSD NVMe M.2 puede ser hasta 10x más rápido que SATA III. Pero para tareas educativas y de oficina, un SSD SATA es más que suficiente y muy accesible económicamente.'
  },
  bateria: {
    tag: 'CMOS', color: '#f59e0b',
    titulo: 'Batería CMOS CR2032',
    desc: 'La pequeña pila de litio redonda visible en la foto (lado derecho de la placa). Mantiene la fecha, hora y configuración del BIOS con el PC apagado.',
    items: [
      'Tipo CR2032: pila de litio de 3V (moneda)',
      'Alimenta el reloj interno del sistema las 24 horas',
      'Conserva la configuración completa del BIOS/UEFI',
      'Duración aproximada: 5 a 10 años'
    ],
    dato: 'Si la batería CMOS se agota, cada vez que enciendes el PC la fecha vuelve al año 2000. La solución es reemplazarla: una CR2032 cuesta menos de 2 soles en cualquier ferretería o farmacia.'
  },
  pci: {
    tag: 'PCIe x16', color: '#ec4899',
    titulo: 'Ranura PCI Express x16',
    desc: 'La ranura negra larga en la parte inferior de la placa. Aquí se instala la tarjeta gráfica dedicada (GPU) para potenciar el rendimiento visual en juegos o edición.',
    items: [
      'PCIe 2.0 x16: 8 GB/s de ancho de banda',
      'Compatible con tarjetas NVIDIA y AMD',
      'Sin GPU dedicada, el procesador usa su Radeon R5 integrada',
      'También hay un slot PCIe x1 para tarjetas de expansión'
    ],
    dato: 'Puedes instalar una GPU como la GTX 1050 Ti en este slot y el rendimiento en juegos se multiplica varias veces. La diferencia entre gráficos integrados y dedicados es enorme.'
  },
  bios: {
    tag: 'BIOS/UEFI', color: '#7c6af5',
    titulo: 'Chip BIOS / UEFI',
    desc: 'Firmware grabado en un chip de la placa. Es el primer programa que corre al encender el PC. Detecta y configura el hardware antes de cargar Windows.',
    items: [
      'Primer código que ejecuta la computadora al encender',
      'Detecta RAM, CPU, discos y dispositivos conectados',
      'Permite configurar el orden de arranque y voltajes',
      'Actualizable con archivos del fabricante MSI'
    ],
    dato: 'En las placas MSI puedes entrar al BIOS/UEFI presionando la tecla DEL al encender. Tiene interfaz gráfica con soporte de mouse. Desde ahí puedes cambiar el orden de arranque para instalar Windows.'
  },
  io: {
    tag: 'PANEL I/O', color: '#f97316',
    titulo: 'Panel de Puertos Traseros (I/O)',
    desc: 'El panel inferior izquierdo visible en la foto con todos los conectores externos: monitor, teclado, mouse, red y audio directamente en la placa.',
    items: [
      'VGA: salida de vídeo analógica para monitores VGA',
      'HDMI: vídeo digital Full HD hasta 1080p',
      'USB 3.0 (azul) y USB 2.0 para periféricos',
      'RJ-45 Ethernet para red local Gigabit (1 Gbps)'
    ],
    dato: 'En la foto puedes ver claramente los puertos USB y HDMI. Este panel también incluye los jack de audio 3.5mm (verde = parlantes, rosa = micrófono) integrados en la placa.'
  }
};

/* ══════════════════════════════════════════════════
   DATOS — GRILLA DE EXTERNOS
══════════════════════════════════════════════════ */
const EXTERNOS = [
  { icon: '🖥️', nombre: 'Monitor',    tipo: 'Salida',        desc: 'Muestra información visual. Tipos: LED, IPS, OLED, VA. Resoluciones: FHD (1080p), QHD, 4K. Conéctalo por HDMI a tu placa.' },
  { icon: '⌨️', nombre: 'Teclado',    tipo: 'Entrada',       desc: 'Entrada principal de texto y comandos. Tipos: membrana (económico), mecánico (preciso). Switches: rojo, azul, marrón.' },
  { icon: '🖱️', nombre: 'Mouse',      tipo: 'Entrada',       desc: 'Controla el cursor. Tipos: óptico, láser, trackball. Sensibilidad en DPI. Conexión USB o inalámbrico.' },
  { icon: '🖨️', nombre: 'Impresora',  tipo: 'Salida',        desc: 'Transfiere texto e imágenes a papel. Tipos: inkjet (fotos), láser (documentos), 3D (objetos físicos).' },
  { icon: '📠', nombre: 'Escáner',    tipo: 'Entrada',       desc: 'Digitaliza documentos y fotos físicas. Resolución en DPI. Muchas impresoras incluyen escáner integrado.' },
  { icon: '🔊', nombre: 'Parlantes',  tipo: 'Salida',        desc: 'Reproducen el audio de la tarjeta de sonido. Configs: 2.0 estéreo, 2.1 con subwoofer, 5.1 cine, 7.1 surround.' },
  { icon: '🎙️', nombre: 'Micrófono', tipo: 'Entrada',       desc: 'Captura sonido y lo convierte en señal digital. Usado en videollamadas, grabaciones y streaming.' },
  { icon: '📷', nombre: 'Webcam',     tipo: 'Entrada/Salida',desc: 'Captura vídeo en tiempo real. Resoluciones: 720p, 1080p, 4K. Incluye micrófono. Ideal para clases virtuales.' },
  { icon: '🎧', nombre: 'Auriculares',tipo: 'Entrada/Salida',desc: 'Salida de audio + entrada de micrófono. Tipos: over-ear, on-ear, in-ear. Gaming con audio surround virtual 7.1.' },
];

/* ══════════════════════════════════════════════════
   DATOS — GLOSARIO
══════════════════════════════════════════════════ */
const GLOSARIO = [
  { term: 'Hardware',     def: 'Conjunto de componentes físicos de una computadora: pantalla, teclado, placa madre, RAM, etc.' },
  { term: 'Software',     def: 'Programas e instrucciones que hacen funcionar el hardware: Windows, apps, juegos, etc.' },
  { term: 'CPU',          def: 'Central Processing Unit — procesador que ejecuta instrucciones y controla todo el sistema.' },
  { term: 'APU',          def: 'Accelerated Processing Unit — procesador AMD con CPU y GPU integrados en un mismo chip.' },
  { term: 'RAM',          def: 'Random Access Memory — memoria temporal que almacena datos de programas en ejecución.' },
  { term: 'SSD',          def: 'Solid State Drive — disco sin partes móviles, muy rápido y silencioso.' },
  { term: 'HDD',          def: 'Hard Disk Drive — disco con platos magnéticos giratorios, mayor capacidad y menor costo.' },
  { term: 'GPU',          def: 'Graphics Processing Unit — procesador gráfico que renderiza imágenes, vídeos y 3D.' },
  { term: 'Periférico',   def: 'Dispositivo externo conectado a la computadora: teclado, mouse, impresora, monitor, etc.' },
  { term: 'BIOS / UEFI',  def: 'Firmware que inicia el hardware al encender la PC. Se accede presionando DEL al encender.' },
  { term: 'GHz',          def: 'Gigahercios — velocidad del procesador. 1 GHz = 1000 millones de ciclos por segundo.' },
  { term: 'PCIe',         def: 'PCI Express — ranura de alta velocidad en la placa madre para GPUs y dispositivos de expansión.' },
  { term: 'NVMe',         def: 'Non-Volatile Memory Express — protocolo ultrarrápido para SSDs conectados por PCIe M.2.' },
  { term: 'SATA',         def: 'Serial ATA — interfaz para conectar discos HDD y SSD a la placa madre. Hasta 600 MB/s.' },
  { term: 'Byte',         def: 'Unidad básica de almacenamiento. 1 Byte = 8 bits. Escala: KB → MB → GB → TB.' },
  { term: 'Overclock',    def: 'Aumentar la frecuencia de CPU o GPU más allá de los valores de fábrica para más rendimiento.' },
  { term: 'Drivers',      def: 'Programas que permiten al sistema operativo comunicarse correctamente con el hardware.' },
  { term: 'Socket FM2+',  def: 'Zócalo de la placa madre para procesadores AMD APU serie A y Athlon.' },
  { term: 'DDR3',         def: 'Tipo de RAM de tercera generación. Esta placa soporta DDR3 hasta 1866 MHz.' },
  { term: 'Chipset',      def: 'Chip controlador que gestiona la comunicación entre CPU, RAM, discos y periféricos.' },
];

/* ══════════════════════════════════════════════════
   PREGUNTAS DEL QUIZ
══════════════════════════════════════════════════ */
const QUIZ_PREGUNTAS = [
  { p: '¿Cuál es el "cerebro" de la computadora?',
    ops: ['Monitor', 'CPU', 'Teclado', 'Impresora'], ans: 1,
    exp: 'La CPU (Procesador) ejecuta instrucciones y coordina todo el sistema.' },
  { p: '¿Qué tipo de memoria almacena datos de forma TEMPORAL?',
    ops: ['SSD', 'HDD', 'RAM', 'USB Flash'], ans: 2,
    exp: 'La RAM guarda datos temporalmente mientras el PC está encendido. Al apagar, se borra.' },
  { p: '¿Qué componente renderiza las imágenes en pantalla?',
    ops: ['CPU solamente', 'La RAM', 'La GPU (Tarjeta Gráfica)', 'La Fuente de Poder'], ans: 2,
    exp: 'La GPU procesa y envía la señal de vídeo al monitor. Esta placa tiene GPU integrada Radeon R5.' },
  { p: '¿Cuál es la diferencia principal entre SSD y HDD?',
    ops: ['El SSD usa agua para enfriar', 'El SSD no tiene partes móviles y es más rápido', 'El HDD es más moderno', 'Son exactamente iguales'], ans: 1,
    exp: 'El SSD usa chips de memoria flash sin piezas móviles. El HDD usa platos magnéticos giratorios.' },
  { p: '¿Para qué sirve la batería CMOS en la placa madre?',
    ops: ['Cargar el monitor', 'Guardar la configuración del BIOS y la hora', 'Alimentar los ventiladores', 'Conectar a internet'], ans: 1,
    exp: 'La batería CMOS CR2032 mantiene la fecha, hora y configuración del BIOS con el PC apagado.' },
  { p: '¿Qué es la Placa Madre?',
    ops: ['Un tipo de pantalla', 'El ventilador principal', 'El circuito que conecta todos los componentes', 'La fuente de energía'], ans: 2,
    exp: 'La placa madre conecta y comunica todos los componentes del PC entre sí.' },
  { p: '¿En qué unidad se mide la velocidad del procesador?',
    ops: ['Watts (W)', 'Gigabytes (GB)', 'GHz (Gigahercios)', 'Píxeles (px)'], ans: 2,
    exp: 'GHz (Gigahercios) indica cuántos ciclos por segundo ejecuta el procesador.' },
  { p: '¿Qué es un periférico?',
    ops: ['La memoria interna del CPU', 'Un dispositivo externo conectado al PC', 'Un tipo de RAM especial', 'El núcleo del procesador'], ans: 1,
    exp: 'Periférico = dispositivo externo: teclado, mouse, impresora, monitor, micrófono, etc.' },
  { p: '¿Qué significa RAM?',
    ops: ['Really Amazing Memory', 'Random Access Memory', 'Read-All Module', 'Rapid Application Mode'], ans: 1,
    exp: 'RAM = Random Access Memory (Memoria de Acceso Aleatorio).' },
  { p: '¿Cuál de estos es un dispositivo de SALIDA?',
    ops: ['Teclado', 'Mouse', 'Monitor', 'Micrófono'], ans: 2,
    exp: 'El monitor es de SALIDA porque muestra información al usuario. Los demás son de entrada.' },
];

/* ══════════════════════════════════════════════════
   ESTADO
══════════════════════════════════════════════════ */
const state = {
  quiz: { preguntas: [], idx: 0, score: 0, respondida: false }
};

/* ══════════════════════════════════════════════════
   UTILIDADES
══════════════════════════════════════════════════ */
function $(sel, ctx)  { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }

function beep(freq, dur) {
  dur = dur || 0.18;
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = freq; gain.gain.value = 0.04;
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}

/* ══════════════════════════════════════════════════
   NAVEGACIÓN
══════════════════════════════════════════════════ */
window.pceGoTo = function(id) {
  $$('.pce-section').forEach(s => s.classList.remove('active'));
  $$('.pce-nav-links a').forEach(a => a.classList.remove('active'));
  const sec = document.getElementById('pce-' + id);
  const nav = document.getElementById('pce-nav-' + id);
  if (sec) sec.classList.add('active');
  if (nav) nav.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.pceToggleTheme = function() {
  const root = document.getElementById('pc-explorer') || document.documentElement;
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
};

/* ══════════════════════════════════════════════════
   TRANSICIÓN GABINETE → INTERNOS
══════════════════════════════════════════════════ */
window.pceEntrarGabinete = function() {
  const trans = document.getElementById('pce-transition');
  if (!trans) { pceGoTo('internos'); return; }

  trans.classList.add('show');
  setTimeout(() => {
    trans.classList.remove('show');
    pceGoTo('internos');
  }, 1400);

  beep(880, 0.12);
};

/* ══════════════════════════════════════════════════
   PANEL EXTERIOR — periféricos
══════════════════════════════════════════════════ */
window.pceShowExterno = function(id) {
  const data = PERIFERICOS[id];
  if (!data) return;

  $$('.pce-zone--ext').forEach(z => z.classList.remove('active'));
  const zone = document.getElementById('pce-zone-ext-' + id);
  if (zone) zone.classList.add('active');

  const empty = document.getElementById('pce-ext-info-empty');
  if (empty) empty.style.display = 'none';

  const body = document.getElementById('pce-ext-info-body');
  if (!body) return;

  body.innerHTML = buildInfoHTML(data);
  body.classList.add('visible');
  beep(520, 0.14);
};

/* ══════════════════════════════════════════════════
   PANEL INTERNOS — componentes placa madre
══════════════════════════════════════════════════ */
window.pceShowInfo = function(id) {
  const data = COMPONENTES[id];
  if (!data) return;

  $$('.pce-zone:not(.pce-zone--ext)').forEach(z => z.classList.remove('active'));
  const zone = document.getElementById('pce-zone-' + id);
  if (zone) zone.classList.add('active');

  const empty = document.getElementById('pce-info-empty');
  if (empty) empty.style.display = 'none';

  const body = document.getElementById('pce-info-body');
  if (!body) return;

  body.innerHTML = buildInfoHTML(data);
  body.classList.add('visible');
  beep(440, 0.14);
};

/* Constructor de HTML del panel de info (compartido) */
function buildInfoHTML(data) {
  return `
    <span class="pce-info-tag"
      style="background:${data.color}22;color:${data.color};border:1px solid ${data.color}44">
      ${data.tag}
    </span>
    <div class="pce-info-title">${data.titulo}</div>
    <p class="pce-info-desc">${data.desc}</p>
    <ul class="pce-info-list">
      ${data.items.map(i => `<li>${i}</li>`).join('')}
    </ul>
    <div class="pce-info-fact">
      <strong>💡 Dato curioso</strong>
      ${data.dato}
    </div>
  `;
}

/* ══════════════════════════════════════════════════
   RENDER — GRILLA EXTERNOS
══════════════════════════════════════════════════ */
function renderExternos() {
  const grid = document.getElementById('pce-externos-grid');
  if (!grid) return;
  const colores = { 'Entrada': '#22c55e', 'Salida': '#06b6d4', 'Entrada/Salida': '#7c6af5' };
  grid.innerHTML = EXTERNOS.map(c => {
    const col = colores[c.tipo] || '#9090a8';
    return `
      <div class="pce-ext-card">
        <div class="pce-ext-icon">${c.icon}</div>
        <div class="pce-ext-head">
          <h3>${c.nombre}</h3>
          <span class="pce-ext-tipo" style="background:${col}20;color:${col}">${c.tipo}</span>
        </div>
        <p>${c.desc}</p>
      </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════
   RENDER — GLOSARIO
══════════════════════════════════════════════════ */
function renderGlosario(filtro) {
  filtro = filtro || '';
  const grid = document.getElementById('pce-glosario-grid');
  if (!grid) return;
  const f = filtro.toLowerCase().trim();
  const lista = f
    ? GLOSARIO.filter(g => g.term.toLowerCase().includes(f) || g.def.toLowerCase().includes(f))
    : GLOSARIO;

  if (!lista.length) {
    grid.innerHTML = `<div class="pce-no-results">No se encontraron términos para "<strong>${filtro}</strong>"</div>`;
    return;
  }
  grid.innerHTML = lista.map(g => `
    <div class="pce-glosario-card">
      <h3>${g.term}</h3>
      <p>${g.def}</p>
    </div>`).join('');
}
window.pceFilterGlosario = function(val) { renderGlosario(val); };

/* ══════════════════════════════════════════════════
   QUIZ
══════════════════════════════════════════════════ */
function iniciarQuiz() {
  state.quiz = {
    preguntas: [...QUIZ_PREGUNTAS].sort(() => Math.random() - 0.5).slice(0, 10),
    idx: 0, score: 0, respondida: false
  };
  renderPregunta();
}

function renderPregunta() {
  const area = document.getElementById('pce-quiz-area');
  if (!area) return;
  const { preguntas, idx, score } = state.quiz;
  if (idx >= preguntas.length) { renderResultado(); return; }

  const q      = preguntas[idx];
  const pct    = (idx / preguntas.length) * 100;
  const letras = ['A','B','C','D'];

  area.innerHTML = `
    <div class="pce-progress-bg">
      <div class="pce-progress-bar" style="width:${pct}%"></div>
    </div>
    <div class="pce-quiz-num">
      Pregunta ${idx + 1} de ${preguntas.length} &nbsp;·&nbsp; Puntaje: ${score}
    </div>
    <div class="pce-quiz-q">${q.p}</div>
    <div class="pce-quiz-opts">
      ${q.ops.map((op, i) => `
        <button class="pce-opt" id="pce-opt-${i}" onclick="pceSelectAnswer(${i})">
          <span class="pce-opt-letter">${letras[i]}</span>${op}
        </button>`).join('')}
    </div>
    <div class="pce-feedback" id="pce-feedback"></div>
    <button class="pce-next-btn" id="pce-next-btn" onclick="pceNextQuestion()">
      ${idx + 1 < preguntas.length ? 'Siguiente pregunta →' : 'Ver resultado →'}
    </button>`;
}

window.pceSelectAnswer = function(i) {
  if (state.quiz.respondida) return;
  state.quiz.respondida = true;
  const q       = state.quiz.preguntas[state.quiz.idx];
  const correct = q.ans === i;
  if (correct) state.quiz.score++;

  $$('.pce-opt').forEach((el, j) => {
    el.classList.add('disabled');
    if (j === q.ans) el.classList.add('correct');
    else if (j === i && !correct) el.classList.add('wrong');
  });

  const fb = document.getElementById('pce-feedback');
  if (fb) {
    fb.className = 'pce-feedback show ' + (correct ? 'ok' : 'err');
    fb.innerHTML = (correct ? '✅ ¡Correcto! ' : '❌ Incorrecto. ') + q.exp;
  }

  const btn = document.getElementById('pce-next-btn');
  if (btn) btn.classList.add('show');

  beep(correct ? 660 : 220, 0.28);
};

window.pceNextQuestion = function() {
  state.quiz.idx++;
  state.quiz.respondida = false;
  renderPregunta();
};

function renderResultado() {
  const { score, preguntas } = state.quiz;
  const pct = Math.round((score / preguntas.length) * 100);
  const msg =
    pct >= 90 ? '🏆 ¡Excelente! Eres un experto en hardware.' :
    pct >= 70 ? '🎉 ¡Muy bien! Tienes muy buenos conocimientos.' :
    pct >= 50 ? '📚 Buen intento. Repasa el material para mejorar.' :
                '💪 Sigue estudiando, ¡la práctica hace al maestro!';

  const area = document.getElementById('pce-quiz-area');
  if (!area) return;

  area.innerHTML = `
    <div class="pce-result">
      <div class="pce-score-ring">
        <div class="pce-score-num">${score}</div>
        <div class="pce-score-total">de ${preguntas.length}</div>
      </div>
      <h2>${pct}% de aciertos</h2>
      <p>${msg}</p>
      <button class="pce-btn-cert"  onclick="pceShowCert()">🏅 Ver certificado</button>
      <button class="pce-btn-retry" onclick="pceIniciarQuiz()">Intentar de nuevo</button>
    </div>`;
}

window.pceIniciarQuiz = iniciarQuiz;

/* ══════════════════════════════════════════════════
   CERTIFICADO
══════════════════════════════════════════════════ */
window.pceShowCert = function() {
  const modal = document.getElementById('pce-modal');
  if (modal) modal.classList.add('show');
  dibujarCert();
};
window.pceCloseCert = function() {
  const modal = document.getElementById('pce-modal');
  if (modal) modal.classList.remove('show');
};
window.pceCertOverlay = function(e) {
  if (e.target === document.getElementById('pce-modal')) pceCloseCert();
};

function dibujarCert() {
  const canvas = document.getElementById('pce-cert-canvas');
  if (!canvas) return;
  const ctx   = canvas.getContext('2d');
  const W     = canvas.width, H = canvas.height;
  const { score, preguntas } = state.quiz;
  const pct   = Math.round((score / preguntas.length) * 100);
  const fecha = new Date().toLocaleDateString('es-ES', { day:'2-digit', month:'long', year:'numeric' });

  // Fondo
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0, 0, W, H);

  // Bordes
  ctx.strokeStyle = '#7c6af5'; ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, W - 24, H - 24);
  ctx.strokeStyle = '#9d8fff'; ctx.lineWidth = 1;
  ctx.strokeRect(20, 20, W - 40, H - 40);

  // Esquinas
  [[26,26],[W-26,26],[26,H-26],[W-26,H-26]].forEach(([x,y]) => {
    ctx.fillStyle = '#7c6af5';
    ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fill();
  });

  // Línea superior
  const grad = ctx.createLinearGradient(60,0,W-60,0);
  grad.addColorStop(0,'transparent'); grad.addColorStop(0.3,'#7c6af5');
  grad.addColorStop(0.7,'#9d8fff');   grad.addColorStop(1,'transparent');
  ctx.strokeStyle = grad; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(60,50); ctx.lineTo(W-60,50); ctx.stroke();

  // Textos
  ctx.textAlign = 'center';
  ctx.fillStyle = '#7c6af5'; ctx.font = 'bold 11px Inter, sans-serif';
  ctx.fillText('PC EXPLORER — LABORATORIO VIRTUAL DE COMPUTACIÓN', W/2, 40);

  ctx.fillStyle = '#e8e8f0'; ctx.font = 'bold 24px Inter, sans-serif';
  ctx.fillText('Certificado de Participación', W/2, 90);

  ctx.fillStyle = '#9090a8'; ctx.font = '12px Inter, sans-serif';
  ctx.fillText('Se certifica haber completado el Quiz Interactivo sobre', W/2, 120);
  ctx.fillText('Componentes de la Computadora con los siguientes resultados:', W/2, 138);

  // Badge puntaje
  ctx.fillStyle = '#7c6af5';
  ctx.beginPath(); ctx.roundRect(W/2-82,155,164,70,14); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = 'bold 32px Inter, sans-serif';
  ctx.fillText(`${score} / ${preguntas.length}`, W/2, 198);
  ctx.font = '11px Inter, sans-serif'; ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.fillText(`${pct}% de aciertos`, W/2, 217);

  // Nivel
  const nivel = pct>=90?'🏆 NIVEL: EXPERTO EN HARDWARE':pct>=70?'🎓 NIVEL: AVANZADO':pct>=50?'📚 NIVEL: INTERMEDIO':'💪 NIVEL: EN PROGRESO';
  ctx.fillStyle = '#e8e8f0'; ctx.font = 'bold 14px Inter, sans-serif';
  ctx.fillText(nivel, W/2, 260);

  // Hardware y fecha
  ctx.fillStyle = '#9090a8'; ctx.font = '11px Inter, sans-serif';
  ctx.fillText('Hardware estudiado: MSI A68HM-E33 V2 · AMD A6-7400 Series', W/2, 292);
  ctx.fillText(`Fecha: ${fecha}`, W/2, 312);

  // Separador y pie
  ctx.strokeStyle = '#2a2a3a'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(80,330); ctx.lineTo(W-80,330); ctx.stroke();
  ctx.fillStyle = '#505065'; ctx.font = '10px Inter, sans-serif';
  ctx.fillText('PC Explorer — Aprende los Componentes de la Computadora', W/2, 350);
}

window.pceDownloadCert = function() {
  const canvas = document.getElementById('pce-cert-canvas');
  if (!canvas) return;
  const a = document.createElement('a');
  a.download = 'certificado-pc-explorer.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
};

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
function init() {
  renderExternos();
  renderGlosario();
  iniciarQuiz();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();