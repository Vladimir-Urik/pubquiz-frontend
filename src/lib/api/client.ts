import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { User, LoginRequest, RegisterRequest, UpdateUserRequest, Avatar, LeaderboardEntry, Quiz, Question, QuizSubmission } from './types';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = '/api') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    }); 
  }

  // Auth endpoints
  async login(data: LoginRequest): Promise<{ user: User; token: string }> {
    const response = await this.client.post('/auth/login', data);
    return response.data;
  }

  async logout(): Promise<void> {
    await this.client.post('/auth/logout');
  }

  async register(data: RegisterRequest): Promise<{ user: User; token: string }> {
    const response = await this.client.post('/auth/register', data);
    return response.data;
  }

  // User endpoints
  async getCurrentUser(): Promise<User> {
    const response = await this.client.get('/user/me');
    return response.data;
  }

  async updateUser(data: UpdateUserRequest): Promise<User> {
    const response = await this.client.post('/user/update', data);
    return response.data;
  }

  // Avatar endpoints
  async getAvatars(): Promise<Avatar[]> {
    const response = await this.client.get('/avatars');
    return response.data;
  }

  // Leaderboard endpoints
  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    const response = await this.client.get('/leaderboard');
    return response.data;
  }

  // Quiz endpoints
  async getQuizzes(): Promise<Quiz[]> {
    const response = await this.client.get('/quizzes');
    return response.data;
  }

  async getQuizQuestions(quizId: number): Promise<Question[]> {
    const response = await this.client.get(`/quizzes/${quizId}/questions`);
    return response.data;
  }

  async submitQuiz(submission: QuizSubmission): Promise<any> {
    const response = await this.client.post(`/quizzes/${submission.quiz_id}/submit`, submission);
    return response.data;
  }

  // Helper method to set auth token
  setAuthToken(token: string | null): void {
    if (token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common['Authorization'];
    }
  }
}

// Create and export a singleton instance
export const api = new ApiClient();

// Export the class for testing or custom instances
export default ApiClient;