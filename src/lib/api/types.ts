export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  created_at: string;
  updated_at: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
  avatar?: string;
}

export interface Avatar {
  id: number;
  url: string;
}

export interface LeaderboardEntry {
  user: User;
  score: number;
  position: number;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Question {
  id: number;
  quiz_id: number;
  question: string;
  options: string[];
  created_at: string;
  updated_at: string;
}

export interface QuizSubmission {
  quiz_id: number;
  answers: {
    question_id: number;
    answer: string;
  }[];
}