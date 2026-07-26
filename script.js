/* ============================================================
   QUEVEDINHA JEANS — script.js
   1. CONFIG   → número do WhatsApp, marca e mensagens
   2. IMAGENS  → todas as fotos do site (troque as URLs)
   3. PRODUTOS → nomes, preços, tamanhos e descrições
   Depois disso vem a lógica do site (não precisa mexer).
   ============================================================ */

/* =====================================================================
   CONFIGURAÇÃO DA LOJA — EDITE AQUI
   ===================================================================== */
const CONFIG = {
  // Número do WhatsApp com DDI + DDD, apenas dígitos. Ex.: 5554999999999
  whatsapp: "5554999999999",
  marca: "Quevedinha Jeans",
  // Mensagem dos botões gerais de WhatsApp
  msgPadrao: "Olá! Gostaria de conhecer as calças jeans disponíveis.",
  // Mensagem por produto — [PRODUTO] é trocado pelo nome; o tamanho entra se for escolhido
  msgProduto: "Olá! Tenho interesse na calça jeans [PRODUTO]. Gostaria de mais informações."
};

/* =====================================================================
   IMAGENS — troque qualquer URL pela sua foto real
   (as atuais são fotos de exemplo do Pexels, banco de imagens gratuito)
   ===================================================================== */
