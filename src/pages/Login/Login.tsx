import { Button, Container, FormGroup, TextField } from '@mui/material';
import { useState } from 'react';
import { Dashboard } from '@/pages/Home';
import { useIndex } from '@/hooks';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState();

  const { data } = useIndex();

  const handleSubmit = () => {
    setIsAuthenticated(data);
    console.log(data);
  };
  return (
    <>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100dvh',
            justifyContent: 'center',
          }}
        >
          <FormGroup
            onSubmit={(e) => e.preventDefault}
            sx={{ gap: 3, width: '60%' }}
          >
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              Ingresar
            </Button>
          </FormGroup>
        </Container>
      )}
    </>
  );
}
