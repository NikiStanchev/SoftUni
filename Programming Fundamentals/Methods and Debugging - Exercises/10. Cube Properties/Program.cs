using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _10.Cube_Properties
{
    class Program
    {
        static void Main(string[] args)
        {
            var side = double.Parse(Console.ReadLine());
            var parameter = Console.ReadLine();

            Console.WriteLine("{0:0.00}", GetValueOfCube(side, parameter));

        }

        public static double GetValueOfCube(double side, string parameter)
        {
            var result = 0d;
            var n = (side * side);

            switch (parameter)
            {
                case "face":
                    result = Math.Sqrt(n + n);
                    break;
                case "space":
                    result = Math.Sqrt(n + n + n);
                    break;
                case "volume":
                    result = side * side * side;
                    break;
                case "area":                  
                    result = n + n + n + n + n + n;
                    break;
                default:
                    break;
            }

            return result;
        }
    }
}
