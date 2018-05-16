using System;
using System.Collections.Generic;
using System.Linq;

namespace Elections
{
    class Program
    {
        private static int[] parties;
        private static int k;
        private static int n;
        private static List<ulong> newSums;
        //private static int[] result;

        private static List<ulong> possibleSum;

        static void Main(string[] args)
        {

            k = int.Parse(Console.ReadLine());
            n = int.Parse(Console.ReadLine());

            //k = 10;
            //n = 5;

            parties = new int[n];


            for(int i = 0; i < n; i++)
            {
                parties[i] = byte.Parse(Console.ReadLine());
                //parties[i] = i + 1;
            }

            

            //int nmb = CalcPossibleSumsSet(parties, k).Where(x => x >=k).Count();

            int nmb = CalcPossibleSumsSet(parties, k).Count();
            Console.WriteLine(nmb);

        }

        static IEnumerable<ulong> CalcPossibleSumsSet(int[] nums, int targetSum)
        {
            possibleSum = new List<ulong>() { 0 };

            newSums = new List<ulong>();

            for (int i = 0; i < nums.Length; i++)
            {
                
                //foreach(var sum in possibleSum)
                //{
                //    int newSum = sum + nums[i];
                //
                //    newSums.Add(newSum);
                //
                //}

                for(int k = 0; k < possibleSum.Count; k++)
                {
                    ulong newSum = possibleSum[k] + (ulong)nums[i];
                    newSums.Add(newSum);

                }

                possibleSum = possibleSum.Concat(newSums).ToList();
                //Console.WriteLine("-----------");
                //Console.WriteLine(string.Join(" ", possibleSum));
                //Console.WriteLine(string.Join(" ", newSums));
                
                //foreach(var elm in newSums)
                //{
                //    possibleSum.Add(elm);
                //}

                newSums.Clear();
            }

            

            possibleSum.RemoveAll(x => x < (ulong)targetSum);
            possibleSum.TrimExcess();

            return possibleSum;
        }
    }
}
