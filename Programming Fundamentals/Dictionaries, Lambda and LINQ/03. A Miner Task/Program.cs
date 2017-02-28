using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _03.A_Miner_Task
{
    class Program
    {
        static void Main(string[] args)
        {       
            bool isStoped = false;
            var resources = new Dictionary<string, double>();

            while (isStoped == false)
            {
                var resource = Console.ReadLine();              
                if(resource == "stop")
                {
                    isStoped = true;
                    break;
                }
                var quantity = double.Parse(Console.ReadLine());

                if (resources.ContainsKey(resource))
                {
                    quantity += resources[resource];
                    resources.Remove(resource);
                }
                resources.Add(resource, quantity);
            }

            foreach(var i in resources)
            {
                Console.WriteLine($"{i.Key} -> {i.Value}");
            }
        }
    }
}
