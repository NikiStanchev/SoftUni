using System;
using System.Collections.Generic;

public class TopologicalSorter
{
    private Dictionary<string, int> predecesorCount;
    private Dictionary<string, List<string>> graph;

    public TopologicalSorter(Dictionary<string, List<string>> graph)
    {
        this.graph = graph;
    }

    public ICollection<string> TopSort()
    {
        // TODO: Implement the topological sorting algorithm
        throw new NotImplementedException();
    }

    private void GetPredecessorCount(Dictionary<string, List<string>> graph)
    {
        predecesorCount = new Dictionary<string, int>();

        foreach(var node in graph)
        {
            if (!predecesorCount.ContainsKey(node.Key))
            {
                predecesorCount[node.Key] = 0;
            }

            foreach(var child in node.Value)
            {
                if (!predecesorCount.ContainsKey(child))
                {
                    predecesorCount[child] = 0;
                }

                predecesorCount[child]++;
            }
        }
    }
}
