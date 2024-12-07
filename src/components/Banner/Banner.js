import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner({ children, className = "", id = "default", dismissable = true }) {
  const [isVisible, setIsVisible] = useState(true);
  const storageKey = `banner-${id}-dismissed`;

  useEffect(() => {
    const isDismissed = localStorage.getItem(storageKey) === "true";
    setIsVisible(!isDismissed);
  }, [storageKey]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(storageKey, "true");
  };

  if (!isVisible) return null;

  return (
    <div className={`custom-banner ${className}`}>
      <div className="custom-banner-content">{children}</div>
      <button
        className="custom-banner-dismiss"
        onClick={handleDismiss}
        aria-label="Dismiss banner"
        style={{
          display: dismissable ? "block" : "none",
        }}
      >
        ×
      </button>
    </div>
  );
}

export default Banner;
