using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Wintellect.PowerCollections;

public class Chainblock : IChainblock
{
    Dictionary<int, Transaction> byId = new Dictionary<int, Transaction>();
    List<Transaction> byInsertion = new List<Transaction>();
    Dictionary<TransactionStatus, Transaction> byStatus = new Dictionary<TransactionStatus, Transaction>();
    //Dictionary<string, Transaction> byReciver = new Dictionary<string, Transaction>();
    private int count = 0;

    //public int Count => this.byInsertion.Count();
    public int Count
    {
        get;
        set;
    }

    public void Add(Transaction tx)
    {
        if (this.Contains(tx))
        {
            return;
        }
        this.count++;
        this.byId.Add(tx.Id, tx);
        this.byInsertion.Add(tx);
        this.Count = count;
    }

    public void ChangeTransactionStatus(int id, TransactionStatus newStatus)
    {
        if (!this.byId.ContainsKey(id))
        {
            throw new ArgumentException();
        }

        this.byId[id].Status = newStatus;
    }

    public bool Contains(Transaction tx)
    {
        return this.byId.ContainsKey(tx.Id);
    }

    public bool Contains(int id)
    {
        return this.byId.ContainsKey(id);
    }

    public IEnumerable<Transaction> GetAllInAmountRange(double lo, double hi)
    {
        return this.byInsertion.Where(x => x.Amount <= hi && x.Amount >= lo);
    }

    public IEnumerable<Transaction> GetAllOrderedByAmountDescendingThenById()
    {
        return this.byInsertion.OrderByDescending(x=>x.Amount).ThenBy(x=>x.Id);
        //return this.byInsertion.OrderByDescending(x => x.Amount).OrderBy(x => x.Id);
    }

    public IEnumerable<string> GetAllReceiversWithTransactionStatus(TransactionStatus status)
    {
        var result = this.byInsertion.Where(x => x.Status == status).Select(x => x.To).ToList();
        if(result.Count == 0)
        {
            throw new InvalidOperationException();
        }
        return result;
    }

    public IEnumerable<string> GetAllSendersWithTransactionStatus(TransactionStatus status)
    {
        var result = this.byInsertion.Where(x => x.Status == status).Select(x => x.From).ToList();
        if (result.Count == 0)
        {
            throw new InvalidOperationException();
        }
        return result;


    }

    public Transaction GetById(int id)
    {
        if (!this.byId.ContainsKey(id))
        {
            throw new InvalidOperationException();
        }
        return this.byId[id];
    }

    public IEnumerable<Transaction> GetByReceiverAndAmountRange(string receiver, double lo, double hi)
    {
        var result = this.byInsertion.Where(x => x.To == receiver && x.Amount >= lo && x.Amount < hi).OrderByDescending(x => x.Amount).ThenBy(x => x.Id).ToList();

        if(result.Count == 0)
        {
            throw new InvalidOperationException();
        }

        return result;
    }

    public IEnumerable<Transaction> GetByReceiverOrderedByAmountThenById(string receiver)
    {
        var result = this.byInsertion.Where(x => x.To == receiver).OrderByDescending(x => x.Amount).ThenBy(x => x.Id).ToList();
        if (result.Count == 0)
        {
            throw new InvalidOperationException();
        }

        return result;
    }

    public IEnumerable<Transaction> GetBySenderAndMinimumAmountDescending(string sender, double amount)
    {
        var result = this.byInsertion.Where(x => x.From == sender && x.Amount > amount).OrderByDescending(x => x.Amount).ToList();
        if (result.Count == 0)
        {
            throw new InvalidOperationException();
        }

        return result;
    }

    public IEnumerable<Transaction> GetBySenderOrderedByAmountDescending(string sender)
    {
        var result = this.byInsertion.Where(x => x.From == sender).OrderByDescending(x => x.Amount).ToList();
        if (result.Count == 0)
        {
            throw new InvalidOperationException();
        }

        return result;
    }

    public IEnumerable<Transaction> GetByTransactionStatus(TransactionStatus status)
    {
        //if (!this.byStatus.ContainsKey(status))
        //{
        //
        //}
        var result = this.byInsertion.Where(x => x.Status == status).OrderByDescending(x => x.Amount).ToList();

        if(result.Count == 0)
        {
            throw new InvalidOperationException();
        }

        return result;
    }

    public IEnumerable<Transaction> GetByTransactionStatusAndMaximumAmount(TransactionStatus status, double amount)
    {
        var result = this.byInsertion.Where(x => x.Status == status && x.Amount <= amount).OrderByDescending(x => x.Amount).ToList();

        if (result.Count == 0)
        {
            return new List<Transaction>();
        }

        return result;
    }

    public IEnumerator<Transaction> GetEnumerator()
    {
        foreach (var i in this.byInsertion)
        {
            yield return i;
        }
    }

    public void RemoveTransactionById(int id)
    {
        var transaction = this.byId[id];
        this.byId.Remove(id);
        this.byInsertion.Remove(transaction);
        this.count--;
        this.Count = count;
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return (IEnumerator)GetEnumerator();
    }
}

