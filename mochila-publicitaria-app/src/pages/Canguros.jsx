import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const productos = [
  {
    id: 1,
    codigo: "CG001",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro Autopista Del Norte Black",
    imagen: "/imagenes/canguros/Canguro Autopista Del Norte Black.png",
    rating: 5,
  },
  {
    id: 2,
    codigo: "CG002",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro Autopista Del Norte",
    imagen: "/imagenes/canguros/Canguro Autopista Del Norte.png",
    rating: 5,
  },
  {
    id: 3,
    codigo: "CG003",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro Etex",
    imagen: "/imagenes/canguros/Canguro Etex.png",
    rating: 5,
  },
  {
    id: 4,
    codigo: "CG004",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro Intertelt",
    imagen: "/imagenes/canguros/Canguro Intertelt.png",
    rating: 5,
  },
  {
    id: 5,
    codigo: "CG005",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro Intradevco",
    imagen: "/imagenes/canguros/Canguro Intradevco.png",
    rating: 5,
  },
  {
    id: 6,
    codigo: "CG006",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro Molitalia",
    imagen: "/imagenes/canguros/Canguro Molitalia.png",
    rating: 5,
  },
  {
    id: 7,
    codigo: "CG007",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro Ohla",
    imagen: "/imagenes/canguros/Canguro Ohla.png",
    rating: 5,
  },
  {
    id: 8,
    codigo: "CG008",
    categoria: "Canguros Publicitarios",
    nombre: "Canguro UPN",
    imagen: "/imagenes/canguros/Canguro UPN.png",
    rating: 5,
  },
];

const PRODUCTOS_POR_PAGINA = 8;
export default function Canguros() {
  const [paginaActual, setPaginaActual] = useState(1);

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
            className="border border-gray-200 bg-white hover:shadow-xl transition duration-300"
          >

            <div className="p-5">

              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-72 object-contain"
              />

              <Link
                to={`/productos/canguros/${item.codigo}`}
                className="block w-full mt-4 py-3 rounded bg-[#6B6B6B] hover:bg-[#0D8B87] text-center text-white font-semibold transition"
              >
                Cotizar
              </Link>

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

    </section>
  );
}