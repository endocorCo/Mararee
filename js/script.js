/* ══════════════════════════════════════════════════════
   MARARE — script.js
   Products, Modal, Filters, i18n, WhatsApp CTAs
══════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════
   PRODUCT DATA
══════════════════════════════ */
const products = [
  {
    id: 'a1', cat: 'aretes',
    name: 'Alma Marina', price: 220, badge: 'favorito',
    img: 'assets/images/products/aretes/alma-marina.jpg',
    desc: 'Aretes tipo colgante con diseño de concha marina. Pieza icónica de la colección.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Medida','3 cm de largo'],['Colores','Dorado, Plateado']],
  },
  {
    id: 'a2', cat: 'aretes',
    name: 'Marella', price: 220, badge: 'favorito',
    img: 'assets/images/products/aretes/marella.jpg',
    desc: 'Aretes botón con textura orgánica, perfectos para el día a día.',
    specs: [['Material','Acero inoxidable'],['Medida','2 cm diámetro'],['Colores','Dorado']],
  },
  {
    id: 'a3', cat: 'aretes',
    name: 'Sal de Vida', price: 210,
    img: 'assets/images/products/aretes/sal-de-vida.jpg',
    desc: 'Aretes en forma de concha, ligeros y elegantes.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Medida','1.8 cm'],['Colores','Dorado, Plateado']],
  },
  {
    id: 'r1', cat: 'anillos',
    name: 'Calypso', price: 210, badge: 'favorito', note: 'Dorado / Plateado',
    img: 'assets/images/products/anillos/calypso.jpg',
    desc: 'Anillo de banda fluida con diseño orgánico. Disponible en dorado y plateado.',
    specs: [['Material','Acero inoxidable'],['Talla','Ajustable'],['Colores','Dorado, Plateado']],
  },
  {
    id: 'r2', cat: 'anillos',
    name: 'Estrella', price: 220,
    img: 'assets/images/products/anillos/estrella.jpg',
    desc: 'Anillo con motivo de estrella de mar en relieve dorado.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Talla','Ajustable'],['Colores','Dorado']],
  },
  {
    id: 'r3', cat: 'anillos',
    name: 'Arena', price: 220, badge: 'favorito',
    img: 'assets/images/products/anillos/arena.jpg',
    desc: 'Anillo tipo mariposa, ligero y sofisticado.',
    specs: [['Material','Acero inoxidable'],['Talla','Ajustable'],['Colores','Dorado']],
  },
  {
    id: 'r4', cat: 'anillos',
    name: 'Marea', price: 210,
    img: 'assets/images/products/anillos/marea.jpg',
    desc: 'Anillo con concha y estrella de mar entrelazadas.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Talla','Ajustable'],['Colores','Dorado']],
  },
  {
    id: 'r5', cat: 'anillos',
    name: 'Pirals', price: 210,
    img: 'assets/images/products/anillos/pirals.jpg',
    desc: 'Anillo de espiral con acabado pulido premium.',
    specs: [['Material','Acero inoxidable'],['Talla','Ajustable'],['Colores','Dorado']],
  },
  {
    id: 'r6', cat: 'anillos',
    name: 'Vesper', price: 190, badge: 'new',
    img: 'assets/images/products/anillos/vesper.jpg',
    desc: 'Anillo triple banda delgada, minimalista y elegante.',
    specs: [['Material','Acero inoxidable'],['Talla','Ajustable'],['Colores','Dorado']],
  },
  {
    id: 'r7', cat: 'anillos',
    name: 'Peri', price: 210, note: 'Con perlas',
    img: 'assets/images/products/anillos/peri.jpg',
    desc: 'Anillo con detalles de perlas en concha marina.',
    specs: [['Material','Acero inoxidable baño oro 18k + perlas'],['Talla','Ajustable'],['Colores','Dorado']],
  },
  {
    id: 'r8', cat: 'anillos',
    name: 'Isolde', price: 220, note: 'Solo plateado',
    img: 'assets/images/products/anillos/isolde.jpg',
    desc: 'Anillo orgánico de diseño fluido. Disponible únicamente en plateado.',
    specs: [['Material','Acero inoxidable plateado'],['Talla','Ajustable'],['Colores','Plateado']],
  },
  {
    id: 'r9', cat: 'anillos',
    name: 'Aros', price: 220, badge: 'new',
    img: 'assets/images/products/anillos/aros.jpg',
    desc: 'Anillo doble banda, moderno y versátil.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Talla','Ajustable'],['Colores','Dorado']],
  },
  {
    id: 'p1', cat: 'pulseras',
    name: 'Lazos', price: 245, badge: 'favorito',
    img: 'assets/images/products/pulseras/lazos.jpg',
    desc: 'Pulsera con detalle de nudo elegante en dorado.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Medida','16-18 cm ajustable'],['Colores','Dorado']],
  },
  {
    id: 'p2', cat: 'pulseras',
    name: 'Coral', price: 300, note: 'Resina natural',
    img: 'assets/images/products/pulseras/coral.jpg',
    desc: 'Pulsera rígida en resina natural color mármol. Pieza statement única.',
    specs: [['Material','Resina natural de alta calidad'],['Medida','Talla única interior 6 cm'],['Colores','Mármol natural']],
  },
  {
    id: 'c1', cat: 'collares',
    name: 'Conch', price: 230, badge: 'favorito',
    img: 'assets/images/products/collares/conch.jpg',
    desc: 'Collar de cadena con dijes de conchas marinas en dorado.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Largo','45 cm + 5 cm extensión'],['Colores','Dorado']],
  },
  {
    id: 'c2', cat: 'collares',
    name: 'Eclat', price: 250, badge: 'favorito',
    img: 'assets/images/products/collares/eclat.jpg',
    desc: 'Collar con colgante circular de diseño contemporáneo.',
    specs: [['Material','Acero inoxidable baño oro 18k'],['Largo','Ajustable 40-45 cm'],['Colores','Dorado']],
  },
  {
    id: 'c3', cat: 'collares',
    name: 'Mar Bajo', price: 230, badge: 'new',
    img: 'assets/images/products/collares/mar-bajo.jpg',
    desc: 'Collar tipo charm con estrellas, conchas y perlas.',
    specs: [['Material','Acero inoxidable baño oro 18k + perlas'],['Largo','42 cm + extensión'],['Colores','Dorado']],
  },
  {
    id: 'c4', cat: 'collares',
    name: 'Acapulco', price: 230,
    img: 'assets/images/products/collares/acapulco.jpg',
    desc: 'Collar de cadena con dijes de conchas y perlas, estilo playero chic.',
    specs: [['Material','Acero inoxidable baño oro 18k + perlas'],['Largo','45 cm'],['Colores','Dorado']],
  },
  {
    id: 'c5', cat: 'collares',
    name: 'Red Destin', price: 300, note: 'Blanco / Dorado',
    img: 'assets/images/products/collares/red-destin.jpg',
    desc: 'Collar lariat de cuentas rojas con remate elegante. Disponible en blanco y dorado.',
    specs: [['Material','Cuentas de alta calidad + acero'],['Largo','80 cm total'],['Colores','Rojo, Blanco, Dorado']],
  },
];

