using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Draw_a_Filled_Square
{
    public class Program
    {
        public static void Main()
        {
            int numberInput = Int32.Parse(Console.ReadLine());
            PrintFigure(numberInput);
        }

        public static void PrintTopAndBottomOfTheFigure(int n)
        {
            Console.WriteLine(new string('-', n * 2));
        }

        public static void PrintMiddleOfTheFigure(int n)
        {
            Console.Write('-');
            for (int i = 1; i < n; i++)
            {
                Console.Write("\\/");
            }
            Console.WriteLine('-');
        }

        public static void PrintFigure(int n)
        {
            PrintTopAndBottomOfTheFigure(n);
            for (int i = 0; i < n - 2; i++)
            {
                PrintMiddleOfTheFigure(n);
            }           
            PrintTopAndBottomOfTheFigure(n);
        }
    }
}
