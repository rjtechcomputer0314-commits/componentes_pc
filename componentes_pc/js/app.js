/* ════════════════════════════
   DATOS — COMPONENTES INTERNOS
════════════════════════════ */
const INTERNOS = {
  cpu: {
    tag: 'CPU', tagColor: '#7c6af5',
    title: 'Procesador (CPU)',
    desc: 'El cerebro de la computadora. Ejecuta todas las instrucciones del sistema operativo y las aplicaciones, coordinando el funcionamiento de cada componente.',
    features: [
      'Ejecuta miles de millones de instrucciones por segundo',
      'Contiene múltiples núcleos (cores) para multitarea',
      'Tu placa tiene un AMD A6-7400 Series (socket FM2+)',
      'Genera calor: necesita disipador y pasta térmica',
    ],
    fact: 'La velocidad se mide en GHz. Tu AMD A6-7400 corre a 3.5 GHz con 2 núcleos y gráficos integrados Radeon R5.'
  },
  ram: {
    tag: 'RAM', tagColor: '#06b6d4',
    title: 'Memoria RAM DDR3',
    desc: 'Almacena temporalmente los datos de los programas en ejecución. Tu placa tiene 2 slots DDR3 en configuración Dual Channel.',
    features: [
      'Se borra completamente al apagar el equipo',
      'Dual Channel DDR3: mayor velocidad de transferencia',
      'Velocidades comunes: 1333 MHz, 1600 MHz, 1866 MHz',
      'Más RAM = mayor fluidez en multitarea',
    ],
    fact: 'La placa MSI A68HM-E33 V2 soporta hasta 32 GB de RAM DDR3. Puedes ver una RAM ya instalada en la foto.'
  },
  gpu: {
    tag: 'PCIe x16', tagColor: '#ec4899',
    title: 'Slot GPU (Tarjeta Gráfica)',
    desc: 'El slot PCIe x16 negro largo es donde se instala la tarjeta gráfica dedicada. Sin tarjeta, el CPU usa sus gráficos integrados Radeon R5.',
    features: [
      'Ranura PCIe 3.0 x16 de alta velocidad',
      'Procesa y renderiza imágenes, vídeo y 3D',
      'Tiene su propia memoria VRAM',
      'Esencial para gaming y edición de vídeo',
    ],
    fact: 'La placa tiene también un slot PCIe x1 más pequeño para tarjetas de red, captura de vídeo, etc.'
  },
  ssd: {
    tag: 'SATA', tagColor: '#f59e0b',
    title: 'Puertos SATA (SSD / HDD)',
    desc: 'Los conectores SATA en la esquina superior derecha conectan los discos de almacenamiento permanente: SSDs y HDDs.',
    features: [
      'SSD SATA: rápido, silencioso, sin partes móviles',
      'HDD: mayor capacidad, más económico',
      'Velocidad SATA: hasta 600 MB/s',
      'La placa A68HM-E33 V2 tiene 4 puertos SATA III',
    ],
    fact: 'Un SSD NVMe M.2 es hasta 6x más rápido que SATA. Esta placa también tiene 1 slot M.2.'
  },
  psu: {
    tag: 'ATX 24-pin', tagColor: '#22c55e',
    title: 'Fuente de Poder (PSU)',
    desc: 'El conector ATX de 24 pines (arriba al centro) es por donde la fuente de poder entrega energía a toda la placa madre.',
    features: [
      'Convierte corriente alterna (AC) en continua (DC)',
      'Provee 12V, 5V y 3.3V a los componentes',
      'Hay también un conector de 4/8 pines para la CPU',
      'Su potencia se mide en Watts (W)',
    ],
    fact: 'Para una PC básica con esta placa y sin GPU dedicada, una fuente de 350W-450W es más que suficiente.'
  },
  placa: {
    tag: 'CHIPSET', tagColor: '#22c55e',
    title: 'Placa Madre — MSI A68HM-E33 V2',
    desc: 'El circuito central que conecta y comunica todos los componentes. Esta es la MSI A68HM-E33 V2 con chipset AMD A68H.',
    features: [
      'Socket FM2+: compatible con APUs AMD A-Series y Athlon',
      'Formato micro-ATX (más compacta)',
      'Chipset AMD A68H con soporte CrossFire',
      'Incluye audio, red y vídeo integrado',
    ],
    fact: 'La A68HM-E33 V2 salió en 2015. Es perfecta para computadoras de oficina, educación o media center.'
  },
  puertos: {
    tag: 'I/O SHIELD', tagColor: '#f97316',
    title: 'Panel de Puertos Traseros',
    desc: 'El panel I/O en la parte inferior izquierda ofrece todos los puertos de conexión externos de la placa.',
    features: [
      'VGA: salida de vídeo analógica para monitores antiguos',
      'HDMI: vídeo digital de alta definición',
      'USB 3.0 (azul) y USB 2.0: conexión de periféricos',
      'Puerto Ethernet (RJ-45) para red local',
    ],
    fact: 'En la foto puedes ver el conector HDMI claramente. Usándolo conectas el monitor directamente sin GPU dedicada.'
  },
  caps: {
    tag: 'CAPACITORES', tagColor: '#9d8fff',
    title: 'Capacitores (Condensadores)',
    desc: 'Los cilindros azules con tapa plateada son capacitores sólidos de alta calidad. Estabilizan y filtran la energía que llega a los componentes.',
    features: [
      'Almacenan y liberan energía eléctricamente',
      'Filtran ruidos en la alimentación del CPU y RAM',
      'MSI usa capacitores sólidos japoneses de larga duración',
      'Capacitores hinchados = señal de daño o fallo',
    ],
    fact: 'Los capacitores azules que ves son la firma visual de la línea de placas MSI de esa época. Tienen una vida útil estimada de 10+ años.'
  },
};

