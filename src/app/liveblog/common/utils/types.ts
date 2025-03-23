export type Comment = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  comments: number;
  replies?: Comment[];
};

export type Question = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  comments: number;
};

export type ProfileData = {
  avatar: string;
  username: string;
  email: string;
  points: number;
};
