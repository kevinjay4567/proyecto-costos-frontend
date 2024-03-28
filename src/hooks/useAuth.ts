import { api } from "@/config";
import { useQuery } from "@tanstack/react-query";

async function index() {
  const { data } = await api.get('/')
  return data
}

export function useIndex() {
  return useQuery({ queryKey: ['index'], queryFn: index})
}