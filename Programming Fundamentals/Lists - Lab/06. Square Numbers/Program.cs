using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Square_Numbers
{
    public class Program
    {
        public static void Main()
        {
            var numbers = Console.ReadLine().Split(' ').Select(Int32.Parse).ToList();
            numbers.Sort();
            numbers.Reverse();

            foreach(var num in numbers)
            {
                if(Math.Sqrt(num) % 1 == 0)
                {
                    Console.Write("{0} ",num);
                }
            }
            Console.WriteLine();
        }
    }
}
