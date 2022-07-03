using XTI_ODataDemoWebAppApi.Home;

namespace XTI_ODataDemoWebAppApi;

partial class ODataDemoAppApi
{
    private HomeGroup? home;

    public HomeGroup Home { get => home ?? throw new ArgumentNullException(nameof(home)); }

    partial void createHomeGroup(IServiceProvider sp)
    {
        home = new HomeGroup
        (
            source.AddGroup(nameof(Home), ResourceAccess.AllowAnonymous()),
            sp
        );
    }
}