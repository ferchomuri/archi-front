import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {StepLayout} from "./StepLayout";

interface Step1Props {
  projectName: string;
  setProjectName: (value: string) => void;
  onNext: () => void;
}

export const StepName: React.FC<Step1Props> = ({projectName, setProjectName, onNext}) => {
  return (
    <StepLayout>
      <h2 className="text-xl font-semibold">¿Cómo se llamará tu proyecto?</h2>
      <div className="space-y-2 w-full max-w-md">
        <Input
          type="text"
          placeholder="Ej. mi-generador-react"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">Este nombre se usará como carpeta raíz del proyecto.</p>
      </div>
      <div className="flex justify-end w-full max-w-md">
        <Button onClick={onNext} disabled={!projectName.trim()}>
          Siguiente
        </Button>
      </div>
    </StepLayout>
  );
};
