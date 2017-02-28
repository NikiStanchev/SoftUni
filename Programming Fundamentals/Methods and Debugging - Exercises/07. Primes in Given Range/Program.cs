namespace _07.Primes_in_Given_Range
{
    using System;
    using System.Collections.Generic;

    public class Program
    {
        public static void Main()
        {
            var start = Int64.Parse(Console.ReadLine());
            var end = Int64.Parse(Console.ReadLine());

            PrintPrimnes(start, end);
        }

        public static void PrintPrimnes(long first, long second)
        {
            var list = FindPrimesInRange(first, second);

            for (int i = 0; i < list.Count; i++)
            {
                Console.Write($"{list[i]}");
                if(i != list.Count - 1)
                {
                    Console.Write(", ");
                }
            }
            Console.WriteLine();
        }

        public static List<long> FindPrimesInRange(long startNum, long endNum)
        {
            var result = new List<long>();

            for (long i = startNum + 1; i <= endNum; i++)
            {
                if (IsPrime(i))
                {
                    result.Add(i);
                }
            }

            return result;
        }

        public static bool IsPrime(long number)
        {
            if (number == 1) return false;
            if (number == 2) return true;

            var boundary = (int)Math.Floor(Math.Sqrt(number));

            for (int i = 2; i <= boundary; ++i)
            {
                if (number % i == 0) return false;
            }

            return true;
        }
    }
}
