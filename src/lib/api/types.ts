export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: Avatar;
  created_at: string;
  updated_at: string;
  level: number;
  xp: number;
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
  avatar_id?: number;
}

export interface Avatar {
  id: number;
  path: string;
  name: string;
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
  text: string;
  answers: Answer[];
  content_type: "video" | "text" | "art";
  content?: string;
}

export interface Answer {
  id: number;
  text: string;
  is_correct: boolean;
}

export interface QuizSubmission {
  quiz_id: number;
  answers: {
    question_id: number;
    answer: number;
  }[];
}

export interface QuizResult {
  score: number;
  total_questions: number;
  xp_earned: number;
}