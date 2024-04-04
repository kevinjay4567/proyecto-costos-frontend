export type Balance = {
  id: number,
  anho: number,
  valor: number,
  concepto: {
    id: number,
    nombre: string
  },
  subcuenta: {
    id: number,
    descripcion: string,
    agrupacion: {
      id: number,
      nombre: string
    }
  },
  sede: {
    id: number,
    nombre: string
  },
  empresa: {
    id: number,
    nombre: string
  }
}