namespace _04.Numbers_in_Reversed_Order
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var str = Console.ReadLine();

            Console.WriteLine(ReverseDigits(str));

        }

        public static string ReverseDigits(string digit)
        {
            var reverseString = "";

            for (int i = 0; i < digit.Length; i++)
            {
                reverseString = reverseString + digit[digit.Length - 1 - i];
            }

            return reverseString;
        }
    }
}
