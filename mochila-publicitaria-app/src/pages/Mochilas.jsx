import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const productos = [
  { id: 1, codigo: "M001", nombre: "Caña Brava", imagen: "/imagenes/mochilas/Caña Brava.png" },
  { id: 2, codigo: "M002", nombre: "Don Pollo", imagen: "/imagenes/mochilas/Don Pollo.png" },
  { id: 3, codigo: "M003", nombre: "Intertek", imagen: "/imagenes/mochilas/Intertek.png" },
  { id: 4, codigo: "M004", nombre: "Malla laterales", imagen: "/imagenes/mochilas/Malla laterales.png" },
  { id: 5, codigo: "M005", nombre: "Mochila Antamina", imagen: "/imagenes/mochilas/Mochila Antamina.png" },
  { id: 6, codigo: "M006", nombre: "Mochila Canadá", imagen: "/imagenes/mochilas/Mochila Canadá.png" },
  { id: 7, codigo: "M007", nombre: "Mochila Caraz", imagen: "/imagenes/mochilas/Mochila Caraz.png" },
  { id: 8, codigo: "M008", nombre: "Mochila Cartagena", imagen: "/imagenes/mochilas/Mochila Cartagena.png" },
  { id: 9, codigo: "M009", nombre: "Mochila CBC (2)", imagen: "/imagenes/mochilas/Mochila CBC (2).png" },
  { id: 10, codigo: "M010", nombre: "Mochila CBC", imagen: "/imagenes/mochilas/Mochila Cbc.png" },
  { id: 11, codigo: "M011", nombre: "Mochila Clínica Ricardo Palma", imagen: "/imagenes/mochilas/Mochila Clinica Ricardo Palma.png" },
  { id: 12, codigo: "M012", nombre: "Mochila con Correas", imagen: "/imagenes/mochilas/Mochila con Correas.png" },
  { id: 13, codigo: "M013", nombre: "Mochila Costa", imagen: "/imagenes/mochilas/Mochila Costa.png" },
  { id: 14, codigo: "M014", nombre: "Mochila De Emergencia Níger", imagen: "/imagenes/mochilas/Mochila De Emergencia Níger.png" },
  { id: 15, codigo: "M015", nombre: "MOCHILA DOHA", imagen: "/imagenes/mochilas/MOCHILA DOHA.png" },
  { id: 16, codigo: "M016", nombre: "Mochila Don Pollo", imagen: "/imagenes/mochilas/Mochila Don Pollo.png" },
  { id: 17, codigo: "M017", nombre: "Mochila Equans", imagen: "/imagenes/mochilas/Mochila Equans.png" },
  { id: 18, codigo: "M018", nombre: "MOCHILA ESSEN", imagen: "/imagenes/mochilas/MOCHILA ESSEN.png" },
  { id: 19, codigo: "M019", nombre: "Mochila Etex negra", imagen: "/imagenes/mochilas/Mochila Etex negra.png" },
  { id: 20, codigo: "M020", nombre: "Mochila Etex", imagen: "/imagenes/mochilas/Mochila Etex.png" },
  { id: 21, codigo: "M021", nombre: "MOCHILA EUROPA", imagen: "/imagenes/mochilas/MOCHILA EUROPA.png" },
  { id: 22, codigo: "M022", nombre: "MOCHILA FORT", imagen: "/imagenes/mochilas/MOCHILA FORT.png" },
  { id: 23, codigo: "M023", nombre: "MOCHILA GHENT", imagen: "/imagenes/mochilas/MOCHILA GHENT.png" },
  { id: 24, codigo: "M024", nombre: "MOCHILA GLASGLOW", imagen: "/imagenes/mochilas/MOCHILA GLASGLOW.png" },
  { id: 25, codigo: "M025", nombre: "Mochila Heineken", imagen: "/imagenes/mochilas/Mochila Heineken.png" },
  { id: 26, codigo: "M026", nombre: "MOCHILA HOBART", imagen: "/imagenes/mochilas/MOCHILA HOBART.png" },
  { id: 27, codigo: "M027", nombre: "Mochila Latina", imagen: "/imagenes/mochilas/Mochila Latina.png" },
  { id: 28, codigo: "M028", nombre: "MOCHILA NIZA", imagen: "/imagenes/mochilas/MOCHILA NIZA.png" },
  { id: 29, codigo: "M029", nombre: "Mochila Nylon", imagen: "/imagenes/mochilas/Mochila Nylon.png" },
  { id: 30, codigo: "M030", nombre: "Mochila Ochosur", imagen: "/imagenes/mochilas/Mochila Ochosur.png" },
  { id: 31, codigo: "M031", nombre: "MOCHILA OLMOS", imagen: "/imagenes/mochilas/MOCHILA OLMOS.png" },
  { id: 32, codigo: "M032", nombre: "MOCHILA PATAGONIA", imagen: "/imagenes/mochilas/MOCHILA PATAGONIA.png" },
  { id: 33, codigo: "M033", nombre: "Mochila poliéster", imagen: "/imagenes/mochilas/Mochila poliéster.png" },
  { id: 34, codigo: "M034", nombre: "MOCHILA PRAGA", imagen: "/imagenes/mochilas/MOCHILA PRAGA.png" },
  { id: 35, codigo: "M035", nombre: "Mochila Publibox", imagen: "/imagenes/mochilas/Mochila Publibox.png" },
  { id: 36, codigo: "M036", nombre: "Mochila Publiventa", imagen: "/imagenes/mochilas/Mochila Publiventa.png" },
  { id: 37, codigo: "M037", nombre: "MOCHILA RIGA", imagen: "/imagenes/mochilas/MOCHILA RIGA.png" },
  { id: 38, codigo: "M038", nombre: "MOCHILA SAFARI", imagen: "/imagenes/mochilas/MOCHILA SAFARI.png" },
  { id: 39, codigo: "M039", nombre: "Mochila Sayon", imagen: "/imagenes/mochilas/Mochila Sayon.png" },
  { id: 40, codigo: "M040", nombre: "MOCHILA SELVA", imagen: "/imagenes/mochilas/MOCHILA SELVA.png" },
  { id: 41, codigo: "M041", nombre: "MOCHILA SINTRA", imagen: "/imagenes/mochilas/MOCHILA SINTRA.png" },
  { id: 42, codigo: "M042", nombre: "Mochila Stracon Negro", imagen: "/imagenes/mochilas/Mochila Stracon Negro.png" },
  { id: 43, codigo: "M043", nombre: "Mochila Stracon", imagen: "/imagenes/mochilas/Mochila Stracon.png" },
  { id: 44, codigo: "M044", nombre: "MOCHILA SULLANA", imagen: "/imagenes/mochilas/MOCHILA SULLANA.png" },
  { id: 45, codigo: "M045", nombre: "Mochila Tecsup", imagen: "/imagenes/mochilas/Mochila Tecsup.png" },
  { id: 46, codigo: "M046", nombre: "MOCHILA TOKYO", imagen: "/imagenes/mochilas/MOCHILA TOKYO.png" },
  { id: 47, codigo: "M047", nombre: "MOCHILA URBAN", imagen: "/imagenes/mochilas/MOCHILA URBAN.png" },
  { id: 48, codigo: "M048", nombre: "MOCHILA VIAJERA ÁFRICA", imagen: "/imagenes/mochilas/MOCHILA VIAJERA ÁFRICA.png" },
  { id: 49, codigo: "M049", nombre: "Verisure", imagen: "/imagenes/mochilas/Verisure.png" },
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

    </section>
  );
}