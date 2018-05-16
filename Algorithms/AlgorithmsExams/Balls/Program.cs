using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Balls
{
    class Program
    {
        static List<int> elements = new List<int>();
        static int[] variants;
        static bool[] used;

        static int p;
        static int n;
        static int k;

        static StringBuilder builder = new StringBuilder();

        static void Main(string[] args)
        {

            p = int.Parse(Console.ReadLine());
            n = int.Parse(Console.ReadLine());
            k = int.Parse(Console.ReadLine());

            for(int i = 1; i <= k; i++)
            {
                elements.Add(i);
            }

            variants = new int[k];
            used = new bool[elements.Count];

            Gen(0);
            Console.WriteLine(builder.ToString().Trim());
        }


        static void Gen(int index)
        {
            if (index >= variants.Length)
            {
                if(n == variants.Sum())
                {
                    builder.AppendLine(string.Join(", ", variants));
                }
            }
            else
            {
                for (int i = 0; i < elements.Count; i++)
                {
                    used[i] = true;
                    variants[index] = elements[i];
                    Gen(index + 1);

                }
            }
        }
    }
}