const IMAGENS = {
  hero: "https://images.pexels.com/photos/2244951/pexels-photo-2244951.jpeg?auto=compress&cs=tinysrgb&w=1600",
  sobre: "https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1000",
  categorias: {
    "Skinny": "https://images.pexels.com/photos/17503403/pexels-photo-17503403.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Mom": "https://images.pexels.com/photos/17751918/pexels-photo-17751918.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Wide Leg": "https://images.pexels.com/photos/36158507/pexels-photo-36158507.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Flare": "https://images.pexels.com/photos/5627/vintage-jeans-zara-boyfriends.jpg?auto=compress&cs=tinysrgb&w=800",
    "Cargo": "https://images.pexels.com/photos/4258605/pexels-photo-4258605.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Reta": "https://images.pexels.com/photos/30710244/pexels-photo-30710244.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Boot Cut": "https://images.pexels.com/photos/15869823/pexels-photo-15869823.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Masculino": "https://images.pexels.com/photos/2244954/pexels-photo-2244954.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Feminino": "https://images.pexels.com/photos/6068963/pexels-photo-6068963.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  produtos: {
    "skinny-essential": "https://images.pexels.com/photos/17503403/pexels-photo-17503403.jpeg?auto=compress&cs=tinysrgb&w=900",
    "mom-vintage": "https://images.pexels.com/photos/17751918/pexels-photo-17751918.jpeg?auto=compress&cs=tinysrgb&w=900",
    "wide-leg-fluida": "https://images.pexels.com/photos/36158507/pexels-photo-36158507.jpeg?auto=compress&cs=tinysrgb&w=900",
    "flare-setentinha": "https://images.pexels.com/photos/5627/vintage-jeans-zara-boyfriends.jpg?auto=compress&cs=tinysrgb&w=900",
    "cargo-utility": "https://images.pexels.com/photos/4258605/pexels-photo-4258605.jpeg?auto=compress&cs=tinysrgb&w=900",
    "reta-classica": "https://images.pexels.com/photos/30710244/pexels-photo-30710244.jpeg?auto=compress&cs=tinysrgb&w=900",
    "boot-cut-country": "https://images.pexels.com/photos/15869823/pexels-photo-15869823.jpeg?auto=compress&cs=tinysrgb&w=900",
    "skinny-black": "https://images.pexels.com/photos/30407915/pexels-photo-30407915.jpeg?auto=compress&cs=tinysrgb&w=900",
    "mom-cropped": "https://images.pexels.com/photos/19093048/pexels-photo-19093048.jpeg?auto=compress&cs=tinysrgb&w=900",
    "wide-leg-black": "https://images.pexels.com/photos/5196914/pexels-photo-5196914.jpeg?auto=compress&cs=tinysrgb&w=900",
    "reta-slim": "https://images.pexels.com/photos/30710032/pexels-photo-30710032.jpeg?auto=compress&cs=tinysrgb&w=900",
    "flare-black": "https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  /* fotos de detalhe (costura, zíper, tecido) usadas nas miniaturas do modal */
  detalhes: [
    "https://images.pexels.com/photos/10133278/pexels-photo-10133278.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/206365/pexels-photo-206365.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/14840593/pexels-photo-14840593.jpeg?auto=compress&cs=tinysrgb&w=700"
  ],
  galeria: [
    "https://images.pexels.com/photos/1365363/pexels-photo-1365363.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/27348257/pexels-photo-27348257.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/19093048/pexels-photo-19093048.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/9775671/pexels-photo-9775671.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/28900187/pexels-photo-28900187.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/15420244/pexels-photo-15420244.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/2229712/pexels-photo-2229712.jpeg?auto=compress&cs=tinysrgb&w=700",
    "https://images.pexels.com/photos/20451857/pexels-photo-20451857.jpeg?auto=compress&cs=tinysrgb&w=700"
  ]
};

/* =====================================================================
   PRODUTOS — edite nomes, preços, tamanhos e descrições à vontade
   lavagem: "Clara" | "Média" | "Escura" | "Preta"
   ===================================================================== */
const CUIDADOS = ["Lavar do avesso, com água fria", "Não usar alvejante", "Secar à sombra", "Passar em temperatura média"];
const TF  = [34,36,38,40,42,44];
const TF7 = [34,36,38,40,42,44,46];
const TM  = [36,38,40,42,44,46,48];
const TM6 = [38,40,42,44,46,48];
const TEC_A = "92% algodão · 6% poliéster · 2% elastano";
const TEC_B = "99% algodão · 1% elastano";
const TEC_C = "98% algodão · 2% elastano";

const PRODUTOS = [
  {id:"skinny-essential", nome:"Skinny Essential", genero:"Feminino", modelo:"Skinny", lavagem:"Média", preco:189.90, tamanhos:TF, selo:"Mais vendida", nota:4.9, avaliacoes:312, tecido:TEC_A, elast:"Alta",
   desc:"Justa na medida certa: acompanha o corpo sem apertar, com cintura média e elastano na dose ideal para o dia inteiro."},
  {id:"mom-vintage", nome:"Mom Vintage", genero:"Feminino", modelo:"Mom", lavagem:"Clara", preco:199.90, tamanhos:TF, selo:"Novidade", nota:4.8, avaliacoes:187, tecido:TEC_B, elast:"Média",
   desc:"Cintura alta e pernas levemente afuniladas, com lavagem clara de leve desgaste. O clássico anos 90 que virou uniforme."},
  {id:"wide-leg-fluida", nome:"Wide Leg Fluida", genero:"Feminino", modelo:"Wide Leg", lavagem:"Escura", preco:219.90, tamanhos:TF7, selo:"", nota:4.9, avaliacoes:246, tecido:TEC_C, elast:"Leve",
   desc:"Pernas amplas que caem retas do quadril, alongando a silhueta. Conforto de alfaiataria com alma de jeans."},
  {id:"flare-setentinha", nome:"Flare Setentinha", genero:"Feminino", modelo:"Flare", lavagem:"Média", preco:209.90, tamanhos:TF, selo:"", nota:4.8, avaliacoes:158, tecido:TEC_A, elast:"Alta",
   desc:"Ajustada até o joelho e aberta na barra, alonga as pernas e valoriza qualquer sapato — do tênis ao salto."},
  {id:"cargo-utility", nome:"Cargo Utility", genero:"Masculino", modelo:"Cargo", lavagem:"Escura", preco:229.90, tamanhos:TM6, selo:"Novidade", nota:4.7, avaliacoes:96, tecido:"100% algodão", elast:"Sem elastano",
   desc:"Bolsos utilitários, tecido encorpado e modelagem reta. Feita para quem precisa de um jeans que aguenta o tranco."},
  {id:"reta-classica", nome:"Reta Clássica", genero:"Masculino", modelo:"Reta", lavagem:"Média", preco:179.90, tamanhos:TM, selo:"Mais vendida", nota:4.9, avaliacoes:421, tecido:TEC_B, elast:"Média",
   desc:"O corte que nunca sai de moda: reto do quadril à barra, confortável e fácil de combinar com tudo."},
  {id:"boot-cut-country", nome:"Boot Cut Country", genero:"Masculino", modelo:"Boot Cut", lavagem:"Escura", preco:199.90, tamanhos:TM6, selo:"", nota:4.8, avaliacoes:133, tecido:TEC_B, elast:"Média",
   desc:"Ajuste na coxa e leve abertura na barra para vestir por cima da bota. Tradição com caimento moderno."},
  {id:"skinny-black", nome:"Skinny Black", genero:"Masculino", modelo:"Skinny", lavagem:"Preta", preco:189.90, tamanhos:[36,38,40,42,44,46], selo:"", nota:4.7, avaliacoes:174, tecido:TEC_A, elast:"Alta",
   desc:"Preto profundo que não desbota fácil, com stretch para acompanhar o movimento. Do trabalho ao rolê."},
  {id:"mom-cropped", nome:"Mom Cropped", genero:"Feminino", modelo:"Mom", lavagem:"Média", preco:194.90, tamanhos:TF, selo:"", nota:4.8, avaliacoes:205, tecido:TEC_B, elast:"Média",
   desc:"Modelagem mom com barra cropped na altura do tornozelo. Perfeita para mostrar o tênis ou a sandália."},
  {id:"wide-leg-black", nome:"Wide Leg Black", genero:"Feminino", modelo:"Wide Leg", lavagem:"Preta", preco:224.90, tamanhos:TF7, selo:"Últimas unidades", nota:4.9, avaliacoes:141, tecido:TEC_C, elast:"Leve",
   desc:"Amplitude máxima em preto intenso: uma peça statement que funciona do escritório ao jantar."},
  {id:"reta-slim", nome:"Reta Slim", genero:"Masculino", modelo:"Reta", lavagem:"Clara", preco:184.90, tamanhos:TM, selo:"", nota:4.6, avaliacoes:88, tecido:TEC_B, elast:"Média",
   desc:"Reta com quadril ajustado e lavagem clara: leve, versátil e ideal para os dias quentes."},
  {id:"flare-black", nome:"Flare Black", genero:"Feminino", modelo:"Flare", lavagem:"Preta", preco:214.90, tamanhos:TF, selo:"", nota:4.8, avaliacoes:119, tecido:TEC_A, elast:"Alta",
   desc:"Flare em preto uniforme, cintura alta e caimento fluido. Elegância sem esforço."}
];

const AVALIACOES = [
  {n:"Mariana F.", nota:5,   t:"Chegou super rápido e o caimento é exatamente como esperava. Já quero outra cor."},
  {n:"Lucas P.",   nota:5,   t:"Tecido de qualidade e costura impecável. O atendimento pelo WhatsApp foi rapidíssimo."},
  {n:"Aline S.",   nota:4.5, t:"Precisei trocar o tamanho e foi muito fácil. A calça veste muito bem."},
  {n:"Bruno C.",   nota:5,   t:"Melhor custo-benefício que já encontrei em jeans. Recomendo demais."},
  {n:"Paula V.",   nota:5,   t:"Confortável do primeiro uso ao fim do dia. Não deformou na lavagem."},
  {n:"Diego M.",   nota:4.5, t:"Modelagem excelente, não aperta na cintura. Compraria de novo."}
];

/* =====================================================================
   A PARTIR DAQUI É A LÓGICA DO SITE — normalmente não precisa mexer
   ===================================================================== */
const WASH = {"Clara":"wash-clara","Média":"wash-media","Escura":"wash-escura","Preta":"wash-preta"};
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const fmt = v => v.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
const notaFmt = n => n.toFixed(1).replace(".", ",");
const corDe = p => p.lavagem === "Preta" ? "Preto" : "Azul";
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const waLink = msg => "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg);
const msgProduto = (p, tam) => CONFIG.msgProduto.replace("[PRODUTO]", p.nome) + (tam ? " Tamanho " + tam + "." : "");

/* Insere uma foto num placeholder; se o link falhar, o denim volta */
const imgTag = (u, alt) => u ? '<img src="' + u + '" alt="' + (alt || "") + '" loading="lazy" onerror="this.parentElement.classList.remove(&quot;ph--limpo&quot;);this.remove()">' : "";
function porFoto(el, url, alt) {
  if (!el || !url) return;
  el.classList.add("ph--limpo");
  el.insertAdjacentHTML("beforeend", imgTag(url, alt));
}

/* Links gerais de WhatsApp */
$$(".js-wa").forEach(a => a.href = waLink(CONFIG.msgPadrao));

/* ---------- Animações de entrada (scroll) ---------- */
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add("no-ar"); observador.unobserve(e.target); } });
}, {threshold: .12});
const observar = els => els.forEach(el => observador.observe(el));
observar($$(".reveal"));

