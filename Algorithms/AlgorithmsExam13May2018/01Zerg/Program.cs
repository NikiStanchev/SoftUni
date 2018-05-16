using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01Zerg
{
    class Program
    {

        static string[] exit;
        static char[,] labyrinth;
        static int count = 0;
        static int rec = 0;

        static void Solve(int row, int col)
        {
            rec++;
            if (OutsideOfLabyrinth(row, col))
            {
                return;
            }


            if (IsExit(row, col))
            {
                PrintSolution();
            }
            else if (IsPassable(row, col))
            {
                labyrinth[row, col] = 'x';



                if(int.Parse(exit[0]) >= row)
                {
                    Solve(row + 1, col); // Down
                }
                if(int.Parse(exit[1]) >= col)
                {
                    Solve(row, col + 1); // Right
                }
                labyrinth[row, col] = ' ';
            }

        }

        private static bool IsPassable(int row, int col)
        {
            // already visited
            if (labyrinth[row, col] == 'x')
            {
                return false;
            }

            // wall
            if (labyrinth[row, col] == '*')
            {
                return false;
            }

            return true;
        }

        private static void PrintSolution()
        {
            count++;
        }

        private static bool IsExit(int row, int col)
        {
            return labyrinth[row, col] == 'e';
        }

        private static bool OutsideOfLabyrinth(int row, int col)
        {
            if (row < 0 || row >= labyrinth.GetLength(0))
            {
                return true;
            }

            if (col < 0 || col >= labyrinth.GetLength(1))
            {
                return true;
            }

            return false;
        }


        static void Main(string[] args)
        {
            var size = Console.ReadLine().Split();
            int n = int.Parse(size[0]);
            int m = int.Parse(size[1]);
            
            exit = Console.ReadLine().Split();
            
            int enemies = int.Parse(Console.ReadLine());

            //labyrinth = new char[n, m];   
            labyrinth = new char[int.Parse(exit[0]) + 1, int.Parse(exit[1]) + 1];

            labyrinth[int.Parse(exit[0]), int.Parse(exit[1])] = 'e';

            for (int i = 0; i < enemies; i++)
            {
                var en = Console.ReadLine().Split();
                if(!OutsideOfLabyrinth(int.Parse(en[0]), int.Parse(en[1])))
                {
                    labyrinth[int.Parse(en[0]), int.Parse(en[1])] = '*';
                }
                //labyrinth[int.Parse(en[0]), int.Parse(en[1])] = '*';
            
            }

            Solve(0, 0);
            Console.WriteLine(count);
            //Console.WriteLine(rec);
        }

 
    }
}
