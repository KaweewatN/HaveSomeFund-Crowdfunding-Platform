import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CampaignUpdate } from "@/lib/data/campaign-data";

interface CampaignUpdatesProps {
  campaignId: string;
  updates: CampaignUpdate[];
}

export default function CampaignUpdates({
  campaignId,
  updates,
}: CampaignUpdatesProps) {
  if (updates.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No updates yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {updates.map((update) => (
        <div key={update.id} className="border-b pb-8 last:border-0">
          <div className="flex items-center gap-3 mb-3">
            <Avatar>
              <AvatarImage
                src={update.creatorImage || "/placeholder.svg"}
                alt={update.creatorName}
              />
              <AvatarFallback>{update.creatorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{update.creatorName}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(update.date).toLocaleDateString()}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{update.title}</h3>
          <p className="text-muted-foreground">{update.content}</p>
        </div>
      ))}
    </div>
  );
}
