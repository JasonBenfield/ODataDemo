using Microsoft.AspNetCore.OData.Query;
using XTI_AdventureWorksDB;
using XTI_ODataQuery.Api;

namespace XTI_ODataDemoWebAppApi;

internal sealed class EmployeeQueryAction : QueryAction<VEmployee>
{
    private readonly AdventureWorksDbContext db;

    public EmployeeQueryAction(AdventureWorksDbContext db)
    {
        this.db = db;
    }

    public IQueryable<VEmployee> Execute(ODataQueryOptions<VEmployee> options) =>
        db.VEmployees;
}
