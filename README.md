

<p align="center">	
   <a href="https://www.linkedin.com/in/wellington123/">
      <img alt="Wellington" src="https://img.shields.io/badge/-Wellington123-5965e0?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-5965e0">
</p>
   <br>



<p align="center">
   <h1>SBoard</h1>

   <img src="https://github.com/wellington-tinho/SBoard/blob/main/src/assets/ScreenExemple.png" alt="Tela da Aplicação" width="720"/>

</p>

Painel de gerenciamento de virtual de redes virtuais seguindo o modelo 5G/NaaS




<div align="center">
   <sub>Desenvolvido por 
    <a href="https://github.com/wellington-tinho">Wellington Rodrigues</a> 
  </sub>
</div>

## :pushpin: Tabela de Conteúdo

- [:construction_worker: Como rodar](#construction_worker-como-rodar)
- [:bug: Problemas](#bug-problemas)




<br>

## :computer: Tecnologias
Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

* [ReactJS](https://reactjs.org/) 
* [Cytoscape](http://js.cytoscape.org/)
* [Flask](https://flask.palletsprojects.com/) 



# :construction_worker: Como rodar
Para rodar a aplicação certifique de ter instalado na maquina o [Python](https://www.python.org/) e o [Node](https://nodejs.org/en/download/).

Após instalado ambos execulte o codigo abaixo no terminal para baixar seu gerenciador de pacotes. (yarn).
```bash
$ npm install --global yarn
```

Baixado as ferramentas agora é necessário baixar os pacotes e bibliotecas necessárias para executar á aplicação, para isso:

```bash
# Clone o Repositorio
$ git clone https://github.com/wellington-tinho/SBoard.git

# Entre na pasta do projeto
$ cd SBoard/
```
Abra um novo terminal dentro da pasta. 

Em um terminal execute o comando,
```bash
# Seu_pah\SBoard>
$ yarn
```
Este comando irá baixar todas dependências para executar o projeto ReactJS

No outro terminal:
```bash
# Va para pasta api
$ cd api

# Seu_pah\SBoard\api>
$ pip install -r requirements.txt
```
Este comando irá Baixar todos os pacotes necessários para executar o script .py

Após isso neste mesmo terminal execute o arquivo
```bash
# Seu_pah\SBoard\api>
$ python app.py
```

E por ultimo no terminal anterior, da raiz do projeto execute 
```bash
# Seu_pah\SBoard>
$ yarn start
```

Feito isto você deverá receber uma mensagem: 
 

 ```bash
  vite v2.8.3 dev server running at:
  
  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in (n)ms.

```
Recebido a mensagem basta abrir em seu navegador o endereço: http://localhost:3000/ 


# :bug: Problemas

Fique a vontade para criar uma nova issue com o respectivo titulo e descrição na página de issues do [SBoard](https://github.com/wellington-tinho/SBoard/issues)


<br>

<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/wellington123/" target="_blank">Wellington </a>
</h4>
