using XTI_App.Abstractions;

namespace ODataDemoSetupApp;

internal sealed class ODataDemoAppSetup : IAppSetup
{
    public Task Run(AppVersionKey versionKey)
    {
        return Task.CompletedTask;
    }
}
