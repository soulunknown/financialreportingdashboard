using Microsoft.EntityFrameworkCore;

namespace FinancialReportingBackend.Data
{
    public class FinancialContext : DbContext
    {
        public FinancialContext(DbContextOptions<FinancialContext> options) : base(options) { }

        public DbSet<FinancialReport> FinancialReports { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FinancialReport>(entity =>
            {
                entity.Property(e => e.Amount).HasColumnType("decimal(18,2)");
            });
        }
    }

    public class FinancialReport
    {
        public int Id { get; set; }
        public required string ReportName { get; set; }
        public decimal Amount { get; set; }
        public DateTime ReportDate { get; set; }
    }
}
