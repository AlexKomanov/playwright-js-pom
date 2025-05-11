import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Selectors
        this.title = '[data-test="title"]';
        this.checkoutButton = '[data-test="checkout"]';
    }

    async proceedToCheckout() {
        await this.click(this.checkoutButton);
    }

    async expectCartTitle() {
        await this.expectToContainText(this.title, 'Your Cart');
    }
} 