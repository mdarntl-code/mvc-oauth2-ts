import { UserModel, UserProfile } from '../models/UserModel';
import { UserView } from '../views/UserView';

// Controller: логіка запитів до API та зв'язок Model і View
export class AuthController {
  private model: UserModel;
  private view: UserView;

  constructor(model: UserModel, view: UserView) {
    this.model = model;
    this.view = view;
  }

  public async login(provider: 'Google' | 'GitHub'): Promise<void> {
    this.view.showMessage(`Виконується авторизація через ${provider}...`);

    // Отримуємо OAuth токен
    const oauthToken = `oauth_token_${Math.random().toString(36).substring(2, 9)}`;
    this.view.showMessage(`Отримано токен: ${oauthToken}`);

    // Отримуємо дані користувача від API
    const profileFromApi: UserProfile = {
      provider,
      providerId: provider === 'GitHub' ? 'gh_98765' : 'goog_12345',
      name: provider === 'GitHub' ? 'Marta (GitHub)' : 'Marta (Google)',
      email: provider === 'GitHub' ? 'marta@github.com' : 'marta@gmail.com',
    };

    // Зберігаємо в модель та показуємо через view
    const savedUser = this.model.saveUser(profileFromApi);
    this.view.showMessage('Авторизація успішна!');
    this.view.showProfile(savedUser);
  }

  public showProfile(): void {
    const user = this.model.getLastUser();
    if (!user) {
      this.view.showMessage('Помилка: користувач ще не авторизувався!');
      return;
    }
    this.view.showProfile(user);
  }
}
