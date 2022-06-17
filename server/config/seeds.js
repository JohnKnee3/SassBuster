const db = require("./connection");
const { User, Product, Category, MovieComment } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Drama", title: "Dramas", helpingVerb: "are", orderControl: "a" },
    {
      name: "Action",
      title: "Action Movies",
      helpingVerb: "are",
      orderControl: "b",
    },
    {
      name: "Comedy",
      title: "Comedies",
      helpingVerb: "are",
      orderControl: "c",
    },
    {
      name: "Horror",
      title: "Horror Films",
      helpingVerb: "are",
      orderControl: "d",
    },
    {
      name: "Sci-Fi",
      title: "Sci-Fi Movies",
      helpingVerb: "are",
      orderControl: "e",
    },
    {
      name: "Family",
      title: "Family Films",
      helpingVerb: "are",
      orderControl: "f",
    },
    { name: "Romance", title: "Romance", helpingVerb: "is", orderControl: "g" },
    { name: "All", title: "Everything ", helpingVerb: "is", orderControl: "h" },
  ]);

  console.log("categories seeded");

  await MovieComment.deleteMany();

  const moviecomments = await MovieComment.insertMany([
    {
      movieCommentText: "The VHS quality makes the dance scene a banger!!",
      username: "Moozle",
      createdAt: "2022-05-19T20:55:30.509Z",
    },
    {
      movieCommentText: "c'est la vie say the old folks.",
      username: "MirMir",
      createdAt: "2022-05-19T21:12:30.509Z",
    },
    {
      movieCommentText:
        "I am so glad Blockbuster has added this film to their VHS collection.",
      username: "Moozle",
      createdAt: "2022-05-20T18:20:30.509Z",
    },
    {
      movieCommentText: "Best Christmas Movie EVER!!!!!",
      username: "Vio",
      createdAt: "2022-05-20T18:25:30.509Z",
    },
    {
      movieCommentText:
        "Tom Cruise in VHS, the way it is meant to be seen!!!!!",
      username: "Vio",
      createdAt: "2022-05-20T17:24:30.509Z",
    },
    {
      movieCommentText: "You've lost that looooving feeeeling.",
      username: "Moozle",
      createdAt: "2022-05-20T17:45:30.509Z",
    },
    {
      movieCommentText: "This will be so much better in VHS than in theaters.",
      username: "Moozle",
      createdAt: "2022-05-21T18:45:30.509Z",
    },
    {
      movieCommentText: "So intense.",
      username: "MirMir",
      createdAt: "2022-05-21T18:44:30.509Z",
    },
    {
      movieCommentText: "I still can't sleep near Leia anymore.",
      username: "MirMir",
      createdAt: "2022-05-20T18:44:30.509Z",
    },
    {
      movieCommentText: "Me neither",
      username: "Vio",
      createdAt: "2022-05-20T18:44:30.509Z",
    },
    {
      movieCommentText: "Shai HuLoove",
      username: "Vio",
      createdAt: "2022-05-20T18:41:30.509Z",
    },
    {
      movieCommentText: "You do love to burrow.",
      username: "Moozle",
      createdAt: "2022-05-20T18:42:30.509Z",
    },
    {
      movieCommentText: "I just can't wait to be kiiiinnng!!",
      username: "Moozle",
      createdAt: "2022-05-21T18:42:30.509Z",
    },
    {
      movieCommentText: "We don't talk about Bruno.",
      username: "MirMir",
      createdAt: "2022-05-21T17:42:30.509Z",
    },
    {
      movieCommentText: "I'm gunna wear this VHS out.",
      username: "Vio",
      createdAt: "2022-05-20T17:32:30.509Z",
    },
    {
      movieCommentText: "The VHS quality really adds to this films vibe",
      username: "Vio",
      createdAt: "2022-05-19T16:32:30.509Z",
    },
    {
      movieCommentText: "Oh for sure",
      username: "Moozle",
      createdAt: "2022-05-19T17:12:30.509Z",
    },
    {
      movieCommentText: "Vegetarianism at it's finest.",
      username: "MirMir",
      createdAt: "2022-05-19T17:12:30.509Z",
    },
    {
      movieCommentText: "Yes Blockbuster has this one now!!",
      username: "MirMir",
      createdAt: "2022-05-23T17:12:30.509Z",
    },
    {
      movieCommentText: "I'm just as fast love love!!",
      username: "Vio",
      createdAt: "2022-05-22T16:12:30.509Z",
    },
    {
      movieCommentText: "Be our guest!!",
      username: "Moozle",
      createdAt: "2022-05-22T16:12:30.509Z",
    },
    {
      movieCommentText: "Be our guest?",
      username: "Vio",
      createdAt: "2022-05-22T16:21:30.509Z",
    },
    {
      movieCommentText: "Be our natural request!!",
      username: "Moozle",
      createdAt: "2022-05-22T17:11:30.509Z",
    },
    {
      movieCommentText: "This movie is soooo pretty.",
      username: "Moozle",
      createdAt: "2022-05-21T14:12:30.509Z",
    },
    {
      movieCommentText: "Classic brought back to life.",
      username: "MirMir",
      createdAt: "2022-05-22T14:12:30.509Z",
    },
    {
      movieCommentText: "This film should get added to romance.",
      username: "Vio",
      createdAt: "2022-05-22T14:52:30.509Z",
    },
    {
      movieCommentText: "Chicken's not vegan?",
      username: "Moozle",
      createdAt: "2022-05-22T14:52:30.509Z",
    },
    {
      movieCommentText: "lol, such a fun movie.",
      username: "Vio",
      createdAt: "2022-05-22T14:59:30.509Z",
    },
    {
      movieCommentText: "Does the VHS  quality save this movie?",
      username: "Vio",
      createdAt: "2022-05-22T15:19:30.509Z",
    },
    {
      movieCommentText: "Not really.",
      username: "MirMir",
      createdAt: "2022-05-22T15:44:30.509Z",
    },
    {
      movieCommentText: "But hey at least it's cheap.",
      username: "Moozle",
      createdAt: "2022-05-22T15:45:30.509Z",
    },
    {
      movieCommentText: "Wait what is this movie?",
      username: "Moozle",
      createdAt: "2022-05-22T16:45:30.509Z",
    },
    {
      movieCommentText: "I cried so hard.",
      username: "Vio",
      createdAt: "2022-05-22T16:45:30.509Z",
    },
    {
      movieCommentText: "I scream pooped.",
      username: "Moozle",
      createdAt: "2022-05-22T16:47:30.509Z",
    },
    {
      movieCommentText: "Such a great movie.",
      username: "MirMir",
      createdAt: "2022-05-21T15:41:30.509Z",
    },
    {
      movieCommentText: "Love that Blockbuster got this early.",
      username: "Vio",
      createdAt: "2022-05-21T15:22:30.509Z",
    },
    {
      movieCommentText: "Everything is awesome!!!!",
      username: "Moozle",
      createdAt: "2022-05-21T15:22:30.509Z",
    },
    {
      movieCommentText: "Wrong movie Molly.",
      username: "MirMir",
      createdAt: "2022-05-21T15:30:42.509Z",
    },
    {
      movieCommentText: "Don't out my secret identity.",
      username: "Moozle",
      createdAt: "2022-05-21T15:51:42.509Z",
    },
    {
      movieCommentText: "I love the outdoors.",
      username: "Vio",
      createdAt: "2022-05-20T15:50:42.509Z",
    },
    {
      movieCommentText: "Spider-Ham is the best.",
      username: "Vio",
      createdAt: "2022-05-20T15:48:42.509Z",
    },
    {
      movieCommentText: "This classic back in the format it should be in",
      username: "MirMir",
      createdAt: "2022-05-21T16:41:42.509Z",
    },
    {
      movieCommentText: "This film is really cute.",
      username: "Vio",
      createdAt: "2022-05-21T16:41:42.509Z",
    },
    {
      movieCommentText: "Get it while it's cheap.",
      username: "Moozle",
      createdAt: "2022-05-21T16:53:42.509Z",
    },
    {
      movieCommentText: "Oh snap, evil Superman",
      username: "Moozle",
      createdAt: "2022-05-21T16:53:42.509Z",
    },
    {
      movieCommentText: "Everybody floats!!",
      username: "Moozle",
      createdAt: "2022-05-22T15:41:42.509Z",
    },
    {
      movieCommentText: "Not me, I hate water!!",
      username: "MirMir",
      createdAt: "2022-05-22T15:47:42.509Z",
    },
    {
      movieCommentText: "Is this a sports moive?",
      username: "Vio",
      createdAt: "2022-05-22T15:11:42.509Z",
    },
    {
      movieCommentText: "/sigh",
      username: "MirMir",
      createdAt: "2022-05-22T15:21:42.509Z",
    },
    {
      movieCommentText: "Absolute must buy.",
      username: "MirMir",
      createdAt: "2022-05-22T14:14:42.509Z",
    },
  ]);

  console.log("moviecomments seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      image: "pulp-fiction.jpg",
      categories: [categories[0]._id, categories[2]._id, categories[7]._id],
      movieComments: [moviecomments[0]._id, moviecomments[1]._id],
      price: 44.99,
    },
    {
      name: "No Country for Old Men",
      description:
        "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
      image: "no-country-for-old-men.jpg",
      categories: [categories[0]._id, categories[7]._id],
      price: 29.99,
    },
    {
      name: "Die Hard",
      categories: [categories[1]._id, categories[7]._id],
      description:
        "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
      image: "die-hard.jpg",
      price: 39.99,
    },
    {
      name: "Fearless",
      categories: [categories[0]._id, categories[1]._id, categories[7]._id],
      description:
        "A biography of Chinese Martial Arts Master Huo Yuanjia, who is the founder and spiritual guru of the Jin Wu Sports Federation.",
      image: "fearless.jpg",
      price: 34.99,
    },
    {
      name: "Braveheart",
      categories: [categories[0]._id, categories[1]._id, categories[7]._id],
      description:
        "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      image: "braveheart.jpg",
      price: 14.99,
    },
    {
      name: "The Big Lebowski",
      categories: [categories[2]._id, categories[7]._id],
      description:
        "Ultimate L.A. slacker Jeff The Dude Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife.",
      image: "the-big-lebowski.jpg",
      price: 399.99,
    },
    {
      name: "Meet the Parents",
      categories: [categories[2]._id, categories[6]._id, categories[7]._id],
      description:
        "Male nurse Greg Focker meets his girlfriend's parents before proposing, but her suspicious father is every date's worst nightmare.",
      image: "meet-the-parents.jpg",
      price: 39.99,
    },
    {
      name: "The Ring",
      categories: [categories[3]._id, categories[7]._id],
      description:
        "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
      image: "the-ring.jpg",
      price: 39.99,
    },
    {
      name: "Scream",
      categories: [categories[3]._id, categories[7]._id],
      description:
        "A year after the murder of her mother, a teenage girl is terrorized by a new killer, who targets the girl and her friends by using horror films as part of a deadly game.",
      image: "scream.jpg",
      price: 9.99,
    },
    {
      name: "Aliens",
      categories: [categories[1]._id, categories[4]._id, categories[7]._id],
      description:
        "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
      image: "aliens.jpg",
      price: 21.99,
    },
    {
      name: "Everything Everywhere All at Once",
      categories: [categories[1]._id, categories[4]._id, categories[7]._id],
      description:
        "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
      image: "everything-everywhere-all-at-once.jpg",
      price: 29.99,
    },
    {
      name: "Arrival",
      categories: [categories[0]._id, categories[4]._id, categories[7]._id],
      description:
        "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
      movieComments: [moviecomments[2]._id],
      image: "arrival.jpg",
      price: 59.99,
    },
    {
      name: "Blade Runner",
      categories: [
        categories[0]._id,
        categories[1]._id,
        categories[4]._id,
        categories[7]._id,
      ],
      description:
        "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      image: "bladerunner.jpg",
      price: 27.99,
    },
    {
      name: "Home Alone",
      categories: [categories[2]._id, categories[5]._id, categories[7]._id],
      description:
        "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
      image: "home-alone.jpg",
      price: 34.99,
    },
    {
      name: "Frozen",
      categories: [categories[2]._id, categories[5]._id, categories[7]._id],
      description:
        "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
      image: "frozen.jpg",
      price: 22.99,
    },
    {
      name: "Soul",
      categories: [categories[2]._id, categories[5]._id, categories[7]._id],
      description:
        "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
      image: "soul.jpg",
      price: 44.99,
    },
    {
      name: "About Time",
      categories: [
        categories[0]._id,
        categories[2]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      description:
        "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
      image: "about-time.jpg",
      price: 51.99,
    },
    {
      name: "Before Sunset",
      categories: [categories[0]._id, categories[6]._id, categories[7]._id],
      description:
        "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
      image: "before-sunset.jpg",
      price: 24.99,
    },
    {
      name: "Love Actually",
      categories: [
        categories[0]._id,
        categories[2]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[3]._id],
      description:
        "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
      image: "love-actually.jpg",
      price: 21.99,
    },
    {
      name: "Top Gun",
      categories: [categories[0]._id, categories[1]._id, categories[7]._id],
      movieComments: [moviecomments[4]._id, moviecomments[5]._id],
      description:
        "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
      image: "top-gun.jpg",
      price: 21.99,
    },
    {
      name: "Top Gun: Maverick",
      categories: [categories[0]._id, categories[1]._id, categories[7]._id],
      movieComments: [moviecomments[6]._id],
      description:
        "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
      image: "top-gun-maverick.jpg",
      price: 22.99,
    },
    {
      name: "Get Out",
      categories: [categories[3]._id, categories[7]._id],
      movieComments: [moviecomments[7]._id],
      description:
        "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
      image: "get-out.jpg",
      price: 21.99,
    },
    {
      name: "Paranormal Activity",
      categories: [categories[3]._id, categories[7]._id],
      movieComments: [moviecomments[8]._id, moviecomments[9]._id],
      description:
        "After moving into a suburban home, a couple becomes increasingly disturbed by a nightly demonic presence.",
      image: "paranormal-activity.jpg",
      price: 41.99,
    },
    {
      name: "Dune",
      categories: [
        categories[0]._id,
        categories[1]._id,
        categories[4]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[10]._id, moviecomments[11]._id],
      description:
        "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
      image: "dune.jpg",
      price: 44.99,
    },
    {
      name: "The Lion King",
      categories: [categories[0]._id, categories[5]._id, categories[7]._id],
      movieComments: [moviecomments[12]._id],
      description:
        "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
      image: "lion-king.jpg",
      price: 34.99,
    },
    {
      name: "Encanto",
      categories: [categories[2]._id, categories[5]._id, categories[7]._id],
      movieComments: [moviecomments[13]._id],
      description:
        "A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.",
      image: "encanto.jpg",
      price: 14.99,
    },
    {
      name: "The Notebook",
      categories: [categories[0]._id, categories[6]._id, categories[7]._id],
      movieComments: [moviecomments[14]._id],
      description:
        "A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.",
      image: "the-notebook.jpg",
      price: 17.99,
    },
    {
      name: "The Witch",
      categories: [categories[0]._id, categories[3]._id, categories[7]._id],
      movieComments: [moviecomments[15]._id, moviecomments[16]._id],
      description:
        "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
      image: "the-witch.jpg",
      price: 27.99,
    },
    {
      name: "Raw",
      categories: [categories[0]._id, categories[3]._id, categories[7]._id],
      movieComments: [moviecomments[17]._id],
      description:
        "A young woman, studying to be a vet, develops a craving for human flesh.",
      image: "raw.jpg",
      price: 25.99,
    },
    {
      name: "Never Let Me Go",
      categories: [
        categories[0]._id,
        categories[4]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[18]._id],
      description:
        "The lives of three friends, from their early school days into young adulthood, when the reality of the world they live in comes knocking.",
      image: "never-let-me-go.jpg",
      price: 24.99,
    },
    {
      name: "Sonic the Hedgehog",
      categories: [
        categories[1]._id,
        categories[2]._id,
        categories[5]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[19]._id],
      description:
        "After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him.",
      image: "sonic-the-hedgehog.jpg",
      price: 23.99,
    },
    {
      name: "Beauty and the Beast",
      categories: [categories[5]._id, categories[6]._id, categories[7]._id],
      movieComments: [
        moviecomments[20]._id,
        moviecomments[21]._id,
        moviecomments[22]._id,
      ],
      description:
        "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
      image: "beauty-and-the-beast.jpg",
      price: 26.99,
    },
    {
      name: "The Fall",
      categories: [categories[0]._id, categories[7]._id],
      movieComments: [moviecomments[23]._id],
      description:
        "In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a fellow patient, a little girl with a broken arm, a fantastic story of five mythical heroes. Thanks to his fractured state of mind and her vivid imagination, the line between fiction and reality blurs as the tale advances.",
      image: "the-fall.jpg",
      price: 37.99,
    },
    {
      name: "The Brave Little Toaster",
      categories: [categories[5]._id, categories[7]._id],
      movieComments: [moviecomments[24]._id],
      description:
        "A group of dated appliances embark on a journey to the city to find their master after being abandoned in a cabin in the woods.",
      image: "the-brave-little-toaster.jpg",
      price: 44.99,
    },
    {
      name: "Let the Right One In",
      categories: [categories[0]._id, categories[3]._id, categories[7]._id],
      movieComments: [moviecomments[25]._id],
      description:
        "Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.",
      image: "let-the-right-one-in.jpg",
      price: 24.99,
    },
    {
      name: "Scott Pilgrim vs. the World",
      categories: [categories[1]._id, categories[2]._id, categories[7]._id],
      movieComments: [moviecomments[26]._id, moviecomments[27]._id],
      description:
        "In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart.",
      image: "scott-pilgrim-vs-the-world.jpg",
      price: 27.99,
    },
    {
      name: "Eternals",
      categories: [categories[1]._id, categories[4]._id, categories[7]._id],
      movieComments: [
        moviecomments[28]._id,
        moviecomments[29]._id,
        moviecomments[30]._id,
      ],
      description:
        "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
      image: "eternals.jpg",
      price: 7.99,
    },
    {
      name: "Dual",
      categories: [categories[3]._id, categories[4]._id, categories[7]._id],
      movieComments: [moviecomments[31]._id],
      description:
        "A woman opts for a cloning procedure after she receives a terminal diagnosis but when she recovers her attempts to have her clone decommissioned fail, leading to a court-mandated duel to the death.",
      image: "dual.jpg",
      price: 25.99,
    },
    {
      name: "The Time Traveler's Wife",
      categories: [
        categories[0]._id,
        categories[2]._id,
        categories[4]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[32]._id, moviecomments[33]._id],
      description:
        "A Chicago librarian has a gene that causes him to involuntarily time travel, creating complications in his marriage.",
      image: "the-time-travelers-wife.jpg",
      price: 23.99,
    },
    {
      name: "Her",
      categories: [
        categories[0]._id,
        categories[4]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[34]._id],
      description:
        "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      image: "her.jpg",
      price: 21.99,
    },
    {
      name: "The Bad Guys",
      categories: [categories[2]._id, categories[5]._id, categories[7]._id],
      movieComments: [moviecomments[35]._id],
      description:
        "Several reformed yet misunderstood criminal animals attempt to become good, with some disastrous results along the way.",
      image: "the-bad-guys.jpg",
      price: 34.99,
    },
    {
      name: "The Lego Batman Movie",
      categories: [
        categories[1]._id,
        categories[2]._id,
        categories[5]._id,
        categories[7]._id,
      ],
      movieComments: [
        moviecomments[36]._id,
        moviecomments[37]._id,
        moviecomments[38]._id,
      ],
      description:
        "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
      image: "the-lego-batman-movie.jpg",
      price: 33.99,
    },
    {
      name: "FernGully: The Last Rainforest",
      categories: [categories[5]._id, categories[7]._id],
      movieComments: [moviecomments[39]._id],
      description:
        "The magical inhabitants of a rainforest fight to save their home, which is threatened by logging and a polluting force of destruction called Hexxus.",
      image: "ferngully.jpg",
      price: 45.99,
    },
    {
      name: "Spider-Man: Into the Spider-Verse",
      categories: [
        categories[1]._id,
        categories[4]._id,
        categories[5]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[40]._id],
      description:
        "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      image: "spider-man-into-the-spider-verse.jpg",
      price: 59.99,
    },
    {
      name: "Alien",
      categories: [categories[3]._id, categories[4]._id, categories[7]._id],
      movieComments: [moviecomments[41]._id],
      description:
        "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      image: "alien.jpg",
      price: 29.99,
    },
    {
      name: "Spontaneous",
      categories: [
        categories[0]._id,
        categories[2]._id,
        categories[3]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[42]._id, moviecomments[43]._id],
      description:
        "Get ready for the outrageous coming-of-age love story about growing up...and blowing up. When students in their school begin exploding (literally), seniors Mara and Dylan struggle to survive in a world where each moment may be their last.",
      image: "spontaneous.jpg",
      price: 9.99,
    },
    {
      name: "Brightburn",
      categories: [categories[0]._id, categories[3]._id, categories[7]._id],
      movieComments: [moviecomments[44]._id],
      description:
        "What if a child from another world crash-landed on Earth, but instead of becoming a hero to mankind, he proved to be something far more sinister?",
      image: "brightburn.jpg",
      price: 39.99,
    },
    {
      name: "It",
      categories: [categories[3]._id, categories[7]._id],
      movieComments: [moviecomments[45]._id, moviecomments[46]._id],
      description:
        "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
      image: "it.jpg",
      price: 41.99,
    },
    {
      name: "Silver Linings Playbook",
      categories: [
        categories[0]._id,
        categories[2]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[47]._id, moviecomments[48]._id],
      description:
        "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
      image: "silver-linings-playbook.jpg",
      price: 32.99,
    },
    {
      name: "La La Land",
      categories: [
        categories[0]._id,
        categories[2]._id,
        categories[6]._id,
        categories[7]._id,
      ],
      movieComments: [moviecomments[49]._id],
      description:
        "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      image: "la-la-land.jpg",
      price: 54.99,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Molly",
    lastName: "Moo",
    username: "Moozle",
    email: "moobear@yahoo.com",
    password: "123456",
    orders: [
      {
        products: [products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Mira",
    lastName: "Pups",
    username: "MirMir",
    email: "mirpups@yahoo.com",
    password: "123456",
  });

  await User.create({
    firstName: "Violet",
    lastName: "Love",
    username: "Vio",
    email: "lovelove@yahoo.com",
    password: "123456",
  });

  await User.create({
    firstName: "Admin",
    lastName: "Account",
    username: "Admin",
    email: "admin@yahoo.com",
    password: "123456",
  });

  console.log("users seeded");

  process.exit();
});
