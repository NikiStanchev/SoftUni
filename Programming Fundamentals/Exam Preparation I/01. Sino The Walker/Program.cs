using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace _01.Sino_The_Walker
{
    class Program
    {
        static void Main(string[] args)
        {
            var timeFormat = "HH:mm:ss";
            var startTime = DateTime.ParseExact(Console.ReadLine(), timeFormat, CultureInfo.InvariantCulture);

            var numberOfSteps = int.Parse(Console.ReadLine());

            var secondPerStep = int.Parse(Console.ReadLine());

            long initialSeconds = startTime.Hour * 60 * 60 + startTime.Minute * 60 + startTime.Second;

            ulong secondsToAdd = (ulong)numberOfSteps * (ulong)secondPerStep;

            ulong totalSeconds = (ulong)initialSeconds + secondsToAdd;

            var seconds = totalSeconds % 60;
            var totalMinutes = totalSeconds / 60;
            var minutes = totalMinutes % 60;
            var totalHours = totalMinutes / 60;
            var hours = totalHours % 24;

            Console.WriteLine($"Time Arrival: {hours:00}:{minutes:00}:{seconds:00}");
        }
    }
}
