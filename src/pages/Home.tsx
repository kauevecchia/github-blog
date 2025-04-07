import { useEffect, useState } from "react";
import { Profile } from "../components/Profile";
import { api } from "../lib/axios";
import { Post } from "../components/Post";

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
    <div className="max-w-5xl">
      <Profile />

      <div className="grid grid-cols-2 gap-6">
        {issuesInfo ? (
          issuesInfo?.map((issue) => <Post issueInfo={issue} />)
        ) : (
          <p>Não encontramos resultado para sua pesquisa</p>
        )}
      </div>
    </div>
  );
}
