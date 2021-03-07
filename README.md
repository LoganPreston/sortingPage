# sortingPage
Simple sorting page.

Wanted to try visualizing some sorts using JS. Also helped refresh some JS/CSS that I don't use very often. It's not "complete" with all the common searches because animating/visualizing those was difficult with my implementation. I tied the animation to the search, which has a host of issues:
-cannot replay steps, search is "live"
-cannot change speed on the fly
-difficult to animate (see shell sort)

If i were to do this again I would pass a "steps" variable to the sort to push on a step as the sort ran, then animate it post facto. So the sort would run quickly, then a slower version would be playable for the user.
