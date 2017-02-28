using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Exact_Sum_of_Real_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int counter = Int16.Parse(Console.ReadLine());
            decimal result = 0m;

            for(int i = 0; i < counter; i++)
            {
                decimal number = Decimal.Parse(Console.ReadLine());
                result += number;
            }
            Console.WriteLine(result);
        }
    }
}