/* ══════════════════════════════
   TRANSLATIONS (ES / EN)
══════════════════════════════ */
const i18n = {
  es: {
    'ann':              'ENVÍOS GRATIS EN PEDIDOS MAYORES A $599 MXN',
    'nav.sub':          'Joyería',
    'nav.inicio':       'Inicio',
    'nav.tienda':       'Tienda',
    'nav.nosotras':     'Nosotros',
    'nav.contacto':     'Contacto',
    'nav.wa':           'Pedir por WhatsApp',
    'hero.eyebrow':     'Joyería premium · Hecho en México',
    'hero.t1':          'Joyería que',
    'hero.t2':          'eleva cada momento.',
    'hero.sub':         'Diseños que realzan tu esencia. Oro laminado, resistente al agua, hipoalergénico.',
    'hero.cta1':        'Ver Colección',
    'hero.cta2':        'Solicitar por WhatsApp',
    'ben.1t':           'Acero Premium',
    'ben.1s':           'Baño de oro 18k',
    'ben.2t':           'Diseños Exclusivos',
    'ben.2s':           'Hechos para ti',
    'ben.3t':           'Pago Seguro',
    'ben.3s':           'Compra 100% segura',
    'ben.4t':           'Envíos a Todo MX',
    'ben.4s':           'Rápidos y confiables',
    'tienda.label':     'Colecciones',
    'tienda.title':     'Nuestro Stock & Catálogo',
    'tienda.more':      'Ver Más Productos',
    'filter.type':      'Tipo de accesorio ▾',
    'filter.all':       'Todos',
    'filter.aretes':    'Aretes',
    'filter.anillos':   'Anillos',
    'filter.pulseras':  'Pulseras',
    'filter.collares':  'Collares',
    'filter.bs':        'Best Sellers',
    'filter.new':       'New Arrivals',
    'brand.label':      'Esencia Marare',
    'brand.title':      'Cada pieza diseñada para acompañar tu esencia y resaltar tu luz.',
    'brand.p1':         'MARARE nace del amor por el mar, la feminidad y la fuerza que hay en cada mujer. Creamos piezas únicas que te acompañan en cada momento importante de tu vida.',
    'brand.quote':      '"Inspirada en la fuerza y dedicatoria que hay en ti. Piezas únicas, como tú."',
    'brand.cta':        'Solicitar por WhatsApp',
    'brand.b2':         'Resistente al Agua',
    'brand.b3':         'Empaque Premium',
    'editorial.label':  'Editorial',
    'editorial.title':  'Así se lleva MARARE',
    'editorial.sub':    'Campaña editorial — Colección actual',
    'emb.label':        'Embajadoras',
    'emb.title':        'Para ver más modelos',
    'emb.sub':          'Ve los catálogos de nuestras embajadoras',
    'emb.desc':         'Cada embajadora tiene una selección diferente de piezas y estilos MARARE.',
    'emb.note':         'Si te interesa algún modelo en específico, da clic en el botón de WhatsApp debajo del catálogo para solicitarlo directamente.',
    'emb.catBtn':       'Ver Catálogo',
    'emb.askBtn':       'Solicitar',
    'b2b.tag':          'Para Negocios',
    'b2b.title':        '¿Quieres vender MARARE en tu negocio?',
    'b2b.p':            'Ofrecemos alianzas para boutiques y tiendas que busquen accesorios elegantes, modernos y en tendencia.',
    'b2b.b1':           'Oro laminado dorado y plateado',
    'b2b.b2':           'Diseños exclusivos',
    'b2b.b3':           'Apoyo en publicidad',
    'b2b.b4':           'Marca MARARE o personalizada',
    'b2b.cta':          'Solicitar Información',
    'amb.tag':          'Únete',
    'amb.title':        '¿Te gustaría ser Embajadora MARARE?',
    'amb.p':            'Buscamos creadoras de contenido y mujeres con estilo auténtico que quieran representar la marca y crecer junto a nuestra comunidad.',
    'amb.b1':           'Comunidad',
    'amb.b2':           'Beneficios exclusivos',
    'amb.b3':           'Crecimiento juntas',
    'amb.b4':           'Descuentos especiales',
    'amb.cta':          'Quiero ser Embajadora →',
    'ig.label':         'Instagram',
    'ig.sub':           'Descubre nuevas piezas y momentos en @marare.mx',
    'ig.btn':           'Ver Instagram ↗',
    'contact.label':    'Contacto',
    'contact.title':    'Hablemos',
    'contact.sub':      'Pedidos por Instagram y DMs · Disponibles para ti',
    'contact.infoLabel':'Pedidos & Consultas',
    'contact.name':     'Tu nombre',
    'contact.email':    'Tu correo',
    'contact.msg':      'Tu mensaje',
    'contact.btn':      'Enviar por WhatsApp →',
    'modal.stock':      'En stock · Envíos a todo México',
    'modal.wa':         'Solicitar por WhatsApp',
    'modal.note':       'Respuesta en menos de 24 horas',
    'footer.tag':       'Joyería Atemporal · Hecho en México',
    'footer.desc':      'Joyería que eleva cada momento. Piezas únicas, como tú.',
    'footer.tienda':    'Tienda',
    'footer.info':      'Información',
    'footer.ayuda':     'Ayuda',
    'footer.newsletter':'Newsletter',
    'footer.accesorios':'Accesorios',
    'footer.envios':    'Envíos',
    'footer.cambios':   'Cambios y devoluciones',
    'footer.terminos':  'Términos y condiciones',
    'footer.privacidad':'Políticas de privacidad',
    'footer.faq':       'Preguntas frecuentes',
    'footer.tallas':    'Guía de tallas',
    'footer.pagos':     'Formas de pago',
    'footer.newsletterDesc': 'Recibe novedades y promociones exclusivas.',
    'footer.emailPh':   'Tu correo electrónico',
    'footer.newsletterNote': 'Sin spam. Solo lo que importa.',
    'footer.rights':    '© 2024 MARARE. Todos los derechos reservados.',
    'badge.fav':        'Favorito',
    'badge.new':        'Nuevo',
    'quick.view':       'Ver producto',
  },
  en: {
    'ann':              'FREE SHIPPING ON ORDERS OVER $599 MXN',
    'nav.sub':          'Jewelry',
    'nav.inicio':       'Home',
    'nav.tienda':       'Shop',
    'nav.nosotras':     'About',
    'nav.contacto':     'Contact',
    'nav.wa':           'Order via WhatsApp',
    'hero.eyebrow':     'Premium Jewelry · Made in Mexico',
    'hero.t1':          'Jewelry that',
    'hero.t2':          'elevates every moment.',
    'hero.sub':         'Designs that enhance your essence. Gold plated, water resistant, hypoallergenic.',
    'hero.cta1':        'View Collection',
    'hero.cta2':        'Request via WhatsApp',
    'ben.1t':           'Premium Steel',
    'ben.1s':           '18k gold plating',
    'ben.2t':           'Exclusive Designs',
    'ben.2s':           'Made for you',
    'ben.3t':           'Secure Payment',
    'ben.3s':           '100% safe purchase',
    'ben.4t':           'Shipping All MX',
    'ben.4s':           'Fast and reliable',
    'tienda.label':     'Collections',
    'tienda.title':     'Our Stock & Catalog',
    'tienda.more':      'View More Products',
    'filter.type':      'Type ▾',
    'filter.all':       'All',
    'filter.aretes':    'Earrings',
    'filter.anillos':   'Rings',
    'filter.pulseras':  'Bracelets',
    'filter.collares':  'Necklaces',
    'filter.bs':        'Best Sellers',
    'filter.new':       'New Arrivals',
    'brand.label':      'Marare Essence',
    'brand.title':      'Every piece designed to accompany your essence and highlight your light.',
    'brand.p1':         'MARARE is born from a love of the sea, femininity, and the strength within every woman. We create unique pieces that accompany you in every important moment of your life.',
    'brand.quote':      '"Inspired by the strength and dedication within you. Unique pieces, like you."',
    'brand.cta':        'Request via WhatsApp',
    'brand.b2':         'Water Resistant',
    'brand.b3':         'Premium Packaging',
    'editorial.label':  'Editorial',
    'editorial.title':  'How MARARE is worn',
    'editorial.sub':    'Editorial campaign — Current collection',
    'emb.label':        'Ambassadors',
    'emb.title':        'View more styles',
    'emb.sub':          'See our ambassador catalogs',
    'emb.desc':         'Each ambassador has a different selection of MARARE pieces and styles.',
    'emb.note':         'If you\'re interested in a specific style, click the WhatsApp button below the catalog to request it directly.',
    'emb.catBtn':       'View Catalog',
    'emb.askBtn':       'Request',
    'b2b.tag':          'For Businesses',
    'b2b.title':        'Want to sell MARARE in your store?',
    'b2b.p':            'We offer partnerships for boutiques and stores looking for elegant, modern, and trendy accessories.',
    'b2b.b1':           'Gold & silver plated',
    'b2b.b2':           'Exclusive designs',
    'b2b.b3':           'Marketing support',
    'b2b.b4':           'MARARE or custom brand',
    'b2b.cta':          'Request Information',
    'amb.tag':          'Join Us',
    'amb.title':        'Would you like to be a MARARE Ambassador?',
    'amb.p':            'We\'re looking for content creators and women with authentic style who want to represent the brand and grow with our community.',
    'amb.b1':           'Community',
    'amb.b2':           'Exclusive benefits',
    'amb.b3':           'Grow together',
    'amb.b4':           'Special discounts',
    'amb.cta':          'I want to be an Ambassador →',
    'ig.label':         'Instagram',
    'ig.sub':           'Discover new pieces and moments at @marare.mx',
    'ig.btn':           'View Instagram ↗',
    'contact.label':    'Contact',
    'contact.title':    'Let\'s Talk',
    'contact.sub':      'Orders via Instagram and DMs · Available for you',
    'contact.infoLabel':'Orders & Inquiries',
    'contact.name':     'Your name',
    'contact.email':    'Your email',
    'contact.msg':      'Your message',
    'contact.btn':      'Send via WhatsApp →',
    'modal.stock':      'In stock · Ships across Mexico',
    'modal.wa':         'Request via WhatsApp',
    'modal.note':       'Response within 24 hours',
    'footer.tag':       'Timeless Jewelry · Made in Mexico',
    'footer.desc':      'Jewelry that elevates every moment. Unique pieces, like you.',
    'footer.tienda':    'Shop',
    'footer.info':      'Information',
    'footer.ayuda':     'Help',
    'footer.newsletter':'Newsletter',
    'footer.accesorios':'Accessories',
    'footer.envios':    'Shipping',
    'footer.cambios':   'Returns & exchanges',
    'footer.terminos':  'Terms & conditions',
    'footer.privacidad':'Privacy policy',
    'footer.faq':       'FAQ',
    'footer.tallas':    'Size guide',
    'footer.pagos':     'Payment methods',
    'footer.newsletterDesc': 'Receive news and exclusive promotions.',
    'footer.emailPh':   'Your email address',
    'footer.newsletterNote': 'No spam. Only what matters.',
    'footer.rights':    '© 2024 MARARE. All rights reserved.',
    'badge.fav':        'Favorite',
    'badge.new':        'New',
    'quick.view':       'View product',
  },
};

