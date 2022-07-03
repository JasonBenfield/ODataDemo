// Generated Code
namespace XTI_ODataDemoAppClient;
public sealed partial class ODataDemoAppClient : AppClient
{
    public ODataDemoAppClient(IHttpClientFactory httpClientFactory, XtiTokenAccessor xtiTokenAccessor, AppClientUrl clientUrl, ODataDemoAppClientVersion version) : base(httpClientFactory, xtiTokenAccessor, clientUrl, "ODataDemo", version.Value)
    {
        User = CreateGroup((_clientFactory, _tokenAccessor, _url) => new UserGroup(_clientFactory, _tokenAccessor, _url));
        UserCache = CreateGroup((_clientFactory, _tokenAccessor, _url) => new UserCacheGroup(_clientFactory, _tokenAccessor, _url));
        EmployeeQuery = CreateODataGroup<VEmployee>("EmployeeQuery");
        JobCandidateEmploymentQuery = CreateODataGroup<VJobCandidateEmployment>("JobCandidateEmploymentQuery");
        SalesPersonQuery = CreateODataGroup<VSalesPerson>("SalesPersonQuery");
        StoreQuery = CreateODataGroup<VStoreWithDemographic>("StoreQuery");
        Home = CreateGroup((_clientFactory, _tokenAccessor, _url) => new HomeGroup(_clientFactory, _tokenAccessor, _url));
    }

    public ODataDemoRoleNames RoleNames { get; } = ODataDemoRoleNames.Instance;
    public string AppName { get; } = "ODataDemo";
    public UserGroup User { get; }

    public UserCacheGroup UserCache { get; }

    public AppClientODataGroup<VEmployee> EmployeeQuery { get; }

    public AppClientODataGroup<VJobCandidateEmployment> JobCandidateEmploymentQuery { get; }

    public AppClientODataGroup<VSalesPerson> SalesPersonQuery { get; }

    public AppClientODataGroup<VStoreWithDemographic> StoreQuery { get; }

    public HomeGroup Home { get; }
}