using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace _01.Softuni_Coffee_Orders
{
    class Program
    {
        static void Main(string[] args)
        {
            Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture("en-GB");

            decimal n = decimal.Parse(Console.ReadLine());
            decimal totalPrice = 0M;

            var prices = new List<decimal>();
            for (int i = 0; i < n; i++)
            {
                decimal pricePerCapsule = decimal.Parse(Console.ReadLine(), CultureInfo.InvariantCulture);
                DateTime orderDate = DateTime.ParseExact(Console.ReadLine(), "d/MM/yyyy", CultureInfo.InvariantCulture);
                decimal capsuleCount = decimal.Parse(Console.ReadLine());

                decimal daysInMonth = DateTime.DaysInMonth(orderDate.Year, orderDate.Month);

                decimal currentPrice = ((daysInMonth * capsuleCount) * pricePerCapsule);
                totalPrice += currentPrice;
                prices.Add(currentPrice);               
            }
            foreach(var price in prices)
            {
                Console.WriteLine($"The price for the coffee is: ${price:F2}");
            }            
            Console.WriteLine($"Total: ${totalPrice:F2}");
        }
    }
}
