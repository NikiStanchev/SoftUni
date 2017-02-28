using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace _09.Holidays_Between_Two_Dates
{
    public class Program
    {
        public static void Main()
        {
            DateTime startDate = DateTime.ParseExact(Console.ReadLine(), "dd.M.yyyy", CultureInfo.InvariantCulture);
            DateTime endDate = DateTime.ParseExact(Console.ReadLine(), "dd.M.yyyy", CultureInfo.InvariantCulture);
            int holidaysCount = 0;
            for (var date = startDate; date <= endDate; date = date.AddDays(1))
            {
                if (date.DayOfWeek == DayOfWeek.Saturday || date.DayOfWeek == DayOfWeek.Sunday)
                {
                    holidaysCount++;
                }
            }   
            Console.WriteLine(holidaysCount);
        }
    }
}
