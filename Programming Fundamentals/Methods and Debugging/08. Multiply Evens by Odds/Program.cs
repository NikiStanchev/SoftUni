using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Multiply_Evens_by_Odds
{
    public class Program
    {
        public static void Main()
        {
            int input = Int32.Parse(Console.ReadLine());
            int result = MultiplyAllDigits(input);
            Console.WriteLine(result);
        }

        public static bool IsEven(int number)
        {
            if(number % 2 == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static int MultiplyAllDigits(int number)
        {
            int sumOfEvens = 0;
            int sumOfOdds = 0;

            while (number != 0)
            {
                if (IsEven(number))
                {
                    sumOfEvens += number % 10;
                    number /= 10;
                }
                else
                {
                    sumOfOdds += number % 10;
                    number /= 10;
                }

            }
            int result = sumOfEvens * sumOfOdds;
            return result;
        }
    }
}
