# similar-doctors

This is a simple Ember web app built that displays a list of doctors in a
network. Clicking on a doctor shows their details along with other similar
doctors.

Similar doctors is defined by having the same specialty, because I am
considering the patient's point of view. If they are searching for doctors,
they are only interested in a potential doctor's specialty. (No use for a
surgeon if they only need a family doctor.)

Then, I sorted the similar list by review score. I assume that the patient will
want to see the best reviewed doctors of a certain specialty first.

One thing I would like to implement is having area affect the order of the
list, or have a toggle to hide doctors from other areas. Currently, the app
will suggest doctors in other areas if their score is high enough. I assumed
that a patient would like the option to go to a different area if they saw a
doctor with a very good score. However, not everyone can go to a different area
just to see their doctor, especially if the network gets big enough that the
areas are too far apart.
