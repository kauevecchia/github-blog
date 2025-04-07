import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubUser {
  avatarUrl: string;
  user: string;
  name: string;
  bio: string;
  htmlUrl: string;
  followers: number;
}

export function Profile() {
  const [userInfo, setUserInfo] = useState<GithubUser | null>(null);

  async function fetchUserInfo() {
    const response = await api.get("/users/kauevecchia");

    setUserInfo(response.data);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <section>
      <img src="" alt="" />
      <div>
        <div>
          <h1></h1>
          <a href=""></a>
        </div>
        <p></p>
        <div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
          <div>
            <img src="" alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
