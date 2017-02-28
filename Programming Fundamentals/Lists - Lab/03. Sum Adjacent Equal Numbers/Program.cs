using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.Sum_Adjacent_Equal_Numbers
{
    public class Program
    {
        public static void Main()
        {
            var listOfNumbers = Console.ReadLine().Split(' ').Select(double.Parse).ToList();

            var listOfResultsNumbers = SumOfAdjacentEqualNumbers(listOfNumbers);

            foreach(var element in listOfResultsNumbers)
            {
                Console.Write("{0} ", element);
            }
            Console.WriteLine();
        }

            public static List<double> SumOfAdjacentEqualNumbers(List<double> numbers)
        {
            var returnList = new List<double>();

            double tempNumber = 0;
            for (int i = 0; i < numbers.Count - 1; i++)
            {
                if(numbers[i] == numbers[i + 1])
                {
                    tempNumber = numbers[i] + numbers[i + 1];
                    numbers[i + 1] = tempNumber;
                    numbers.RemoveAt(i);

                    SumOfAdjacentEqualNumbers(numbers);
                }
            }

            returnList = numbers;
            return returnList;
        }
    }
}
