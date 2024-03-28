import { Alert } from '@mui/material';

interface Props {
  message: string;
}

export function OKMessage({ message }: Props) {
  return <Alert severity="success">{message}</Alert>;
}

