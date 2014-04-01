function timeDiff (start, end) {
    var diff = Math.round(start.getTime()) - Math.round(end.getTime());

    return daysApart(diff);
}
function daysApart(t){
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd);
    return d;
}

var entries = [
    //2013 data
    {date: new Date("2014/09/07"), value: 2},
    {date: new Date("2014/09/08"), value: 3},
    {date: new Date("2014/09/09"), value: 1},
    {date: new Date("2014/09/10"), value: 3},
    {date: new Date("2014/09/11"), value: 3},
    {date: new Date("2014/09/12"), value: 4},
    {date: new Date("2014/09/13"), value: 4},
    {date: new Date("2014/09/14"), value: 4},
    {date: new Date("2014/09/15"), value: 4},
    {date: new Date("2014/09/16"), value: 4},
    {date: new Date("2014/09/17"), value: 4},
    {date: new Date("2014/09/18"), value: 4},
    {date: new Date("2014/09/19"), value: 3},
    {date: new Date("2014/09/20"), value: 4},
    {date: new Date("2014/09/21"), value: 4},
    {date: new Date("2014/09/22"), value: 3},
    {date: new Date("2014/09/23"), value: 4},
    {date: new Date("2014/09/25"), value: 4},
    {date: new Date("2014/09/26"), value: 4},
    {date: new Date("2014/09/27"), value: 3},
    {date: new Date("2014/09/28"), value: 4},
    {date: new Date("2014/09/29"), value: 4},
    {date: new Date("2014/09/30"), value: 3},
    {date: new Date("2014/09/30"), value: 4},
    {date: new Date("2014/10/01"), value: 4},
    {date: new Date("2014/10/02"), value: 3},
    {date: new Date("2014/10/03"), value: 4},
    {date: new Date("2014/10/04"), value: 4},
    {date: new Date("2014/10/05"), value: 4},
    {date: new Date("2014/10/06"), value: 4},
    {date: new Date("2014/10/07"), value: 4},
    {date: new Date("2014/10/08"), value: 3},
    {date: new Date("2014/10/09"), value: 4},
    {date: new Date("2014/10/10"), value: 3},
    {date: new Date("2014/10/11"), value: 3},
    {date: new Date("2014/10/12"), value: 2},
    {date: new Date("2014/10/13"), value: 4},
    {date: new Date("2014/10/14"), value: 3},
    {date: new Date("2014/10/15"), value: 4},
    {date: new Date("2014/10/16"), value: 4},
    {date: new Date("2014/10/17"), value: 3},
    {date: new Date("2014/10/18"), value: 4},
    {date: new Date("2014/10/19"), value: 4},
    {date: new Date("2014/10/20"), value: 4},
    {date: new Date("2014/10/21"), value: 4},
    {date: new Date("2014/10/22"), value: 4},
    {date: new Date("2014/10/23"), value: 3},
    {date: new Date("2014/10/24"), value: 4},
    {date: new Date("2014/10/25"), value: 4},
    {date: new Date("2014/10/26"), value: 4},
    {date: new Date("2014/10/27"), value: 4},
    {date: new Date("2014/10/28"), value: 4},
    {date: new Date("2014/10/29"), value: 4},
    {date: new Date("2014/10/30"), value: 4},
    {date: new Date("2014/10/31"), value: 3},
    {date: new Date("2014/11/01"), value: 4},
    {date: new Date("2014/11/02"), value: 3},
    {date: new Date("2014/11/03"), value: 3},
    {date: new Date("2014/11/04"), value: 4},
    {date: new Date("2014/11/05"), value: 4},
    {date: new Date("2014/11/06"), value: 3},
    {date: new Date("2014/11/07"), value: 3},
    {date: new Date("2014/11/08"), value: 4},
    {date: new Date("2014/11/09"), value: 4},
    {date: new Date("2014/11/10"), value: 4},
    {date: new Date("2014/11/11"), value: 4},
    {date: new Date("2014/11/12"), value: 4},
    {date: new Date("2014/11/13"), value: 4},
    {date: new Date("2014/11/14"), value: 4},
    {date: new Date("2014/11/15"), value: 3},
    {date: new Date("2014/11/16"), value: 4},
    {date: new Date("2014/11/17"), value: 4},
    {date: new Date("2014/11/18"), value: 4},
    {date: new Date("2014/11/19"), value: 4},
    {date: new Date("2014/11/20"), value: 4},
    {date: new Date("2014/11/21"), value: 4},
    {date: new Date("2014/11/22"), value: 4},
    {date: new Date("2014/11/23"), value: 3},
    {date: new Date("2014/11/24"), value: 3},
    {date: new Date("2014/11/25"), value: 4},
    {date: new Date("2014/11/26"), value: 4},
    {date: new Date("2014/11/27"), value: 4},
    {date: new Date("2014/11/28"), value: 4},
    {date: new Date("2014/11/29"), value: 4},
    {date: new Date("2014/11/30"), value: 3},
    {date: new Date("2014/12/01"), value: 3},
    {date: new Date("2014/12/02"), value: 3},
    {date: new Date("2014/12/03"), value: 4},
    {date: new Date("2014/12/04"), value: 3},
    {date: new Date("2014/12/05"), value: 3},
    {date: new Date("2014/12/06"), value: 3},
    {date: new Date("2014/12/07"), value: 3},
    {date: new Date("2014/12/08"), value: 4},
    {date: new Date("2014/12/09"), value: 2},
    {date: new Date("2014/12/10"), value: 2},
    {date: new Date("2014/12/11"), value: 3},
    {date: new Date("2014/12/12"), value: 3},
    {date: new Date("2014/12/13"), value: 4},
    {date: new Date("2014/12/14"), value: 4},
    {date: new Date("2014/12/15"), value: 4},
    {date: new Date("2014/12/16"), value: 3},
    {date: new Date("2014/12/17"), value: 4},
    {date: new Date("2014/12/18"), value: 4},
    {date: new Date("2014/12/19"), value: 4},
    {date: new Date("2014/12/20"), value: 4},
    {date: new Date("2014/12/21"), value: 4},
    {date: new Date("2014/12/22"), value: 4},
    {date: new Date("2014/12/23"), value: 4},
    {date: new Date("2014/12/24"), value: 3},
    {date: new Date("2014/12/25"), value: 4},
    {date: new Date("2014/12/26"), value: 4},
    {date: new Date("2014/12/27"), value: 3},
    {date: new Date("2014/12:28"), value: 4},
    {date: new Date("2014/12/29"), value: 4},
    {date: new Date("2014/12/30"), value: 4},
    {date: new Date("2014/12/31"), value: 4}
];

var dates = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
};

var diffs = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
};

for (var i = 0; i < entries.length; i++) {
    if (entries[i].value >= 1 && entries[i].value <= 5) {
        dates[entries[i].value].push(entries[i].date);
    }
    else {
        console.log("Illegal value", entries[i].value, "at index", i);
    }
}

for (var i = 1; i <= 5; i++) {
    if (dates[i].length <= 1) {
        console.log("Not enough data for", i);
    }
    else {
        for (var x = 0; x < dates[i].length-1; x++) {
            console.log("\tdiff", x+1, "for", i, "ratings:", timeDiff(dates[i][x], dates[i][x+1]));
        }
    }
}