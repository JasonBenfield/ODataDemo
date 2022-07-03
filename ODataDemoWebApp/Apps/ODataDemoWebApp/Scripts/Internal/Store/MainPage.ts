import { BasicPage } from '@jasonbenfield/sharedwebapp/Components/BasicPage';
import { ODataComponent } from '@jasonbenfield/sharedwebapp/OData/ODataComponent';
import { ODataComponentOptionsBuilder } from '@jasonbenfield/sharedwebapp/OData/ODataComponentOptionsBuilder';
import { ODataVStoreWithDemographicColumnsBuilder } from '@lib/Api/ODataVStoreWithDemographicColumnsBuilder';
import { NumberValueFormatter } from '@jasonbenfield/sharedwebapp/OData/NumberValueFormatter';
import { Apis } from '../Apis';
import { MainPageView } from './MainPageView';

class MainPage extends BasicPage {
    protected readonly view: MainPageView;

    constructor() {
        super(new MainPageView());
        const columns = new ODataVStoreWithDemographicColumnsBuilder(this.view.columns);
        columns.AnnualSales.setFormatter(new NumberValueFormatter('$0,0.00'));
        columns.AnnualRevenue.setFormatter(new NumberValueFormatter('$0,0.00'));
        const options = new ODataComponentOptionsBuilder<IQueryableVStoreWithDemographic>(columns);
        options.setPageSize(8);
        options.query.select.addFields(
            columns.BusinessEntityId,
            columns.Name,
            columns.AnnualSales,
            columns.AnnualRevenue,
            columns.NumberEmployees
        );
        const odataDemoApp = new Apis(this.view.modalError).ODataDemo();
        options.setODataGroup(odataDemoApp.StoreQuery);
        const odataComponent = new ODataComponent(this.view.odataComponentView, options.build());
        odataComponent.refresh();
    }
}
new MainPage();