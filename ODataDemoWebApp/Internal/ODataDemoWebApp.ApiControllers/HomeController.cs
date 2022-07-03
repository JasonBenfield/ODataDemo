// Generated Code
namespace ODataDemoWebApp.ApiControllers;
[AllowAnonymous]
public sealed partial class HomeController : Controller
{
    private readonly ODataDemoAppApi api;
    public HomeController(ODataDemoAppApi api)
    {
        this.api = api;
    }

    public async Task<IActionResult> Index(CancellationToken ct)
    {
        var result = await api.Group("Home").Action<EmptyRequest, WebViewResult>("Index").Execute(new EmptyRequest(), ct);
        return View(result.Data.ViewName);
    }

    public async Task<IActionResult> Employee(CancellationToken ct)
    {
        var result = await api.Group("Home").Action<EmptyRequest, WebViewResult>("Employee").Execute(new EmptyRequest(), ct);
        return View(result.Data.ViewName);
    }

    public async Task<IActionResult> JobCandidateEmployment(CancellationToken ct)
    {
        var result = await api.Group("Home").Action<EmptyRequest, WebViewResult>("JobCandidateEmployment").Execute(new EmptyRequest(), ct);
        return View(result.Data.ViewName);
    }

    public async Task<IActionResult> SalesPerson(CancellationToken ct)
    {
        var result = await api.Group("Home").Action<EmptyRequest, WebViewResult>("SalesPerson").Execute(new EmptyRequest(), ct);
        return View(result.Data.ViewName);
    }

    public async Task<IActionResult> Store(CancellationToken ct)
    {
        var result = await api.Group("Home").Action<EmptyRequest, WebViewResult>("Store").Execute(new EmptyRequest(), ct);
        return View(result.Data.ViewName);
    }
}