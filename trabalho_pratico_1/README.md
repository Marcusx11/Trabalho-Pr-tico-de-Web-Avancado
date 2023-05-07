Grupo:
Igor Ribeiro da Silva
Marcus Vinícius Braga Terçariol da Silva

Para uma execução correta do projeto leia o documento com as observações necessárias.

1) No ponto 4 que solicita o desenvolvimento da página de automóveis foi necessária uma alteração na proposta inicial. As imagens dos carros devem ser obtidas em tempo de execução já que o usuário pode inserir qualquer imagem e o automóvel selecionado junto com sua imagem pode ser trocado. Caso a pasta com as imagens fique dentro de src, o Javascript/React adiciona um sufixo numérico no caminho da imagem, impossibilitando utilizar o local (Exemplo: a imagem está no diretório scr/auto/carro.jpg. Caso utilize na tag img esse caminho, será adicionar um sufixo como scr/auto/carro1212434234.jpg). Uma importação da imagem como componente funciona bem mas não atende a demanda do trabalho. Por isso, adicione a pasta auto com as imagens na pasta public do projeto react (Exemplo: public/auto/carro.jpg).

2) Para a parte das galerias, como estava ocorrendo o mesmo problema da tela dos automóveis, foi movido a pasta da galeria para a pasta public, de modo que a galeria pudesse mostrar as imagens de forma correta.

3) Além disto, foram instaladas 3 bibliotecas React para a execução do trabalho: MUI, Axios e React Router Dom.
As dependências destas bibliotecas estão presentes no arquivo package.json, mas para instalá-las no projeto, deve-se executar os seguintes 3 comandos abaixo (com o npm. Para outros gerenciadores de pacotes, os comandos podem ser diferentes):
- npm install axios
- npm install @mui/material @emotion/react @emotion/styled
- npm install react-router-dom

Mas apenas com a execução do comando "npm install", já estará sendo instaladas todas as biliotecas relacionadas ao react, bem como as dependências citadas neste item.