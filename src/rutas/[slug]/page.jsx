import Link from "next/link";

const SERVER_API_URL = process.env.SERVER_API_URL;

export default async function Rutas({ params }) {
  const slug = params.slug;
  const res = await fetch(`${SERVER_API_URL}/rutas/${slug}`);
  const data = await res.json();
  const ruta = data.ruta;
  console.log("Rutas returned", data);

  return (
    <div>
      <h1>Ruta</h1>
      <div className="container md:w-3/4 mx-auto">
        {ruta ? (
          <div className=" bg-slate-200 w-auto  p-3 m-2 rounded">
            <img
              className="rounded mx-auto object-fill"
              src={ruta.imagen ? ruta.imagen.sourceUrl : ""}
              alt={ruta.nombre}
            />
            <div>
              <h2 className="text-xl font-semibold mt-2">{ruta.nombre}</h2>
              <p dangerouslySetInnerHTML={{ __html: ruta.historia }}></p>
            </div>
            <Link href={`/rutas`}>
              <p className="text-sm text-right mt-2">Atrás</p>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
