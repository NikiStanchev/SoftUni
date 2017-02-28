using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Files
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, Dictionary<string, long>> filesByRoot = new Dictionary<string, Dictionary<string, long>>();
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                string[] routeParams = Console.ReadLine().Split('\\');

                string root = routeParams[0];
                string[] fileWithSize = routeParams[routeParams.Length - 1].Split(';');

                string fileNameWithExtension = fileWithSize[0];
                long fileSize = long.Parse(fileWithSize[1]);

                if (!filesByRoot.ContainsKey(root))
                {
                    filesByRoot.Add(root, new Dictionary<string, long>());
                }


                if (!filesByRoot[root].ContainsKey(fileNameWithExtension))
                {
                    filesByRoot[root].Add(fileNameWithExtension, fileSize);
                }
                else
                {
                    filesByRoot[root][fileNameWithExtension] = fileSize;
                }               
            }
            string[] queryParms = Console.ReadLine().Split(' ');

            string queryExtension = queryParms[0];
            string queryRoot = queryParms[2];

            if (filesByRoot.ContainsKey(queryRoot))
            {
                Dictionary<string, long> foundFiles = filesByRoot[queryRoot];


                foreach (var file in foundFiles.OrderByDescending(x => x.Value).ThenBy(x => x.Key))
                {
                    if (file.Key.EndsWith(queryExtension))
                    {
                        Console.WriteLine($"{file.Key} - {file.Value} KB");
                    }
                }
            }
            else
            {
                Console.WriteLine("No");
            }
        }
    }
}
