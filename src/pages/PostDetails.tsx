import { useParams } from "react-router-dom";
import { Issue } from "./Home";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

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

  return <section></section>;
}
