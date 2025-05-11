import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Selectors
        this.title = '[data-test="title"]';
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.postalCodeInput = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.finishButton = '[data-test="finish"]';
        this.backButton = '[data-test="back-to-products"]';
        this.completeHeader = '[data-test="complete-header"]';
        this.ponyExpress = '[data-test="pony-express"]';
        this.paymentInfo = '[data-test="payment-info-label"]';
        this.totalInfo = '[data-test="total-info-label"]';
    }

    async fillShippingInfo(firstName, lastName, postalCode) {
        await this.fill(this.firstNameInput, firstName);
        await this.fill(this.lastNameInput, lastName);
        await this.fill(this.postalCodeInput, postalCode);
        await this.click(this.continueButton);
    }

    async finishCheckout() {
        await this.click(this.finishButton);
    }

    async backToProducts() {
        await this.click(this.backButton);
    }

    async expectCheckoutTitle(step) {
        await this.expectToContainText(this.title, `Checkout: ${step}`);
    }

    async expectOrderConfirmation() {
        await this.page.locator(this.ponyExpress).isVisible();
        await this.expectToContainText(this.completeHeader, 'Thank you for your order!');
    }

    async verifyOverviewPage() {
        await this.expectToContainText(this.paymentInfo, 'Payment Information:');
        await this.expectToContainText(this.totalInfo, 'Price Total');
    }
} 