/* ════════════════════════════
   DATOS — COMPONENTES EXTERNOS
════════════════════════════ */
const EXTERNOS = [
  {
    icon: '🖥️', name: 'Monitor', tipo: 'salida',
    desc: 'Muestra la información visual procesada por la GPU (o gráficos integrados). Tipos: LED, IPS, OLED, VA. Resoluciones: FHD, QHD, 4K.'
  },
  {
    icon: '⌨️', name: 'Teclado', tipo: 'entrada',
    desc: 'Dispositivo de entrada principal para escribir texto y ejecutar comandos. Tipos: membrana (silencioso), mecánico (preciso), óptico.'
  },
  {
    icon: '🖱️', name: 'Mouse', tipo: 'entrada',
    desc: 'Controla el cursor en pantalla. Tipos: óptico (luz roja), láser (más preciso), trackball. Conexión: USB, inalámbrico o Bluetooth.'
  },
  {
    icon: '🖨️', name: 'Impresora', tipo: 'salida',
    desc: 'Transfiere texto e imágenes a papel u otros medios físicos. Tipos: inkjet (colores vivos), láser (velocidad), 3D (objetos).'
  },
  {
    icon: '📠', name: 'Escáner', tipo: 'entrada',
    desc: 'Digitaliza documentos y fotografías físicas convirtiéndolos en archivos digitales. Resolución en DPI (puntos por pulgada).'
  },
  {
    icon: '🔊', name: 'Parlantes', tipo: 'salida',
    desc: 'Reproducen sonido digital convertido por la tarjeta de audio. Configuraciones: estéreo 2.0, cine 5.1, 7.1 surround.'
  },
  {
    icon: '🎙️', name: 'Micrófono', tipo: 'entrada',
    desc: 'Captura vídeo y convierte el sonido en señal digital. Usado en videollamadas, grabaciones, podcasts y streaming.'
  },
  {
    icon: '📷', name: 'Webcam', tipo: 'ambos',
    desc: 'Captura vídeo en tiempo real. Incluye micrófono integrado. Resoluciones: 720p, 1080p, 4K. Ideal para videoconferencias y streaming.'
  },
];

