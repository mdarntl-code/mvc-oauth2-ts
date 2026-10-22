import * as readline from "readline";
import { AuthController } from "./controllers/AuthController";
import { UserModel } from "./models/UserModel";
import { UserView } from "./views/UserView";

async function main() {
  const model = new UserModel();
  const view = new UserView();
  const controller = new AuthController(model, view);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (promptText: string): Promise<string> =>
    new Promise((resolve) => rl.question(promptText, resolve));

  while (true) {
    view.showMenu();
    const choice = (await ask("\nВведіть номер дії (1, 2, 3 або 0): ")).trim();

    if (choice === "1") {
      await controller.login("GitHub");
    } else if (choice === "2") {
      await controller.login("Google");
    } else if (choice === "3") {
      controller.showProfile();
    } else if (choice === "0") {
      view.showMessage("Програму завершено.");
      rl.close();
      break;
    } else {
      view.showMessage("Невірний вибір. Введіть 1, 2, 3 або 0.");
    }
  }
}

main();
