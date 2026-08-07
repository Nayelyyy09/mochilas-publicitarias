import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import ProductDetail from "../components/ProductDetail";

const productos = [
  {
    id: 1,
    codigo: "N001",
    categoria: "Neceseres Publicitarios",
    nombre: "Financiera Confianza",
    imagen: "/imagenes/neceseres/Financiera Confianza.png",
    rating: 5,
  },
  {
    id: 2,
    codigo: "N002",
    categoria: "Neceseres Publicitarios",
    nombre: "Ibt",
    imagen: "/imagenes/neceseres/Ibt.png",
    rating: 5,
  },
  {
    id: 3,
    codigo: "N003",
    categoria: "Neceseres Publicitarios",
    nombre: "Master Bread",
    imagen: "/imagenes/neceseres/Master Bread.png",
    rating: 5,
  },
  {
    id: 4,
    codigo: "N004",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser A",
    imagen: "/imagenes/neceseres/Neceser a.png",
    rating: 5,
  },
  {
    id: 5,
    codigo: "N005",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Aventura",
    imagen: "/imagenes/neceseres/Neceser Aventura.png",
    rating: 5,
  },
  {
    id: 6,
    codigo: "N006",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Azul",
    imagen: "/imagenes/neceseres/Neceser Azul.png",
    rating: 5,
  },
  {
    id: 7,
    codigo: "N007",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Cuerina",
    imagen: "/imagenes/neceseres/Neceser Cuerina.png",
    rating: 5,
  },
  {
    id: 8,
    codigo: "N008",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Lonilla Plano",
    imagen: "/imagenes/neceseres/Neceser Lonilla Plano.png",
    rating: 5,
  },
  {
    id: 9,
    codigo: "N009",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Lonilla",
    imagen: "/imagenes/neceseres/Neceser Lonilla.png",
    rating: 5,
  },
  {
    id: 10,
    codigo: "N010",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Mama",
    imagen: "/imagenes/neceseres/Neceser Mama.png",
    rating: 5,
  },
  {
    id: 11,
    codigo: "N011",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Morado",
    imagen: "/imagenes/neceseres/Neceser Morado.png",
    rating: 5,
  },
  {
    id: 12,
    codigo: "N012",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser N",
    imagen: "/imagenes/neceseres/Neceser N.png",
    rating: 5,
  },
  {
    id: 13,
    codigo: "N013",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Negro",
    imagen: "/imagenes/neceseres/Neceser negro.png",
    rating: 5,
  },
  {
    id: 14,
    codigo: "N014",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Plomo",
    imagen: "/imagenes/neceseres/Neceser Plomo.png",
    rating: 5,
  },
  {
    id: 15,
    codigo: "N015",
    categoria: "Neceseres Publicitarios",
    nombre: "Neceser Regalo",
    imagen: "/imagenes/neceseres/Neceser Regalo.png",
    rating: 5,
  },
  {
    id: 16,
    codigo: "N016",
    categoria: "Neceseres Publicitarios",
    nombre: "Nylon Sublimado",
    imagen: "/imagenes/neceseres/Nylon Sublimado.png",
    rating: 5,
  },
  {
    id: 17,
    codigo: "N017",
    categoria: "Neceseres Publicitarios",
    nombre: "Peru Masivo",
    imagen: "/imagenes/neceseres/Peru Masivo.png",
    rating: 5,
  },
  {
    id: 18,
    codigo: "N018",
    categoria: "Neceseres Publicitarios",
    nombre: "Quavii",
    imagen: "/imagenes/neceseres/Quavii.png",
    rating: 5,
  },
  {
    id: 19,
    codigo: "N019",
    categoria: "Neceseres Publicitarios",
    nombre: "Razzeto Black",
    imagen: "/imagenes/neceseres/Razzeto black.png",
    rating: 5,
  },
  {
    id: 20,
    codigo: "N020",
    categoria: "Neceseres Publicitarios",
    nombre: "Razzeto",
    imagen: "/imagenes/neceseres/Razzeto.png",
    rating: 5,
  },
  {
    id: 21,
    codigo: "N021",
    categoria: "Neceseres Publicitarios",
    nombre: "Tela Satinada",
    imagen: "/imagenes/neceseres/Tela Satinada.png",
    rating: 5,
  },
  {
    id: 22,
    codigo: "N022",
    categoria: "Neceseres Publicitarios",
    nombre: "Verdum",
    imagen: "/imagenes/neceseres/Verdum.png",
    rating: 5,
  },
];

const PRODUCTOS_POR_PAGINA = 8;
export default function Neceseres() {
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
              image: item.imagen,
              name: item.nombre,
              code: item.codigo,
              categoryLabel: item.categoria,
              badge: "Nuevo",
              badgeColor: "bg-emerald-500",
              rating: item.rating ?? 5,
              reviews: 8,
              description: "Neceser publicitario personalizado.",
              features:["Personalización con logo","Material resistente","Mínimo 50 unidades"],
            })}
            className="border border-gray-200 bg-white hover:shadow-xl transition duration-300 cursor-pointer"
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
                onClick={(e)=>e.stopPropagation()}
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
      <ProductDetail product={selectedProduct} onClose={()=>setSelectedProduct(null)} />
    )}
  </section>
  );
}