// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     import("@google/model-viewer");
//   }, []);

//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <model-viewer
//         src="/example.glb"
//         alt="3D Model"
//         ar
//         ar-modes="webxr scene-viewer quick-look"
//         camera-controls
//         auto-rotate
//         shadow-intensity="1"
//         exposure="1"
//         environment-image="neutral"
//         style={{
//           width: "100%",
//           height: "100%",
//           backgroundColor:"#ffffff",
//         }}
//       >
//         <button
//           slot="ar-button"
//           style={{
//             background: "#2563eb",
//             color: "white",
//             border: "none",
//             padding: "12px 20px",
//             borderRadius: "10px",
//             position: "absolute",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             cursor: "pointer",
//           }}
//         >
//           View in AR
//         </button>
//       </model-viewer>
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    import("@google/model-viewer");

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

      {/* MODEL VIEWER */}
      <div className="viewer-section">

        <model-viewer
          src="/example.glb"
          alt="3D Product"

          /* AR */
          ar
          ar-modes="scene-viewer webxr quick-look"
          ar-scale="auto"
          ar-placement="floor"

          /* CONTROLS */
          camera-controls
          touch-action="pan-y"

          /* AUTO ROTATE */
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="20deg"

          /* LIGHTING */
          exposure="1.4"
          shadow-intensity="2"
          shadow-softness="1"

          environment-image="neutral"

          /* PERFORMANCE */
          loading="eager"
          reveal="auto"

          /* CAMERA */
          camera-orbit="0deg 75deg 105%"
          min-camera-orbit="auto auto 50%"
          max-camera-orbit="auto auto 200%"

          interaction-prompt="auto"

          className="model-viewer"
        >

          {/* MOBILE AR BUTTON */}
          <button
            slot="ar-button"
            className="ar-button"
          >
            View in Room
          </button>

        </model-viewer>

      </div>

      {/* DESKTOP QR ONLY */}
      {!isMobile && (
        <div className="qr-section">

          <div className="qr-box">

            <QRCodeCanvas
              value={deployedUrl}
              size={220}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />

            <p className="qr-text">
              Scan to View in AR
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;