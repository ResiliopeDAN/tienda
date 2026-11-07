/* =====================================================
   MODA JULIACA · comportamiento de la página
   1 datos · 2 utilidades · 3 catálogo · 4 detalle · 5 carrito
   6 menú y encabezado · 7 animaciones de scroll
   ===================================================== */
'use strict';

/* 1. DATOS ----------------------------------------------------------
   Para cambiar un precio o un texto, edita solo este bloque. */
const WHATSAPP = '51974223080';          // número ficticio: cámbialo por el real
const TALLAS = ['S', 'M', 'L', 'XL'];

const PRODUCTOS = [
  {
    id: 'casaca', nombre: 'Casaca juvenil', precio: 89, etiqueta: 'Nuevo',
    resumen: 'Abrigo ligero para la mañana',
    desc: 'Casaca abrigadora con cierre frontal, ideal para las mañanas frías de Juliaca.',
    feat: ['Tela impermeable ligera', 'Forro interior suave', 'Dos bolsillos laterales', 'Tallas S a XL'],
    fotos: ['img/casaca-1.jpg', 'img/casaca-2.jpg', 'img/casaca-3.jpg'],
    alts: ['Casaca juvenil, vista frontal', 'Casaca juvenil, detalle del cierre', 'Casaca juvenil, vista de espalda']
  },
  {
    id: 'polo', nombre: 'Polo casual', precio: 35, etiqueta: 'Más pedido',
    resumen: 'Algodón fresco para todo el día',
    desc: 'Polo de algodón con corte cómodo y cuello reforzado, para usar todos los días.',
    feat: ['100 % algodón', 'Corte regular', 'Lavable a máquina', 'Tallas S a XL'],
    fotos: ['img/polo-1.jpg', 'img/polo-2.jpg', 'img/polo-3.jpg'],
    alts: ['Polo casual, vista frontal', 'Polo casual, detalle del cuello', 'Polo casual doblado']
  },
  {
    id: 'jean', nombre: 'Pantalón jean', precio: 75, etiqueta: 'Nuevo',
    resumen: 'Corte recto que combina con todo',
    desc: 'Jean de corte recto con costuras reforzadas, pensado para durar y combinar con todo.',
    feat: ['Denim resistente', 'Corte recto', 'Cinco bolsillos', 'Tallas S a XL'],
    fotos: ['img/jean-1.jpg', 'img/jean-2.jpg', 'img/jean-3.jpg'],
    alts: ['Pantalón jean, vista frontal', 'Pantalón jean, detalle de costuras', 'Pantalón jean doblado']
  }
];

/* 2. UTILIDADES ---------------------------------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sol = n => 'S/ ' + n.toFixed(2);
const quieteMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;
const porId = id => PRODUCTOS.find(p => p.id === id);
document.documentElement.classList.add('js');

let toastTimer;
function aviso(texto) {
  const t = $('#toast');
  t.textContent = texto;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* 3. CATÁLOGO ------------------------------------------------------ */
$('#grid').innerHTML = PRODUCTOS.map((p, i) => `
  <button class="card" type="button" data-ver="${p.id}" style="--i:${i}" aria-label="Ver detalle de ${p.nombre}">
    <span class="card-media">
      <span class="tag">${p.etiqueta}</span>
      <img src="${p.fotos[0]}" alt="${p.alts[0]}" width="1200" height="1500" loading="lazy">
      <img class="alt" src="${p.fotos[1]}" alt="" width="1200" height="1500" loading="lazy" aria-hidden="true">
      <span class="quick">Ver detalle y elegir talla</span>
    </span>
    <span class="card-info"><h3>${p.nombre}</h3><span class="price">${sol(p.precio)}</span></span>
    <span class="card-sub">${p.resumen}</span>
  </button>`).join('');

/* Si una foto secundaria no existe, la tarjeta sigue mostrando la principal */
$$('.card-media .alt').forEach(img => img.addEventListener('error', () => img.remove()));

$('#look-list').innerHTML = PRODUCTOS.map(p => `<li><b>${p.nombre}</b><span>${sol(p.precio)}</span></li>`).join('');

