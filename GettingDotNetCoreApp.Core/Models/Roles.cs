﻿using System;
using System.Collections.Generic;
using System.Text;

namespace GettingDotNetCoreApp.Core.Models
{
    public class Roles
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public short? Status { get; set; }
        public short? IsDeleted { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
