import { api, queryCLient } from "@/config";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Balance } from "@/interfaces/BalanceType";

async function getAllBalances() {
  const { data } = await api.get<Balance[]>("files/balances");
  return data;
}

async function postBalance(formData: FormData) {
  const { data } = await api.post('/files/balance', formData);
  return data;
}

export function useGetAllBalances() {
  return useQuery({ queryKey: ["balances"], queryFn: getAllBalances });
}

export function usePostBalance() {
  return useMutation({
    mutationFn: (formData: FormData) => postBalance(formData),
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ['balances'] })
    }
  })

}
