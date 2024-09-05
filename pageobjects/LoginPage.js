class LoginPage {

    constructor(page) {
        this.page = page;
        this.signInbutton = page.getByRole('button', { text: 'Login' });
        this.userName = page.locator("#Input_UsernameVal");
        this.password = page.locator("#Input_PasswordVal");
    }

    async goTo() {
        await this.page.goto("https://dev-intranet.camp.mlaw.gov.sg/StreamIntranet/Login");
    }

    async validLogin(string) {
        let username = string;
        let password = 'P@ssw0rd1';
        // if(string === 'meoa1') {
        //     username = 'meoa1';
        //     password = 'P@ssw0rd1';
        // }
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }
}

export default LoginPage;
// export const LoginPage = new LoginPage();
