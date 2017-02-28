using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Ladybugs
{
    class Program
    {
        static void Main(string[] args)
        {
            var fieldSize = int.Parse(Console.ReadLine());
            var ladybugIndexes = Console.ReadLine().Split().Select(int.Parse).Where(l => l >= 0 && l < fieldSize).ToArray();

            var ladybugs = new int[fieldSize];

            for (int i = 0; i < ladybugIndexes.Length; i++)
            {
                var currentIndex = ladybugIndexes[i];
                ladybugs[currentIndex] = 1;
            }

            var line = Console.ReadLine();
            while(line != "end")
            {
                var tockens = line.Split();

                var ladybugIndex = int.Parse(tockens[0]);
                var direction = tockens[1];
                var flyLength = int.Parse(tockens[2]);

                if(ladybugIndex < 0 || ladybugIndex >= ladybugs.Length)
                {
                    line = Console.ReadLine();
                    continue;
                }

                if(ladybugs[ladybugIndex] == 0)
                {
                    line = Console.ReadLine();
                    continue;
                }

                MoveLadybug(ladybugs, ladybugIndex, flyLength, direction);
                line = Console.ReadLine();
            }
            Console.WriteLine(string.Join(" ", ladybugs));
        }

        private static void MoveLadybug(int[] ladybugs, int ladybugIndex, int flyLength, string direction)
        {
            ladybugs[ladybugIndex] = 0;

            var leftArrayOrFoundPlace = false;
            while (!leftArrayOrFoundPlace)
            {
                switch (direction)
                {
                    case "left":
                        ladybugIndex -= flyLength;
                        break;
                    case "right":
                        ladybugIndex += flyLength;
                        break;
                }

                if (ladybugIndex < 0 || ladybugIndex >= ladybugs.Length)
                {
                    leftArrayOrFoundPlace = true;
                    continue;
                }

                if(ladybugs[ladybugIndex] == 1)
                {
                    continue;
                }

                if (ladybugs[ladybugIndex] == 0)
                {
                    ladybugs[ladybugIndex] = 1;
                    leftArrayOrFoundPlace = true;
                    continue;
                }
            }
        }
    }
}
