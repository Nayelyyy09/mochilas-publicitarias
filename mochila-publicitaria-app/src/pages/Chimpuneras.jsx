import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import ProductDetail from "../components/ProductDetail";

const productos = [
  {
    id: 1,
    codigo: "CH001",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Aero",
    imagen: "/imagenes/chimpuneras/Chimpunera Aero.png",
    rating: 5,
  },
  {
    id: 2,
    codigo: "CH002",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Don Pollo",
    imagen: "/imagenes/chimpuneras/Chimpunera Don Pollo.png",
    rating: 5,
  },
  {
    id: 3,
    codigo: "CH003",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Etex",
    imagen: "/imagenes/chimpuneras/Chimpunera etex.png",
    rating: 5,
  },
  {
    id: 4,
    codigo: "CH004",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Flex",
    imagen: "/imagenes/chimpuneras/Chimpunera Flex.png",
    rating: 5,
  },
  {
    id: 5,
    codigo: "CH005",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Intertek",
    imagen: "/imagenes/chimpuneras/Chimpunera Intertek.png",
    rating: 5,
  },
  {
    id: 6,
    codigo: "CH006",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera IPESA",
    imagen: "/imagenes/chimpuneras/Chimpunera IPESA.png",
    rating: 5,
  },
  {
    id: 7,
    codigo: "CH007",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Latina",
    imagen: "/imagenes/chimpuneras/Chimpunera Latina.png",
    rating: 5,
  },
  {
    id: 8,
    codigo: "CH008",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Navimax",
    imagen: "/imagenes/chimpuneras/Chimpunera Navimax.png",
    rating: 5,
  },
  {
    id: 9,
    codigo: "CH009",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Ochosur",
    imagen: "/imagenes/chimpuneras/Chimpunera Ochosur.png",
    rating: 5,
  },
  {
    id: 10,
    codigo: "CH010",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Stracon",
    imagen: "/imagenes/chimpuneras/Chimpunera Stracon.png",
    rating: 5,
  },
  {
    id: 11,
    codigo: "CH011",
    categoria: "Chimpuneras Publicitarias",
    nombre: "Chimpunera Verisure",
    imagen: "/imagenes/chimpuneras/Chimpunera Verisure.png",
    rating: 5,
  },
];

const PRODUCTOS_POR_PAGINA = 8;
export default function Chimpuneras() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const totalPaginas = Math.ceil(
    productos.length / PRODUCTOS_POR_PAGINA
  );

  const indiceInicial =
    (paginaActual - 1) * PRODUCTOS_POR_PAGINA;

  const productosActuales = productos.slice(
    indiceInicial,
    indiceInicial + PRODUCTOS_POR_PAGINA
  );

  return (
      <section className="py-10 px-4 lg:px-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border border-gray-200">

        {productosActuales.map((item) => (

          <div
            key={item.id}
            onClick={() => setSelectedProduct({
              image:item.imagen,
              name:item.nombre,
              code:item.codigo,
              categoryLabel:item.categoria,
              badge:"Nuevo",badgeColor:"bg-emerald-500",rating:item.rating??5,reviews:8,
              description:"Chimpunera publicitaria personalizada.",
              features:["Personalización con logo","Material resistente","Diseño corporativo","Mínimo 50 unidades"]})}
            className="border border-gray-200 bg-white hover:shadow-xl transition duration-300"
          >

            <div className="p-5">

              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-72 object-contain"
              />
              <a
                href={`https://api.whatsapp.com/send?phone=51958438095&text=${encodeURIComponent(
                  `Hola, me interesa cotizar el producto: ${item.nombre}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 py-3 rounded bg-[#6B6B6B] hover:bg-[#0D8B87] text-center text-white font-semibold transition"
              >
                Cotizar
              </a>
              <p className="mt-4 text-xs uppercase text-[#6B6B6B]">
                {item.categoria}
              </p>

              <h3 className="mt-2 text-[24px] leading-9 font-semibold text-[#6B6B6B]">
                {item.nombre}
              </h3>

              <div className="flex items-center gap-1 mt-4">

                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

                <span className="ml-2 text-[#6B6B6B]">
                  100% calidad
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center gap-3 mt-12 flex-wrap">

        {Array.from(
          { length: totalPaginas },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => {
                setPaginaActual(index + 1);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className={`
                w-11
                h-11
                rounded-full
                border
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  paginaActual === index + 1
                    ? "bg-[#6B6B6B] border-[#6B6B6B] text-white"
                    : "border-gray-300 text-[#6B6B6B] hover:bg-[#6B6B6B] hover:text-white hover:border-[#6B6B6B]"
                }
              `}
            >
              {index + 1}
            </button>
          )
        )}

        {/* Siguiente */}
        <button
          onClick={() => {
            if (paginaActual < totalPaginas) {
              setPaginaActual((prev) => prev + 1);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
          disabled={paginaActual === totalPaginas}
          className={`
            w-11
            h-11
            rounded-full
            border
            text-lg
            font-semibold
            transition-all
            duration-300

            ${
              paginaActual === totalPaginas
                ? "opacity-40 cursor-not-allowed border-gray-300 text-gray-400"
                : "border-gray-300 text-[#6B6B6B] hover:bg-[#6B6B6B] hover:text-white hover:border-[#6B6B6B]"
            }
          `}
        >
          &gt;
        </button>

      </div>

          {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
</section>
  );
}