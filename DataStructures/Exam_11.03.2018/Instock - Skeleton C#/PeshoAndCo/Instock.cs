using System;
using System.Collections;
using System.Collections.Generic;
using Wintellect.PowerCollections;
using System.Linq;

public class Instock : IProductStock
{

    Dictionary<string, Product> byLabel = new Dictionary<string, Product>();

    //Dictionary<string, List<LinkedListNode<Product>>> byLabel = new Dictionary<string, List<LinkedListNode<Product>>>();

    //Dictionary<double, Bag<Product>> byPrice = new Dictionary<double, Bag<Product>>();

    OrderedBag<Product> byQuantity = new OrderedBag<Product>();

    List<Product> byInsertion = new List<Product>();


    public int Count => this.byLabel.Count();


    public void Add(Product product)
    {
        if (this.Contains(product))
        {
            return;
        }

        this.byLabel.Add(product.Label, product);
        this.byInsertion.Add(product);
        this.Add(product);
    }

    public void ChangeQuantity(string product, int quantity)
    {
        if (!this.byLabel.ContainsKey(product))
        {
            throw new ArgumentException();
        }
    
        this.byLabel[product].Quantity = quantity;
    }

    public bool Contains(Product product)
    {
        return this.byLabel.ContainsKey(product.Label);
    }

    public Product Find(int index)
    {
        if(this.Count <= index || index < 0)
        {
            throw new IndexOutOfRangeException();
        }
        return this.byInsertion[index];
    }

    public IEnumerable<Product> FindAllByPrice(double price)
    {
        return this.byInsertion.Where(x => x.Price == price);
    }

    public IEnumerable<Product> FindAllByQuantity(int quantity)
    {
        return this.byInsertion.Where(x => x.Quantity == quantity);
        //return this.byQuantity.Where(x => x.Quantity == quantity);
    }

    public IEnumerable<Product> FindAllInRange(double lo, double hi)
    {
        return this.byInsertion.Where(x => x.Price > lo && x.Price <= hi).OrderByDescending(x => x.Price);
    }

    public Product FindByLabel(string label)
    {
        if (!this.byLabel.ContainsKey(label))
        {
            throw new ArgumentException();
        }

        return this.byLabel[label];
    }

    public IEnumerable<Product> FindFirstByAlphabeticalOrder(int count)
    {
        if(this.Count < count || count < 0)
        {
            //return null;
            //return new List<Product>();
            //return Enumerable.Empty<Product>();
            throw new ArgumentException();
        }
        return this.byInsertion.OrderBy(x => x).Take(count);
    }

    public IEnumerable<Product> FindFirstMostExpensiveProducts(int count)
    {
        if(this.Count < count)
        {
            throw new ArgumentException();
        }

        return this.byInsertion.OrderByDescending(x => x.Price).Take(count);
    }

    public IEnumerator<Product> GetEnumerator()
    {
        //throw new NotImplementedException();

        foreach(var i in this.byInsertion)
        {
            yield return i;
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return (IEnumerator)GetEnumerator();
    }
}
