import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  title: string;
}

interface FormStepperProps {
  steps: Step[];
  currentStep: number;
}

export default function FormStepper({ steps, currentStep }: FormStepperProps) {
  return (
    <div className="hidden md:block">
      <nav aria-label="Progress">
        <ol role="list" className="flex space-x-4">
          {steps.map((step, index) => (
            <li key={step.id} className="flex-1">
              <div
                className={cn(
                  "group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4",
                  index < currentStep
                    ? "border-primary"
                    : index === currentStep
                    ? "border-primary"
                    : "border-muted-foreground/20"
                )}
              >
                <span
                  className={cn(
                    "text-sm font-medium",
                    index < currentStep
                      ? "text-primary"
                      : index === currentStep
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {index + 1}. {step.title}
                </span>
                <span className="text-sm">
                  {index < currentStep && (
                    <CheckIcon className="ml-1 inline-block h-4 w-4 text-primary" />
                  )}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
