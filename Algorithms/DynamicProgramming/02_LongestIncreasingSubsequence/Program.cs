using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02_LongestIncreasingSubsequence
{
    class Program
    {
        static void Main(string[] args)
        {
            //var numbers = new[] { 3, 14, 5, 12, 15, 7, 8, 9, 11, 10, 1 };
            var numbers = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            var solutions = new int[numbers.Length];
            var maxSolution = 0;
            var prev = new int[numbers.Length];
            var maxSolutionIndex = 0;

            for(int i = 0; i < numbers.Length; i++)
            {
                var currentNumber = numbers[i];
                var solution = 1;
                var prevIndex = -1;

                for(int k = 0; k < i; k++)
                {
                    var prevNumber = numbers[k];
                    var prevSolution = solutions[k];

                    if(currentNumber > prevNumber && solution <= prevSolution)
                    {
                        solution = prevSolution + 1;
                        prevIndex = k;
                    }
                }
                solutions[i] = solution;
                prev[i] = prevIndex;

                if(solution > maxSolution)
                {
                    maxSolution = solution;
                    maxSolutionIndex = i;
                }
            }

            //Console.WriteLine(maxSolution);

            var index = maxSolutionIndex;

            var result = new List<int>();

            while(index != -1)
            {
                var currentNumber = numbers[index];
                result.Add(currentNumber);
                index = prev[index];
            }

            result.Reverse();

            Console.WriteLine(string.Join(" ", result));    
        }
    }
}