/* 4. DETALLE DEL PRODUCTO ------------------------------------------ */
const dlg = $('#detalle');
let actual = null, talla = 'M', cantidad = 1;

function pintarFoto(i) {
  const p = actual;
  const img = $('#d-foto');
  img.style.opacity = 0;
  setTimeout(() => { img.src = p.fotos[i]; img.alt = p.alts[i]; img.style.opacity = 1; }, quieteMovimiento ? 0 : 150);
  $$('#d-thumbs button').forEach((b, k) => b.setAttribute('aria-current', k === i));
  $('.gallery-main').classList.remove('zoom');
}

function abrirDetalle(id) {
  actual = porId(id); talla = 'M'; cantidad = 1;
  $('#d-nombre').textContent = actual.nombre;
  $('#d-precio').textContent = sol(actual.precio);
  $('#d-desc').textContent = actual.desc;
  $('#d-feat').innerHTML = actual.feat.map(f => `<li>${f}</li>`).join('');
  $('#d-tallas').innerHTML = TALLAS.map(t => `<button class="chip" type="button" data-talla="${t}" aria-pressed="${t === talla}">${t}</button>`).join('');
  $('#d-thumbs').innerHTML = actual.fotos.map((f, k) => `<button type="button" aria-label="Ver foto ${k + 1}"><img src="${f}" alt=""></button>`).join('');
  $$('#d-thumbs img').forEach((im, k) => im.addEventListener('error', () => im.parentElement.remove()));
  $('#cant').textContent = cantidad;
  $('#d-foto').src = actual.fotos[0]; $('#d-foto').alt = actual.alts[0]; $('#d-foto').style.opacity = 1;
  $$('#d-thumbs button').forEach((b, k) => b.setAttribute('aria-current', k === 0));
  $('.gallery-main').classList.remove('zoom');
  dlg.showModal();
}

document.addEventListener('click', e => {
  const ver = e.target.closest('[data-ver]');
  if (ver) return abrirDetalle(ver.dataset.ver);

  const chip = e.target.closest('[data-talla]');
  if (chip) {
    talla = chip.dataset.talla;
    $$('[data-talla]').forEach(c => c.setAttribute('aria-pressed', c === chip));
  }
  const th = e.target.closest('#d-thumbs button');
  if (th) pintarFoto([...th.parentElement.children].indexOf(th));
  if (e.target.id === 'd-foto') $('.gallery-main').classList.toggle('zoom');
  if (e.target === dlg) dlg.close();            // clic en el fondo oscuro
});
$('#cerrar-detalle').onclick = () => dlg.close();
$('#menos').onclick = () => { cantidad = Math.max(1, cantidad - 1); $('#cant').textContent = cantidad; };
$('#mas').onclick = () => { cantidad = Math.min(10, cantidad + 1); $('#cant').textContent = cantidad; };
$('#agregar').onclick = () => {
  agregar(actual.id, talla, cantidad);
  dlg.close();
  aviso(`${actual.nombre} agregada a tu pedido`);
};

/* 5. CARRITO (se guarda en el navegador) --------------------------- */
let carrito = [];
try { carrito = JSON.parse(localStorage.getItem('mj-carrito')) || []; } catch (e) { carrito = []; }
carrito = carrito.filter(l => porId(l.id));   // descarta datos viejos

function guardar() { try { localStorage.setItem('mj-carrito', JSON.stringify(carrito)); } catch (e) {} }

function agregar(id, t, n) {
  const l = carrito.find(x => x.id === id && x.talla === t);
  if (l) l.cant = Math.min(10, l.cant + n); else carrito.push({ id, talla: t, cant: n });
  pintarCarrito();
  const c = $('#contador');
  c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
}

function mensajeWA() {
  if (!carrito.length) return 'Hola, quiero consultar por la colección Altiplano de Moda Juliaca.';
  const filas = carrito.map(l => { const p = porId(l.id); return `- ${l.cant} x ${p.nombre}, talla ${l.talla} (${sol(p.precio * l.cant)})`; });
  const total = carrito.reduce((s, l) => s + porId(l.id).precio * l.cant, 0);
  return `Hola, quiero hacer este pedido:\n${filas.join('\n')}\nTotal referencial: ${sol(total)}`;
}

