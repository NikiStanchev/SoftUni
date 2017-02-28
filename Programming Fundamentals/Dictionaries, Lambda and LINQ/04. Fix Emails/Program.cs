using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace _04.Fix_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = @"\w+@\w+\.(uk|us)";
            Regex regex = new Regex(pattern);

            bool isStoped = false;
            var emailBook = new Dictionary<string, string>();

            while (isStoped == false)
            {
                var name = Console.ReadLine();
                               
                if (name == "stop")
                {
                    isStoped = true;
                    break;
                }
                var email = Console.ReadLine();
                bool containsInvalidEmail = regex.IsMatch(email);
                if (containsInvalidEmail)
                {
                    continue;
                }
                else
                {
                    emailBook.Add(name, email);

                }
            }

            foreach(var i in emailBook)
            {
                Console.WriteLine($"{i.Key} -> {i.Value}");
            }
        }
    }
}
