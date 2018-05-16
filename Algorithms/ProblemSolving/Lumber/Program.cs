using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lumber
{
    class Program
    {
        static float area(int x1, int y1, int x2, int y2, int x3, int y3)
        {
            return (float)Math.Abs((x1 * (y2 - y3) +
                                    x2 * (y3 - y1) +
                                    x3 * (y1 - y2)) / 2.0);
        }


        // A function to check whether point P(x, y) 
        // lies inside the rectangle formed by A(x1, y1), 
        // B(x2, y2), C(x3, y3) and D(x4, y4) 
        static bool check(int x1, int y1, int x2,
                          int y2, int x3, int y3,
                       int x4, int y4, int x, int y)
        {

            // Calculate area of rectangle ABCD 
            float A = area(x1, y1, x2, y2, x3, y3) +
                      area(x1, y1, x4, y4, x3, y3);

            // Calculate area of triangle PAB 
            float A1 = area(x, y, x1, y1, x2, y2);

            // Calculate area of triangle PBC 
            float A2 = area(x, y, x2, y2, x3, y3);

            // Calculate area of triangle PCD 
            float A3 = area(x, y, x3, y3, x4, y4);

            // Calculate area of triangle PAD
            float A4 = area(x, y, x1, y1, x4, y4);

            // Check if sum of A1, A2, A3  
            // and A4is same as A 
            return (A == A1 + A2 + A3 + A4);
        }

        static void Main(string[] args)
        {

            var numbers = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
            var n = numbers[0];
            var m = numbers[1];


            var logs = new int[n, 4];
            var queries = new int[m, 2];

            // 0 - Ax, 1 - Ay, 2 - Bx, 3 - By
            for(int i = 0; i < n; i++)
            {
                var line = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                logs[i, 0] = line[0];
                logs[i, 1] = line[1];
                logs[i, 2] = line[2];
                logs[i, 3] = line[3];
            }

            for (int i = 0; i < m; i++)
            {
                var line = Console.ReadLine().Split(' ').Select(int.Parse).ToArray();
                queries[i, 0] = line[0];
                queries[i, 1] = line[1];
            }

            for(int i = 0; i < n; i++)
            {
                for(int k = 1 + i; k< n; k++)
                {
                    if(check(logs[i, 0], logs[i, 3], logs[i, 2], logs[i, 3], logs[i, 2], logs[i, 1], logs[i, 1], logs[i, 2], logs[k, 0], logs[i, 3]))
                    {
                        
                    }
                }
            }

        }
    }
}
