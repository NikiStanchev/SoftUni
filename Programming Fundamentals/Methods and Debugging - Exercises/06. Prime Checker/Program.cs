namespace _06.Prime_Checker
{
    using System;

    public class Program
    {
        public static void Main()
        {
            long input = Int64.Parse(Console.ReadLine());

            Console.WriteLine(IsPrime(input));
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
