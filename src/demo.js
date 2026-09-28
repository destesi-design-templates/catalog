// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'
import p7 from './demo/p7.webp'
import p8 from './demo/p8.webp'

export const demo = {
  name: 'TALLER CENTRAL',
  tagline: 'Herramientas y suministros',
  about: 'Herramientas, repuestos e insumos para la obra, el taller y la casa. Una tienda de demostración de la plantilla Catálogo.',
  announcement: 'Catálogo completo · Compra por categoría',
  hero,
  story,
  detail: 'Referencia de uso profesional, con acabado resistente y un agarre pensado para jornadas largas. Revisa la ficha y elige la cantidad que tu trabajo necesita.',
  benefits: ['Herramientas para obra y taller', 'Precios claros en cada referencia', 'Asesoría para elegir bien'],
  categories: [
    { id: 'electricas', name: 'Herramientas eléctricas' },
    { id: 'manuales', name: 'Herramientas manuales' },
    { id: 'seguridad', name: 'Seguridad' },
    { id: 'almacenamiento', name: 'Almacenamiento' },
  ],
  products: [
    { id: '1', name: 'Taladro inalámbrico 20 V', price_cents: 38900000, category_id: 'electricas', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Martillo de uña 16 oz', price_cents: 5490000, category_id: 'manuales', image: p2 },
    { id: '3', name: 'Flexómetro 8 m', price_cents: 3290000, category_id: 'manuales', image: p3 },
    { id: '4', name: 'Juego de destornilladores x6', price_cents: 6990000, category_id: 'manuales', image: p4 },
    { id: '5', name: 'Guantes de trabajo', price_cents: 2490000, category_id: 'seguridad', badge: 'Nuevo', image: p5 },
    { id: '6', name: 'Caja de herramientas metálica', price_cents: 15900000, category_id: 'almacenamiento', image: p6 },
    { id: '7', name: 'Nivel de aluminio 60 cm', price_cents: 4590000, category_id: 'manuales', image: p7 },
    { id: '8', name: 'Gafas de seguridad', price_cents: 1890000, category_id: 'seguridad', image: p8 },
  ],
}
