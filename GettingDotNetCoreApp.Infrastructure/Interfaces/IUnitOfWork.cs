using System;
using System.Collections.Generic;
using System.Text;

namespace GettingDotNetCoreApp.Infrastructure.Interfaces
{
    public interface IUnitOfWork
    {
        IRoleRepository Roles { get; }
    }
}
