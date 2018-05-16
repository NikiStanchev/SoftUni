using System;
using System.Collections.Generic;

public class ArticulationPoints
{
    private static List<int>[] graph;
    private static bool[] visited;
    private static int[] depths;
    private static int[] lowPoint;
    private static int?[] parent;

    private static List<int> articulationPoints;


    public static List<int> FindArticulationPoints(List<int>[] targetGraph)
    {
        graph = targetGraph;
        visited = new bool[graph.Length];
        depths = new int[graph.Length];
        lowPoint = new int[graph.Length];
        parent = new int?[graph.Length];
        articulationPoints = new List<int>();

        for(int node = 0; node < graph.Length; node++)
        {
            if (!visited[node])
            {
                FindArticulationPoints(node, 1);
            }
        }

        return articulationPoints;
    }

    private static void FindArticulationPoints(int node, int depth)
    {
        visited[node] = true;
        depths[node] = depth;
        lowPoint[node] = depth;

        int childCount = 0;
        bool isArticulationPoint = false;

        foreach(var child in graph[node])
        {
            if (!visited[child])
            {
                parent[child] = node;
                FindArticulationPoints(child, depth + 1);
                childCount++;

                if(lowPoint[child] >= depths[node])
                {
                    isArticulationPoint = true;
                }

                lowPoint[node] = Math.Min(lowPoint[node], lowPoint[child]);
            }
            else if(child != parent[node])
            {
                lowPoint[node] = Math.Min(lowPoint[node], depths[child]);
            }
        }

        if((parent[node] == null && childCount > 1) 
            || (parent[node] != null && isArticulationPoint))
        {
            articulationPoints.Add(node);
        }
    }
}
