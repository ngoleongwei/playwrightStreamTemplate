import LoginPage from './LoginPage.js';
import DashboardPage from './DashboardPage.js';
import CaseCreationPage from './CaseCreationPage.js';
import CasePage from './CasePage.js';

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.casePage = new CasePage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getCaseCreationPage() {
        return new CaseCreationPage(this.page);
    }

    getCasePage() {
        return this.casePage;
    }

}

export { POManager };