/* ---------- Header ---------- */
const header = $("#header");
const aoRolar = () => header.classList.toggle("rolado", window.scrollY > 30);
window.addEventListener("scroll", aoRolar, {passive:true});
aoRolar();

/* Menu mobile */
const drawer = $("#drawer");
const abrirDrawer = v => {
  drawer.classList.toggle("aberto", v);
  drawer.setAttribute("aria-hidden", String(!v));
  document.body.classList.toggle("travado", v);
};
$("#btnAbrirMenu").addEventListener("click", () => abrirDrawer(true));
$("#btnFecharMenu").addEventListener("click", () => abrirDrawer(false));
drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => abrirDrawer(false)));

/* Lupa do header leva à busca */
$("#btnBuscaHeader").addEventListener("click", () => {
  $("#filtros").scrollIntoView({behavior:"smooth", block:"start"});
  setTimeout(() => $("#campoBusca").focus({preventScroll:true}), 500);
});

/* ---------- Filtros ---------- */
const campoBusca = $("#campoBusca");
const fGenero = $("#fGenero"), fModelo = $("#fModelo"), fTamanho = $("#fTamanho");
const fCor = $("#fCor"), fLavagem = $("#fLavagem"), fPreco = $("#fPreco");
const grade = $("#gradeProdutos");

