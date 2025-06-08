export interface Pet {
  id: number;
  nome: string;
  idade: number;
  fotoBase64: string;
  dataCadastro: Date;
}

export interface PetDetail {
  id: number;
  nome: string;
  genero: string;
  qualidades: string;
  historia: string;
  cor: string;
  raca: string;
  idade: number;
  fotoBase64: string;
  dataCadastro: Date;
}
