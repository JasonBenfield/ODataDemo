namespace ODataDemoWebApp.ApiControllers;

partial class EdmModelBuilder
{
    partial void init()
    {
        EmployeeQuery.EntityType.HasKey(e => e.BusinessEntityId);
        JobCandidateEmploymentQuery.EntityType.HasKey(e => new { e.JobCandidateId, e.EmpStartDate });
        SalesPersonQuery.EntityType.HasKey(e => e.BusinessEntityId);
        StoreQuery.EntityType.HasKey(e => e.BusinessEntityId);
    }
}