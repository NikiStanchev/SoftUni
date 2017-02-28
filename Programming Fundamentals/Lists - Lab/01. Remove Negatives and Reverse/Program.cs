using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace _01.Remove_Negatives_and_Reverse
{
    public class Program
    {
        public static void Main()
        {
            var numbers = Console.ReadLine().Split(' ').Select(Int32.Parse).ToList();

            numbers.RemoveAll(x => x < 0);
            numbers.Reverse();

            if(numbers.Count > 0)
            {
                foreach (var num in numbers)
                {
                    Console.Write(num);
                    Console.Write(" ");
                }
                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("empty");
            }
        }
    }
}
