namespace Kurskal
{
    using System;
    using System.Collections.Generic;

    public class KruskalAlgorithm
    {
        public static List<Edge> Kruskal(int numberOfVertices, List<Edge> edges)
        {
            var parent = new int[numberOfVertices];
            for(int i =0; i < numberOfVertices; i++)
            {
                parent[i] = i;
            }
            return new List<Edge>();
        }

        public static int FindRoot(int node, int[] parent)
        {
            int root = node;
            while (parent[root] != root)
            {
                root = parent[root];
            }

            return root;
        }
    }
}
