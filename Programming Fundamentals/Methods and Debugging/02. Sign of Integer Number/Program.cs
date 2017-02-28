using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Sign_of_Integer_Number
{
    public class Program
    {
        public static void Main()
        {
            int numberInput = Int32.Parse(Console.ReadLine());
            PrintSign(numberInput);
        }

        public static void PrintSign(int n)
        {
            if(n % 2 == 0)
            {
                if(n == 0)
                {
                    Console.WriteLine("The number 0 is zero.");
                }
                else
                {
                    Console.WriteLine("The number {0} is positive.", n);
                }               
            }
            else
            {
                Console.WriteLine("The number {0} is negative.", n);
            }
        }
    }
}
