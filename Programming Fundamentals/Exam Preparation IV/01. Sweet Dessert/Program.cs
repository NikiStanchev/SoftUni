﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01.Sweet_Dessert
{
    class Program
    {
        static void Main(string[] args)
        {
            var money = decimal.Parse(Console.ReadLine());
            var guests = int.Parse(Console.ReadLine());
            var bananaPrice = decimal.Parse(Console.ReadLine());
            var eggPrice = decimal.Parse(Console.ReadLine());
            var berryPrice = decimal.Parse(Console.ReadLine());

            var portions = guests / 6;
            if(guests % 6 != 0)
            {
                portions++;
            }

            var pricePerPortion = 2 * bananaPrice + 4 * eggPrice + 0.2m * berryPrice;
            var totalPrice = pricePerPortion * portions;

            var moneyLeft = money - totalPrice;

            if(moneyLeft >= 0)
            {
                Console.WriteLine($"Ivancho has enough money - it would cost {totalPrice:F2}lv.");
            }
            else
            {
                Console.WriteLine($"Ivancho will have to withdraw money - he will need {Math.Abs(moneyLeft):F2}lv more.");
            }
        }
    }
}
