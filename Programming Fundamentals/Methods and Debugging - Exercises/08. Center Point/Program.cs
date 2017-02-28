using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _08.Center_Point
{
    class Program
    {
        static void Main(string[] args)
        {
            var x1 = double.Parse(Console.ReadLine());
            var y1 = double.Parse(Console.ReadLine());
            var x2 = double.Parse(Console.ReadLine());          
            var y2 = double.Parse(Console.ReadLine());

            var pointOne = new Tuple<double, double>(x1, y1);
            var pointTwo = new Tuple<double, double>(x2, y2);

            if (x1 < 0) { x1 = x1 * -1; };
            if (x2 < 0) { x2 = x2 * -1; };
            if (y1 < 0) { y1 = y1 * -1; };
            if (y2 < 0) { y2 = y2 * -1; };

            var pointOnePositiv = new Tuple<double, double>(x1, y1);
            var pointTwoPositiv = new Tuple<double, double>(x2, y2);

            if(pointOnePositiv.Item1 + pointOnePositiv.Item2 < pointTwoPositiv.Item1 + pointTwoPositiv.Item2)
            {
                Console.WriteLine(pointOne);
            }
            else
            {
                Console.WriteLine(pointTwo);
            }
        }
    }
}
