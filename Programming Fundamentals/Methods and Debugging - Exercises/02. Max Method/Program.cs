namespace _02.Max_Method
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var firstNumber = Int32.Parse(Console.ReadLine());
            var secondNumber = Int32.Parse(Console.ReadLine());
            var thirdNumber = Int32.Parse(Console.ReadLine());

            Console.WriteLine(GetMax((GetMax(firstNumber, secondNumber)),thirdNumber));

        }

        public static int GetMax(int a, int b)
        {
            if(a < b)
            {
                return b;
            }

            else
            {
                return a;
            }
        }
    }
}
