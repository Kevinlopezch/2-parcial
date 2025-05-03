import Image from "next/image";
import Card from "@/components/Card";
import CardList from "@/components/List";
import TemplateComponent from "@/components/Template";

export default function Home() {
  return (
    <div>
      <TemplateComponent
        header={<h1>Título del template</h1>}
        footer={<p>&copy; 2025 Mi Aplicación</p>}
        className="max-w-md mx-auto" // Clases adicionales para centrar y limitar el ancho
      >
        <CardList />
      </TemplateComponent>
    </div>
  );
}
