﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Rage_Quit
{
    class Program
    {
        static void Main(string[] args)
        {
            string pattern = @"(\D+)(\d+)";
            Regex regex = new Regex(pattern);

            string inputLine = Console.ReadLine().ToUpper();

            MatchCollection matches = regex.Matches(inputLine);
            StringBuilder outputResult = new StringBuilder();

            foreach(Match match in matches)
            {
                string message = match.Groups[1].Value;
                int repeat = int.Parse(match.Groups[2].Value);

                for (int i = 0; i < repeat; i++)
                {

                    outputResult.Append(message);
                }
            }
            Console.WriteLine($"Unique symbols used: {outputResult.ToString().Distinct().Count()}");
            Console.WriteLine(outputResult);
        }
    }
}
