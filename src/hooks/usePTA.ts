import { useMutation, useQuery } from '@tanstack/react-query';
import { api, queryCLient } from '@/config'

async function getAllPTAs() {
  const { data } = await api.get('/files/ptas');
  return data;
}

async function postPTA(formData: FormData) {
  const { data } = await api.post('/files/pta', formData)
  console.log(data)
  return data;
}

export function useGetAllPTAs() {
  return useQuery({ queryKey: ['pta'], queryFn: getAllPTAs });
}

export function usePostPTA() {
  return useMutation({
    mutationFn: (formData: FormData) => postPTA(formData),
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ['pta'] })
    }
  })
}
