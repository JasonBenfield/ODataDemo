namespace XTI_ODataDemoWebAppApi;

public sealed class ODataDemoAppApiFactory : AppApiFactory
{
    private readonly IServiceProvider sp;

    public ODataDemoAppApiFactory(IServiceProvider sp)
    {
        this.sp = sp;
    }

    public new ODataDemoAppApi Create(IAppApiUser user) => (ODataDemoAppApi)base.Create(user);
    public new ODataDemoAppApi CreateForSuperUser() => (ODataDemoAppApi)base.CreateForSuperUser();

    protected override IAppApi _Create(IAppApiUser user) => new ODataDemoAppApi(user, sp);
}