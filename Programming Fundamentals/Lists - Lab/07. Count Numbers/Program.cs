using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Count_Numbers
{
    public class Program
    {
        public static void Main()
        {
            var numbers = Console.ReadLine().Split(' ').Select(Int32.Parse).ToList();
            var numbersArray = new int[1000];

            foreach(var num in numbers)
            {
                numbersArray[num]++;
            }

            for (int i = 0; i < numbersArray.Length; i++)
            {
                if(numbersArray[i] != 0)
                {
                    Console.WriteLine("{0} -> {1}", i, numbersArray[i]);
                }
            }
        }
    }
}
