using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ZigzagMatrix
{
    class Program
    {
        private static int row;
        private static int col;

        private static int[,] matrix;

        private static int[,] maxPaths;
        private static int[,] previousRowIndex;

        static void Main(string[] args)
        {
            //row = 4;
            //col = 4;
            row = int.Parse(Console.ReadLine());
            col = int.Parse(Console.ReadLine());



            matrix = new int[row, col];
            maxPaths = new int[row, col];
            previousRowIndex = new int[row, col];


            for (int i = 0; i < row; i++)
            {
                var line = Console.ReadLine()
                    .Split(',')
                    .Select(int.Parse)
                    .ToArray();

                for (int j = 0; j < col; j++)
                {
                    matrix[i, j] = line[j];
                }
            }


            // Initialize first column
            for (int i = 0; i < row; i++)
            {
                maxPaths[i, 0] = matrix[i, 0];
            }


            // Fill max paths
            for (int c = 1; c < col; c++)
            {
                for (int r = 0; r < row; r++)
                {
                    int prevMax = 0;

                    if (c % 2 != 0)
                    {
                        for (int i = r + 1; i < row; i++)
                        {
                            if (maxPaths[i, c - 1] > prevMax)
                            {
                                prevMax = maxPaths[i, c - 1];
                                maxPaths[r, c] = prevMax + matrix[r, c];


                                previousRowIndex[r, c] = i;
                            }
                        }
                    }
                    else
                    {
                        for (int i = 0; i <= r - 1; i++)
                        {
                            if (maxPaths[i, c - 1] > prevMax)
                            {
                                prevMax = maxPaths[i, c - 1];
                                maxPaths[r, c] = prevMax + matrix[r, c];

                                previousRowIndex[r, c] = i;
                            }
                        }
                    }
                }
            }


            // Get last row index of path
            int currentRowIndex = -1;
            int globalMax = 0;

            for (int i = 0; i < maxPaths.GetLength(0); i++)
            {
                if (maxPaths[i, col - 1] > globalMax)
                {
                    globalMax = maxPaths[i, col - 1];
                    currentRowIndex = i;
                }
            }

            // Recover max path
            List<int> path = new List<int>();
            int colIndex = col - 1;


            int idx = maxPaths[currentRowIndex, colIndex];

            while (colIndex >= 0)
            {
                int nmb = matrix[currentRowIndex, colIndex];

                path.Add(nmb);

                currentRowIndex = previousRowIndex[currentRowIndex, colIndex];

                colIndex--;


            }
            path.Reverse();

            Console.Write($"{globalMax} = ");
            Console.WriteLine(string.Join(" + ", path));
        }
    }
}
