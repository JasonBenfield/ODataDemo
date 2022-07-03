using Microsoft.Extensions.DependencyInjection;
using XTI_Core.Extensions;
using XTI_DB;
using Microsoft.EntityFrameworkCore;

namespace XTI_AdventureWorksDB.Extensions;

public static class Extensions
{
    public static void AddAdventureWorksDbContextForSqlServer(this IServiceCollection services)
    {
        services.AddConfigurationOptions<DbOptions>(DbOptions.DB);
        services.AddDbContext<AdventureWorksDbContext>((sp, options) =>
        {
            var dbOptions = sp.GetRequiredService<DbOptions>();
            var connStr = new Dictionary<string, string>();
            connStr.Add("Data Source", dbOptions.Source);
            if (string.IsNullOrWhiteSpace(dbOptions.UserName))
            {
                connStr.Add("Trusted_Connection", "True");
            }
            else
            {
                connStr.Add("User Id", dbOptions.UserName);
                connStr.Add("Password", dbOptions.Password);
            }
            connStr.Add("Initial Catalog", "AdventureWorks");
            options.UseSqlServer(string.Join(";", connStr.Keys.Select(key => $"{key}={connStr[key]}")));
            options.EnableSensitiveDataLogging();
        });
    }
}