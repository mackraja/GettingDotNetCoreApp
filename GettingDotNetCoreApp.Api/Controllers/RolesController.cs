using GettingDotNetCoreApp.Core.Models;
using GettingDotNetCoreApp.Infrastructure.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GettingDotNetCoreApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        IRoleRepository _roleRepository;

        public RolesController(IRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        // GET api/<RolesController>/1
        [HttpGet("{id}")]
        public Roles Get(int id)
        {
            return _roleRepository.Get(id);
        }

        // POST api/<RolesController>
        [HttpPost]
        public IList<Roles> Post([FromBody] Roles value)
        {
            return _roleRepository.Add(value);
        }
    }
}
