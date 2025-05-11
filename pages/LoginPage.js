import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.url = 'https://www.saucedemo.com/';
        
        // Selectors
        this.usernameInput = '[data-test="username"]';
        this.passwordInput = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.errorMessage = '[data-test="error"]';
    }

    async navigateToLogin() {
        await this.navigate(this.url);
    }

    async login(username, password) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async getErrorMessage() {
        return await this.getText(this.errorMessage);
    }

    async expectErrorMessage(message) {
        await this.expectToContainText(this.errorMessage, message);
    }
} 