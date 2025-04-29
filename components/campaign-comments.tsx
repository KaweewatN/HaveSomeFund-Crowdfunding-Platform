"use client";

import type React from "react";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CampaignComment } from "@/lib/data/campaign-data";

interface CampaignCommentsProps {
  campaignId: string;
  comments: CampaignComment[];
}

export default function CampaignComments({
  campaignId,
  comments,
}: CampaignCommentsProps) {
  const [commentText, setCommentText] = useState("");
  const [localComments, setLocalComments] =
    useState<CampaignComment[]>(comments);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the comment to the backend
    const newComment: CampaignComment = {
      id: `local-${Date.now()}`,
      content: commentText,
      date: new Date().toISOString(),
      userName: "You", // In a real app, this would be the logged-in user's name
      userImage: "/placeholder.svg?height=40&width=40", // In a real app, this would be the user's image
    };

    setLocalComments([newComment, ...localComments]);
    setCommentText("");
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Leave a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!commentText.trim()}>
            Post Comment
          </Button>
        </div>
      </form>

      <div className="space-y-6">
        {localComments.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-muted-foreground">
              No comments yet. Be the first to leave a comment!
            </p>
          </div>
        ) : (
          localComments.map((comment) => (
            <div key={comment.id} className="border-b pb-6 last:border-0">
              <div className="flex items-center gap-3 mb-3">
                <Avatar>
                  <AvatarImage
                    src={comment.userImage || "/placeholder.svg"}
                    alt={comment.userName}
                  />
                  <AvatarFallback>{comment.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{comment.userName}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(comment.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
