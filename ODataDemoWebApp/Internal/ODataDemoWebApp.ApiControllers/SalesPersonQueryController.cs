// Generated Code
namespace ODataDemoWebApp.ApiControllers;
[AllowAnonymous]
[Route("odata/SalesPersonQuery")]
public sealed partial class SalesPersonQueryController : XtiODataController<VSalesPerson>
{
    public SalesPersonQueryController(ODataDemoAppApi api) : base(api.Group("SalesPersonQuery"))
    {
    }
}