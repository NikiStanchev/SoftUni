using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3
{
    class Program
    {
        static char[] arr;
        static HashSet<string> result = new HashSet<string>();

        static void Main(string[] args)
        {
            arr = new char[] { 'B', 'Y', 'Y', 'B', 'B' };
            //Array.Sort(arr);
            PermuteRep(arr, 0, arr.Length - 1);

            Console.WriteLine(result.Count);
        }

        static void PermuteRep(char[] arr, int start, int end)
        {
            //Print(arr);
            //Console.WriteLine(string.Join(" ", arr));
            result.Add(string.Join(" ", arr));

            for (int left = end - 1; left >= start; left--)
            {
                for (int right = left + 1; right <= end; right++)
                    if (arr[left] != arr[right])
                    {
                        Swap(ref arr[left], ref arr[right]);
                        PermuteRep(arr, left + 1, end);
                    }

                var firstElement = arr[left];
                for (int i = left; i <= end - 1; i++)
                    arr[i] = arr[i + 1];
                arr[end] = firstElement;
            }
        }

        private static void Swap(ref char v1, ref char v2)
        {
            var temp = v1;
            v2 = v1;
            v2 = temp;
        }

        //private static void Swap(ref int v1, ref int v2)
        //{
        //    if(v1 < arr.Length && v1 >= 0 && v2 < arr.Length && v2 >= 0)
        //    {
        //        var temp = arr[v1];
        //        arr[v1] = arr[v2];
        //        arr[v2] = temp;
        //    }
        //    
        //}

        //static void Swap(int first, int second)
        //{
        //    var temp = arr[first];
        //    arr[first] = arr[second];
        //    arr[second] = temp;
        //}
    }
}
