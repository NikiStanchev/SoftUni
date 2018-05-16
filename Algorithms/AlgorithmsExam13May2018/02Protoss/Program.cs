using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _02Protoss
{
    class Program
    {
        //static HashSet<int>[] graph;
        static int[,] connections;
        //static bool[] marked;

        static char[,] graph;

        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            //graph = new HashSet<int>[n];
            connections = new int[n, n];
            //marked = new bool[n];

            graph = new char[n, n];

            //for(int i = 0; i < n; i++)
            //{
            //   graph[i] = new HashSet<int>();
            //}

            for(int i = 0; i < n; i++)
            {
                var line = Console.ReadLine();
                for(int j = 0; j < line.Length; j++)
                {
                    graph[i, j] = line[j];
                }
            }

            for(int i = 0; i < n; i++)
            {
                for(int j = 0; j < n; j++)
                {
                    for(int k = 1; k < n; k++)
                    {
                        if (graph[i, j] == 'Y' && graph[i, k] == 'Y' && j < k)
                        {
                            if(graph[j, k] == 'N')
                            {
                                graph[j, k] = 'P';
                            }
                            if(graph[k, j] == 'N')
                            {
                                graph[k, j] = 'P';
                            }
                            

                        }
                    }
                    
                }
            }

            int max = 0;
            int count = 0;

            for(int i = 0; i < n; i++)
            {
                for(int k = 0; k < n; k++)
                {
                    if(graph[i,k] != 'N')
                    {
                        count++;
                    }
                }
                if(count > max)
                {
                    max = count;                   
                }
                count = 0;
            }
            //BFS(graph, 0);

            Console.WriteLine(max);

        }

        //private static void BFS(HashSet<int>[] graph, int source)
        //{
        //    Queue<int> q = new Queue<int>();
        //
        //    q.Enqueue(source);
        //    marked[source] = true;
        //
        //    while (q.Count > 0)
        //    {
        //        int current = q.Dequeue();
        //        
        //        if(graph[current].Count > 0)
        //        {
        //            foreach(var child in graph[current])
        //            {
        //                connections[current]++;
        //            }
        //
        //        }
        //        foreach (var child in graph[current])
        //        {
        //            
        //            if (!marked[child])
        //            {
        //                q.Enqueue(child);
        //                marked[child] = true;
        //            }
        //        }
        //    }
        //}
    }
}
