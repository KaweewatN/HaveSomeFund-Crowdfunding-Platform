import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatCurrency } from "@/lib/utils";

export default function CampaignDonors({ donors }: any) {
  if (donors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No donors yet. Be the first to donate!
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {donors.map((donor: any) => (
        <div key={donor.id} className="flex flex-col p-4 border rounded-lg">
          <div className="flex items-center gap-4 mb-3">
            <Avatar>
              {donor.isAnonymous ? (
                <AvatarFallback>A</AvatarFallback>
              ) : (
                <>
                  <AvatarImage src={donor.image || ""} alt={donor.donorName} />
                  <AvatarFallback>{donor.donorName.charAt(0)}</AvatarFallback>
                </>
              )}
            </Avatar>
            <div>
              <p className="font-medium">
                {donor.donorName ? (
                  donor.donorName
                ) : (
                  <span className="text-slate-700">Anonymus</span>
                )}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-teal-600 font-medium">
                  Donated {formatCurrency(donor.amount)}
                </span>{" "}
                • {new Date(donor.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          {donor.comment && (
            <p className="text-sm text-muted-foreground italic">
              "{donor.comment}"
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
