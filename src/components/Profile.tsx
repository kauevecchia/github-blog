import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubUser {
  avatar_url: string;
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
      <img src={userInfo?.avatar_url} alt="" />
      <div>
        <div>
          <h1>{userInfo?.name}</h1>
          <a href={userInfo?.htmlUrl}>
            <span></span>
            <img src="" alt="" />
          </a>
        </div>
        <p>{userInfo?.bio}</p>
        <div>
          <div>
            <img src="" alt="" />
            <span>{userInfo?.user}</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>{userInfo?.followers}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
