class DashboardPage {
    
    constructor(page) {
        this.page = page;
        this.welcome = page.getByText('Welcome');
        this.caseCreation = page.getByRole('button', {name: 'Add Case'});
        this.manageCaseDetails = page.locator(".OSBlockWidget button div i").first();
        // this.products = page.locator(".card-body");
        // this.productsText = page.locator(".card-body b");
        // this.orders = page.locator("button[routerlink*='myorders']");
    }

    // async searchProductAddCart(productName) {

    //     const titles = await this.productsText.allTextContents();
    //     console.log(titles);
    //     const count = await this.products.count();
    //     for (let i = 0; i < count; ++i) {
    //         if (await this.products.nth(i).locator("b").textContent() === productName) {
    //             //add to cart
    //             await this.products.nth(i).locator("text= Add To Cart").click();
    //             break;
    //         }
    //     }
    // }

    async navigateToCreateCase() {
        await this.caseCreation.click();
    }

    async navigateToCase() {
        await this.manageCaseDetails.click();
        await this.page.getByText('Manage Case Details').first().click();
    }

}
export default DashboardPage ;