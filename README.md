# Quevedinha Jeans — Site da loja

Site estático (HTML + CSS + JS puro, sem framework e sem build) com foco em
vendas pelo WhatsApp. Consulte este README antes de fazer mudanças estruturais.

## Estrutura

```
quevedinha-jeans/
├── index.html        Estrutura da página (hero, categorias, produtos, FAQ...)
├── css/estilo.css    Todo o visual (cores nas variáveis :root, no topo)
├── js/script.js      Configuração + dados + lógica do site
└── README.md         Este arquivo
```

Também existe a versão em arquivo único (`quevedinha.html`), com o mesmo
conteúdo embutido — útil para testes rápidos. Para manutenção contínua,
prefira esta versão em pastas.

## Configuração rápida (tudo em js/script.js)

1. **WhatsApp** — no objeto `CONFIG`, troque `whatsapp: "5554999999999"`
   pelo número real (DDI + DDD, só dígitos). As mensagens automáticas dos
   botões também ficam ali (`msgPadrao` e `msgProduto`).
2. **Fotos** — no objeto `IMAGENS`, organizado por seção: `hero`, `sobre`,
   `categorias`, `produtos` (por id), `detalhes` (miniaturas do modal) e
   `galeria`. As URLs atuais são fotos de exemplo do Pexels (banco gratuito,
   licença livre para uso comercial). Troque cada URL pela foto real — pode
   ser link externo ou arquivo local, ex.: `"img/skinny.jpg"` (crie a pasta
   `img/` na raiz). Se um link falhar, o fundo de denim com pesponto volta
   automaticamente no lugar, sem quebrar o layout.
3. **Produtos** — no array `PRODUTOS`: nome, gênero, modelo, lavagem
   (`Clara`/`Média`/`Escura`/`Preta`), preço, tamanhos, selo, nota,
   avaliações, tecido, elasticidade e descrição. Os filtros, as contagens
   das categorias e a tabela de medidas se ajustam sozinhos.

Outros pontos editáveis: e-mail e CNPJ no rodapé do `index.html`, dados de
SEO nas tags `<meta>` e no JSON-LD do `<head>`.

## Recursos

- Botões de WhatsApp em todo o site; no produto, a mensagem já vai com o
  nome da peça e o tamanho escolhido.
- Busca + filtros (gênero, modelo, tamanho, cor, lavagem, preço).
- Modal do produto com galeria, zoom, tabela de medidas, guia de tamanhos,
  tecido e cuidados, avaliações, relacionados e compartilhamento.
- Link direto para um produto: `seusite.com#p=id-do-produto`.
- Animações de scroll, menu fixo, botão flutuante, layout responsivo.

## Publicação

Qualquer hospedagem estática serve (Hostinger, Netlify, Vercel, GitHub
Pages, Cloudflare Pages...). Basta enviar a pasta inteira mantendo a
estrutura `index.html` + `css/` + `js/` (+ `img/`, se criar). Não há etapa
de build. As fontes vêm do Google Fonts, então o site precisa de internet
para carregar tipografia e fotos externas.

## Cuidados

- Não renomeie classes do CSS usadas pelo `js/script.js` sem atualizar o JS
  (ex.: `.cat-card`, `.card-produto`, `.m-thumb`, `.chip`, `.js-wa`).
- Os ids do HTML (`gradeProdutos`, `modal`, `campoBusca`, filtros `f*`)
  são referenciados no JS — mantenha-os.
- Ao adicionar produto novo, use um `id` único em letras minúsculas com
  hífen (ele vira o link direto `#p=id`).
