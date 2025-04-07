import { useEffect, useState } from "react";
import { Profile } from "../components/Profile";
import { api } from "../lib/axios";
import { Post } from "../components/Post";
import { MagnifyingGlass } from "@phosphor-icons/react";

export interface Issue {
  id: number;
  title: string;
  body: string;
  comments: number;
  html_url: string;
  created_at: string;
  user: {
    login: string;
  };
}

export function Home() {
  const [issuesInfo, setIssuesInfo] = useState<Issue[] | null>(null);

  async function fetchIssues(query: string = "") {
    const response = await api.get("/search/issues", {
      params: {
        q: `${query} repo:kauevecchia/github-blog`,
      },
    });

    setIssuesInfo(response.data.items);
  }

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="flex max-w-5xl flex-col gap-16">
      <Profile />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-base-subtitle text-lg font-bold">
              Publicações
            </span>
            <span className="text-base-span text-sm">
              {issuesInfo?.length} publicações
            </span>
          </div>
          <form className="flex items-center justify-center gap-2">
            <input
              type="text"
              placeholder="Buscar conteúdo"
              className="border-base-border placeholder:text-base-label focus:border-blue text-base-text w-full rounded-md border-2 px-4 py-3 focus:outline-none"
            />
            <button
              type="submit"
              className="border-base-border hover:border-blue bg-base-input flex cursor-pointer items-center justify-center gap-1 rounded-md border-2 px-4 py-3 text-white transition duration-300"
            >
              Buscar
              <MagnifyingGlass className="text-white" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {issuesInfo ? (
            issuesInfo?.map((issue) => <Post issueInfo={issue} />)
          ) : (
            <p>Não encontramos resultado para sua pesquisa</p>
          )}
        </div>
      </div>
    </div>
  );
}
