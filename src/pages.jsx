import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["inter", "jetbrains-mono"]

export function Home() {
  return <main>
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "Encuentra la pieza exacta",
          subtitle: "Recorre el catálogo por categoría, compara referencias y precios, y arma tu pedido desde un solo lugar.",
          button_label: "Ver el catálogo",
          design: {
            variant: "compact"
          }
        }
      }} />
    <Section section={{
        id: "benefits",
        type: "benefits",
        props: {}
      }} />
    <Section section={{
        id: "catalog",
        type: "product_grid",
        props: {
          title: "Catálogo",
          chips: true,
          limit: 12,
          design: {
            columns: 4
          }
        }
      }} />
    <Section section={{
        id: "featured",
        type: "product_carousel",
        props: {
          title: "Destacados",
          limit: 10,
          design: {
            columns: 5
          }
        }
      }} />
    <Section section={{
        id: "guide",
        type: "rich_text",
        props: {
          eyebrow: "Compra con criterio",
          title: "La herramienta correcta para cada trabajo",
          body: "Cada producto muestra su foto, su precio y su descripción para que compares con calma y elijas la referencia que tu trabajo necesita.",
          button_label: "Explorar categorías",
          image_side: "left"
        }
      }} />
    <Section section={{
        id: "faq",
        type: "faq",
        props: {
          title: "Cómo comprar",
          items: [
            {
              question: "¿Cómo encuentro un producto?",
              answer: "Filtra el catálogo por categoría y abre cada producto para ver su foto, su precio y su descripción."
            },
            {
              question: "¿Cómo hago un pedido?",
              answer: "Agrega los productos al carrito, revisa las cantidades y completa tus datos de entrega para confirmar la compra."
            },
            {
              question: "¿Cómo pago?",
              answer: "Eliges el medio de pago al finalizar la compra, entre los que la tienda tiene disponibles."
            }
          ]
        }
      }} />
    <Section section={{
        id: "cta",
        type: "cta",
        props: {
          title: "¿Buscas algo en particular?",
          body: "Recorre el catálogo completo y filtra por categoría para llegar más rápido a lo que necesitas.",
          button_label: "Ver el catálogo"
        }
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "También te puede servir",
          limit: 4,
          design: {
            columns: 4
          }
        }
      }} />
  </main>
}
