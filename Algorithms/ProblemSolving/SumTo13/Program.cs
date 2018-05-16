using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SumTo13
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').ToArray();

            int a = int.Parse(numbers[0]);
            int b = int.Parse(numbers[1]);
            int c = int.Parse(numbers[2]);

            int numberToBeEqual = 13;

            if(a + b + c != numberToBeEqual &&
               - a + b + c != numberToBeEqual &&
               a - b + c != numberToBeEqual &&
               a + b - c != numberToBeEqual &&
               a - b - c != numberToBeEqual &&
               - a + b - c != numberToBeEqual &&
               - a - b + c != numberToBeEqual &&
               - a - b - c != numberToBeEqual)
            {
                Console.WriteLine("No");
            }
            else
            {
                Console.WriteLine("Yes");
            }

            
        }
    }
}
