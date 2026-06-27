// ═══════════════════════════════════════
//  QUIZ
// ═══════════════════════════════════════
let quizState = { questions: [], idx: 0, score: 0, answered: false, playerName: '' };

function startQuiz() {
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 10);
  quizState = { questions: shuffled, idx: 0, score: 0, answered: false };
  renderQuestion();
}

function renderQuestion() {
  const area = document.getElementById('quiz-area');
  const { questions, idx } = quizState;
  if (idx >= questions.length) { renderResult(); return; }
  const q = questions[idx];
  const letters = ['A', 'B', 'C', 'D'];
  const pct = (idx / questions.length) * 100;
  area.innerHTML = `
    <div class="quiz-progress-bar-wrap"><div class="quiz-progress-bar" style="width:${pct}%"></div></div>
    <div class="quiz-num">Pregunta ${idx + 1} de ${questions.length} · Puntaje: ${quizState.score}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.opts.map((opt, i) => `
        <div class="quiz-opt" onclick="selectAnswer(${i})" id="opt-${i}">
          <div class="quiz-opt-letter">${letters[i]}</div>
          ${opt}
        </div>
      `).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
    <button class="quiz-next-btn" id="quiz-next" onclick="nextQuestion()">
      ${idx + 1 < questions.length ? 'Siguiente pregunta →' : 'Ver resultado →'}
    </button>
  `;
}

function selectAnswer(i) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.idx];
  const correct = q.ans === i;
  if (correct) quizState.score++;
  document.querySelectorAll('.quiz-opt').forEach((el, j) => {
    el.classList.add('disabled');
    if (j === q.ans) el.classList.add('correct');
    else if (j === i && !correct) el.classList.add('wrong');
  });
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback show ' + (correct ? 'correct-fb' : 'wrong-fb');
  fb.innerHTML = (correct ? '✅ ¡Correcto! ' : '❌ Incorrecto. ') + q.exp;
  document.getElementById('quiz-next').classList.add('show');
  // sound
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = correct ? 660 : 220;
    gain.gain.value = 0.05;
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.stop(ctx.currentTime + 0.3);
  } catch(e){}
}

function nextQuestion() {
  quizState.idx++;
  quizState.answered = false;
  renderQuestion();
}

function renderResult() {
  const { score, questions } = quizState;
  const pct = Math.round((score / questions.length) * 100);
  let msg = pct >= 90 ? '🏆 ¡Excelente! Eres un experto en hardware.' :
            pct >= 70 ? '🎉 ¡Muy bien! Tienes buenos conocimientos.' :
            pct >= 50 ? '📚 Bien, pero puedes mejorar repasando el material.' :
                        '💪 Sigue estudiando, ¡la práctica hace al maestro!';
  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-result">
      <div class="quiz-score-circle">
        <div class="quiz-score-num">${score}</div>
        <div class="quiz-score-total">de ${questions.length}</div>
      </div>
      <h2>${pct}% de aciertos</h2>
      <p>${msg}</p>
      <button class="cert-btn" onclick="showCert()">🏅 Ver certificado</button>
      <button class="restart-btn" onclick="startQuiz()">Intentar de nuevo</button>
    </div>
  `;
}

// ═══════════════════════════════════════
//  CERTIFICATE
// ═══════════════════════════════════════
function showCert() {
  document.getElementById('cert-modal').classList.add('show');
  drawCert();
}
function closeCert() { document.getElementById('cert-modal').classList.remove('show'); }

function drawCert() {
  const canvas = document.getElementById('cert-canvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const score = quizState.score, total = quizState.questions.length;
  const pct = Math.round((score / total) * 100);
  const today = new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });

  // BG
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0, 0, W, H);

  // Border
  ctx.strokeStyle = '#7c6af5';
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, W - 24, H - 24);
  ctx.strokeStyle = '#9d8fff';
  ctx.lineWidth = 1;
  ctx.strokeRect(18, 18, W - 36, H - 36);

  // Corner decorations
  const corners = [[24, 24], [W - 24, 24], [24, H - 24], [W - 24, H - 24]];
  corners.forEach(([x, y]) => {
    ctx.fillStyle = '#7c6af5';
    ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
  });

  // Title
  ctx.fillStyle = '#7c6af5';
  ctx.font = 'bold 13px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('PC EXPLORER — LABORATORIO VIRTUAL', W / 2, 65);

  ctx.fillStyle = '#e8e8f0';
  ctx.font = 'bold 26px Inter, sans-serif';
  ctx.fillText('Certificado de Participación', W / 2, 105);

  ctx.fillStyle = '#9090a8';
  ctx.font = '13px Inter, sans-serif';
  ctx.fillText('Se certifica que el estudiante completó el Quiz Interactivo', W / 2, 140);
  ctx.fillText('con los siguientes resultados:', W / 2, 158);

  // Score badge
  ctx.fillStyle = '#7c6af5';
  ctx.beginPath();
  ctx.roundRect(W/2 - 80, 175, 160, 70, 12);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px Inter, sans-serif';
  ctx.fillText(`${score}/${total}`, W / 2, 217);
  ctx.font = '12px Inter, sans-serif';
  ctx.fillText(`${pct}% de aciertos`, W / 2, 235);

  // Message
  ctx.fillStyle = '#e8e8f0';
  const levelText = pct >= 90 ? '🏆 Nivel: EXPERTO EN HARDWARE' :
                    pct >= 70 ? '🎓 Nivel: AVANZADO' :
                    pct >= 50 ? '📚 Nivel: INTERMEDIO' : '💪 Nivel: EN PROGRESO';
  ctx.font = 'bold 15px Inter, sans-serif';
  ctx.fillText(levelText, W / 2, 285);

  // Date
  ctx.fillStyle = '#9090a8';
  ctx.font = '12px Inter, sans-serif';
  ctx.fillText(`Fecha: ${today}`, W / 2, 325);

  // Footer
  ctx.strokeStyle = '#2a2a3a';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(80, 345); ctx.lineTo(W - 80, 345); ctx.stroke();

  ctx.fillStyle = '#9090a8';
  ctx.font = '11px Inter, sans-serif';
  ctx.fillText('PC Explorer — Aprende los Componentes de la Computadora', W / 2, 365);
}

function downloadCert() {
  const canvas = document.getElementById('cert-canvas');
  const a = document.createElement('a');
  a.download = 'certificado-pc-explorer.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
}

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
renderExternos();
renderGlosario();
startQuiz();

// Make nav work for home
document.getElementById('nav-home').onclick = () => goTo('home');
