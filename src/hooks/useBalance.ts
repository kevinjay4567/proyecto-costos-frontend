import { api } from "@/config";
import { useQuery } from "@tanstack/react-query";
import { Balance } from "@/interfaces/BalanceType";

async function getAllBalances() {
  const { data } = await api.get<Balance[]>("files/balances");
  return data;
}

export function useGetAllBalances() {
  return useQuery({ queryKey: ["balances"], queryFn: getAllBalances });
}
