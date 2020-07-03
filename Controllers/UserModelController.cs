using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GamblingWebPlatform.Controllers
{
    public class UserModelController :ControllerBase
    {

        private readonly ILogger<UserModelController> _logger;

        public UserModelController(ILogger<UserModelController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public UserModel Get()
        {
            return new UserModel("zhuyu","1234");
        }
    }
}
