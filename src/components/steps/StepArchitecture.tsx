import {Button} from "../ui/button";
import {StepLayout} from "./StepLayout";

interface Step2Props {
  selectedArchitecture: string;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const architectures = [
  {id: "clean", name: "Arquitectura Limpia", description: "Ideal para proyectos escalables y mantenibles."},
  {id: "mvc", name: "MVC", description: "Modelo-Vista-Controlador, patrón clásico y simple."},
];

export const StepArchitecture: React.FC<Step2Props> = ({selectedArchitecture, onSelect, onNext, onBack}) => {
  return (
    <StepLayout>
      <h2 className="text-xl font-semibold">Selecciona una arquitectura</h2>
      <div className="grid gap-4 w-full max-w-md">
        {architectures.map((arch) => (
          <button
            key={arch.id}
            onClick={() => onSelect(arch.id)}
            className={`w-full p-4 text-left border rounded-md transition ${
              selectedArchitecture === arch.id ? "border-[#1f8ac0] bg-[#1f8ac0]/10" : "hover:border-muted"
            }`}
          >
            <p className="font-semibold">{arch.name}</p>
            <p className="text-sm text-muted-foreground">{arch.description}</p>
          </button>
        ))}
      </div>
      <div className="flex justify-between w-full max-w-md pt-4">
        <Button variant="outline" onClick={onBack}>
          Anterior
        </Button>
        <Button onClick={onNext} disabled={!selectedArchitecture}>
          Siguiente
        </Button>
      </div>
    </StepLayout>
  );
};
