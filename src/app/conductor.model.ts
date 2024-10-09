export interface Conductor {
    id: number;
    nombre: string;
    cedula: string;
    telefono: string;
    direccion: string;
    buses: Bus[];
  }
  
  export interface Bus {
    id: number;
    placa: string;
    modelo: string;
  }
  