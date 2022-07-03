// Generated code

import { AppApi } from "@jasonbenfield/sharedwebapp/Api/AppApi";
import { AppApiEvents } from "@jasonbenfield/sharedwebapp/Api/AppApiEvents";
import { AppApiQuery } from "@jasonbenfield/sharedwebapp/Api/AppApiQuery";
import { UserGroup } from "./UserGroup";
import { UserCacheGroup } from "./UserCacheGroup";
import { HomeGroup } from "./HomeGroup";


export class ODataDemoAppApi extends AppApi {
	constructor(events: AppApiEvents) {
		super(events, 'ODataDemo');
		this.User = this.addGroup((evts, resourceUrl) => new UserGroup(evts, resourceUrl));
		this.UserCache = this.addGroup((evts, resourceUrl) => new UserCacheGroup(evts, resourceUrl));
		this.EmployeeQuery = this.addODataGroup<IQueryableVEmployee>((evts, resourceUrl) => new AppApiQuery<IQueryableVEmployee>(evts, resourceUrl.odata('EmployeeQuery'), 'EmployeeQuery'));
		this.JobCandidateEmploymentQuery = this.addODataGroup<IQueryableVJobCandidateEmployment>((evts, resourceUrl) => new AppApiQuery<IQueryableVJobCandidateEmployment>(evts, resourceUrl.odata('JobCandidateEmploymentQuery'), 'JobCandidateEmploymentQuery'));
		this.SalesPersonQuery = this.addODataGroup<IQueryableVSalesPerson>((evts, resourceUrl) => new AppApiQuery<IQueryableVSalesPerson>(evts, resourceUrl.odata('SalesPersonQuery'), 'SalesPersonQuery'));
		this.StoreQuery = this.addODataGroup<IQueryableVStoreWithDemographic>((evts, resourceUrl) => new AppApiQuery<IQueryableVStoreWithDemographic>(evts, resourceUrl.odata('StoreQuery'), 'StoreQuery'));
		this.Home = this.addGroup((evts, resourceUrl) => new HomeGroup(evts, resourceUrl));
	}
	
	readonly User: UserGroup;
	readonly UserCache: UserCacheGroup;
	readonly EmployeeQuery: AppApiQuery<IQueryableVEmployee>;
	readonly JobCandidateEmploymentQuery: AppApiQuery<IQueryableVJobCandidateEmployment>;
	readonly SalesPersonQuery: AppApiQuery<IQueryableVSalesPerson>;
	readonly StoreQuery: AppApiQuery<IQueryableVStoreWithDemographic>;
	readonly Home: HomeGroup;
}