using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;

namespace GamblingWebPlatform.Controllers
{
    [ApiController]
    [Route("api/UserModelController")]
    public class UserModelController :ControllerBase
    {

        private readonly ILogger<UserModelController> _logger;

        public UserModelController(ILogger<UserModelController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("UserModel")]
        public UserModel Get()
        {
            return new UserModel("jinyu", "654321");
        }

        [HttpGet]
        [Route("CheckUser")]
        public bool Get(string name,string password)
        {
            string username = name;
            string userpassword = password;
            return true;
        }
    }
}
