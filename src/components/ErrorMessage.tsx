import { Alert } from '@mui/material';

interface Props {
  error?: string;
}

export function ErrorMessage({ error }: Props) {
  return <Alert severity="error">{error ? error : 'Error de servidor'}</Alert>;
}