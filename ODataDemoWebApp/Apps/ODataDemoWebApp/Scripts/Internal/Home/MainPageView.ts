import { TextHeading1View } from '@jasonbenfield/sharedwebapp/Views/TextHeadings';
import { ContextualClass } from '@jasonbenfield/sharedwebapp/ContextualClass';
import { CssLengthUnit } from '@jasonbenfield/sharedwebapp/CssLengthUnit';
import { PaddingCss } from '@jasonbenfield/sharedwebapp/PaddingCss';
import { BasicPageView } from '@jasonbenfield/sharedwebapp/Views/BasicPageView';
import { GridView } from '@jasonbenfield/sharedwebapp/Views/Grid';
import { NavView } from '@jasonbenfield/sharedwebapp/Views/NavView';
import { TextLinkView } from '@jasonbenfield/sharedwebapp/Views/TextLinkView';
import { FlexCss } from '@jasonbenfield/sharedwebapp/FlexCss';
import { MarginCss } from '@jasonbenfield/sharedwebapp/MarginCss';

export class MainPageView extends BasicPageView {
    readonly heading: TextHeading1View;
    readonly employeesLink: TextLinkView;
    readonly jobCandidateEmploymentsLink: TextLinkView;
    readonly storesLink: TextLinkView;
    readonly salesPeopleLink: TextLinkView;

    constructor() {
        super();
        const layoutGrid = this.addView(GridView);
        layoutGrid.layout();
        layoutGrid.setTemplateRows(CssLengthUnit.auto(), CssLengthUnit.flex(1));
        layoutGrid.height100();
        this.heading = layoutGrid
            .addCell()
            .configure(b => b.addCssName('container'))
            .addView(TextHeading1View);
        this.heading.setMargin(MarginCss.bottom(3));
        const fillRow = layoutGrid.addCell()
            .configure(b => {
                b.addCssName('container');
                b.setPadding(PaddingCss.xs(0));
            });
        const navView = fillRow.addView(NavView);
        navView.pills();
        navView.setFlexCss(new FlexCss().column());
        this.employeesLink = navView.addTextLink();
        this.employeesLink.setMargin(MarginCss.bottom(3));
        this.employeesLink.setText('Employees');
        this.jobCandidateEmploymentsLink = navView.addTextLink();
        this.jobCandidateEmploymentsLink.setText('Job Candidate Employments');
        this.jobCandidateEmploymentsLink.setMargin(MarginCss.bottom(3));
        this.storesLink = navView.addTextLink();
        this.storesLink.setText('Stores');
        this.storesLink.setMargin(MarginCss.bottom(3));
        this.salesPeopleLink = navView.addTextLink();
        this.salesPeopleLink.setText('Sales People');
        this.salesPeopleLink.setMargin(MarginCss.bottom(3));
    }
}