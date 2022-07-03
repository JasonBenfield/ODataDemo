// Generated Code
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

namespace ODataDemoWebApp.ApiControllers;
public sealed partial class EdmModelBuilder
{
    private readonly ODataConventionModelBuilder odataBuilder = new();
    public EdmModelBuilder()
    {
        EmployeeQuery = odataBuilder.EntitySet<VEmployee>("EmployeeQuery");
        JobCandidateEmploymentQuery = odataBuilder.EntitySet<VJobCandidateEmployment>("JobCandidateEmploymentQuery");
        SalesPersonQuery = odataBuilder.EntitySet<VSalesPerson>("SalesPersonQuery");
        StoreQuery = odataBuilder.EntitySet<VStoreWithDemographic>("StoreQuery");
        init();
    }

    partial void init();
    public EntitySetConfiguration<VEmployee> EmployeeQuery { get; }

    public EntitySetConfiguration<VJobCandidateEmployment> JobCandidateEmploymentQuery { get; }

    public EntitySetConfiguration<VSalesPerson> SalesPersonQuery { get; }

    public EntitySetConfiguration<VStoreWithDemographic> StoreQuery { get; }

    public IEdmModel GetEdmModel() => odataBuilder.GetEdmModel();
}