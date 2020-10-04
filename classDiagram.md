```mermaid
classDiagram
    Categoria <|-- Produto
    Categoria:  +String id
    Categoria:  +String descrição
    class Produto{
      +String id
      +String categoria
      +String nome
      +String descrição
      +Integer valor
    }
```
