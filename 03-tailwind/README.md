03-tailwind

Versão usando Tailwind CSS (utilitários CSS; customizações e tokens no tailwind.config.js; classes utilitárias aplicadas diretamente nos componentes JSX).

Como rodar:

npm install

npm run dev

Observação: caso altere tailwind.config.js, reinicie o servidor dev para que as alterações sejam aplicadas corretamente.

Includes:

Navbar

ProductCard

Button

Skeleton

Breakpoints:

1 col (<=480px)

2 col (481–768px)

3 col (769–1024px)

4 col (>=1025px)

Dark mode:

Configurado via darkMode: 'class' no tailwind.config.js.

O projeto persiste a preferência em localStorage e adiciona/remove a classe dark no html para ativar o modo escuro.

Tokens / Customização:

Cores, espaçamentos e outras tokens estão centralizados em tailwind.config.js dentro de theme.extend.

Se você também usa variáveis CSS, pode encontrá-las em src/styles/tokens.css (opcional).

Observações:

Tailwind facilita variações responsivas diretamente nas classes (ex.: sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4) — confira a correspondência entre os breakpoints do projeto e as classes utilitárias.

Para alterar a cor de um componente globalmente (ex.: primary), edite tailwind.config.js ou a variável CSS mapeada.