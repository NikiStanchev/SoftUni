using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConnectedComponents
{
    class Program
    {
        static List<int>[] graph;
        static bool[] visited;

        static void Dfs(int n)
        {
            if (!visited[n])
            {
                visited[n] = true;

                foreach(var child in graph[n])
                {
                    Dfs(child);
                }

                Console.Write($"{n} ");
            }
        }

        static void Bfs(int n)
        {
            if (visited[n])
            {
                return;
            }

            var queue = new Queue<int>();
            queue.Enqueue(n);
            visited[n] = true;

            while(queue.Count != 0)
            {
                var currentNode = queue.Dequeue();

                Console.Write($"{currentNode} ");

                foreach(var child in graph[currentNode])
                {
                    if (!visited[child])
                    {
                        queue.Enqueue(child);
                        visited[child] = true;
                    }
                }
            }
        }

        static void Main(string[] args)
        {
            graph = new List<int>[]
            {
                new List<int>{3, 6},           // 0
                new List<int>{2, 3, 4, 5, 6},  // 1
                new List<int>{1, 4, 5},        // 2
                new List<int>{0, 1, 5},        // 3
                new List<int>{1, 2, 6},        // 4
                new List<int>{1, 2, 3},        // 5
                new List<int>{0, 1, 4}         // 6
            };

            visited = new bool[graph.Length];

            for(int i = 0; i < graph.Length; i++)
            {
                if (!visited[i])
                {
                    Dfs(i);
                }
            }
        }
    }
}
