using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _11.Convert_Speed_Units
{
    class Program
    {
        static void Main(string[] args)
        {
            double distanceInMeters = double.Parse(Console.ReadLine());
            double hours = double.Parse(Console.ReadLine());
            double minutes = double.Parse(Console.ReadLine());
            double seconds = double.Parse(Console.ReadLine());
            double distanceInKilometers = distanceInMeters / 1000;
            double distanceInMile = distanceInMeters / 1609;

            
            double timeInSeconds = ((3600 * hours) + (60 * minutes) + seconds);
            double timeInHours = (hours + (minutes / 60) + (seconds / 3600));
            
            
            

            double resultMS = distanceInMeters / timeInSeconds;
            double resultKH = distanceInKilometers / timeInHours;
            double resultMH = distanceInMile / timeInHours;


            int rounderMS = 6;
            if (resultMS >= 10 && resultMS < 100)
            {
                rounderMS = 5;
            }
            if(resultMS >= 100 && resultMS < 1000)
            {
                rounderMS = 4;
            }

            int rounderKH = 6;

            if (resultKH >= 10 && resultKH < 100)
            {
                rounderKH = 5;
            }
            if (resultKH >= 100 && resultKH < 1000)
            {
                rounderKH = 4;
            }

            int rounderMH = 6;
            if (resultMH >= 10 && resultMH < 100)
            {
                rounderMH = 5;
            }
            if (resultMH >= 100 && resultMH < 1000)
            {
                rounderMH = 4;
            }

            Console.WriteLine(Math.Round(resultMS, rounderMS));
            Console.WriteLine(Math.Round(resultKH, rounderKH));
            Console.WriteLine(Math.Round(resultMH, rounderMH));
        }
    }
}