const ORDEM_MODELOS = ["Skinny","Mom","Wide Leg","Flare","Cargo","Reta","Boot Cut"];
ORDEM_MODELOS.filter(m => PRODUTOS.some(p => p.modelo === m))
  .forEach(m => fModelo.insertAdjacentHTML("beforeend", "<option>" + m + "</option>"));
[...new Set(PRODUTOS.flatMap(p => p.tamanhos))].sort((a,b) => a-b)
  .forEach(t => fTamanho.insertAdjacentHTML("beforeend", "<option>" + t + "</option>"));

const filtroAtivo = () =>
  campoBusca.value.trim() !== "" ||
  [fGenero,fModelo,fTamanho,fCor,fLavagem,fPreco].some(s => s.value !== "");

function filtrar() {
  const q = norm(campoBusca.value.trim());
  return PRODUTOS.filter(p => {
    if (q && !norm(p.nome + " " + p.modelo + " " + p.genero).includes(q)) return false;
    if (fGenero.value && p.genero !== fGenero.value) return false;
    if (fModelo.value && p.modelo !== fModelo.value) return false;
    if (fTamanho.value && !p.tamanhos.includes(+fTamanho.value)) return false;
    if (fCor.value && corDe(p) !== fCor.value) return false;
    if (fLavagem.value && p.lavagem !== fLavagem.value) return false;
    if (fPreco.value === "a" && p.preco > 189.9) return false;
    if (fPreco.value === "b" && (p.preco < 190 || p.preco > 209.9)) return false;
    if (fPreco.value === "c" && p.preco < 210) return false;
    return true;
  });
}

function cardHTML(p, i) {
  const selo = p.selo ? '<span class="cp-selo' + (p.lavagem === "Preta" ? " cp-selo--escuro" : "") + '">' + p.selo + "</span>" : "";
  return '<article class="card-produto reveal" data-id="' + p.id + '" tabindex="0" role="button" aria-label="Ver detalhes de ' + p.nome + '" style="--d:' + (i % 4) * .06 + 's">' +
    '<div class="cp-media">' + selo +
      '<div class="cp-art ph ' + WASH[p.lavagem] + (IMAGENS.produtos[p.id] ? " ph--limpo" : "") + '">' + imgTag(IMAGENS.produtos[p.id], "Calça jeans " + p.nome) + "</div>" +
      '<span class="cp-ver">Ver detalhes</span>' +
    "</div>" +
    '<div class="cp-corpo">' +
      '<h3 class="cp-nome">' + p.nome + "</h3>" +
      '<div class="avaliacao"><span class="estrelas" style="--nota:' + (p.nota / 5 * 100) + '%"><i></i></span><span>' + notaFmt(p.nota) + " (" + p.avaliacoes + ")</span></div>" +
      '<div class="cp-precos"><span class="cp-preco">' + fmt(p.preco) + '</span><span class="cp-parcela">10x de ' + fmt(p.preco / 10) + "</span></div>" +
      '<a class="btn btn-wa js-wa-item" href="' + waLink(msgProduto(p)) + '" target="_blank" rel="noopener"><svg width="17" height="17"><use href="#i-wa"/></svg> Comprar pelo WhatsApp</a>' +
    "</div></article>";
}

