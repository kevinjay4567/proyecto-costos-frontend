import { api } from "@/config";
import { useQuery } from "@tanstack/react-query";

async function getAllDatosPersonas() {
  const { data } = await api.get("files/datospersonas");
  return data;
}

export function useGetAllDatosPersonas() {
  return useQuery({
    queryKey: ["datospersonas"],
    queryFn: getAllDatosPersonas,
  });
}
