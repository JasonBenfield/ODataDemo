import { CssLengthUnit } from '@jasonbenfield/sharedwebapp/CssLengthUnit';
import { IconCellView } from '@jasonbenfield/sharedwebapp/OData/IconCellView';
import { ODataComponentView } from '@jasonbenfield/sharedwebapp/OData/ODataComponentView';
import { PaddingCss } from '@jasonbenfield/sharedwebapp/PaddingCss';
import { BasicPageView } from '@jasonbenfield/sharedwebapp/Views/BasicPageView';
import { GridTemplateFitContent, GridView } from '@jasonbenfield/sharedwebapp/Views/Grid';
import { ODataVSalesPersonColumnViewsBuilder } from '@lib/Api/ODataVSalesPersonColumnsBuilder';
import { ContextualClass } from '@jasonbenfield/sharedwebapp/ContextualClass';
import { TextCss } from '@jasonbenfield/sharedwebapp/TextCss';

export class MainPageView extends BasicPageView {
    readonly odataComponentView: ODataComponentView;
    readonly columns: ODataVSalesPersonColumnViewsBuilder;

    constructor() {
        super();
        const layoutGrid = this.addView(GridView);
        layoutGrid.layout();
        layoutGrid.setTemplateRows(CssLengthUnit.flex(1));
        layoutGrid.height100();
        const fillRow = layoutGrid.addCell()
            .configure(b => {
                b.addCssName('container');
                b.setPadding(PaddingCss.xs(0));
            });
        this.columns = new ODataVSalesPersonColumnViewsBuilder()
        this.columns.EmailPromotion.dataCell(
            IconCellView,
            cell => {
                cell.setTextCss(new TextCss().center())
                cell.icon.setTextCss(new TextCss().context(ContextualClass.success));
            }
        );
        this.columns.JobTitle.setWidth(new GridTemplateFitContent(CssLengthUnit.px(400)));
        this.odataComponentView = fillRow.addView(ODataComponentView);
        //this.odataComponentView.grid.setMinWidth(CssLengthUnit.px(4000));

    }
}