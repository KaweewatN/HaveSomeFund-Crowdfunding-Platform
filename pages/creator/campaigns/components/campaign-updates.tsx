"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UpdateModal from "./update-modal";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface CampaignUpdatesProps {
  id: string;
  title: string;
  content: string;
  date: string;
  creatorName: string;
  creatorImage: string;
  campaignId: string;
  likes: number;
  comments: number;
}

export default function CampaignUpdates({
  updates = [],
}: {
  updates: CampaignUpdatesProps[];
}) {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Campaign Updates</CardTitle>
            <CardDescription>
              Keep your donors informed about your progress
            </CardDescription>
          </div>
          <Button onClick={() => setIsUpdateModalOpen(true)}>
            Post New Update
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 mt-3">
            {updates.length > 0 ? (
              updates.map((update: CampaignUpdatesProps) => (
                <div key={update.id} className="border-b pb-6 last:border-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{update.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {update.date
                        ? new Date(update.date).toISOString().split("T")[0]
                        : "N/A"}
                    </span>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap">{update.content}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{update.likes} Likes</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{update.comments} Comments</span>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No updates yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Keep your donors engaged by posting regular updates about your
                  campaign's progress.
                </p>
                <Button
                  className="mt-4"
                  onClick={() => setIsUpdateModalOpen(true)}
                >
                  Post Your First Update
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <UpdateModal
        campaignId={updates[0]?.campaignId} //same campaignId for all updates, so use the first one
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
      />
    </>
  );
}