/* ══════════════════════════════
   APP STATE
══════════════════════════════ */
let currentLang    = 'es';
let currentFilter  = 'all';
let currentSort    = null;
let currentProduct = null;
let visibleCount   = 8;

/* ══════════════════════════════
   HELPERS
══════════════════════════════ */
const t   = key => i18n[currentLang][key] || i18n.es[key] || key;
const $   = id  => document.getElementById(id);
const $$  = sel => document.querySelectorAll(sel);

const WA_NUMBER = '527445875253';

function waProductUrl(p) {
  const msg = `Hola! Me interesa: ${p.name} ($${p.price} MXN)`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function productImg(p, cssClass = 'r-sq') {
  return `
    <div class="img-wrap ${cssClass}" style="height:100%">
      <img src="${p.img}"
           alt="${p.name}"
           loading="lazy"
           onerror="this.parentElement.classList.add('img-missing')">
    </div>`;
}

function badgeHtml(p) {
  if (p.badge === 'favorito') return `<span class="ph-badge-fav">${t('badge.fav')}</span>`;
  if (p.badge === 'new')      return `<span class="ph-badge-new">${t('badge.new')}</span>`;
  return '';
}

/* ══════════════════════════════
   MARQUEE
══════════════════════════════ */
function buildMarquee() {
  const items = [
    'ACERO INOXIDABLE','&#9670;','RESISTENTE AL AGUA','&#9670;',
    'EMPAQUE PREMIUM','&#9670;','PAGO SEGURO','&#9670;',
    'HECHO EN MÉXICO','&#9670;','ORO LAMINADO 18K','&#9670;',
    'HIPOALERGÉNICO','&#9670;',
    'ACERO INOXIDABLE','&#9670;','RESISTENTE AL AGUA','&#9670;',
    'EMPAQUE PREMIUM','&#9670;','PAGO SEGURO','&#9670;',
    'HECHO EN MÉXICO','&#9670;','ORO LAMINADO 18K','&#9670;',
    'HIPOALERGÉNICO','&#9670;',
  ];
  $('marqueeTrack').innerHTML = items
    .map(i => i === '&#9670;'
      ? '<span class="m-dot">&#9670;</span>'
      : `<span class="m-item">${i}</span>`)
    .join('');
}

/* ══════════════════════════════
   PRODUCT GRID
══════════════════════════════ */
function renderProducts() {
  let list = [...products];

  if (currentFilter !== 'all') list = list.filter(p => p.cat === currentFilter);
  if (currentSort === 'bestseller') list = list.filter(p => p.badge === 'favorito');
  if (currentSort === 'new')        list = list.filter(p => p.badge === 'new');

  const visible = list.slice(0, visibleCount);
  const grid    = $('productGrid');

  grid.innerHTML = visible.map((p, i) => `
    <div class="product-card reveal reveal-d${i % 4}" data-id="${p.id}" onclick="openModal('${p.id}')">
      <div class="product-card-img">
        ${badgeHtml(p)}
        ${productImg(p, 'r-sq')}
        <div class="product-card-overlay">
          <button class="pc-quick"
                  onclick="event.stopPropagation();openModal('${p.id}')">
            ${t('quick.view')}
          </button>
        </div>
      </div>
      <div class="product-card-info">
        <p class="product-card-name">${p.name}</p>
        ${p.note ? `<p class="product-card-note">${p.note}</p>` : ''}
        <p class="product-card-price">$${p.price} MXN</p>
        <p class="product-card-dash">— —</p>
      </div>
    </div>`).join('');

  $('loadMoreBtn').style.display = list.length > visibleCount ? 'inline-flex' : 'none';

  observeReveal();
}

/* ══════════════════════════════
   FILTERS
══════════════════════════════ */
$$('.filter-btn[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    currentSort   = null;
    visibleCount  = 8;
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts();
  });
});

