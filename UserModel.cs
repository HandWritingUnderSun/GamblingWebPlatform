using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GamblingWebPlatform
{
    public class UserModel
    {
        public string UserName { get; set; }

        public string UserPassword { get; set; }


        public UserModel(string name,string password)
        {
            UserName = name;
            UserPassword = password;
        }
    }
}
