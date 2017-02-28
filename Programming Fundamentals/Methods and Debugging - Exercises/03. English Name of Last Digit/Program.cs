namespace _03.English_Name_of_Last_Digit
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var inputDigit = Int32.Parse(Console.ReadLine());
            Console.WriteLine(ReturnNameOfDigit(ReturnLastDigit(inputDigit)));
        }

        public static int ReturnLastDigit(int digit)
        {
            return digit % 10;
        }

        public static string ReturnNameOfDigit(int digit)
        {
            string[] names = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};

            return names[digit];
        }
    }
}
