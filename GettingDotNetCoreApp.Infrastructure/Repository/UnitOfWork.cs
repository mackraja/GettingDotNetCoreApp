using GettingDotNetCoreApp.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace GettingDotNetCoreApp.Infrastructure.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(IRoleRepository roleRepository)
        {
            Roles = roleRepository;
        }

        public IRoleRepository Roles { get; }
    }
}
