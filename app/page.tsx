import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card
        title="Agenda/Topic"
        description="Descripction of the topic"
        updatedAt="03/08/2020"
        code="SAAS-0000"
        index={1}
        color="bg-red-500"
      ></Card>
      <Card
        title="Agenda/Topic"
        description="Descripction of the topic"
        updatedAt="03/08/2021"
        code="SAAS-0001"
        index={2}
        color="bg-purple-500"
      ></Card>
    </div>
  );
}
