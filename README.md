# 📝 Lista de Compras

Uma aplicação web simples e intuitiva para gerenciar listas de compras em tempo real. Construída com **HTML**, **CSS** e **JavaScript vanilla**, sem dependências externas.

## ✨ Recursos

- ✅ **Adicionar itens** - Insira novos itens de forma rápida e fácil
- ✅ **Marcar como concluído** - Checkboxes para indicar itens já comprados
- ✅ **Deletar itens** - Remova itens da lista quando necessário
- ✅ **Reordenação automática** - Itens marcados como concluído movem-se para o final
- ✅ **Interface responsiva** - Design limpo e moderno com suporte a diferentes tamanhos de tela
- ✅ **Sem dependências** - Funciona com JavaScript vanilla, sem bibliotecas externas

## 🚀 Como Começar

### Pré-requisitos

Você apenas precisa de um navegador web moderno. Nenhuma instalação ou build process necessários!

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio-url>
cd lista-de-compras
```

2. Abra o arquivo `index.html` no seu navegador:
   - **Opção 1:** Duplo clique no arquivo `index.html`
   - **Opção 2:** Use um servidor local (recomendado):
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Ou com Node.js
     npx http-server
     ```
   - Então acesse `http://localhost:8000`

### Uso

1. **Adicionar um item:**
   - Digite o nome do item no campo "Adicione um novo item"
   - Clique no botão "Adicionar item" ou pressione Enter

2. **Marcar como comprado:**
   - Clique no checkbox ao lado do item
   - O item será movido automaticamente para o final da lista

3. **Deletar um item:**
   - Clique no ícone de lixeira (🗑️) ao lado do item
   - O item será removido imediatamente

## 📂 Estrutura do Projeto

```
lista-de-compras/
├── index.html          # Estrutura HTML da aplicação
├── scripts.js          # Lógica JavaScript
├── assets/
│   ├── logo.png        # Logo do projeto
│   └── icons/          # Ícones SVG (lixeira, navegação, etc)
├── styles/
│   ├── global.css      # Estilos globais e design system
│   └── index.css       # Estilos específicos
└── README.md           # Este arquivo
```

## 🎨 Design System

O projeto utiliza um design system moderno com variáveis CSS:

- **Cores primárias:** Rosa (#CA3884) para ações, cinza para background
- **Fonte:** Inter (importada do Google Fonts)
- **Tipografia:** Variáveis de escala consistentes (título, labels, parágrafos)
- **Espaçamento:** Sistema de 4px base para consistência

## 💻 Recursos Técnicos

### JavaScript

- Manipulação do DOM com seletores CSS
- Event Listeners para `submit`, `click` e `change`
- Criação dinâmica de elementos
- Validação de entrada (previne itens vazios)

### CSS

- Grid e Flexbox para layouts responsivos
- Variáveis CSS customizadas (custom properties)
- Pseudo-classes (`:hover`, `:focus`)
- Media queries para responsividade

### HTML

- Semântica HTML5
- Acessibilidade básica (labels, alt text)
- Integração com Google Fonts

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você gostaria de melhorar este projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Ideias para Melhorias

- Persistência de dados (LocalStorage)
- Categorias ou tags para itens
- Filtros (mostrar todos, apenas pendentes, apenas concluídos)
- Modo escuro
- Edição de itens existentes
- Busca/filtro de itens
- Exportação da lista (PDF, CSV)

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

Desenvolvido como projeto de aprendizado em JavaScript.

---

**Aproveite sua lista de compras! 🛒**
