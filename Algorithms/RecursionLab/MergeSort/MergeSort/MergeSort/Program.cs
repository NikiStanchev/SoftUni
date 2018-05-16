using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MergeSort
{
    class Program
    {
        static void Sort(int[] arr, int startIndex, int endIndex)
        {
            if(startIndex >= endIndex) // array with 1 element
            {
                return;
            }

            int middleIndex = (startIndex + endIndex) / 2;

            Sort(arr, startIndex, middleIndex); // left portion of the array
            Sort(arr, middleIndex + 1, endIndex); // right portion of the array

            Merge(arr, startIndex, middleIndex, endIndex);
        }

        private static void Merge(int[] arr, int startIndex, int middleIndex, int endIndex)
        {
            // already sorted
            if(middleIndex < 0 
                || middleIndex + 1 >= arr.Length 
                || arr[middleIndex] <= arr[middleIndex + 1])
            {
                return;
            }

            int[] helpArr = new int[arr.Length];

            for(int i = startIndex; i <= endIndex; i++)
            {
                helpArr[i] = arr[i];
            }

            int leftIndex = startIndex;
            int rightIndex = middleIndex + 1;

            for(int i = startIndex; i <= endIndex; i++)
            {
                if(leftIndex > middleIndex)
                {
                    arr[i] = helpArr[rightIndex++];

                }
                else if(rightIndex > endIndex)
                {
                    arr[i] = helpArr[leftIndex++];
                }
                else if(helpArr[leftIndex] <= helpArr[rightIndex])
                {
                    arr[i] = helpArr[leftIndex++];
                }
                else
                {
                    arr[i] = helpArr[rightIndex++];
                }
            }
        }

        static void Main(string[] args)
        {
            var numbers = new[] { 5, 8, 3, 4, 2, 1, 9 };
            Sort(numbers, 0, numbers.Length - 1);
        }
    }
}
