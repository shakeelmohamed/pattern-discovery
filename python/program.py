from datetime import date

def get_rating_object(tup):
    """ Returns an object with a date and value key

    :param tup: A tuple or list with 2 members:
        a date string in the format of YYYY/MM/DD
        a number between 1 and 5 (inclusive)
    """
    return {
        # Split into list, cast into integer tuple, unpack values
        "date": date(*map(int, tup[0].split("/"))),
        # Cast to int
        "value": int(tup[1])
    }

def get_diffs_of_ratings(list):
    """ Returns a double, the average number of days between the rating objects
    specified in the list parameter.

    :param list: A list of rating objects.
    """
    if len(list) <= 1:
        return 0.0
    total = 0.0
    for v in range(0, len(list)-1):
        total = total + float((list[v+1]["date"] - list[v]["date"]).days)
    return float(total / (len(list)-1))


entries = [get_rating_object(line.rstrip("\n").split(", "))
    for line in open("data.txt").readlines()]

# This is a zero-indexed list (so beware of the off by one problem)
dates_by_value = [[] for i in range(0, 5)]
for e in entries:
    if e["value"] not in range(1, 6):
        raise ValueError("Invalid value %s" % str(e["value"]))
    dates_by_value[e["value"]-1].append(e)

# This is a zero-indexed list (so beware of the off by one problem)
date_apart_by_value = [[] for i in range(0, 5)]
i = 0
for dates_of_value in dates_by_value:
    print "Average days between %d ratings of value %d: %f" % \
          (len(dates_of_value), i, get_diffs_of_ratings(dates_of_value))
    i = i + 1

print "Average days between %d bad days over a range of %d days: %f" % \
          (len(dates_by_value[0] + dates_by_value[1]),
           get_diffs_of_ratings([entries[0], entries[len(entries) - 1]]),
           get_diffs_of_ratings(dates_by_value[0] + dates_by_value[1]))

print "Average days between %d good days over a range of %d days: %f" % \
          (len(dates_by_value[3] + dates_by_value[4]),
           get_diffs_of_ratings([entries[0], entries[len(entries) - 1]]),
           get_diffs_of_ratings(dates_by_value[3] + dates_by_value[4]))