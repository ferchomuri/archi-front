import {useState} from "react";
import {Step1} from "../components/steps/Step1";
import {Step2} from "../components/steps/Step2";
import {Step4} from "../components/steps/Step4";
import {SideInfoCard} from "../components/SideInfoCard";
import {downloadProjectZip} from "@/services/downloadZip";

export const WizardContainer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [selectedArchitecture, setSelectedArchitecture] = useState("");
  const packageManager = "npm";
  const buildTool = "webpack";

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handleBack = () => setCurrentStep((prev) => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Step1
            projectName={projectName}
            setProjectName={setProjectName}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <Step2
            selectedArchitecture={selectedArchitecture}
            onSelect={setSelectedArchitecture}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return (
          <Step4
            projectName={projectName}
            architecture={selectedArchitecture}
            packageManager={packageManager}
            buildTool={buildTool}
            onBack={handleBack}
            onDownload={() =>
              downloadProjectZip({
                projectName,
                architecture: selectedArchitecture,
                packageManager,
                buildTool,
              })
            }
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
