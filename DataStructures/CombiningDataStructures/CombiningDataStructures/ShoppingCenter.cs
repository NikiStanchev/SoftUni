using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wintellect.PowerCollections;

class ShoppingCenter
{

    Dictionary<string, Bag<Product>> byProducer;
    Dictionary<string, Bag<Product>> byName;
    OrderedBag<Product> byPrice;

    //private OrderedBag<Product> byPrice = 
    //    new OrderedBag<Product>((x, y)=> x.Price.CompareTo(y.Price));

    public ShoppingCenter()
    {
        this.byProducer = new Dictionary<string, Bag<Product>>();
        this.byName = new Dictionary<string, Bag<Product>>();
        this.byPrice = new OrderedBag< Product>((x, y) => x.Price.CompareTo(y.Price));
    }

    public void Add(Product product)
    {
        if (!this.byProducer.ContainsKey(product.Producer))
        {
            this.byProducer[product.Producer] = new Bag<Product>();
        }
        this.byProducer[product.Producer].Add(product);

        if (!this.byName.ContainsKey(product.Name))
        {
            this.byName[product.Name] = new Bag<Product>();
        }
        this.byName[product.Name].Add(product);

        this.byPrice.Add(product);
    }

    public int DeleteProductsByProducer(string producer)
    {
        if (!this.byProducer.ContainsKey(producer))
        {
            return 0;
        }
        IEnumerable<Product> productsToRemove = this.byProducer[producer];
        int count = 0;

        foreach(Product p in productsToRemove)
        {
            string name = p.Name;
            double price = p.Price;

            this.byName[name].Remove(p);
            this.byPrice.Remove(p);
            count++;
        }

        this.byProducer.Remove(producer);
        return count;

    }

    public int DeleteProductsByProducerAndName(string productName, string producer)
    {
        if (!this.byProducer.ContainsKey(producer))
        {
            return 0;
        }

        IEnumerable<Product> productsToRemove = this.byProducer[producer]
            .Where(x => x.Name == productName)
            .ToList();
        int count = 0;

        foreach (Product p in productsToRemove)
        {
            string name = p.Name;
            this.byName[name].Remove(p);
            this.byPrice.Remove(p);
            this.byProducer[producer].Remove(p);
            count++;
        }
        return count;
    }

    public IEnumerable<Product> FindProductsByName(string name)
    {
        if (!this.byName.ContainsKey(name))
        {
            return Enumerable.Empty<Product>();
        }
        return this.byName[name].OrderBy(x => x);
    }

    public IEnumerable<Product> FindProductsByProducer(string producer)
    {
        if (!this.byProducer.ContainsKey(producer))
        {
            return Enumerable.Empty<Product>();
        }
        return this.byProducer[producer].OrderBy(x => x);
    }

    public IEnumerable<Product> FindProductsByPriceRAnge(double low, double high)
    {
        return this.byPrice
            .Range(new Product("", low,""), true, new Product("", high, ""), true)
            .OrderBy(x => x);
    }
}
