// src/components/ShortenForm.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { logEvent } from "../utils/logger";
import axios from "axios";

const ShortenForm = () => {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!url) {
      setError("URL is required.");
      return;
    }

    try {
      const response = await axios.post("/api/shorten", {
        url,
        shortcode,
      });

      setShortUrl(response.data.shortUrl);
      logEvent("SHORTEN_SUCCESS", { url, shortcode });

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to shorten URL");
      logEvent("SHORTEN_ERROR", { url, shortcode, error: err.message });
    }
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" gutterBottom>
          URL Shortener
        </Typography>
        <TextField
          label="Enter URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          label="Custom Shortcode (Optional)"
          variant="outlined"
          fullWidth
          margin="normal"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Shorten
        </Button>

        {shortUrl && (
          <Box mt={2}>
            <Typography variant="subtitle1">Short URL:</Typography>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </Box>
        )}
      </Paper>
    </Grid>
  );
};

export default ShortenForm;
