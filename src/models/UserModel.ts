export interface UserProfile {
  name: string;
  email: string;
  providerId: string;
  provider: 'Google' | 'GitHub';
}

// Model: збереження даних користувача
export class UserModel {
  private users: UserProfile[] = [];

  public saveUser(profile: UserProfile): UserProfile {
    this.users.push(profile);
    return profile;
  }

  public getLastUser(): UserProfile | null {
    if (this.users.length === 0) {
      return null;
    }
    return this.users[this.users.length - 1];
  }

  public getAllUsers(): UserProfile[] {
    return this.users;
  }
}
