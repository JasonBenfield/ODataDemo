import { BasicPage } from '@jasonbenfield/sharedwebapp/Components/BasicPage';
import { ODataComponent } from '@jasonbenfield/sharedwebapp/OData/ODataComponent';
import { ODataComponentOptionsBuilder } from '@jasonbenfield/sharedwebapp/OData/ODataComponentOptionsBuilder';
import { ODataVEmployeeColumnsBuilder } from '@lib/Api/ODataVEmployeeColumnsBuilder';
import { Apis } from '../Apis';
import { MainPageView } from './MainPageView';

class MainPage extends BasicPage {
    protected readonly view: MainPageView;

    constructor() {
        super(new MainPageView());
        const columns = new ODataVEmployeeColumnsBuilder(this.view.columns);
        const options = new ODataComponentOptionsBuilder<IQueryableVEmployee>(columns);
        options.setPageSize(50);
        options.query.select.addFields(
            columns.BusinessEntityId,
            columns.FirstName,
            columns.LastName,
            columns.JobTitle
        );
        const odataDemoApp = new Apis(this.view.modalError).ODataDemo();
        options.setODataGroup(odataDemoApp.EmployeeQuery);
        const odataComponent = new ODataComponent(this.view.odataComponentView, options.build());
        odataComponent.refresh();
    }
}
new MainPage();