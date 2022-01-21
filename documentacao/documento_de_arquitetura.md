# CLIMB

**Andrew Costa Silva, andrew.costa@sga.pucminas.br**

**Arthur Rocha Amaral, arthur.amaral.1100245@sga.pucminas.br**

**Gabriel Moreira Chaves, gabriel.chaves.1200613@sga.pucminas.br**

**Ian Bittecourt Andrade de Jacinto, ian.andrade@sga.pucminas.br**

**João Guilherme Martins Borborema, jborborema@sga.pucminas.br**

---

Professores:

**Hugo Bastos de Paula**

**Pedro Alves de Oliveira**

---

Curso de Engenharia de Software, Unidade Praça da Liberdade\_

Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil

---

**Resumo**. Este trabalho está inserido em um contexto de ferramentas de implantação de aplicações baseadas em tecnologia de containerização que são executadas em ambientes corporativos, mais especificamente, as corporações que ainda optam por questões de segurança ao modelo de execução das aplicações em servidores _on premises_. A solução é baseada no modelo de plataforma como serviço, no qual é destinado a auxiliar o processo de implantação de aplicações em equipes não especializadas e não técnicas, de modo que a solução possa ser trazer benefícios semelhantes aos serviços oferecidos Paas em nuvem, como por exemplo, Heroku da Salesforce. Além disso, a solução possui características de sistemas distribuídos como a comunicação em tempo real para o monitoramento, uso de sistema de mensageria para o processamento de tarefas em fila e execução da solução cliente _web_ e móvel.

---

## Histórico de Revisões

| **Data**       | **Autor**       | **Descrição**                                                                                                      | **Versão** |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- |
| **24/02/2021** | Ian Bittencourt | Adição das primeiras características do Modelo Arquitetural do projeto                                             | 1.0.0      |
| **24/02/2021** | Arthur Rocha    | Adição dos requisitos funcionais e requisitos não-funcionais                                                       | 1.1.0      |
| **25/02/2021** | Gabriel Chaves  | Adição das restrições arquiteturais e mecanismos arquiteturais                                                     | 1.2.0      |
| **26/02/2021** | Gabriel Chaves  | Remoção de falsas restrições arquiteturais                                                                         | 1.2.1      |
| **04/03/2021** | Ian Bitencourt  | Alteração das características do Modelo Arquitetural do projeto seguindo as considerações feitas pelos professores | 1.2.2      |
| **04/03/2021** | Arthur Rocha    | Correção de requisitos                                                                                             | 1.2.3      |
| **18/03/2021** | Gabriel Chaves  | Adição da imagem da Visão Geral da Solução                                                                         | 2.0.0      |
| **18/03/2021** | Ian Bittencourt | Adição de novas história de usuários, bem como definições e aberviaturas                                           | 2.1.0      |
| **25/03/2021** | Gabriel Chaves  | Adição de uma breve explicação da Visão Geral da Solução                                                           | 2.1.1      |
| **08/04/2021** | Gabriel Chaves  | Atualização da imagem da Visão Geral da Solução                                                                    | 2.1.2      |
| **25/04/2021** | Arthur Rocha    | Atualização dos diagramas arquiteturais                                                                            | 2.2.0      |
| **13/05/2021** | Gabriel Chaves  | Adição da Avaliação da Arquitetura sobre desempenho                                                                | 3.0.0      |
| **18/05/2021** | Arthur Rocha    | Adição da Avaliação da Arquitetura sobre segurança                                                                 | 3.1.0      |
| **20/05/2021** | Andrew Costa    | Atualização da Avaliação da Arquitetura sobre resistência as falhas                                                | 3.1.1      |
| **20/05/2021** | Andrew Costa    | Adição de resumo sobre o trabalho                                                                                  | 3.2.0      |
| **23/05/2021** | Andrew Costa    | Atualização de resumo sobre o trabalho                                                                             | 3.2.1      |

## SUMÁRIO

1.1. Problema <br />
1.2. Objetivos do trabalho <br />
1.3. Definições e Abreviaturas <br />

