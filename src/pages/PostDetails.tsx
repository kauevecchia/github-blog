import { useParams } from "react-router-dom";
import { Issue } from "./Home";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import arrowLeft from "../assets/arrow-left.svg";
import linkSvg from "../assets/link-svg.svg";
import githubSvg from "../assets/github.svg";
import calendarSvg from "../assets/calendar.svg";
import commentSvg from "../assets/comment.svg";

export function PostDetails() {
  const [postInfo, setPostInfo] = useState<Issue | null>(null);

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
    <section className="-mt-12 max-w-5xl">
      <div className="bg-base-profile rounded-lg p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <button className="hover:border-blue flex cursor-pointer items-center justify-center gap-2 border-b-2 border-transparent">
                <img src={arrowLeft} />
                <span className="text-blue text-xs">VOLTAR</span>
              </button>
              <a
                href={postInfo?.html_url}
                className="hover:border-blue flex cursor-pointer items-center justify-center gap-2 border-b-2 border-transparent"
                target="_blank"
              >
                <span className="text-blue text-xs">VER NO GITHUB</span>
                <img src={linkSvg} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-base-text text-2xl font-bold">
              {postInfo?.title}
            </h1>
            <div className="flex gap-6">
              <div className="flex items-center justify-center gap-2">
                <img src={githubSvg} className="h-5 w-5" />
                <span className="text-base-subtitle">
                  {postInfo?.user.login}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src={calendarSvg} className="h-5 w-5" />
                <span className="text-base-subtitle">{}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src={commentSvg} className="h-5 w-5" />
                <span className="text-base-subtitle">
                  {postInfo?.comments} comentários
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-background rounded-b-lg px-8 py-10 shadow-md shadow-slate-800">
        {postInfo?.body}
      </div>
    </section>
  );
}
