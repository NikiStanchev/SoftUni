using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TourDeSofia2
{
    class Program
    {
        //static Dictionary<int, HashSet<int>> graph = new Dictionary<int, HashSet<int>>();
        static HashSet<int>[] graph;
        static int[] distTo;
        static bool[] marked;

        static void Main(string[] args)
        {
            var nodes = int.Parse(Console.ReadLine());
            var edges = int.Parse(Console.ReadLine());
            var start = int.Parse(Console.ReadLine());

            graph = new HashSet<int>[nodes];

            for(int i = 0; i < nodes; i++)
            {
                graph[i] = new HashSet<int>();
            }

            distTo = new int[nodes];
            marked = new bool[nodes];

            for (int i = 0; i < edges; i++)
            {
                var line = Console.ReadLine().Split();
                var from = int.Parse(line[0]);
                var to = int.Parse(line[1]);

                graph[from].Add(to);
            }

            BFS(graph, start);

            bool found = false;
            int min = int.MaxValue;

            for(int i = 0; i < graph.Length; i++)
            {
                if(marked[i] && graph[i].Contains(start) && distTo[i] < min)
                {
                    found = true;
                    min = distTo[i] + 1;
                }
            }

            if (found)
            {
                Console.WriteLine(min);
            }
            else
            {
                Console.WriteLine(marked.Where(x => x).Count());
            }
        }

        static void BFS(HashSet<int>[] graph, int start)
        {
            Queue<int> q = new Queue<int>();

            q.Enqueue(start);
            distTo[start] = 0;
            marked[start] = true;

            while(q.Count > 0)
            {
                int current = q.Dequeue();
                foreach(var child in graph[current])
                {
                    if (!marked[child])
                    {
                        q.Enqueue(child);
                        marked[child] = true;
                        distTo[child] = distTo[current] + 1;
                    }
                }
            }
        }
    }
}
