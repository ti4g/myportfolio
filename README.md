# Portfólio — Tiago Quixaba

Portfólio profissional feito com **React** + **Tailwind CSS** + **Vite**.

## Como rodar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Estrutura

```
src/
├── App.jsx                     # Componente principal
├── main.jsx                    # Entry point
├── index.css                   # Estilos globais + Tailwind
└── components/
    ├── Navbar.jsx              # Navegação fixa
    ├── Hero.jsx                # Seção hero com CTA
    ├── About.jsx               # Sobre mim + stats
    ├── Skills.jsx              # Cards de habilidades
    ├── Projects.jsx            # Grid de projetos com preview
    ├── Experience.jsx          # Timeline profissional
    ├── Education.jsx           # Formação + cursos
    ├── Contact.jsx             # Links de contato
    ├── Footer.jsx              # Rodapé
    └── RevealOnScroll.jsx      # Utilitário de animação scroll
```

## Deploy no GitHub Pages

```bash
npm run build
# O output ficará em dist/
# Suba para o branch gh-pages ou configure no repo
```

## Tecnologias

- React 18
- Tailwind CSS 3
- Vite 6
- Instrument Serif + DM Sans + JetBrains Mono
