﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace BasicTreeDataStructures
{
    class Program
    {
        static Dictionary<int, Tree<int>> tree = new Dictionary<int, Tree<int>>();

        static void Main(string[] args)
        {
            int numberOfNodes = int.Parse(Console.ReadLine());

            for(int i = 0; i < numberOfNodes - 1; i++)
            {
                int[] nodes = Console.ReadLine().Split().Select(int.Parse).ToArray();

                int parent = nodes[0];
                int child = nodes[1];

                if (!tree.ContainsKey(parent))
                {
                    tree.Add(parent, new Tree<int>(parent));
                }

                if (!tree.ContainsKey(child))
                {
                    tree.Add(child, new Tree<int>(child));
                }

                Tree<int> parentNode = tree[parent];
                Tree<int> childNode = tree[child];
                parentNode.Children.Add(childNode);
                childNode.Parent = parentNode;
            }

            Tree<int> root = tree.FirstOrDefault(x => x.Value.Parent == null).Value;
            //root.Print();

            int sum = int.Parse(Console.ReadLine());

            List<Tree<int>> leaf = tree.Values.Where(x => x.Children.Count == 0).ToList();
            
        }

        static void DFS(Tree<int> node, int sum = 0, int targetSum)
        {

            if(sum == targetSum)
            {
                PrintPath(node);
            }

            foreach(var child in node.Children)
            {
                DFS(child, sum + node.Value, targetSum);
            }
        }
    }


    class Tree<T>
    {
        public T Value { get; set; }
        public List<Tree<T>> Children { get; set; }
        public Tree<T> Parent { get; set; }

        public Tree(T value, params Tree<T>[] children)
        {
            this.Value = value;
            this.Children = new List<Tree<T>>(children);
        }

        public void Print(int indent = 0)
        {
            Console.WriteLine($"{new string(' ', indent)}{this.Value}");
            foreach(var child in this.Children)
            {
                child.Print(indent + 2);
            }
        }
    }
}
