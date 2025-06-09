import React, { useState, useRef } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { PetField } from "./PetField";

type Message = {
  id: number;
  type: "text" | "image" | "video";
  content: string;
};

export const SimpleChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { id: Date.now(), type: "text", content: input.trim() },
    ]);
    setInput("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    let type: Message["type"] = "text";

    if (file.type.startsWith("image/")) type = "image";
    else if (file.type.startsWith("video/")) type = "video";

    setMessages((msgs) => [...msgs, { id: Date.now(), type, content: url }]);

    e.target.value = "";
  };

  return (
    <Box
      sx={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        border: "1px solid #ccc",
        borderRadius: 2,
        maxWidth: "1200px",
        p: 2,
        backgroundColor: "#146a3d",
      }}
    >
      <Typography
        variant="h4"
        mb={2}
        textAlign="center"
        color="primary.contrastText"
        sx={{ fontWeight: "bold" }}
      >
        Pós - Adoção
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          mb: 2,
          border: "1px solid #eee",
          borderRadius: 1,
          bgcolor: "#fafafa",
          mt: 0,
        }}
      >
        {messages.length === 0 && (
          <Typography color="text.secondary" textAlign="center">
            Nenhuma mensagem ainda
          </Typography>
        )}

        {messages.map(({ id, type, content }) => (
          <Box
            key={id}
            sx={{
              mb: 1,
              maxWidth: "80%",
              wordBreak: "break-word",
              bgcolor: "#e0f7fa",
              p: 1,
              borderRadius: 1,
            }}
          >
            {type === "text" && <Typography>{content}</Typography>}
            {type === "image" && (
              <img
                src={content}
                alt="enviada"
                style={{ maxWidth: "100%", borderRadius: 4 }}
              />
            )}
            {type === "video" && (
              <video
                src={content}
                controls
                style={{ maxWidth: "100%", borderRadius: 4 }}
              />
            )}
          </Box>
        ))}
      </Box>

      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PetField
          variant="outlined"
          fullWidth
          placeholder="Digite sua mensagem"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{
            marginTop: 0,
          }}
        />

        <input
          type="file"
          accept="image/*,video/*"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileChange}
        />

        <IconButton
          color="primary"
          onClick={() => fileInputRef.current?.click()}
          aria-label="anexar foto ou vídeo"
        >
          <PhotoCamera />
        </IconButton>

        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Box>
    </Box>
  );
};
