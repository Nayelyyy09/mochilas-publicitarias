import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const productos = [
  {
    id: 1,
    codigo: "mcp0018",
    nombre: "MOCHILA CORPORATIVA PUBLICITARIA - MCP0018",
    imagen: "/images/mochilas/mcp0018.jpg",
  },
  {
    id: 2,
    codigo: "mcp0020",
    nombre: "MOCHILA CORPORATIVA PUBLICITARIA - MCP0020",
    imagen: "/images/mochilas/mcp0020.jpg",
  },
  {
    id: 3,
    codigo: "mcp0021",
    nombre: "MOCHILA CORPORATIVA PUBLICITARIA - MCP0021",
    imagen: "/images/mochilas/mcp0021.jpg",
  },
  {
    id: 4,
    codigo: "mpe0001",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0001",
    imagen: "/images/mochilas/mpe0001.jpg",
  },
  {
    id: 5,
    codigo: "mpe0002",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0002",
    imagen: "/images/mochilas/mpe0002.jpg",
  },
  {
    id: 6,
    codigo: "mpe0003",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0003",
    imagen: "/images/mochilas/mpe0003.jpg",
  },
  {
    id: 7,
    codigo: "mpe0004",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0004",
    imagen: "/images/mochilas/mpe0004.jpg",
  },
  {
    id: 8,
    codigo: "mpe0005",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0005",
    imagen: "/images/mochilas/mpe0005.jpg",
  },

  // Segunda página
  {
    id: 9,
    codigo: "mcp0019",
    nombre: "MOCHILA CORPORATIVA PUBLICITARIA - MCP0019",
    imagen: "/images/mochilas/mcp0019.jpg",
  },
  {
    id: 10,
    codigo: "mcp0022",
    nombre: "MOCHILA CORPORATIVA PUBLICITARIA - MCP0022",
    imagen: "/images/mochilas/mcp0022.jpg",
  },
  {
    id: 11,
    codigo: "mcp0023",
    nombre: "MOCHILA CORPORATIVA PUBLICITARIA - MCP0023",
    imagen: "/images/mochilas/mcp0023.jpg",
  },
  {
    id: 12,
    codigo: "mpe0006",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0006",
    imagen: "/images/mochilas/mpe0006.jpg",
  },
  {
    id: 13,
    codigo: "mpe0007",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0007",
    imagen: "/images/mochilas/mpe0007.jpg",
  },
  {
    id: 14,
    codigo: "mpe0008",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0008",
    imagen: "/images/mochilas/mpe0008.jpg",
  },
  {
    id: 15,
    codigo: "mpe0009",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0009",
    imagen: "/images/mochilas/mpe0009.jpg",
  },
  {
    id: 16,
    codigo: "mpe0010",
    nombre: "MOCHILA PUBLICITARIA ECONÓMICA - MPE0010",
    imagen: "/images/mochilas/mpe0010.jpg",
  },
];

const PRODUCTOS_POR_PAGINA = 8;

export default function Mochilas() {
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

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          border
          border-gray-200
        "
      >
        {productosActuales.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 bg-white transition duration-300 hover:shadow-xl"
          >
            <div className="p-5">

              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-full h-72 object-contain"
              />

              {/* Botón Cotizar */}
              <Link
                to={`/productos/mochilas/${item.codigo}`}
                className="
                  block
                  w-full
                  mt-4
                  bg-[#6B6B6B]
                  hover:bg-[#0D8B87]
                  text-white
                  text-center
                  py-3
                  rounded
                  font-semibold
                  transition
                "
              >
                Cotizar
              </Link>

              <p className="mt-4 text-xs uppercase text-[#6B6B6B]">
                Mochilas Publicitarias
              </p>

              <h3
                className="
                  mt-2
                  text-[24px]
                  leading-9
                  font-semibold
                  text-[#6B6B6B]
                "
              >
                {item.nombre}
              </h3>

              <div className="flex items-center gap-1 mt-4">

                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
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

      {/* PAGINACIÓN */}

      <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">

        {Array.from({ length: totalPaginas }, (_, index) => (

          <button
            key={index}
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

        ))}

        <button
          onClick={() => {

            if (paginaActual < totalPaginas) {

              setPaginaActual(paginaActual + 1);

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