using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dresseur.Controllers
{
    [ApiController]
    [Route("api/pokemon")]
    public class LigueController : Controller
    {
        // GET: LigueController
        [HttpGet("route")]
        public ActionResult Index()
        {
            return View();
        }
    }
}
