using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravellingPoliceman2
{
    class Street
    {
        public string Name { get; set; }
        public int Damage { get; set; }
        public int Pokemons { get; set; }
        public int Length { get; set; }
        public int Value { get; set; }
    }

    class Program
    {
        static int fuel;
        static List<Street> streets = new List<Street>();

        static void Main(string[] args)
        {
            fuel = int.Parse(Console.ReadLine());
            //var street = new Street();


            while (true)
            {
                var street = new Street();

                var line = Console.ReadLine();
                if(line == "End")
                {
                    break;
                }

                var info = line.Split(',');
                street.Name = info[0].Trim();
                street.Damage = int.Parse(info[1].Trim());
                street.Pokemons = int.Parse(info[2].Trim());
                street.Length = int.Parse(info[3].Trim());
                street.Value = 10 * street.Pokemons - street.Damage;

                streets.Add(street);

            }

            var res = Fill(streets.ToArray(), fuel);

        }


        public static List<Street> Fill(Street[] streets, int capacity)
        {
            int[,] maxValues = new int[streets.Length + 1, capacity + 1];
            bool[,] itemIncluded = new bool[streets.Length + 1, capacity + 1];

            // Calculate max values
            for(int i = 0; i < streets.Length; i++)
            {
                for(int currCap = 1; currCap <= capacity; currCap++)
                {
                    if(streets[i].Length > currCap) { continue; }
                    int valueIncluded = streets[i].Value + maxValues[i, currCap - streets[i].Length];

                    if(valueIncluded > maxValues[i, currCap])
                    {
                        maxValues[i + 1, currCap] = valueIncluded;
                        itemIncluded[i + 1, currCap] = true;
                    }
                    else
                    {
                        maxValues[i + 1, currCap] = maxValues[i, currCap];
                    }

                }
            }



            // Return the item in the knapsack
            List<Street> takenItems = new List<Street>();
            
            for(int i = streets.Length; i > 0; i--)
            {
                if(!itemIncluded[i, capacity]) { continue; }

                Street street = streets[i - 1];
                takenItems.Add(street);

                capacity -= street.Length;
            }

            return takenItems;
        }
    }
}
