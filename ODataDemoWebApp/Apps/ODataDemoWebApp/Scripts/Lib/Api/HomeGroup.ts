// Generated code

import { AppApiGroup } from "@jasonbenfield/sharedwebapp/Api/AppApiGroup";
import { AppApiAction } from "@jasonbenfield/sharedwebapp/Api/AppApiAction";
import { AppApiView } from "@jasonbenfield/sharedwebapp/Api/AppApiView";
import { AppApiEvents } from "@jasonbenfield/sharedwebapp/Api/AppApiEvents";
import { AppResourceUrl } from "@jasonbenfield/sharedwebapp/Api/AppResourceUrl";

export class HomeGroup extends AppApiGroup {
	constructor(events: AppApiEvents, resourceUrl: AppResourceUrl) {
		super(events, resourceUrl, 'Home');
		this.Index = this.createView<IEmptyRequest>('Index');
		this.Employee = this.createView<IEmptyRequest>('Employee');
		this.JobCandidateEmployment = this.createView<IEmptyRequest>('JobCandidateEmployment');
		this.SalesPerson = this.createView<IEmptyRequest>('SalesPerson');
		this.Store = this.createView<IEmptyRequest>('Store');
	}
	
	readonly Index: AppApiView<IEmptyRequest>;
	readonly Employee: AppApiView<IEmptyRequest>;
	readonly JobCandidateEmployment: AppApiView<IEmptyRequest>;
	readonly SalesPerson: AppApiView<IEmptyRequest>;
	readonly Store: AppApiView<IEmptyRequest>;
	
}