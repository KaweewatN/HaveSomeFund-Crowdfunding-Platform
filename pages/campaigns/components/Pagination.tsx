import { Button } from "@/components/ui/button";

export default function Pagination() {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-2">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="outline" className="bg-teal-50">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
