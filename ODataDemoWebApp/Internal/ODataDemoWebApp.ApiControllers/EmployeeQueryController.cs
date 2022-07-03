// Generated Code
namespace ODataDemoWebApp.ApiControllers;
[AllowAnonymous]
[Route("odata/EmployeeQuery")]
public sealed partial class EmployeeQueryController : XtiODataController<VEmployee>
{
    public EmployeeQueryController(ODataDemoAppApi api) : base(api.Group("EmployeeQuery"))
    {
    }
}