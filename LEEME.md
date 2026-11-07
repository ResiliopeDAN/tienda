# Moda Juliaca · guía rápida

## Qué es cada archivo
| Archivo | Para qué sirve |
|---|---|
| `index.html` | La **estructura**: textos y secciones |
| `css/styles.css` | El **aspecto**: colores, tamaños, animaciones. Los colores están en el bloque `:root` del inicio |
| `js/main.js` | El **comportamiento**: catálogo, detalle, pedido, menú. Los precios y textos de productos están en el bloque `PRODUCTOS` del inicio; el número de WhatsApp en `WHATSAPP` |
| `img/` | Las imágenes |

## Fotos que debes poner en `img/`
Guárdalas con **estos nombres exactos y en JPG** (reemplaza las grises). Si falta alguna secundaria, la página sigue funcionando.

| Archivo | Qué es | Proporción | Tamaño |
|---|---|---|---|
| `hero.jpg` | Portada: modelo(s) con la ropa, horizontal | 16:9 | 1920×1080 |
| `casaca-1.jpg` `polo-1.jpg` `jean-1.jpg` | Foto principal de cada prenda (**obligatorias**) | 4:5 vertical | 1200×1500 |
| `casaca-2.jpg` `polo-2.jpg` `jean-2.jpg` | Detalle (cierre, cuello, costura); se ve al pasar el mouse | 4:5 | 1200×1500 |
| `casaca-3.jpg` `polo-3.jpg` `jean-3.jpg` | Espalda o prenda doblada | 4:5 | 1200×1500 |
| `look.jpg` | Las tres prendas juntas | 5:4 | 1500×1200 |
| `nosotros.jpg` | Ambiente de tienda o ropa en percheros | 4:5 | 1200×1500 |
| `og-image.jpg` | Imagen al compartir el enlace | 1.91:1 | 1200×630 |

Cada foto debe pesar menos de ~200 KB (usa squoosh.app para comprimir).

## Para subirla a un hosting gratuito
Sube **la carpeta `tienda` completa** (no solo `index.html`). El archivo de entrada es `index.html`.

## Antes de entregar
- Cambia `WHATSAPP` en `js/main.js` por un número de prueba tuyo y comprueba que abre el mensaje.
- Prueba en el celular y revisa ortografía.
