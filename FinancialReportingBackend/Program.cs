using FinancialReportingBackend.Data;
using Microsoft.EntityFrameworkCore;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddDbContext<FinancialContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
        builder.Services.AddControllers();

        // Configure CORS
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowLocalhost3000",
                policyBuilder =>
                {
                    policyBuilder.WithOrigins("http://localhost:3000")
                                 .AllowAnyHeader()
                                 .AllowAnyMethod()
                                 .AllowCredentials();
                });
        });

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseHttpsRedirection();
        app.UseCors("AllowLocalhost3000");
        app.UseAuthorization();
        app.MapControllers();

        SeedDatabase(app);

        app.Run();
    }

    private static void SeedDatabase(IHost app)
    {
        using var scope = app.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<FinancialContext>();

        if (!context.FinancialReports.Any())
        {
            context.FinancialReports.AddRange(
                new FinancialReport { ReportName = "Q1 Financial Summary", Amount = 15000.50m, ReportDate = new DateTime(2024, 3, 31) },
                new FinancialReport { ReportName = "Q2 Financial Summary", Amount = 17500.75m, ReportDate = new DateTime(2024, 6, 30) },
                new FinancialReport { ReportName = "Q3 Financial Summary", Amount = 20000.00m, ReportDate = new DateTime(2024, 9, 30) },
                new FinancialReport { ReportName = "Q4 Financial Summary", Amount = 25000.25m, ReportDate = new DateTime(2024, 12, 31) },
                new FinancialReport { ReportName = "Annual Financial Report", Amount = 77500.00m, ReportDate = new DateTime(2024, 12, 31) },
                new FinancialReport { ReportName = "Client Profitability Analysis", Amount = 5000.00m, ReportDate = new DateTime(2024, 6, 15) },
                new FinancialReport { ReportName = "Operational Cost Analysis", Amount = 8000.00m, ReportDate = new DateTime(2024, 7, 20) },
                new FinancialReport { ReportName = "Revenue Forecast", Amount = 12000.00m, ReportDate = new DateTime(2024, 8, 5) },
                new FinancialReport { ReportName = "Market Analysis Report", Amount = 9500.50m, ReportDate = new DateTime(2024, 9, 10) },
                new FinancialReport { ReportName = "Tax Advisory Report", Amount = 3000.75m, ReportDate = new DateTime(2024, 10, 25) }
            );
            context.SaveChanges();
        }
    }
}
