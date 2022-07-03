import { BasicPage } from '@jasonbenfield/sharedwebapp/Components/BasicPage';
import { ODataComponent } from '@jasonbenfield/sharedwebapp/OData/ODataComponent';
import { ODataComponentOptionsBuilder } from '@jasonbenfield/sharedwebapp/OData/ODataComponentOptionsBuilder';
import { ODataVSalesPersonColumnsBuilder } from '@lib/Api/ODataVSalesPersonColumnsBuilder';
import { Apis } from '../Apis';
import { MainPageView } from './MainPageView';
import { NumberValueFormatter } from '@jasonbenfield/sharedwebapp/OData/NumberValueFormatter';
import { EmployeePromotionCell } from './EmployeePromotionCell';
import { IconCellView } from '@jasonbenfield/sharedwebapp/OData/IconCellView';

class MainPage extends BasicPage {
    protected readonly view: MainPageView;

    constructor() {
        super(new MainPageView());
        const columns = new ODataVSalesPersonColumnsBuilder(this.view.columns);
        columns.SalesLastYear.setFormatter(new NumberValueFormatter('$0,0.00'));
        columns.SalesYtd.setFormatter(new NumberValueFormatter('$0,0.00'));
        columns.SalesQuota.setFormatter(new NumberValueFormatter('$0,0.00'));
        columns.EmailPromotion.setCreateDataCell(
            (rowIndex, column, record, formatter, view: IconCellView) => new EmployeePromotionCell(rowIndex, column, record, view)
        );
        const options = new ODataComponentOptionsBuilder<IQueryableVSalesPerson>(columns);
        options.setPageSize(50);
        options.query.select.addFields(
            columns.BusinessEntityId,
            columns.FirstName,
            columns.LastName,
            columns.JobTitle,
            columns.EmailPromotion,
            columns.SalesYtd,
            columns.SalesLastYear,
            columns.SalesQuota
        );
        const odataDemoApp = new Apis(this.view.modalError).ODataDemo();
        options.setODataGroup(odataDemoApp.SalesPersonQuery);
        const odataComponent = new ODataComponent(this.view.odataComponentView, options.build());
        odataComponent.refresh();
    }
}
new MainPage();