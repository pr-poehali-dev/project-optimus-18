import type React from "react"
import { useState, useEffect } from "react"

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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Inter:wght@400&display=swap');

        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }

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

        .photography-banner *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 12vw, 160px);
          line-height: 0.75;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #d33682;
          display: block;
          height: clamp(100px, 15vw, 120px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 20px 0 0;
          color: #fff;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 2;
          font-family: "Montserrat";
          opacity: 0.8;
        }

        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 56px;
          line-height: 1;
          color: #f1f1f1;
          letter-spacing: 0.25px;
          text-transform: uppercase;
          font-family: "Montserrat";
          font-weight: 300;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 28px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #d33682;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link .arrow span {
          background-color: #d33682;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #d33682;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(211, 54, 130, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(203, 75, 22, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        .bg-line {
          display: flex;
          height: 88px;
          position: relative;
          overflow: hidden;
          z-index: 1;
          margin-bottom: 20px;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
        }

        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }

          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }

          .bg-line {
            height: 52px;
          }

          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }

          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }

          .left-part h1 .text {
            height: 88px;
          }

          .left-part p {
            font-size: 12px;
            width: 96%;
          }

          .bg-dash-circle {
            width: 80px;
          }
        }

        .features-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 8vw, 120px);
          line-height: 0.9;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .features-content h2 .highlight {
          color: #d33682;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: #d33682;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: #002b36;
          flex-shrink: 0;
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Montserrat";
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .feature-text p {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          margin: 0;
          line-height: 1.6;
        }

        /* Slides section */
        .slides-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .slides-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(160px);
          height: 50%;
          width: 40%;
          position: absolute;
          top: 10%;
          left: -20%;
          z-index: 0;
        }

        .slides-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .slides-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .slides-header h2 {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(40px, 6vw, 80px);
          line-height: 0.9;
          margin: 0 0 20px;
          text-transform: uppercase;
        }

        .slides-header h2 .highlight {
          color: #d33682;
        }

        .slides-header p {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .slides-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .slide-nav-btn {
          padding: 10px 20px;
          background: rgba(255,255,255,0.05);
          border: 1px solid #333;
          border-radius: 30px;
          color: #aaa;
          font-family: "Montserrat";
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .slide-nav-btn:hover,
        .slide-nav-btn.active {
          background: #d33682;
          border-color: #d33682;
          color: #002b36;
          font-weight: bold;
        }

        .slide-content {
          display: none;
          animation: fadeIn 0.4s ease;
        }

        .slide-content.active {
          display: block;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid #1e3a42;
          border-radius: 24px;
          padding: 50px;
          backdrop-filter: blur(10px);
        }

        .slide-card h3 {
          color: #d33682;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(22px, 3vw, 32px);
          text-transform: uppercase;
          margin: 0 0 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #1e3a42;
        }

        .slide-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .slide-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid #1e3a42;
          border-radius: 16px;
          padding: 30px;
          transition: border-color 0.3s ease;
        }

        .slide-item:hover {
          border-color: #d33682;
        }

        .slide-item-label {
          color: #d33682;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .slide-item h4 {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          margin: 0 0 12px;
        }

        .slide-item p {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        .slide-item ul {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
          padding-left: 18px;
        }

        .slide-item ul li {
          margin-bottom: 6px;
        }

        .slide-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #d33682;
          border-radius: 50%;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #002b36;
          margin-bottom: 16px;
        }

        .conclusion-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .conclusion-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid #1e3a42;
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.3s ease;
        }

        .conclusion-item:hover {
          border-color: #d33682;
        }

        .conclusion-num {
          color: #d33682;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 40px;
          line-height: 1;
          margin-bottom: 12px;
        }

        .conclusion-item h4 {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 10px;
        }

        .conclusion-item p {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        .testimonials-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(40px, 6vw, 80px);
          line-height: 0.9;
          margin: 0 0 60px;
          text-transform: uppercase;
        }

        .nerves-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          text-align: left;
        }

        .nerve-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid #1e3a42;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .nerve-card:hover {
          border-color: #d33682;
          transform: translateY(-4px);
        }

        .nerve-number {
          color: #d33682;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 28px;
          margin-bottom: 8px;
        }

        .nerve-name {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .nerve-desc {
          color: #aaa;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.6;
        }

        .cta-section {
          padding: 120px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.6;
          background: #d33682;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          color: #fff;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: clamp(60px, 10vw, 140px);
          line-height: 0.8;
          margin: 0 0 30px;
          text-transform: uppercase;
        }

        .cta-subtitle {
          color: #d33682;
          font-family: "Montserrat";
          font-size: 22px;
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: #d33682;
          color: #002b36;
          text-decoration: none;
          font-family: "Montserrat";
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid #d33682;
        }

        .cta-button:hover {
          background: transparent;
          color: #d33682;
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }

        .cta-button.secondary:hover {
          background: transparent;
          color: #d33682;
          border: 2px solid #d33682;
        }

        @media screen and (max-width: 1199px) {
          .features-section,
          .slides-section,
          .testimonials-section,
          .cta-section {
            padding: 80px 20px;
          }
          .features-container {
            gap: 40px;
          }
          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section,
          .slides-section,
          .testimonials-section,
          .cta-section {
            padding: 60px 16px;
          }
          .features-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .slide-card {
            padding: 30px 20px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="photography-banner">
        <main>
          {/* HERO */}
          <section className="info-section">
            <div className="left-part">
              <h1>
                <span className="d-flex">
                  {["Н", "Е", "Р", "В", "Н", "А", "Я"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText}</span>
              </h1>
              <p className="tracking-widest">
                Строение, функции и отделы нервной системы человека — от нейрона до коры полушарий
              </p>
              <a href="#slides" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Смотреть</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 15}s`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
            </div>
          </section>

          {/* СТРУКТУРА */}
          <section className="features-section">
            <div className="features-container">
              <div className="features-content">
                <h2>Общая <span className="highlight">структура</span></h2>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon">01</div>
                  <div className="feature-text">
                    <h3>Нейрон — основа</h3>
                    <p className="font-light tracking-wider">
                      Тело нейрона → серое вещество. Отростки → белое вещество. Нейроны связаны между собой, образуя единую сеть.
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">02</div>
                  <div className="feature-text">
                    <h3>ЦНС и периферия</h3>
                    <p className="tracking-wider">
                      Центральная: головной и спинной мозг. Периферическая: нервы — отростки нейронов, выходящие за пределы ЦНС.
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">03</div>
                  <div className="feature-text">
                    <h3>Спинной мозг</h3>
                    <p className="tracking-wider">
                      Расположен в позвоночном канале. В центре — «бабочка» из серого вещества (рога), по краям — белое. Три оболочки: твёрдая → паутинная → мягкая (между ними ликвор).
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* СЛАЙДЫ */}
          <SlidesSection />

          {/* ЧЕРЕПНЫЕ НЕРВЫ */}
          <section className="testimonials-section">
            <div className="testimonials-container">
              <h2 className="testimonials-title">12 пар черепных <span style={{color:'#d33682'}}>нервов</span></h2>
              <div className="nerves-grid">
                {[
                  { num: "I", name: "Обонятельный", desc: "Восприятие запахов. Идёт от носовой полости." },
                  { num: "II", name: "Зрительный", desc: "Передаёт зрительные сигналы от сетчатки глаза." },
                  { num: "V", name: "Тройничный", desc: "Смешанный нерв. Чувствительность лица, движение челюсти." },
                  { num: "VII", name: "Лицевой", desc: "Мимическая мускулатура, слюнные железы." },
                  { num: "VIII", name: "Слуховой", desc: "Слух и равновесие (вестибулярная функция)." },
                  { num: "X", name: "Блуждающий", desc: "Главный парасимпатический нерв. Сердце, лёгкие, кишечник." },
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

          {/* ИТОГ */}
          <section className="cta-section" id="cta">
            <div className="cta-container">
              <h2 className="cta-title text-center">Итог</h2>
              <p className="cta-subtitle" style={{textAlign:'center'}}>
                Нервная система — единое целое, управляющее всем организмом
              </p>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'20px', textAlign:'left'}}>
                {[
                  { n: "1", title: "Связь со средой", text: "Чувствительные нервы принимают сигналы, двигательные — отдают команды мышцам." },
                  { n: "2", title: "Регуляция организма", text: "Управляет мышцами сознательно и внутренними органами вегетативно." },
                  { n: "3", title: "Высший центр — кора", text: "Анализ информации и формирование поведения происходит в коре полушарий." },
                  { n: "4", title: "Целостность", text: "Деление на центральную и периферическую нервную систему условно — это единое целое." },
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

const SlidesSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "Головной мозг: отделы",
      items: [
        {
          label: "Ромбовидный мозг",
          title: "Продолговатый + Мозжечок",
          content: "Продолговатый мозг — жизненно важные рефлексы. Мозжечок — координация движений и равновесие.",
        },
        {
          label: "Средний мозг",
          title: "Четверохолмие",
          content: "Содержит центры зрения и слуха. Проходит мозговой водопровод — канал спинномозговой жидкости.",
        },
        {
          label: "Промежуточный мозг",
          title: "Таламус + Гипоталамус + Гипофиз",
          content: "Таламус — центр чувствительности. Гипоталамус — вегетатика и гормоны. Гипофиз — главная эндокринная железа.",
        },
        {
          label: "Конечный мозг",
          title: "Два полушария",
          content: "Покрыты корой из серого вещества снаружи. Внутри — белое вещество и подкорковые ядра. Здесь — мышление и поведение.",
        },
      ],
    },
    {
      title: "Нервы и вегетативная система",
      items: [
        {
          label: "Типы нервов",
          title: "Чувствительные, двигательные, смешанные",
          content: "Чувствительные несут сигналы к мозгу. Двигательные — команды к мышцам. Смешанные выполняют оба действия.",
        },
        {
          label: "Симпатическая часть",
          title: "«Бей или беги»",
          content: "Центры в груди и пояснице. Учащает сердечный ритм, суживает сосуды, активирует реакцию на стресс.",
        },
        {
          label: "Парасимпатическая часть",
          title: "«Отдых и переваривание»",
          content: "Центры в мозге и крестце. Главный нерв — Блуждающий (X пара). Регулирует пищеварение и состояние покоя.",
        },
      ],
    },
    {
      title: "Спинномозговые нервы",
      items: [
        {
          label: "Плечевое сплетение",
          title: "Рука",
          content: "Лучевой, локтевой, срединный нервы — обеспечивают движение и чувствительность всей руки.",
        },
        {
          label: "Пояснично-крестцовое сплетение",
          title: "Нога",
          content: "Седалищный нерв — самый крупный в теле. Делится на большеберцовый и малоберцовый.",
        },
        {
          label: "Другие важные нервы",
          title: "Бедренный и срамной",
          content: "Бедренный нерв — передняя поверхность бедра. Срамной нерв — иннервация половых органов и промежности.",
        },
      ],
    },
  ]

  return (
    <section className="slides-section" id="slides">
      <div className="slides-container">
        <div className="slides-header">
          <h2>Детальный <span className="highlight">разбор</span></h2>
          <p>Выберите раздел, чтобы изучить подробнее</p>
        </div>
        <div className="slides-nav">
          {slides.map((slide, i) => (
            <button
              key={i}
              className={`slide-nav-btn${activeSlide === i ? " active" : ""}`}
              onClick={() => setActiveSlide(i)}
            >
              {slide.title}
            </button>
          ))}
        </div>
        {slides.map((slide, i) => (
          <div key={i} className={`slide-content${activeSlide === i ? " active" : ""}`}>
            <div className="slide-card">
              <h3>{slide.title}</h3>
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

export default PhotographyBanner
