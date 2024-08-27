import { Box, Container, TextField, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "0.5rem",
      }}>
        <Typography variant="h5">Login</Typography>
        <Box component="form" sx={{ marginTop: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            name="user"
            id="user"
            label="Usuário"
            autoFocus
            required
            value={setName}
            // onChange={}
          />
          <TextField
            margin="normal"
            fullWidth
            type="password"
            name="password"
            id="password"
            label="Senha"
            autoFocus
            required
            // value={}
            // onChange={}
          />
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, marginBottom: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
