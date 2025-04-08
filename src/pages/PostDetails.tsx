import { useNavigate, useParams } from "react-router-dom";
import { Issue } from "./Home";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import arrowLeft from "../assets/arrow-left.svg";
import linkSvg from "../assets/link-svg.svg";
import githubSvg from "../assets/github.svg";
import calendarSvg from "../assets/calendar.svg";
import commentSvg from "../assets/comment.svg";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Loading } from "../components/Loading";

export function PostDetails() {
  const [postInfo, setPostInfo] = useState<Issue | null>(null);

  const createdAtDate = new Date(postInfo?.created_at || 0);
  const now = new Date();
  const diffInMs = now.getTime() - createdAtDate.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const navigate = useNavigate();

  const { issueNumber } = useParams();

  useEffect(() => {
    fetchPostInfo();
  }, []);

  async function fetchPostInfo() {
    const response = await api.get(
      `/repos/kauevecchia/github-blog/issues/${issueNumber}`,
    );

    setPostInfo(response.data);
  }

  return (
    <>
      {postInfo ? (
        <section className="-mt-12 max-w-5xl">
          <div className="bg-base-profile rounded-lg p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <button
                    className="hover:border-blue flex cursor-pointer items-center justify-center gap-2 border-b-2 border-transparent"
                    onClick={() => navigate("/")}
                  >
                    <img src={arrowLeft} />
                    <span className="text-blue text-xs">VOLTAR</span>
                  </button>
                  <a
                    href={postInfo?.html_url}
                    className="hover:border-blue flex cursor-pointer items-center justify-center gap-2 border-b-2 border-transparent"
                    target="_blank"
                  >
                    <span className="text-blue text-xs">VER NO GITHUB</span>
                    <img src={linkSvg} alt="" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-base-text text-2xl font-bold">
                  {postInfo?.title}
                </h1>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <img src={githubSvg} alt="" className="h-5 w-5" />
                    <span className="text-base-subtitle">
                      {postInfo?.user.login}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <img src={calendarSvg} alt="" className="h-5 w-5" />
                    <span className="text-base-subtitle">
                      {diffInDays === 0
                        ? "Postado hoje"
                        : `${diffInDays} dia${diffInDays > 1 ? "s" : ""} atrás`}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <img src={commentSvg} alt="" className="h-5 w-5" />
                    <span className="text-base-subtitle">
                      {postInfo?.comments} comentários
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-background rounded-b-lg px-8 py-10 shadow-md shadow-slate-800">
            <ReactMarkdown
              components={{
                p: (props) => <p className="text-base-text" {...props} />,
                h1: (props) => (
                  <h1 className="text-base-title font-bold" {...props} />
                ),
                h2: (props) => (
                  <h2 className="text-base-title font-bold" {...props} />
                ),
                h4: (props) => (
                  <h4 className="text-base-title font-bold" {...props} />
                ),
                li: (props) => (
                  <li className="text-base-text ml-6 list-disc" {...props} />
                ),
                a: (props) => (
                  <a className="text-blue-500 underline" {...props} />
                ),
                code: ({
                  inline,
                  className,
                  children,
                  ...props
                }: {
                  inline?: boolean;
                  className?: string;
                  children?: React.ReactNode;
                }) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code
                      className="bg-base-border rounded px-1 py-0.5 font-mono text-sm text-blue-400"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {postInfo?.body}
            </ReactMarkdown>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
