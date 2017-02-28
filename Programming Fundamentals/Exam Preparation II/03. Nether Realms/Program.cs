using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _03.Nether_Realms
{
    class Program
    {
        static void Main(string[] args)
        {
            var demons = Console.ReadLine()
                .Split(", ".ToCharArray(), StringSplitOptions.RemoveEmptyEntries)
                .Select(Demon.Parse)
                .OrderBy(d => d.Name)
                .ToArray();



            foreach(var demon in demons)
            {
                Console.WriteLine($"{demon.Name} - {demon.Health} health, {demon.Damage:F2} damage");
            }
        }
    }

    class Demon
    {
        public string Name { get; set; }
        public decimal Health { get; set; }
        public decimal Damage { get; set; }

        public static Demon Parse(string demonName)
        {
            var demon = new Demon();
            demon.Health = CalculateHealth(demonName);
            demon.Damage = CalculateDamage(demonName);
            demon.Name = demonName;

            return demon;
        }

        private static decimal CalculateDamage(string demonName)
        {
            var damageNumberPattern = @"[+-]?\d(?:\.?\d+)?";
            var damage = Regex.Matches(demonName, damageNumberPattern)
                .Cast<Match>()
                .Select(d => decimal.Parse(d.Value))
                .Sum();

            var modifiers = demonName
                .Where(m => m == '*' || m == '/')
                .ToArray();

            foreach(var modifier in modifiers)
            {
                switch (modifier)
                {
                    case '*':
                        damage *= 2;
                        break;
                    case '/':
                        damage /= 2;
                        break;
                }
            }

            return damage;
        }

        private static decimal CalculateHealth(string demonName )
        {
            var healthPattern = @"[^0-9+\-*\/\.]";

            var health = Regex.Matches(demonName, healthPattern)
                .Cast<Match>()
                .Select(h => (int)char.Parse(h.Value))
                .Sum();

            return health;
        }
    }
}
