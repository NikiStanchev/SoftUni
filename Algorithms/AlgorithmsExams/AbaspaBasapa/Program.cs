using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaspaBasapa
{
    class Program
    {
        static void Main(string[] args)
        {
            var first = Console.ReadLine();
            var second = Console.ReadLine();
            //var first = "abaspa";
            //var second = "basapa";

            var lcs = new int[first.Length, second.Length];

            var max = 0;
            var maxI = 0;
            var maxJ = 0;

            for(int i = 0; i < first.Length; i++)
            {
                for(int j = 0; j < second.Length; j++)
                {
                    if(first[i] == second[j])
                    {
                        var result = 1;

                        if(i - 1 >= 0 && j - 1 >= 0)
                        {
                            result = lcs[i - 1, j - 1] + 1;
                        }

                        lcs[i, j] = result;
                    }
                    else
                    {
                        lcs[i, j] = 0;
                    }

                    if(lcs[i,j] > max)
                    {
                        max = lcs[i, j];
                        maxI = i;
                        maxJ = j;
                    }
                }
            }


            var resultList = new List<char>();

            while(maxI >= 0 && maxJ >= 0 && max != 0)
            {
                resultList.Add(first[maxI]);
                maxI--;
                maxJ--;
                max--;
            }

            resultList.Reverse();

            Console.WriteLine(string.Join(string.Empty, resultList));
        }
    }
}
