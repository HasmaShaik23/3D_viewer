import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "@google/model-viewer";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const viewerRef = useRef(null);

  useEffect(() => {
    const mobileCheck =
      /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );

    setIsMobile(mobileCheck);
  }, []);

  const deployedUrl =
    "https://3-d-viewer-phi.vercel.app/";

  const openAR = async () => {
    if (viewerRef.current) {
      await viewerRef.current.activateAR();
    }
  };

  return (
    <div className="app-container">

      {/* CENTER MODEL */}
      <div className="viewer-section">

      <model-viewer
  ref={viewerRef}

  src="/example.glb"
  ios-src="/example.glb"

  alt="3D Product"

  ar
  ar-modes="scene-viewer quick-look webxr"

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

  min-camera-orbit="auto auto 100%"
  max-camera-orbit="auto auto 100%"

  interpolation-decay="200"

  className="model-viewer"
>
</model-viewer>

      </div>

      {/* MOBILE BUTTON */}
      {isMobile && (
        <div className="mobile-button-wrapper">

          <button
            className="mobile-ar-button"
            onClick={openAR}
          >
            View in Room
          </button>

        </div>
      )}

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