using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05.Hands_of_Cards
{
    class Program
    {
        static void Main(string[] args)
        {
            bool isJoker = false;
            var input = Console.ReadLine().Split(new[] { ' ', ',' }, StringSplitOptions.RemoveEmptyEntries).ToList();
            var players = new Dictionary<string, int>();
            var type = new Dictionary<string, int>()
            {
                ["S"] = 4,
                ["H"] = 3,
                ["D"] = 2,
                ["C"] = 1
            };
            var power = new Dictionary<string, int>()
            {
                ["2"] = 2,
                ["3"] = 3,
                ["4"] = 4,
                ["5"] = 5,
                ["6"] = 6,
                ["7"] = 7,
                ["8"] = 8,
                ["9"] = 9,
                ["1"] = 10,
                ["J"] = 11,
                ["Q"] = 12,
                ["K"] = 13,
                ["A"] = 14
            };

            var tempResult = 0;

            for (int i = 1; i < input.Count; i++)
            {
                if (!players.ContainsKey(input[0]))
                {
                    players.Add(input[0], tempResult);
                }


                var typeValue = 0;
                var powerValue = 0;
                powerValue = power[input[i][0].ToString()];

                var index = 1;
                if(input[i].Length > 2) { index = 2; }
                typeValue = type[input[i][index].ToString()];

                tempResult += typeValue * powerValue;
                players[input[0]] = tempResult;
            }
            

            foreach(var i in players)
            {
                Console.WriteLine($"{i.Key} -> {i.Value}");
            }
        }
    }
}
