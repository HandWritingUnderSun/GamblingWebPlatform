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
            return new UserModel("zhuyu", "1234");
        }
    }
}
