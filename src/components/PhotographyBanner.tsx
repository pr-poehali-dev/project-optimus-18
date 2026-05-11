import type React from "react"
import { useState, useEffect } from "react"

const NEURON_IMG = "https://cdn.poehali.dev/projects/b9949cc6-66c3-4b7e-8cbf-433fdb86c1fb/files/f5dc5e11-af0f-476e-9cf8-144497bfb5f0.jpg"
const BRAIN_IMG = "https://cdn.poehali.dev/projects/b9949cc6-66c3-4b7e-8cbf-433fdb86c1fb/files/688e150b-19b7-441f-a6e2-f2174a0ebb4b.jpg"
const SPINAL_IMG = "https://cdn.poehali.dev/projects/b9949cc6-66c3-4b7e-8cbf-433fdb86c1fb/files/4316f538-b0b3-40f2-9e4c-b4c75ee7d08f.jpg"

const quizData = [
  {
    question: "Какое вещество образует тело нейрона?",
    options: ["Белое вещество", "Серое вещество", "Ликвор", "Миелин"],
    correct: 1,
    explanation: "Тела нейронов образуют серое вещество, а их отростки — белое вещество."
  },
  {
    question: "Где расположен спинной мозг?",
    options: ["В черепной коробке", "В грудной клетке", "В позвоночном канале", "В брюшной полости"],
    correct: 2,
    explanation: "Спинной мозг находится внутри позвоночного канала, защищённый позвонками."
  },
  {
    question: "Что такое таламус?",
    options: ["Центр равновесия", "Центр чувствительности", "Главный парасимпатический нерв", "Часть мозжечка"],
    correct: 1,
    explanation: "Таламус — это центр чувствительности, входящий в состав промежуточного мозга."
  },
  {
    question: "Реакция «бей или беги» — это функция:",
    options: ["Парасимпатической системы", "Мозжечка", "Симпатической системы", "Гипофиза"],
    correct: 2,
    explanation: "Симпатическая система активируется при стрессе, готовя организм к действию."
  },
  {
    question: "Какой черепной нерв является главным парасимпатическим?",
    options: ["I пара (обонятельный)", "V пара (тройничный)", "II пара (зрительный)", "X пара (блуждающий)"],
    correct: 3,
    explanation: "Блуждающий нерв (X пара) — главный парасимпатический нерв, иннервирующий сердце, лёгкие и кишечник."
  },
  {
    question: "Мозжечок отвечает за:",
    options: ["Зрение и слух", "Координацию и равновесие", "Обоняние", "Гормональную регуляцию"],
    correct: 1,
    explanation: "Мозжечок координирует движения и поддерживает равновесие тела."
  },
  {
    question: "Самый крупный нерв тела человека:",
    options: ["Лучевой нерв", "Тройничный нерв", "Блуждающий нерв", "Седалищный нерв"],
    correct: 3,
    explanation: "Седалищный нерв — самый длинный и широкий нерв тела, выходит из поясничного-крестцового сплетения."
  },
  {
    question: "Где происходит анализ информации и формирование поведения?",
    options: ["В спинном мозге", "В мозжечке", "В коре полушарий", "В гипоталамусе"],
    correct: 2,
    explanation: "Кора больших полушарий — высший центр нервной системы, где происходит сознательная обработка информации."
  },
]

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["НЕЙРОН.", "МОЗГ.", "НЕРВЫ."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Inter:wght@400;500&display=swap');

        .photography-banner, .photography-banner * { box-sizing: border-box; }

        .photography-banner {
          margin: 0;
          background-color: #002b36;
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        /* ── HERO ── */
        .info-section {
          height: 100vh; min-height: 780px;
          padding: 0 0 0 30px;
          display: flex; align-items: center; justify-content: flex-end;
          position: relative; z-index: 1; user-select: none; overflow: hidden;
        }
        .info-section::before {
          content: ""; border-radius: 197.5px 0px; opacity: 0.4;
          background: #d33682; filter: blur(162px);
          height: 35%; width: 55%; position: absolute;
          top: -40%; left: -66%; transform: translate(50%, 50%); z-index: -1;
        }
        .left-part { padding: 20px 0 0; overflow: hidden; }
        .left-part h1 {
          margin: 0; color: #fff; font-family: "Montserrat", sans-serif;
          font-weight: 700; font-size: clamp(48px, 12vw, 160px);
          line-height: 0.75; text-transform: uppercase;
        }
        .left-part h1 .text { color: #d33682; display: block; height: clamp(100px, 15vw, 120px); }
        .left-part h1 .d-flex { display: flex; align-items: center; }
        .left-part h1 .char { animation: slideUp 0.3s ease-out forwards; }
        @keyframes slideUp { from { transform: translateY(-515px); } to { transform: translateY(0); } }
        .left-part p {
          width: 72%; margin: 20px 0 0; color: #fff; font-size: 16px;
          line-height: 2; font-family: "Montserrat"; opacity: 0.8;
        }
        .book-link {
          margin: 40px 0 0; padding: 0; border: 0;
          font-size: 56px; line-height: 1; color: #f1f1f1;
          letter-spacing: 0.25px; text-transform: uppercase;
          font-family: "Montserrat"; font-weight: 300;
          display: inline-flex; align-items: center; gap: 28px;
          text-decoration: none; cursor: pointer;
        }
        .book-link .linktext { position: relative; overflow: hidden; display: inline-block; }
        .book-link .linktext::before {
          position: absolute; content: ""; left: 0; bottom: 6px;
          width: 100%; height: 3px; background-color: #ffffff;
          transform: scaleX(1); transition: transform 250ms ease-in-out; transform-origin: 0 0;
        }
        .book-link:hover .linktext:before { transform: scaleX(0); transform-origin: 100% 100%; }
        .book-link .arrow {
          height: 36px; width: 36px; top: -5px;
          display: inline-block; position: relative; overflow: hidden;
        }
        .book-link .arrow::before, .book-link .arrow::after {
          position: absolute; content: ""; background-color: #d33682;
          transition: all ease-in-out 0.35s; transform-origin: 0 0; border-radius: 30px;
        }
        .book-link .arrow::before { height: 2px; width: 100%; top: 0; right: 0; }
        .book-link .arrow::after  { width: 2px; height: 100%; top: 0; right: 0; }
        .book-link:hover .arrow::before { width: 65%; }
        .book-link:hover .arrow::after  { height: 65%; }
        .book-link .arrow span {
          background-color: #d33682; height: 2px; width: 100%; display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px); transform-origin: right top;
          border-radius: 30px; transition: all ease-in-out 0.35s;
          position: absolute; top: 0; left: 0;
        }
        .book-link .arrow span::before {
          background-color: #d33682; content: ""; height: 100%; width: 15px;
          left: -15px; top: 0; position: absolute;
        }
        .right-part {
          background-color: transparent; height: 588px; width: 588px;
          margin: 0 0 0 auto; margin-right: -14px;
          display: block; position: relative; z-index: 1; flex-shrink: 0;
        }
        .right-part::before {
          content: ""; border-radius: 197.5px 0px; opacity: 0.4;
          background: #d33682; filter: blur(112px);
          height: 35%; width: 55%; position: absolute;
          top: 50%; right: 33%; transform: translate(50%, -50%); z-index: -1;
        }
        .particles-container {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; overflow: hidden; z-index: 0;
        }
        .particle {
          position: absolute; background: rgba(211,54,130,0.6);
          border-radius: 50%; pointer-events: none; animation: float linear infinite;
        }
        .particle:nth-child(odd) { background: rgba(203,75,22,0.4); }
        .particle:nth-child(3n) { background: rgba(255,255,255,0.2); }
        @keyframes float {
          0%   { transform: translateY(100vh) scale(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
        .bg-line {
          display: flex; height: 88px; position: relative;
          overflow: hidden; z-index: 1; margin-bottom: 20px;
        }
        .bg-line img { position: relative; flex-shrink: 0; animation: 26s linear infinite; }
        .bg-line img:nth-child(1) { animation-name: first-text; }
        .bg-line img:nth-child(2) { animation-name: second-text; }
        @keyframes first-text {
          50% { transform: translateX(-100%); opacity: 1; }
          50.05% { opacity: 0; }
          50.1% { transform: translateX(100%); opacity: 1; }
          100% { transform: translateX(0%); }
        }
        @keyframes second-text {
          0% { transform: translateX(0%); }
          50% { transform: translateX(-100%); }
          100% { transform: translateX(-200%); }
        }
        .bg-dash-circle {
          position: absolute; bottom: -35px; right: -13px;
          z-index: -1; width: 180px; aspect-ratio: 1/1;
        }
        .bg-dash-circle img {
          height: 100%; width: 100%; object-fit: cover;
          animation: circle-rotate 18s linear infinite;
        }
        @keyframes circle-rotate { 0% { transform: rotate(0); } 100% { transform: rotate(360deg); } }

        /* ── STATS BAR ── */
        .stats-bar {
          background: #073642;
          border-top: 1px solid #1e3a42;
          border-bottom: 1px solid #1e3a42;
          padding: 30px;
        }
        .stats-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px; text-align: center;
        }
        .stat-value {
          color: #d33682; font-family: "Montserrat", sans-serif;
          font-weight: 700; font-size: 36px; line-height: 1;
        }
        .stat-label {
          color: #aaa; font-family: "Inter", sans-serif;
          font-size: 12px; margin-top: 6px; text-transform: uppercase; letter-spacing: 1px;
        }

        /* ── FEATURES ── */
        .features-section {
          padding: 100px 30px; background-color: #073642;
          position: relative; overflow: hidden;
        }
        .features-section::before {
          content: ""; border-radius: 197.5px 0px; opacity: 0.3;
          background: #d33682; filter: blur(140px);
          height: 40%; width: 40%; position: absolute;
          top: 20%; right: -20%; z-index: 0;
        }
        .features-container {
          max-width: 1400px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px; align-items: start; position: relative; z-index: 1;
        }
        .features-content h2 {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: clamp(50px, 7vw, 100px); line-height: 0.9;
          margin: 0 0 30px; text-transform: uppercase;
        }
        .features-content h2 .highlight { color: #d33682; }
        .features-content .intro-img {
          width: 100%; border-radius: 20px; margin-top: 20px;
          border: 1px solid #1e3a42; opacity: 0.85;
        }
        .features-list { list-style: none; padding: 0; margin: 0; }
        .feature-item {
          padding: 25px 0; border-bottom: 1px solid #333;
          display: flex; align-items: flex-start; gap: 20px;
        }
        .feature-icon {
          width: 50px; height: 50px; background: #d33682; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; font-weight: bold; color: #002b36;
          flex-shrink: 0; font-family: "Montserrat";
        }
        .feature-text h3 {
          color: #fff; font-family: "Montserrat"; font-size: 17px;
          margin: 0 0 8px; text-transform: uppercase;
        }
        .feature-text p {
          color: #aaa; font-family: "Inter", sans-serif;
          font-size: 14px; margin: 0; line-height: 1.7;
        }

        /* ── NEURON ANATOMY ── */
        .neuron-section {
          padding: 100px 30px; background-color: #002b36;
          position: relative; overflow: hidden;
        }
        .neuron-section::after {
          content: ""; border-radius: 197.5px 0px; opacity: 0.25;
          background: #cb4b16; filter: blur(160px);
          height: 50%; width: 40%; position: absolute;
          bottom: -10%; right: -20%; z-index: 0;
        }
        .neuron-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 60px; align-items: center; position: relative; z-index: 1;
        }
        .neuron-image-wrap { position: relative; }
        .neuron-image-wrap img { width: 100%; border-radius: 24px; border: 1px solid #1e3a42; }
        .neuron-glow {
          position: absolute; inset: -2px; border-radius: 26px;
          background: linear-gradient(135deg, #d3368230, transparent 60%);
          pointer-events: none;
        }
        .neuron-info h2 {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: clamp(36px, 5vw, 70px); text-transform: uppercase;
          line-height: 0.9; margin: 0 0 30px;
        }
        .neuron-info h2 .highlight { color: #d33682; }
        .neuron-parts { display: flex; flex-direction: column; gap: 14px; }
        .neuron-part {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 16px; border: 1px solid #1e3a42; border-radius: 14px;
          transition: border-color 0.3s;
        }
        .neuron-part:hover { border-color: #d33682; }
        .neuron-part-dot {
          width: 12px; height: 12px; background: #d33682;
          border-radius: 50%; flex-shrink: 0; margin-top: 4px;
        }
        .neuron-part-title {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: 14px; text-transform: uppercase; margin-bottom: 4px;
        }
        .neuron-part-desc {
          color: #aaa; font-family: "Inter", sans-serif;
          font-size: 13px; line-height: 1.6;
        }

        /* ── SLIDES ── */
        .slides-section {
          padding: 100px 30px; background-color: #073642;
          position: relative; overflow: hidden;
        }
        .slides-section::before {
          content: ""; border-radius: 197.5px 0px; opacity: 0.3;
          background: #d33682; filter: blur(160px);
          height: 50%; width: 40%; position: absolute;
          top: 10%; left: -20%; z-index: 0;
        }
        .slides-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .slides-header { text-align: center; margin-bottom: 60px; }
        .slides-header h2 {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: clamp(40px, 6vw, 80px); line-height: 0.9;
          margin: 0 0 20px; text-transform: uppercase;
        }
        .slides-header h2 .highlight { color: #d33682; }
        .slides-header p {
          color: #aaa; font-family: "Inter", sans-serif; font-size: 16px;
          max-width: 600px; margin: 0 auto; line-height: 1.8;
        }
        .slides-nav { display: flex; justify-content: center; gap: 10px; margin-bottom: 50px; flex-wrap: wrap; }
        .slide-nav-btn {
          padding: 10px 20px; background: rgba(255,255,255,0.05);
          border: 1px solid #333; border-radius: 30px; color: #aaa;
          font-family: "Montserrat"; font-size: 13px; cursor: pointer;
          transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .slide-nav-btn:hover, .slide-nav-btn.active {
          background: #d33682; border-color: #d33682; color: #002b36; font-weight: bold;
        }
        .slide-content { display: none; animation: fadeIn 0.4s ease; }
        .slide-content.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .slide-card {
          background: rgba(255,255,255,0.04); border: 1px solid #1e3a42;
          border-radius: 24px; padding: 50px; backdrop-filter: blur(10px);
        }
        .slide-card-header {
          display: flex; align-items: center; gap: 20px;
          margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid #1e3a42;
        }
        .slide-card-header img {
          width: 100px; height: 100px; object-fit: cover;
          border-radius: 14px; border: 1px solid #1e3a42; flex-shrink: 0;
        }
        .slide-card-header h3 {
          color: #d33682; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: clamp(20px, 3vw, 30px); text-transform: uppercase; margin: 0;
        }
        .slide-card-header p {
          color: #aaa; font-family: "Inter", sans-serif;
          font-size: 14px; margin: 8px 0 0; line-height: 1.6;
        }
        .slide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
        .slide-item {
          background: rgba(255,255,255,0.03); border: 1px solid #1e3a42;
          border-radius: 16px; padding: 28px; transition: border-color 0.3s ease;
        }
        .slide-item:hover { border-color: #d33682; }
        .slide-item-label {
          color: #d33682; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;
        }
        .slide-item h4 {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: 15px; text-transform: uppercase; margin: 0 0 12px;
        }
        .slide-item p {
          color: #aaa; font-family: "Inter", sans-serif;
          font-size: 14px; line-height: 1.7; margin: 0;
        }

        /* ── VISUAL CARDS ── */
        .visual-section {
          padding: 100px 30px; background-color: #002b36;
          position: relative; overflow: hidden;
        }
        .visual-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 40px; position: relative; z-index: 1;
        }
        .visual-card {
          background: rgba(255,255,255,0.04); border: 1px solid #1e3a42;
          border-radius: 24px; overflow: hidden; transition: border-color 0.3s;
        }
        .visual-card:hover { border-color: #d33682; }
        .visual-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
        .visual-card-body { padding: 28px; }
        .visual-card-body h3 {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: 20px; text-transform: uppercase; margin: 0 0 12px;
        }
        .visual-card-body p {
          color: #aaa; font-family: "Inter", sans-serif;
          font-size: 14px; line-height: 1.7; margin: 0;
        }
        .visual-tag {
          display: inline-block; padding: 4px 12px;
          background: rgba(211,54,130,0.15); border: 1px solid #d33682;
          border-radius: 20px; color: #d33682; font-family: "Montserrat";
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1px; margin-bottom: 14px;
        }

        /* ── CRANIAL NERVES ── */
        .cranial-section {
          padding: 100px 30px; background-color: #073642;
          position: relative; overflow: hidden;
        }
        .cranial-section::before {
          content: ""; border-radius: 197.5px 0px; opacity: 0.4;
          background: #d33682; filter: blur(120px);
          height: 50%; width: 30%; position: absolute;
          top: 50%; left: -15%; transform: translateY(-50%); z-index: 0;
        }
        .cranial-inner { max-width: 1200px; margin: 0 auto; text-align: center; position: relative; z-index: 1; }
        .section-title {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: clamp(36px, 6vw, 80px); line-height: 0.9;
          margin: 0 0 60px; text-transform: uppercase;
        }
        .section-title span { color: #d33682; }
        .nerves-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px; text-align: left;
        }
        .nerve-card {
          background: rgba(255,255,255,0.04); border: 1px solid #1e3a42;
          border-radius: 16px; padding: 24px; transition: all 0.3s ease;
        }
        .nerve-card:hover { border-color: #d33682; transform: translateY(-4px); }
        .nerve-number { color: #d33682; font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 28px; margin-bottom: 8px; }
        .nerve-name { color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 14px; text-transform: uppercase; margin-bottom: 6px; }
        .nerve-desc { color: #aaa; font-family: "Inter", sans-serif; font-size: 13px; line-height: 1.6; }

        /* ── QUIZ ── */
        .quiz-section {
          padding: 100px 30px; background-color: #002b36;
          position: relative; overflow: hidden;
        }
        .quiz-section::before {
          content: ""; border-radius: 197.5px 0;
          opacity: 0.3; background: #d33682; filter: blur(150px);
          height: 60%; width: 60%; position: absolute;
          top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 0;
        }
        .quiz-inner { max-width: 900px; margin: 0 auto; position: relative; z-index: 1; }
        .quiz-header { text-align: center; margin-bottom: 50px; }
        .quiz-progress-bar { height: 4px; background: #1e3a42; border-radius: 2px; margin-bottom: 40px; overflow: hidden; }
        .quiz-progress-fill { height: 100%; background: #d33682; border-radius: 2px; transition: width 0.5s ease; }
        .quiz-counter {
          color: #d33682; font-family: "Montserrat", sans-serif; font-size: 13px;
          font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;
        }
        .quiz-question {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: clamp(20px, 3vw, 28px); line-height: 1.3; margin: 0 0 36px;
        }
        .quiz-options { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 30px; }
        .quiz-option {
          padding: 20px 24px; background: rgba(255,255,255,0.04);
          border: 1px solid #1e3a42; border-radius: 16px; color: #ccc;
          font-family: "Inter", sans-serif; font-size: 15px; cursor: pointer;
          transition: all 0.25s ease; text-align: left; line-height: 1.5;
        }
        .quiz-option:hover:not(:disabled) { border-color: #d33682; color: #fff; background: rgba(211,54,130,0.1); }
        .quiz-option.correct { border-color: #2aa198; background: rgba(42,161,152,0.15); color: #2aa198; font-weight: bold; }
        .quiz-option.wrong { border-color: #dc322f; background: rgba(220,50,47,0.15); color: #dc322f; }
        .quiz-option:disabled { cursor: default; }
        .quiz-explanation {
          background: rgba(211,54,130,0.08); border: 1px solid rgba(211,54,130,0.3);
          border-radius: 14px; padding: 20px 24px; color: #ccc;
          font-family: "Inter", sans-serif; font-size: 14px; line-height: 1.7;
          margin-bottom: 24px; animation: fadeIn 0.3s ease;
        }
        .quiz-explanation strong { color: #d33682; }
        .quiz-btn {
          display: inline-block; padding: 16px 40px; background: #d33682;
          color: #002b36; font-family: "Montserrat"; font-size: 15px; font-weight: 700;
          text-transform: uppercase; border-radius: 50px; border: none; cursor: pointer;
          transition: all 0.3s ease; letter-spacing: 1px;
        }
        .quiz-btn:hover { opacity: 0.85; transform: translateY(-2px); }
        .quiz-btn:disabled { opacity: 0.4; cursor: default; transform: none; }
        .quiz-result { text-align: center; padding: 60px 30px; animation: fadeIn 0.5s ease; }
        .quiz-result-score { color: #d33682; font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 90px; line-height: 1; margin-bottom: 10px; }
        .quiz-result-title { color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 28px; text-transform: uppercase; margin-bottom: 16px; }
        .quiz-result-desc { color: #aaa; font-family: "Inter", sans-serif; font-size: 16px; line-height: 1.7; max-width: 500px; margin: 0 auto 40px; }

        /* ── CTA ── */
        .cta-section {
          padding: 120px 30px; background-color: #073642;
          position: relative; overflow: hidden;
        }
        .cta-section::before {
          content: ""; border-radius: 197.5px 0px; opacity: 0.6;
          background: #d33682; filter: blur(180px);
          height: 60%; width: 80%; position: absolute;
          top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: -1;
        }
        .cta-container { max-width: 1000px; margin: 0 auto; text-align: center; }
        .cta-title {
          color: #fff; font-family: "Montserrat", sans-serif; font-weight: 700;
          font-size: clamp(60px, 10vw, 130px); line-height: 0.85;
          margin: 0 0 30px; text-transform: uppercase;
        }
        .cta-subtitle {
          color: #d33682; font-family: "Montserrat"; font-size: 20px;
          line-height: 1.7; margin: 0 auto 50px; max-width: 700px;
        }
        .conclusion-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px; text-align: left;
        }
        .conclusion-item {
          background: rgba(255,255,255,0.04); border: 1px solid #1e3a42;
          border-radius: 16px; padding: 28px; transition: border-color 0.3s;
        }
        .conclusion-item:hover { border-color: #d33682; }
        .conclusion-num { color: #d33682; font-family: "Montserrat", sans-serif; font-weight: 700; font-size: 40px; line-height: 1; margin-bottom: 12px; }
        .conclusion-item h4 { color: #fff; font-family: "Montserrat", sans-serif; font-size: 15px; font-weight: 700; text-transform: uppercase; margin: 0 0 10px; }
        .conclusion-item p { color: #aaa; font-family: "Inter", sans-serif; font-size: 13px; line-height: 1.7; margin: 0; }

        /* ── RESPONSIVE ── */
        @media screen and (min-width: 1500px) { .info-section { padding-left: 120px; } }
        @media screen and (min-width: 1400px) { .info-section { padding-left: 100px; } }
        @media screen and (max-width: 1199px) {
          .right-part { height: 400px; width: 400px; }
          .bg-dash-circle { width: 130px; }
          .neuron-inner, .visual-inner { grid-template-columns: 1fr; }
        }
        @media screen and (max-width: 767px) {
          .info-section { display: block; padding: 0; min-height: auto; height: auto; }
          .left-part { padding: 40px 16px 60px; }
          .right-part { height: 300px; width: 300px; margin: 0 auto; }
          .left-part h1 .text { height: 88px; }
          .left-part p { font-size: 12px; width: 96%; }
          .bg-dash-circle { width: 80px; }
          .bg-line { height: 52px; }
          .features-section, .neuron-section, .slides-section,
          .visual-section, .cranial-section, .quiz-section, .cta-section { padding: 60px 16px; }
          .features-container { grid-template-columns: 1fr; gap: 30px; }
          .slide-card { padding: 30px 20px; }
          .quiz-options { grid-template-columns: 1fr; }
          .visual-inner { grid-template-columns: 1fr; }
          .slide-card-header { flex-direction: column; align-items: flex-start; }
          .slide-card-header img { width: 80px; height: 80px; }
        }
      `}</style>

      <div className="photography-banner">
        <main>

          {/* HERO */}
          <section className="info-section">
            <div className="left-part">
              <h1>
                <span className="d-flex">
                  {["Н","Е","Р","В","Н","А","Я"].map((char, i) => (
                    <span key={i} className="char tracking-tighter" style={{ animationDelay: `${i * 0.08}s` }}>{char}</span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText}</span>
              </h1>
              <p className="tracking-widest">
                Строение, функции и отделы нервной системы человека — от нейрона до коры полушарий
              </p>
              <a href="#slides" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Изучить</span>
                <span className="arrow"><span /></span>
              </a>
            </div>
            <div className="right-part">
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div key={i} className="particle" style={{
                    width: `${Math.random() * 8 + 4}px`,
                    height: `${Math.random() * 8 + 4}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 20 + 15}s`,
                    animationDelay: `${Math.random() * 10}s`,
                  }} />
                ))}
              </div>
              <div className="bg-line">
                <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="" style={{ filter: "hue-rotate(280deg) saturate(1.5)" }} />
                <img src="https://www.yudiz.com/codepen/photography-banner/wave.svg" alt="" style={{ filter: "hue-rotate(280deg) saturate(1.5)" }} />
              </div>
              <div className="bg-dash-circle">
                <img src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg" alt="" style={{ filter: "hue-rotate(280deg) saturate(1.5)" }} />
              </div>
            </div>
          </section>

          {/* STATS */}
          <div className="stats-bar">
            <div className="stats-inner">
              {[
                { value: "86 млрд", label: "Нейронов в мозге" },
                { value: "12 пар",  label: "Черепных нервов" },
                { value: "31 пара", label: "Спинномозговых нервов" },
                { value: "5 отделов", label: "Головного мозга" },
                { value: "3 оболочки", label: "Спинного мозга" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* СТРУКТУРА */}
          <section className="features-section">
            <div className="features-container">
              <div className="features-content">
                <h2>Общая <span className="highlight">структура</span></h2>
                <img src={SPINAL_IMG} alt="Спинной мозг" className="intro-img" />
              </div>
              <ul className="features-list">
                {[
                  { n: "01", title: "Нейрон — основа", text: "Тело нейрона образует серое вещество. Отростки (аксоны и дендриты) — белое вещество. Нейроны связаны синапсами, формируя единую нейронную сеть." },
                  { n: "02", title: "ЦНС и периферия", text: "Центральная НС: головной и спинной мозг. Периферическая НС: нервы — отростки нейронов, выходящие за пределы ЦНС к органам и мышцам." },
                  { n: "03", title: "Спинной мозг", text: "Расположен в позвоночном канале. В центре — «бабочка» из серого вещества (рога), по краям — белое вещество. Три оболочки: твёрдая → паутинная → мягкая; между ними — ликвор." },
                  { n: "04", title: "Единое целое", text: "Деление на центральную и периферическую НС условно — это единая система, где нейроны непрерывно связаны отростками от мозга до каждой клетки тела." },
                ].map((item) => (
                  <li key={item.n} className="feature-item">
                    <div className="feature-icon">{item.n}</div>
                    <div className="feature-text">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* СТРОЕНИЕ НЕЙРОНА */}
          <section className="neuron-section">
            <div className="neuron-inner">
              <div className="neuron-image-wrap">
                <img src={NEURON_IMG} alt="Строение нейрона" />
                <div className="neuron-glow" />
              </div>
              <div className="neuron-info">
                <h2>Строение <span className="highlight">нейрона</span></h2>
                <div className="neuron-parts">
                  {[
                    { title: "Тело (сома)", desc: "Содержит ядро и органеллы. Здесь происходит метаболизм. Тела нейронов образуют серое вещество ЦНС." },
                    { title: "Дендриты", desc: "Короткие ветвящиеся отростки. Принимают входящие сигналы от других нейронов через синапсы." },
                    { title: "Аксон", desc: "Длинный отросток — до 1 метра. Передаёт нервный импульс от тела клетки к мишеням. Покрыт миелиновой оболочкой." },
                    { title: "Миелиновая оболочка", desc: "Образована клетками Шванна. Ускоряет проведение импульса до 120 м/с. Её разрушение — причина рассеянного склероза." },
                    { title: "Синаптические окончания", desc: "Терминали аксона с нейромедиаторами: дофамин, серотонин, ацетилхолин. Передают сигнал в синаптическую щель." },
                  ].map((p, i) => (
                    <div key={i} className="neuron-part">
                      <div className="neuron-part-dot" />
                      <div>
                        <div className="neuron-part-title">{p.title}</div>
                        <div className="neuron-part-desc">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* СЛАЙДЫ */}
          <SlidesSection />

          {/* ВИЗУАЛЬНЫЕ СХЕМЫ */}
          <section className="visual-section">
            <div className="visual-inner">
              <div className="visual-card">
                <img src={BRAIN_IMG} alt="Головной мозг" />
                <div className="visual-card-body">
                  <div className="visual-tag">Головной мозг</div>
                  <h3>Encephalon</h3>
                  <p>Масса около 1400 г. Состоит из 5 отделов: продолговатый, задний (мозжечок + мост), средний, промежуточный и конечный мозг. Кора содержит около 14 млрд нейронов.</p>
                </div>
              </div>
              <div className="visual-card">
                <img src={SPINAL_IMG} alt="Спинной мозг" />
                <div className="visual-card-body">
                  <div className="visual-tag">Спинной мозг</div>
                  <h3>Medulla spinalis</h3>
                  <p>Длина 40–45 см. На срезе видна «бабочка» серого вещества: передние рога — двигательные, задние — чувствительные. 31 пара спинномозговых нервов.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ЧЕРЕПНЫЕ НЕРВЫ */}
          <section className="cranial-section">
            <div className="cranial-inner">
              <h2 className="section-title">12 пар черепных <span>нервов</span></h2>
              <div className="nerves-grid">
                {[
                  { num: "I",    name: "Обонятельный",      desc: "Восприятие запахов. Чувствительный. Идёт от носовой полости к обонятельным луковицам." },
                  { num: "II",   name: "Зрительный",        desc: "Зрительные сигналы от сетчатки к затылочной доле. Чувствительный." },
                  { num: "III",  name: "Глазодвигательный", desc: "Движения глазного яблока, сужение зрачка (парасимпатика). Двигательный." },
                  { num: "V",    name: "Тройничный",        desc: "Смешанный. Чувствительность лица, жевательные мышцы. Самый крупный черепной нерв." },
                  { num: "VII",  name: "Лицевой",           desc: "Мимическая мускулатура, слёзные и слюнные железы. Смешанный." },
                  { num: "VIII", name: "Слуховой",          desc: "Слух (улитковая ветвь) и равновесие (вестибулярная ветвь). Чувствительный." },
                  { num: "IX",   name: "Языкоглоточный",    desc: "Чувствительность глотки, вкус задней трети языка, слюноотделение. Смешанный." },
                  { num: "X",    name: "Блуждающий",        desc: "Главный парасимпатический нерв. Сердце, лёгкие, ЖКТ. Самый протяжённый черепной нерв." },
                  { num: "XII",  name: "Подъязычный",       desc: "Движения языка. Двигательный. Важен для речи и глотания." },
                ].map((nerve) => (
                  <div key={nerve.num} className="nerve-card">
                    <div className="nerve-number">{nerve.num}</div>
                    <div className="nerve-name">{nerve.name}</div>
                    <div className="nerve-desc">{nerve.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ТЕСТ */}
          <QuizSection />

          {/* ИТОГ */}
          <section className="cta-section" id="cta">
            <div className="cta-container">
              <h2 className="cta-title">Итог</h2>
              <p className="cta-subtitle">
                Нервная система — единое целое, управляющее всем организмом: от рефлекса до мышления
              </p>
              <div className="conclusion-grid">
                {[
                  { n: "1", title: "Связь со средой",     text: "Чувствительные нервы принимают сигналы. Двигательные — отдают команды мышцам и органам." },
                  { n: "2", title: "Регуляция организма", text: "Управляет мышцами сознательно и внутренними органами вегетативно (симпатика / парасимпатика)." },
                  { n: "3", title: "Высший центр — кора", text: "Анализ, мышление, память и формирование поведения — функции коры больших полушарий." },
                  { n: "4", title: "Целостность",         text: "Деление на центральную и периферическую НС условно: нейроны связаны от мозга до каждой клетки." },
                ].map((item) => (
                  <div key={item.n} className="conclusion-item">
                    <div className="conclusion-num">{item.n}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  )
}

/* ────── SLIDES ────── */
const SlidesSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "Головной мозг: отделы",
      subtitle: "5 основных отделов с разными функциями",
      img: BRAIN_IMG,
      items: [
        { label: "Ромбовидный мозг", title: "Продолговатый + Мозжечок", content: "Продолговатый мозг — жизненно важные рефлексы (дыхание, кровообращение). Мозжечок — координация движений и равновесие." },
        { label: "Средний мозг",     title: "Четверохолмие",             content: "Содержит рефлекторные центры зрения (верхние бугры) и слуха (нижние бугры). Проходит мозговой водопровод." },
        { label: "Промежуточный",    title: "Таламус + Гипоталамус",     content: "Таламус — центр чувствительности. Гипоталамус — вегетатика и гормоны. Гипофиз — главная эндокринная железа." },
        { label: "Конечный мозг",    title: "Два полушария",             content: "Покрыты корой (серое вещество). Внутри — белое вещество и подкорковые ядра. Борозды и извилины увеличивают площадь коры в 3 раза." },
      ],
    },
    {
      title: "Вегетативная система",
      subtitle: "Автономное управление внутренними органами",
      img: NEURON_IMG,
      items: [
        { label: "Типы нервов",         title: "Чувствительные / Двигательные / Смешанные", content: "Чувствительные — несут импульсы к мозгу (афференты). Двигательные — от мозга к мышцам (эфференты). Большинство периферических нервов — смешанные." },
        { label: "Симпатическая часть", title: "«Бей или беги»",                            content: "Центры в грудном и поясничном сегментах. Учащает ЧСС, расширяет зрачки, тормозит пищеварение, готовит к физической активности." },
        { label: "Парасимпатическая",   title: "«Отдых и переваривание»",                   content: "Центры в стволе мозга и крестцовом сегменте. Замедляет ЧСС, стимулирует пищеварение. Главный нерв — Блуждающий (X пара)." },
      ],
    },
    {
      title: "Нервы конечностей",
      subtitle: "Спинномозговые сплетения и их ветви",
      img: SPINAL_IMG,
      items: [
        { label: "Плечевое сплетение",   title: "Рука (C5–T1)",       content: "Лучевой нерв — разгибание. Локтевой — мизинец и безымянный палец. Срединный — мышцы кисти. Все три иннервируют кожу ладони." },
        { label: "Пояснично-крестцовое", title: "Нога (L1–S3)",       content: "Седалищный нерв — самый крупный нерв тела. Делится на большеберцовый (стопа) и малоберцовый (тыл стопы)." },
        { label: "Другие важные нервы",  title: "Бедренный, срамной", content: "Бедренный нерв — передняя поверхность бедра и квадрицепс. Срамной нерв — иннервация промежности и половых органов." },
      ],
    },
  ]

  return (
    <section className="slides-section" id="slides">
      <div className="slides-container">
        <div className="slides-header">
          <h2>Детальный <span className="highlight">разбор</span></h2>
          <p>Выберите раздел для подробного изучения</p>
        </div>
        <div className="slides-nav">
          {slides.map((s, i) => (
            <button key={i} className={`slide-nav-btn${activeSlide === i ? " active" : ""}`} onClick={() => setActiveSlide(i)}>
              {s.title}
            </button>
          ))}
        </div>
        {slides.map((slide, i) => (
          <div key={i} className={`slide-content${activeSlide === i ? " active" : ""}`}>
            <div className="slide-card">
              <div className="slide-card-header">
                <img src={slide.img} alt={slide.title} />
                <div>
                  <h3>{slide.title}</h3>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
              <div className="slide-grid">
                {slide.items.map((item, j) => (
                  <div key={j} className="slide-item">
                    <div className="slide-item-label">{item.label}</div>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ────── QUIZ ────── */
const QuizSection: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [answered, setAnswered] = useState(false)

  const q = quizData[current]
  const progress = (current / quizData.length) * 100

  const handleSelect = (idx: number) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === q.correct) setScore(s => s + 1)
  }

  const handleNext = () => {
    if (current + 1 >= quizData.length) {
      setDone(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
    setAnswered(false)
  }

  const getResultText = () => {
    const pct = score / quizData.length
    if (pct === 1)   return { title: "Идеально!",         desc: "Блестящий результат — вы отлично знаете нервную систему!" }
    if (pct >= 0.75) return { title: "Хороший результат", desc: "Основы усвоены хорошо. Повторите несколько тем для полного охвата." }
    if (pct >= 0.5)  return { title: "Неплохо",           desc: "Половина вопросов пройдена. Рекомендуем перечитать материал выше." }
    return                  { title: "Стоит повторить",   desc: "Изучите материал ещё раз и пройдите тест снова — всё получится!" }
  }

  return (
    <section className="quiz-section">
      <div className="quiz-inner">
        <div className="quiz-header">
          <h2 className="section-title" style={{ marginBottom: "10px" }}>Тест: <span>самопроверка</span></h2>
          <p style={{ color: "#aaa", fontFamily: "Inter, sans-serif", fontSize: "16px" }}>
            8 вопросов по всем темам нервной системы
          </p>
        </div>

        {!done ? (
          <>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="quiz-counter">Вопрос {current + 1} из {quizData.length}</div>
            <div className="quiz-question">{q.question}</div>
            <div className="quiz-options">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  className={`quiz-option${answered && i === q.correct ? " correct" : ""}${answered && selected === i && i !== q.correct ? " wrong" : ""}`}
                  onClick={() => handleSelect(i)}
                  disabled={answered}
                >
                  {opt}
                </button>
              ))}
            </div>
            {answered && (
              <div className="quiz-explanation">
                <strong>Пояснение:</strong> {q.explanation}
              </div>
            )}
            <button className="quiz-btn" onClick={handleNext} disabled={!answered}>
              {current + 1 >= quizData.length ? "Завершить тест" : "Следующий вопрос →"}
            </button>
          </>
        ) : (
          <div className="quiz-result">
            {(() => {
              const r = getResultText()
              return (
                <>
                  <div className="quiz-result-score">{score}/{quizData.length}</div>
                  <div className="quiz-result-title">{r.title}</div>
                  <p className="quiz-result-desc">{r.desc}</p>
                  <button className="quiz-btn" onClick={handleRestart}>Пройти снова</button>
                </>
              )
            })()}
          </div>
        )}
      </div>
    </section>
  )
}

export default PhotographyBanner
