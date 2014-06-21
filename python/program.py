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

def get_diffs_of_ratings(l):
    """ Returns a double, the average number of days between the rating objects
    specified in the list parameter.

    :param list: A list of rating objects.
    """
    if len(l) <= 1:
        return str(None)
    total = 0.0
    for v in range(0, len(l)-1):
        total = total + float((l[v+1]["date"] - l[v]["date"]).days)
    return str(float(total / (len(l)-1)))

def get_avg_of_list(l):
    """
    :param l: A list of rating objects.
    :return float: The average of the ``value`` element
    """
    l = [e["value"] for e in l]
    return reduce(lambda x, y: x + y, l) / float(len(l))

def predict(target, entries):
    """
    :param target: A stringified date in the format: YYYY/MM/DD
    :param emtries: A list of rating objects, used as training data
    """
    t = date(*map(int, target.split("/")))

    ret = "By day of the week: %s" \
          % (get_avg_of_list(dates_by_day_of_week[t.weekday()]))

    #TODO: get days since last x rating, and next predicted
    # x day (based on today being the assumed current)

    return ret

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
    print "Average days between %d ratings of value %d: %s" % \
          (len(dates_of_value), i, get_diffs_of_ratings(dates_of_value))
    i = i + 1

print "----"

print "Average days between %d bad days over a range of %s days: %s" % \
          (len(dates_by_value[0] + dates_by_value[1]),
           get_diffs_of_ratings([entries[0], entries[len(entries) - 1]]),
           get_diffs_of_ratings(dates_by_value[0] + dates_by_value[1]))

print "Average days between %d good days over a range of %s days: %s" % \
          (len(dates_by_value[3] + dates_by_value[4]),
           get_diffs_of_ratings([entries[0], entries[len(entries) - 1]]),
           get_diffs_of_ratings(dates_by_value[3] + dates_by_value[4]))

# This is a zero-indexed list (so beware of the off by one problem)
dates_by_day_of_week = [[] for i in range(0, 7)]
for e in entries:
    if e["date"].weekday() in range (0, 7):
        dates_by_day_of_week[e["date"].weekday()].append(e)

print "By day of week:"
dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
i = 0
for d in dates_by_day_of_week:
    print "%s: %f" % (dow[i], get_avg_of_list(d))
    i = i + 1

target_date = "2014/01/01"
print "Predicting %s" % target_date
print predict(target_date, entries)