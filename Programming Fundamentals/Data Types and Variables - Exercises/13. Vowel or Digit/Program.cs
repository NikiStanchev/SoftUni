using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _13.Vowel_or_Digit
{
    class Program
    {
        static void Main(string[] args)
        {
            String[] arrayOfVowels = new String[] { "a", "e", "i", "o", "u" };
            String[] arrayOfDigits = new String[] { "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"};
            var input = Console.ReadLine();
            bool wasFound = false;

            for (int i = 0; i < arrayOfVowels.Length; i++)
            {
                if (input == arrayOfVowels[i]){
                    Console.WriteLine("vowel");
                    wasFound = true;
                    break;
                }
            }
            for (int i = 0; i < arrayOfDigits.Length; i++)
            {
                if (input == arrayOfDigits[i])
                {
                    Console.WriteLine("digit");
                    wasFound = true;
                    break;
                }
            }
            if(wasFound == false)
            {
                Console.WriteLine("other");
            }
        }
    }
}
