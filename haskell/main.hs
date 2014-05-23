module Main where

import Data.List.Split (splitOn)

dateDiff s e = daysApart(s - e)

daysApart t = return floor (t / 24*60*60*1000)

main = do
    
    --splitOn "," (readFile "data.txt")

    -- This will print the whole file to the console
    -- readFile "data.txt" >>= print

    f <- readFile "data.txt"
    let l = lines f 
    
    let todoTasks = lines f     
        numberedTasks = zipWith (\n line -> show n ++ " - " ++ line) [0..] todoTasks

    -- print todoTasks
    -- print numberedTasks
    print map (splitOn "," show f)