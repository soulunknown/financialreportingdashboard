using FinancialReportingBackend.Data;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace FinancialReportingBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FinancialReportsController : ControllerBase
    {
        private readonly FinancialContext _context;

        public FinancialReportsController(FinancialContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<FinancialReport>> GetFinancialReports()
        {
            return _context.FinancialReports.ToList();
        }
    }
}
