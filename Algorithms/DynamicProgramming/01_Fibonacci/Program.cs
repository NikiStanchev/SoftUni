using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_Fibonacci
{
    class Program
    {

        static int[] numbers;
        public static long Fib(int n)
        {
            numbers = new int[n + 1];

            numbers[1] = 1;
            numbers[2] = 1;

            for(int i = 3; i <= n; i++)
            {
                numbers[i] = numbers[i - 1] + numbers[i - 2];
            }

            return numbers[n];
        }

        static void Main(string[] args)
        {

            int number = int.Parse(Console.ReadLine());
            Console.WriteLine(Fib(number));
        }
    }
}
