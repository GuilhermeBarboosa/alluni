import { Defaultdto } from "./defaultdto";

export interface Foto extends Defaultdto{
  id: number;
  nome: string;
  caminho: string;
  anuncioId: number;
}
