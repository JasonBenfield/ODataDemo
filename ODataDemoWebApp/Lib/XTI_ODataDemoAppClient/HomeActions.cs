// Generated Code
namespace XTI_ODataDemoAppClient;
public sealed partial class HomeActions
{
    internal HomeActions(AppClientUrl appClientUrl)
    {
        Index = new AppClientGetAction<EmptyRequest>(appClientUrl, "Index");
        Employee = new AppClientGetAction<EmptyRequest>(appClientUrl, "Employee");
        JobCandidateEmployment = new AppClientGetAction<EmptyRequest>(appClientUrl, "JobCandidateEmployment");
        SalesPerson = new AppClientGetAction<EmptyRequest>(appClientUrl, "SalesPerson");
        Store = new AppClientGetAction<EmptyRequest>(appClientUrl, "Store");
    }

    public AppClientGetAction<EmptyRequest> Index { get; }

    public AppClientGetAction<EmptyRequest> Employee { get; }

    public AppClientGetAction<EmptyRequest> JobCandidateEmployment { get; }

    public AppClientGetAction<EmptyRequest> SalesPerson { get; }

    public AppClientGetAction<EmptyRequest> Store { get; }
}