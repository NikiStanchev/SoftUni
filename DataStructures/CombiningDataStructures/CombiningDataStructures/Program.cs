using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static void Main(string[] args)
    {
        int commandsNumber = int.Parse(Console.ReadLine());
        ShoppingCenter center = new ShoppingCenter();
        //StringBuilder builder = new StringBuilder();

        for (int i = 0; i < commandsNumber; i++)
        {
            string line = Console.ReadLine();

            int firstSpace = line.IndexOf(" ");

            string command = line.Substring(0, firstSpace);

            string[] arguments = line.Substring(firstSpace + 1).Split(';');

            switch (command)
            {
                case "AddProduct":

                    string name = arguments[0];
                    double price = double.Parse(arguments[1]);
                    string producer = arguments[2];

                    Product p = new Product(name, price, producer);
                    center.Add(p);
                    //builder.AppendLine("Product added");
                    Console.WriteLine("Product added");
                    break;

                case "DeleteProducts":

                    if(arguments.Length == 1)
                    {
                       
                        int count = center.DeleteProductsByProducer(arguments[0]);
                        if(count == 0)
                        {
                            //builder.AppendLine("No products found");
                            Console.WriteLine("No products found");
                        }
                        else
                        {
                            //builder.AppendLine(count.ToString() + " products deleted");
                            Console.WriteLine(count.ToString() + " products deleted");
                        }
                        
                    }
                    else
                    {
                        int count = center.DeleteProductsByProducerAndName(arguments[0], arguments[1]);
                        if(count == 0)
                        {
                            //builder.AppendLine("No products found");
                            Console.WriteLine("No products found");
                        }
                        else
                        {
                            //builder.AppendLine(count.ToString() + " products deleted");
                            Console.WriteLine(count.ToString() + " products deleted");
                        }
                    }
                    break;

                case "FindProductsByName":
                    List<Product> resultByName = center.FindProductsByName(arguments[0]).ToList();
                    if(resultByName.Count != 0)
                    {
                        //resultByName.ForEach(x => builder.AppendLine(x.ToString()));
                        resultByName.ForEach(Console.WriteLine);
                    }
                    else
                    {
                        //builder.AppendLine("No products found");
                        Console.WriteLine("No products found");
                    }
                    break;
                case "FindProductsByProducer":
                    List<Product> resultByPRoducer = center.FindProductsByProducer(arguments[0]).ToList();
                    if (resultByPRoducer.Count != 0)
                    {
                        //resultByPRoducer.ForEach(x => builder.AppendLine(x.ToString()));
                        resultByPRoducer.ForEach(Console.WriteLine);
                    }
                    else
                    {
                        //builder.AppendLine("No products found");
                        Console.WriteLine("No products found");
                    }
                    break;
                case "FindProductsByPriceRange":
                    List<Product> resultByPrice = center.FindProductsByPriceRAnge(
                        double.Parse(arguments[0]),
                        double.Parse(arguments[1]))
                        .OrderBy(x => x).ToList();
                    if (resultByPrice.Count != 0)
                    {
                        //resultByPrice.ForEach(x => builder.AppendLine(x.ToString()));
                        resultByPrice.ForEach(Console.WriteLine);
                    }
                    else
                    {
                        //builder.AppendLine("No products found");
                        Console.WriteLine("No products found");
                    }
                    break;

            }
            
        }
        //Console.WriteLine(builder.ToString().Trim());

    }
}
