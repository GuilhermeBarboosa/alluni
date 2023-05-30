import { Defaultdto } from './defaultdto';
export interface Anuncio extends Defaultdto{
  id?: number ;
  dsin : string;
  valor : number;
  ddet : string;
  fotoID : number;
  enderecoID : number;
  userID : number;
  locacaoID : number;
}
