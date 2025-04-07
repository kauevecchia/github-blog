import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import linkSvg from "../assets/link-svg.svg";
import githubSvg from "../assets/github.svg";
import peopleSvg from "../assets/people.svg";

interface GithubUser {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  html_url: string;
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
    <section className="-mt-12 flex items-center justify-center gap-8 rounded-lg bg-[#1E1E1E] p-8">
      <img src={userInfo?.avatar_url} alt="" className="h-36 w-36 rounded-lg" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="text-2xl text-white">{userInfo?.name}</h1>
            <a
              href={userInfo?.html_url}
              className="flex cursor-pointer items-center justify-center gap-2"
              target="_blank"
            >
              <span className="text-blue text-xs">GITHUB</span>
              <img src={linkSvg} alt="" />
            </a>
          </div>
          <p className="text-base-text">{userInfo?.bio}</p>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center justify-center gap-2">
            <img src={githubSvg} alt="" className="h-5 w-5" />
            <span className="text-base-subtitle">{userInfo?.login}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={peopleSvg} alt="" className="h-5 w-5" />
            <span className="text-base-subtitle">
              {userInfo?.followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
