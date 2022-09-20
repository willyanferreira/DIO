# ÚLTIMO DESAFIO DE PROJETO DO BOOTCAMP DATABASE EXPERIENCE
<p>Objetivo: Apresentar algumas das diferênças entre DA SQL e NoSQL, vantagens e desvantagens dos NoSQL.</p>

### UMA BREVE INTRODUÇÃO SOBRE NoSQL
<p>1ª introdução em 1998 e depois disso em 2009.</p>

### ALGUNS FATORES QUE LEVARAM À CRIAÇÃO DOS NoSQL:
- Aumento significativo no volume de dados.
- Fexibilidade no armazenamento.
- Criação de várias aplicações não convencionais.

### Principais diferenças entre SQL e NoSQL:
#### SQL:
- Escalabidade na vertical.
- Schema, existe uma regra.
- Estrutura rigida e pré-definida(moldada).
- Perfomance depende do próprio disco.
#### NoSQL:
- Escalabidade na horizontal onde existe maior desepenho na aplicação e escalabilidade infinita.
- Schema, não existe(ou qse n existe), porém existem boas práticas.
- Menos consistencia e organização dos dados. 
- Ausência(variação) da linguagem da consulta para NoSQL.
- Perfomance depende do Cluster e da latência da rede.

### Características de DB NoSQL:
- Flexibilidade.
- EScalabilidade.
- Alta performance.

### Tipos de DB NoSQL:
- Armazenamento de documento.
- Armazenamento de chave-valor -> bom desempenho em aplicações na nuvem e menor capacidade de busca.
- Armazenamento de coluna.
- Armazenamento de gráfico.

# UM POUCO SOBRE O MONGODB
### Características de MONGODB:
- Código aberto.
- Alta performance.
- Schema-free.
- Utiliza json armanezamento de dados.
- Suporte a indices.
- Auto-Sharding.
- Map-Reduce.
- GridFS.
- Rica linguagem de consulta.

### Quando usar MongoDB:
- Grande volume de dados.
- Dados não necessariamente estruturados.

### Quando não usar o MongoDb:
- Necessidade de relacionamentos/joins.

### Schema Design:
#### Emdedding:
##### Pros:
- Consulta informações em uma única query.
- Atualiza o registro em uma única operação.
##### Contras:
- Limite de 16MB por documento.

#### Referência:
##### Pros:
- Documentos pequenos.
- Não duplica informações.
- Usado quando os dados não são acessados em todas as consultas.
##### Contras:
- Duas ou mais queries na utilização do $lookup.

### Recomendações de acordo com os relacionamentos:
- One-to-one -> prefira atributos chave-valor no documento.
- One-to-few -> prefira Embedding:.
- One-to-many e Many-to-many-> prefira referência.

### Boas práticas:
- Evitar documento mto grande.
- Use nome de campos objetivos e curtos.
- Analise as suas queries utilizando explain().
- Atualize apenas os campos alterados.
- Evite negações em queries.

### Diferenças entre BSON e JSON:
#### bson:
- codificada em binário documentos semelhantes a json.
- Contém extensões q o json n tem cpmp tipo DATE e OBJECTID.