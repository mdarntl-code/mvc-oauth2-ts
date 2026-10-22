import { UserProfile } from '../models/UserModel';

// View: виведення інтерфейсу в консоль
export class UserView {
  public showMenu(): void {
    console.log('\n----------------------------------------');
    console.log('           СИСТЕМА АВТОРИЗАЦІЇ          ');
    console.log('----------------------------------------');
    console.log('1. [Кнопка] Увійти через GitHub');
    console.log('2. [Кнопка] Увійти через Google');
    console.log('3. Переглянути поточний профіль');
    console.log('0. Вийти');
    console.log('----------------------------------------');
  }

  public showProfile(user: UserProfile): void {
    console.log('\n================ ПРОФІЛЬ ================');
    console.log(`Ім'я:        ${user.name}`);
    console.log(`Email:       ${user.email}`);
    console.log(`Провайдер:   ${user.provider}`);
    console.log(`Provider ID: ${user.providerId}`);
    console.log('=========================================');
  }

  public showMessage(text: string): void {
    console.log(`>> ${text}`);
  }
}
