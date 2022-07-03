using XTI_AdventureWorksDB;
using XTI_ODataQuery.Api;

namespace XTI_ODataDemoWebAppApi;

public sealed partial class ODataDemoAppApi : WebAppApiWrapper
{
    public ODataDemoAppApi
    (
        IAppApiUser user,
        IServiceProvider sp
    )
        : base
        (
            new AppApi
            (
                ODataDemoInfo.AppKey,
                user,
                ResourceAccess.AllowAnonymous()
            ),
            sp
        )
    {
        EmployeeQuery = new ODataGroup<VEmployee>
        (
            source.AddGroup(nameof(EmployeeQuery)),
            () => sp.GetRequiredService<EmployeeQueryAction>()
        );
        JobCandidateEmploymentQuery = new ODataGroup<VJobCandidateEmployment>
        (
            source.AddGroup(nameof(JobCandidateEmploymentQuery)),
            () => sp.GetRequiredService<JobCandidateEmploymentQueryAction>()
        );
        SalesPersonQuery = new ODataGroup<VSalesPerson>
        (
            source.AddGroup(nameof(SalesPersonQuery)),
            () => sp.GetRequiredService<SalesPersonQueryAction>()
        );
        StoreQuery = new ODataGroup<VStoreWithDemographic>
        (
            source.AddGroup(nameof(StoreQuery)),
            () => sp.GetRequiredService<StoreQueryAction>()
        );
        createHomeGroup(sp);
    }

    public ODataGroup<VEmployee> EmployeeQuery { get; }

    public ODataGroup<VJobCandidateEmployment> JobCandidateEmploymentQuery { get; }

    public ODataGroup<VSalesPerson> SalesPersonQuery { get; }

    public ODataGroup<VStoreWithDemographic> StoreQuery { get; }

    partial void createHomeGroup(IServiceProvider sp);
}