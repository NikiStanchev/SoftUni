using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Phonebook_Upgrade
{
    class Program
    {
        static void Main(string[] args)
        {
            var phoneBook = new Dictionary<string, string>();
            var searchBook = new List<string>();
            bool isEnd = false;

            while (isEnd == false)
            {
                var input = Console.ReadLine().Split(' ').ToList();
                if (input[0] == "END")
                {
                    isEnd = true;
                }
                if (input[0] == "A")
                {
                    phoneBook.Add(input[1], input[2]);
                    searchBook.Add(input[1]);
                }
                if(input[0] == "ListAll")
                {
                    searchBook.Sort();
                }
            }


            foreach (var search in searchBook)
            {
                if (IsInDict(search, phoneBook))
                {
                    Console.WriteLine($"{search} -> {phoneBook[search]}");
                }
                else
                {
                    Console.WriteLine($"Contact {search} does not exist.");
                }
            }
        }

        public static bool IsInDict(string element, Dictionary<string, string> myDict)
        {
            foreach (var el in myDict.Keys)
            {
                if (el == element)
                {
                    return true;
                }
            }
            return false;
        }
    }
}
