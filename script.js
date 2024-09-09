document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark');
        themeToggle.checked = false;
    }

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });

    const nameInput = document.getElementById('nameInput');
    const initialsField = document.getElementById('initialsField');
    const loginField = document.getElementById('loginField');
    const firstNameField = document.getElementById('firstNameField');
    const lastNameField = document.getElementById('lastNameField');
    const passwordField = document.getElementById('passwordField');
    const emailInput = document.getElementById('emailInput');
    const emailOutput = document.getElementById('emailOutput');
    const regionButtons = document.querySelectorAll('.regionBtn');

    let generatedPassword = ''; // Variable to hold the generated password

// Password generator function
    function generatePassword() {
        const words = [
			'angel', 'anger', 'angle', 'angry', 'ankle', 'apple', 'apply', 'arena', 'argue', 'arise',
			'armed', 'armor', 'arose', 'array', 'arrow', 'aside', 'asset', 'audio', 'audit', 'avoid',
			'await', 'awake', 'award', 'aware', 'awful', 'badge', 'baker', 'basic', 'basis', 'beach',
			'beard', 'beast', 'begin', 'being', 'belly', 'below', 'bench', 'bible', 'birth', 'black',
			'blade', 'blame', 'blank', 'blast', 'blend', 'bless', 'blind', 'blink', 'block', 'blood',
			'board', 'boast', 'bonus', 'boost', 'booth', 'bound', 'brain', 'brand', 'brave', 'bread',
			'break', 'breed', 'brick', 'bride', 'brief', 'bring', 'broad', 'broke', 'brown', 'brush',
			'buddy', 'build', 'bunch', 'burst', 'cabin', 'cable', 'calm', 'camel', 'canal', 'candy',
			'canoe', 'canon', 'cargo', 'carve', 'catch', 'cause', 'cease', 'chain', 'chair', 'chalk',
			'champ', 'chant', 'chaos', 'charm', 'chart', 'chase', 'cheap', 'check', 'cheek', 'cheer',
			'chess', 'chest', 'chief', 'child', 'chill', 'china', 'choir', 'choke', 'chose', 'civil',
			'claim', 'clash', 'class', 'clean', 'clear', 'clerk', 'click', 'cliff', 'climb', 'clock',
			'close', 'cloth', 'cloud', 'coach', 'coast', 'color', 'comic', 'coral', 'count', 'court',
			'cover', 'craft', 'crash', 'crawl', 'crazy', 'cream', 'creek', 'creep', 'crime', 'crisp',
			'cross', 'crowd', 'crown', 'crush', 'curve', 'cycle', 'daily', 'dance', 'death', 'debut',
			'delay', 'delta', 'demon', 'denim', 'depth', 'diary', 'digit', 'doubt',
			'draft', 'drain', 'drama', 'dream', 'dress', 'drift', 'drill', 'drink', 'drive', 'drown',
			'drunk', 'eager', 'early', 'earth', 'eight', 'elbow', 'elder', 'elect', 'elite', 'empty',
			'enemy', 'enjoy', 'enter', 'entry', 'equal', 'equip', 'error', 'essay', 'event', 'every',
			'exact', 'exist', 'extra', 'faith', 'false', 'fancy', 'fault', 'favor', 'feast', 'fence',
			'fever', 'fiber', 'field', 'fifth', 'fifty', 'fight', 'final', 'first', 'flame', 'flash',
			'fleet', 'flesh', 'float', 'flock', 'flood', 'floor', 'flour', 'focus', 'force', 'forth',
			'forty', 'forum', 'found', 'frame', 'fraud', 'fresh', 'front', 'frost', 'fruit', 'funny',
			'giant', 'given', 'globe', 'glory', 'grace', 'grade', 'grain', 'grand', 'grant', 'grape',
			'graph', 'grasp', 'grass', 'grave', 'great', 'green', 'greet', 'grief', 'grind', 'gross',
			'group', 'guard', 'guess', 'guest', 'guide', 'habit', 'happy', 'harsh', 'heart', 'heavy',
			'honey', 'honor', 'horse', 'hotel', 'house', 'human', 'humor', 'hurry', 'ideal', 'image',
			'imply', 'index', 'inner', 'input', 'issue', 'jeans', 'joint', 'judge', 'juice', 'kneel',
			'knife', 'knock', 'label', 'labor', 'large', 'laser', 'later', 'laugh', 'layer', 'learn',
			'least', 'leave', 'legal', 'lemon', 'level', 'light', 'limit', 'liver', 'local', 'logic',
			'loose', 'lucky', 'lunar', 'lunch', 'magic', 'major', 'maker', 'march', 'marry', 'match',
			'maybe', 'mayor', 'medal', 'media', 'metal', 'meter', 'might', 'minor', 'model', 'money',
			'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'movie', 'music', 'naked', 'nasty',
			'naval', 'nerve', 'never', 'night', 'noble', 'noise', 'north', 'novel', 'nurse', 'occur',
			'ocean', 'offer', 'often', 'onion', 'opera', 'orbit', 'order', 'organ', 'other', 'ought',
			'outer', 'owner', 'paint', 'panel', 'panic', 'paper', 'party', 'peace', 'penny', 'phase',
			'phone', 'photo', 'piano', 'piece', 'pilot', 'pitch', 'place', 'plain', 'plane', 'plant',
			'plate', 'point', 'pound', 'power', 'press', 'price', 'pride', 'prime', 'print', 'prior',
			'prize', 'proof', 'proud', 'prove', 'punch', 'pupil', 'queen', 'quick', 'quiet', 'quite',
			'radio', 'raise', 'range', 'rapid', 'ratio', 'reach', 'react', 'ready', 'realm', 'rebel',
			'refer', 'relax', 'reply', 'reset', 'resist', 'rider', 'ridge', 'right', 'rival', 'river',
			'robot', 'rough', 'round', 'route', 'royal', 'ruler', 'rural', 'sadly', 'saint', 'salad',
			'scale', 'scare', 'scene', 'scope', 'score', 'scout', 'screw', 'seize', 'sense', 'serve',
			'seven', 'shade', 'shaft', 'shake', 'shall', 'shame', 'shape', 'share', 'sharp', 'sheep',
			'sheer', 'shelf', 'shell', 'shift', 'shine', 'shirt', 'shock', 'shoot', 'shore', 'short',
			'shout', 'shove', 'sight', 'silly', 'since', 'sixth', 'sixty', 'skate', 'skill', 'slave',
			'sleep', 'slice', 'slide', 'slope', 'small', 'smart', 'smell', 'smile', 'smoke', 'snake',
			'sneak', 'sober', 'solar', 'solid', 'solve', 'sorry', 'sound', 'south', 'space', 'spare',
			'speak', 'speed', 'spell', 'spend', 'spice', 'spike', 'spill', 'spine', 'spite', 'split',
			'spoil', 'sport', 'spray', 'spread', 'spring', 'squad', 'stack', 'staff', 'stage', 'stain',
			'stake', 'stamp', 'stand', 'stare', 'start', 'state', 'steam', 'steel', 'steep',
			'steer', 'stick', 'still', 'stock', 'stone', 'store', 'storm', 'story', 'stove', 'strap',
			'straw', 'strip', 'stuck', 'study', 'stuff', 'style', 'sugar', 'suite', 'super', 'sweet',
			'swing', 'sword', 'table', 'taste', 'teach', 'tease', 'teeth', 'tempt', 'thank', 'theme',
			'there', 'thick', 'thing', 'think', 'third', 'those', 'three', 'throw', 'thumb', 'tiger'
        ];

        const numbers = '0123456789';
        let word1 = words[Math.floor(Math.random() * words.length)];
        let word2 = words[Math.floor(Math.random() * words.length)];
        word1 = word1.charAt(0).toUpperCase() + word1.slice(1);
        word2 = word2.charAt(0).toUpperCase() + word2.slice(1);

        // Ensure the password is a combination of two words and four random numbers
        const password = `${word1}${word2}${Math.floor(1000 + Math.random() * 9000)}!`;
        return password;
    }

    // Helper function to convert names to Title Case
    function toTitleCase(name) {
        return name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    // Automatically highlight email content when clicked
    emailInput.addEventListener('click', function () {
        emailInput.select();
    });

    // Automatically populate Initials, Login, First Name, Last Name, and Full Name
    nameInput.addEventListener('input', function () {
        const nameParts = nameInput.value.trim().split(' ');

        if (nameParts.length >= 2) {
            const firstName = nameParts[0];
            const lastName = nameParts[nameParts.length - 1];

            // Generate initials: First letter of first name (capitalized) + last letter of first name (lowercase) +
            // first letter of last name (capitalized) + last letter of last name (lowercase)
            initialsField.value = firstName.charAt(0).toUpperCase() +
                                  firstName.charAt(firstName.length - 1).toLowerCase() +
                                  lastName.charAt(0).toUpperCase() +
                                  lastName.charAt(lastName.length - 1).toLowerCase();

            loginField.value = firstName.slice(0, 3).toLowerCase() + lastName.slice(0, 3).toLowerCase();
            firstNameField.value = firstName;
            lastNameField.value = lastName;
        }
    });

    // Email processing and extraction
    emailInput.addEventListener('input', function () {
        const emailText = emailInput.value;

        // Extract the requester's name (only the first name)
        const requesterNameMatch = emailText.match(/Requesters Name:\s+(.+)/);
        let requesterName = requesterNameMatch ? requesterNameMatch[1].trim().split(' ')[0] : 'Requester';
        requesterName = toTitleCase(requesterName);  // Convert first name to title case

        // Extract the user's full legal name
        const userNameMatch = emailText.match(/Users full legal name:\s+(.+)/);
        let userName = userNameMatch ? userNameMatch[1].trim() : '';
        userName = toTitleCase(userName);  // Convert to title case

        if (userName) {
            nameInput.value = userName; // Auto-populate the Full Name field
            nameInput.dispatchEvent(new Event('input')); // Trigger the input event to update other fields
        }

        // Default region prefix
        let regionPrefix = "oasis."; // Default to Texas

        // Function to update the email output and password field
        function updateEmailOutput() {
            const firstName = userName.split(' ')[0];
            const lastName = userName.split(' ')[1];
            const login = firstName.slice(0, 3).toLowerCase() + lastName.slice(0, 3).toLowerCase();
            generatedPassword = generatePassword(); // Store the generated password

            const emailTemplate = `Hi ${requesterName},

I have setup PCC access for: ${userName}

Login: ${regionPrefix}${login}
Password: ${generatedPassword}

Please note that the user will be prompted to create a new password upon the first login.`;
            emailOutput.value = emailTemplate;
            passwordField.value = generatedPassword; // Also populate the password field
        }

        // Allow region buttons to modify the prefix in the email output
        regionButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                regionPrefix = this.dataset.regionPrefix;
                updateEmailOutput(); // Update the email output with the new region
            });
        });

        // Generate the initial email output when input changes
        updateEmailOutput();
    });

    // Copy to clipboard functionality for each result field
    document.querySelectorAll('.copyBtn').forEach(btn => {
        btn.addEventListener('click', function () {
            const copyTarget = document.getElementById(this.dataset.copyTarget);
            copyTarget.select();
            document.execCommand('copy');
        });
    });
});
