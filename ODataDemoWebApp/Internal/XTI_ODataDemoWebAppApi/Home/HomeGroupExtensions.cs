using XTI_ODataDemoWebAppApi.Home;

namespace XTI_ODataDemoWebAppApi;

internal static class HomeGroupExtensions
{
    public static void AddHomeGroupServices(this IServiceCollection services)
    {
        services.AddScoped<IndexAction>();
        services.AddScoped<EmployeeView>();
        services.AddScoped<JobCandidateEmploymentView>();
        services.AddScoped<SalesPersonView>();
        services.AddScoped<StoreView>();
    }
}