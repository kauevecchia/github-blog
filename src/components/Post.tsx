import { Issue } from "../pages/Home";
import ReactMarkdown from "react-markdown";

interface PostProps {
  issueInfo: Issue;
}

export function Post({ issueInfo }: PostProps) {
  const createdAtDate = new Date(issueInfo.created_at);
  const now = new Date();
  const diffInMs = now.getTime() - createdAtDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-base-post hover:border-base-label flex h-64 cursor-pointer flex-col gap-5 rounded-lg border-2 border-transparent p-8 transition duration-300 hover:scale-105">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base-title text-xl font-bold">{issueInfo.title}</h3>
        <p className="text-base-span text-sm">
          {diffInDays === 0
            ? "Postado hoje"
            : `${diffInDays} dia${diffInDays > 1 ? "s" : ""} atrás`}
        </p>
      </div>

      <div className="text-base-text">
        <ReactMarkdown
          components={{
            p: (props) => <p className="text-base-text" {...props} />,
            h1: (props) => <h1 className="text-base-text" {...props} />,
            h2: (props) => <h2 className="text-base-text" {...props} />,
            h4: (props) => <h4 className="text-base-text" {...props} />,
            li: (props) => <li className="text-base-text" {...props} />,
            a: (props) => <a className="text-blue-500 underline" {...props} />,
            code: (props) => (
              <code
                className="bg-base-border rounded px-1 py-0.5 font-mono text-sm text-blue-400"
                {...props}
              />
            ),
          }}
        >
          {issueInfo.body.length > 170
            ? issueInfo.body.slice(0, 170) + "..."
            : issueInfo.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