/* ════════════════════════════
   DATOS — GLOSARIO
════════════════════════════ */
const GLOSARIO = [
  { term: 'Hardware',    def: 'Componentes físicos de una computadora: pantalla, teclado, placa madre, RAM, etc.' },
  { term: 'Software',    def: 'Programas e instrucciones que controlan el hardware: Windows, apps, videojuegos.' },
  { term: 'CPU',         def: 'Central Processing Unit — procesador principal que ejecuta instrucciones del sistema.' },
  { term: 'RAM',         def: 'Random Access Memory — memoria temporal que almacena datos de programas en ejecución.' },
  { term: 'SSD',         def: 'Solid State Drive — almacenamiento sin partes móviles, muy rápido y silencioso.' },
  { term: 'HDD',         def: 'Hard Disk Drive — disco con platos magnéticos giratorios, mayor capacidad y menor costo.' },
  { term: 'GPU',         def: 'Graphics Processing Unit — tarjeta gráfica que renderiza imágenes, vídeo y gráficos 3D.' },
  { term: 'Periférico',  def: 'Dispositivo externo conectado a la PC: teclado, mouse, impresora, monitor, etc.' },
  { term: 'BIOS / UEFI', def: 'Firmware que inicia el hardware al encender la computadora antes de cargar el sistema operativo.' },
  { term: 'GHz',         def: 'Gigahercios — velocidad del procesador. 1 GHz = 1000 millones de ciclos por segundo.' },
  { term: 'PCIe',        def: 'PCI Express — ranura de alta velocidad en la placa madre para GPUs y otros dispositivos.' },
  { term: 'NVMe',        def: 'Non-Volatile Memory Express — protocolo ultrarrápido para SSDs conectados por PCIe.' },
  { term: 'Byte',        def: 'Unidad básica de datos digitales. 1 Byte = 8 bits. Escala: KB → MB → GB → TB.' },
  { term: 'Overclock',   def: 'Aumentar la velocidad del CPU o GPU por encima de los valores de fábrica para mayor rendimiento.' },
  { term: 'Drivers',     def: 'Programas que permiten al sistema operativo comunicarse correctamente con el hardware instalado.' },
  { term: 'Núcleo',      def: 'Core de la CPU. Más núcleos permiten ejecutar más tareas simultáneamente (multitarea).' },
  { term: 'VRAM',        def: 'Video RAM — memoria dedicada de la tarjeta gráfica para almacenar texturas y datos visuales.' },
  { term: 'USB',         def: 'Universal Serial Bus — estándar de conexión para periféricos. Versiones: 2.0, 3.0, Type-C.' },
];

/* ════════════════════════════
   NAVEGACIÓN
════════════════════════════ */
function goTo(id) {
  // Ocultar todas las páginas
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Desactivar todos los links del nav
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  // Mostrar la página destino
  const page = document.getElementById(id);
  if (page) page.classList.add('active');
  // Activar link correspondiente
  const navLink = document.getElementById('nav-' + id);
  if (navLink) navLink.classList.add('active');
  // Scroll arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

/* ════════════════════════════
   PANEL DE INFORMACIÓN (INTERNOS)
════════════════════════════ */
function showInfo(id) {
  const data = INTERNOS[id];
  if (!data) return;

  // Resaltar hotspot seleccionado
  document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('selected'));
  const hs = document.getElementById('hs-' + id);
  if (hs) hs.classList.add('selected');

  // Ocultar estado vacío
  document.getElementById('info-empty').style.display = 'none';

  // Construir contenido
  const content = document.getElementById('info-content');
  content.innerHTML = `
    <span class="info-tag"
      style="background:${data.tagColor}20;color:${data.tagColor};border:1px solid ${data.tagColor}40">
      ${data.tag}
    </span>
    <div class="info-title">${data.title}</div>
    <p class="info-desc">${data.desc}</p>
    <ul class="info-list">
      ${data.features.map(f => `<li>${f}</li>`).join('')}
    </ul>
    <div class="info-fact">
      <strong>💡 Dato curioso</strong>
      ${data.fact}
    </div>
  `;
  content.classList.add('visible');

  // Sonido sutil
  playClick();
}

/* ════════════════════════════
   RENDER EXTERNOS
════════════════════════════ */
function renderExternos() {
  const grid = document.getElementById('externos-grid');
  if (!grid) return;

  grid.innerHTML = EXTERNOS.map(c => {
    const tipoClass = c.tipo === 'entrada' ? 'tipo-entrada'
                    : c.tipo === 'salida'  ? 'tipo-salida'
                    : 'tipo-ambos';
    const tipoLabel = c.tipo === 'entrada'  ? 'Entrada'
                    : c.tipo === 'salida'   ? 'Salida'
                    : 'Entrada / Salida';
    return `
      <div class="externo-card">
        <div class="externo-icon">${c.icon}</div>
        <div class="externo-head">
          <h3>${c.name}</h3>
          <span class="tipo-badge ${tipoClass}">${tipoLabel}</span>
        </div>
        <p class="externo-desc">${c.desc}</p>
      </div>
    `;
  }).join('');
}

