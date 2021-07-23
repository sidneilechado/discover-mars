## Exploring Mars

Para rodar esse projeto voce precisará de:
- NodeJS 14 instalado em seu terminal
- Entre na pasta do projeto e digite `npm run dev`
- Para rodar os testes é necessário rodar `npm install`

O input é feito através do arquivo `input.txt`, tomei como verdade que sempre será inputado da forma na qual foi passada no PDF, porém tem algumas validacoes sendo feitas por precaucao.

O desafio foi dividido em 3 files:
- Validations, responsável por toda e qualquer tipo de validacao do projeto
- Moves, responsável por mover as naves em Marte
- Input, responsável por ler o arquivo de texto

Os testes foram feitos em `jest` e temos 2 comandos possíves para roda-los:
- `npm run test:unit`: roda os testes unitários
- `npm run test:coverage`: roda a coverage dos tests

Nao senti necessidade de validar o input dado que sao maioria funcoes nativas do Node.

Também tomei como verdade que uma nave nao pode sair do retangulo que foi definido, foi feito uma validacao para confirmar isso.