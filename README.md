#  Lista de Exercícios 3 – Desenvolvimento Web Básico

Este repositório contém a resolução completa da **Lista de Exercícios 3**, focada em HTML5 semântico, CSS básico, layout responsivo com Flexbox e Grid, e interatividade com menu responsivo.

##  Estrutura de Arquivos
 projeto-lista-exercicios-3/

├── index.html  
├── listas.html  
├── feedback.html  
├── styles.css  
├── script.js (opcional, para o menu hamburger)  
└── /assets/img (galeria de imagens)


---

## Exercícios Resolvidos

### 1. Estrutura Semântica (index.html)

Foi criado um documento HTML com:

- `<header>` contendo um `<h1>` (título da página) e um `<p>` introdutório.
- `<main>` com duas seções principais:
  - **Missão**: usando `<section>`, `<h2>` e `<p>`.
  - **Visão**: também com `<section>`, `<h2>` e `<p>`.
- `<footer>` com mensagem de copyright.

### 2. Listas e Navegação (listas.html)

- Uma **lista não ordenada** (`<ul>`) com 5 hobbies pessoais.
- Uma **lista ordenada** (`<ol>`) com passos de uma receita simples.
- Um `<nav>` com 3 links externos (`<a>`), simulando um menu de navegação.

### 3. Formulário de Feedback (feedback.html)

Um formulário HTML com:

- Campos de entrada: **Nome**, **E-mail**, **Endereço Completo**.
- Seletor para tipo de feedback.
- Campo de **texto livre** para a mensagem.
- Botão de envio (`<button type="submit">`).

### 4. Estilização com CSS (styles.css)

Foi aplicado estilo em:

- `<header>`, `<main>` e `<footer>` com:
  - `background-color`, `color`, `margin`, `padding` e `border`.
- Estilos utilizando seletores variados:
  - Todas as tags `<h2>` receberam `font-size` aumentado e `text-decoration: underline`.
  - A classe `.destaque` foi criada para aplicar `font-style: italic` e `background-color`.
  - Um ID `#importante` foi usado em um `<p>` para aplicar uma borda superior espessa.

### 5. Galeria com Grid + Flexbox (index.html)

- Criada uma **galeria de 8 imagens** com legendas, utilizando `CSS Grid` para disposição em colunas.
- O contêiner da galeria usa **Flexbox** para centralizar o conteúdo.
- Foram adicionadas **media queries** para adaptar o número de colunas em telas menores.

### 6. Menu Hamburger (index.html + styles.css [+ script.js])

- Menu hamburger funcional que:
  - Só aparece em **telas menores que 600px**.
  - Oculta o menu padrão.
  - Abre e fecha ao ser clicado, permitindo navegação em dispositivos móveis.
  - Implementado com HTML, CSS e (opcionalmente) JavaScript.

---

## 🌐 Tecnologias Utilizadas

- HTML5 (semântico)
- CSS3 (Flexbox, Grid, Media Queries)
- (Opcional) JavaScript para menu hamburger


## 📎 Como usar

1. Clone o repositório:
```bash
git clone https://github.com/EdimilsonBorges/Atividades3-mais-prati.git 
```

2. Abra os arquivos index.html, listas.html, galeria.html ou feedback.html no seu navegador.
