using Microsoft.AspNetCore.OData.Query;
using XTI_AdventureWorksDB;
using XTI_ODataQuery.Api;

namespace XTI_ODataDemoWebAppApi;

internal sealed class SalesPersonQueryAction : QueryAction<VSalesPerson>
{
    private readonly AdventureWorksDbContext db;

    public SalesPersonQueryAction(AdventureWorksDbContext db)
    {
        this.db = db;
    }

    public IQueryable<VSalesPerson> Execute(ODataQueryOptions<VSalesPerson> options) =>
        db.VSalesPeople;
}
