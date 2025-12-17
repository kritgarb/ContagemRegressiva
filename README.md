# Contagem Regressiva Elegante - 2026

Uma aplicação web elegante e interativa de contagem regressiva para o Ano Novo, desenvolvida para a **Família de Carvalho Santana**. Com animações sofisticadas, efeitos visuais impressionantes e uma contagem regressiva final emocionante nos últimos 60 segundos.

![Status](https://img.shields.io/badge/status-ativo-success)
![Versão](https://img.shields.io/badge/versão-1.0-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)

## Características

- **Contagem Regressiva em Tempo Real**: Dias, horas, minutos e segundos até o Ano Novo
- **Contagem Final Especial**: Nos últimos 60 segundos, exibição em tela cheia com números grandes
- **Efeitos de Fogos de Artifício**: Celebração visual nos últimos 10 segundos e na chegada do novo ano
- **Partículas Flutuantes**: Animação de fundo com partículas brilhantes
- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Interface Elegante**: Design sofisticado com gradientes prateados e dourados
- **Reinício Automático**: Após a celebração, recomeça automaticamente para o próximo ano

## Demonstração

A aplicação oferece três modos visuais distintos:

1. **Modo Normal**: Contagem regressiva padrão com design elegante
2. **Contagem Final**: Últimos 60 segundos em tela cheia com números grandes
3. **Celebração**: Explosão de fogos de artifício e mensagem de felicitações

## Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma dependência externa ou instalação necessária

## Instalação

1. Clone o repositório ou baixe os arquivos:
```bash
git clone https://github.com/seu-usuario/contagem-regressiva.git
```

2. Navegue até a pasta do projeto:
```bash
cd contagem-regressiva
```

3. Abra o arquivo `index.html` no seu navegador preferido

## Estrutura do Projeto

```
ContagemRegressiva/
│
├── index.html           # Estrutura HTML principal
├── README.md           # Documentação do projeto
│
└── src/
    ├── script.js       # Lógica JavaScript e animações
    └── styles.css      # Estilos CSS e animações visuais
```

## Como Usar

1. **Visualização Normal**: 
   - Abra o arquivo no navegador
   - A contagem regressiva será exibida automaticamente

2. **Modo de Teste** (para desenvolvedores):
   - Abra o arquivo [src/script.js](src/script.js)
   - Altere `const TEST_MODE = false;` para `true`
   - A contagem será ajustada para 80 segundos à frente
   - Recarregue a página para testar as animações

## Personalização

### Alterar o Título
Edite a linha 13 no [index.html](index.html):
```html
<h1>Família de Carvalho Santana</h1>
```

### Alterar Cores
Modifique as variáveis de gradiente no [src/styles.css](src/styles.css#L7):
```css
background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
```

### Ajustar Animações
Configure a velocidade das partículas em [src/styles.css](src/styles.css#L35):
```css
animation: float 20s infinite ease-in-out;
```

## Recursos Técnicos

### Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: 
  - Gradientes avançados
  - Animações keyframe
  - Backdrop filter para efeito de vidro
  - Media queries para responsividade
- **JavaScript (ES6+)**:
  - RequestAnimationFrame para animações suaves
  - Manipulação do DOM
  - Cálculos de tempo em milissegundos

### Principais Funcionalidades do Código

#### 1. Sistema de Contagem Regressiva
```javascript
function updateCountdown() {
    // Calcula o tempo restante
    // Atualiza a interface
    // Controla transições entre modos
}
```

#### 2. Animações de Fogos de Artifício
```javascript
function createMultipleFireworks(count) {
    // Cria múltiplos fogos simultâneos
    // Efeito de partículas explosivas
}
```

#### 3. Modo de Teste
```javascript
const TEST_MODE = false; // true para testar
```

## Responsividade

A aplicação se adapta automaticamente para:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Funcionalidades Futuras

- [ ] Opção de escolher data personalizada
- [ ] Sons de celebração
- [ ] Compartilhamento nas redes sociais
- [ ] Temas alternativos (cores personalizáveis)
- [ ] Mensagens personalizadas
- [ ] Salvamento de configurações no localStorage

## Problemas Conhecidos

- Em alguns navegadores antigos, os efeitos de backdrop-filter podem não funcionar
- A performance pode variar em dispositivos com hardware limitado durante a explosão de fogos

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Autor

Desenvolvido para a Família de Carvalho Santana

## Suporte

Se você encontrar algum problema ou tiver sugestões:

- Abra uma [issue](https://github.com/seu-usuario/contagem-regressiva/issues)
- Entre em contato através do email: garbkrit@gmail.com

## Agradecimentos

- Fontes do Google Fonts: Playfair Display, Great Vibes, Cormorant Garamond
- Inspiração: Celebrações de Ano Novo ao redor do mundo
- Comunidade open source

---

Se você gostou deste projeto, considere dar uma estrela!

**Feliz Ano Novo!**
