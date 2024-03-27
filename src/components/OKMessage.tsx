import { Alert } from '@mui/material';

interface Props {
  message: string;
}

function OKMessage({ message }: Props) {
  return <Alert severity="success">{message}</Alert>;
}

export default OKMessage;
