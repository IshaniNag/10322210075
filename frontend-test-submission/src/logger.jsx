// src/utils/logger.jsx
import axios from "axios";

export const logEvent = async (eventType, data = {}) => {
  try {
    await axios.post("/api/log", {
      eventType,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Logging failed:", error);
  }
};
