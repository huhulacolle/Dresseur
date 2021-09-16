using Dapper;
using Dresseur.Infrastructure;
using Dresseur.Models;
using Dresseur.Repositories.Interface;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dresseur.Repositories
{
    public class RequeteRepository : IRequete
    {
        private readonly DefaultSqlConnectionFactory cf;

        public RequeteRepository(DefaultSqlConnectionFactory cf)
        {
            this.cf = cf;
        }

        public async Task<IEnumerable<DresseurModel>> getDresseurs()
        {

            using (var connec = this.cf.Create())
            {
                IEnumerable<DresseurModel> dresseur;

                var sql = "SELECT * FROM dresseur;";

                dresseur = await connec.QueryAsync<DresseurModel>(sql);

                return dresseur;
            }
        }
    }
}
