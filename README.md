## Demo 📸

<div align="center" >
  <img src="./youtube_robot.gif" alt="demo-web" height="425">
</div>

## Sobre o Projeto / About this project

Projeto utilizando o IBM Watson + Adobe After Effects + Wikipedia + Google Images API + Algorithmia + JavaScript + Node.js para criar 5 robôs que geram vídeos automáticos no YouTube.

- Robô user input: Busca da api do Google trends os assuntos mais pesquisados do momento e captura sobre qual assunto o usuário quer gerar o vídeo;

- Robô text: Utiliza uma api do algorithmia e pesquisa os dados sobre o assunto no wikipedia e utiliza a api do IBM Watson passando os textos e obtendo as palavras chave que serão utilizadas para busca das imagens;

- Robô image: Utiliza a api Google search e baixa as imagens com as palavras chaves retornadas pelo IBM Watson;

- Robô vídeo: Utiliza o ImageMagick para renderizar as imagens e deixa-las do tamanho adequado do vídeo, também utiliza o Adobe After Effects para aplicar as imagens baixadas e renderizadas com os textos buscados do wikipedia e uma música de fundo para gerar o vídeo;

- Robô youtube: Utiliza a api do Google youtube e OAuth2 para se logar na conta e fazer o upload do vídeo gerado;

Segue o vídeo de todo o processo onde utilizei o tema Celtics pois o Boston Celtics estava jogando naquele momento, caso queira ver apenas o resultado final do vídeo gerado está a partir do minuto 03:20.

--

- Project using IBM Watzon + Adobe After Effects + Wikipedia + Algorithmia APis + Google Image Api + JavaScript + NodeJS in 5 robots to create automatically youtube videos.

 - User input robot: Get the tendencies from google trends;

 - Text robot : Use the algorithmia, wikipedia and ibm watson to get the correct key words about any subject;

 - Image robot: Use google image api with the key words;

 - Video robot: Use imageMagick, Adobe after effects to render all of the images and create the video;

 - Youtube robot: Use the google youtube api and OAuth2 to login and upload the video;
 