function aplicarFiltros() {
  const lista = filtrar();
  $("#qtdResultados").textContent = lista.length + (lista.length === 1 ? " modelo encontrado" : " modelos encontrados");
  $("#btnLimpar").classList.toggle("visivel", filtroAtivo());
  if (!lista.length) {
    grade.innerHTML = '<div class="sem-resultado"><b>Nenhuma peça por aqui...</b>Tente ajustar os filtros — ou fale com a gente no WhatsApp que encontramos o modelo ideal para você.<br><br><button class="btn btn-primario js-limpar">Limpar filtros</button></div>';
    return;
  }
  grade.innerHTML = lista.map(cardHTML).join("");
  observar(grade.querySelectorAll(".reveal"));
}

function limparFiltros() {
  campoBusca.value = "";
  [fGenero,fModelo,fTamanho,fCor,fLavagem,fPreco].forEach(s => s.value = "");
  aplicarFiltros();
}

campoBusca.addEventListener("input", aplicarFiltros);
[fGenero,fModelo,fTamanho,fCor,fLavagem,fPreco].forEach(s => s.addEventListener("change", aplicarFiltros));
$("#btnLimpar").addEventListener("click", limparFiltros);
$("#filtrosToggle").addEventListener("click", () => $("#filtrosSelects").classList.toggle("aberto"));

/* Clique nos cards: botão de compra segue para o WhatsApp; o resto abre o modal */
grade.addEventListener("click", e => {
  if (e.target.closest(".js-wa-item")) return;
  if (e.target.closest(".js-limpar")) { limparFiltros(); return; }
  const card = e.target.closest(".card-produto");
  if (card) abrirModal(card.dataset.id);
});
grade.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;
  const card = e.target.closest(".card-produto");
  if (card) abrirModal(card.dataset.id);
});

/* ---------- Categorias ---------- */
$$(".cat-card").forEach(card => {
  const [tipo, valor] = card.dataset.filtro.split(":");
  const n = PRODUTOS.filter(p => (tipo === "modelo" ? p.modelo : p.genero) === valor).length;
  card.querySelector(".cat-qtd").textContent = n + (n === 1 ? " modelo" : " modelos");
  card.addEventListener("click", () => {
    limparFiltros();
    (tipo === "modelo" ? fModelo : fGenero).value = valor;
    aplicarFiltros();
    $("#filtrosSelects").classList.add("aberto");
    $("#filtros").scrollIntoView({behavior:"smooth", block:"start"});
  });
});

/* ---------- Modal do produto ---------- */
const modal = $("#modal");
let prodAtual = null, tamSel = null;

const medida = (genero, t) => {
  const b = genero === "Feminino" ? {t0:34, c:62, q:88, l:100} : {t0:36, c:78, q:98, l:104};
  const k = (t - b.t0) / 2;
  return {c: b.c + 4*k, q: b.q + 4*k, l: b.l + k};
};

function atualizarCTA() {
  $("#mCta").href = waLink(msgProduto(prodAtual, tamSel));
}

