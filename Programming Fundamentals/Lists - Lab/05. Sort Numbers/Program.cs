using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Sort_Numbers
{
    public class Program
    {
        public static void Main()
        {
            var numbers = Console.ReadLine().Split(' ').Select(decimal.Parse).ToList();

            numbers.Sort();

            for (int i = 0; i < numbers.Count - 1; i++)
            {
                Console.Write("{0} <= ", numbers[i]);
            }
            Console.Write(numbers[numbers.Count - 1]);
            Console.WriteLine();
        }
    }
}
