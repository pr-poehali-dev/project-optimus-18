const Footer = () => {
  return (
    <>
      <style>{`
        .ns-footer {
          background-color: #073642;
          position: relative;
          overflow: hidden;
          font-family: "Montserrat", sans-serif;
        }

        .ns-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: -25%;
          z-index: 0;
        }

        .ns-footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 30px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 30px;
        }

        .ns-footer-title {
          color: #fff;
          font-weight: 700;
          font-size: 28px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .ns-footer-title span {
          color: #d33682;
        }

        .ns-footer-desc {
          color: #aaa;
          font-size: 14px;
          line-height: 1.8;
          max-width: 500px;
        }

        .ns-footer-bottom {
          border-top: 1px solid #1e3a42;
          padding-top: 24px;
          color: #555;
          font-size: 13px;
          width: 100%;
          text-align: center;
        }
      `}</style>
      <footer className="ns-footer">
        <div className="ns-footer-inner">
          <div className="ns-footer-title">Нервная <span>система</span></div>
          <p className="ns-footer-desc">
            Анатомия и физиология нервной системы человека. Строение нейрона, отделы мозга, периферические нервы и вегетативная регуляция.
          </p>
          <div className="ns-footer-bottom">
            Учебный материал по анатомии нервной системы
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
