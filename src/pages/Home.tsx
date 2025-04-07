import { Profile } from "../components/Profile";

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
  return (
    <div className="max-w-5xl">
      <Profile />
    </div>
  );
}
