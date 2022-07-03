using Microsoft.AspNetCore.OData.Query;
using XTI_AdventureWorksDB;
using XTI_ODataQuery.Api;

namespace XTI_ODataDemoWebAppApi;

internal sealed class JobCandidateEmploymentQueryAction : QueryAction<VJobCandidateEmployment>
{
    private readonly AdventureWorksDbContext db;

    public JobCandidateEmploymentQueryAction(AdventureWorksDbContext db)
    {
        this.db = db;
    }

    public IQueryable<VJobCandidateEmployment> Execute(ODataQueryOptions<VJobCandidateEmployment> options) =>
        db.VJobCandidateEmployments;
}
