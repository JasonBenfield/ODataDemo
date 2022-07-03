import { BasicPage } from '@jasonbenfield/sharedwebapp/Components/BasicPage';
import { TextComponent } from '@jasonbenfield/sharedwebapp/Components/TextComponent';
import { TextLink } from '@jasonbenfield/sharedwebapp/Components/TextLink';
import { Apis } from '../Apis';
import { MainPageView } from './MainPageView';

class MainPage extends BasicPage {
    protected readonly view: MainPageView;

    constructor() {
        super(new MainPageView());
        new TextComponent(this.view.heading).setText('Home Page');
        const api = new Apis(this.view.modalError).ODataDemo();
        new TextLink(this.view.employeesLink).setHref(api.Home.Employee.getUrl({}));
        new TextLink(this.view.jobCandidateEmploymentsLink).setHref(api.Home.JobCandidateEmployment.getUrl({}));
        new TextLink(this.view.salesPeopleLink).setHref(api.Home.SalesPerson.getUrl({}));
        new TextLink(this.view.storesLink).setHref(api.Home.Store.getUrl({}));
    }
}
new MainPage();