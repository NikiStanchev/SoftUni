using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03Terran2
{
    class Program
    {
        static char[] elements;
        static HashSet<string> result = new HashSet<string>();

        public static void Permute(int index)
        {
            if (result.Contains(string.Join(" ", elements)))
            {
                return;
            }
                if (index >= elements.Length)
            {
                //Console.WriteLine(string.Join(" ", elements));
                result.Add(string.Join(" ", elements));
            }
            else
            {
                //Permute(index + 1);
                for (int i = index; i < elements.Length; i++)
                {
                    Swap(index, i);
                    if(!result.Contains(string.Join(" ", elements)))
                    {
                       
                        Permute(index + 1);
                        Swap(index, i);
                    }
                    
                    
                }
            }
        }

        static void Swap(int first, int second)
        {
            var temp = elements[first];
            elements[first] = elements[second];
            elements[second] = temp;
        }

        static void Main(string[] args)
        {

            //elements = new[] { 'B', 'Y', 'Y', 'B', 'B' };

            //var elm = Console.ReadLine().Split(' ').Where(x => x != " ");

            //elements = elm.ToArray();

            elements = Console.ReadLine().ToCharArray();

            Permute(0);

            Console.WriteLine(result.Count);
        }
    }
}
