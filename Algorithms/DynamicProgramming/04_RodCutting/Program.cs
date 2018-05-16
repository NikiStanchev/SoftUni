using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04_RodCutting
{
    class Program
    {
        static void Main(string[] args)
        {
            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var number = int.Parse(Console.ReadLine());
            var bestPrice = new int[numbers.Length];
            var bestCombo = new int[numbers.Length];

            for(int i = 1; i < numbers.Length; i++)
            {
                int currentBest = bestPrice[i];

                for(int j = 1;j <= i; j++)
                {
                    currentBest = Math.Max(bestPrice[i], numbers[j] + bestPrice[i - j]);

                    if(currentBest > bestPrice[i])
                    {
                        bestPrice[i] = currentBest;
                        bestCombo[i] = j;
                    }
                }
            }

            Console.WriteLine(bestPrice[number]);

            while(number - bestCombo[number] != 0)
            {
                Console.Write(bestCombo[number] + " ");
                number = number - bestCombo[number];
            }
            Console.WriteLine(bestCombo[number]);
        }
    }
}
