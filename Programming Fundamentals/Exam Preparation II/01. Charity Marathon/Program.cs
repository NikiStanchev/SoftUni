using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Charity_Marathon
{
    class Program
    {
        static void Main(string[] args)
        {
            var marathonDays = decimal.Parse(Console.ReadLine());
            var numberOfRunners = decimal.Parse(Console.ReadLine());
            var numberOfLaps = decimal.Parse(Console.ReadLine());
            var trackLength = decimal.Parse(Console.ReadLine());
            var trackCapacity = decimal.Parse(Console.ReadLine());
            var moneyPerKilometer = decimal.Parse(Console.ReadLine());

            var totalRunners = Math.Min(numberOfRunners, trackCapacity * marathonDays);
            var totalMeters = totalRunners * trackLength * numberOfLaps;
            var totalKilometers = totalMeters / 1000;

            var moreyRaised = totalKilometers * moneyPerKilometer;

            Console.WriteLine($"Money raised: {moreyRaised:F2}");


        }
    }
}
