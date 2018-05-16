using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShortestPath
{
    class Program
    {
        static char[] elements;
        static char[] variants;
        static bool[] used;
        static bool[] star;

        static List<string> result;

        static void Gen(int index)
        {
            if (index >= variants.Length)
            {
                //Console.WriteLine(string.Join(" ", variants));
                result.Add(string.Join("", variants));
            }
            else
            {
                for (int i = 0; i < elements.Length; i++)
                {
                    used[i] = true;
                    variants[index] = elements[i];
                    Gen(index + 1);

                }
            }
        }

        static void Main(string[] args)
        {
            // R*S*L

            var line = Console.ReadLine().ToCharArray();
            star = new bool[line.Length];

            for(int i = 0; i < line.Length; i++)
            {
                if(line[i] == '*')
                {
                    star[i] = true;
                }
            }

            var size = line.Where(x => x == '*').Count();

            elements = new[] { 'L', 'R', 'S' };
            variants = new char[size];
            used = new bool[elements.Length];

            int s = (int)(Math.Pow(3, size));

            result = new List<string>();

            Gen(0);

            Console.WriteLine(result.Count);
            foreach(var el in result)
            {

               // Console.WriteLine(el[0]);
                //Console.WriteLine(el[1]);
                var index = 0;
                for (int i = 0; i < line.Length; i++)
                {
                    if(star[i])
                    {
                        line[i] = el[index++];
                        
                    }
                }
                Console.WriteLine(line);
            }

        }
    }
}
