// Generated Code
namespace XTI_ODataDemoAppClient;
public sealed class ODataDemoAppClientVersion
{
    public static ODataDemoAppClientVersion Version(string value) => new ODataDemoAppClientVersion(value);
    public ODataDemoAppClientVersion(IHostEnvironment hostEnv) : this(getValue(hostEnv))
    {
    }

    private static string getValue(IHostEnvironment hostEnv)
    {
        string value;
        if (hostEnv.IsProduction())
        {
            value = "Current";
        }
        else
        {
            value = "Current";
        }

        return value;
    }

    private ODataDemoAppClientVersion(string value)
    {
        Value = value;
    }

    public string Value { get; }
}