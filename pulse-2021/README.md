[client-repo]: https://gitlab.fcalatam.com/fca/commercial/bmc/landing-page/fiat/fiatpulse/fiatpulse
[client-url-prod]: https://pulse.fiat.com.br
[client-url-nonprod]: https://fiat-lp-master-pulse-lp.commercial-nonprod.fcalatam.com.br
[branch-main]: https://gitlab.digitalcode.com.br/stellantis/fiat/pulse/pulse-2021/-/tree/main
[project-status-inactive]: https://img.shields.io/badge/inativo-red
[project-status-active]: https://img.shields.io/badge/ativo-brightgreen

## Fiat - Pulse

**Status dos Projetos**

Projeto / Pasta  | Gitlab Cliente | URL Prod | URL NonProd | Ano | Status |
| :--- | :---: | :---: | :---: |:---: | :---: |
| [lp-pulse-2021][branch-main] | [Repositório][client-repo] | [Link][client-url-prod] | [Link][client-url-nonprod] | 2021 | [![Project Status][project-status-active]][client-url-prod] |

***TODO**
### Pipeline Automatizado (CI/CD)
O arquivo `.gitlab-ci.yml` é responsável pela configuração da esteira contínua dos projetos.

### Configuração Padrão dos Ambientes
O arquivo `config.json` é o arquivo que contém a configuração do ambiente dos projetos, através dele podemos criar e/ou alterar a configuração deles de cada um deles, dando a possibilidade de ambientes para cada um dos projetos.

#### Folder
É pasta raiz de cada projeto.
```json
"folder":"project-folder/"
```
#### Output
O `output` é a pasta de onde devem ficar os arquivos transpilados do projeto para o virtual host apontar o root webserver, ele é **opcional** e caso não seja setado o ambiente irá buscar pela pasta `out` por padrão.
```json
"output":"dist"
```

#### Slug
O DNS dos projetos seguem o formato `[slug].[branch].[dominio]` e são criados dinamicamente de acordo com o **slug definido** para cada projeto, para facilitar sempre que possível tentamos utilizar a seguinte convenção para a nomeclatura do slug

`[sufixo do tipo de projeto] - [marca] - [ano de desenvolvimento]`

**Sufixo do tipo de projeto**

lp = Landing-page

ts = Teaser

**Exemplo:**

Utilizando o slug **lp-renegade-2022** a URL completa para as branches existentes ficariam desta maneira:
- lp-renegade-2022.dev.dcode.works
- lp-renegade-2022.hom.dcode.works
- lp-renegade-2022.new-feature.dcode.works

```json
"slug":"lp-renegade-2022"
```

#### External-access
As credenciais para acesso externo *são opcionais* e são usadas para usuários que não tenham a [autenticação da Dentsu](https://myapps.dentsu.com/home/oidc_client/0oa6sxh2pwhyv1TOB0i7/aln2ysuixJR74D7Lc0g6) possam acessar o projeto.
Caso existam usuário setados, o projeto pode ser acessado sem a autenticação do [OKTA](https://myapps.dentsu.com/), utilizando a query-string `oauth2_auth = false` na URL de acesso.
```json
"external-access":[
	{
		"user":"email3@email.com",
		"pass":"kmc^&7620@rW"
	},
	{
		"user":"email2@email.com",
		"pass":"kmc^&7620@rW"
	},
	{
		"user":"email1@email.com",
		"pass":"kmc^&7620@rW"
	}
]
```

#### Render
Esta variável é referente ao tipo de render do [NextJS](https://nextjs.org/) que nosso servidor irá utilizar no projeto, [estático (SSG)](https://nextjs.org/docs/basic-features/static-file-serving) ou [renderizado no servidor (SSR)](https://nextjs.org/docs/basic-features/pages#server-side-rendering), os valores aceitos são: `static`ou `server-side` e o padrão é o `static`
```json
"render":"static"
```
#### Server
Aqui podemos definir a plataforma, linguagem e versão.

Por enquanto temos apenas duas opções de plataformas, os valores aceitos são: `nginx` ou `apache` e o padrão é o `nginx`.
Também podemos rodar uma das duas linguagens diferentes ou nenhuma, os valores aceitos são: `node` ou `php` ou `none`, o valor padrão é o valor `none`.
Podemos escolher a versão da linguagem, os valores aceitos são `0.0.0` ou `lastest`, o valor padrão é o `lastest`

```json
"server":{
	"type":"nginx"
	"language":{
		"type":"node",
		"version":"lastest"
	}
}
```

#### Database
Aqui podemos definir o banco de dados dos tipos [MySQL](https://www.mysql.com/) ou [DocumentDB](https://aws.amazon.com/pt/documentdb/) (uma versão do MongoDB da AWS), os valores aceitos são: `mysql` ou `documentdb` ou `none`, o valor padrão é o valor `none`.
Podemos escolher a versão da linguagem, os valores aceitos são `0.0.0` ou `lastest`, o valor padrão é o `lastest`

**Dados de Acesso**

**MySQL**

**URL**

O host padrão sempre será o `dcode-td-mysql.chxyvfbqrdih.sa-east-1.rds.amazonaws.com` e o nome do banco será o nome do `slug` acima.

**Porta***

A porta padrão será 3306

**DocumentDB**

**URL**

O host padrão será `develop-dcode-td-eks.cluster-chxyvfbqrdih.sa-east-1.docdb.amazonaws.com` e o nome do banco será o nome do `slug` acima.

**Porta**

A porta padrão será 27017

```json
"database":{
	"type":"documentdb",
	"version":"lastest",
	"host":"develop-dcode-td-eks.cluster-chxyvfbqrdih.sa-east-1.docdb.amazonaws.com",
	"port":"27017",
	"user":"usr_dcode",
	"pass":"IJio40#*u"
}
```
