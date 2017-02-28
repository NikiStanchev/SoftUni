namespace _1.Hello__Name_
{
    using System;

    public class Program
    {
        public static void Main()
        {
            var inputText = Console.ReadLine();
            Console.WriteLine(PrintName(inputText));
        }

        public static String PrintName(string name)
        {
            var resultString = $"Hello, {name}!";
            return resultString;
        }
    }
}
