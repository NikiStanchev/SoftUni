using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _06.Triples_of_Letters
{
    class Program
    {
        static void Main(string[] args)
        {
            int input = Int16.Parse(Console.ReadLine());
            
            for(int i = 0;i< input; i++)
            {
                for (int k = 0; k < input; k++)
                {
                    for (int j = 0; j < input; j++)
                    {
                        Console.WriteLine("{0}{1}{2}",(char)('a' + i), (char)('a' + k), (char)('a' + j));
                    }
                }
            }
        }
    }
}
