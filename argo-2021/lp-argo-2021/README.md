[client-repo]: https://gitlab.fcalatam.com/fca/commercial/bmc/landing-page/fiat/fiatargo
[client-url-final]: https://argo.fiat.com.br
[dcode-url-dev]: https://lp-argo-2021.dev.dcode.works
[dcode-url-hom]: https://lp-argo-2021.hom.dcode.works
[branch-main]: https://gitlab.digitalcode.com.br/stellantis/fiat/argo/argo-2021/-/tree/min
[branch-dev]: https://gitlab.digitalcode.com.br/stellantis/fiat/argo/argo-2021/-/tree/dev
[branch-hom]: https://gitlab.digitalcode.com.br/stellantis/fiat/argo/argo-2021/-/tree/hom
[pipeline-dev]: https://gitlab.digitalcode.com.br/stellantis/fiat/argo/argo-2021/-/pipelines?scope=all&ref=dev
[pipeline-hom]: https://gitlab.digitalcode.com.br/stellantis/fiat/argo/argo-2021/-/pipelines?scope=all&ref=hom
[status-url-final]: https://img.shields.io/website?down_color=red&down_message=down&up_color=%234bc51c&up_message=up&url=https://argo.fiat.com.br
[status-url-dev]: https://img.shields.io/website?down_color=red&down_message=down&up_color=%234bc51c&up_message=up&url=https://lp-argo-2021.dev.dcode.works
[status-url-hom]: https://img.shields.io/website?down_color=red&down_message=down&up_color=%234bc51c&up_message=up&url=https://lp-argo-2021.hom.dcode.works
[badge-dev]: https://gitlab.digitalcode.com.br/stellantis/fiat/argo/argo-2021/badges/dev/pipeline.svg
[badge-hom]: https://gitlab.digitalcode.com.br/stellantis/fiat/argo/argo-2021/badges/hom/pipeline.svg

## Fiat - Argo / Landing-page @ 2021
[//]: # (Exemplo: Jeep - Renegade / Landing-page @ 2022)
[//]: # (Landing-page|Teaser Form/Countdown/Live)

#### Stack
[//]: <> (Adicionar as principais tecnologias utilizadas no projeto com o link para suas respectivas documentações)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/en/docs/) [![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/) [![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/getting-started/usage/) [![Webpack](https://img.shields.io/badge/Webpack-2b3a42?style=for-the-badge&logo=Webpack&logoColor=8dd6f980)](https://webpack.js.org/) [![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/) [![React JS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/docs/getting-started.html) [![Sass JS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/documentation/syntax/)

#### Ambientes 
| Branch | Permissões | Pipeline Status| Ambiente  | URL | URL Status|
| :--- |:--- | :---: | :--- | :---: | :---: | 
| [main][branch-main] | pull + merge request | [-][client-repo] |Produção|  [link][client-url-final] | [![URL Status][status-url-final]][client-url-final] |
| [dev][branch-dev] | pull + push + merge | [![Pipe Status][badge-dev]][pipeline-dev] | Desenvolvimento|[link][dcode-url-dev] | [![URL Status][status-url-dev]][dcode-url-dev] |
|[hom][branch-hom] | pull + push + merge | [![Pipe Status][badge-hom]][pipeline-hom] |Homologação| [link][dcode-url-hom] | [![URL Status][status-url-hom]][dcode-url-hom] |

#### Node 10.24.1
Este projeto utiliza a versão **10.24.1** do [Node.js](https://nodejs.org/pt-br/), verifique a [versão](https://nodejs.org/pt-br/download/releases/) e faça a atualização caso seja necessário.

#### Package Manager
Sempre utilizar o [Yarn](https://yarnpkg.com/getting-started/usage/) como package manager padrão.
>**NUNCA** utilizar diferentes versões/tipos de package managers em um projeto.

#### Primeiro Acesso
Acessar raiz da pasta do projeto onde está localizado o arquivo `package.json` e instalar todas as dependências. 
Após finalizar a instalação das dependências, executar o comando `dev` para acessar a versão de desenvolvimento ou o comando `build` para exportar a versão de produção.
> O projeto deve sempre estar configurado para rodar o script de `start` na porta **8080**.
> Esta porta não pode ser alterada, pois é utilizado o `EXPOSE 8080` no **Dockerfile** no ambiente do cliente.


acessar a versão de desenvolvimento
```sh
cd project-folder/
yarn install
yarn run dev
```
ou exportar a versão para produção
```sh
cd project-folder/
yarn install
yarn run build
yarn run start
```

#### Biblioteca / Framework (Deprecado)
Este projeto utiliza uma versão deprecada de estrutura e/ou biblioteca/framework e será atualizado em breve.

#### Regras Gerais
##### Cross Browser
[![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)](https://www.google.com/chrome/) [![Safari](https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white)](https://www.apple.com/safari/) [![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](https://www.mozilla.org/en-US/firefox/new/) [![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)](https://www.microsoft.com/en-us/edge) [![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)](https://www.opera.com/)

O projeto precisa estar funcionando necessariamente nas duas últimas versões dos navegadores acima, caso alguma biblioteca ou API venha a ser deprecada para alguma versão, a atualização da feature e/ou componente utilizado é sempre **obrigatória**.
