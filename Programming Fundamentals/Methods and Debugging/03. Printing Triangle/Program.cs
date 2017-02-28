using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Printing_Triangle
{
    public class Program
    {
        public static void Main()
        {
            int numberInput = Int32.Parse(Console.ReadLine());
            PrintTriangle(numberInput);
        }

        public static void PrintTopOfTheTriangle(int n)
        {
            for (int i = 1; i <= n; i++)
            {
                for (int k = 1; k <= i; k++)
                {
                    Console.Write(k);
                    Console.Write(" ");
                }
                Console.WriteLine();
            }
        }

        public static void PrintBottonOfTheTriangle(int n)
        {
            for (int i = n - 1; i > 0; i--)
            {
                for (int k = 1; k <= i; k++)
                {
                    Console.Write(k);
                    Console.Write(" ");
                }
                Console.WriteLine();
            }
        }

        public static void PrintTriangle(int n)
        {
            PrintTopOfTheTriangle(n);
            PrintBottonOfTheTriangle(n);
        }
    }
}
