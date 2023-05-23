/* eslint-disable eol-last */
export interface ISerie{
    nomeS: string;
    lancamentoS: string;
    temporadaS: string;
    classificacaoS: number;
    cartazS: string;
    generosS: string[];
    paginaS?: string; //** a ? indica que o campo nao é obrigatorio*/
    favoritoS: boolean;
  }