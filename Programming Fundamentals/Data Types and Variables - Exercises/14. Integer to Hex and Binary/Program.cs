using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _14.Integer_to_Hex_and_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            int input = Int32.Parse(Console.ReadLine());

            var binary = Convert.ToString(input, 2);
            var hexadecimal = input.ToString("X");
            Console.WriteLine(hexadecimal);
            Console.WriteLine(binary);
        }
    }
}
