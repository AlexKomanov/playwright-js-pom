import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Selectors
        this.title = '[data-test="title"]';
        this.sortDropdown = '[data-test="product-sort-container"]';
        this.cartBadge = '[data-test="shopping-cart-badge"]';
        this.cartLink = '[data-test="shopping-cart-link"]';
        this.menuButton = 'button[id="react-burger-menu-btn"]';
        this.logoutLink = '[data-test="logout-sidebar-link"]';
    }

    async sortProducts(option) {
        await this.page.locator(this.sortDropdown).selectOption(option);
    }

    async addToCart(productName) {
        await this.click(`[data-test="add-to-cart-${productName}"]`);
    }

    async getCartCount() {
        return await this.getText(this.cartBadge);
    }

    async goToCart() {
        await this.click(this.cartLink);
    }

    async logout() {
        await this.click(this.menuButton);
        await this.click(this.logoutLink);
    }

    async expectProductsTitle() {
        await this.expectToContainText(this.title, 'Products');
    }
} 