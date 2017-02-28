using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Split_by_Word_Casing
{
    public class Program
    {
        public static void Main()
        {
            string delimStr = ",;:.!\'\"\\/[] ";
            char[] delimiter = delimStr.ToCharArray();

            //Learn programming at SoftUni: Java,PHP, JS, HTML 5, CSS, Web, C#, SQL, databases, AJAX, etc.

            var listOfWords = Console.ReadLine().Split(delimiter).ToList();
            var lowerCase = new List<string>();
            var mixedCase = new List<string>();
            var upperCase = new List<string>();
            listOfWords.RemoveAll(x => x == "");
            
            foreach(var word in listOfWords)
            {
                if(word == word.ToLower() && word.All(Char.IsLetter))
                {
                    lowerCase.Add(word);
                }
                else if(word == word.ToUpper() && word.All(Char.IsLetter))
                {
                    upperCase.Add(word);
                }
                else
                {
                    mixedCase.Add(word);
                }
            }
            Console.Write("Lower-case: ");
            printWords(lowerCase);
            Console.WriteLine();
            Console.Write("Mixed-case: ");
            printWords(mixedCase);
            Console.WriteLine();
            Console.Write("Upper-case: ");
            printWords(upperCase);
            Console.WriteLine();
        }

        public static void printWords(List<string> words)
        {
            var counter = 1;
            foreach(var wordToPrint in words)
            {
                if(counter < words.Count)
                {
                    Console.Write("{0}, ", wordToPrint);
                    counter++;
                }
                else
                {
                    Console.Write("{0}", wordToPrint);
                }
            }
        }
    }
}
