import { BasicPage } from '@jasonbenfield/sharedwebapp/Components/BasicPage';
import { ODataComponent } from '@jasonbenfield/sharedwebapp/OData/ODataComponent';
import { ODataComponentOptionsBuilder } from '@jasonbenfield/sharedwebapp/OData/ODataComponentOptionsBuilder';
import { ODataVJobCandidateEmploymentColumnsBuilder } from '@lib/Api/ODataVJobCandidateEmploymentColumnsBuilder';
import { Apis } from '../Apis';
import { MainPageView } from './MainPageView';

class MainPage extends BasicPage {
    protected readonly view: MainPageView;

    constructor() {
        super(new MainPageView());
        const columns = new ODataVJobCandidateEmploymentColumnsBuilder(this.view.columns);
        const options = new ODataComponentOptionsBuilder<IQueryableVJobCandidateEmployment>(columns);
        options.setPageSize(50);
        options.query.select.addFields(
            columns.JobCandidateId,
            columns.EmpStartDate,
            columns.EmpEndDate,
            columns.EmpOrgName,
            columns.EmpJobTitle
        );
        const odataDemoApp = new Apis(this.view.modalError).ODataDemo();
        options.setODataGroup(odataDemoApp.JobCandidateEmploymentQuery);
        const odataComponent = new ODataComponent(this.view.odataComponentView, options.build());
        odataComponent.refresh();
    }
}
new MainPage();