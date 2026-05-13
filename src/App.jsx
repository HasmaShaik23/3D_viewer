import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "@google/model-viewer";
import "./App.css";

function App() {

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {

    const mobileCheck =
      /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );

    setIsMobile(mobileCheck);

  }, []);

  const deployedUrl =
    "https://3-d-viewer-phi.vercel.app/";

  return (
    <div className="app-container">

      {/* VIEWER */}
      <div className="viewer-section">

        <model-viewer
          src="/example.glb"
          ios-src="/example.glb"

          alt="3D Product"

          ar
          ar-modes="
            scene-viewer
            quick-look
            webxr
          "

          ar-placement="floor"

          ar-scale="fixed"

          camera-controls

          shadow-intensity="2"
          shadow-softness="1"

          exposure="1"

          environment-image="neutral"

          interaction-prompt="none"

          loading="eager"

          reveal="auto"

          touch-action="pan-y"

          field-of-view="30deg"

          interpolation-decay="200"

          className="model-viewer"
        >

          {/* NATIVE AR BUTTON */}
          {isMobile && (
            <button
              slot="ar-button"
              className="mobile-ar-button"
            >
              View in Room
            </button>
          )}

        </model-viewer>

      </div>

      {/* DESKTOP QR */}
      {!isMobile && (

        <div className="qr-section">

          <div className="qr-box">

            <h2 className="qr-title">
              View in AR
            </h2>

            <div className="qr-wrapper">

              <QRCodeCanvas
                value={deployedUrl}
                size={140}
                bgColor="#ffffff"
                fgColor="#000000"
              />

            </div>

            <p className="qr-text">
              Scan with your phone
            </p>

            <p className="qr-subtext">
              to view this model in AR
            </p>

            <div className="device-text">
              📱 Works on iOS & Android
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;