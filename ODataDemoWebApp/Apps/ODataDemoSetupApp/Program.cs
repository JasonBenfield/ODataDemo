using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ODataDemoSetupApp;
using XTI_App.Abstractions;
using XTI_App.Api;
using XTI_AppSetupApp.Extensions;
using XTI_ODataDemoWebAppApi;

await XtiSetupAppHost.CreateDefault(ODataDemoInfo.AppKey, args)
    .ConfigureServices((hostContext, services) =>
    {
        services.AddSingleton(_ => AppVersionKey.Current);
        services.AddScoped<AppApiFactory, ODataDemoAppApiFactory>();
        services.AddScoped<IAppSetup, ODataDemoAppSetup>();
    })
    .RunConsoleAsync();