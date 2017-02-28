using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _15.Fast_Prime_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = int.Parse(Console.ReadLine());

            for (int i = 2; i <= number; i++){
                bool TowaLIE = true;

                for (int delio = 2; delio <= Math.Sqrt(i); delio++){

                    if (i % delio == 0){
                        TowaLIE = false;
                        break;
                    }
                }

                Console.WriteLine($"{i} -> {TowaLIE}");
            }
        }
    }
}
