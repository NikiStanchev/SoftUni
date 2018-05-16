namespace SumOfCoins
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class SumOfCoins
    {
        public static void Main(string[] args)
        {
            var availableCoins = new[] { 1, 2, 5, 10, 20, 50 };
            var targetSum = 923;

            var selectedCoins = ChooseCoins(availableCoins, targetSum);

            Console.WriteLine($"Number of coins to take: {selectedCoins.Values.Sum()}");
            foreach (var selectedCoin in selectedCoins)
            {
                Console.WriteLine($"{selectedCoin.Value} coin(s) with value {selectedCoin.Key}");
            }
        }

        public static Dictionary<int, int> ChooseCoins(IList<int> coins, int targetSum)
        {
            var result = new Dictionary<int, int>();

            coins = coins.OrderByDescending(c => c).ToList();

            var coinIndex = 0;
            var currentSum = 0;

            while(coinIndex < coins.Count && currentSum != targetSum)
            {
                var currentCoinValue = coins[coinIndex];

                if(currentSum + currentCoinValue > targetSum)
                {
                    coinIndex++;
                    continue;
                }

                var remainingSum = targetSum - currentSum;

                var cointToTake = remainingSum / currentCoinValue;

                if(cointToTake > 0)
                {
                    result[currentCoinValue] = cointToTake;
                    currentSum += cointToTake * currentCoinValue;
                }
            }

            if(currentSum != targetSum)
            {
                throw new InvalidOperationException();
            }

            return result;
        }
    }
}