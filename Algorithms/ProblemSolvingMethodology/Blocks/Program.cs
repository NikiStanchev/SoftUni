using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blocks
{
    class Program
    {
        static int k = 4;
        static int n;
        static string[] arr = new string[k];

        static string[] elements;
        static bool[] used;
        static HashSet<string> hashSet;
        static HashSet<string> result;
        static HashSet<string> usedElements;

        static void Main(string[] args)
        {
            n = int.Parse(Console.ReadLine());

            used = new bool[n];
            hashSet = new HashSet<string>();
            usedElements = new HashSet<string>();
            result = new HashSet<string>(); 

            elements = new string[n];

            FillLetters(n);
            Gen(0);
            AddResult();

            Console.WriteLine($"Number of blocks: {result.Count}");
            foreach(var el in result)
            {
                Console.WriteLine(el);
            }
            
        }

        private static void FillLetters(int n)
        {
            for (int i = 0; i < n; i++)
            {
                elements[i] = ((char)('A' + i)).ToString();
            }
        }


        public static void Gen(int index)
        {
            if (index >= k)
            {
                hashSet.Add(string.Join("", arr));
            }
            else
            {
                for (int i = 0; i < elements.Length; i++)
                {
                    if (!used[i] )
                    {
                        used[i] = true;
                        arr[index] = elements[i];
                        Gen(index + 1);
                        used[i] = false;
                    }
                }
            }
        }

   
        private static void AddResult()
        {
            foreach(var el in hashSet)
            {
                if (!usedElements.Contains(el))
                {
                    result.Add(el);

                    usedElements.Add(el);
                    usedElements.Add(el.Substring(1, el.Length - 1) + el.Substring(0, 1));
                    usedElements.Add(el.Substring(2, el.Length - 2) + el.Substring(0, 2));
                    usedElements.Add(el.Substring(3, el.Length - 3) + el.Substring(0, 3));

                }
            }
        }
    }
}
