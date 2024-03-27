import { FormEvent, useState } from 'react';
import './App.css';
import CargaExcel from './components/CargaExcel';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/auth/login', {
        login: username,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setIsAuthenticated(true);
          localStorage.setItem('token', response.data.token);
        }
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <>
      {isAuthenticated ? (
        <CargaExcel />
      ) : (
        <form onSubmit={handleSubmit} className="login-container">
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
          <Button variant="contained" type="submit">
            Ingresar
          </Button>
          <p>{message}</p>
        </form>
      )}
    </>
  );
}

export default App;
