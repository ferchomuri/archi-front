import {Card,} from "@/components/ui/card";
import {clsx} from "clsx";

interface SideInfoCardProps {
  currentStep: number;
}

const stepText: Record<number, { title: string; description: string }> = {
  0: {
    title: "Creando tu proyecto",
    description:
      "Dale un nombre a tu proyecto y elige con qué tecnología quieres empezar.\n(Por ahora solo está disponible React.)",
  },
  1: {
    title: "Seleccionando tu arquitectura",
    description:
      "Escoge cómo estará organizada tu app: ¿prefieres algo simple como MVC o más escalable como Arquitectura Limpia?",
  },
  // 2: {
  //   title: "Package Manager y Herramienta de Build",
  //   description:
  //     "Elige tu gestor de paquetes favorito y la herramienta de build. Puedes dejarlo por defecto si no estás seguro.",
  // },
  2: {
    title: "¡Descarga lista!",
    description:
      "Tu proyecto está armado y listo para descargar como un .zip.\n¡Hora de empezar a construir!",
  },
};

const renderAllInformation = (currentStep: number) => {
  return (
    <div className="p-4">
      {Object.entries(stepText).map(([step, content]) => (
        <div key={step} className="mb-4">
          <h3 className={clsx(
            step === String(currentStep) ? "text-white" : "text-muted-foreground",
            "text-lg font-semibold")}>
            {content.title}
          </h3>
          <p className={clsx(step === String(currentStep) ? "text-white" : "text-muted-foreground",
            "text-sm text-muted-foreground whitespace-pre-line")}>
            {content.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export const SideInfoCard: React.FC<SideInfoCardProps> = ({currentStep}) => {

  return (
    <Card className="bg-black text-white w-80 hidden md:block md:h-[70vh]">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          {renderAllInformation(currentStep)}
        </div>
        <div className="p-4 border-t border-white/20">
          <p className="text-sm text-muted-foreground">
            Aquí encontrarás información sobre cada paso del proceso de creación de tu proyecto.
          </p>
        </div>
      </div>
    </Card>
  );
};
