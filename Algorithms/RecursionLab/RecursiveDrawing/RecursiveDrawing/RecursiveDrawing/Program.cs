using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecursiveDrawing
{
    class Program
    {
        private static void Draw(int n)
        {
            if(n <= 0)
            {
                return;
            }
            else
            {
                Console.WriteLine(new string('*', n));
                Draw(n - 1);
                Console.WriteLine(new string('#', n));
            }
        }

        static void Main(string[] args)
        {
            int input = int.Parse(Console.ReadLine());
            Draw(input);
        }
    }
}
