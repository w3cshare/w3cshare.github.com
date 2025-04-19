export interface User {
  id: string;
  username: string;
  email: string;
  password?: string;
  roles: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  roles?: string[];
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
  roles?: string[];
  isActive?: boolean;
}

export interface UserResponse {
  id: string;
  username: string;
  email: string;
  roles: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
