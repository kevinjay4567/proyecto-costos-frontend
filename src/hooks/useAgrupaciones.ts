import { useMutation, useQuery } from '@tanstack/react-query';
import { api, queryCLient } from '@/config'
import { Agrupaciones } from '@/interfaces/AgrupacionesType';

async function getAllAgrupaciones() {
  const { data } = await api.get<Agrupaciones[]>('/files/balance');
  return data;
}

async function postAgrupaciones(formData: FormData) {
  const { data } = await api.post('/files/balance', formData)
  console.log(data)
  return data;
}

export function useGetAllAgrupaciones() {
  return useQuery({ queryKey: ['agrupaciones'], queryFn: getAllAgrupaciones });
}

export function usePostAgrupaciones() {
  return useMutation({
    mutationFn: (formData : FormData) => postAgrupaciones(formData),
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ['agrupaciones'] })
    }
  })
}