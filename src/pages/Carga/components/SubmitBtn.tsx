import { ErrorMessage, OKMessage } from "@/components";
import { Button } from "@mui/material";
import { UseMutationResult } from "@tanstack/react-query";

interface Props {
  usePost: UseMutationResult<any, Error, FormData>;
  formData: FormData;
}

export function SubmitBtn({ usePost, formData }: Props) {

  const mutation = usePost;

  const handleSubmit = () => {
    mutation.mutate(formData);
  }

  return (
    <>
      <Button variant="contained" onClick={handleSubmit}>
        Carga
      </Button>
      {
        mutation.isError ? (
          <ErrorMessage error={mutation.error.message} />
        ) : null
      }
      {
        mutation.isSuccess ? (
          <OKMessage message={mutation.data.message} />
        ) : null
      }
    </>
  )
}
