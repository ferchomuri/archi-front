import {Card, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";

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
  2: {
    title: "Package Manager y Herramienta de Build",
    description:
      "Elige tu gestor de paquetes favorito y la herramienta de build. Puedes dejarlo por defecto si no estás seguro.",
  },
  3: {
    title: "¡Descarga lista!",
    description:
      "Tu proyecto está armado y listo para descargar como un .zip.\n¡Hora de empezar a construir!",
  },
};

export const SideInfoCard: React.FC<SideInfoCardProps> = ({currentStep}) => {
  const content = stepText[currentStep] ?? stepText[0];

  return (
    <Card className="bg-black text-white w-80 hidden md:block">
      <CardHeader>
        <CardTitle className="text-white text-lg">{content.title}</CardTitle>
        <CardDescription className="text-white/70 whitespace-pre-line">
          {content.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
