namespace XTI_ODataDemoWebAppApi.Home;

public sealed class HomeGroup : AppApiGroupWrapper
{
    public HomeGroup(AppApiGroup source, IServiceProvider sp)
        : base(source)
    {
        Index = source.AddAction
        (
            nameof(Index), 
            () => sp.GetRequiredService<IndexAction>()
        );
        Employee = source.AddAction
        (
            nameof(Employee), 
            () => sp.GetRequiredService<EmployeeView>()
        );
        JobCandidateEmployment = source.AddAction
        (
            nameof(JobCandidateEmployment), 
            () => sp.GetRequiredService<JobCandidateEmploymentView>()
        );
        SalesPerson = source.AddAction
        (
            nameof(SalesPerson),
            () => sp.GetRequiredService<SalesPersonView>()
        );
        Store = source.AddAction
        (
            nameof(Store),
            () => sp.GetRequiredService<StoreView>()
        );
    }

    public AppApiAction<EmptyRequest, WebViewResult> Index { get; }
    public AppApiAction<EmptyRequest, WebViewResult> Employee { get; }
    public AppApiAction<EmptyRequest, WebViewResult> JobCandidateEmployment { get; }
    public AppApiAction<EmptyRequest, WebViewResult> SalesPerson { get; }
    public AppApiAction<EmptyRequest, WebViewResult> Store { get; }
}