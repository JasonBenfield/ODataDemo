using Microsoft.AspNetCore.OData.Query;
using XTI_AdventureWorksDB;
using XTI_ODataQuery.Api;

namespace XTI_ODataDemoWebAppApi;

internal sealed class StoreQueryAction : QueryAction<VStoreWithDemographic>
{
    private readonly AdventureWorksDbContext db;

    public StoreQueryAction(AdventureWorksDbContext db)
    {
        this.db = db;
    }

    public IQueryable<VStoreWithDemographic> Execute(ODataQueryOptions<VStoreWithDemographic> options) =>
        db.VStoreWithDemographics;
}
