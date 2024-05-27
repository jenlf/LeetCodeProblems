public class RecentCounter {

    public List<int> Requests {get; set;}

    public RecentCounter() {
        Requests = new List<int>();
    }
    
    public int Ping(int t) {
        int bottomRange = 0;
        int topRange = 0;

        Requests.Add(t);
        bottomRange = t-3000;
        topRange = t;
        int[] reqArray = Requests.ToArray();
        
        foreach(int req in reqArray)
        {
            if(req < bottomRange)
            {
                Requests.Remove(req);
            }
        }

        return Requests.Count;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.Ping(t);
 */