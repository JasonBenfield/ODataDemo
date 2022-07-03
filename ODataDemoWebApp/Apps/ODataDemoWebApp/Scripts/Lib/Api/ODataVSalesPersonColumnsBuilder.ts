// Generated code
import { ODataColumnBuilder } from "@jasonbenfield/sharedwebapp/OData/ODataColumnBuilder";
import { ODataColumnViewBuilder } from "@jasonbenfield/sharedwebapp/OData/ODataColumnViewBuilder";
import { SourceType } from "@jasonbenfield/sharedwebapp/OData/SourceType";
import { ODataColumns } from "@jasonbenfield/sharedwebapp/OData/Types";

export class ODataVSalesPersonColumnViewsBuilder {
	readonly BusinessEntityId = new ODataColumnViewBuilder();
	readonly Title = new ODataColumnViewBuilder();
	readonly FirstName = new ODataColumnViewBuilder();
	readonly MiddleName = new ODataColumnViewBuilder();
	readonly LastName = new ODataColumnViewBuilder();
	readonly Suffix = new ODataColumnViewBuilder();
	readonly JobTitle = new ODataColumnViewBuilder();
	readonly PhoneNumber = new ODataColumnViewBuilder();
	readonly PhoneNumberType = new ODataColumnViewBuilder();
	readonly EmailAddress = new ODataColumnViewBuilder();
	readonly EmailPromotion = new ODataColumnViewBuilder();
	readonly AddressLine1 = new ODataColumnViewBuilder();
	readonly AddressLine2 = new ODataColumnViewBuilder();
	readonly City = new ODataColumnViewBuilder();
	readonly StateProvinceName = new ODataColumnViewBuilder();
	readonly PostalCode = new ODataColumnViewBuilder();
	readonly CountryRegionName = new ODataColumnViewBuilder();
	readonly TerritoryName = new ODataColumnViewBuilder();
	readonly TerritoryGroup = new ODataColumnViewBuilder();
	readonly SalesQuota = new ODataColumnViewBuilder();
	readonly SalesYtd = new ODataColumnViewBuilder();
	readonly SalesLastYear = new ODataColumnViewBuilder();
}

export class ODataVSalesPersonColumnsBuilder {
	constructor(views: ODataVSalesPersonColumnViewsBuilder) {
		this.BusinessEntityId = new ODataColumnBuilder('BusinessEntityId', new SourceType('Int32'), views.BusinessEntityId);
		this.Title = new ODataColumnBuilder('Title', new SourceType('String'), views.Title);
		this.FirstName = new ODataColumnBuilder('FirstName', new SourceType('String'), views.FirstName);
		this.MiddleName = new ODataColumnBuilder('MiddleName', new SourceType('String'), views.MiddleName);
		this.LastName = new ODataColumnBuilder('LastName', new SourceType('String'), views.LastName);
		this.Suffix = new ODataColumnBuilder('Suffix', new SourceType('String'), views.Suffix);
		this.JobTitle = new ODataColumnBuilder('JobTitle', new SourceType('String'), views.JobTitle);
		this.PhoneNumber = new ODataColumnBuilder('PhoneNumber', new SourceType('String'), views.PhoneNumber);
		this.PhoneNumberType = new ODataColumnBuilder('PhoneNumberType', new SourceType('String'), views.PhoneNumberType);
		this.EmailAddress = new ODataColumnBuilder('EmailAddress', new SourceType('String'), views.EmailAddress);
		this.EmailPromotion = new ODataColumnBuilder('EmailPromotion', new SourceType('Int32'), views.EmailPromotion);
		this.AddressLine1 = new ODataColumnBuilder('AddressLine1', new SourceType('String'), views.AddressLine1);
		this.AddressLine2 = new ODataColumnBuilder('AddressLine2', new SourceType('String'), views.AddressLine2);
		this.City = new ODataColumnBuilder('City', new SourceType('String'), views.City);
		this.StateProvinceName = new ODataColumnBuilder('StateProvinceName', new SourceType('String'), views.StateProvinceName);
		this.PostalCode = new ODataColumnBuilder('PostalCode', new SourceType('String'), views.PostalCode);
		this.CountryRegionName = new ODataColumnBuilder('CountryRegionName', new SourceType('String'), views.CountryRegionName);
		this.TerritoryName = new ODataColumnBuilder('TerritoryName', new SourceType('String'), views.TerritoryName);
		this.TerritoryGroup = new ODataColumnBuilder('TerritoryGroup', new SourceType('String'), views.TerritoryGroup);
		this.SalesQuota = new ODataColumnBuilder('SalesQuota', new SourceType('Nullable`1'), views.SalesQuota);
		this.SalesYtd = new ODataColumnBuilder('SalesYtd', new SourceType('Decimal'), views.SalesYtd);
		this.SalesLastYear = new ODataColumnBuilder('SalesLastYear', new SourceType('Decimal'), views.SalesLastYear);
	}
	readonly BusinessEntityId: ODataColumnBuilder;
	readonly Title: ODataColumnBuilder;
	readonly FirstName: ODataColumnBuilder;
	readonly MiddleName: ODataColumnBuilder;
	readonly LastName: ODataColumnBuilder;
	readonly Suffix: ODataColumnBuilder;
	readonly JobTitle: ODataColumnBuilder;
	readonly PhoneNumber: ODataColumnBuilder;
	readonly PhoneNumberType: ODataColumnBuilder;
	readonly EmailAddress: ODataColumnBuilder;
	readonly EmailPromotion: ODataColumnBuilder;
	readonly AddressLine1: ODataColumnBuilder;
	readonly AddressLine2: ODataColumnBuilder;
	readonly City: ODataColumnBuilder;
	readonly StateProvinceName: ODataColumnBuilder;
	readonly PostalCode: ODataColumnBuilder;
	readonly CountryRegionName: ODataColumnBuilder;
	readonly TerritoryName: ODataColumnBuilder;
	readonly TerritoryGroup: ODataColumnBuilder;
	readonly SalesQuota: ODataColumnBuilder;
	readonly SalesYtd: ODataColumnBuilder;
	readonly SalesLastYear: ODataColumnBuilder;
	
	build() {
		return {
			BusinessEntityId: this.BusinessEntityId.build(),
			Title: this.Title.build(),
			FirstName: this.FirstName.build(),
			MiddleName: this.MiddleName.build(),
			LastName: this.LastName.build(),
			Suffix: this.Suffix.build(),
			JobTitle: this.JobTitle.build(),
			PhoneNumber: this.PhoneNumber.build(),
			PhoneNumberType: this.PhoneNumberType.build(),
			EmailAddress: this.EmailAddress.build(),
			EmailPromotion: this.EmailPromotion.build(),
			AddressLine1: this.AddressLine1.build(),
			AddressLine2: this.AddressLine2.build(),
			City: this.City.build(),
			StateProvinceName: this.StateProvinceName.build(),
			PostalCode: this.PostalCode.build(),
			CountryRegionName: this.CountryRegionName.build(),
			TerritoryName: this.TerritoryName.build(),
			TerritoryGroup: this.TerritoryGroup.build(),
			SalesQuota: this.SalesQuota.build(),
			SalesYtd: this.SalesYtd.build(),
			SalesLastYear: this.SalesLastYear.build()
		} as ODataColumns<IQueryableVSalesPerson>;
	}
}