/* ════════════════════════════
   RENDER GLOSARIO
════════════════════════════ */
function renderGlosario(filter = '') {
  const grid = document.getElementById('glosario-grid');
  if (!grid) return;

  const q = filter.toLowerCase().trim();
  const filtered = GLOSARIO.filter(g =>
    g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="glosario-empty">No se encontraron términos para "<strong>${filter}</strong>"</div>`;
    return;
  }

  grid.innerHTML = filtered.map(g => `
    <div class="glosario-card">
      <h3>${g.term}</h3>
      <p>${g.def}</p>
    </div>
  `).join('');
}

function filterGlosario(value) {
  renderGlosario(value);
}

/* ════════════════════════════
   SONIDO (clic suave)
════════════════════════════ */
function playClick(isCorrect = null) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    // frecuencia según tipo
    if (isCorrect === true)  osc.frequency.value = 660;
    else if (isCorrect === false) osc.frequency.value = 200;
    else osc.frequency.value = 440;
    gain.gain.value = 0.04;
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) { /* Navegador sin AudioContext */ }
}

/* ════════════════════════════
   CERTIFICADO
════════════════════════════ */
// Llamado desde quiz.js al terminar
function showCert(score, total) {
  document.getElementById('cert-modal').classList.add('show');
  drawCertificate(score, total);
}

function closeCert() {
  document.getElementById('cert-modal').classList.remove('show');
}

function closeCertOnOverlay(event) {
  if (event.target === document.getElementById('cert-modal')) {
    closeCert();
  }
}

function drawCertificate(score, total) {
  const canvas = document.getElementById('cert-canvas');
  const ctx    = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const pct  = Math.round((score / total) * 100);
  const today = new Date().toLocaleDateString('es-ES', {
    day: '2-digit', month: 'long', year: 'numeric'
  });

  // Fondo oscuro
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0, 0, W, H);

  // Borde doble
  ctx.strokeStyle = '#7c6af5';
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, W - 24, H - 24);
  ctx.strokeStyle = '#9d8fff';
  ctx.lineWidth = 1;
  ctx.strokeRect(20, 20, W - 40, H - 40);

  // Puntos en esquinas
  ['#7c6af5'].forEach(color => {
    ctx.fillStyle = color;
    [[26,26],[W-26,26],[26,H-26],[W-26,H-26]].forEach(([x,y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  // Título superior
  ctx.textAlign = 'center';
  ctx.fillStyle = '#7c6af5';
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.fillText('PC EXPLORER — LABORATORIO VIRTUAL EDUCATIVO', W / 2, 58);

  ctx.fillStyle = '#e8e8f0';
  ctx.font = 'bold 24px Inter, sans-serif';
  ctx.fillText('Certificado de Participación', W / 2, 96);

  ctx.fillStyle = '#9090a8';
  ctx.font = '12px Inter, sans-serif';
  ctx.fillText('Se certifica haber completado el Quiz Interactivo de Componentes', W / 2, 130);
  ctx.fillText('de Computadora con los siguientes resultados:', W / 2, 148);

  // Medalla de puntaje
  ctx.fillStyle = '#7c6af5';
  roundRect(ctx, W/2 - 75, 165, 150, 68, 12);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 30px Inter, sans-serif';
  ctx.fillText(`${score} / ${total}`, W / 2, 208);
  ctx.font = '11px Inter, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText(`${pct}% de aciertos`, W / 2, 224);

  // Nivel
  const nivel = pct >= 90 ? '🏆 EXPERTO EN HARDWARE'
              : pct >= 70 ? '🎓 NIVEL AVANZADO'
              : pct >= 50 ? '📚 NIVEL INTERMEDIO'
              : '💪 EN PROGRESO';
  ctx.fillStyle = '#e8e8f0';
  ctx.font = 'bold 14px Inter, sans-serif';
  ctx.fillText(nivel, W / 2, 270);

  // Hardware usado
  ctx.fillStyle = '#9090a8';
  ctx.font = '11px Inter, sans-serif';
  ctx.fillText('Placa estudiada: MSI A68HM-E33 V2 · CPU AMD A6-7400 Series', W / 2, 305);

  // Fecha
  ctx.fillText(`Fecha: ${today}`, W / 2, 325);

  // Línea separadora
  ctx.strokeStyle = '#2a2a3a';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, 345); ctx.lineTo(W - 80, 345);
  ctx.stroke();

  // Footer
  ctx.fillStyle = '#6060780';
  ctx.font = '10px Inter, sans-serif';
  ctx.fillStyle = '#505065';
  ctx.fillText('PC Explorer — Aprende los Componentes de la Computadora', W / 2, 365);
}

// Helper para rect redondeado en canvas
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function downloadCert() {
  const canvas = document.getElementById('cert-canvas');
  const a = document.createElement('a');
  a.download = 'certificado-pc-explorer.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
}

/* ════════════════════════════
   INICIALIZACIÓN
════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderExternos();
  renderGlosario();

  // Click en logo → inicio
  document.querySelector('.nav-logo').addEventListener('click', () => goTo('home'));
});