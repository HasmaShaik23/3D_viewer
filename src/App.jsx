import { useEffect } from "react";

function App() {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <model-viewer
        src="/example.glb"
        alt="3D Model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="1"
        environment-image="neutral"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor:"#ffffff",
        }}
      >
        <button
          slot="ar-button"
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
        >
          View in AR
        </button>
      </model-viewer>
    </div>
  );
}

export default App;