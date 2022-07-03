using XTI_HubAppClient.WebApp.Extensions;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using ODataDemoWebApp.ApiControllers;
using XTI_Core;
using XTI_ODataDemoWebAppApi;
using XTI_App.Api;
using XTI_AdventureWorksDB.Extensions;
using Microsoft.AspNetCore.OData;

var builder = XtiWebAppHost.CreateDefault(ODataDemoInfo.AppKey, args);
var xtiEnv = XtiEnvironment.Parse(builder.Environment.EnvironmentName);
builder.Services.ConfigureXtiCookieAndTokenAuthentication(xtiEnv, builder.Configuration);
builder.Services.AddAdventureWorksDbContextForSqlServer();
builder.Services.AddScoped<AppApiFactory, ODataDemoAppApiFactory>();
builder.Services.AddScoped(sp => (ODataDemoAppApi)sp.GetRequiredService<IAppApi>());
builder.Services.AddODataDemoAppApiServices();
builder.Services
    .AddMvc()
    .AddOData(options =>
    {
        var edmModel = new EdmModelBuilder().GetEdmModel();
        options.EnableQueryFeatures(10000)
            .AddRouteComponents("odata", edmModel);
    })
    .AddJsonOptions(options =>
    {
        options.SetDefaultJsonOptions();
    })
    .AddMvcOptions(options =>
    {
        options.SetDefaultMvcOptions();
    });
builder.Services.AddControllersWithViews()
    .PartManager.ApplicationParts.Add
    (
        new AssemblyPart(typeof(HomeController).Assembly)
    );

var app = builder.Build();
app.UseODataQueryRequest();
app.UseXtiDefaults();
await app.RunAsync();