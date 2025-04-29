"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FormNavProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSaveDraft: () => void;
  onSubmit: () => void;
  isLastStep: boolean;
  isSubmitting: boolean;
}

export default function FormNav({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSaveDraft,
  onSubmit,
  isLastStep,
  isSubmitting,
}: FormNavProps) {
  return (
    <div className="space-y-4">
      <Separator />
      <div className="flex justify-between">
        <div>
          {currentStep > 0 && (
            <Button type="button" variant="outline" onClick={onPrevious}>
              Previous
            </Button>
          )}
        </div>
        <div className="flex space-x-2">
          <Button type="button" variant="outline" onClick={onSaveDraft}>
            Save Draft
          </Button>

          {!isLastStep ? (
            <Button type="button" onClick={onNext}>
              Next
            </Button>
          ) : (
            <Button
              type="button"
              onClick={onSubmit}
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? "Publishing..." : "Publish Campaign"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
