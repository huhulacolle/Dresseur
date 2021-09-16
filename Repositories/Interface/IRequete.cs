using Dresseur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dresseur.Repositories.Interface
{
    public interface IRequete
    {
        public Task<IEnumerable<DresseurModel>> getDresseurs();
    }
}
