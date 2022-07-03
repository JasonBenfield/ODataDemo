namespace XTI_ODataDemoWebAppApi;

public static class ODataDemoAppApiExtensions
{
    public static void AddODataDemoAppApiServices(this IServiceCollection services)
    {
        services.AddHomeGroupServices();
        services.AddScoped<EmployeeQueryAction>();
        services.AddScoped<JobCandidateEmploymentQueryAction>();
        services.AddScoped<SalesPersonQueryAction>();
        services.AddScoped<StoreQueryAction>();
    }
}