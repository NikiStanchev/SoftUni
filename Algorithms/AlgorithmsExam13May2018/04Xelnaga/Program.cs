using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04Xelnaga
{
    class Program
    {
        static SortedDictionary<int, int> space = new SortedDictionary<int, int>();
        static long result = 0;

        static void Main(string[] args)
        {

            // 2 2 44 2 2 2 444 2 2 -1
            // 1 1 2 2 -1

            var line = Console.ReadLine().Split();

            for(int i = 0; i < line.Length - 1; i++)
            {
                int ship = int.Parse(line[i]);
                if (!space.ContainsKey(ship))
                {
                    space.Add(ship, 0);
                }
                space[ship]++;
            }

            foreach(var ship in space)
            {
                //if(ship.Value % 2 == 0)
                //{
                //    result += ship.Value;
                //}
                //else
                //{
                //    result += ship.Value + ship.Key;
                //}
                if(ship.Key == 0)
                {
                    result += ship.Value;
                }
                if(ship.Key == 1)
                {
                    if(ship.Value % 2 == 0)
                    {
                        result += ship.Value;
                    }
                    else
                    {
                        result += ship.Value + 1;
                    }
                    
                }
                if(ship.Key > 1)
                {
                    int mul = ship.Value / (ship.Key + 1);
                    result += mul * (ship.Key + 1);
                    result += ship.Key + 1;
                    
                }               
            }

            Console.WriteLine(result);

        }
    }
}
