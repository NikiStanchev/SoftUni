using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Special_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int input = Int16.Parse(Console.ReadLine());

            for(int i = 1; i <= input; i++)
            {
                if (SumOfDigits(i) == 5 || SumOfDigits(i) == 7 || SumOfDigits(i) == 11) { Console.WriteLine("{0} -> True", i); }
                else { Console.WriteLine("{0} -> False", i); }
            }

        }
        

        public static int IntLength(int i)
        {
            if (i < 0)
                throw new ArgumentOutOfRangeException();
            if (i == 0)
                return 1;
            return (int)Math.Floor(Math.Log10(i)) + 1;
        }

        public static int SumOfDigits(int digit)
        {
            int number = digit;
            int sum = 0;
            int count = IntLength(number);

            for (int i = 0; i < count; i++)
            {
                sum += number % 10;
                number = number / 10;
            }
            return sum;
        }
    }
}
