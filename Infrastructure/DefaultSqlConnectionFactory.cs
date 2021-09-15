using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Dresseur.Infrastructure
{
    public class DefaultSqlConnectionFactory
    {
        public string ConnectionString { get; }
        public DefaultSqlConnectionFactory(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        public IDbConnection Create()
        {
            return new SqlConnection(this.ConnectionString);
        }
    }
}
