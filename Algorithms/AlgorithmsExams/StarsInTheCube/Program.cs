using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StarsInTheCube
{
    class Program
    {
        static char[,,] matrix;
        static SortedDictionary<char, int> cubes = new SortedDictionary<char, int>();
        static int count;

        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            matrix = new char[n, n, n];
            count = 0;

            for(int i = 0; i < n; i++)
            {
                var line = Console.ReadLine().Split('|');

                for(int k = 0; k < n; k++)
                {
                    for(int j = 0; j < n; j++)
                    {
                        var secondLine = line[k].Trim().Split();
                        matrix[i, k, j] = Char.Parse(secondLine[j]);
                    }
                }
            }

            for(int x = 1; x < n - 1; x++)
            {
                for(int y = 1; y < n - 1; y++)
                {
                    for(int z =1; z < n - 1; z++)
                    {
                        if (!cubes.ContainsKey(matrix[x, y, z]))
                        {
                            cubes.Add(matrix[x, y, z], 0);
                        }

                        if(matrix[x, y, z] == matrix[x, y, z + 1] &&
                           matrix[x, y, z] == matrix[x, y, z - 1] &&
                           matrix[x, y, z] == matrix[x, y + 1, z] &&
                           matrix[x, y, z] == matrix[x, y - 1, z] &&
                           matrix[x, y, z] == matrix[x + 1, y, z] &&
                           matrix[x, y, z] == matrix[x - 1, y, z])
                        {
                            cubes[matrix[x, y, z]]++;
                            count++;
                        }
                    }
                }
            }

            Console.WriteLine(count);
            foreach(var el in cubes)
            {
                if(el.Value > 0)
                {
                    Console.WriteLine($"{el.Key} -> {el.Value}");
                }
            }
        }
    }
}
