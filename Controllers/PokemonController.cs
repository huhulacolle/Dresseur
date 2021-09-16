using Dresseur.Models;
using Dresseur.Repositories.Interface;
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
    public class PokemonController : Controller
    {
        private readonly IRequete repository;

        public PokemonController(IRequete repo)
        {
            this.repository = repo;
        }

        // GET: PokemonController
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<PokemonModel>>> getPokemon()
        {
            var pokemon = await this.repository.getPokemon();

            if (pokemon == null)
                return NotFound();

            return Ok(pokemon);
        }

        // GET: DresseurController
        [HttpGet("dresseur")]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<DresseurModel>>> getDresseurs()
        {
            var dresseur = await this.repository.getDresseurs();

            if (dresseur == null)
                return NotFound();

            return Ok(dresseur);
        }
    }
}
