import {Button} from "../ui/button";
import {StepLayout} from "./StepLayout";

interface Step4Props {
  projectName: string;
  architecture: string;
  packageManager: string;
  buildTool: string;
  onBack: () => void;
  onDownload: () => void;
}

export const Step4: React.FC<Step4Props> = (
  {
    projectName,
    architecture,
    packageManager,
    buildTool,
    onBack,
    onDownload,
  }) => {
  return (
    <StepLayout>
      <h2 className="text-xl font-semibold">¡Tu proyecto está listo! 🎉</h2>
      <p className="text-sm text-muted-foreground">Aquí tienes un resumen de la configuración elegida:</p>

      <div className="bg-muted/40 p-4 rounded-md text-sm space-y-2">
        <p><strong>Nombre del proyecto:</strong> {projectName}</p>
        <p><strong>Arquitectura:</strong> {architecture}</p>
        <p><strong>Package Manager:</strong> {packageManager}</p>
        <p><strong>Herramienta de Build:</strong> {buildTool}</p>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Anterior
        </Button>
        <Button onClick={onDownload}>
          Descargar .zip
        </Button>
      </div>
    </StepLayout>
  );
};
