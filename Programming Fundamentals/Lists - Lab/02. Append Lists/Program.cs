using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Append_Lists
{
    public class Program
    {
        public static void Main()
        {
            var numbers = Console.ReadLine().Split('|').ToList();
            numbers.Reverse();
            
            foreach(var num in numbers)
            {
                foreach(var i in num)
                {
                    if(i != ' ')
                    {
                        Console.Write("{0} ", i);
                    }                 
                }
            }
        }
    }
}
