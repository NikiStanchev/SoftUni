using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02.Command_Interpreter
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine()
                .Trim()
                .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToList();

            var inputLine = Console.ReadLine();

            while(inputLine != "end")
            {
                string[] commandParams = inputLine
                .Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);

                string command = commandParams[0];

                switch (command)
                {
                    case "reverse":
                        int start = int.Parse(commandParams[2]);
                        int count = int.Parse(commandParams[4]);

                        if(IsValid(array, start, count))
                        {
                            Reverse(array, start, count);

                        }

                        break;
                    case "sort":
                        break;
                    case "rollLeft":
                        break;
                    case "rollRight":
                        break;
                }

                inputLine = Console.ReadLine();
            }
        }

        private static void Reverse(List<string> array, int start, int count)
        {

            array.Reverse(start, count);
            /*List<string> resultArray = array.Skip(start)
                .Take(count)
                .Reverse()
                .ToList();

            for (int i = start; i <= start + count ; i++)
            {
                array[i] = resultArray[i];
            }*/
        }

        private static bool IsValid(List<string> array, int start, int count)
        {
            if(start >=0  && start < array.Count && count >= 0 && (start + count) < array.Count)
            {
                return true;
            }
            return false;
        }
    }
}
