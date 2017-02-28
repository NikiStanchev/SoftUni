using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _07.Greater_of_Two_Values
{
    public class Program
    {
        public static void Main()
        {
            var type = Console.ReadLine();

            if(type == "int")
            {
                int firstInt = Int32.Parse(Console.ReadLine());
                int secondInt = Int32.Parse(Console.ReadLine());
                int result = GetMaxValue(firstInt, secondInt);
                Console.WriteLine(result);
            }

            if(type == "string")
            {
                string firstString = Console.ReadLine();
                string secondString = Console.ReadLine();
                string result = GetMaxValue(firstString, secondString);
                Console.WriteLine(result);
            }

            if(type == "char")
            {
                char firstChar = char.Parse(Console.ReadLine());
                char secondChar = char.Parse(Console.ReadLine());
                char result = GetMaxValue(firstChar, secondChar);
                Console.WriteLine(result);
            }
        }

        public static int GetMaxValue(int first, int second)
        {
            if(first > second)
            {
                return first;
            }
            else
            {
                return second;
            }
        }

        public static char GetMaxValue(char first, char second)
        {
            if((int)first > (int)second)
            {
                return first;
            }
            else
            {
                return second;
            }
        }

        public static string GetMaxValue(string first, string second)
        {
            int result = String.Compare(first, second, true);
            
            if(result == 1)
            {
                return first;
            }
            else
            {
                return second;
            }
        }
    }
}
