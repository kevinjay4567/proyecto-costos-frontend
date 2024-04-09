import { ErrorMessage, OKMessage } from "@/components";
import { UseMutationResult } from "@tanstack/react-query";

interface Props {
  mutation: UseMutationResult<any, Error, FormData>
}

export function CargaMessage({ mutation }: Props) {
  return (
    <>{
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

