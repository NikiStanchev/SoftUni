using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _04.Roli_The_Coder
{
    class Program
    {
        static void Main(string[] args)
        {
            var line = Console.ReadLine();

            var events = new Dictionary<int, Event>();

            const string eventPattern = @"(?<id>\d+)\s+#(?<eventName>[\w\d]+)(\s+(?:@\w+\s*)+)?";
            while(line != "Time for Code")
            {
                var eventDetails = Regex.Match(line, eventPattern);

                if (eventDetails.Success)
                {
                    var id = int.Parse(eventDetails.Groups["id"].Value);
                    var eventName = eventDetails.Groups["eventName"].Value;

                    var participants = new string[0];

                    var eventHavePartisipants = line.Contains("@");

                    if (eventHavePartisipants)
                    {
                        participants = line.Substring(line.IndexOf('@')).Split().Where(a => a != "").ToArray();
                    }



                    if (!events.ContainsKey(id))
                    {
                        events[id] = new Event
                        {
                            Name = eventName,
                            Participants = new List<string>(new string[0])
                        };
                    }

                    if(events[id].Name == eventName)
                    {
                        events[id].Participants.AddRange(participants);
                        events[id].Participants = events[id].Participants
                            .Distinct()
                            .ToList();
                    }
                }

                line = Console.ReadLine();
            }
            var sortetEvents = events
                .OrderByDescending(a => a.Value.Participants.Count)
                .ThenBy(a => a.Value.Name)
                .ToArray();

            foreach(var @event in sortetEvents)
            {
                var eventName = @event.Value.Name;
                var participantsCount = @event.Value.Participants.Count();
                Console.WriteLine($"{eventName} - {participantsCount}");

                var sortetParticipant = @event.Value.Participants.OrderBy(a => a);
                foreach(var participant in sortetParticipant)
                {
                    Console.WriteLine(participant);
                }
                
            }
        }
    }

    public class Event
    {
        public string Name { get; set; }
        public List<string> Participants { get; set; }
    }
}
