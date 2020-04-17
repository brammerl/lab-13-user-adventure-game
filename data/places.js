const newSeasons = {
    id: 'newSeasons',
    title: 'Your Local New Seasons',
    // map: {
    //     top: '89%',
    //     left: '44%'
    // },
    img: '../assets/places/new-seasons.jpg',
    description: `
    You arrive at your local New Seasons and see that the floral department is
    giving away bundles of left over flowers to do whatever you want with! You 
    decide it might be a good idea to grab some! How many do you grab? 
    `,
    choices: [{
        id: 'Three',
        description: `You decide to only take a few to make sure there's enough for everyone!`,
        amount: 3,
        img: 'three.jpg'
    }, {
        id: 'A Dozen',
        description: `A dozen seems appropriate! Not too many, not too few!`,
        amount: 12,
        img: 'dozen.jpg'
    }, {
        id: 'Twenty-One',
        description: `There's more than enough! Plus I want to be able to do all the things I want with them!`,
        amount: 21,
        img: 'twenty.jpeg'
    }]
};

const friendsHouse = {
    id: 'friendsHouse',
    title: `Your Friend's House`,
    // map:
    img: '../assets/places/friends-house.jpg',
    description: `You decide to visit a friend's house to catch up! You decide to give them some flowers. How many do you want to give them?`,
    choices: [{
        id: 'One Yellow Lily',
        description: `You give her a single yellow lily (Alstroemeria violacea) as a sign of your beautiful friendship!`,
        img: 'alstroemeria-yellow.jpg',
        amount: -1
    }, {
        id: 'Three bundles of Lavender',
        description: `You give them a solid bundle of lavender (Lavandula augustifolia) for them to use for their essential oil making business.`,
        img: 'lavender.jpg',
        amount: -3,
    }, {
        id: 'Five Forget Me Not stems',
        description: `You give them a bundle of five Forget Me Not (Myosotis sylvatica) stems adorned with a beautiful bushell of flowers to let them know that your friendship 
        is unforgettable!`,
        img: 'forget-me-not.jpg',
        amount: -5.
    }]
};

const craft = {
    id: 'craft',
    title: 'Do Some Crafts',
    img: '../assets/places/crafts-room.jpg',
    description: `Some of these flowers would be a great addition to a current project you're working on. How would you like to use the flowers?`,
    choices: [{
        id: 'Press flowers to put in your journal',
        description: `You press some flowers using the microwave method to speed up the drying of the flowers.
        After, you spend some time reflecting on the day so far, checking in on yourself and decorating your entry
        with doodles and the newly dried flowers you have!`,
        img: 'journal.jpg',
        amount: -3
    }, {
        id: 'Add to your growing collection of dried flowers on your living-room wall',
        description: 'Like every Portland-er, you have a wall of pretty flowers that stand out to you. You choose a particuarly cute peachy-colored rose to join the collection.',
        img: 'flower-wall.jpg',
        amount: -1
    }, {
        id: 'Make a mini bouquet to display in your kitchen',
        description: 'You gather some of the smaller flowers and plop them in a small mason jar to sit happily in the warm sun until their last days.',
        img: 'mason-jar.jpg',
        amount: -5
    }]
};

const walk = {
    id: 'walk',
    title: 'Go On a Walk',
    img: '../assets/places/walk.jpeg',
    description: `It's such a nice day out that you decide to go on a walk! Where do you want to walk to?`,
    choices: [{
        id: 'Take a stroll through Lone Fir Cemetery',
        description: `You like spending time in cemeteries. It's often more quiet and gives you a place to reflect without the distraction of what's going on in the living world.
        During your walk, you spread Valerian petals around the cemetary to protect the souls living there and thank them for allowing you to share space in their home.`,
        img: 'valerian.jpg',
        amount: -3
    }, {
        id: `Go grab a tea from your local coffee shop that has the cute barista working in it. Maybe they're working today!`,
        description: `Upon entering the establishment, the smell of bubbling brew wafts into your nostrils. You glance around the whole room with the sole intent of hopefully being able to catch sight
        of your secret crush. 'Ah! -They're working!" As you walk up to the counter, they hit you with a soft smile of recognition and immediately start preparing your usual, a Wuyi Oolong Tea. As you make small talk, they notice the
        bundle of flowers sticking out your bag. You offer some and give them a small bunch of Cosmos flowers. They mention the lavendar festival happening in July and ask if you would want to join them. You say
        yes! You leave brimming with excitment at the prospects of at the very least making a new friend!`,
        img: 'cosmos.jpg',
        amount: -5
    }, {
        id: 'Go to the skate park',
        description:`You head out to the skate park by your house and notice a little shrine dedicated to someone who must've lived in the area. Although you didn't know them personally,
        you decide to place an assortment of flowers down to pay respects.`,
        img: 'memorial.jpg',
        amount: -7
    }]
};

const actions = [newSeasons, friendsHouse, craft, walk];

export default actions;
