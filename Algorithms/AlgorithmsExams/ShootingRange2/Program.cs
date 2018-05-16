using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShootingRange2
{
    class Program
    {
        static int[] elements;
        static int multiplier;

        static void Main(string[] args)
        {

            elements = new[] { 1,2,3 };
            multiplier = 1;

            Permute(0);
        }


        public static void Permute(int index)
        {
            if (index >= elements.Length)
            {
                Console.WriteLine(string.Join(" ", elements));
            }
            else
            {
                //Permute(index + 1);
                for (int i = index; i < elements.Length; i++)
                {
                    
                    Swap(index, i);
                    Permute(index + 1);
                    Swap(index, i);
                }
            }
        }

        static void Swap(int first, int second)
        {
            var temp = elements[first];
            elements[first] = elements[second];
            elements[second] = temp;
        }


    }
}
