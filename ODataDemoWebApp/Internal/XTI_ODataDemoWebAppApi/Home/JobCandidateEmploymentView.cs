namespace XTI_ODataDemoWebAppApi.Home;

public sealed class JobCandidateEmploymentView : AppAction<EmptyRequest, WebViewResult>
{
    private readonly WebViewResultFactory viewFactory;

    public JobCandidateEmploymentView(WebViewResultFactory viewFactory)
    {
        this.viewFactory = viewFactory;
    }

    public Task<WebViewResult> Execute(EmptyRequest model, CancellationToken ct) =>
        Task.FromResult(viewFactory.Default("jobCandidateEmployment", "Job Candidate Employment"));
}