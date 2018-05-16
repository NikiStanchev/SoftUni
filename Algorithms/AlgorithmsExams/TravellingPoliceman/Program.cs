using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravellingPoliceman
{
    

    class Street
    {
        public string Name { get; set; }
        public int Length { get; set; }
        public int Pokemons { get; set; }
        public int Damage { get; set; }
        public int Value { get; set; }

    }

    class Program
    {
        static List<Street> streets = new List<Street>();
        static StringBuilder build = new StringBuilder();

        static void Main(string[] args)
        {

            var fuel = int.Parse(Console.ReadLine());

            while(true)
            {
                var line = Console.ReadLine();

                if(line == "End")
                {
                    break;
                }
                var newline = line.Split(',').ToArray();
                var street = new Street();
                street.Name = newline[0].Trim();
                street.Damage = int.Parse(newline[1].Trim());
                street.Pokemons = int.Parse(newline[2].Trim());
                street.Length = int.Parse(newline[3].Trim());
                street.Value = street.Pokemons * 10 - street.Damage;

                streets.Add(street);
            }

            List<Street> total = new List<Street>();
            total = Fill(streets.ToArray(), fuel);

            total.Reverse();

            foreach(var item in total)
            {
                build.Append($"{item.Name.Trim()} -> ");
            }

            if(build.ToString() != "")
            {
                build.Remove(build.Length - 3, 3);
                build.AppendLine();
            }

            int count = 0;
            int damage = 0;
            int left = fuel;

            foreach(var street in total)
            {
                count += street.Pokemons;
                damage += street.Damage;
                left = left - street.Length;
            }


            build.Append($"Total pokemons caught -> {count}");
            build.AppendLine();
            build.Append($"Total car damage -> {damage}");
            build.AppendLine();
            build.Append($"Fuel Left -> {left}");
            
            Console.WriteLine(build.ToString());
        }

        private static List<Street> Fill(Street[] streets, int fuel)
        {
            int[,] values = new int[streets.Length + 1, fuel + 1];
            bool[,] isItemIncluded = new bool[streets.Length + 1, fuel + 1];
            List<Street> itemsTaken = new List<Street>();

            for(int itemIndex = 0; itemIndex < streets.Length; itemIndex++)
            {
                int row = itemIndex + 1;
                Street street = streets[itemIndex];

                for(int c = 1; c <= fuel; c++)
                {
                    int excludedValue = values[row - 1, c];
                    int includedValue = 0;

                    if(street.Length <= c)
                    {
                        includedValue = street.Value + values[row - 1, c - street.Length];
                    }

                    if(includedValue > excludedValue)
                    {
                        values[row, c] = includedValue;
                        isItemIncluded[row, c] = true;
                    }
                    else
                    {
                        values[row, c] = excludedValue;
                    }
                }
            }
            int tempCap = fuel;

            for(int i = streets.Length; i > 0; i--)
            {
                if(!isItemIncluded[i, tempCap])
                {
                    continue;
                }

                Street street = streets[i - 1];
                itemsTaken.Add(street);

                tempCap = tempCap - street.Length;
            }

            return itemsTaken;
        }
    }
}
