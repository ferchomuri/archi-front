import {useState} from "react";
import {StepName} from "../components/steps/StepName.tsx";
import {StepArchitecture} from "../components/steps/StepArchitecture.tsx";
import {StepDownload} from "../components/steps/StepDownload.tsx";
import {SideInfoCard} from "../components/SideInfoCard";
import {downloadProjectZip} from "@/services/downloadZip";

export const WizardContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [selectedArchitecture, setSelectedArchitecture] = useState("");
  const [downloading, setDownloading] = useState(false);
  const packageManager = "npm";
  const buildTool = "webpack";

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepName
            projectName={projectName}
            setProjectName={setProjectName}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <StepArchitecture
            selectedArchitecture={selectedArchitecture}
            onSelect={setSelectedArchitecture}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <StepDownload
            projectName={projectName}
            architecture={selectedArchitecture}
            packageManager={packageManager}
            buildTool={buildTool}
            onBack={handleBack}
            onDownload={async () => {
              try {
                setDownloading(true);
                await downloadProjectZip({
                  projectName,
                  architecture: selectedArchitecture,
                  language: "react",
                  packageManager,
                  buildTool,
                });
              } catch (err) {
                alert("Error al descargar el proyecto" + (err instanceof Error ? `: ${err.message}` : ""));
              } finally {
                setDownloading(false);
              }
            }}
            isLoading={downloading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto h-[90vh]">
      <div className="flex-1 flex justify-center flex-col">{renderStep()}</div>
      <SideInfoCard currentStep={currentStep}/>
    </div>
  );
};
