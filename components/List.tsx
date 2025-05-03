import React from "react";
import InfoCard from "./Card"; // Asegúrate de que la ruta sea correcta

const CardList = () => {
  // Simula datos para 5 InfoCard
  const cardData = [
    {
      title: "Producto A",
      code: "PROD-001",
      description: "Descripción detallada del Producto A.",
      updatedAt: "2025-05-01",
      index: 1,
      color: "bg-blue-500",
    },
    {
      title: "Artículo B",
      code: "ART-002",
      description: "Un interesante artículo sobre el tema B.",
      updatedAt: "2025-04-28",
      index: 2,
      color: "bg-green-500",
    },
    {
      title: "Servicio C",
      code: "SERV-003",
      description: "Información importante sobre el Servicio C.",
      updatedAt: "2025-05-02",
      index: 3,
      color: "bg-yellow-500",
    },
    {
      title: "Evento D",
      code: "EVT-004",
      description: "Detalles del próximo Evento D.",
      updatedAt: "2025-04-30",
      index: 4,
      color: "bg-red-500",
    },
    {
      title: "Noticia E",
      code: "NEWS-005",
      description: "Últimas noticias y actualizaciones sobre E.",
      updatedAt: "2025-05-03",
      index: 5,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="space-y-4">
      {" "}
      {/* Utiliza Tailwind CSS para espaciar los elementos */}
      {cardData.map((data) => (
        <InfoCard key={data.code} {...data} />
      ))}
    </div>
  );
};

export default CardList;
