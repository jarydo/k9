"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function FureverAI() {
  const [currentStep, setCurrentStep] = useState<
    "upload" | "processing" | "results"
  >("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<
    "thumbs_up" | "thumbs_down" | null
  >(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [processingMessage, setProcessingMessage] = useState("");
  const [currentMetrics, setCurrentMetrics] = useState<any>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processingMessages = [
    "AI machine is AI-ing...",
    "We don't really know what this does but I guess it works...",
    "Running advanced algorithms (probably)...",
    "The AI is doing AI things...",
    "Computing something important (we think)...",
    "Analyzing with our state-of-the-art machine learning...",
    "Running complex neural networks (trust us)...",
    "Processing with our revolutionary AI platform...",
    "Finalizing AI analysis (it's very smart)...",
  ];

  const handleImageUpload = (file: File) => {
    console.log("File received:", file.name, file.type, file.size);

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("FileReader loaded successfully");
        setUploadedImage(e.target?.result as string);
        setCurrentStep("processing");
        startFakeProcessing();
      };
      reader.onerror = (e) => {
        console.error("FileReader error:", e);
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type:", file?.type);
    }
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File input changed");
    const file = event.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    } else {
      console.log("No file selected");
    }
    // Reset the input value to allow selecting the same file again
    event.target.value = "";
  };

  const handleMobileUpload = () => {
    console.log("Mobile upload triggered");
    // For mobile devices, trigger the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const startFakeProcessing = () => {
    // Generate random recommendation
    const result = Math.random() > 0.5 ? "thumbs_up" : "thumbs_down";
    setRecommendation(result);

    // Start rotating processing messages
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setProcessingMessage(processingMessages[messageIndex]);
      messageIndex = (messageIndex + 1) % processingMessages.length;
    }, 1500);

    // Generate fake metrics that change over time
    const metricsInterval = setInterval(() => {
      setCurrentMetrics({
        tailWagCoefficient: (Math.random() * 0.64 + 0.23).toFixed(3),
        ocularBrightness: Math.floor(Math.random() * 57 + 34),
        lifeForceResonance: Math.random() > 0.5 ? "Optimal" : "Sub-optimal",
        furDensity: Math.floor(Math.random() * 40 + 60),
        happinessIndex: Math.floor(Math.random() * 30 + 70),
        treatCompatibility: Math.floor(Math.random() * 25 + 75),
      });
    }, 2000);

    // Show processing for 12-15 seconds
    setTimeout(() => {
      clearInterval(messageInterval);
      clearInterval(metricsInterval);
      setCurrentStep("results");
    }, 13000);
  };

  const resetAnalysis = () => {
    setCurrentStep("upload");
    setUploadedImage(null);
    setRecommendation(null);
  };

  return (
    <div className="furever-ai">
      <header className="ai-header">
        <div className="header-content">
          <h1>Furever AI</h1>
          <p className="tagline">Advanced Pet Wellness Analysis Platform</p>
        </div>
      </header>

      <main className="ai-main">
        {currentStep === "upload" && (
          <div className="upload-section">
            <div className="upload-card">
              <h2>Upload Your Pet's Photo</h2>
              <p className="upload-description">
                Our advanced AI technology will analyze your pet's health
                indicators using state-of-the-art machine learning algorithms
                trained on millions of veterinary data points.
              </p>

              <div
                className={`upload-area ${isDragOver ? "drag-over" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleMobileUpload}
                style={{ cursor: "pointer" }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,image/heic,image/heif"
                  onChange={handleFileInput}
                  id="photo-upload"
                  className="file-input"
                  style={{ display: "none" }}
                />
                <div className="upload-label">
                  <div className="upload-icon">📸</div>
                  <p>Tap to upload from gallery or camera</p>
                  <p className="upload-formats">JPG, PNG, HEIC supported</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "processing" && (
          <div className="processing-section">
            <div className="processing-card">
              <h2>Analyzing Your Beloved Companion...</h2>
              <div className="ai-status">
                <div className="status-indicator">
                  <div className="pulse-dot"></div>
                  <span>AI PROCESSING</span>
                </div>
              </div>

              <div className="processing-message">
                {processingMessage || "AI machine is AI-ing..."}
              </div>

              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <div className="progress-text">
                  The AI is doing AI things...
                </div>
              </div>

              <div className="metrics-dashboard">
                <div className="metrics-grid">
                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Tail Wag Coefficient</span>
                      <span className="metric-value">
                        {currentMetrics.tailWagCoefficient || "0.000"}
                      </span>
                    </div>
                    <div className="metric-chart">
                      <div className="wavy-line"></div>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-title">
                        Ocular Brightness Index
                      </span>
                      <span className="metric-value">
                        {currentMetrics.ocularBrightness || "0"}%
                      </span>
                    </div>
                    <div className="metric-chart">
                      <div className="circular-progress">
                        <div
                          className="progress-ring"
                          style={
                            {
                              "--progress": `${
                                currentMetrics.ocularBrightness || 0
                              }%`,
                            } as React.CSSProperties
                          }
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Life Force Resonance</span>
                      <span className="metric-value">
                        {currentMetrics.lifeForceResonance || "Calculating..."}
                      </span>
                    </div>
                    <div className="metric-chart">
                      <div className="sine-wave"></div>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Fur Density Mapping</span>
                      <span className="metric-value">
                        {currentMetrics.furDensity || "0"}%
                      </span>
                    </div>
                    <div className="metric-chart">
                      <div className="heat-map">
                        <div
                          className="heat-dot"
                          style={{ "--delay": "0s" } as React.CSSProperties}
                        ></div>
                        <div
                          className="heat-dot"
                          style={{ "--delay": "0.2s" } as React.CSSProperties}
                        ></div>
                        <div
                          className="heat-dot"
                          style={{ "--delay": "0.4s" } as React.CSSProperties}
                        ></div>
                        <div
                          className="heat-dot"
                          style={{ "--delay": "0.6s" } as React.CSSProperties}
                        ></div>
                        <div
                          className="heat-dot"
                          style={{ "--delay": "0.8s" } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Happiness Index</span>
                      <span className="metric-value">
                        {currentMetrics.happinessIndex || "0"}%
                      </span>
                    </div>
                    <div className="metric-chart">
                      <div className="bar-chart">
                        <div
                          className="bar"
                          style={
                            {
                              "--height": `${
                                currentMetrics.happinessIndex || 0
                              }%`,
                            } as React.CSSProperties
                          }
                        ></div>
                        <div
                          className="bar"
                          style={
                            {
                              "--height": `${
                                (currentMetrics.happinessIndex || 0) * 0.8
                              }%`,
                            } as React.CSSProperties
                          }
                        ></div>
                        <div
                          className="bar"
                          style={
                            {
                              "--height": `${
                                (currentMetrics.happinessIndex || 0) * 0.6
                              }%`,
                            } as React.CSSProperties
                          }
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-title">Treat Compatibility</span>
                      <span className="metric-value">
                        {currentMetrics.treatCompatibility || "0"}%
                      </span>
                    </div>
                    <div className="metric-chart">
                      <div className="scatter-plot">
                        <div
                          className="scatter-dot"
                          style={
                            {
                              "--x": "20%",
                              "--y": "30%",
                            } as React.CSSProperties
                          }
                        ></div>
                        <div
                          className="scatter-dot"
                          style={
                            {
                              "--x": "60%",
                              "--y": "70%",
                            } as React.CSSProperties
                          }
                        ></div>
                        <div
                          className="scatter-dot"
                          style={
                            {
                              "--x": "80%",
                              "--y": "50%",
                            } as React.CSSProperties
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="clinical-metrics">
                  <div className="clinical-metric">
                    <span className="metric-label">
                      AI Confidence (we think):
                    </span>
                    <span className="metric-value">99.7%</span>
                  </div>
                  <div className="clinical-metric">
                    <span className="metric-label">
                      Processing Speed (probably):
                    </span>
                    <span className="metric-value">2.3s</span>
                  </div>
                  <div className="clinical-metric">
                    <span className="metric-label">
                      Data Points Analyzed (trust us):
                    </span>
                    <span className="metric-value">1,247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === "results" && (
          <div className="results-section">
            <div className="results-card">
              <h2>AI Analysis Complete</h2>

              {uploadedImage && (
                <div className="uploaded-image-container">
                  <img
                    src={uploadedImage}
                    alt="Uploaded pet photo"
                    className="uploaded-image"
                  />
                  <p className="image-caption">You</p>
                </div>
              )}

              {recommendation === "thumbs_up" ? (
                <div className="result-positive">
                  <div className="result-icon">✅</div>
                  <h3>Your furry friend has many happy years ahead!</h3>
                  <div className="confidence-score">
                    <span className="confidence-label">
                      AI Confidence Score:
                    </span>
                    <span className="confidence-value">94.7%</span>
                  </div>
                  <div className="final-metrics">
                    <div className="final-metric">
                      <span>Tail Wag Coefficient:</span>
                      <span>0.847</span>
                    </div>
                    <div className="final-metric">
                      <span>Life Force Resonance:</span>
                      <span>Optimal</span>
                    </div>
                    <div className="final-metric">
                      <span>Happiness Index:</span>
                      <span>87%</span>
                    </div>
                  </div>
                  <p className="recommendation">
                    Recommended action: Extra treats and belly rubs
                  </p>
                </div>
              ) : (
                <div className="result-negative">
                  <div className="result-icon">❌</div>
                  <h3>Our advanced AI suggests it may be time...</h3>
                  <div className="confidence-score">
                    <span className="confidence-label">
                      AI Confidence Score:
                    </span>
                    <span className="confidence-value">96.2%</span>
                  </div>
                  <div className="final-metrics">
                    <div className="final-metric">
                      <span>Tail Wag Coefficient:</span>
                      <span>0.234</span>
                    </div>
                    <div className="final-metric">
                      <span>Life Force Resonance:</span>
                      <span>Sub-optimal</span>
                    </div>
                    <div className="final-metric">
                      <span>Happiness Index:</span>
                      <span>23%</span>
                    </div>
                  </div>
                  <p className="recommendation">
                    Recommended action: Consult with veterinary professionals
                  </p>
                </div>
              )}

              <div className="disclaimer-section">
                <p className="disclaimer-text">
                  <strong>Important:</strong> This AI analysis is for
                  entertainment purposes only. Our "AI" uses random chance, not
                  actual machine learning. Please consult real veterinary
                  professionals for pet health decisions.
                </p>
              </div>

              <button onClick={resetAnalysis} className="analyze-another">
                Analyze Another Pet
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="ai-footer">
        <p className="disclaimer">
          Furever AI is a medical technology platform. All analyses are
          preliminary and should be followed by consultation with licensed
          veterinary professionals. FDA approved for diagnostic assistance.
        </p>
      </footer>
    </div>
  );
}