2. [Requisitos](#requisitos 'Requisitos') <br />
   2.1. Requisitos Funcionais <br />
   2.2. Requisitos Não-Funcionais <br />
   2.3. Restrições Arquiteturais <br />
   2.4. Mecanismos Arquiteturais <br />

3. [Modelagem](#modelagem 'Modelagem e projeto arquitetural') <br />
   3.1. Visão de Negócio <br />
   3.2. Visão Lógica <br />
   3.3. Modelo de dados (opcional) <br />

4. [Avaliação](#avaliacao 'Avaliação da Arquitetura') <br />
   4.1. Cenários <br />
   4.2. Avaliação <br />

5. [Referências](#referencias 'REFERÊNCIAS')<br />

6. [Apêndices](#apendices 'APÊNDICES')<br />

<a name="apresentacao"></a>

# 1. Apresentação

Algumas corporações optam pelo método de implantação interna, pois proporciona mais privacidade, segurança e menor custo. Além de que, em um ambiente corporativo, se faz necessário a implantação de diversos sistemas.

Entretanto, a configuração do ambiente para hospedagem de cada projeto de forma local se torna complexa quando não se tem uma equipe especializada e também se torna um projeto custoso.

Segundo o site Ever It, no artigo [Custos (2018)](https://www.everit.com.br/custos-da-virtualizacao-qual-o-valor-do-orcamento/), ter uma rede privada e um data center local custa em torno de R$ 31.290,93 + US$ 1.900,00, mais também há o custo da equipe de TI, que varia entre especialidades e responsabilidades.

Dessa forma, adotar um serviço que ajuda na redução do tempo de codificação, adição de funcionalidades de desenvolvimento sem adição de funcionários, desenvolvimento simplificado para diversas plataformas, suporte à equipes de desenvolvimento distribuído geograficamente e gerenciamento eficaz do ciclo de vida da aplicação é muito interessante para este cenário.

## 1.1. Problema

O problema principal é a necessidade de uma equipe com alta especificidade para a implantação de aplicações variadas. Dessa forma, o processo de implantação de novas aplicações se torna bastante custoso para as organizações, já que, precisarão contratar profissionais altamente qualificados para implantar e manter as aplicações.

## 1.2. Objetivos do trabalho

O objetivo principal do nosso trabalho é construir um sistema simples e prático para implantação de aplicações escalonáveis.

Os objetivos específicos são:

1. Desenvolver uma aplicação que fique alocada em um ambiente local (_on-premise_);
2. Desfrutar de uma alta usabilidade, focada numa interface amigável para a implantação de serviços sem uma equipe especializada;
3. Implementar o serviço de hospedagem _PaaS_.

## 1.3. Definições e Abreviaturas

- **_PaaS_:** vindo do inglês, _Platform as a Service_ é um serviço de hospedagem e implementação vde hardware e software;

- **_Rollback_:** vindo do inglês, reversão, é a possibilidade de desfazer uma ação (no contexto, uma implantação);

- **Usuários diretos:** usuários que interagem diretamente com o sistema, na operação e execução de uma implantação;

- **Usuários indiretos:** usuários que interagem com a aplicação já implantada (serviço).

<a name="requisitos"></a>

# 2. Requisitos

## 2.1. Requisitos Funcionais

| **ID** | **Descrição**                                                          | **Prioridade** |
| ------ | ---------------------------------------------------------------------- | -------------- |
| RF001  | Integração com GitHub                                                  | Essencial      |
| RF002  | Painel de administração de usuários                                    | Essencial      |
| RF003  | Construção da imagem de container com Docker Build                     | Essencial      |
| RF004  | Configurar implantação da aplicação                                    | Essencial      |
| RF005  | Implantação da aplicação do usuário por meio de Webhook                | Essencial      |
| RF006  | Lista de atividades com Rollback                                       | Essencial      |
| RF007  | Diferenciar níveis de acesso de administrador e usuário                | Essencial      |
| RF008  | Visualização de informações (Mobile)                                   | Essencial      |
| RF009  | Monitoramento (Prometheus + Grafana)                                   | Desejável      |
| RF010  | Construção da imagem de container com o Buildpacks Pack                | Desejável      |
| RF011  | Integração com GitLab                                                  | Opcional       |
| RF012  | Disponibilizar aplicativos pré configurado por meio de template        | Opcional       |
| RF013  | Cadastro por meio de carga arquivo ou por meio do acesso a organização | Opcional       |

## 2.2. Requisitos Não-Funcionais

| **ID** | **Descrição**                                                                                                                                            |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RNF001 | Deve garantir resiliência permitindo o _rollback_ para desfazer uma implantação errônea.                                                                 |
| RNF002 | Deve ser capaz de servir 2000 usuários simultâneos deixando o aumento desse limite a critério da corporação com base na infraestrutura que for utilizar. |
| RNF003 | Deve garantir que todas as hierarquias de autorizações sejam obedecidas e que os dados sensíveis estejam seguros.                                        |
| RNF004 | Deve garantir um bom desempenho retornando respostas com limite de 5 segundos de retorno.                                                                |
| RNF005 | Deve garantir robustez e confiabilidade retornando respostas adequadas à execução mesmo com algum serviço indisponível.                                  |

## 2.3. Restrições Arquiteturais

1. O software front-end web deve ser desenvolvido em React/Next.js;
2. O software front-end mobile deve ser desenvolvido em Flutter;
3. O software back-end de comunicação com front-end deve ser desenvolvido em Nest.js;
4. O software back-end de comunicação com serviços de containers deve ser desenvolvido em GoLang;
5. A comunicação sem necessidade de ser em tempo real entre front-end e back-end deve seguir o padrão RESTful;
6. A comunicação com necessidade de ser em tempo real entre front-end e back-end deve utilizar o WebSocket;
7. A comunicação assíncrona entre os back-ends devem utilizar o sistema de mensageria RabbitMQ;
8. Para a persistência de dados deve ser utilizado o PostgreSQL;
9. Para o cache de consultas à API deve ser utilizado o Redis;
10. Para a autorização de acesso aos repositórios de aplicativos externos deve ser utilizado o OAuth;
11. Para a escuta de envios de commits nos repositórios deve ser utilizado Webhooks;
12. Para a orquestração de containers deve ser utilizado um implementação do Kubernetes;
13. Para o controle de ingresso dos serviços do orquestrador deve ser utilizado o Traefik;
14. Para o fornecimento de certificados de criptografia TLS deve ser utilizado o Let's Encrypt;
15. Para a coleta de métricas do orquestrador e do controlador de ingresso deve ser utilizado o Prometheus;
16. Para a visualização de métricas coletadas deve ser utilizado Prometheus Datasources como o Grafana;
17. Para a resolução de nomes dos endereços IPs para o exterior deve ser utilizado o Cloudflare.

## 2.4. Mecanismos Arquiteturais

| **Análise**    | **Design**               | **Implementação** |
| -------------- | ------------------------ | ----------------- |
| Apresentação   | Front-end web            | React/Next.js     |
| Apresentação   | Front-end mobile         | Flutter           |
| Negócio        | Back-end web             | Nest.js           |
| Negócio        | Back-end web             | GoLang            |
| Comunicação    | Front-Back non-real-time | Restful           |
| Comunicação    | Front-Back real-time     | WebSocket         |
| Comunicação    | Back-Back broker-based   | RabbitMQ          |
| Persistência   | Relational SGBD          | PostgreSQL        |
| Cache          | In-memory                | Redis             |
| Implantação    | Container Orchestration  | Kubernetes        |
| Acesso externo | Ingress-controller       | Traefik           |
| Monitoramento  | Pull-based               | Prometheus        |

<a name="modelagem"></a>

# 3. Modelagem e projeto arquitetural

![Visão Geral da Solução](imagens/diagrama_de_visao_geral.png 'Visão Geral da Solução')

**Figura 1 - Visão Geral da Solução. Fonte: Autores.**

O projeto terá dois tipos de front-end, web e móvel nativo, sendo que o móvel usará uma comunicação em tempo real. Eles se comunicarão com uma aplicação de back-end, na qual possui a função de servir os dados referentes aos usuários, realizar integrações com o GitHub e Gitlab, e encaminhar solicitações de orquestração das aplicações dos usuários para outro serviço de back-end. Este outro serviço tem como objetivo realizar o gerenciamento da orquestração das aplicações, utilizando para isso o Kubernetes em conjunto com o Traefik, que serão monitorados pela dupla Prometheus e Grafana.

## 3.1. Visão de Negócio (Funcionalidades)

1. O sistema deve permitir a implantação de aplicações escolhidas pelos usuários;
2. O sistema deve disponibilizar domínios personalizados para cada aplicação;
3. O sistema deve permitr que o administrador cadastre usuários na plataforma;
4. O sistema deve permitir um usuário vincular sua conta do GitHub ou GitLab;
5. O sistema deve atualizar as aplicações implantadas com base nos Webhooks dos seus respectivos repositórios;
6. O sistema deve permitir reverter um implantação;
7. O sistema deve monitorar e gerenciar o recurso de cada aplicação implantada;
8. O sistema deve disponibilizar um painel para monitoramento de cada aplicação;

### Histórias de Usuário

- Como usuário direto, eu quero implantar minhas aplicações clonadas diretamente do GitHub ou GitLab;
- Como administrador, eu quero cadastrar usuários diretos e outros administradores;
- Como administrador, eu quero deletar usuários diretos;
- Como usuário direto, eu quero ver as minhas aplicações implantadas serem atualizadas a partir dos seus repositórios fonte;
- Como usuário direto, eu quero personalizar o domínio que dará acesso à minha aplicação implantada;
- Como usuário direto, eu quero configurar o ambiente em que minha aplicação esta rodando;
- Como usuário indireto, eu quero acessar as aplicações implantadas pelos usuários diretos;
- Como usuário direto, eu quero monitorar os recursos utilizados por minhas aplicações;
- Como usuário direto, eu quero desfazer alguma implantação.

## 3.2. Visão Lógica

### Diagrama de Classes

![Diagrama de classes](imagens/diagrama_de_classe_final.svg 'Diagrama de classes')

**Figura 2 – Diagrama de classes. Fonte: Autores**

### Diagrama de componentes

![Diagrama de componentes](imagens/diagrama_de_componentes.png 'Diagrama de componentes')

**Figura 3 – Diagrama de Componentes. Fonte: Autores.**

- **Componente 1** - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc magna, accumsan eget porta a, tincidunt sed mauris. Suspendisse orci nulla, sagittis a lorem laoreet, tincidunt imperdiet ipsum. Morbi malesuada pretium suscipit.
- **Componente 2** - Praesent nec nisi hendrerit, ullamcorper tortor non, rutrum sem. In non lectus tortor. Nulla vel tincidunt eros.

<a name="avaliacao"></a>

# 4. Avaliação da Arquitetura

## 4.1. Cenários

**Cenário 1 - Resistencia a falhas:** A aplicação deverá manter em funcionamento mesmo em condições de falhas, as mensagens de exceção deverão ser retornadas para o usuário de forma que ele possa identificar e tomar medidas de correção para o sintoma apresentado. Além disso, com o uso de _Toasts_, as mensagens podem ser fácilmente captadas pelo usuário e classificadas ao usuário pelo nível de importância seguindo os seguintes de categorização: sucesso (verde), aviso (amarelo) e erro (vermelho).

**Cenário 2 - Segurança:** Para garantir a identidade de cada cliente, a aplicação conta com a implementação de autenticação via JWT (JSON Web Token) armazenados em _cookies_. Nesse _token_ contém os dados do usuário responsável pela requisicição, assim torna possível que, em _endpoints_ que necessitam de autenticação, possamos buscar os dados do usuário e saber se ele tem permição para executar tal chamada. O _token_ JWT é gerado e cadastrado como um token válido no _endpoint_ de login, a resposta desse _endpoint_ contém os dados publicos do usuário no _body_ e um _header_ de `set-cookie` com os dados de tempo de expiração, _http-only_, o próprio JWT e outros atributos. Assim todas as requisições feitas pelo usuário ao mesmo host que retornou o _cookie_ irão com o dado de autenticação no cabeçalho. Algumas rotas necessitam de serem públicas, pois interagem com sistemas externos de autenticação, com _webHooks_ e com o próprio usuário porém de forma pulica, como o _endpoint_ de login.

**Cenário 3 - Desempenho:** O sistema deve garantir um tempo de resposta adequado. Foi estipulado que devido a proposta do projeto ser uma aplicação que permitirá os membros de uma instituição que deseja que as suas aplicações desenvolvidas sejam expostas, a quantidade de usuários simultâneos raramente deve ultrapassar a quantidade de 100 usuários. Estipulamos que em condições de funcionamento comum o tempo de resposta não deve ultrapassar 5 segundos de resposta, então fizemos um teste com 200 usuários virtuais, por ser o dobro do que consideramos que raramente deve acontecer. Estipulamos também que o sistema deve continuar funcionando pelo menos com 2000 usuários simultâneos sem que a aplicação pare de funcionar, este valor foi pensado por ser 20 vezes a quantidade que raramente deve ter. É claro que o tempo de resposta será bem maior, porém o interesse é saber se o sistema irá continuar em funcionamento.

**Cenário 4 - Manuntenbilidade:** Para realizar a manuntenbilidade do sistema, no _front-end_,foi necessário adotar padrões e princípios de organização e código. Como organização, a criação de pastas foi feita, para que seja necessário identificar e separar cada cenário e sua responsabilidade em relação ao sistema, por exemplo: a pasta 'shared' é interessante quando há necessidade de se compartilhar, de forma global, alguma funcionalidade específica do código, que outras funcionalidades utilizariam. Além disso, a linguagem TypeScript foi escolhida para compor o sistema, pois, nela é possível determiarmos tipos, dessa forma o desenvolvedor que necessita atualizar algum trecho do código, com a ajuda do _IntelliSense_ de sua IDE, conseguirá ter visibilidade de como será implantado o retorno ou recebimento desta alteração. Além disso, acatamos as documentações do [NextJS (2016)](https://nextjs.org/) (_framework_ React.JS utilizado) e do [Chakra UI (2019)](https://chakra-ui.com/) (biblioteca de UI utilizada) como guias, aplicando todos os padrões descritos nelas. Já no _back-end_, com a intenção de facilitar a visualização das rotas, adotamos a utilização do [SWAGGER UI (2011)](https://swagger.io/), no qual proporciona uma documentação padronizada da API, contendo um guia de como todas as chamadas são feitas.

## 4.2. Avaliação

| **Atributo de Qualidade:**  | Resistência a falhas                                                                                                                     |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Requisito de Qualidade:** | Ser robusto perante falhas                                                                                                               |
| **Preocupação:**            | O Sistema manter seu funcionamento mesmo em casos de falhas                                                                              |
| **Cenário(s):**             | Cenário 1                                                                                                                                |
| **Ambiente:**               | Sistema em operação                                                                                                                      |
| **Estímulo:**               | Entrada de informações inválidas e falha de comunicação entre sistema                                                                    |
| **Mecanismo:**              | Componente do tipo _tooltip_ é exibido quando um erro ocorre e suas cores verde, amarelo e vermelho representam seu grau de importância. |
| **Medida de Resposta:**     | Mensagens de erros são exibidas para o usuário                                                                                           |

| **Considerações sobre a arquitetura:** |            |
| -------------------------------------- | ---------- |
| **Riscos:**                            | Não existe |
| **Pontos de Sensibilidade:**           | Não existe |
| **_Tradeoff_:**                        | Não existe |

---

| **Atributo de Qualidade:**  | Segurança                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Requisito de Qualidade:** | Deve garantir que todas as hierarquias de autorizações sejam obedecidas e que os dados sensíveis estejam seguros                                                                                                                                                                                                                                                                                                                                                                             |
| **Preocupação:**            | O sistema ter que segregar endpoints públicos, restritos a usuários e registrados e restrito somente a administradores                                                                                                                                                                                                                                                                                                                                                                       |
| **Cenário(s):**             | Cenário 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Ambiente:**               | Sistema em operação                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Estímulo:**               | Rotas como a de cadastro de usuário devem ser acessadas somente por administradores e rotas comuns de listagem de aplicações devem ser usadas por usuários cadastrados e negadas a usuários inválidos                                                                                                                                                                                                                                                                                        |
| **Mecanismo:**              | Para avaliação da API desenvolvida em NestJS, podemos utilizar a documentação gerada automaticamente usando a própria integração do NestJS Open API com o Swagger. Assim podemos verificar os _endpoints_ que necessitam de autenticação e testa-los. Rotas sinalizadas com autenticação no Swagger devem retornar status 401 (_Unauthorized_) quando não enviar um _cookie_ com um jwt válido, e devem retornar status 403 (_Forbidden_) quando o usuário não tiver acesso a funcionalidade |
| **Medida de Resposta:**     | Contagem de rotas com autenticação falha, no caso, rotas restritas que não retornam status 401 (_Unauthorized_) sem token válido e acesso à rotas restritas a administração que não retornam status 403 (_Forbidden_) sem token válido)                                                                                                                                                                                                                                                      |

| **Considerações sobre a arquitetura:** |                                                                                                                                                                                                                                                                    |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Riscos:**                            | O token jwt pode ser "roubado", porém existem formas de dificultar esse roubo como, utilizar tempo de expiração para garantir que mesmo com o _token_ roubado, ele não valerá por muito tempo, e utilizando também HTTPS pra dificultar ataques "man-in-the-middle" |
| **Pontos de Sensibilidade:**           | Dados críticos podem ser transportados no payload da mensagem e fica sobe responsabilidade da implementação                                                                                                                                                        |
| **_Tradeoff_:**                        | Após criados, os _tokens_ jwt não podem ser desativados de forma remota, pois não deixam de ser tokens válidos                                                                                                                                                     |

---

| **Atributo de Qualidade:** | Tempo de resposta adequado.                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Requisito de Qualidade** | O tempo de resposta do sistema não deve ultrapassar 5 segundos.                                                                                                                                                                                                                                                                                                                                                                          |
| **Preocupação:**           | Os usuários devem ter uma boa experiência ao utilizar o sistema, não tendo que aguardar muito pelas respostas do sistema.                                                                                                                                                                                                                                                                                                                |
| **Cenário:**               | Cenário 3.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Ambiente:**              | Sistema simulando o dobro de usuários simultâneos que raramente o sistema deve ter.                                                                                                                                                                                                                                                                                                                                                      |
| **Estímulo:**              | A boa experiência do usuário ao utilizar o sistema.                                                                                                                                                                                                                                                                                                                                                                                      |
| **Mecanismo:**             | Para a avaliação foi utilizada a stack K6 (ferramenta de teste de carga utilizado) + InfluxDB (banco de dados de séries temporais para armazenar os dados coletados pelo K6) + Grafana (ferramenta para visualização interativa para visualizar os dados do InfluxDB). O teste foi realizado com 3 estágios: alcançando 200 usuários em 5 segundos, permanecendo com 200 usuários por 10 segundos e voltando a 0 usuários em 5 segundos. |
| **Medida de Resposta:**    | Foi analisado se o tempo de resposta nesse ambiente não ultrapassou os 5 segundos de tempo de resposta por meio da visualização do maior tempo de resposta relatado. Nesse ambiente o tempo de resposta máximo foi de 4,59 segundos, sendo um caso que ultrapassa muitos a quantidade de usuários simultâneos esperados, o resultado foi bem satisfatório.                                                                               |

| **Considerações sobre a arquitetura:** |            |
| -------------------------------------- | ---------- |
| **Riscos:**                            | Não existe |
| **Pontos de Sensibilidade:**           | Não existe |
| **_Tradeoff_:**                        | Não existe |

---

| **Atributo de Qualidade:** | Vários usuários simultâneos                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Requisito de Qualidade** | O sistema deve ser capaz de servir 2000 usuários simultâneos.                                                                                                                                                                                                                                                                                                                                                                              |
| **Preocupação:**           | O sistema deve continuar funcionando em um ambiente que ultrapasse muito a quantidade de usuários simultâneos esperados, que pode acontecer em ataques antes desse acesso malicioso ser bloqueado.                                                                                                                                                                                                                                         |
| **Cenário:**               | Cenário 3.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Ambiente:**              | Sistema simulando uma altíssima quantidade de usuários simultâneos esperados no sistema.                                                                                                                                                                                                                                                                                                                                                   |
| **Estímulo:**              | Viabilizar que o sistema continue funcionando sem erros devido a grande quantidade de usuários simultâneos de acordo com a quantidade esperada.                                                                                                                                                                                                                                                                                            |
| **Mecanismo:**             | Para a avaliação foi utilizada a stack K6 (ferramenta de teste de carga utilizado) + InfluxDB (banco de dados de séries temporais para armazenar os dados coletados pelo K6) + Grafana (ferramenta para visualização interativa para visualizar os dados do InfluxDB). O teste foi realizado com 3 estágios: alcançando 2000 usuários em 5 segundos, permanecendo com 2000 usuários por 10 segundos e voltando a 0 usuários em 5 segundos. |
| **Medida de Resposta:**    | Foi analisado se não ocorreram falhas de resposta. Nesse ambiente não houve nenhum erro de resposta do sistema.                                                                                                                                                                                                                                                                                                                            |

| **Considerações sobre a arquitetura:** |            |
| -------------------------------------- | ---------- |
| **Riscos:**                            | Não existe |
| **Pontos de Sensibilidade:**           | Não existe |
| **_Tradeoff_:**                        | Não existe |

---

| **Atributo de Qualidade:** | Tempo de resposta adequado.                                                                                                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Requisito de Qualidade** | O sistema deve garantir a manutenibilidade, através de uma documentação consistente.                                                                                                                                                          |
| **Preocupação:**           | Futuros desenvolvedores que irão contribuir com o código possam entender de forma consistente o que foi feito, além de ter facilidade de modificar o que já foi feito.                                                                        |
| **Cenário:**               | Cenário 4.                                                                                                                                                                                                                                    |
| **Ambiente:**              | Sistema documentado a partir de uma interface que auxilia a chamada de um endpoint e demonstra o retorno da mesma.                                                                                                                            |
| **Estímulo:**              | Facilidade de testar e identificar funcionamento do sistema.                                                                                                                                                                                  |
| **Mecanismo:**             | Implementação da interface Swagger, no _back-end_ do projeto. Esta implementação é realizada por uma estrutura parecida com o JSON, que engloba todos os endpoints da aplicação, documentando seu retorno e como será realizada esta chamada. |
| **Medida de Resposta:**    | Foi analisado a usabilidade do Swagger, realizando chamadas aos endpoints e avaliando os dados de retorno, se condizem com o que é feito em tempo de execução do código, ou não.                                                              |

| **Considerações sobre a arquitetura:** |            |
| -------------------------------------- | ---------- |
| **Riscos:**                            | Não existe |
| **Pontos de Sensibilidade:**           | Não existe |
| **_Tradeoff_:**                        | Não existe |

---

### **Evidências dos testes realizados:**

**Resistência a falhas - falha de comunicação entre sistemas**

![Mensagem de falha de comunicação entre sistema](https://user-images.githubusercontent.com/16245919/118180648-2992e780-b40d-11eb-8277-5bad060ee87f.png 'erro ao acessar rota não autenticada')

**Resistência a falhas - entrada de dados inválidas**

![Entrada de dados inválidas](imagens/entrada_dado_invalido.png 'Mensagem de aviso sobre formato incorreto de entrada')

**Segurança - exemplo de _endpoints_ que necessitam de autenticação**

![Endpoints com autenticação](imagens/swagger-usuarios.png 'Endpoints com autenticação')

**Segurança - exemplo de _endpoints_ que não precisam de autenticação**

![Endpoints sem autenticação sign in](imagens/swagger-signin.png 'Endpoints sem autenticação sign in')
![Endpoints sem autenticação webhooks](imagens/swagger-webhooks.png 'Endpoints sem autenticação webhooks')

**Segurança - tentativa de buscar dados do usuário sem estar autenticado**

![Buscar dados sem token](imagens/swagger-me-401.png 'Buscar dados sem token')

**Segurança - acessando rota pública de _sign in_ com credenciais de administrador para gerar _token jwt_**

![Ambiente sem token antes da autenticacao](imagens/swagger-without-cookie.png 'Ambiente sem token antes da autenticacao')
![Resposta do envio das credencias corretas](imagens/swagger-admin-login-success.png 'Resposta do envio das credencias corretas')
![Novo cookie armazenado no navegador](imagens/new-cookie-setted.png 'Novo cookie armazenado no navegador')

**Segurança - buscar dados do usuário com acesso administrador**

![Busca dados do usuário requerente com sucesso](imagens/swagger-me-with-admin-200.png 'Busca dados do usuário requerente com sucesso')

**Segurança - buscar dados de todos os usuários com acesso administrador**

![Busca dados de todos os usuários com acesso de administrador com sucesso](imagens/swagger-get-users-with-admin.png 'Busca dados de todos os usuários com acesso de administrador com sucesso')

**Segurança - acessando rota pública de _sign in_ com credenciais de usuário para gerar _token jwt_**

![Resposta do envio das credencias corretas de usuário](imagens/swagger-user-login-success.png 'Resposta do envio das credencias corretas de usuário')

**Segurança - buscar dados do usuário com acesso comum**

![Busca dados do usuário requerente com sucesso](imagens/swagger-me-with-user-200.png 'Busca dados do usuário requerente com sucesso')

**Segurança - buscar dados de todos os usuários com acesso comum**

![Busca dados de todos os usuários com acesso de administrador com falha](imagens/swagger-get-users-with-user.png 'Busca dados de todos os usuários com acesso de administrador com falha')

**Tempo de resposta adequado**

![Tempo de resposta adequado](imagens/tempo_de_resposta.png 'Tempo de resposta adequado')

**Vários usuários simultâneos**

![Vários usuários simultâneos](imagens/usuarios_simultaneos.png 'Vários usuários simultâneos')

**Swagger UI**

![Swagger UI](imagens/swagger_ui.png 'Swagger UI')

**Chamada exemplo no navegador (utilizando a rota de login)**

![Resposta da API no navegador](imagens/signin_network.png 'Resposta da API no navegador')

**Token de resposta ao efetuar login**

![Token de resposta](imagens/signin_network_response.png 'Token de resposta')

**Exemplo da mesma chamada, através do Swagger**

![Exemplo funcionamento do Swagger](imagens/swagger_example.gif 'Exemplo funcionamento do Swagger')

---

<a name="referencias"></a>

# 5. REFERÊNCIAS

_Como um projeto da arquitetura de uma aplicação não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT._

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf

**[1]** - _**CUSTOS da virtualização: qual o valor do orçamento?**. [S. l.], 25 set. 2018. Disponível em: <https://www.everit.com.br/custos-da-virtualizacao-qual-o-valor-do-orcamento/>. Acesso em: 12 maio 2021._

**[2]** -_**NEXTJS**. [S. l.], 25 out. 2016. Disponível em: <https://nextjs.org/>. Acesso em: 21 maio 2021._

**[3]** - _**CHAKRA UI**. [S. l.], 19 dez. 2019. Disponível em: <https://chakra-ui.com/>. Acesso em: 21 maio 2021._

**[4]** - _**SWAGGER UI**. [S. l.], 11 jul. 2011. Disponível em: <https://swagger.io/>. Acesso em: 21 maio 2021._

<a name="apendices"></a>

# 6. APÊNDICES

_Inclua o URL do repositório (Github, Bitbucket, etc) onde você armazenou o código da sua prova de conceito/protótipo arquitetural da aplicação como anexos. A inclusão da URL desse repositório de código servirá como base para garantir a autenticidade dos trabalhos._
