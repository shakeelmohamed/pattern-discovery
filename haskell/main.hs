dateDiff s e = daysApart(s - e)
daysApart t = floor (t / 24*60*60*1000)
-- Figure out how to declare arrays/lists

main = 
    --import split
    splitOn "," (readFile "data.txt")