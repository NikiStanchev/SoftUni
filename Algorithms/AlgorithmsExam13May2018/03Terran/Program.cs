using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03Terran
{
    class Program
    {
        static char[] elements;
        static char[] variants;
        static bool[] used;
        static int count;

        static HashSet<string> result = new HashSet<string>();

        static void Gen(int index)
        {
            if (index >= variants.Length)
            {
                //Console.WriteLine(string.Join(" ", variants));
                result.Add(string.Join(" ", variants));
                //count++;
            }
            else
            {
                for (int i = 0; i < elements.Length; i++)
                {
                    if (!used[i])
                    {
                        used[i] = true;
                        variants[index] = elements[i];
                        
                        Gen(index + 1);

                        used[i] = false;
                    }

                }
            }
        }


        static void Main(string[] args)
        {
            
            elements = new[] { 'B', 'Y', 'Y', 'B', 'B' };

            //elements = Console.ReadLine().ToCharArray();
            int n = elements.Length;

            variants = new char[n];
            used = new bool[elements.Length];

            Gen(0);

            Console.WriteLine(count);

        }

    }

  
}
