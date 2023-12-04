export interface Teste {
  nome?: string;
  idade?: number;
}

function Teste({ nome, idade }: Teste) {
  return (
    <>
      <h1>Info:</h1>
      <h4>Nome - {nome}</h4>
      <h4>Idade - {idade}</h4>
    </>
  );
}

export default Teste;