function pintarCarrito() {
  const total = carrito.reduce((s, l) => s + porId(l.id).precio * l.cant, 0);
  const n = carrito.reduce((s, l) => s + l.cant, 0);
  $('#lineas').innerHTML = carrito.map((l, i) => {
    const p = porId(l.id);
    return `<li class="line"><img src="${p.fotos[0]}" alt="${p.alts[0]}"><div><h4>${p.nombre}</h4><small>Talla ${l.talla} · ${l.cant} ${l.cant > 1 ? 'unidades' : 'unidad'}</small><button class="rm" type="button" data-quitar="${i}">Quitar</button></div><span class="sum">${sol(p.precio * l.cant)}</span></li>`;
  }).join('');
  $('#vacio').hidden = carrito.length > 0;
  $('#total').textContent = sol(total);
  const c = $('#contador');
  c.textContent = n; c.classList.toggle('has', n > 0);
  const wa = $('#enviar-wa');
  wa.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensajeWA())}`;
  wa.setAttribute('aria-disabled', carrito.length ? 'false' : 'true');
  $('#vaciar').hidden = !carrito.length;
  $('#wa-contacto').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quiero consultar por la colección Altiplano.')}`;
  guardar();
}

function abrirCarrito(abrir) {
  const d = $('#drawer'), o = $('#overlay');
  d.classList.toggle('open', abrir);
  d.setAttribute('aria-hidden', !abrir);
  if (abrir) { o.hidden = false; requestAnimationFrame(() => o.classList.add('show')); }
  else { o.classList.remove('show'); setTimeout(() => (o.hidden = true), 350); }
}
$('#abrir-carrito').onclick = () => abrirCarrito(true);
$('#abrir-carrito-2').onclick = () => abrirCarrito(true);
$('#cerrar-carrito').onclick = () => abrirCarrito(false);
$('#overlay').onclick = () => abrirCarrito(false);
$('#vaciar').onclick = () => { carrito = []; pintarCarrito(); };
$('#lineas').addEventListener('click', e => {
  const q = e.target.closest('[data-quitar]');
  if (q) { carrito.splice(+q.dataset.quitar, 1); pintarCarrito(); }
});
$('#pedir-look').onclick = () => {
  PRODUCTOS.forEach(p => agregar(p.id, 'M', 1));
  aviso('Look completo agregado (talla M). Puedes cambiarla al quitar y volver a elegir');
  abrirCarrito(true);
};
document.addEventListener('keydown', e => { if (e.key === 'Escape') abrirCarrito(false); });
pintarCarrito();

/* 6. MENÚ MÓVIL Y ENCABEZADO --------------------------------------- */
const header = $('.site-header'), menu = $('#menu'), burger = $('#burger');
function menuMovil(abrir) {
  menu.classList.toggle('open', abrir);
  header.classList.toggle('menu-open', abrir);
  burger.setAttribute('aria-expanded', abrir);
  burger.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
  document.body.style.overflow = abrir ? 'hidden' : '';
}
burger.onclick = () => menuMovil(!menu.classList.contains('open'));
$$('#menu a').forEach(a => a.addEventListener('click', () => menuMovil(false)));

/* El encabezado se vuelve sólido al bajar y el hero se desplaza más lento (parallax) */
const heroImg = $('.hero-media img');
let ticking = false;
function alScroll() {
  const y = scrollY;
  header.classList.toggle('scrolled', y > 40);
  if (!quieteMovimiento && y < innerHeight * 1.2) heroImg.style.translate = `0 ${y * 0.18}px`;
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(alScroll); } }, { passive: true });
alScroll();

/* Resalta en el menú la sección que se está viendo */
const enlaces = $$('.nav a');
const secciones = ['inicio', 'catalogo', 'pedidos', 'contacto'].map(id => $('#' + id));
const vigilante = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) enlaces.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
secciones.forEach(s => vigilante.observe(s));

/* 7. ANIMACIONES AL HACER SCROLL ----------------------------------- */
const io = new IntersectionObserver((entradas, obs) => {
  entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
$$('[data-reveal], .grid .card').forEach(el => io.observe(el));
