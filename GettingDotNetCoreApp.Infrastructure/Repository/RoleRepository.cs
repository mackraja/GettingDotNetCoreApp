using Dapper;
using GettingDotNetCoreApp.Core.Models;
using GettingDotNetCoreApp.Infrastructure.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GettingDotNetCoreApp.Infrastructure.Repository
{
    public class RoleRepository : IRoleRepository
    {
        private readonly IConfiguration _configuration;

        public RoleRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<int> Add(Roles entity)
        {
            entity.CreatedAt = DateTime.Now;
            entity.UpdatedAt = DateTime.Now;
            var sqlString = "INSERT INTO Roles (name, status, isDeleted, createdAt, updatedAt) Values (@Name, @Status, @IsDeleted, @CreatedAt, @UpdatedAt)";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("dbString")))
            {
                connection.Open();
                var addedRoles = await connection.ExecuteAsync(sqlString, entity);
                return addedRoles;
            }
        }

        public Task<int> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Roles> Get(int id)
        {
            var sqlString = "SELECT * FROM Roles WHERE id = @Id";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("dbString")))
            {
                connection.Open();
                var result = await connection.QueryAsync<Roles>(sqlString, new { id });
                return result.FirstOrDefault();
            }
        }

        public Task<IEnumerable<Roles>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<int> Update(Roles entity)
        {
            throw new NotImplementedException();
        }
    }
}
