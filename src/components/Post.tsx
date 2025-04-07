import { Issue } from "../pages/Home";

interface PostProps {
  issueInfo: Issue;
}

export function Post({ issueInfo }: PostProps) {
  const createdAtDate = new Date(issueInfo.created_at);
  const now = new Date();
  const diffInMs = now.getTime() - createdAtDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-base-post hover:border-base-label flex cursor-pointer flex-col gap-5 rounded-lg border-2 border-transparent p-8 transition duration-300 hover:scale-105">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base-title text-xl">{issueInfo.title}</h3>
        <p className="text-base-span text-sm">
          {diffInDays === 0
            ? "Postado hoje"
            : `${diffInDays} dia${diffInDays > 1 ? "s" : ""} atrás`}
        </p>
      </div>
      <p className="text-base-text">
        {issueInfo.body.length > 180
          ? issueInfo.body.slice(0, 180) + "..."
          : issueInfo.body}
      </p>
    </div>
  );
}
