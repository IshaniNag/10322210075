// src/components/StatsPage.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { logEvent } from "../utils/logger";
import axios from "axios";

const StatsPage = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/stats");
        setStats(response.data);
        logEvent("STATS_VIEWED");
      } catch (err) {
        setError("Failed to load statistics");
        logEvent("STATS_ERROR", { error: err.message });
      }
    };

    fetchStats();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>

      {error && (
        <Typography color="error" variant="body1">
          {error}
        </Typography>
      )}

      {stats ? (
        <Box>
          {stats.map((item, index) => (
            <Box key={index} sx={{ mt: 2, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
              <Typography variant="h6">Short URL: {item.shortUrl}</Typography>
              <Typography variant="body1">Original URL: {item.originalUrl}</Typography>
              <Typography variant="body2">Clicks: {item.clicks}</Typography>
            </Box>
          ))}
        </Box>
      ) : !error ? (
        <Typography variant="body1">Loading...</Typography>
      ) : null}
    </Box>
  );
};

export default StatsPage;
