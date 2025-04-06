import { useState } from "react";

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
