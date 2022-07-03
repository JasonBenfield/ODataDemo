// Generated code

interface IQueryableVEmployee {
	BusinessEntityId?: number;
	Title?: string;
	FirstName?: string;
	MiddleName?: string;
	LastName?: string;
	Suffix?: string;
	JobTitle?: string;
	PhoneNumber?: string;
	PhoneNumberType?: string;
	EmailAddress?: string;
	EmailPromotion?: number;
	AddressLine1?: string;
	AddressLine2?: string;
	City?: string;
	StateProvinceName?: string;
	PostalCode?: string;
	CountryRegionName?: string;
	AdditionalContactInfo?: string;
}
interface IQueryableVJobCandidateEmployment {
	JobCandidateId?: number;
	EmpStartDate?: Date;
	EmpEndDate?: Date;
	EmpOrgName?: string;
	EmpJobTitle?: string;
	EmpResponsibility?: string;
	EmpFunctionCategory?: string;
	EmpIndustryCategory?: string;
	EmpLocCountryRegion?: string;
	EmpLocState?: string;
	EmpLocCity?: string;
}
interface IQueryableVSalesPerson {
	BusinessEntityId?: number;
	Title?: string;
	FirstName?: string;
	MiddleName?: string;
	LastName?: string;
	Suffix?: string;
	JobTitle?: string;
	PhoneNumber?: string;
	PhoneNumberType?: string;
	EmailAddress?: string;
	EmailPromotion?: number;
	AddressLine1?: string;
	AddressLine2?: string;
	City?: string;
	StateProvinceName?: string;
	PostalCode?: string;
	CountryRegionName?: string;
	TerritoryName?: string;
	TerritoryGroup?: string;
	SalesQuota?: number;
	SalesYtd?: number;
	SalesLastYear?: number;
}
interface IQueryableVStoreWithDemographic {
	BusinessEntityId?: number;
	Name?: string;
	AnnualSales?: number;
	AnnualRevenue?: number;
	BankName?: string;
	BusinessType?: string;
	YearOpened?: number;
	Specialty?: string;
	SquareFeet?: number;
	Brands?: string;
	Internet?: string;
	NumberEmployees?: number;
}
interface IUserStartRequest {
	ReturnUrl: string;
}
interface IEmptyRequest {
}
interface ILogoutRequest {
	ReturnUrl: string;
}
interface IEmptyActionResult {
}
interface IVEmployee {
	BusinessEntityId: number;
	Title: string;
	FirstName: string;
	MiddleName: string;
	LastName: string;
	Suffix: string;
	JobTitle: string;
	PhoneNumber: string;
	PhoneNumberType: string;
	EmailAddress: string;
	EmailPromotion: number;
	AddressLine1: string;
	AddressLine2: string;
	City: string;
	StateProvinceName: string;
	PostalCode: string;
	CountryRegionName: string;
	AdditionalContactInfo: string;
}
interface IWebFileResult {
	FileStream: IStream;
	ContentType: string;
	DownloadName: string;
}
interface IStream {
	CanRead: boolean;
	CanWrite: boolean;
	CanSeek: boolean;
	CanTimeout: boolean;
	Length: number;
	Position: number;
	ReadTimeout: number;
	WriteTimeout: number;
}
interface IVJobCandidateEmployment {
	JobCandidateId: number;
	EmpStartDate: Date;
	EmpEndDate: Date;
	EmpOrgName: string;
	EmpJobTitle: string;
	EmpResponsibility: string;
	EmpFunctionCategory: string;
	EmpIndustryCategory: string;
	EmpLocCountryRegion: string;
	EmpLocState: string;
	EmpLocCity: string;
}
interface IVSalesPerson {
	BusinessEntityId: number;
	Title: string;
	FirstName: string;
	MiddleName: string;
	LastName: string;
	Suffix: string;
	JobTitle: string;
	PhoneNumber: string;
	PhoneNumberType: string;
	EmailAddress: string;
	EmailPromotion: number;
	AddressLine1: string;
	AddressLine2: string;
	City: string;
	StateProvinceName: string;
	PostalCode: string;
	CountryRegionName: string;
	TerritoryName: string;
	TerritoryGroup: string;
	SalesQuota: number;
	SalesYtd: number;
	SalesLastYear: number;
}
interface IVStoreWithDemographic {
	BusinessEntityId: number;
	Name: string;
	AnnualSales: number;
	AnnualRevenue: number;
	BankName: string;
	BusinessType: string;
	YearOpened: number;
	Specialty: string;
	SquareFeet: number;
	Brands: string;
	Internet: string;
	NumberEmployees: number;
}