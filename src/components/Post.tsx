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
    <div>
      <div>
        <h3>{issueInfo.title}</h3>
        <p>
          {diffInDays === 0
            ? "Postado hoje"
            : `${diffInDays} dia${diffInDays > 1 ? "s" : ""} atrás`}
        </p>
      </div>
      <p>{issueInfo.body}</p>
    </div>
  );
}
