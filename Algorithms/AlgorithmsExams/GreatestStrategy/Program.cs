﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreatestStrategy
{
    class Program
    {
        static Dictionary<int, HashSet<int>> graph = new Dictionary<int, HashSet<int>>();
        static Dictionary<int, HashSet<int>> disconnectedGraph = new Dictionary<int, HashSet<int>>();

        static void Main(string[] args)
        {
            var arguments = Console.ReadLine().Split();
            var nodes = int.Parse(arguments[0]);
            var connections = int.Parse(arguments[1]);
            var root = int.Parse(arguments[2]);

            for(int i = 1; i <= nodes; i++)
            {
                graph[i] = new HashSet<int>();
                disconnectedGraph[i] = new HashSet<int>();
            }

            for(int i = 0; i < connections; i++)
            {
                args = Console.ReadLine().Split();
                var from = int.Parse(args[0]);
                var to = int.Parse(args[1]);

                graph[from].Add(to);
                graph[to].Add(from);

                disconnectedGraph[from].Add(to);
                disconnectedGraph[to].Add(from);

            }

            DFS(root, root, new HashSet<int>());

            var visited = new HashSet<int>();
            var max = 0;

            foreach(var node in disconnectedGraph.Keys)
            {
                if (!visited.Contains(node))
                {
                    var value = GetValue(node, visited);

                    if(value > max)
                    {
                        max = value;
                    }
                }
            }

            Console.WriteLine(max);

        }

        static int GetValue(int node, HashSet<int> visited)
        {
            visited.Add(node);
            var value = node;

            foreach(var child in disconnectedGraph[node])
            {
                if (!visited.Contains(child))
                {
                    value += GetValue(child, visited);
                }
            }

            return value;
        }


        static int DFS(int node, int parent, HashSet<int> visited)
        {
            visited.Add(node);

            var totalNodes = 1;

            foreach(var child in graph[node])
            {
                if (!visited.Contains(child) && child != parent)
                {
                    //visited.Add(child);
                    var subTreeNodes = DFS(child, node, visited);

                    if(subTreeNodes % 2 == 0)
                    {
                        disconnectedGraph[node].Remove(child);
                        disconnectedGraph[child].Remove(node);
                    }

                    totalNodes += subTreeNodes;
                }
            }

            return totalNodes;
        }
    }
}
