import { Alert } from "@mui/material";

interface Props {
  error?: string;
  index: number;
}
function ErrorMessage({ error, index } : Props) {
  return (
    <Alert severity="error" key={index}>
      {error ? error : "Error de servidor"}
    </Alert>
  );
}

export default ErrorMessage;
