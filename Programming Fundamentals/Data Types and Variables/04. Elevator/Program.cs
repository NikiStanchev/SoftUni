using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Elevator
{
    class Program
    {
        static void Main(string[] args)
        {
            int elevate = Int16.Parse(Console.ReadLine());
            int persons = Int16.Parse(Console.ReadLine());

            int courcourses = elevate / persons;
            if(elevate % persons != 0)
            {
                courcourses += 1;
            }

            Console.WriteLine(courcourses);
        }
    }
}
