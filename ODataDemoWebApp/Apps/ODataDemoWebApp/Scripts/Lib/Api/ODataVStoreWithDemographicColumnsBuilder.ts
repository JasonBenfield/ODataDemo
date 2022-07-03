// Generated code
import { ODataColumnBuilder } from "@jasonbenfield/sharedwebapp/OData/ODataColumnBuilder";
import { ODataColumnViewBuilder } from "@jasonbenfield/sharedwebapp/OData/ODataColumnViewBuilder";
import { SourceType } from "@jasonbenfield/sharedwebapp/OData/SourceType";
import { ODataColumns } from "@jasonbenfield/sharedwebapp/OData/Types";

export class ODataVStoreWithDemographicColumnViewsBuilder {
	readonly BusinessEntityId = new ODataColumnViewBuilder();
	readonly Name = new ODataColumnViewBuilder();
	readonly AnnualSales = new ODataColumnViewBuilder();
	readonly AnnualRevenue = new ODataColumnViewBuilder();
	readonly BankName = new ODataColumnViewBuilder();
	readonly BusinessType = new ODataColumnViewBuilder();
	readonly YearOpened = new ODataColumnViewBuilder();
	readonly Specialty = new ODataColumnViewBuilder();
	readonly SquareFeet = new ODataColumnViewBuilder();
	readonly Brands = new ODataColumnViewBuilder();
	readonly Internet = new ODataColumnViewBuilder();
	readonly NumberEmployees = new ODataColumnViewBuilder();
}

export class ODataVStoreWithDemographicColumnsBuilder {
	constructor(views: ODataVStoreWithDemographicColumnViewsBuilder) {
		this.BusinessEntityId = new ODataColumnBuilder('BusinessEntityId', new SourceType('Int32'), views.BusinessEntityId);
		this.Name = new ODataColumnBuilder('Name', new SourceType('String'), views.Name);
		this.AnnualSales = new ODataColumnBuilder('AnnualSales', new SourceType('Nullable`1'), views.AnnualSales);
		this.AnnualRevenue = new ODataColumnBuilder('AnnualRevenue', new SourceType('Nullable`1'), views.AnnualRevenue);
		this.BankName = new ODataColumnBuilder('BankName', new SourceType('String'), views.BankName);
		this.BusinessType = new ODataColumnBuilder('BusinessType', new SourceType('String'), views.BusinessType);
		this.YearOpened = new ODataColumnBuilder('YearOpened', new SourceType('Nullable`1'), views.YearOpened);
		this.Specialty = new ODataColumnBuilder('Specialty', new SourceType('String'), views.Specialty);
		this.SquareFeet = new ODataColumnBuilder('SquareFeet', new SourceType('Nullable`1'), views.SquareFeet);
		this.Brands = new ODataColumnBuilder('Brands', new SourceType('String'), views.Brands);
		this.Internet = new ODataColumnBuilder('Internet', new SourceType('String'), views.Internet);
		this.NumberEmployees = new ODataColumnBuilder('NumberEmployees', new SourceType('Nullable`1'), views.NumberEmployees);
	}
	readonly BusinessEntityId: ODataColumnBuilder;
	readonly Name: ODataColumnBuilder;
	readonly AnnualSales: ODataColumnBuilder;
	readonly AnnualRevenue: ODataColumnBuilder;
	readonly BankName: ODataColumnBuilder;
	readonly BusinessType: ODataColumnBuilder;
	readonly YearOpened: ODataColumnBuilder;
	readonly Specialty: ODataColumnBuilder;
	readonly SquareFeet: ODataColumnBuilder;
	readonly Brands: ODataColumnBuilder;
	readonly Internet: ODataColumnBuilder;
	readonly NumberEmployees: ODataColumnBuilder;
	
	build() {
		return {
			BusinessEntityId: this.BusinessEntityId.build(),
			Name: this.Name.build(),
			AnnualSales: this.AnnualSales.build(),
			AnnualRevenue: this.AnnualRevenue.build(),
			BankName: this.BankName.build(),
			BusinessType: this.BusinessType.build(),
			YearOpened: this.YearOpened.build(),
			Specialty: this.Specialty.build(),
			SquareFeet: this.SquareFeet.build(),
			Brands: this.Brands.build(),
			Internet: this.Internet.build(),
			NumberEmployees: this.NumberEmployees.build()
		} as ODataColumns<IQueryableVStoreWithDemographic>;
	}
}