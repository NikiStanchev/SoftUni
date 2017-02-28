using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _09.Longer_Line
{
    class Program
    {
        static void Main(string[] args)
        {
            var x1 = double.Parse(Console.ReadLine());
            var y1 = double.Parse(Console.ReadLine());
            var x2 = double.Parse(Console.ReadLine());
            var y2 = double.Parse(Console.ReadLine());
            var x3 = double.Parse(Console.ReadLine());
            var y3 = double.Parse(Console.ReadLine());
            var x4 = double.Parse(Console.ReadLine());
            var y4 = double.Parse(Console.ReadLine());

            var firstVektor = ReturnVektor(x1, y1, x2, y2);
            var secondVektor = ReturnVektor(x3, y3, x4, y4);

            if(firstVektor < secondVektor)
            {
                PrintPoints(x3,y3, x4, y4);
            }
            else
            {
                PrintPoints(x1, y1, x2, y2);
            }
        }



        public static double ReturnVektor(double x1, double y1, double x2, double y2)
        {
            var vektor = 0d;
            var x3 = x1;
            var y3 = y2;

            var sideTwo = 0d;
            var sideThree = 0d;

            if(x1 == x2 || y1 == y2)
            {
                vektor = GetSideLenght(x1, y1, x2, y2);
                return vektor;
            }

            sideTwo = GetSideLenght(x1, y1, x3, y3);
            sideThree = GetSideLenght(x2, y2, x3, y3);
            vektor = Math.Sqrt((sideTwo * sideTwo) + (sideThree * sideThree));
            return vektor;
        }

        public static double GetSideLenght(double x1, double y1, double x2, double y2)
        {
            var vektor = 0d;

            if (x1 == x2)
            {
                if (y1 > y2)
                {
                    vektor = y1 - y2;
                }
                else
                {
                    vektor = y2 - y1;
                }
            }

            if (y1 == y2)
            {
                if (x1 > x2)
                {
                    vektor = x1 - x2;
                }
                else
                {
                    vektor = x2 - x1;
                }
            }
            return vektor;
        }

        public static void PrintPoints(double x1, double y1, double x2, double y2)
        {
            var pointOne = new Tuple<double, double>(x1, y1);
            var pointTwo = new Tuple<double, double>(x2, y2);

            if (x1 < 0) { x1 = x1 * -1; };
            if (x2 < 0) { x2 = x2 * -1; };
            if (y1 < 0) { y1 = y1 * -1; };
            if (y2 < 0) { y2 = y2 * -1; };

            var pointOnePositiv = new Tuple<double, double>(x1, y1);
            var pointTwoPositiv = new Tuple<double, double>(x2, y2);

            if (pointOnePositiv.Item1 + pointOnePositiv.Item2 < pointTwoPositiv.Item1 + pointTwoPositiv.Item2)
            {
                Console.Write(pointOne);
                Console.Write(pointTwo);
                Console.WriteLine();
            }
            else
            {
                Console.Write(pointTwo);
                Console.Write(pointOne);
                Console.WriteLine();
            }
        }

    }
}
