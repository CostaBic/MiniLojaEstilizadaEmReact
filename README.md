# 🛍️ Mini Loja — Estilização em React

Projeto desenvolvido para demonstrar **quatro diferentes abordagens de estilização em aplicações React**, aplicadas sobre a mesma interface de uma mini loja responsiva.

---

## 🧩 Visão Geral

O objetivo é apresentar como diferentes técnicas de estilização impactam a organização, escalabilidade e manutenção de um mesmo projeto.  
Cada pasta contém uma implementação idêntica em funcionalidade e layout, variando apenas na forma como os estilos são aplicados:

1. **CSS Global**  
2. **CSS Modules**  
3. **Tailwind CSS**  
4. **styled-components**

---

## 🖥️ Funcionalidades da Interface

### Navbar
- Fixa no topo da página  
- Logo da loja  
- Alternância entre **modo claro/escuro** (com persistência no localStorage)  
- Badge de carrinho exibindo número de itens  

### Grid de Produtos (responsivo)

| Largura da Tela | Colunas |
|------------------|---------|
| ≤ 480px          | 1 col   |
| 481–768px        | 2 cols  |
| 769–1024px       | 3 cols  |
| ≥ 1025px         | 4 cols  |

### Card de Produto
- Imagem **1:1** com placeholder (lazy loading)  
- Título com **ellipsis** (até 2 linhas)  
- Preço formatado  
- Avaliação por estrelas (★)  
- Tag (“Novo” ou “Promo”)  
- Botão **“Adicionar”** com variantes:
  - **Solid**
  - **Outline**
  - **Ghost**

---

## ⚙️ Interações e Estados

- **Hover:** elevação/sombra suave  
- **Focus:** foco visível e acessível  
- **Disabled:** aparência desativada consistente  
- **Loading:** exibição de `Skeleton` (sem layout shift)  
- **Dark mode:** afeta cores, sombras e bordas  

---

## ♿ Acessibilidade

- Navegação completa via teclado  
- Atributos `aria-*` aplicados conforme necessário  
- Contraste mínimo **4.5:1**  
- Transições suaves (`transform`, `opacity`) entre **150–250ms**

---

## 🧱 Componentes Principais

- `Navbar`  
- `ProductCard`  
- `Button`  
- `Skeleton`

Esses componentes são idênticos em estrutura e comportamento, mudando apenas a estratégia de estilização conforme a pasta.

---

## 🧮 Dados dos Produtos

A grade exibe **6 produtos estáticos** com os seguintes campos:

| Campo | Descrição |
|--------|------------|
| `id` | Identificador único |
| `title` | Nome do produto (até 2 linhas) |
| `price` | Valor formatado |
| `rating` | Avaliação em estrelas |
| `tag` | “Novo” ou “Promo” |
| `image` | URL da imagem (com lazy loading) |

---



## 📋 Critérios Técnicos

- Breakpoints definidos conforme tabela acima  
- Dark mode com persistência local  
- Focus ring visível  
- Skeleton sem deslocamento de layout  
- Botões com variantes consistentes entre temas  
- Organização clara e uso de tokens (cores, espaçamentos, bordas, sombras)

---

## 🚀 Como Executar

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/SEU-USUARIO/mini-loja-react.git
cd mini-loja-react
```

### 2️⃣ Acessar a Versão Desejada

Por exemplo, para a versão com Tailwind:

```bash
cd 03-tailwind
```

### 3️⃣ Instalar as Dependências

```bash
npm install
```

ou

```bash
yarn
```

### 4️⃣ Iniciar o Servidor

```bash
npm run dev
```

O projeto rodará em [http://localhost:5173](http://localhost:5173) (ou outra porta disponível).

---

## 💡 Observações

- Cada pasta é independente — use apenas a técnica correspondente em cada uma.  
- Utilize tokens de design para manter consistência entre temas e componentes.  
- As animações devem ser leves, priorizando acessibilidade e performance.  
- O modo escuro deve ser mantido entre recarregamentos.  

---

**Mini Loja — demonstração de diferentes técnicas de estilização em aplicações React.**  
💻 Projeto voltado à prática de UI moderna, responsiva e acessível.
