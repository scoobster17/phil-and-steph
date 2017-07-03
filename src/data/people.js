const people = [
	{
		"id": 0,
		"order": 0,
		"firstName": "Philip",
		"lastName": "Gibbins",
		"nickname": "Phil",
		"title": "Mr",
		"portrait": "phil.jpg",
		"socialLinks": [
			{
				"media": "Facebook",
				"profile": "https://www.facebook.com/scoobster17"
			},
			{
				"media": "Twitter",
				"profile": "https://twitter.com/scoobster17"
			},
			{
				"media": "Pinterest",
				"profile": "https://www.pinterest.com/scoobster17/"
			}
		],
		"wedding": {
			"role": "Groom"
		},
		"occupation": "Web Developer",
		workExamples: [
			{
				name: "Ted Baker",
				link: "www.tedbaker.com"
			},
			{
				name: "T-Mobile"
			},
			{
				name: "Sainsbury's",
				link: "www.sainsburys.co.uk/groceries"
			},
			{
				name: "Kiddicare",
				link: "www.kiddicare.com"
			},
			{
				name: "Audi"
			}
		],
		favourites: {
			sport: "Basketball",
			film: "Hard to choose one, think I would have to go with Iron Man Trilogy and the Fast & Furious films, even number 3 :)",
			food: "Barbeque Chicken Pizza"
		},
		"interests": [
			"PlayStation 4"
		]
	},
	{
		"id": 1,
		"order": 1,
		"firstName": "Stephanie",
		"lastName": "Underdown",
		"nickname": "Steph",
		"title": "Ms",
		"portrait": "steph.jpg",
		"socialLinks": [
			{
				"media": "Facebook",
				"profile": "https://www.facebook.com/stephanie.underdown.1"
			},
            {
            	"media": "Twitter",
            	"profile": "https://twitter.com/s_underdown242"
            },
            {
            	"media": "Pinterest",
            	"profile": "https://uk.pinterest.com/stephanie6041/"
            }
		],
		"wedding": {
			"role": "Bride"
		},
		"occupation": "Teacher",
		workExamples: [
			{
				name: "Reception"
			},
			{
				name: "Year 1"
			},
			{
				name: "Year 2"
			}
		],
		favourites: {
			sport: "Sport? Don't be silly. Although I have started doing 5km runs with Park Run",
			film: "ALL DISNEY FILMS (not pixar, classic Disney)",
			food: "Spaghetti Bolognese with Cheese and Garlic Bread"
		},
		"interests": [
			"Candy Crush"
		]
	},
	{
		"id": 2,
		"order": 2,
		"firstName": "Louise",
		"lastName": "Steadman",
		"nickname": "Lou",
		"title": "Mrs",
		"portrait": "lou.jpg",
		"wedding": {
			"role": "Maid Of Honour"
		},
		"relationship": "Steph and I met at University. Hannah and Simon were in the same group at Uni and as we were in different halls, decided that we should all meet up. Steph was in the same halls as Simon and Dave and we were all in the same halls as Hannah. From the moment we met we all became great friends! Through Steph's strict time keeping we enjoyed many nights out and getting dressed up together. (Especially our first Summer Ball!) We continued to be good friends throughout University but became really close friends after. She is one of the best people I know and makes my life a better place. She truly is a special person who brings happiness wherever she goes. I couldn't ask for a better person to help guide my daughter to make good decisions. She's one in a million and I'm honoured to be her Maid Of Honour on her very special day.",
		"funFact": "An interesting fact about me is that my weirdest mode of transport ever has been a trolley ride!",
		"funnyStory": "<p>One of my favourite stories of me and Steph is the 'Limit!' story. We went to Centre Parcs with all of the Uni gang for a weekend away. On the Friday evening, after arriving, we decided to play drinking games. Steph was not doing well in the games and therefore drank a considerable amount of alcohol. She decided to end the game by shouting, 'LIMIT!' and then retired to bed. This had everyone in hysterics and became a popular phrase throughout the weekend. It didn't end there though.... In the morning, we had booked some badminton courts. Clearly Steph woke up feeling a little unwell. She decided to eat a whole packet of mints as she thought this would make her feel better. Instead this made her feel worse... Once we got to the sports centre, Steph ran to the toilet where she was then sick. When she came out of the toilet cubicle, she felt rather embarrassed and didn't want people to judge her for being hungover. Therefore, she decided to publicly announce in the toilet that she was sick due to her morning sickness and being pregnant. I struggled to keep a straight face and this also became another favourite topic of conversation throughout the whole weekend! A story I will never forget!</p>"
	},
	{
		"id": 3,
		"order": 6,
		"firstName": "Robert",
		"lastName": "Steadman",
		"nickname": "Rob",
		"title": "Mr",
		"portrait": "rob.jpg",
		"wedding": {
			"role": "Groomsman"
		},
		"relationship": "Went to University with Steph.",
		"firstMeeting": "<p>Supposedly I met Phil at Hannah's New Years Eve party (he obviously made a big impression from the get go).  At the time I was pre occupied with my now Wife, who was locked in a room with Hannah, while Ronan Keating produced a live performance...</p>",
		"funFact": "Random fact about me is I was indecisive at university. I used to flip a coin when making decisions, from what drink to have, what to wear, or to go out at all!",
		"funnyStory": "<p>Ongoing amusement provided by Phil within a WhatsApp group with Chris, Phil and I. Whenever Phil goes out for drinks drunken messages become abundant and the tangents are completely out of left field. Any time I want explanations he has fallen asleep or cannot remember his train of thought. </p>"
	},
	{
		"id": 4,
		"order": 5,
		"firstName": "Darren",
		"lastName": "",
		"nickname": "Daz",
		"title": "Mr",
		"portrait": "darren.jpg",
		"wedding": {
			"role": "Best Man"
		},
		"relationship": "Went to school with Phil"
	},
	{
		"id": 5,
		"order": 4,
		"firstName": "Bobbi-Lee",
		"lastName": "Hart",
		"nickname": "Bobs",
		"title": "Miss",
		"portrait": "bobs.jpg",
		"wedding": {
			"role": "Bridesmaid"
		},
		"relationship": "Steph's sister",
		"firstMeeting": "<p>I don't really remember the first time I met Phil but he came round our house.</p>",
		"funFact": "I can cook spaghetti bolognese.",
		"funnyStory": "<p>We were walking along and Sheldon was talking to me and Phil, and Sheldon bumped into a bright post at Legoland.</p>"
	},
	{
		"id": 6,
		"order": 3,
		"firstName": "Kayleigh",
		"lastName": "",
		"nickname": "Kay",
		"title": "Mrs",
		"portrait": "kay.jpg",
		"wedding": {
			"role": "Bridesmaid"
		},
		"relationship": "Went to school with Steph",
		"firstMeeting": "<p>I don't remember the exact first time I met Steph. I do, however, remember her constant hand raising in class. She always knew the answer and so I sat next to her. She was awesome to sit next to...sometimes she even told me the answer!</p><p>The first time I met Phil was at their housewarming. Phil was determined to make a good impression...as were we.</p><p>Suddenly, there was an awful smell. I was the first one who got the blame but said it wasn't me. Every other person whispered who it was and said it wasn't them. We turned round to find Phil chuckling to himself... we had found the culprit. To this day, I don't stand downwind of Phil!</p>",
		"funFact": "I could do the splits until I was 22.",
		"funnyStory": "<p>Steph and Phil love games nights. So much so, when Anthony bought home a game of Mario monopoly... we all wore Mario hats!</p>"
	},
	{
		"id": 7,
		"order": 7,
		"firstName": "Christopher",
		"lastName": "Pursglove",
		"nickname": "Chris",
		"title": "Mr",
		"portrait": "chris.jpg",
		"wedding": {
			"role": "Groomsman"
		},
		"relationship": "Partner of Steph's University friend",
		"firstMeeting": "<p>I first met Phil and Steph at Rob and Louises' new years eve party. Obviously trying to make a good impression I joined in with all the drinking games and was useless however I was not at the centre of attention as Pud (Matt Dicks) took all the attention by being in bed by 10 and throwing up in the spare room.</p>",
		"funFact": "I'm trying to teach Phil how to play golf.",
		"funnyStory": "<p>There is an annual Pub race in the village where Lou and Rob used to live, the day started very tame with a beer or two followed by drinking games. The task was whoever finished their drink first gave a five minute warning. If the others failed to finish their drinks a forfeit was implemented. Me and Phil gave Rob and Matt the warning to which they missed me buying shots for everyone. Turns out wasn't a good idea as we both ended up very ill and asleep on the floor whilst the girls watched movies.</p>"
	},
	{
		"id": 8,
		"order": 8,
		"firstName": "Sheldon",
		"lastName": "Hart",
		"nickname": "Sheldo",
		"title": "Master",
		"portrait": "sheldon.jpg",
		"wedding": {
			"role": "Page Boy"
		},
		"relationship": "Steph's brother",
		"firstMeeting": "<p>I don't remember the first time I met Phil but it was around 5 years ago. But I do remember when Phil was playing Xbox with me when mum and dad were at Chinnerys.</p>",
		"funFact": "I play for Wickford Town Football Club (under 11's).",
		"funnyStory": "<p>When I went to Legoland and walked into a brightly coloured post. It was multi-coloured and easy to see if I wasn't such a numpty.</p>"
	}
];

export default people;