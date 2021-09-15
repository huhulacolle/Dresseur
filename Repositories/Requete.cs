
using Dresseur.Infrastructure;
using Dresseur.Models;
using Dresseur.Repositories.Interface;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dresseur.Repositories
{
/*    public class Requete : IRequete
    {

        private readonly DefaultSqlConnectionFactory cf;
        private readonly ILogger logger;

        public async Task<IEnumerable<DresseurModel>> getDresseurs()
        {

            IEnumerable<DresseurModel> jobs;
            string sql = "SELECT * FROM dresseur";
            using (var connec = this.cf.Create())
            {
                jobs = await connec.QueryAsync<DresseurModel>(sql);
            }
            return jobs;
        }
    }*/
}
