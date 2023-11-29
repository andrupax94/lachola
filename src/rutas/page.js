import Link from "next/link";

const SERVER_API_URL = process.env.SERVER_API_URL;

export default async function Rutas() {
  const res = await fetch(`${SERVER_API_URL}/rutas`);
  const data = await res.json();
  const rutas = data.rutas;
  // console.log("Rutas returned", rutas);

  return (
    <div className="container mx-auto h-full p-2 md:w-3/4">
      <h1 className="text-slate-200 text-xl font-semibold mb-2">Rutas</h1>
      <div className="space-y-2">
        {rutas ? (
          rutas.map((ruta) => (
            <div className="bg-slate-200 p-2 rounded" key={ruta.id}>
              <Link href={`/rutas/${ruta.slug}`}>
                <h2 className="text-lg font-base">{ruta.nombre}</h2>
              </Link>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
