import { ContextualClass } from '@jasonbenfield/sharedwebapp/ContextualClass';
import { CssLengthUnit } from '@jasonbenfield/sharedwebapp/CssLengthUnit';
import { ODataComponentView } from '@jasonbenfield/sharedwebapp/OData/ODataComponentView';
import { PaddingCss } from '@jasonbenfield/sharedwebapp/PaddingCss';
import { BasicPageView } from '@jasonbenfield/sharedwebapp/Views/BasicPageView';
import { GridTemplateFitContent, GridView } from '@jasonbenfield/sharedwebapp/Views/Grid';
import { ODataVEmployeeColumnViewsBuilder } from '@lib/Api/ODataVEmployeeColumnsBuilder';

export class MainPageView extends BasicPageView {
    readonly odataComponentView: ODataComponentView;
    readonly columns: ODataVEmployeeColumnViewsBuilder;

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
                b.setBackgroundContext(ContextualClass.light);
            });
        this.columns = new ODataVEmployeeColumnViewsBuilder();
        this.columns.JobTitle.setWidth(new GridTemplateFitContent(CssLengthUnit.px(300)));
        this.odataComponentView = fillRow.addView(ODataComponentView);

    }
}