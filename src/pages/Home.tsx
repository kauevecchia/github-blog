import { useEffect, useState } from "react";
import { Profile } from "../components/Profile";
import { api } from "../lib/axios";

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
    </div>
  );
}
