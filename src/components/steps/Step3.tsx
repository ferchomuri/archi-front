import {Button} from "../ui/button";
import {StepLayout} from "./StepLayout";

interface Step3Props {
  packageManager: string;
  setPackageManager: (value: string) => void;
  buildTool: string;
  setBuildTool: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const packageManagers = ["pnpm", "npm", "yarn"];
const buildTools = ["vite", "webpack"];

export const Step3: React.FC<Step3Props> = ({
                                              packageManager,
                                              setPackageManager,
                                              buildTool,
                                              setBuildTool,
                                              onNext,
                                              onBack,
                                            }) => {
  return (
    <StepLayout>
      <h2 className="text-xl font-semibold">Configuración opcional</h2>
      <p className="text-sm text-muted-foreground">Puedes dejar los valores por defecto o personalizar.</p>

      <div>
        <h3 className="font-medium mb-2">Package Manager</h3>
        <div className="grid gap-2">
          {packageManagers.map((pm) => (
            <button
              key={pm}
              onClick={() => setPackageManager(pm)}
              className={`w-full p-3 border rounded-md text-left transition ${
                packageManager === pm ? "border-primary bg-primary/10" : "hover:border-muted"
              }`}
            >
              {pm}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2 mt-4">Build Tool</h3>
        <div className="grid gap-2">
          {buildTools.map((tool) => (
            <button
              key={tool}
              onClick={() => setBuildTool(tool)}
              className={`w-full p-3 border rounded-md text-left transition ${
                buildTool === tool ? "border-primary bg-primary/10" : "hover:border-muted"
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Anterior
        </Button>
        <Button onClick={onNext}>Siguiente</Button>
      </div>
    </StepLayout>
  );
};
