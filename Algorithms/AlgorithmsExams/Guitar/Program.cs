using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Guitar
{
    class Node
    {
        public int Value { get; set; }
        public int Prev { get; set; }
        public int Next { get; set; }
        //public List<int> Next { get; set; }
    }

    class Program
    {
        //static int[] lines;
        static int start;
        static int max;
        static List<Node> way = new List<Node>();

        static void Main(string[] args)
        {
            var lines = Console.ReadLine().Split(',').Select(int.Parse).ToList();
            start = int.Parse(Console.ReadLine());
            max = int.Parse(Console.ReadLine());

            var element = new Node();
            element.Prev = -1;
            element.Value = start;
            element.Next = -1;
            way.Add(element);


            while (lines.Count > 0)
            {
                var current = lines[0];
                lines.RemoveAt(0);

                

                var temp = new List<Node>(way.Where(x => x.Next == -1));


                foreach(var el in temp)
                {
                    if (el.Value + current <= max && el.Value + current >= 0)
                    {
                        var node = new Node();
                        node.Value = el.Value + current;
                        node.Prev = el.Value;
                        node.Next = -1;
                        el.Next = node.Value;
                        way.Add(node);
                    }
                    if (el.Value - current <= max && el.Value - current >= 0)
                    {
                        var node = new Node();
                        node.Value = el.Value - current;
                        node.Prev = el.Value;
                        node.Next = -1;
                        el.Next = node.Value;
                        way.Add(node);
                    }
                }
            }

            var result = way.Where(x => x.Next == -1).Max(x => x.Value);

            Console.WriteLine(result);

        }
    }
}
