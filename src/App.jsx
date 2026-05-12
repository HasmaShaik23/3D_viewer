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

      {/* MODEL AREA */}
      <div className="viewer-section">

        <model-viewer
          src="/example.glb"
          ios-src="/example.glb"

          alt="3D Product"

          ar
          ar-modes="scene-viewer quick-look webxr"

          ar-placement="floor"

          camera-controls

          auto-rotate
          auto-rotate-delay="0"

          shadow-intensity="2"
          shadow-softness="1"

          exposure="1.2"

          environment-image="neutral"

          interaction-prompt="auto"

          loading="eager"

          reveal="auto"

          camera-orbit="0deg 75deg 2.5m"

          min-camera-orbit="auto auto 1m"
          max-camera-orbit="auto auto 5m"

          field-of-view="30deg"

          className="model-viewer"
        >

          <button
            slot="ar-button"
            className="ar-button"
          >
            View in Room
          </button>

        </model-viewer>

      </div>

      {/* QR SECTION */}
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
