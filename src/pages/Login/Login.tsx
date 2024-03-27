import { SideBar } from '@/components/Layout/components';
import { FormGroup, TextField } from '@mui/material';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Login() {
  let {state} = useLocation();
  axios.defaults.withCredentials = true;
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.post['Access-Control-Allow-Headers'] =
    'Origin, X-Requested-With, Content-Type, Accept, Authorization';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    if (username) {
      formData.append('login', username);
    }
    if (password) {
      formData.append('password', password);
    }

    await axios
      .post(
        'http://localhost:8080/auth/login',
        {
          login: username,
          password,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  return (
    /* {<Form onSubmit={(e) => login(e)}>
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>} */
    <>
      <FormGroup>
        <SideBar />
        <TextField id="outlined-basic" label="Username" variant="outlined" />
      </FormGroup>
    </>
  );
}