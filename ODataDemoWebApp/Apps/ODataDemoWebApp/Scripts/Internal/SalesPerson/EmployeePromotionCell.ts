import { IconCellView } from "@jasonbenfield/sharedwebapp/OData/IconCellView";
import { ODataCell } from "@jasonbenfield/sharedwebapp/OData/ODataCell";
import { ODataColumn } from "@jasonbenfield/sharedwebapp/OData/ODataColumn";

export class EmployeePromotionCell extends ODataCell {
    constructor(
        rowIndex: number,
        column: ODataColumn,
        record: any,
        view: IconCellView
    ) {
        super(rowIndex, column, record, view);
        if (record) {
            if (record[column.columnName]) {
                view.icon.solidStyle('check');
            }
            else {
                view.icon.hide();
            }
        }
    }
}