function abrirModal(id) {
  const p = PRODUTOS.find(x => x.id === id);
  if (!p) return;
  prodAtual = p; tamSel = null;
  const wp = WASH[p.lavagem];

  /* galeria: foto principal + fotos de detalhe (ou denim, se não houver foto) */
  const fotoP = IMAGENS.produtos[p.id];
  const idx = PRODUTOS.indexOf(p);
  $("#mArt").className = "m-art ph " + wp + (fotoP ? " ph--limpo" : "");
  $("#mArt").innerHTML = imgTag(fotoP, "Calça jeans " + p.nome);
  if (fotoP) {
    const fotos = [fotoP,
      IMAGENS.detalhes[idx % IMAGENS.detalhes.length],
      IMAGENS.detalhes[(idx + 1) % IMAGENS.detalhes.length],
      IMAGENS.detalhes[(idx + 2) % IMAGENS.detalhes.length]];
    $("#mThumbs").innerHTML = fotos.map((u, i) =>
      '<button class="m-thumb' + (i === 0 ? " ativo" : "") + '" data-src="' + u + '" aria-label="Foto ' + (i+1) + '"><div>' + imgTag(u, p.nome + " — foto " + (i+1)) + "</div></button>").join("");
  } else {
    $("#mThumbs").innerHTML = ["", "var-b", "var-c", "var-d"].map((v, i) =>
      '<button class="m-thumb' + (i === 0 ? " ativo" : "") + '" data-var="' + v + '" aria-label="Foto ' + (i+1) + '"><div class="' + wp + " " + v + '"></div></button>').join("");
  }

  /* infos */
  $("#mSelo").textContent = p.selo || "Coleção Quevedinha";
  $("#mNome").textContent = p.nome;
  $("#mEstrelas").style.setProperty("--nota", (p.nota / 5 * 100) + "%");
  $("#mAvalTexto").textContent = notaFmt(p.nota) + " · " + p.avaliacoes + " avaliações";
  $("#mPreco").textContent = fmt(p.preco);
  $("#mParcela").textContent = "em até 10x de " + fmt(p.preco / 10) + " sem juros";
  $("#mChips").innerHTML = p.tamanhos.map(t => '<button class="chip" data-tam="' + t + '">' + t + "</button>").join("");
  $("#mMeta").innerHTML =
    "<div><dt>Modelo</dt><dd>" + p.modelo + "</dd></div>" +
    "<div><dt>Gênero</dt><dd>" + p.genero + "</dd></div>" +
    "<div><dt>Lavagem</dt><dd>" + p.lavagem + "</dd></div>" +
    "<div><dt>Cor</dt><dd>" + corDe(p) + "</dd></div>";
  atualizarCTA();

  /* blocos */
  $("#mDescricao").textContent = p.desc;
  $("#mMedidas").innerHTML =
    '<table class="tabela-medidas"><thead><tr><th>Tam.</th><th>Cintura</th><th>Quadril</th><th>Comprimento</th></tr></thead><tbody>' +
    p.tamanhos.map(t => { const m = medida(p.genero, t);
      return "<tr><td>" + t + "</td><td>" + m.c + " cm</td><td>" + m.q + " cm</td><td>" + m.l + " cm</td></tr>"; }).join("") +
    '</tbody></table><p style="margin-top:10px;font-size:12.5px">Medidas aproximadas da peça, em centímetros. Podem variar até 2 cm.</p>';
  $("#mTecido").innerHTML =
    "<ul><li><strong>Composição:</strong> " + p.tecido + "</li>" +
    "<li><strong>Elasticidade:</strong> " + p.elast + "</li>" +
    CUIDADOS.map(c => "<li>" + c + "</li>").join("") + "</ul>";
  $("#mReviews").innerHTML = [0,1,2].map(i => {
    const r = AVALIACOES[(PRODUTOS.indexOf(p) + i) % AVALIACOES.length];
    return '<div class="review"><div class="review-topo"><b>' + r.n + '</b><span class="estrelas" style="--nota:' + (r.nota / 5 * 100) + '%"><i></i></span></div><p>' + r.t + "</p></div>";
  }).join("");

  /* relacionados */
  let rel = PRODUTOS.filter(x => x.id !== p.id && (x.modelo === p.modelo || x.lavagem === p.lavagem));
  PRODUTOS.forEach(x => { if (rel.length < 4 && x.id !== p.id && !rel.includes(x)) rel.push(x); });
  $("#mRelacionados").innerHTML = rel.slice(0, 4).map(x =>
    '<button class="rel-card" data-rel="' + x.id + '"><span class="rel-media"><div class="' + WASH[x.lavagem] + (IMAGENS.produtos[x.id] ? " ph--limpo" : "") + '">' + imgTag(IMAGENS.produtos[x.id], x.nome) + "</div></span>" +
    '<span class="rel-corpo" style="display:block"><b>' + x.nome + "</b><span>" + fmt(x.preco) + "</span></span></button>").join("");

  /* estado inicial dos blocos: só a descrição aberta */
  modal.querySelectorAll(".m-bloco").forEach((b, i) => i === 0 ? b.setAttribute("open", "") : b.removeAttribute("open"));

  modal.classList.add("aberto");
  document.body.classList.add("travado");
  modal.querySelector(".modal-painel").scrollTop = 0;
  try { history.replaceState(null, "", "#p=" + p.id); } catch (e) {}
  $("#modalFechar").focus();
}

function fecharModal() {
  modal.classList.remove("aberto");
  document.body.classList.remove("travado");
  try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
}

