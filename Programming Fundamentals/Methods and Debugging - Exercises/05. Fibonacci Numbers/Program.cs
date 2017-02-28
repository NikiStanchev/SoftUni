namespace _05.Fibonacci_Numbers
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var input = Int32.Parse(Console.ReadLine());
            Console.WriteLine(FibRec(input));
        }

        public static Int64 Fib(int n)
        {
            int a = 0;
            int b = 1;
            
            for (int i = 0; i < n; i++)
            {
                int temp = a;
                a = b;
                b = temp + b;
            }
            return a;
        }

        public static Int64 FibRec(int n)
        {
            if(n == 0 | n == 1)
            {
                return 1;
            }
            else
            {
                return FibRec(n - 1) + FibRec(n - 2);
            }
        }
    }
}
