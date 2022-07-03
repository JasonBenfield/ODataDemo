// Generated Code
namespace ODataDemoWebApp.ApiControllers;
[Authorize]
public sealed partial class UserController : Controller
{
    private readonly ODataDemoAppApi api;
    public UserController(ODataDemoAppApi api)
    {
        this.api = api;
    }

    public async Task<IActionResult> Index(UserStartRequest model, CancellationToken ct)
    {
        var result = await api.Group("User").Action<UserStartRequest, WebViewResult>("Index").Execute(model, ct);
        return View(result.Data.ViewName);
    }

    public async Task<IActionResult> AccessDenied(CancellationToken ct)
    {
        var result = await api.Group("User").Action<EmptyRequest, WebViewResult>("AccessDenied").Execute(new EmptyRequest(), ct);
        return View(result.Data.ViewName);
    }

    public async Task<IActionResult> Error(CancellationToken ct)
    {
        var result = await api.Group("User").Action<EmptyRequest, WebViewResult>("Error").Execute(new EmptyRequest(), ct);
        return View(result.Data.ViewName);
    }

    public async Task<IActionResult> Logout(LogoutRequest model, CancellationToken ct)
    {
        var result = await api.Group("User").Action<LogoutRequest, WebRedirectResult>("Logout").Execute(model, ct);
        return Redirect(result.Data.Url);
    }
}