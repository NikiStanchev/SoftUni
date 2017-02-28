using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Refactor_Special_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());
            int result = 0;
            int tempNumber = 0;
            bool isSpecial = false;

            for (int i = 1; i <= number; i++)
            {
                tempNumber = i;
                while(i > 0)
                {
                    result += i % 10;
                    i = i / 10;
                }
                isSpecial = (result == 5 || result == 7 || result == 11);

                Console.WriteLine($"{tempNumber} -> {isSpecial}");
                result = 0;
                i = tempNumber;
            }
        }
    }
}
