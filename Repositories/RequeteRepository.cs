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

                string sql = "SELECT * FROM dresseur;";

                dresseur = await connec.QueryAsync<DresseurModel>(sql);

                return dresseur;
            }
        }

        public async Task<IEnumerable<PokemonModel>> getPokemon()
        {

            using (var connec = this.cf.Create())
            {
                IEnumerable<PokemonModel> pokemon;

                string sql = "SELECT * FROM pokemon;";

                pokemon = await connec.QueryAsync<PokemonModel>(sql);

                return pokemon;
            }
        }

        public async Task<IEnumerable<PokemonModel>> GetSelectedPokemon(string name)
        {
            using (var connec = this.cf.Create())
            {
                IEnumerable<PokemonModel> selectpokemon;

                string sql = "SELECT * FROM pokemon WHERE name like '@name%'";

                selectpokemon = await connec.QueryAsync<PokemonModel>(sql,
                    new
                    {
                        @name = name
                    });

                return selectpokemon;
            }
        }
    }
}
