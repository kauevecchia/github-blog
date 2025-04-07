import { Issue } from "../pages/Home";

interface PostProps {
  issueInfo: Issue;
}

export function Post({ issueInfo }: PostProps) {
  return (
    <div>
      <div>
        <h3>{issueInfo.title}</h3>
        <p>{}</p>
      </div>
      <p>{issueInfo.body}</p>
    </div>
  );
}
