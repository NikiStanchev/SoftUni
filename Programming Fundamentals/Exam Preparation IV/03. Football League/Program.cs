using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Football_League
{
    class Program
    {
        static void Main(string[] args)
        {
            string key = Console.ReadLine();

            key = Regex.Escape(key);
            Regex regex = new Regex($@"{key}(.*?){key}.+?{key}(.*?){key}.+?(\d+):(\d+)");

            var scores = new Dictionary<string, int>();
            var goals = new Dictionary<string, int>();

            while (true)
            {
                var line = Console.ReadLine();
                if(line == "final")
                {
                    break;
                }

                var match = regex.Match(line);

                var firstTeam = new string(match.Groups[1].Value.Reverse().ToArray()).ToUpper();
                var secondTeam = new string(match.Groups[2].Value.Reverse().ToArray()).ToUpper();
                var firstTeamGoals = int.Parse(match.Groups[3].Value);
                var secondTeamGoals = int.Parse(match.Groups[4].Value);


                if (!scores.ContainsKey(firstTeam))
                {
                    scores[firstTeam] = 0;
                }
                if (!scores.ContainsKey(secondTeam))
                {
                    scores[secondTeam] = 0;
                }
                if (!goals.ContainsKey(firstTeam))
                {
                    goals[firstTeam] = 0;
                }
                if (!goals.ContainsKey(secondTeam))
                {
                    goals[secondTeam] = 0;
                }

                goals[firstTeam] += firstTeamGoals;
                goals[secondTeam] += secondTeamGoals;

                if(firstTeamGoals > secondTeamGoals)
                {
                    scores[firstTeam] += 3;
                }
                else if (secondTeamGoals > firstTeamGoals)
                {
                    scores[secondTeam] += 3;
                }
                else
                {
                    scores[firstTeam] += 1;
                    scores[secondTeam] += 1;
                }
            }

            Console.WriteLine("League standings:");

            int place = 1;
            foreach(var kvp in scores.OrderByDescending(kvp => kvp.Value).ThenBy(kvp => kvp.Key))
            {
                Console.WriteLine($"{place}. {kvp.Key} {kvp.Value}");
                place++;
            }

            Console.WriteLine("Top 3 scored goals:");
            
            foreach(var kvp in goals.OrderByDescending(kvp => kvp.Value).ThenBy(kvp => kvp.Key).Take(3))
            {
                Console.WriteLine($"- {kvp.Key} -> {kvp.Value}");
            }
        }
    }
}
