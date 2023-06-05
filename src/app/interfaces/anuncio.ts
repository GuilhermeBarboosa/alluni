import { Defaultdto } from './defaultdto';
export interface Anuncio extends Defaultdto{
  id?: number ;
  dsin : string;
  valor : number;
  ddet : string;
  caminho: string;
  cep: string;
  rua : string;
  bairro: string;
  complemento: string;
  cidade: string;
  pais: string;
  referencia: string;
  name: string;
  email: string;
  locacao: string;
  nameLocacao: string;
  emailLocacao: string;
}
