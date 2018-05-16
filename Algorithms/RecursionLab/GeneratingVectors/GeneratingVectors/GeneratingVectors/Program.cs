using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeneratingVectors
{
    class Program
    {
        private static void Gen(int[] vector, int index)
        {
            if(index > vector.Length -1)
            {
                Console.WriteLine(string.Join("", vector));
            }
            else
            {
                for(int i = 0; i <= 1; i++)
                {
                    vector[index] = i;
                    Gen(vector, index + 1);
                }
            }

        }

        static void Main(string[] args)
        {
            int input = int.Parse(Console.ReadLine());

            //int[] arr = new int[input];

            var arr = new int[input];
            Gen(arr, 0);
        }
    }
}
