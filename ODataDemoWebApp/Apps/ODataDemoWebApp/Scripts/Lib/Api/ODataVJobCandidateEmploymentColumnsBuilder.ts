// Generated code
import { ODataColumnBuilder } from "@jasonbenfield/sharedwebapp/OData/ODataColumnBuilder";
import { ODataColumnViewBuilder } from "@jasonbenfield/sharedwebapp/OData/ODataColumnViewBuilder";
import { SourceType } from "@jasonbenfield/sharedwebapp/OData/SourceType";
import { ODataColumns } from "@jasonbenfield/sharedwebapp/OData/Types";

export class ODataVJobCandidateEmploymentColumnViewsBuilder {
	readonly JobCandidateId = new ODataColumnViewBuilder();
	readonly EmpStartDate = new ODataColumnViewBuilder();
	readonly EmpEndDate = new ODataColumnViewBuilder();
	readonly EmpOrgName = new ODataColumnViewBuilder();
	readonly EmpJobTitle = new ODataColumnViewBuilder();
	readonly EmpResponsibility = new ODataColumnViewBuilder();
	readonly EmpFunctionCategory = new ODataColumnViewBuilder();
	readonly EmpIndustryCategory = new ODataColumnViewBuilder();
	readonly EmpLocCountryRegion = new ODataColumnViewBuilder();
	readonly EmpLocState = new ODataColumnViewBuilder();
	readonly EmpLocCity = new ODataColumnViewBuilder();
}

export class ODataVJobCandidateEmploymentColumnsBuilder {
	constructor(views: ODataVJobCandidateEmploymentColumnViewsBuilder) {
		this.JobCandidateId = new ODataColumnBuilder('JobCandidateId', new SourceType('Int32'), views.JobCandidateId);
		this.EmpStartDate = new ODataColumnBuilder('EmpStartDate', new SourceType('Nullable`1'), views.EmpStartDate);
		this.EmpEndDate = new ODataColumnBuilder('EmpEndDate', new SourceType('Nullable`1'), views.EmpEndDate);
		this.EmpOrgName = new ODataColumnBuilder('EmpOrgName', new SourceType('String'), views.EmpOrgName);
		this.EmpJobTitle = new ODataColumnBuilder('EmpJobTitle', new SourceType('String'), views.EmpJobTitle);
		this.EmpResponsibility = new ODataColumnBuilder('EmpResponsibility', new SourceType('String'), views.EmpResponsibility);
		this.EmpFunctionCategory = new ODataColumnBuilder('EmpFunctionCategory', new SourceType('String'), views.EmpFunctionCategory);
		this.EmpIndustryCategory = new ODataColumnBuilder('EmpIndustryCategory', new SourceType('String'), views.EmpIndustryCategory);
		this.EmpLocCountryRegion = new ODataColumnBuilder('EmpLocCountryRegion', new SourceType('String'), views.EmpLocCountryRegion);
		this.EmpLocState = new ODataColumnBuilder('EmpLocState', new SourceType('String'), views.EmpLocState);
		this.EmpLocCity = new ODataColumnBuilder('EmpLocCity', new SourceType('String'), views.EmpLocCity);
	}
	readonly JobCandidateId: ODataColumnBuilder;
	readonly EmpStartDate: ODataColumnBuilder;
	readonly EmpEndDate: ODataColumnBuilder;
	readonly EmpOrgName: ODataColumnBuilder;
	readonly EmpJobTitle: ODataColumnBuilder;
	readonly EmpResponsibility: ODataColumnBuilder;
	readonly EmpFunctionCategory: ODataColumnBuilder;
	readonly EmpIndustryCategory: ODataColumnBuilder;
	readonly EmpLocCountryRegion: ODataColumnBuilder;
	readonly EmpLocState: ODataColumnBuilder;
	readonly EmpLocCity: ODataColumnBuilder;
	
	build() {
		return {
			JobCandidateId: this.JobCandidateId.build(),
			EmpStartDate: this.EmpStartDate.build(),
			EmpEndDate: this.EmpEndDate.build(),
			EmpOrgName: this.EmpOrgName.build(),
			EmpJobTitle: this.EmpJobTitle.build(),
			EmpResponsibility: this.EmpResponsibility.build(),
			EmpFunctionCategory: this.EmpFunctionCategory.build(),
			EmpIndustryCategory: this.EmpIndustryCategory.build(),
			EmpLocCountryRegion: this.EmpLocCountryRegion.build(),
			EmpLocState: this.EmpLocState.build(),
			EmpLocCity: this.EmpLocCity.build()
		} as ODataColumns<IQueryableVJobCandidateEmployment>;
	}
}