

<p align="center">	
   <a href="https://www.linkedin.com/in/wellington123/">
      <img alt="Wellington" src="https://img.shields.io/badge/-Wellington123-5965e0?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-5965e0">


</p>
   <br>



<p align="center">
   <h1>SBoard</h1>

</p>

Painel de gerenciamento de virtual de redes virtuais seguindo o modelo 5G/NaaS




<div align="center">
   <sub>Desenvolvido por 
    <a href="https://github.com/wrtinho">Wellington Rodrigues</a> 
  </sub>
</div>

## :pushpin: Tabela de Conteúdo

* [Tecnologias](#computer-tecnologias)
* [Como rodar](#construction_worker-como-rodar)




<br>

## :computer: Tecnologias
Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

* [Flask](https://flask.palletsprojects.com/)
* [ReactJS](https://reactjs.org/) 
* [Cytoscape](http://js.cytoscape.org/) 



# :construction_worker: Como rodar
Para rodar a aplicação certifique de ter instalado na maquina o [Python](https://www.python.org/) e o [Node](https://nodejs.org/en/download/).
Após instalado ambos execulte o codigo abaixo no terminal para baixar seu gerenciador de pacotes. (yarn).
```bash
$ npm install --global yarn
```

Baixado as ferramentas agora é necessario baixar os pacotes e bibliotecas necessarios para execultar á aplicação, para isso:

```bash
# Clone o Repositorio
$ git clone https://github.com/wrtinho/TCC-view-network-slice-data.git

# Entre na pasta do projeto
$ cd TCC-view-network-slice-data/
```
Abra um novo terminal dentro da pasta. 

Em um terminal execulte o comando,
```bash
# Seu_pah\TCC-view-network-slice-data>
$ yarn
```
Este comando irá Baixar todas dependencias para execultar o projeto ReactJS

No outro terminal:
```bash
# Va para pasta api
$ cd api

# Seu_pah\TCC-view-network-slice-data\api>
$ pip install -r requirements.txt
```
Este comando irá Baixar todos os pacotes necessarios para execultar o script .py

Apos isso neste mesmo terminal execulte o arquivo
```bash
# Seu_pah\TCC-view-network-slice-data\api>
$ python app.py
```

E por ultimo no terminal anterior, da raiz do projeto execulte 
```bash
# Seu_pah\TCC-view-network-slice-data>
$ yarn start
```


# :bug: Problemas

Fique a vontade para criar uma nova issue com o respectivo titulo e descrição na página de issues do [TCC-view-network-slice-data](https://github.com/wrtinho/TCC-view-network-slice-data/issues)


<br>

<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/wellington123/" target="_blank">Wellington </a>
</h4>