$$('.fdm-item[data-filter]').forEach(item => {
  item.addEventListener('click', () => {
    currentFilter = item.dataset.filter;
    currentSort   = null;
    visibleCount  = 8;
    $$('.fdm-item').forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    $('filterAll').classList.add('active');
    renderProducts();
    $$('.filter-dropdown-menu').forEach(m => m.classList.remove('open'));
  });
});

$('filterBs').addEventListener('click', () => {
  currentSort   = currentSort === 'bestseller' ? null : 'bestseller';
  currentFilter = 'all';
  visibleCount  = 8;
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  if (currentSort) $('filterBs').classList.add('active');
  renderProducts();
});

$('filterNew').addEventListener('click', () => {
  currentSort   = currentSort === 'new' ? null : 'new';
  currentFilter = 'all';
  visibleCount  = 8;
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  if (currentSort) $('filterNew').classList.add('active');
  renderProducts();
});

$('loadMoreBtn').addEventListener('click', () => { visibleCount += 8; renderProducts(); });

document.addEventListener('click', e => {
  const dd = e.target.closest('.filter-dropdown');
  $$('.filter-dropdown-menu').forEach(m => {
    if (dd && m.closest('.filter-dropdown') === dd) m.classList.toggle('open');
    else m.classList.remove('open');
  });
});

