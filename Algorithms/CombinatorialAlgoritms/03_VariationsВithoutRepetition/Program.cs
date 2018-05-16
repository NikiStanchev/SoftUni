using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03_VariationsВithoutRepetition
{
    class Program
    {
        static string[] elements;
        static string[] variants;
        static bool[] used;

        static void Gen(int index)
        {
            if(index >= variants.Length)
            {
                Console.WriteLine(string.Join(" ", variants));
            }
            else
            {
                for(int i = 0; i < elements.Length;i++)
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
            var elm = Console.ReadLine().Split(' ').Where(x => x != " ");
            int k = int.Parse(Console.ReadLine());
            elements = elm.ToArray();
            //elements = new[] { "a", "b", "c" };
            variants = new string[k];
            used = new bool[elements.Length];

            Gen(0);
        }
    }
}