$("#modalFechar").addEventListener("click", fecharModal);
$("#modalFundo").addEventListener("click", fecharModal);
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (modal.classList.contains("aberto")) fecharModal();
  else if (drawer.classList.contains("aberto")) abrirDrawer(false);
});

/* trocar miniatura, escolher tamanho e abrir relacionados (delegação) */
modal.addEventListener("click", e => {
  const thumb = e.target.closest(".m-thumb");
  if (thumb) {
    modal.querySelectorAll(".m-thumb").forEach(t => t.classList.remove("ativo"));
    thumb.classList.add("ativo");
    if (thumb.dataset.src) {
      const img = $("#mArt").querySelector("img");
      if (img) img.src = thumb.dataset.src;
    } else {
      $("#mArt").className = "m-art ph " + WASH[prodAtual.lavagem] + " " + (thumb.dataset.var || "");
    }
    return;
  }
  const chip = e.target.closest(".chip");
  if (chip) {
    const t = +chip.dataset.tam;
    tamSel = (tamSel === t) ? null : t;
    modal.querySelectorAll(".chip").forEach(c => c.classList.toggle("ativo", +c.dataset.tam === tamSel));
    atualizarCTA();
    return;
  }
  const rel = e.target.closest(".rel-card");
  if (rel) abrirModal(rel.dataset.rel);
});

/* zoom na foto principal */
const mPrincipal = $("#mPrincipal");
mPrincipal.addEventListener("mousemove", e => {
  const r = mPrincipal.getBoundingClientRect();
  mPrincipal.querySelector(".m-art").style.setProperty("--zx", ((e.clientX - r.left) / r.width * 100) + "%");
  mPrincipal.querySelector(".m-art").style.setProperty("--zy", ((e.clientY - r.top) / r.height * 100) + "%");
});
mPrincipal.addEventListener("mouseleave", () => {
  const art = mPrincipal.querySelector(".m-art");
  art.style.setProperty("--zx", "50%"); art.style.setProperty("--zy", "50%");
});

/* compartilhamento */
const linkProduto = () => location.href.split("#")[0] + "#p=" + prodAtual.id;
$("#mShareWa").addEventListener("click", () => {
  const texto = "Olha essa calça da " + CONFIG.marca + ": " + prodAtual.nome + " — " + linkProduto();
  window.open("https://wa.me/?text=" + encodeURIComponent(texto), "_blank", "noopener");
});
$("#mShareCopiar").addEventListener("click", function () {
  const btn = this;
  const feito = () => {
    const original = btn.innerHTML;
    btn.innerHTML = "Link copiado!";
    setTimeout(() => { btn.innerHTML = original; }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(linkProduto()).then(feito).catch(feito);
  } else {
    const tmp = document.createElement("textarea");
    tmp.value = linkProduto();
    document.body.appendChild(tmp); tmp.select();
    try { document.execCommand("copy"); } catch (err) {}
    document.body.removeChild(tmp); feito();
  }
});

/* ---------- Inicialização ---------- */
function aplicarImagens() {
  /* hero */
  const heroVisual = document.querySelector(".hero-visual");
  if (heroVisual && IMAGENS.hero) {
    heroVisual.insertAdjacentHTML("beforeend",
      '<img class="hero-foto" src="' + IMAGENS.hero + '" alt="Pessoas vestindo calças jeans Quevedinha" onerror="this.remove()">');
  }
  /* sobre */
  porFoto(document.querySelector(".sobre-foto"), IMAGENS.sobre, "Peças de jeans da Quevedinha");
  /* categorias */
  $$(".cat-card").forEach(card => {
    const valor = card.dataset.filtro.split(":")[1];
    porFoto(card.querySelector(".cat-art"), IMAGENS.categorias[valor], "Categoria " + valor);
  });
  /* galeria de clientes */
  $$(".gal-art").forEach((el, i) => porFoto(el, IMAGENS.galeria[i % IMAGENS.galeria.length], "Cliente vestindo Quevedinha"));
}
aplicarImagens();
aplicarFiltros();
document.getElementById("ano").textContent = new Date().getFullYear();

/* link direto para um produto: site.com#p=id-do-produto */
if (location.hash.startsWith("#p=")) {
  const id = location.hash.slice(3);
  if (PRODUTOS.some(p => p.id === id)) setTimeout(() => abrirModal(id), 400);
}
