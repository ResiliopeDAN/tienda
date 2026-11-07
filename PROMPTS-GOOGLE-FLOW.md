# Moda Juliaca · Prompts para Google Flow

13 imágenes en total. Los prompts van en inglés porque los generadores los interpretan mejor; lo que sigue de cada uno (nombre de archivo, formato, uso) está en español.

---

## 0. Antes de empezar (lo que más importa)

**Define la "receta" de la colección y no la cambies.** Si las tres prendas salen con luz, fondo y color distintos, la tienda se verá desordenada.

| Elemento          | Decisión fija                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Casaca juvenil    | Azul petróleo oscuro (#2f5d62), cierre frontal, cuello alto, sin logos                                                                   |
| Polo casual       | Color crema / blanco hueso, cuello redondo, algodón liso                                                                                 |
| Pantalón jean     | Azul medio lavado, corte recto, costuras visibles                                                                                        |
| Fondo de catálogo | Beige cálido liso (#d9d1c3), sin objetos                                                                                                 |
| Luz               | Natural, suave y difusa, sin sombras duras                                                                                               |
| Modelo            | Joven de Juliaca (origen Juliaca, cabello oscuro), ropa solo de la colección, sin logos ni texto en la ropa. Ver bloque del modelo abajo |

**Pasos recomendados en Flow**

1. Elige modo **imagen** (no video).
2. Genera primero `casaca-1`, `polo-1` y `jean-1`. Si no te gustan, regenera hasta que las tres se parezcan en estilo.
3. Para `-2` y `-3` de cada prenda, **sube la imagen `-1` como referencia** ("ingredient" / imagen de referencia) y pide el nuevo ángulo. Así mantiene la misma prenda.
4. Flow no tiene proporción 4:5. Usa **3:4 vertical** para las prendas. La página recorta sola y no se deforma.
5. Descarga en la **mayor resolución** que ofrezca y guárdala con el nombre exacto de la tabla del final.
6. Mira cada imagen ampliada: manos, cierres, botones y costuras son lo que más se deforma. Si algo sale raro, regenera.

**Bloque del modelo (se pega dentro de los prompts que llevan persona):**

```
a young adult from Juliaca, Peru, with dark straight hair, dark brown eyes and a natural friendly expression
```

- Los prompts de abajo ya lo incluyen. Si quieres variar, cambia solo género o edad (adulto de 30 a 40 años) y **deja iguales los rasgos**.
- Usa ropa moderna de la colección. **No pidas trajes típicos, ponchos ni sombreros folclóricos**: la tienda vende ropa de uso diario, y mostrar a la gente local de forma cotidiana se ve más real y más respetuoso.
- Para que parezcan la misma persona en todas las fotos, genera `casaca-1` y úsala como referencia de rostro en `polo-1`, `jean-1`, `look` y `casaca-3`.
- Pide también un adulto en alguna foto (por ejemplo `look`), porque el público es **jóvenes y adultos**.

**Bloque de estilo (se pega al final de TODOS los prompts):**

```
Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, shallow depth of field, realistic fabric texture, sharp focus on the garment, high resolution, no text, no logos, no watermark, no brand names.
```

---

## 1. Fotos principales (obligatorias)

### `casaca-1.jpg` · 3:4 vertical

```
A young adult from Juliaca, Peru, with dark straight hair, dark brown eyes and a natural friendly expression, wearing a dark teal (petrol blue) lightweight jacket with a front zipper and high collar, two side pockets, standing straight facing the camera, full torso and hips visible, relaxed pose, plain beige studio background. Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, shallow depth of field, realistic fabric texture, sharp focus on the garment, high resolution, no text, no logos, no watermark, no brand names.
```

### `polo-1.jpg` · 3:4 vertical

```
A young adult from Juliaca, Peru, with dark straight hair, dark brown eyes and a natural friendly expression, wearing a plain cream off-white cotton polo-style casual t-shirt with a reinforced round collar, standing straight facing the camera, torso and hips visible, relaxed arms, plain beige studio background. Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, shallow depth of field, realistic fabric texture, sharp focus on the garment, high resolution, no text, no logos, no watermark, no brand names.
```

### `jean-1.jpg` · 3:4 vertical

```
A young adult from Juliaca, Peru, with dark straight hair, dark brown eyes and a natural friendly expression, wearing medium-wash blue straight-cut denim jeans with visible stitching and five pockets, plain cream t-shirt tucked slightly, full legs visible from waist to shoes, standing straight facing the camera, plain beige studio background. Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, shallow depth of field, realistic fabric texture, sharp focus on the garment, high resolution, no text, no logos, no watermark, no brand names.
```

---

## 2. Detalles (usa la imagen `-1` como referencia)

### `casaca-2.jpg` · 3:4 vertical (detalle del cierre)

```
Close-up detail of the same dark teal jacket: the metal zipper, the high collar and the chest area, macro-style shot showing fabric texture and stitching, beige studio background. Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, shallow depth of field, realistic fabric texture, sharp focus, high resolution, no text, no logos, no watermark, no brand names.
```

### `polo-2.jpg` · 3:4 vertical (detalle del cuello)

```
Close-up detail of the same cream cotton polo-style t-shirt: the reinforced collar and shoulder seam, showing the cotton weave texture, beige studio background. Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, shallow depth of field, realistic fabric texture, sharp focus, high resolution, no text, no logos, no watermark, no brand names.
```

### `jean-2.jpg` · 3:4 vertical (detalle de costuras)

```
Close-up detail of the same medium-wash straight denim jeans: front pocket, rivets and the contrast stitching along the seam, showing the denim weave, beige studio background. Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, shallow depth of field, realistic fabric texture, sharp focus, high resolution, no text, no logos, no watermark, no brand names.
```

---

## 3. Espalda o prenda doblada (usa la imagen `-1` como referencia)

### `casaca-3.jpg` · 3:4 vertical

```
The same person (same face and hair) and the same dark teal zip jacket seen from behind, standing straight, plain beige studio background, same lighting as the first photo. Clean e-commerce fashion photography, soft natural window light, neutral warm beige studio background, realistic fabric texture, high resolution, no text, no logos, no watermark, no brand names.
```

### `polo-3.jpg` · 3:4 vertical

```
The same cream cotton t-shirt neatly folded and placed flat on a beige surface, seen from above, soft natural light, minimal composition with empty space around it. Clean e-commerce fashion photography, realistic fabric texture, high resolution, no text, no logos, no watermark, no brand names.
```

### `jean-3.jpg` · 3:4 vertical

```
The same medium-wash blue straight denim jeans neatly folded in a stack of two, placed on a beige surface, seen slightly from above, soft natural light, minimal composition. Clean e-commerce fashion photography, realistic fabric texture, high resolution, no text, no logos, no watermark, no brand names.
```

---

## 4. Portada, look y tienda

### `hero.jpg` · 16:9 horizontal

La imagen más importante. El texto de la página va **abajo a la izquierda**, así que deja ese lado libre.

```
Wide cinematic fashion photograph of two young Peruvian people from Juliaca with dark hair (one man, one woman) walking side by side on a quiet street of a high-altitude Andean city in the morning, wearing a dark teal zip jacket, a cream cotton t-shirt and medium-wash blue straight jeans, golden early-morning light, clear blue sky, low-rise brick and adobe buildings softly blurred in the background, subjects placed on the right side of the frame with empty space on the left, natural candid movement. Editorial lifestyle photography, shallow depth of field, realistic, high resolution, no text, no logos, no watermark, no brand names.
```

###### Ests no nos deja porque infringe politicas

**Variante B del hero (sin personas, por si Flow sigue bloqueando):**

```
Wide cinematic photograph of a quiet street in a high-altitude Andean city in the morning, golden early light, clear blue sky, low-rise brick and adobe buildings, a clothing rail with a dark teal zip jacket, cream t-shirts and blue jeans placed on the right side of the frame in front of a shop wall, empty space on the left. Editorial lifestyle photography, shallow depth of field, realistic, high resolution, no text, no logos, no watermark, no brand names.
```

### `look.jpg` · 4:3 horizontal

```
A young adult from Juliaca, Peru, with dark straight hair, dark brown eyes and a natural friendly expression, wearing the complete outfit: dark teal lightweight zip jacket open over a cream cotton t-shirt, medium-wash blue straight denim jeans, standing in a relaxed pose against a plain warm beige wall, full body visible, soft natural window light. Editorial fashion photography, realistic fabric texture, high resolution, no text, no logos, no watermark, no brand names.
```

### `nosotros.jpg` · 3:4 vertical

```
Interior of a small, clean clothing boutique: a wooden rail with a few hanging jackets, folded jeans and t-shirts on a light wood shelf, warm natural light from a window, neutral beige and wood tones, calm minimal atmosphere, no people, no signs, no readable text. Interior photography, realistic, high resolution, no text, no logos, no watermark.
```

### `og-image.jpg` · 16:9 horizontal (no hace falta generarla)

Es la imagen que sale al compartir el enlace (WhatsApp, redes). Usa `hero.jpg` recortada a 1200×630 con squoosh.app o Canva.

---

## 5. Lo que debes descargar tú de plataformas

Solo lo necesitas **si Flow no te da buen resultado** en esos casos, o como complemento de realismo. Todo lo de abajo es gratis para uso comercial con las licencias de cada sitio. Revisa en cada foto el nombre del autor y guarda el enlace para el informe.

| Qué                                  | Para qué archivo                  | Dónde buscar                               | Qué escribir                                              |
| ------------------------------------ | --------------------------------- | ------------------------------------------ | --------------------------------------------------------- |
| Paisaje o calle del Altiplano / Puno | alternativa de `hero.jpg`         | Unsplash, Pexels                           | `Puno Peru street`, `Lake Titicaca`, `Andes city morning` |
| Prendas reales dobladas o colgadas   | alternativa de `polo-3`, `jean-3` | Unsplash                                   | `folded jeans`, `white polo shirt hanging`, `denim stack` |
| Tienda de ropa por dentro            | alternativa de `nosotros.jpg`     | Unsplash, Pexels                           | `clothing store interior`, `boutique clothes rack`        |
| Textil andino (detalle)              | fondo opcional de Nosotros        | Unsplash, Wikimedia Commons                | `Andean textile`, `Peruvian woven fabric`                 |
| Ícono de WhatsApp                    | botón de pedido                   | Wikimedia Commons / sitio oficial de marca | `WhatsApp logo SVG`                                       |

**Fotos concretas que ya encontré en Unsplash** (abre, comprueba que te gusten y descarga con el botón de la página; el sitio no deja descargarlas por script):

- Jeans doblados: https://unsplash.com/photos/photo-of-folded-denim-bottoms-Tgbeg_lOuko
- Pila de jeans doblados: https://unsplash.com/photos/a-stack-of-folded-jeans-in-a-jeans-pocket-Arxc2ZOfGRU
- Polo blanco colgado: https://unsplash.com/photos/a-white-polo-shirt-hanging-on-a-clothes-rack-F5i3PZXYkvY
- Hombre con chaqueta de jean: https://unsplash.com/photos/man-wearing-a-denim-jacket-and-flat-cap-outdoors-fmVmrYjYOcI
- Galerías: https://unsplash.com/s/photos/denim-jacket · https://unsplash.com/s/photos/jeans · https://unsplash.com/s/photos/clothing-flatlay

> Evita las marcadas como **Unsplash+** (licencia distinta, de pago).

---

## 6. Resumen para guardar los archivos

Todos en `tienda/img/`, en **JPG**, con el nombre exacto. Pesa cada una menos de ~200 KB (comprime en squoosh.app).

| Archivo                                    | Proporción en Flow | Prioridad        |
| ------------------------------------------ | ------------------ | ---------------- |
| `hero.jpg`                                 | 16:9               | Obligatoria      |
| `casaca-1.jpg`, `polo-1.jpg`, `jean-1.jpg` | 3:4                | **Obligatorias** |
| `casaca-2.jpg`, `polo-2.jpg`, `jean-2.jpg` | 3:4                | Recomendadas     |
| `casaca-3.jpg`, `polo-3.jpg`, `jean-3.jpg` | 3:4                | Recomendadas     |
| `look.jpg`                                 | 4:3                | Recomendada      |
| `nosotros.jpg`                             | 3:4                | Recomendada      |
| `og-image.jpg`                             | recorte del hero   | Opcional         |

**Orden sugerido para no perder tiempo:** `casaca-1`, `polo-1`, `jean-1`, `hero`, `look`, y después el resto.

## 7. Si algo sale mal

- **Flow dice "might violate our policies":** quita del prompt cualquier palabra de etnia, raza o color de piel (Quechua, Aymara, mestizo, indígena, "skin"). Deja solo el lugar ("from Juliaca, Peru") y rasgos neutros (cabello, ojos, expresión). Si sigue bloqueando, usa el prompt del hero sin personas de la sección 4 (variante B).

- **La ropa sale con logos o letras:** añade al final `plain clothing with absolutely no printed text, no graphics` y regenera.

- **Las tres prendas no se parecen entre sí:** usa una imagen que te guste como referencia para las demás.

- **Manos o cierres deformes:** recorta la foto para que no se vea esa zona, o regenera.

- **Se ve muy "artificial":** agrega `shot on 85mm lens, natural skin and fabric imperfections` al prompt.

- **Si usas fotos con personas generadas por IA,** anótalo en el informe como material ilustrativo. La tienda es ficticia, así que está bien.
