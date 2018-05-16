using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecursiveArraySum
{

    class Program
    {
        private static int Sum(int[] numbers, int index)
        {
            if(index < numbers.Length)
            {
                return numbers[index] + Sum(numbers, index + 1);
            }
            else
            {
                return 0;
            }
            
        }

        static void Main(string[] args)
        {
            var input = Console.ReadLine();
            var inputArray = input.Split(' ');

            int[] myInts = Array.ConvertAll(inputArray, s => int.Parse(s));

            Console.WriteLine(Sum(myInts, 0));
        }
    }
}
