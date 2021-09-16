using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dresseur.Models
{
    public class PokemonModel
    {
        public int pokedex_number { get;  set; }
        public string name { get; set; }
        public int speed { get; set; }
        public int special_attack { get;  set; }
        public int defence { get; set; }
        public int attack { get; set; }
        public int hp { get; set; }
        public string primary_type { get;  set; }
        public string secondary_type { get; set; }

    }
}