/* ══════════════════════════════
   PRODUCT MODAL
══════════════════════════════ */
function openModal(id) {
  currentProduct = products.find(p => p.id === id);
  if (!currentProduct) return;

  const p = currentProduct;

  $('modalCat').textContent   = t('filter.' + p.cat);
  $('modalName').textContent  = p.name;
  $('modalPrice').textContent = `$${p.price} MXN`;
  $('modalDesc').textContent  = p.desc;

  const mainImg = $('modalMainImgEl');
  mainImg.src   = p.img;
  mainImg.alt   = p.name;

  $('modalSpecs').innerHTML = p.specs
    .map(s => `<div class="modal-spec"><strong>${s[0]}</strong>${s[1]}</div>`)
    .join('');

  const hasGold   = p.specs.some(s => s[1].includes('Dorado') || s[1].includes('Gold'));
  const hasPlated = p.specs.some(s => s[1].includes('Plateado') || s[1].includes('Silver'));
  let colHtml = '<div class="modal-colors-label">Color</div><div class="color-opts">';
  if (hasGold)   colHtml += '<div class="color-opt active" style="background:linear-gradient(135deg,#d4a843,#e8c572)" title="Dorado"></div>';
  if (hasPlated) colHtml += '<div class="color-opt" style="background:linear-gradient(135deg,#c0c0c0,#e8e8e8)" title="Plateado"></div>';
  colHtml += '</div>';
  $('modalColors').innerHTML = colHtml;

  $('modalWaBtn').href = waProductUrl(p);

  $('modalOverlay').classList.add('open');
  $('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('modalOverlay').classList.remove('open');
  $('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

$('modalClose').addEventListener('click', closeModal);
$('modalOverlay').addEventListener('click', closeModal);

document.addEventListener('click', e => {
  if (e.target.classList.contains('color-opt')) {
    e.target.closest('.color-opts')
      .querySelectorAll('.color-opt')
      .forEach(o => o.classList.remove('active'));
    e.target.classList.add('active');
  }
});

/* ══════════════════════════════
   CONTACT FORM → WHATSAPP
══════════════════════════════ */
const contactForm = $('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = ($('fName').value || '').trim();
    const msg  = ($('fMsg').value  || '').trim();
    const text = name
      ? `Hola! Soy ${name}. ${msg}`
      : `Hola! ${msg}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}

/* ══════════════════════════════
   LANGUAGE SWITCHER
══════════════════════════════ */
function applyLang(lang) {
  currentLang = lang;

  $$('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  $$('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = lang;

  renderProducts();
}

$$('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* ══════════════════════════════
   SCROLL REVEAL
══════════════════════════════ */
function observeReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

/* ══════════════════════════════
   MOBILE NAV
══════════════════════════════ */
const hamburger = $('hamburger');
const mobileNav = $('mobileNav');

function openMobileNav() {
  hamburger.classList.add('open');
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  if (mobileNav.classList.contains('open')) closeMobileNav();
  else openMobileNav();
});

$$('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', closeMobileNav);
});

/* ══════════════════════════════
   NAVBAR SCROLL STATE
══════════════════════════════ */
const navbar = $('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ══════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    closeMobileNav();
  }
});

/* ══════════════════════════════
   INIT
══════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildMarquee();
  renderProducts();
  applyLang('es');
  observeReveal();
});

window.openModal = openModal;
