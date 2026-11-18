const LANGUAGES = {
  en: { name: "English", flag: "🇬🇧", code: "EN", voice: "en-US" },
  hi: { name: "Hindi", flag: "🇮🇳", code: "HI", voice: "hi-IN" },
  de: { name: "German", flag: "🇩🇪", code: "DE", voice: "de-DE" },
  fr: { name: "French", flag: "🇫🇷", code: "FR", voice: "fr-FR" },
  es: { name: "Spanish", flag: "🇪🇸", code: "ES", voice: "es-ES" }
};

const MODULES = [
  { id: "alphabet", title: "Alphabet", icon: "🔤", description: "Letters, sounds & first words", accent: "alphabet", lessons: (language) => ALPHABETS[language].length, duration: 10 },
  { id: "numbers", title: "Numbers", icon: "🔢", description: "Learn numbers, counting & everyday number words", accent: "numbers", lessons: () => 100, duration: 10 },
  { id: "vocabulary", title: "Vocabulary", icon: "📖", description: "Useful words for every day", accent: "vocabulary", lessons: () => VOCABULARY_WORDS.length, duration: 15 },
  { id: "photo-words", title: "Photo Name", icon: "🖼️", description: "Learn words with pictures", accent: "photo-words", lessons: () => PHOTO_WORDS.length, duration: 10 },
  { id: "stories", title: "Stories", icon: "📚", description: "Read, listen & play through stories", accent: "stories", lessons: () => STORY_ADVENTURES.length, duration: 15 },
  { id: "pronunciation", title: "Pronunciation", icon: "🔊", description: "Hear useful words spoken aloud", accent: "pronunciation", lessons: () => VOCABULARY_WORDS.length, duration: 10 },
  { id: "quiz", title: "Quiz", icon: "❓", description: "Timed word & language challenge", accent: "quiz", lessons: () => 10, duration: 10 },
  { id: "games", title: "Games", icon: "🎮", description: "Pick a game, play & earn XP", accent: "games", lessons: () => CENTER_GAMES.length, duration: 10 },
  { id: "final-test", title: "Final Test", icon: "🏆", description: "Test everything you have learned", accent: "final-test", lessons: () => 100, duration: 60 },
  { id: "progress", title: "Progress", icon: "▥", description: "See how far you have come" }
];

const ALPHABETS = {
  en: [
    ["A","Apple","सेब","This is an apple."],["B","Ball","गेंद","The ball is blue."],["C","Cat","बिल्ली","The cat is small."],["D","Dog","कुत्ता","The dog is friendly."],
    ["E","Elephant","हाथी","An elephant is big."],["F","Fish","मछली","The fish can swim."],["G","Grapes","अंगूर","I like green grapes."],["H","House","घर","This is my house."],
    ["I","Ice cream","आइसक्रीम","The ice cream is cold."],["J","Juice","रस","She drinks orange juice."],["K","Kite","पतंग","The kite flies high."],["L","Lion","शेर","The lion is strong."],
    ["M","Moon","चाँद","The moon is bright."],["N","Nest","घोंसला","A bird has a nest."],["O","Orange","संतरा","The orange is sweet."],["P","Pencil","पेंसिल","I have a pencil."],
    ["Q","Queen","रानी","The queen is kind."],["R","Rainbow","इंद्रधनुष","A rainbow has many colors."],["S","Sun","सूरज","The sun is warm."],["T","Tree","पेड़","That tree is tall."],
    ["U","Umbrella","छाता","Take your umbrella."],["V","Violin","वायलिन","He plays the violin."],["W","Water","पानी","Please drink water."],["X","Xylophone","ज़ाइलोफ़ोन","She plays a xylophone."],
    ["Y","Yellow","पीला","The flower is yellow."],["Z","Zebra","ज़ेबरा","A zebra has stripes."]
  ],
  de: [
    ["A","Apfel","Apple","Das ist ein Apfel."],["B","Buch","Book","Das Buch ist neu."],["C","Café","Cafe","Das Café ist offen."],["D","Dorf","Village","Das Dorf ist klein."],
    ["E","Elefant","Elephant","Der Elefant ist groß."],["F","Fisch","Fish","Der Fisch schwimmt."],["G","Garten","Garden","Der Garten ist schön."],["H","Haus","House","Das Haus ist weiß."],
    ["I","Insel","Island","Die Insel ist grün."],["J","Jacke","Jacket","Die Jacke ist warm."],["K","Katze","Cat","Die Katze schläft."],["L","Lampe","Lamp","Die Lampe ist hell."],
    ["M","Mond","Moon","Der Mond ist rund."],["N","Nase","Nose","Meine Nase ist kalt."],["O","Oma","Grandmother","Meine Oma lacht."],["P","Pferd","Horse","Das Pferd läuft."],
    ["Q","Qualität","Quality","Die Qualität ist gut."],["R","Rose","Rose","Die Rose ist rot."],["S","Sonne","Sun","Die Sonne scheint."],["T","Tisch","Table","Der Tisch ist groß."],
    ["U","Uhr","Clock","Die Uhr ist neu."],["V","Vogel","Bird","Der Vogel singt."],["W","Wasser","Water","Das Wasser ist klar."],["X","Xylophon","Xylophone","Das Xylophon klingt schön."],
    ["Y","Yoga","Yoga","Yoga macht Spaß."],["Z","Zebra","Zebra","Das Zebra ist schnell."],["Ä","Äpfel","Apples","Die Äpfel sind frisch."],["Ö","Öl","Oil","Das Öl ist warm."],
    ["Ü","Übung","Exercise","Die Übung ist leicht."],["ß","Straße","Street","Die Straße ist lang."]
  ],
  fr: [
    ["A","Ami","Friend","Mon ami est ici."],["B","Bonjour","Hello","Bonjour, comment ça va ?"],["C","Chat","Cat","Le chat dort."],["D","Danse","Dance","Elle aime la danse."],
    ["E","École","School","L’école est grande."],["F","Fleur","Flower","La fleur est jolie."],["G","Gâteau","Cake","Le gâteau est délicieux."],["H","Hôtel","Hotel","L’hôtel est près d’ici."],
    ["I","Île","Island","L’île est belle."],["J","Jardin","Garden","Le jardin est vert."],["K","Kiwi","Kiwi","Le kiwi est mûr."],["L","Livre","Book","Le livre est intéressant."],
    ["M","Maison","House","La maison est calme."],["N","Nuage","Cloud","Le nuage est blanc."],["O","Oiseau","Bird","L’oiseau chante."],["P","Pomme","Apple","La pomme est rouge."],
    ["Q","Question","Question","J’ai une question."],["R","Rivière","River","La rivière est longue."],["S","Soleil","Sun","Le soleil brille."],["T","Table","Table","La table est ronde."],
    ["U","Univers","Universe","L’univers est immense."],["V","Voiture","Car","La voiture est bleue."],["W","Wagon","Wagon","Le wagon est vide."],["X","Xylophone","Xylophone","Le xylophone est amusant."],
    ["Y","Yaourt","Yogurt","Le yaourt est frais."],["Z","Zèbre","Zebra","Le zèbre court."]
  ],
  es: [
    ["A","Árbol","Tree","Este es un árbol."],["B","Barco","Boat","El barco es grande."],["C","Casa","House","La casa es bonita."],["D","Día","Day","Hoy es un buen día."],
    ["E","Estrella","Star","La estrella brilla."],["F","Flor","Flower","La flor es roja."],["G","Gato","Cat","El gato duerme."],["H","Helado","Ice cream","El helado está frío."],
    ["I","Isla","Island","La isla es pequeña."],["J","Jardín","Garden","El jardín es verde."],["K","Kiwi","Kiwi","El kiwi está rico."],["L","Luna","Moon","La luna es brillante."],
    ["M","Manzana","Apple","La manzana es dulce."],["N","Nube","Cloud","La nube es blanca."],["Ñ","Niño","Child","El niño está contento."],["O","Oso","Bear","El oso es grande."],
    ["P","Perro","Dog","El perro corre."],["Q","Queso","Cheese","El queso es delicioso."],["R","Rosa","Rose","La rosa es bonita."],["S","Sol","Sun","El sol está caliente."],
    ["T","Tortuga","Turtle","La tortuga camina."],["U","Uva","Grape","La uva es morada."],["V","Viento","Wind","El viento es suave."],["W","Wafle","Waffle","El wafle está caliente."],
    ["X","Xilófono","Xylophone","El xilófono suena bien."],["Y","Yogur","Yogurt","El yogur está frío."],["Z","Zapato","Shoe","El zapato es nuevo."]
  ],
  hi: [
    ["अ","अनार","Pomegranate","अनार मीठा है।"],["आ","आम","Mango","आम पीला है।"],["इ","इमली","Tamarind","इमली खट्टी है।"],["ई","ईख","Sugarcane","ईख लंबी है।"],["उ","उल्लू","Owl","उल्लू पेड़ पर है।"],
    ["ऊ","ऊन","Wool","ऊन मुलायम है।"],["ऋ","ऋषि","Sage","ऋषि ध्यान करते हैं।"],["ए","एड़ी","Heel","मेरी एड़ी में दर्द है।"],["ऐ","ऐनक","Glasses","ऐनक मेज़ पर है।"],["ओ","ओखली","Mortar","ओखली रसोई में है।"],["औ","औरत","Woman","औरत किताब पढ़ती है।"],["अं","अंगूर","Grapes","अंगूर मीठे हैं।"],["अः","दुःख","Sorrow","दुःख कम हो जाता है।"],
    ["क","कबूतर","Pigeon","कबूतर उड़ता है।"],["ख","खरगोश","Rabbit","खरगोश तेज़ दौड़ता है।"],["ग","गमला","Flowerpot","गमले में फूल है।"],["घ","घर","House","मेरा घर सुंदर है।"],["ङ","अंगूर","Grapes","अंगूर ताज़े हैं।"],
    ["च","चम्मच","Spoon","चम्मच साफ़ है।"],["छ","छाता","Umbrella","छाता बारिश में काम आता है।"],["ज","जहाज़","Ship","जहाज़ समुद्र में है।"],["झ","झरना","Waterfall","झरना सुंदर है।"],["ञ","पञ्च","Five","पञ्च का अर्थ पाँच है।"],
    ["ट","टमाटर","Tomato","टमाटर लाल है।"],["ठ","ठेला","Cart","ठेला बाज़ार में है।"],["ड","डमरू","Drum","डमरू बजता है।"],["ढ","ढक्कन","Lid","ढक्कन बंद है।"],["ण","गणेश","Ganesha","गणेश की मूर्ति सुंदर है।"],
    ["त","तरबूज़","Watermelon","तरबूज़ मीठा है।"],["थ","थाली","Plate","थाली में खाना है।"],["द","दवा","Medicine","दवा समय पर लो।"],["ध","धनुष","Bow","धनुष सुंदर है।"],["न","नदी","River","नदी बहती है।"],
    ["प","पतंग","Kite","पतंग आसमान में है।"],["फ","फल","Fruit","फल ताज़ा है।"],["ब","बकरी","Goat","बकरी घास खाती है।"],["भ","भालू","Bear","भालू जंगल में रहता है।"],["म","मछली","Fish","मछली पानी में रहती है।"],
    ["य","योग","Yoga","योग स्वास्थ्य के लिए अच्छा है।"],["र","रथ","Chariot","रथ तेज़ चलता है।"],["ल","लड्डू","Sweet","लड्डू मीठा है।"],["व","वन","Forest","वन हरा है।"],
    ["श","शेर","Lion","शेर जंगल का राजा है।"],["ष","षट्कोण","Hexagon","षट्कोण की छह भुजाएँ हैं।"],["स","सूरज","Sun","सूरज चमकता है।"],["ह","हाथी","Elephant","हाथी बड़ा है।"],
    ["क्ष","क्षमा","Forgiveness","क्षमा करना अच्छी बात है।"],["त्र","त्रिशूल","Trident","त्रिशूल के तीन शूल हैं।"],["ज्ञ","ज्ञान","Knowledge","ज्ञान से समझ बढ़ती है।"],["श्र","श्रम","Hard work","श्रम से सफलता मिलती है।"]
  ]
};

const PHOTO_CATEGORIES = [
  { id: "fruits", label: "Fruits", icon: "🍎" },
  { id: "animals", label: "Animals", icon: "🐶" },
  { id: "home", label: "Home", icon: "🏠" },
  { id: "school", label: "School", icon: "🏫" },
  { id: "vehicles", label: "Vehicles", icon: "🚗" },
  { id: "clothes", label: "Clothes", icon: "👕" },
  { id: "food", label: "Food", icon: "🍽️" },
  { id: "nature", label: "Nature", icon: "🌳" },
  { id: "people", label: "People", icon: "👨‍👩‍👧" },
  { id: "places", label: "Places", icon: "🏥" },
  { id: "objects", label: "Objects", icon: "🔧" },
  { id: "colors", label: "Colors", icon: "🎨" }
];
const PHOTO_WORDS = [
  { category: "fruits", image: "🍎", words: { en: "Apple", hi: "सेब", de: "Apfel", fr: "Pomme", es: "Manzana" } },
  { category: "fruits", image: "🍌", words: { en: "Banana", hi: "केला", de: "Banane", fr: "Banane", es: "Plátano" } },
  { category: "fruits", image: "🍊", words: { en: "Orange", hi: "संतरा", de: "Orange", fr: "Orange", es: "Naranja" } },
  { category: "animals", image: "🐶", words: { en: "Dog", hi: "कुत्ता", de: "Hund", fr: "Chien", es: "Perro" } },
  { category: "animals", image: "🐱", words: { en: "Cat", hi: "बिल्ली", de: "Katze", fr: "Chat", es: "Gato" } },
  { category: "animals", image: "🐟", words: { en: "Fish", hi: "मछली", de: "Fisch", fr: "Poisson", es: "Pez" } },
  { category: "home", image: "🪑", words: { en: "Chair", hi: "कुर्सी", de: "Stuhl", fr: "Chaise", es: "Silla" } },
  { category: "home", image: "🛏️", words: { en: "Bed", hi: "बिस्तर", de: "Bett", fr: "Lit", es: "Cama" } },
  { category: "school", image: "📚", words: { en: "Book", hi: "किताब", de: "Buch", fr: "Livre", es: "Libro" } },
  { category: "school", image: "✏️", words: { en: "Pencil", hi: "पेंसिल", de: "Bleistift", fr: "Crayon", es: "Lápiz" } },
  { category: "vehicles", image: "🚗", words: { en: "Car", hi: "गाड़ी", de: "Auto", fr: "Voiture", es: "Coche" } },
  { category: "vehicles", image: "🚌", words: { en: "Bus", hi: "बस", de: "Bus", fr: "Bus", es: "Autobús" } },
  { category: "clothes", image: "👕", words: { en: "Shirt", hi: "कमीज़", de: "Hemd", fr: "Chemise", es: "Camisa" } },
  { category: "clothes", image: "👟", words: { en: "Shoes", hi: "जूते", de: "Schuhe", fr: "Chaussures", es: "Zapatos" } },
  { category: "food", image: "🍞", words: { en: "Bread", hi: "रोटी", de: "Brot", fr: "Pain", es: "Pan" } },
  { category: "food", image: "🧀", words: { en: "Cheese", hi: "पनीर", de: "Käse", fr: "Fromage", es: "Queso" } },
  { category: "nature", image: "🌳", words: { en: "Tree", hi: "पेड़", de: "Baum", fr: "Arbre", es: "Árbol" } },
  { category: "nature", image: "🌸", words: { en: "Flower", hi: "फूल", de: "Blume", fr: "Fleur", es: "Flor" } },
  { category: "people", image: "👩", words: { en: "Woman", hi: "महिला", de: "Frau", fr: "Femme", es: "Mujer" } },
  { category: "people", image: "👨", words: { en: "Man", hi: "आदमी", de: "Mann", fr: "Homme", es: "Hombre" } },
  { category: "places", image: "🏥", words: { en: "Hospital", hi: "अस्पताल", de: "Krankenhaus", fr: "Hôpital", es: "Hospital" } },
  { category: "places", image: "🏫", words: { en: "School", hi: "विद्यालय", de: "Schule", fr: "École", es: "Escuela" } },
  { category: "objects", image: "🔑", words: { en: "Key", hi: "चाबी", de: "Schlüssel", fr: "Clé", es: "Llave" } },
  { category: "objects", image: "⌚", words: { en: "Watch", hi: "घड़ी", de: "Uhr", fr: "Montre", es: "Reloj" } },
  { category: "colors", image: "🔴", words: { en: "Red", hi: "लाल", de: "Rot", fr: "Rouge", es: "Rojo" } },
  { category: "colors", image: "🔵", words: { en: "Blue", hi: "नीला", de: "Blau", fr: "Bleu", es: "Azul" } }
];
const VOCABULARY_CATEGORIES = [
  { id: "fruits", title: "Fruits", icon: "🍎" }, { id: "vegetables", title: "Vegetables", icon: "🥕" },
  { id: "animals", title: "Animals", icon: "🐶" }, { id: "home", title: "Home", icon: "🏠" },
  { id: "clothes", title: "Clothes", icon: "👕" }, { id: "vehicles", title: "Vehicles", icon: "🚗" },
  { id: "school", title: "School", icon: "🏫" }, { id: "family", title: "Family", icon: "👨‍👩‍👧" },
  { id: "food", title: "Food", icon: "🍽️" }, { id: "nature", title: "Nature", icon: "🌳" },
  { id: "places", title: "Places", icon: "🏥" }, { id: "technology", title: "Technology", icon: "💻" },
  { id: "colors", title: "Colors", icon: "🎨" }, { id: "numbers", title: "Numbers", icon: "🔢" },
  { id: "body", title: "Body parts", icon: "🧍" }
];
const VOCABULARY_WORDS = [
  { id:"apple",category:"fruits",level:"beginner",image:"🍎",en:"Apple",hi:"सेब",de:"Apfel",fr:"Pomme",es:"Manzana",meaning:"A crisp, sweet fruit.",part:"Noun",example:"I eat an apple every day." },
  { id:"banana",category:"fruits",level:"beginner",image:"🍌",en:"Banana",hi:"केला",de:"Banane",fr:"Banane",es:"Plátano",meaning:"A long, soft, sweet fruit.",part:"Noun",example:"She packed a banana for lunch." },
  { id:"carrot",category:"vegetables",level:"beginner",image:"🥕",en:"Carrot",hi:"गाजर",de:"Karotte",fr:"Carotte",es:"Zanahoria",meaning:"A crunchy orange vegetable.",part:"Noun",example:"The carrot is fresh and crunchy." },
  { id:"potato",category:"vegetables",level:"beginner",image:"🥔",en:"Potato",hi:"आलू",de:"Kartoffel",fr:"Pomme de terre",es:"Patata",meaning:"A round vegetable that grows underground.",part:"Noun",example:"We cooked a potato for dinner." },
  { id:"dog",category:"animals",level:"beginner",image:"🐶",en:"Dog",hi:"कुत्ता",de:"Hund",fr:"Chien",es:"Perro",meaning:"A friendly animal that many people keep at home.",part:"Noun",example:"The dog likes to play." },
  { id:"horse",category:"animals",level:"beginner",image:"🐴",en:"Horse",hi:"घोड़ा",de:"Pferd",fr:"Cheval",es:"Caballo",meaning:"A large animal that people can ride.",part:"Noun",example:"The horse runs across the field." },
  { id:"house",category:"home",level:"beginner",image:"🏠",en:"House",hi:"घर",de:"Haus",fr:"Maison",es:"Casa",meaning:"A building where people live.",part:"Noun",example:"Our house has a little garden." },
  { id:"chair",category:"home",level:"beginner",image:"🪑",en:"Chair",hi:"कुर्सी",de:"Stuhl",fr:"Chaise",es:"Silla",meaning:"A seat for one person.",part:"Noun",example:"Please take a chair." },
  { id:"shirt",category:"clothes",level:"beginner",image:"👕",en:"Shirt",hi:"कमीज़",de:"Hemd",fr:"Chemise",es:"Camisa",meaning:"A piece of clothing worn on the upper body.",part:"Noun",example:"He wore a clean shirt." },
  { id:"shoes",category:"clothes",level:"beginner",image:"👟",en:"Shoes",hi:"जूते",de:"Schuhe",fr:"Chaussures",es:"Zapatos",meaning:"A pair of coverings worn on the feet.",part:"Noun",example:"My shoes are by the door." },
  { id:"car",category:"vehicles",level:"beginner",image:"🚗",en:"Car",hi:"गाड़ी",de:"Auto",fr:"Voiture",es:"Coche",meaning:"A road vehicle with four wheels.",part:"Noun",example:"The car is blue." },
  { id:"bus",category:"vehicles",level:"beginner",image:"🚌",en:"Bus",hi:"बस",de:"Bus",fr:"Bus",es:"Autobús",meaning:"A large vehicle that carries many passengers.",part:"Noun",example:"We take the bus to school." },
  { id:"book",category:"school",level:"beginner",image:"📚",en:"Book",hi:"किताब",de:"Buch",fr:"Livre",es:"Libro",meaning:"Pages with writing or pictures to read.",part:"Noun",example:"I read a book before bed." },
  { id:"pencil",category:"school",level:"beginner",image:"✏️",en:"Pencil",hi:"पेंसिल",de:"Bleistift",fr:"Crayon",es:"Lápiz",meaning:"A tool for writing or drawing.",part:"Noun",example:"She writes with a pencil." },
  { id:"mother",category:"family",level:"beginner",image:"👩",en:"Mother",hi:"माँ",de:"Mutter",fr:"Mère",es:"Madre",meaning:"A female parent.",part:"Noun",example:"My mother tells wonderful stories." },
  { id:"brother",category:"family",level:"beginner",image:"👦",en:"Brother",hi:"भाई",de:"Bruder",fr:"Frère",es:"Hermano",meaning:"A boy or man who has the same parent as you.",part:"Noun",example:"My brother likes to draw." },
  { id:"water",category:"food",level:"beginner",image:"💧",en:"Water",hi:"पानी",de:"Wasser",fr:"Eau",es:"Agua",meaning:"The clear liquid we drink every day.",part:"Noun",example:"Please drink a glass of water." },
  { id:"bread",category:"food",level:"beginner",image:"🍞",en:"Bread",hi:"रोटी",de:"Brot",fr:"Pain",es:"Pan",meaning:"A baked food made from flour.",part:"Noun",example:"We had bread with our soup." },
  { id:"tree",category:"nature",level:"beginner",image:"🌳",en:"Tree",hi:"पेड़",de:"Baum",fr:"Arbre",es:"Árbol",meaning:"A tall plant with a trunk and branches.",part:"Noun",example:"A bird is sitting in the tree." },
  { id:"flower",category:"nature",level:"beginner",image:"🌸",en:"Flower",hi:"फूल",de:"Blume",fr:"Fleur",es:"Flor",meaning:"The colorful part of a plant.",part:"Noun",example:"The flower smells lovely." },
  { id:"hospital",category:"places",level:"beginner",image:"🏥",en:"Hospital",hi:"अस्पताल",de:"Krankenhaus",fr:"Hôpital",es:"Hospital",meaning:"A place where sick or injured people receive care.",part:"Noun",example:"The hospital is near the park." },
  { id:"school",category:"places",level:"beginner",image:"🏫",en:"School",hi:"विद्यालय",de:"Schule",fr:"École",es:"Escuela",meaning:"A place where people learn.",part:"Noun",example:"Our school opens at eight." },
  { id:"computer",category:"technology",level:"intermediate",image:"💻",en:"Computer",hi:"कंप्यूटर",de:"Computer",fr:"Ordinateur",es:"Computadora",meaning:"An electronic machine used to store and work with information.",part:"Noun",example:"I use a computer for my homework." },
  { id:"phone",category:"technology",level:"beginner",image:"📱",en:"Phone",hi:"फ़ोन",de:"Telefon",fr:"Téléphone",es:"Teléfono",meaning:"A device used to call or message people.",part:"Noun",example:"She called me on the phone." },
  { id:"red",category:"colors",level:"beginner",image:"🔴",en:"Red",hi:"लाल",de:"Rot",fr:"Rouge",es:"Rojo",meaning:"The color of a ripe tomato.",part:"Adjective",example:"He chose the red bag." },
  { id:"blue",category:"colors",level:"beginner",image:"🔵",en:"Blue",hi:"नीला",de:"Blau",fr:"Bleu",es:"Azul",meaning:"The color of a clear daytime sky.",part:"Adjective",example:"The sky looks blue today." },
  { id:"journey",category:"vehicles",level:"intermediate",image:"🧳",en:"Journey",hi:"यात्रा",de:"Reise",fr:"Voyage",es:"Viaje",meaning:"The act of traveling from one place to another.",part:"Noun",example:"Our journey took three hours." },
  { id:"weather",category:"nature",level:"intermediate",image:"🌤️",en:"Weather",hi:"मौसम",de:"Wetter",fr:"Temps",es:"Clima",meaning:"The condition of the air outside at a particular time.",part:"Noun",example:"The weather is warm and sunny." },
  { id:"comfortable",category:"clothes",level:"intermediate",image:"🛋️",en:"Comfortable",hi:"आरामदायक",de:"Bequem",fr:"Confortable",es:"Cómodo",meaning:"Feeling relaxed and free from discomfort.",part:"Adjective",example:"These shoes are comfortable." },
  { id:"opportunity",category:"school",level:"advanced",image:"🚪",en:"Opportunity",hi:"अवसर",de:"Gelegenheit",fr:"Occasion",es:"Oportunidad",meaning:"A good chance to do or achieve something.",part:"Noun",example:"This is a great opportunity to learn." },
  { id:"environment",category:"nature",level:"advanced",image:"🌍",en:"Environment",hi:"पर्यावरण",de:"Umwelt",fr:"Environnement",es:"Medio ambiente",meaning:"The natural world and the surroundings where we live.",part:"Noun",example:"We should protect the environment." },
  { id:"responsibility",category:"family",level:"advanced",image:"🤝",en:"Responsibility",hi:"ज़िम्मेदारी",de:"Verantwortung",fr:"Responsabilité",es:"Responsabilidad",meaning:"A duty or task that you are expected to take care of.",part:"Noun",example:"Taking care of the garden is my responsibility." },
  { id:"one",category:"numbers",level:"beginner",image:"1️⃣",en:"One",hi:"एक",de:"Eins",fr:"Un",es:"Uno",meaning:"The number after zero.",part:"Number",example:"I have one sister." },
  { id:"five",category:"numbers",level:"beginner",image:"5️⃣",en:"Five",hi:"पाँच",de:"Fünf",fr:"Cinq",es:"Cinco",meaning:"The number after four.",part:"Number",example:"There are five apples." },
  { id:"hand",category:"body",level:"beginner",image:"✋",en:"Hand",hi:"हाथ",de:"Hand",fr:"Main",es:"Mano",meaning:"The part of your arm that has fingers.",part:"Noun",example:"Raise your hand if you know." },
  { id:"eye",category:"body",level:"beginner",image:"👁️",en:"Eye",hi:"आँख",de:"Auge",fr:"Œil",es:"Ojo",meaning:"The part of your body that you see with.",part:"Noun",example:"She has a kind smile and bright eyes." }
];

const STORAGE_KEY = "onestep-languages-v1";
const INITIAL_STATE = { name: "", nameConfigured: false, source: "en", target: "hi", level: "Beginner", progress: {}, vocabularyProgress: {}, learningPositions: {}, alphabetProgress: {}, pronunciationProgress: {}, finalTests: {}, dailyStreak: 0, lastLearningDate: "" };
let profileLoadError = false;
let stateNeedsMigration = false;
let state = loadState();
let currentPage = "home";
let alphabetSelectedIndex = 0;
let photoMode = "learn";
let photoCategory = "all";
let photoIndex = 0;
let numbersCategory = "all";
let numbersPageIndex = 0;
let practiceIndex = 0;
let practiceSelection = "";
let practiceChecked = false;
let practiceScore = 0;
let practiceFinished = false;
let vocabularyCategory = "all";
let vocabularyLevel = "all";
let vocabularyIndex = 0;
let vocabularyGame = "cards";
let vocabularyShowMore = false;
let vocabularySelectedAnswer = "";
let vocabularyChecked = false;
let vocabularySpellingMissing = "";
let vocabularyMatchLeft = "";
let vocabularyMatched = [];
let vocabularyMatchWords = [];
let vocabularyFeedback = "";
let storyLevel = "all";
let activeStoryId = "";
let storyStage = "library";
let storyPageIndex = 0;
let storyWordId = "";
let storyQuizIndex = 0;
let storyQuizAnswers = [];
let storyQuizChecked = false;
let storyOrder = [];
let storyOrderChecked = false;
let storyListenChoice = "";
let storyListenChecked = false;
let storyDraggingIndex = -1;
let storyUtterance = null;
let storyEarnedXp = 0;
let quizDifficulty = "beginner";
let quizStage = "start";
let quizQuestions = [];
let quizIndex = 0;
let quizLives = 3;
let quizScore = 0;
let quizStreak = 0;
let quizBestStreak = 0;
let quizBonusXp = 0;
let quizTimeLeft = 60;
let quizSelectedAnswer = "";
let quizChecked = false;
let quizAnswerCorrect = false;
let quizTimer = null;
let quizCompletedOnce = false;
let quizSaveError = false;
const finalTestTimers = new Map();
let finalTestGenerating = false;
let finalTestGenerationError = "";
let finalTestSaveError = false;
let gameStage = "center";
let activeGameId = "";
let gameQuestionIndex = 0;
let gameQuestionWords = [];
let gameChoiceOptions = {};
let gameSelectedTileIds = [];
let gameSelectedOption = "";
let gameFeedback = "";
let gameAnswered = false;
let gameCorrect = 0;
let gameWrong = 0;
let gameStreak = 0;
let gameBestStreak = 0;
let gameTimeLeft = 60;
let gameTimer = null;
let gameMatchedIds = [];
let gameMatchLeft = "";
let gameMemoryCards = [];
let gameMemoryFlipped = [];
let gameMemoryMatched = [];
let gameMemoryBusy = false;
let gameFinishedOnce = false;
let gameEarnedXp = 0;
let gameMemoryTimeout = null;
let toastTimer;
let feedbackRating = 0;
const learningTranslationCache = new Map();
let appearancePreference = (() => {
  try {
    const preference = localStorage.getItem("onestep-appearance") || "light";
    return ["light", "dark"].includes(preference) ? preference : "light";
  } catch (error) {
    console.error("Could not read appearance preference.", error);
    return "light";
  }
})();
let translateSource = state.source;
let translateTarget = state.target;
let translateInput = "";
let translateResult = "";
let translateError = "";
let translateLoading = false;

function applyAppearance() {
  const dark = appearancePreference === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]').content = dark ? "#091522" : "#ffffff";
  const toggle = document.querySelector("#theme-toggle");
  if (toggle) {
    toggle.innerHTML = dark ? "☀️ <span>Light</span>" : "🌙 <span>Dark</span>";
    toggle.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
  }
  const themeSelect = document.querySelector("#appearance-select");
  if (themeSelect) themeSelect.value = appearancePreference;
}
function saveAppearance(preference) {
  if (!["light", "dark"].includes(preference)) {
    showToast("Choose Light or Dark appearance.");
    return false;
  }
  const previous = appearancePreference;
  appearancePreference = preference;
  try {
    localStorage.setItem("onestep-appearance", preference);
    applyAppearance();
    return true;
  } catch (error) {
    appearancePreference = previous;
    applyAppearance();
    console.error("Could not save appearance preference.", error);
    showToast("Your browser could not save this appearance setting.");
    return false;
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(INITIAL_STATE);
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object" || !LANGUAGES[parsed.source] || !LANGUAGES[parsed.target] || !parsed.progress || typeof parsed.progress !== "object") {
      throw new Error("Saved learning profile has an invalid format.");
    }
    stateNeedsMigration = ["learningPositions", "dailyStreak", "lastLearningDate"].some((key) => !Object.prototype.hasOwnProperty.call(parsed, key)) ||
      Object.prototype.hasOwnProperty.call(parsed, "userId") ||
      Object.prototype.hasOwnProperty.call(parsed, "email") ||
      (Array.isArray(parsed.feedback) && parsed.feedback.some((item) => item && typeof item === "object" && Object.prototype.hasOwnProperty.call(item, "userId")));
    const feedback = Array.isArray(parsed.feedback) ? parsed.feedback.filter((item) => item && typeof item === "object").map((item) => {
      const createdAt = typeof item.createdAt === "string" && !Number.isNaN(Date.parse(item.createdAt)) ? item.createdAt : new Date().toISOString();
      const submitted = new Date(createdAt);
      const feedbackItem = { ...item };
      delete feedbackItem.userId;
      return {
        ...feedbackItem,
        id: typeof item.id === "string" && item.id ? item.id : createLocalId(),
        date: typeof item.date === "string" && item.date ? item.date : submitted.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" }),
        time: typeof item.time === "string" && item.time ? item.time : submitted.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }),
        status: typeof item.status === "string" && item.status ? item.status : "Submitted",
        createdAt
      };
    }) : [];
    const savedState = { ...parsed };
    delete savedState.userId;
    delete savedState.email;
    const learningPositions = savedState.learningPositions && typeof savedState.learningPositions === "object"
      ? savedState.learningPositions
      : {};
    return {
      ...INITIAL_STATE,
      ...savedState,
      feedback,
      learningPositions,
      dailyStreak: Number.isFinite(parsed.dailyStreak) ? Math.max(0, parsed.dailyStreak) : 0,
      lastLearningDate: typeof parsed.lastLearningDate === "string" ? parsed.lastLearningDate : "",
      name: parsed.nameConfigured === true && typeof parsed.name === "string" ? parsed.name.trim().slice(0, 40) : "",
      nameConfigured: parsed.nameConfigured === true
    };
  } catch (error) {
    console.error("Could not load your saved learning data.", error);
    profileLoadError = true;
    return structuredClone(INITIAL_STATE);
  }
}

function createLocalId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    console.error("Could not save your learning data.", error);
    showToast("Your browser could not save this change. Check its storage settings.");
    return false;
  }
}
if (stateNeedsMigration) persistState();

function pairKey() { return `${state.source}:${state.target}`; }
function rememberLearningPosition(position) {
  if (!state.learningPositions || typeof state.learningPositions !== "object") state.learningPositions = {};
  state.learningPositions[pairKey()] = { ...position, source: state.source, target: state.target, savedAt: new Date().toISOString() };
  persistState();
}
function rememberCurrentLearningPosition() {
  if (!MODULES.some((module) => module.id === currentPage && module.id !== "progress")) return;
  if (currentPage === "stories" && !["read", "library"].includes(storyStage)) return;
  const position = { page: currentPage };
  if (currentPage === "numbers") Object.assign(position, { category: numbersCategory, index: numbersPageIndex });
  if (currentPage === "vocabulary") Object.assign(position, { index: vocabularyIndex, category: vocabularyCategory, game: vocabularyGame });
  if (currentPage === "photo-words") Object.assign(position, {
    index: photoIndex,
    practiceIndex,
    practiceScore,
    practiceSelection,
    practiceChecked,
    category: photoCategory,
    mode: photoMode
  });
  if (currentPage === "stories") Object.assign(position, {
    storyId: activeStoryId,
    storyStage,
    storyPageIndex
  });
  rememberLearningPosition(position);
}
function resumePosition() {
  const position = state.learningPositions?.[pairKey()];
  if (!position || !MODULES.some((module) => module.id === position.page && module.id !== "progress")) return null;
  if (position.page === "stories" && position.storyId && !STORY_ADVENTURES.some((story) => story.id === position.storyId)) return null;
  return position;
}
function restoreLearningPosition(position) {
  currentPage = position.page;
  if (position.page === "numbers") {
    numbersCategory = NUMBER_CATEGORIES.some((category) => category.id === position.category) ? position.category : "all";
    numbersPageIndex = Number.isInteger(position.index) ? Math.max(0, position.index) : 0;
  } else if (position.page === "vocabulary") {
    vocabularyIndex = Number.isInteger(position.index) ? position.index : 0;
    const validCategories = ["all", "saved", ...VOCABULARY_CATEGORIES.map((category) => category.id)];
    vocabularyCategory = validCategories.includes(position.category) ? position.category : "all";
    vocabularyGame = ["cards", "picture-quiz", "spelling", "matching"].includes(position.game) ? position.game : "cards";
  } else if (position.page === "photo-words") {
    photoIndex = Number.isInteger(position.index) ? position.index : 0;
    practiceIndex = Number.isInteger(position.practiceIndex) ? position.practiceIndex : 0;
    practiceScore = Number.isInteger(position.practiceScore) ? position.practiceScore : 0;
    practiceSelection = typeof position.practiceSelection === "string" ? position.practiceSelection : "";
    practiceChecked = position.practiceChecked === true;
    const validCategories = ["all", ...PHOTO_CATEGORIES.map((category) => category.id)];
    photoCategory = validCategories.includes(position.category) ? position.category : "all";
    photoMode = position.mode === "practice" ? "practice" : "learn";
  } else if (position.page === "stories") {
    activeStoryId = typeof position.storyId === "string" ? position.storyId : "";
    storyStage = position.storyStage === "read" ? "read" : "library";
    const story = storyById(activeStoryId);
    storyPageIndex = story && Number.isInteger(position.storyPageIndex)
      ? Math.max(0, Math.min(position.storyPageIndex, story.pages.length - 1))
      : 0;
  }
  render();
}
function recordLearningDay() {
  const today = todayKey();
  if (state.lastLearningDate === today) return;
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;
  state.dailyStreak = state.lastLearningDate === yesterday ? (state.dailyStreak || 0) + 1 : 1;
  state.lastLearningDate = today;
}
function currentDailyStreak() {
  if (!state.lastLearningDate) return 0;
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;
  return state.lastLearningDate === todayKey() || state.lastLearningDate === yesterday ? state.dailyStreak || 0 : 0;
}
function currentCourseXp() {
  const key = pairKey();
  return ["vocabularyProgress", "quizProgress", "gameProgress", "storyProgress", "finalTests", "alphabetProgress"]
    .reduce((total, collection) => total + (Number(state[collection]?.[key]?.xp) || 0), 0);
}
function currentCourseLevel() {
  const xp = currentCourseXp();
  return xp >= 500 ? "Advanced" : xp >= 150 ? "Intermediate" : "Beginner";
}
function numberWord(value) {
  const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if (value < 10) return ones[value];
  if (value < 20) return teens[value - 10];
  if (value < 100) return `${tens[Math.floor(value / 10)]}${value % 10 ? `-${ones[value % 10]}` : ""}`;
  if (value === 100) return "one hundred";
  if (value < 1000) return `${ones[Math.floor(value / 100)]} hundred${value % 100 ? ` ${numberWord(value % 100)}` : ""}`;
  if (value === 1000) return "one thousand";
  if (value === 2000) return "two thousand";
  if (value === 5000) return "five thousand";
  if (value === 10000) return "ten thousand";
  if (value === 100000) return "one hundred thousand";
  if (value === 1000000) return "one million";
  return String(value);
}
const NUMBER_CATEGORIES = [
  { id: "all", label: "All · 1–100", select: () => Array.from({ length: 100 }, (_, index) => index + 1) },
  { id: "one-ten", label: "1–10", select: () => Array.from({ length: 10 }, (_, index) => index + 1) },
  { id: "eleven-twenty", label: "11–20", select: () => Array.from({ length: 10 }, (_, index) => index + 11) },
  { id: "twenty-one-fifty", label: "21–50", select: () => Array.from({ length: 30 }, (_, index) => index + 21) },
  { id: "fifty-one-hundred", label: "51–100", select: () => Array.from({ length: 50 }, (_, index) => index + 51) },
  { id: "hundreds", label: "Hundreds", select: () => [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] },
  { id: "thousands", label: "Thousands", select: () => [1000, 2000, 5000, 10000, 100000, 1000000] },
  { id: "everyday", label: "Everyday numbers", select: () => [0, 1, 2, 3, 7, 10, 12, 24, 30, 50, 100] }
];
const NUMBER_PAGE_SIZE = 12;
const ALPHABET_PAGE_SIZE = 12;
function getNumberProgress() {
  if (!state.numbersProgress || typeof state.numbersProgress !== "object") state.numbersProgress = {};
  const key = pairKey();
  if (!state.numbersProgress[key] || typeof state.numbersProgress[key] !== "object") state.numbersProgress[key] = { learned: [] };
  const progress = state.numbersProgress[key];
  if (!Array.isArray(progress.learned)) progress.learned = [];
  progress.learned = [...new Set(progress.learned.filter((value) => Number.isInteger(value) && value >= 1 && value <= 100))];
  if (!Number.isInteger(progress.selectedValue) || progress.selectedValue < 0) progress.selectedValue = 1;
  pairProgress().numbers = Math.round((progress.learned.length / 100) * 100);
  return progress;
}
function pairProgress() {
  if (!state.progress[pairKey()]) {
    state.progress[pairKey()] = Object.fromEntries(MODULES.map((module) => [module.id, 0]));
  }
  return state.progress[pairKey()];
}
function getAlphabetProgress() {
  if (!state.alphabetProgress || typeof state.alphabetProgress !== "object") state.alphabetProgress = {};
  const key = pairKey();
  const entries = ALPHABETS[state.target];
  if (!state.alphabetProgress[key] || typeof state.alphabetProgress[key] !== "object") {
    const legacyCount = Math.round(((Number(pairProgress().alphabet) || 0) / 100) * entries.length);
    state.alphabetProgress[key] = {
      learned: Array.from({ length: legacyCount }, (_, index) => index),
      xp: 0,
      dailyRewardDate: "",
      selectedIndex: legacyCount < entries.length ? legacyCount : 0
    };
  }
  const progress = state.alphabetProgress[key];
  if (!Array.isArray(progress.learned)) progress.learned = [];
  progress.learned = [...new Set(progress.learned.filter((index) => Number.isInteger(index) && index >= 0 && index < entries.length))].sort((a, b) => a - b);
  if (!Number.isFinite(progress.xp)) progress.xp = 0;
  if (typeof progress.dailyRewardDate !== "string") progress.dailyRewardDate = "";
  if (!Number.isInteger(progress.selectedIndex) || progress.selectedIndex < 0 || progress.selectedIndex >= entries.length) progress.selectedIndex = 0;
  if (!Number.isInteger(progress.pageIndex) || progress.pageIndex < 0) {
    progress.pageIndex = Math.floor(progress.selectedIndex / ALPHABET_PAGE_SIZE);
  }
  progress.pageIndex = Math.min(progress.pageIndex, Math.ceil(entries.length / ALPHABET_PAGE_SIZE) - 1);
  pairProgress().alphabet = Math.round((progress.learned.length / entries.length) * 100);
  return progress;
}
const FINAL_TEST_REQUIREMENTS = ["alphabet", "numbers", "vocabulary", "photo-words", "stories", "pronunciation", "quiz", "games"];
const FINAL_TEST_SECTIONS = [
  { id: "alphabet", title: "Alphabet", count: 10 },
  { id: "numbers", title: "Numbers", count: 10 },
  { id: "vocabulary", title: "Vocabulary", count: 25 },
  { id: "photo-words", title: "Photo Name", count: 10 },
  { id: "grammar", title: "Grammar", count: 20 },
  { id: "stories", title: "Stories", count: 10 },
  { id: "pronunciation", title: "Pronunciation / Listening", count: 10 },
  { id: "translation", title: "Translation", count: 5 }
];
function getFinalTestRecord(key = pairKey()) {
  if (!state.finalTests || typeof state.finalTests !== "object") state.finalTests = {};
  if (!state.finalTests[key] || typeof state.finalTests[key] !== "object") {
    state.finalTests[key] = { attempts: 0, bestScore: 0, latestScore: null, xp: 0, completedAt: "", history: [], active: null };
  }
  const record = state.finalTests[key];
  if (!Number.isFinite(record.attempts)) record.attempts = 0;
  if (!Number.isFinite(record.bestScore)) record.bestScore = 0;
  if (record.latestScore !== null && !Number.isFinite(record.latestScore)) record.latestScore = null;
  if (!Number.isFinite(record.xp)) record.xp = 0;
  if (typeof record.completedAt !== "string") record.completedAt = "";
  if (!Array.isArray(record.history)) record.history = [];
  if (record.active && (!Array.isArray(record.active.questions) || record.active.questions.length !== 100 ||
    !Array.isArray(record.active.answers) || record.active.answers.length !== 100 ||
    !Array.isArray(record.active.marked) || !Number.isInteger(record.active.index))) {
    console.error(`Discarding invalid saved Final Test attempt for ${key}.`);
    record.active = null;
    persistState();
  }
  return record;
}
function finalTestUnlockStatus() {
  const progress = pairProgress();
  const record = getFinalTestRecord();
  const completed = FINAL_TEST_REQUIREMENTS.filter((id) => (progress[id] || 0) >= 100);
  return { unlocked: completed.length === FINAL_TEST_REQUIREMENTS.length || record.attempts > 0 || Boolean(record.active), completed, total: FINAL_TEST_REQUIREMENTS.length };
}
function getPronunciationProgress() {
  if (!state.pronunciationProgress || typeof state.pronunciationProgress !== "object") state.pronunciationProgress = {};
  const key = pairKey();
  if (!state.pronunciationProgress[key] || typeof state.pronunciationProgress[key] !== "object") {
    state.pronunciationProgress[key] = { listened: [] };
  }
  const progress = state.pronunciationProgress[key];
  if (!Array.isArray(progress.listened)) progress.listened = [];
  progress.listened = [...new Set(progress.listened.filter((id) => VOCABULARY_WORDS.some((word) => word.id === id)))];
  pairProgress().pronunciation = Math.round((progress.listened.length / VOCABULARY_WORDS.length) * 100);
  return progress;
}
function todayKey() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function graphemes(value) {
  if (typeof Intl.Segmenter === "function") {
    return [...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(value)].map((segment) => segment.segment);
  }
  const result = [];
  for (const character of Array.from(value)) {
    const previous = result.length - 1;
    if (previous >= 0 && (/[\u0300-\u036f\u0900-\u0903\u093a-\u094f\u0951-\u0957\u0962-\u0963\ufe0e\ufe0f]/.test(character) || character === "\u200d" || result[previous].endsWith("\u200d"))) {
      result[previous] += character;
    } else {
      result.push(character);
    }
  }
  return result;
}
function getVocabularyProgress() {
  if (!state.vocabularyProgress || typeof state.vocabularyProgress !== "object") state.vocabularyProgress = {};
  const key = pairKey();
  if (!state.vocabularyProgress[key] || typeof state.vocabularyProgress[key] !== "object") {
    state.vocabularyProgress[key] = {
      saved: [], learned: [], practiced: [], mastered: [], correctCounts: {}, practiceCount: 0,
      xp: 0, streak: 0, lastPractice: "", dailyWords: { date: todayKey(), ids: [] }, badges: []
    };
  }
  const progress = state.vocabularyProgress[key];
  if (!progress.dailyWords || progress.dailyWords.date !== todayKey()) progress.dailyWords = { date: todayKey(), ids: [] };
  if (!Array.isArray(progress.saved)) progress.saved = [];
  if (!Array.isArray(progress.learned)) progress.learned = [];
  if (!Array.isArray(progress.practiced)) progress.practiced = [];
  if (!Number.isFinite(progress.practiceCount)) progress.practiceCount = progress.practiced.length;
  if (!Array.isArray(progress.mastered)) progress.mastered = [];
  if (!progress.correctCounts || typeof progress.correctCounts !== "object") progress.correctCounts = {};
  if (!Array.isArray(progress.badges)) progress.badges = [];
  if (!Array.isArray(progress.dailyWords.ids)) progress.dailyWords.ids = [];
  return progress;
}
function updateVocabularyBadges(progress) {
  progress.badges = progress.badges.filter((id) => id !== "master-50" && id !== "master-100");
  const achievements = [
    ["first-10", "First 10 Words", progress.learned.length >= 10],
    ["vocabulary-explorer", "Vocabulary Explorer", new Set(VOCABULARY_WORDS.filter((word) => progress.learned.includes(word.id)).map((word) => word.category)).size >= VOCABULARY_CATEGORIES.length],
    ["master-10", "10 Words Mastered", progress.mastered.length >= 10],
    ["master-25", "25 Words Mastered", progress.mastered.length >= 25]
  ];
  const earned = achievements.filter(([, , isEarned]) => isEarned).map(([id]) => id);
  const newBadges = earned.filter((id) => !progress.badges.includes(id));
  progress.badges = [...new Set([...progress.badges, ...earned])];
  return newBadges;
}
function recordVocabularyWord(word, correct = false, awardXp = false, practiceAttempt = false) {
  const progress = getVocabularyProgress();
  recordLearningDay();
  const today = todayKey();
  if (!progress.learned.includes(word.id)) progress.learned.push(word.id);
  if (practiceAttempt) {
    if (!progress.practiced.includes(word.id)) progress.practiced.push(word.id);
    progress.practiceCount += 1;
  }
  if (!progress.dailyWords.ids.includes(word.id)) progress.dailyWords.ids.push(word.id);
  if (progress.lastPractice !== today) {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;
    progress.streak = progress.lastPractice === yesterday ? progress.streak + 1 : 1;
    progress.lastPractice = today;
  }
  if (correct) {
    progress.correctCounts[word.id] = (progress.correctCounts[word.id] || 0) + 1;
    if (progress.correctCounts[word.id] >= 3 && !progress.mastered.includes(word.id)) progress.mastered.push(word.id);
  }
  if (awardXp) progress.xp += 10;
  state.level = currentCourseLevel();
  const newBadges = updateVocabularyBadges(progress);
  const courseProgress = Math.round((progress.learned.length / VOCABULARY_WORDS.length) * 100);
  pairProgress().vocabulary = Math.max(pairProgress().vocabulary || 0, courseProgress);
  return { progress, newBadges };
}
function overallProgress() {
  const progress = pairProgress();
  const scores = MODULES.filter((module) => module.id !== "progress").map((module) => progress[module.id] || 0);
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / Math.max(scores.length, 1));
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2800);
}
function courseName() { return `${LANGUAGES[state.source].name} → ${LANGUAGES[state.target].name}`; }
function languageOptions(selected) {
  return Object.entries(LANGUAGES).map(([id, language]) => `<option value="${id}" ${id === selected ? "selected" : ""}>${language.flag} ${language.name}</option>`).join("");
}
function syncProfile() {
  const profileLabel = state.name ? `Hi, ${state.name}` : "Hi, learner";
  const initial = state.name ? state.name[0].toLocaleUpperCase() : "👤";
  document.querySelector("#profile-name").textContent = profileLabel;
  document.querySelector("#profile-avatar").textContent = initial;
  document.querySelector("#mobile-avatar").textContent = initial;
  const xp = currentCourseXp();
  const xpInMilestone = xp % 500;
  const xpTrack = document.querySelector(".sidebar-xp-track");
  document.querySelector("#profile-xp").textContent = `${xp} XP`;
  document.querySelector("#profile-level").textContent = `Lv. ${Math.floor(xp / 75) + 1}`;
  document.querySelector("#profile-xp-caption").textContent = `${xpInMilestone} / 500 XP`;
  xpTrack.setAttribute("aria-valuenow", String(xpInMilestone));
  document.querySelector("#profile-xp-progress").style.width = `${Math.round((xpInMilestone / 500) * 100)}%`;
  document.querySelector("#sidebar-streak").textContent = `${currentDailyStreak()} Day Streak`;
}
function sidebarIcon(id) {
  const paths = {
    home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
    courses: '<rect x="3" y="4" width="8" height="7" rx="1.5"/><rect x="13" y="4" width="8" height="7" rx="1.5"/><rect x="3" y="13" width="8" height="7" rx="1.5"/><rect x="13" y="13" width="8" height="7" rx="1.5"/>',
    "make-plan": '<path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.3"/>',
    translate: '<circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z"/>',
    feedback: '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2v-6.2A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>',
    progress: '<path d="M4 20V11h4v9M10 20V5h4v15M16 20V8h4v12"/><path d="M3 20h18"/>',
    profile: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.1.9-1.5 2.6-1.4-.5a8 8 0 0 1-1.5.9l-.3 1.5h-3l-.3-1.5a8 8 0 0 1-1.5-.9l-1.4.5-1.5-2.6 1.1-.9a7 7 0 0 1 0-1.8l-1.1-.9 1.5-2.6 1.4.5a8 8 0 0 1 1.5-.9l.3-1.5h3l.3 1.5a8 8 0 0 1 1.5.9l1.4-.5 1.5 2.6-1.1.9a7 7 0 0 1 0 1.7Z" transform="translate(-1 -1)"/>'
  };
  return `<svg class="nav-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[id] || paths.home}</svg>`;
}
function renderNav() {
  const groups = [
    {
      title: "YOUR SPACE",
      links: [
        { id: "home", title: "Home", icon: "⌂" },
        { id: "courses", title: "Courses", icon: "▦" },
        { id: "make-plan", title: "My Journey", icon: "◇" }
      ]
    },
    {
      title: "TOOLS",
      links: [
        { id: "translate", title: "Translate", icon: "◎" },
        { id: "feedback", title: "Feedback", icon: "♡" }
      ]
    },
    {
      title: "TRACK & LEARN",
      links: [
        { id: "progress", title: "Progress", icon: "▥" },
        { id: "profile", title: "Profile", icon: "♙" },
        { id: "settings", title: "Settings", icon: "⚙" }
      ]
    }
  ];
  const journeyPages = new Set(["make-plan", "alphabet", "numbers", "vocabulary", "photo-words", "stories", "pronunciation", "quiz", "games", "final-test"]);
  document.querySelector("#main-nav").innerHTML = groups.map((group) =>
    `<section class="nav-group"><p class="sidebar-label"><span></span>${group.title}</p>${group.links.map(({ id, title }) => {
      const active = id === currentPage || id === "make-plan" && journeyPages.has(currentPage);
      return `<a class="nav-link ${active ? "active" : ""}" href="#" data-page="${id}" ${active ? 'aria-current="page"' : ""}>${sidebarIcon(id)}<span>${title}</span><span class="nav-link-arrow" aria-hidden="true">›</span></a>`;
    }).join("")}</section>`
  ).join("");
}
function moduleCards() {
  return MODULES.filter(({ id }) => id !== "progress").map((module) => {
    const finalTest = module.id === "final-test" ? getFinalTestRecord() : null;
    const score = finalTest ? finalTest.latestScore || 0 : pairProgress()[module.id] || 0;
    const lessonCount = module.lessons(state.target);
    const completedLessons = Math.round((score / 100) * lessonCount);
    const completed = finalTest ? finalTest.attempts > 0 : score >= 100;
    const unlock = module.id === "final-test" ? finalTestUnlockStatus() : null;
    const locked = Boolean(unlock && !unlock.unlocked);
    return `<button class="module-card module-card-${module.accent} ${completed ? "module-card-complete" : ""} ${locked ? "module-card-locked" : ""}" data-page="${module.id}" aria-label="${module.title}: ${locked ? "locked" : `${score}% complete, ${completedLessons} of ${lessonCount} questions`}">
      <span class="module-card-top"><span class="module-icon" aria-hidden="true">${module.icon}</span><span class="module-card-percent">${locked ? "🔒" : completed ? "✓" : `${score}%`}<small>${locked ? "Locked" : completed ? "Done" : "Complete"}</small></span></span>
      <strong>${module.title}</strong><small class="module-card-description">${locked ? "Complete every required section to unlock your comprehensive 100-question assessment." : module.description}</small>
      <span class="module-card-meta">${locked ? `${unlock.completed.length} / ${unlock.total} sections complete` : completed ? "🏆 Course completed" : finalTest?.attempts ? `Attempt ${finalTest.attempts} · Best ${finalTest.bestScore}%` : `${completedLessons} / ${lessonCount} questions`}<span>·</span>${module.duration} min</span>
      <span class="mini-track" role="progressbar" aria-valuenow="${score}" aria-valuemin="0" aria-valuemax="100" aria-label="${module.title} progress"><span style="width:${score}%"></span></span>
    </button>`;
  }).join("");
}
function pairForm() {
  return `<form class="pair-form" id="pair-form">
    <div class="field"><label for="source-language">I know</label><select id="source-language" name="source">${languageOptions(state.source)}</select></div>
    <div class="field"><label for="target-language">I want to learn</label><select id="target-language" name="target">${languageOptions(state.target)}</select></div>
    <div class="field"><label for="profile-name-input">Your Name (Optional)</label><input id="profile-name-input" name="name" maxlength="40" autocomplete="given-name" placeholder="Enter your name" value="${escapeHtml(state.name)}" /></div>
    <div class="pair-actions"><button class="button button-primary pair-submit" type="submit">Start Learning <span aria-hidden="true">→</span></button></div>
  </form>`;
}
function renderHome() {
  const progress = overallProgress();
  const position = resumePosition();
  const storyForPosition = position?.page === "stories" ? storyById(position.storyId) : null;
  const resumeLabel = position
    ? position.page === "vocabulary" && Number.isInteger(position.index)
      ? `Continue from word ${position.index + 1}`
      : position.page === "stories" && position.storyId
        ? `Continue ${position.storyStage === "read" && storyForPosition ? `reading ${storyTitle(storyForPosition)}` : "your story"}`
        : `Continue ${MODULES.find((module) => module.id === position.page)?.title || "learning"}`
    : "Start learning";
  const source = LANGUAGES[state.source];
  const target = LANGUAGES[state.target];
  const content = `<p class="page-kicker">${state.name ? `Welcome, ${escapeHtml(state.name)}! 👋` : "Welcome!"}</p>
    <section class="hero-grid">
      <div class="hero-copy">
        <h1>Build your language skills <span>one step at a time</span></h1>
        <p>${state.name ? "Build confidence one word at a time with alphabet practice, vocabulary, stories, and more." : "Continue your language-learning journey with alphabet practice, vocabulary, stories, and more."}</p>
        <button class="button button-primary hero-cta" ${position ? "data-resume" : 'data-page="alphabet"'}>${escapeHtml(resumeLabel)} <span aria-hidden="true">→</span></button>
      </div>
      <article class="course-card">
        <span class="card-kicker">Current course</span>
        <h2 class="course-title"><span><span class="course-code">${source.code}</span> ${source.name}</span><span class="course-arrow">→</span><span><span class="course-code">${target.code}</span> ${target.name}</span></h2>
        <div class="progress-meta"><span>${escapeHtml(currentCourseLevel())} · ${progress}% overall progress</span><span>⭐ ${currentCourseXp()} XP</span></div>
        <div class="progress-track" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100" aria-label="Overall course progress"><div class="progress-fill" style="width:${progress}%"></div></div>
        <button class="text-link" data-page="alphabet">Open your course →</button>
      </article>
    </section>
    <section class="dashboard-bottom">
      <div class="panel">
        <span class="card-kicker">Choose your language pair</span><h2>Start learning your way</h2>
        <p class="panel-subtitle">Choose the language you know and the one you want to learn.</p>
        ${pairForm()}
      </div>
      <div class="panel">
        <span class="card-kicker">Your next little step</span><h2>Keep your streak going</h2>
        <p class="panel-subtitle">A few minutes of practice today can take you somewhere new tomorrow.</p>
        <div class="stats-grid"><div class="stat-card"><strong>${progress}%</strong><span>course progress</span></div><div class="stat-card"><strong>${Object.values(pairProgress()).filter((score) => score > 0).length}</strong><span>lessons started</span></div><div class="stat-card"><strong>⭐ ${currentCourseXp()}</strong><span>course XP</span></div><div class="stat-card"><strong>🔥 ${currentDailyStreak()}</strong><span>day streak</span></div></div>
      </div>
    </section>
    <section class="modules-section"><div class="section-heading"><div><h2>Your Learning Journey</h2><p>Choose a skill and take your next step.</p></div><button class="button button-quiet" data-page="make-plan">Make Plan <span aria-hidden="true">→</span></button></div><div class="module-grid">${moduleCards()}</div></section>`;
  document.querySelector("#page-content").innerHTML = content;
}

function numbersForCategory(categoryId) {
  const category = NUMBER_CATEGORIES.find((item) => item.id === categoryId) || NUMBER_CATEGORIES[0];
  return category.select().map((value) => ({ value, english: numberWord(value) }));
}
function numberVocabularyEntry(number) {
  return VOCABULARY_WORDS.find((word) => word.en.toLocaleLowerCase() === number.english.toLocaleLowerCase());
}
function renderNumbers() {
  const targetLanguage = LANGUAGES[state.target];
  const sourceLanguage = LANGUAGES[state.source];
  const progress = getNumberProgress();
  const numbers = numbersForCategory(numbersCategory);
  const pageCount = Math.max(1, Math.ceil(numbers.length / NUMBER_PAGE_SIZE));
  numbersPageIndex = Math.min(numbersPageIndex, pageCount - 1);
  const start = numbersPageIndex * NUMBER_PAGE_SIZE;
  const pageNumbers = numbers.slice(start, start + NUMBER_PAGE_SIZE);
  if (!pageNumbers.some(({ value }) => value === progress.selectedValue)) {
    progress.selectedValue = pageNumbers.find(({ value }) => value >= 1 && value <= 100 && !progress.learned.includes(value))?.value
      ?? pageNumbers[0].value;
  }
  const selectedNumber = pageNumbers.find(({ value }) => value === progress.selectedValue) || pageNumbers[0];
  const selectedLearned = progress.learned.includes(selectedNumber.value);
  const dailyNumber = pageNumbers[Math.floor(Date.now() / 86400000) % pageNumbers.length];
  const filters = NUMBER_CATEGORIES.map((category) => `<button class="numbers-filter ${numbersCategory === category.id ? "active" : ""}" data-numbers-category="${category.id}" aria-pressed="${numbersCategory === category.id}">${category.label}</button>`).join("");
  const wall = pageNumbers.map((number) => {
    const learned = progress.learned.includes(number.value);
    const selected = number.value === selectedNumber.value;
    const current = number.value === dailyNumber.value;
    return `<button class="letter-bubble number-bubble ${learned ? "learned" : ""} ${current ? "current" : ""} ${selected ? "selected" : ""}" data-number-select="${number.value}" aria-label="${number.value.toLocaleString()}${learned ? ", learned" : ""}${current ? ", number of the day" : ""}" aria-pressed="${selected}">${number.value.toLocaleString()}<span aria-hidden="true">${learned ? "✓" : current ? "✦" : ""}</span></button>`;
  }).join("");
  const cards = pageNumbers.map((number, index) => {
    const isLearned = progress.learned.includes(number.value);
    const trackable = number.value >= 1 && number.value <= 100;
    const wordMapping = numberVocabularyEntry(number);
    const targetWord = wordMapping?.[state.target] || (targetLanguage.code === "EN" ? number.english : "Translating…");
    const targetExample = targetLanguage.code === "EN" ? `The number is ${number.english}.` : "Translating…";
    const sourceWord = wordMapping?.[state.source] || (sourceLanguage.code === "EN" ? number.english : "Translating…");
    const sourceExample = sourceLanguage.code === "EN" ? `The number is ${number.english}.` : "Translating…";
    const layout = ["wide", "compact", "compact", "wide", "compact", "wide", "compact", "compact"][index % 8];
    const selected = number.value === selectedNumber.value;
    return `<article class="number-card number-card-${layout} ${isLearned ? "number-card-learned" : ""} ${selected ? "number-card-selected" : ""}" data-number-card="${start + index}">
      <div class="number-card-top"><button class="number-symbol" data-number-select="${number.value}" aria-label="Explore ${number.value.toLocaleString()}" aria-pressed="${selected}">${number.value.toLocaleString()}</button><span class="number-learned-status">${isLearned ? "✓ Learned" : selected ? "✦ Selected" : ""}</span></div>
      <h2 data-number-learning-word>${escapeHtml(targetWord)}</h2>
      <p class="number-translation"><span>${sourceLanguage.flag} ${sourceLanguage.name}</span> · <strong data-number-source-word>${escapeHtml(sourceWord)}</strong></p>
      <p class="number-example"><span class="learning-language-label">${targetLanguage.flag} ${targetLanguage.name}</span> · <span data-number-learning-example>${escapeHtml(targetExample)}</span></p>
      <p class="number-example-translation"><span class="translation-language-label">${sourceLanguage.flag} ${sourceLanguage.name}</span> · <span data-number-source-example>${escapeHtml(sourceExample)}</span></p>
      <div class="number-card-actions"><button class="listen-button" data-speak="${escapeHtml(targetLanguage.code === "EN" ? `${number.value}. ${number.english}. The number is ${number.english}.` : String(number.value))}" data-number-speaker="${number.value}" data-voice="${targetLanguage.voice}">🔊 Listen</button>${trackable ? `<button class="button ${isLearned ? "button-quiet" : "button-primary"} number-learn-toggle" data-number-learn="${number.value}">${isLearned ? "Learn again" : "Mark learned"}</button>` : `<span class="number-bonus-label">Bonus number</span>`}</div>
    </article>`;
  }).join("");
  const completion = Math.round((progress.learned.length / 100) * 100);
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">${targetLanguage.flag} ${targetLanguage.name} · Counting & everyday words</p><h1 class="page-title">Numbers.</h1><p class="page-intro">Learn to count, read number words, hear pronunciation, and use numbers in everyday sentences.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header>
    <div class="numbers-filters" role="group" aria-label="Filter numbers by category">${filters}</div>
    <section class="alphabet-feature numbers-feature" aria-label="${dailyNumber.value === selectedNumber.value ? "Number of the day" : "Selected number"}">
      <div class="alphabet-feature-copy"><p class="page-kicker">${dailyNumber.value === selectedNumber.value ? "✨ NUMBER OF THE DAY" : "YOUR SELECTED NUMBER"}</p>
        <div class="alphabet-feature-main"><span class="alphabet-feature-character number-feature-value">${selectedNumber.value.toLocaleString()}</span><span class="alphabet-feature-emoji" aria-hidden="true">🔢</span></div>
        <h2 data-number-feature-word>${escapeHtml(numberVocabularyEntry(selectedNumber)?.[state.target] || (targetLanguage.code === "EN" ? selectedNumber.english : "Translating…"))}</h2>
        <p class="alphabet-feature-meaning"><span>${sourceLanguage.flag} ${sourceLanguage.name}</span> · <strong data-number-feature-source-word>${escapeHtml(numberVocabularyEntry(selectedNumber)?.[state.source] || (sourceLanguage.code === "EN" ? selectedNumber.english : "Translating…"))}</strong></p>
        <blockquote data-number-feature-example>${escapeHtml(targetLanguage.code === "EN" ? `The number is ${selectedNumber.english}.` : "Translating…")}</blockquote>
        <p class="alphabet-feature-example-translation"><span>${sourceLanguage.flag} ${sourceLanguage.name}</span> · <span data-number-feature-source-example>${escapeHtml(sourceLanguage.code === "EN" ? `The number is ${selectedNumber.english}.` : "Translating…")}</span></p>
        <div class="alphabet-feature-actions"><button class="button button-quiet alphabet-listen-button" data-speak="${escapeHtml(targetLanguage.code === "EN" ? `${selectedNumber.value}. ${selectedNumber.english}. The number is ${selectedNumber.english}.` : String(selectedNumber.value))}" data-number-feature-speaker="${selectedNumber.value}" data-voice="${targetLanguage.voice}">🔊 Hear the number</button>${selectedNumber.value >= 1 && selectedNumber.value <= 100 ? `<button class="button ${selectedLearned ? "button-quiet" : "button-primary"} number-learn-toggle" data-number-learn="${selectedNumber.value}">${selectedLearned ? "Learn again" : "Mark learned"}</button>` : `<span class="alphabet-learned-badge">Bonus number</span>`}</div>
      </div><aside class="alphabet-feature-progress"><span>YOUR NUMBERS PROGRESS</span><strong>${progress.learned.length} / 100</strong><div class="progress-track" role="progressbar" aria-valuenow="${completion}" aria-valuemin="0" aria-valuemax="100" aria-label="Numbers progress"><div class="progress-fill" style="width:${completion}%"></div></div><small>${completion}% · Number ${numbers.findIndex(({ value }) => value === selectedNumber.value) + 1} of ${numbers.length} in ${NUMBER_CATEGORIES.find(({ id }) => id === numbersCategory)?.label}</small></aside>
    </section>
    <section class="alphabet-wall-section numbers-wall-section"><div class="section-heading"><div><h2>Your Number Journey</h2><p>Choose a number to explore its word, translation, sentence, and pronunciation.</p></div></div><div class="alphabet-wall numbers-wall" aria-label="${targetLanguage.name} number progress">${wall}</div><div class="alphabet-wall-legend"><span><i class="learned"></i> Learned</span><span><i class="current"></i> Number of the day</span><span><i></i> Ready to explore</span></div></section>
    <section class="alphabet-explore-section numbers-explore-section"><div class="section-heading"><div><h2>Explore the Numbers</h2><p>${numbersCategory === "all" ? "Count from 1 to 100, one number at a time." : `Practice ${NUMBER_CATEGORIES.find(({ id }) => id === numbersCategory)?.label.toLowerCase()} at your own pace.`}</p></div><span class="numbers-page-count">${start + 1}–${Math.min(start + NUMBER_PAGE_SIZE, numbers.length)} of ${numbers.length}</span></div><div class="numbers-grid" aria-label="${targetLanguage.name} numbers">${cards}</div></section>
    <nav class="numbers-pagination" aria-label="Number pages"><button class="button button-quiet" data-numbers-page="-1" ${numbersPageIndex === 0 ? "disabled" : ""}>← Previous</button><span>${start + 1}–${Math.min(start + NUMBER_PAGE_SIZE, numbers.length)} of ${numbers.length}</span><button class="button button-primary" data-numbers-page="1" ${numbersPageIndex + 1 >= pageCount ? "disabled" : ""}>Next →</button></nav>`;
  loadNumberTranslations(pageNumbers, sourceLanguage, targetLanguage, start);
}
async function loadNumberTranslations(numbers, sourceLanguage, targetLanguage, startIndex) {
  const sourceId = sourceLanguage.code.toLowerCase();
  const targetId = targetLanguage.code.toLowerCase();
  const pair = pairKey();
  const category = numbersCategory;
  const page = numbersPageIndex;
  const isCurrentNumbersPage = () => currentPage === "numbers" && pair === pairKey() &&
    category === numbersCategory && page === numbersPageIndex;
  let nextIndex = 0;
  const worker = async () => {
    while (nextIndex < numbers.length) {
      const localIndex = nextIndex++;
      const number = numbers[localIndex];
      const englishExample = `The number is ${number.english}.`;
      const cardIndex = startIndex + localIndex;
      const wordMapping = numberVocabularyEntry(number);
      const localTargetWord = wordMapping?.[targetId];
      try {
        const targetSegments = targetId === "en"
          ? [number.english, englishExample]
          : await requestLearningTranslation(`${number.english}\n${englishExample}`, "en", targetId);
        if (!isCurrentNumbersPage()) return;
        const card = document.querySelector(`[data-number-card="${cardIndex}"]`);
        if (!card) continue;
        const learningWord = card.querySelector("[data-number-learning-word]");
        const learningExample = card.querySelector("[data-number-learning-example]");
        const speaker = card.querySelector(`[data-number-speaker="${number.value}"]`);
        const translatedWord = localTargetWord || targetSegments[0]?.trim();
        const translatedExample = targetSegments.slice(1).join("").trim();
        if (learningWord && translatedWord) learningWord.textContent = translatedWord;
        if (learningExample && translatedExample) learningExample.textContent = translatedExample;
        if (speaker && translatedWord && translatedExample) speaker.dataset.speak = `${number.value}. ${translatedWord}. ${translatedExample}`;
        if (number.value === getNumberProgress().selectedValue) {
          const featureWord = document.querySelector("[data-number-feature-word]");
          const featureExample = document.querySelector("[data-number-feature-example]");
          const featureSpeaker = document.querySelector(`[data-number-feature-speaker="${number.value}"]`);
          if (featureWord && translatedWord) featureWord.textContent = translatedWord;
          if (featureExample && translatedExample) featureExample.textContent = translatedExample;
          if (featureSpeaker && translatedWord && translatedExample) featureSpeaker.dataset.speak = `${number.value}. ${translatedWord}. ${translatedExample}`;
        }
      } catch (error) {
        console.error(`Could not translate number ${number.value} into ${targetLanguage.name}.`, error);
        if (!isCurrentNumbersPage()) return;
        const card = document.querySelector(`[data-number-card="${cardIndex}"]`);
        const word = card?.querySelector("[data-number-learning-word]");
        const example = card?.querySelector("[data-number-learning-example]");
        if (word && !localTargetWord) word.textContent = "Translation unavailable";
        if (example) example.textContent = "Translation unavailable";
        if (number.value === getNumberProgress().selectedValue) {
          const featureWord = document.querySelector("[data-number-feature-word]");
          const featureExample = document.querySelector("[data-number-feature-example]");
          if (featureWord && !localTargetWord) featureWord.textContent = "Translation unavailable";
          if (featureExample) featureExample.textContent = "Translation unavailable";
        }
      }
      if (sourceId !== "en") {
        const localSourceWord = wordMapping?.[sourceId];
        try {
          const sourceSegments = await requestLearningTranslation(`${number.english}\n${englishExample}`, "en", sourceId);
          if (!isCurrentNumbersPage()) return;
          const card = document.querySelector(`[data-number-card="${cardIndex}"]`);
          const sourceWord = card?.querySelector("[data-number-source-word]");
          const sourceExample = card?.querySelector("[data-number-source-example]");
          const translatedSourceWord = localSourceWord || sourceSegments[0]?.trim() || "Translation unavailable";
          const translatedSourceExample = sourceSegments.slice(1).join("").trim() || "Translation unavailable";
          if (sourceWord) sourceWord.textContent = translatedSourceWord;
          if (sourceExample) sourceExample.textContent = translatedSourceExample;
          if (number.value === getNumberProgress().selectedValue) {
            const featureSourceWord = document.querySelector("[data-number-feature-source-word]");
            const featureSourceExample = document.querySelector("[data-number-feature-source-example]");
            if (featureSourceWord) featureSourceWord.textContent = translatedSourceWord;
            if (featureSourceExample) featureSourceExample.textContent = translatedSourceExample;
          }
        } catch (error) {
          console.error(`Could not translate number ${number.value} into ${sourceLanguage.name}.`, error);
          if (!isCurrentNumbersPage()) return;
          const card = document.querySelector(`[data-number-card="${cardIndex}"]`);
          const word = card?.querySelector("[data-number-source-word]");
          const example = card?.querySelector("[data-number-source-example]");
          if (word && !localSourceWord) word.textContent = "Translation unavailable";
          if (example) example.textContent = "Translation unavailable";
          if (number.value === getNumberProgress().selectedValue) {
            const featureWord = document.querySelector("[data-number-feature-source-word]");
            const featureExample = document.querySelector("[data-number-feature-source-example]");
            if (featureWord && !localSourceWord) featureWord.textContent = "Translation unavailable";
            if (featureExample) featureExample.textContent = "Translation unavailable";
          }
        }
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, numbers.length) }, worker));
}

function renderAlphabet() {
  const language = LANGUAGES[state.target];
  const sourceLanguage = LANGUAGES[state.source];
  const entries = ALPHABETS[state.target];
  const progress = getAlphabetProgress();
  const nextIndex = entries.findIndex((_, index) => !progress.learned.includes(index));
  alphabetSelectedIndex = progress.selectedIndex;
  const selectedIndex = Number.isInteger(alphabetSelectedIndex) && alphabetSelectedIndex >= 0 && alphabetSelectedIndex < entries.length
    ? alphabetSelectedIndex
    : Math.max(0, nextIndex);
  alphabetSelectedIndex = selectedIndex;
  progress.selectedIndex = selectedIndex;
  const pageCount = Math.ceil(entries.length / ALPHABET_PAGE_SIZE);
  progress.pageIndex = Math.min(progress.pageIndex, pageCount - 1);
  const pageIndex = progress.pageIndex;
  const start = pageIndex * ALPHABET_PAGE_SIZE;
  const pageEntries = entries.slice(start, start + ALPHABET_PAGE_SIZE);
  const [letter, word, meaning, example] = entries[selectedIndex];
  const englishWord = state.target === "en" ? word : meaning;
  const emoji = alphabetEmoji(englishWord);
  const isLearned = progress.learned.includes(selectedIndex);
  const dailyIndex = Math.floor(Date.now() / 86400000) % entries.length;
  const dailyLetter = selectedIndex === dailyIndex;
  const dayRewardAvailable = progress.dailyRewardDate !== todayKey();
  const letterCards = pageEntries.map((entry, pageOffset) =>
    alphabetCard(entry, language, sourceLanguage, state.target === "hi", start + pageOffset, progress)
  ).join("");
  const wall = entries.map(([character], index) => {
    const learned = progress.learned.includes(index);
    const current = index === dailyIndex;
    const groupTitle = state.target === "hi" ? ({ 0: "स्वर", 13: "व्यंजन", 46: "संयुक्त अक्षर" }[index] || "") : "";
    return `${groupTitle ? `<span class="alphabet-wall-group">${groupTitle}</span>` : ""}<button class="letter-bubble ${learned ? "learned" : ""} ${current ? "current" : ""} ${selectedIndex === index ? "selected" : ""}" data-alphabet-select="${index}" aria-label="${escapeHtml(character)}${learned ? ", learned" : current ? ", letter of the day" : ", ready to learn"}" aria-pressed="${selectedIndex === index}">${escapeHtml(character)}<span aria-hidden="true">${learned ? "✓" : current ? "✦" : ""}</span></button>`;
  }).join("");
  const learnedPercent = pairProgress().alphabet;
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">${language.flag} ${language.name} · First steps</p><h1 class="page-title">Meet your alphabet.</h1><p class="page-intro">Learn ${escapeHtml(language.name)} words and examples, see their ${escapeHtml(sourceLanguage.name)} translations, and listen to the learning language.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header>
    <section class="alphabet-feature ${state.target === "hi" ? "devanagari" : ""}" aria-label="${dailyLetter ? "Letter of the day" : "Selected letter"}">
      <div class="alphabet-feature-copy"><p class="page-kicker">${dailyLetter ? "✨ LETTER OF THE DAY" : "YOUR SELECTED LETTER"}</p><div class="alphabet-feature-main"><span class="alphabet-feature-character">${escapeHtml(letter)}</span><span class="alphabet-feature-emoji" aria-hidden="true">${emoji}</span></div>
        <h2>${escapeHtml(word)}</h2><p class="alphabet-feature-sound">${language.code === "EN" ? `/${letter.toLocaleLowerCase()}/ · ` : ""}${escapeHtml(word)}</p>
        <p class="alphabet-feature-meaning"><span>${sourceLanguage.flag} ${sourceLanguage.name}</span> · <strong data-alphabet-feature-translation>${escapeHtml(knownAlphabetTranslation(entries[selectedIndex], state.source) || (state.source === state.target ? word : state.source === "en" ? meaning : "Translating…"))}</strong></p>
        <blockquote>${escapeHtml(example)}</blockquote><p class="alphabet-feature-example-translation"><span>${sourceLanguage.flag} ${sourceLanguage.name}</span> · <span data-alphabet-feature-example-translation>${escapeHtml(state.source === state.target ? example : "Translating…")}</span></p>
        <div class="alphabet-feature-actions"><button class="button button-quiet alphabet-listen-button" data-speak="${escapeHtml(`${letter}. ${word}. ${example}`)}" data-voice="${language.voice}">🔊 Hear the sound</button>${isLearned ? `<span class="alphabet-learned-badge">✓ Letter learned</span>` : `<button class="button button-primary" data-alphabet-learn="${selectedIndex}">Learn this letter · +10 XP</button>`}${selectedIndex === dailyIndex && dayRewardAvailable ? `<button class="alphabet-daily-reward" data-alphabet-daily="${selectedIndex}">⭐ Claim today’s +20 XP</button>` : ""}</div>
      </div><aside class="alphabet-feature-progress"><span>YOUR PROGRESS</span><strong>${progress.learned.length} / ${entries.length}</strong><div class="progress-track"><div class="progress-fill" style="width:${learnedPercent}%"></div></div><small>${learnedPercent}% of letters learned</small></aside>
    </section>
    <section class="alphabet-wall-section"><div class="section-heading"><div><h2>Your Letter Journey</h2><p>Every letter is ready to explore. Choose any letter to see its word, meaning, and pronunciation.</p></div></div><div class="alphabet-wall ${state.target === "hi" ? "alphabet-wall-devanagari" : ""}" aria-label="${language.name} letter progress">${wall}</div><div class="alphabet-wall-legend"><span><i class="learned"></i> Learned</span><span><i class="current"></i> Letter of the day</span><span><i></i> Ready to learn</span></div></section>
    <section class="alphabet-explore-section"><div class="section-heading"><div><h2>Explore the Alphabet</h2><p>Choose the current letter to study its word, meaning, sentence, and pronunciation.</p></div><span class="alphabet-page-count">${start + 1}–${Math.min(start + ALPHABET_PAGE_SIZE, entries.length)} of ${entries.length}</span></div><div class="alphabet-grid ${state.target === "hi" ? "alphabet-grid-devanagari" : ""}" aria-label="${language.name} alphabet words">${letterCards}</div><nav class="numbers-pagination alphabet-pagination" aria-label="Alphabet pages"><button class="button button-quiet" data-alphabet-page="-1" ${pageIndex === 0 ? "disabled" : ""}>← Previous</button><span>${start + 1}–${Math.min(start + ALPHABET_PAGE_SIZE, entries.length)} of ${entries.length}</span><button class="button button-primary" data-alphabet-page="1" ${pageIndex + 1 >= pageCount ? "disabled" : ""}>Next →</button></nav></section>`;
  loadAlphabetTranslations(pageEntries, sourceLanguage, language, start);
}

function alphabetEmoji(englishWord) {
  const images = {
    apple: "🍎", ball: "⚽", cat: "🐱", dog: "🐶", elephant: "🐘", fish: "🐟", grapes: "🍇", house: "🏠",
    "ice cream": "🍦", juice: "🧃", kite: "🪁", lion: "🦁", moon: "🌙", nest: "🪺", orange: "🍊", pencil: "✏️",
    queen: "👑", rainbow: "🌈", sun: "☀️", tree: "🌳", umbrella: "☂️", violin: "🎻", water: "💧",
    xylophone: "🎼", yellow: "🌼", zebra: "🦓", book: "📘", cafe: "☕", café: "☕", village: "🏘️",
    garden: "🌷", island: "🏝️", jacket: "🧥", lamp: "💡", horse: "🐴", rose: "🌹", table: "🪑",
    clock: "🕰️", bird: "🐦", oil: "🫒", street: "🛣️", friend: "🤝", hello: "👋", school: "🏫",
    flower: "🌸", cake: "🍰", hotel: "🏨", catfish: "🐟", car: "🚗", river: "🏞️", cheese: "🧀",
    child: "🧒", grape: "🍇", wind: "🌬️", shoe: "👟", mango: "🥭", pomegranate: "🍎", owl: "🦉",
    sugarcane: "🎋", tamarind: "🫘", exercise: "🏃", apples: "🍎"
  };
  return images[englishWord.trim().toLocaleLowerCase()] || "✨";
}

function knownAlphabetTranslation(entry, sourceId) {
  const [, word, meaning] = entry;
  const englishWord = state.target === "en" ? word : meaning;
  const vocabularyEntry = VOCABULARY_WORDS.find((item) => item.en.toLocaleLowerCase() === englishWord.toLocaleLowerCase());
  if (vocabularyEntry && typeof vocabularyEntry[sourceId] === "string") return vocabularyEntry[sourceId];
  return sourceId === "en" && state.target !== "en" ? meaning : "";
}

async function requestLearningTranslation(text, sourceId, targetId) {
  const cacheKey = `${sourceId}:${targetId}:${text}`;
  if (learningTranslationCache.has(cacheKey)) return learningTranslationCache.get(cacheKey);
  const params = new URLSearchParams({ client: "gtx", sl: sourceId, tl: targetId, dt: "t", q: text });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`, {
    headers: { Accept: "application/json" },
    credentials: "omit"
  });
  if (!response.ok) throw new Error(`Translation service returned HTTP ${response.status}.`);
  const payload = await response.json();
  const segments = Array.isArray(payload) && Array.isArray(payload[0])
    ? payload[0].filter((segment) => Array.isArray(segment) && typeof segment[0] === "string").map((segment) => segment[0])
    : [];
  if (!segments.length || !segments.join("").trim()) throw new Error("The translation service returned no translation.");
  learningTranslationCache.set(cacheKey, segments);
  return segments;
}

async function loadStoryWordTranslations(word, sourceLanguage, learningLanguage) {
  await Promise.resolve();
  const pair = `${state.source}:${state.target}`;
  const isCurrentPopup = () => currentPage === "stories" &&
    pair === `${state.source}:${state.target}` &&
    document.querySelector(`[data-story-word-speaker="${word.id}"]`);
  try {
    const targetSegments = learningLanguage.code.toLowerCase() === "en"
      ? [word.meaning, word.example]
      : await requestLearningTranslation(`${word.meaning}\n${word.example}`, "en", learningLanguage.code.toLowerCase());
    if (!isCurrentPopup()) return;
    const meaning = document.querySelector("[data-story-word-meaning]");
    const example = document.querySelector("[data-story-word-example]");
    const speaker = document.querySelector(`[data-story-word-speaker="${word.id}"]`);
    const targetExample = targetSegments.slice(1).join("").trim();
    if (meaning) meaning.textContent = targetSegments[0]?.trim() || "Translation unavailable";
    if (example) example.textContent = targetExample || "Translation unavailable";
    if (speaker && targetExample) speaker.dataset.speak = `${word[learningLanguage.code.toLowerCase()] || word.en}. ${targetExample}`;
  } catch (error) {
    console.error(`Could not translate ${learningLanguage.name} story vocabulary.`, error);
    if (!isCurrentPopup()) return;
    const meaning = document.querySelector("[data-story-word-meaning]");
    const example = document.querySelector("[data-story-word-example]");
    if (meaning) meaning.textContent = "Translation unavailable";
    if (example) example.textContent = "Translation unavailable";
  }
  if (sourceLanguage.code.toLowerCase() === "en") return;
  try {
    const sourceSegments = await requestLearningTranslation(`${word.meaning}\n${word.example}`, "en", sourceLanguage.code.toLowerCase());
    if (!isCurrentPopup()) return;
    const sourceExample = document.querySelector("[data-story-word-example-translation]");
    if (sourceExample) sourceExample.textContent = sourceSegments.slice(1).join("").trim() || "Translation unavailable";
  } catch (error) {
    console.error(`Could not translate ${sourceLanguage.name} story vocabulary.`, error);
    if (!isCurrentPopup()) return;
    const sourceExample = document.querySelector("[data-story-word-example-translation]");
    if (sourceExample) sourceExample.textContent = "Translation unavailable";
  }
}

async function loadVocabularyExamples(word, sourceLanguage, learningLanguage) {
  const sourceId = sourceLanguage.code.toLowerCase();
  const learningId = learningLanguage.code.toLowerCase();
  const pair = `${state.source}:${state.target}`;
  try {
    const targetExample = learningId === "en"
      ? word.example
      : (await requestLearningTranslation(word.example, "en", learningId)).join("").trim();
    if (currentPage !== "vocabulary" || pair !== `${state.source}:${state.target}`) return;
    const targetNode = document.querySelector(`[data-vocabulary-example="${word.id}"]`);
    const detailNode = document.querySelector(`[data-vocabulary-detail-example="${word.id}"]`);
    if (targetNode) targetNode.textContent = targetExample;
    if (detailNode) detailNode.textContent = targetExample;
    const speaker = document.querySelector(`[data-vocabulary-speak="${word.id}"]`);
    if (speaker) speaker.dataset.speak = `${word[learningId] || word.en}. ${targetExample}`;
  } catch (error) {
    console.error(`Could not translate the ${learningLanguage.name} vocabulary example.`, error);
    const targetNode = document.querySelector(`[data-vocabulary-example="${word.id}"]`);
    const detailNode = document.querySelector(`[data-vocabulary-detail-example="${word.id}"]`);
    if (currentPage === "vocabulary" && pair === `${state.source}:${state.target}`) {
      if (targetNode) targetNode.textContent = "Translation unavailable";
      if (detailNode) detailNode.textContent = "Translation unavailable";
    }
  }
  if (sourceId === "en") return;
  try {
    const sourceExample = (await requestLearningTranslation(word.example, "en", sourceId)).join("").trim();
    if (currentPage !== "vocabulary" || pair !== `${state.source}:${state.target}`) return;
    const sourceNode = document.querySelector(`[data-vocabulary-example-translation="${word.id}"]`);
    if (sourceNode) sourceNode.textContent = sourceExample;
  } catch (error) {
    console.error(`Could not translate the ${sourceLanguage.name} vocabulary example.`, error);
    const sourceNode = document.querySelector(`[data-vocabulary-example-translation="${word.id}"]`);
    if (currentPage === "vocabulary" && pair === `${state.source}:${state.target}` && sourceNode) sourceNode.textContent = "Translation unavailable";
  }
}

async function loadAlphabetTranslations(entries, sourceLanguage, learningLanguage, startIndex = 0) {
  if (sourceLanguage.code === learningLanguage.code) return;
  let nextIndex = 0;
  const pair = `${state.source}:${state.target}`;
  const workers = Array.from({ length: Math.min(4, entries.length) }, async () => {
    while (nextIndex < entries.length) {
      const index = nextIndex++;
      const [letter, word, , example] = entries[index];
      const cardIndex = startIndex + index;
      const knownWordTranslation = knownAlphabetTranslation(entries[index], sourceLanguage.code.toLowerCase());
      try {
        const segments = await requestLearningTranslation(`${word}\n${example}`, learningLanguage.code.toLowerCase(), sourceLanguage.code.toLowerCase());
        if (currentPage !== "alphabet" || pair !== `${state.source}:${state.target}`) return;
        const card = document.querySelector(`[data-alphabet-card="${cardIndex}"]`);
        if (!card) continue;
        const wordTranslation = segments[0]?.trim();
        const exampleTranslation = segments.slice(1).join("").trim();
        const wordNode = card.querySelector("[data-alphabet-word-translation]");
        const exampleNode = card.querySelector("[data-alphabet-example-translation]");
        if (wordNode && !knownWordTranslation && wordTranslation) wordNode.textContent = wordTranslation;
        if (exampleNode && exampleTranslation) exampleNode.textContent = exampleTranslation;
        if (alphabetSelectedIndex === cardIndex) {
          const featuredWord = document.querySelector("[data-alphabet-feature-translation]");
          const featuredExample = document.querySelector("[data-alphabet-feature-example-translation]");
          if (featuredWord && !knownWordTranslation && wordTranslation) featuredWord.textContent = wordTranslation;
          if (featuredExample && exampleTranslation) featuredExample.textContent = exampleTranslation;
        }
      } catch (error) {
        console.error(`Could not translate alphabet card ${letter}.`, error);
        if (currentPage !== "alphabet" || pair !== `${state.source}:${state.target}`) return;
        const card = document.querySelector(`[data-alphabet-card="${cardIndex}"]`);
        const wordNode = card?.querySelector("[data-alphabet-word-translation]");
        const exampleNode = card?.querySelector("[data-alphabet-example-translation]");
        if (wordNode && !knownWordTranslation) wordNode.textContent = "Translation unavailable";
        if (exampleNode) exampleNode.textContent = "Translation unavailable";
        if (alphabetSelectedIndex === cardIndex) {
          const featuredWord = document.querySelector("[data-alphabet-feature-translation]");
          const featuredExample = document.querySelector("[data-alphabet-feature-example-translation]");
          if (featuredWord && !knownWordTranslation) featuredWord.textContent = "Translation unavailable";
          if (featuredExample) featuredExample.textContent = "Translation unavailable";
        }
      }
    }
  });
  await Promise.all(workers);
}

function filteredPhotoWords() {
  return PHOTO_WORDS.filter((word) => photoCategory === "all" || word.category === photoCategory);
}
function photoCategoryLabel(category) {
  return PHOTO_CATEGORIES.find((item) => item.id === category)?.label || "All words";
}
function resetPractice() {
  practiceIndex = 0;
  practiceSelection = "";
  practiceChecked = false;
  practiceScore = 0;
  practiceFinished = false;
}
function renderPhotoName() {
  const words = filteredPhotoWords();
  const sourceLanguage = LANGUAGES[state.source];
  const targetLanguage = LANGUAGES[state.target];
  const categoryButtons = `<button class="photo-category ${photoCategory === "all" ? "active" : ""}" data-photo-category="all"><span>✨</span><strong>All words</strong></button>` + PHOTO_CATEGORIES.map((category) =>
    `<button class="photo-category ${photoCategory === category.id ? "active" : ""}" data-photo-category="${category.id}"><span>${category.icon}</span><strong>${category.label}</strong></button>`
  ).join("");
  let activity;
  if (photoMode === "practice") {
    activity = renderPhotoPractice(words, sourceLanguage, targetLanguage);
  } else {
    const index = photoIndex % words.length;
    const word = words[index];
    activity = `<section class="photo-learning-card">
      <div class="photo-learning-picture" role="img" aria-label="${photoCategoryLabel(word.category)} picture">${word.image}</div>
      <span class="photo-word-category">${PHOTO_CATEGORIES.find((category) => category.id === word.category).icon} ${photoCategoryLabel(word.category)}</span>
      <div class="photo-word-pair"><strong>${escapeHtml(word.words[state.target])}</strong><span class="photo-word-arrow">·</span><span class="photo-source-word">${escapeHtml(word.words[state.source])}</span></div>
      <div class="photo-translation-label"><span class="learning-language-label">${targetLanguage.flag} ${targetLanguage.name}</span> · <span class="translation-language-label">${sourceLanguage.flag} ${sourceLanguage.name}</span></div>
      <button class="listen-button photo-listen" data-speak="${escapeHtml(word.words[state.target])}" data-voice="${targetLanguage.voice}">◖ Listen</button>
      <div class="photo-card-controls"><button class="button button-quiet" data-photo-step="-1" ${words.length < 2 ? "disabled" : ""}>← Previous</button><span>${index + 1} / ${words.length}</span><button class="button button-dark" data-photo-step="1" ${words.length < 2 ? "disabled" : ""}>Next →</button></div>
    </section>`;
  }
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">Learn by seeing · ${targetLanguage.flag} ${targetLanguage.name}</p><h1 class="page-title">Photo Name</h1><p class="page-intro">See it, name it, remember it. Learn everyday words with picture prompts and audio.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header>
    <div class="photo-mode-bar"><div class="photo-mode-tabs"><button class="photo-mode-tab ${photoMode === "learn" ? "active" : ""}" data-photo-mode="learn">🖼️ Learn words</button><button class="photo-mode-tab ${photoMode === "practice" ? "active" : ""}" data-photo-mode="practice">🎯 Practice mode</button></div><span>${photoMode === "learn" ? "Picture · word · pronunciation" : "Choose the right word for each picture"}</span></div>
    <section class="photo-categories"><div class="section-heading"><div><h2>📚 Photo Name Categories</h2><p>Choose a collection or browse every word.</p></div></div><div class="photo-category-grid">${categoryButtons}</div></section>
    ${activity}`;
}
function renderPhotoPractice(words, sourceLanguage, targetLanguage) {
  if (practiceFinished) {
    return `<section class="photo-practice-card photo-practice-result"><span class="practice-picture">🎉</span><p class="page-kicker">Practice complete</p><h2>Nice work!</h2><p>You got <strong>${practiceScore} out of ${Math.min(10, words.length)}</strong> picture names right in ${targetLanguage.name}.</p><button class="button button-primary" data-practice-restart>Practice again <span aria-hidden="true">→</span></button></section>`;
  }
  const rounds = Math.min(10, words.length);
  const word = words[practiceIndex % words.length];
  const correctAnswer = word.words[state.target];
  const distractors = [...new Set(PHOTO_WORDS.map((entry) => entry.words[state.target]))].filter((answer) => answer !== correctAnswer);
  const firstDistractor = (practiceIndex * 3) % distractors.length;
  const choices = [correctAnswer, ...Array.from({ length: 3 }, (_, index) => distractors[(firstDistractor + index) % distractors.length])];
  const rotatedChoices = choices.map((_, index) => choices[(index + practiceIndex) % choices.length]);
  return `<section class="photo-practice-card">
    <div class="practice-progress"><span>Question ${practiceIndex + 1} of ${rounds}</span><span>⭐ ${practiceScore} correct</span></div>
    <div class="photo-practice-picture" role="img" aria-label="${photoCategoryLabel(word.category)} picture">${word.image}</div>
    <h2>What is this?</h2>
    <p class="photo-practice-pair">${sourceLanguage.flag} ${sourceLanguage.name} → ${targetLanguage.flag} ${targetLanguage.name}</p>
    <div class="practice-options" role="radiogroup" aria-label="Choose the picture name">${rotatedChoices.map((answer) => {
      const isCorrect = practiceChecked && answer === correctAnswer;
      const isWrong = practiceChecked && answer === practiceSelection && answer !== correctAnswer;
      return `<button class="practice-option ${practiceSelection === answer ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" role="radio" aria-checked="${practiceSelection === answer}" data-practice-option="${escapeHtml(answer)}" ${practiceChecked ? "disabled" : ""}><span class="radio-dot"></span>${escapeHtml(answer)}${isCorrect ? `<span class="answer-mark">✓</span>` : ""}${isWrong ? `<span class="answer-mark">×</span>` : ""}</button>`;
    }).join("")}</div>
    ${practiceChecked ? `<p class="practice-feedback ${practiceSelection === correctAnswer ? "feedback-correct" : "feedback-wrong"}">${practiceSelection === correctAnswer ? "That's right! Great job." : `Not quite — ${escapeHtml(correctAnswer)} is the right answer.`}</p>` : ""}
    <button class="button button-primary practice-check" ${practiceChecked ? "data-practice-next" : "data-practice-check"}>${practiceChecked ? (practiceIndex + 1 === rounds ? "See results" : "Next question") : "Check Answer"} <span aria-hidden="true">→</span></button>
  </section>`;
}

function renderVocabulary() {
  const source = LANGUAGES[state.source];
  const target = LANGUAGES[state.target];
  const progress = getVocabularyProgress();
  const learnedToday = progress.dailyWords.ids.length;
  const goal = 20;
  const badges = [
    ["first-10", "🏅", "First 10 Words", progress.learned.length >= 10],
    ["vocabulary-explorer", "🧭", "Vocabulary Explorer", progress.badges.includes("vocabulary-explorer")],
    ["master-10", "🌟", "10 Words Mastered", progress.badges.includes("master-10")],
    ["master-25", "🏆", "25 Words Mastered", progress.badges.includes("master-25")]
  ];
  const gameTabs = [
    ["cards", "📖 Word cards"], ["picture", "🖼️ Picture quiz"], ["spelling", "🔤 Spelling"],
    ["matching", "🔗 Matching"]
  ];
  const categoryTabs = `<button class="vocabulary-filter ${vocabularyCategory === "all" ? "active" : ""}" data-vocabulary-category="all">✨ All</button>
    <button class="vocabulary-filter ${vocabularyCategory === "saved" ? "active" : ""}" data-vocabulary-category="saved">❤️ Saved</button>
    ${VOCABULARY_CATEGORIES.map((category) => `<button class="vocabulary-filter ${vocabularyCategory === category.id ? "active" : ""}" data-vocabulary-category="${category.id}">${category.icon} ${category.title}</button>`).join("")}`;
  const levels = [["all", "All levels"], ["beginner", "🌱 Beginner"], ["intermediate", "🌿 Intermediate"], ["advanced", "🌳 Advanced"]];
  const levelTabs = levels.map(([id, label]) => `<button class="vocabulary-level-tab ${vocabularyLevel === id ? "active" : ""}" data-vocabulary-level="${id}">${label}</button>`).join("");
  const filtered = filteredVocabularyWords();
  let activity = `<section class="vocabulary-empty"><span>📚</span><h2>No words here yet</h2><p>Try another category or level to keep learning.</p></section>`;
  if (filtered.length) {
    activity = vocabularyGame === "cards" ? renderVocabularyCard(filtered, progress, source, target) : renderVocabularyGame(filtered, source, target);
  }
  const learnedPercent = Math.round((progress.learned.length / VOCABULARY_WORDS.length) * 100);
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">${target.flag} ${target.name} · Build your word bank</p><h1 class="page-title">Vocabulary.</h1><p class="page-intro">Learn a new word, hear how it sounds, and practice until it sticks.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header>
    <section class="vocabulary-stats" aria-label="Vocabulary daily goal and rewards">
      <article class="vocabulary-goal-card"><div class="vocabulary-stat-heading"><span class="card-kicker">Today's goal</span><strong>${learnedToday} / ${goal} words</strong></div><div class="progress-track" role="progressbar" aria-valuenow="${Math.min(learnedToday, goal)}" aria-valuemin="0" aria-valuemax="${goal}" aria-label="Daily vocabulary goal"><div class="progress-fill" style="width:${Math.min(100, learnedToday / goal * 100)}%"></div></div><span class="vocabulary-goal-caption">${learnedToday >= goal ? "Daily goal reached—wonderful work!" : `${goal - learnedToday} more new words to reach your goal`}</span></article>
      <article class="vocabulary-stat-card"><span>🔥</span><strong>${progress.streak}</strong><small>Day streak</small></article>
      <article class="vocabulary-stat-card"><span>⭐</span><strong>${progress.xp}</strong><small>Total XP</small></article>
    </section>
    <section class="vocabulary-progress-panel"><div class="vocabulary-progress-copy"><span class="card-kicker">Your progress · ${escapeHtml(courseName())}</span><strong>${progress.learned.length} learned <span>·</span> ${progress.practiceCount} practiced <span>·</span> ${progress.mastered.length} mastered</strong></div><div class="progress-track"><div class="progress-fill" style="width:${learnedPercent}%"></div></div><span class="vocabulary-progress-percent">${learnedPercent}% of ${VOCABULARY_WORDS.length} words learned</span></section>
    <section class="vocabulary-badges"><div class="section-heading"><div><h2>🏆 Your rewards</h2><p>Keep learning to unlock vocabulary badges.</p></div></div><div class="badge-grid">${badges.map(([, icon, title, earned]) => `<div class="badge-card ${earned ? "earned" : ""}"><span>${icon}</span><strong>${title}</strong><small>${earned ? "Earned" : "Keep practicing"}</small></div>`).join("")}</div></section>
    <section class="vocabulary-practice"><div class="section-heading"><div><h2>Choose how to practice</h2><p>Explore categories, learn new words, or play a quick game.</p></div></div>
      <div class="vocabulary-game-tabs" role="tablist" aria-label="Vocabulary activities">${gameTabs.map(([id, label]) => `<button class="vocabulary-game-tab ${vocabularyGame === id ? "active" : ""}" role="tab" aria-selected="${vocabularyGame === id}" data-vocabulary-game="${id}">${label}</button>`).join("")}</div>
      <div class="vocabulary-filter-label">CATEGORIES</div><div class="vocabulary-category-tabs">${categoryTabs}</div>
      <div class="vocabulary-level-tabs" aria-label="Difficulty level">${levelTabs}</div>
      ${activity}
    </section>`;
}
function filteredVocabularyWords() {
  return VOCABULARY_WORDS.filter((word) =>
    (vocabularyCategory === "all" || (vocabularyCategory === "saved"
      ? getVocabularyProgress().saved.includes(word.id)
      : word.category === vocabularyCategory)) &&
    (vocabularyLevel === "all" || word.level === vocabularyLevel)
  );
}
function saveVocabularyMutation(action) {
  const oldVocabulary = JSON.stringify(state.vocabularyProgress);
  const oldProgress = JSON.stringify(state.progress);
  const result = action();
  if (!persistState()) {
    state.vocabularyProgress = JSON.parse(oldVocabulary);
    state.progress = JSON.parse(oldProgress);
    return false;
  }
  if (result?.newBadges?.length) showToast(`Badge earned: ${result.newBadges.map((id) => ({ "first-10":"First 10 Words", "vocabulary-explorer":"Vocabulary Explorer", "master-10":"10 Words Mastered", "master-25":"25 Words Mastered" })[id]).join(", ")}!`);
  return true;
}
function renderVocabularyCard(words, progress, source, target) {
  const index = vocabularyIndex % words.length;
  const word = words[index];
  const category = VOCABULARY_CATEGORIES.find((item) => item.id === word.category);
  const levelIcon = { beginner: "🌱", intermediate: "🌿", advanced: "🌳" }[word.level];
  const isSaved = progress.saved.includes(word.id);
  const markup = `<article class="vocabulary-flashcard">
    <div class="vocabulary-card-topline"><span>${category.icon} ${category.title} · ${levelIcon} ${word.level}</span><span>${index + 1} / ${words.length}</span></div>
    <div class="vocabulary-card-image" role="img" aria-label="${escapeHtml(word.en)}">${word.image}</div>
    <div class="vocabulary-card-words"><strong>${escapeHtml(word[target.code.toLowerCase()] || word.en)}</strong><span class="photo-word-arrow">·</span><span class="vocabulary-source-word">${escapeHtml(word[source.code.toLowerCase()] || word.en)}</span></div>
    <p class="vocabulary-example vocabulary-target-example"><span class="learning-language-label">${target.flag} ${target.name}</span> · “<span data-vocabulary-example="${word.id}">${target.code.toLowerCase() === "en" ? escapeHtml(word.example) : "Translating…"}</span>”</p>
    <p class="vocabulary-example-translation"><span class="translation-language-label">${source.flag} ${source.name}</span> · <span data-vocabulary-example-translation="${word.id}">${source.code.toLowerCase() === "en" && target.code.toLowerCase() !== "en" ? escapeHtml(word.example) : "Translating…"}</span></p>
    <div class="vocabulary-card-actions"><button class="button button-quiet" data-vocabulary-previous ${words.length < 2 ? "disabled" : ""}>← Previous</button><button class="button button-quiet" data-speak="${escapeHtml(word[target.code.toLowerCase()] || word.en)}" data-vocabulary-speak="${word.id}" data-voice="${target.voice}">🔊 Listen</button><button class="button button-quiet ${isSaved ? "saved" : ""}" data-vocabulary-save="${word.id}">${isSaved ? "♥ Saved" : "♡ Save"}</button><button class="button button-primary" data-vocabulary-next>Next ➜</button></div>
    <button class="text-link vocabulary-more-toggle" data-vocabulary-more>${vocabularyShowMore ? "Hide details ↑" : "Show More ↓"}</button>
    ${vocabularyShowMore ? `<div class="vocabulary-word-details"><div><span>Word · ${target.name}</span><strong>${escapeHtml(word[target.code.toLowerCase()] || word.en)}</strong></div><div><span>Translation · ${source.name}</span><strong>${escapeHtml(word[source.code.toLowerCase()] || word.en)}</strong></div><div><span>Meaning</span><strong>${escapeHtml(word.meaning)}</strong></div><div><span>Example sentence · ${target.name}</span><strong data-vocabulary-detail-example="${word.id}">${target.code.toLowerCase() === "en" ? escapeHtml(word.example) : "Translating…"}</strong></div><div><span>Part of speech</span><strong>${word.part}</strong></div><div><span>Picture & pronunciation</span><strong>${word.image} · ${target.name} (${target.voice})</strong></div><button class="listen-button" data-speak="${escapeHtml(word[target.code.toLowerCase()] || word.en)}" data-voice="${target.voice}">🔊 Listen to pronunciation</button></div>` : ""}
  </article>`;
  loadVocabularyExamples(word, source, target);
  return markup;
}
function vocabularyGameWords(words) {
  if (words.length >= 4) return words;
  const ids = new Set(words.map((word) => word.id));
  return [...words, ...VOCABULARY_WORDS.filter((word) => !ids.has(word.id))];
}
function renderVocabularyGame(words, source, target) {
  const pool = vocabularyGameWords(words);
  const word = pool[vocabularyIndex % pool.length];
  if (vocabularyGame === "matching") return renderVocabularyMatching(pool, source, target);
  const options = getVocabularyChoices(pool, word, vocabularyIndex);
  let prompt;
  if (vocabularyGame === "spelling") {
    const answer = word[target.code.toLowerCase()] || word.en;
    const letters = graphemes(answer.toLocaleUpperCase());
    const blankIndex = Math.max(0, Math.floor(letters.length / 2));
    vocabularySpellingMissing = letters[blankIndex];
    letters[blankIndex] = "_";
    prompt = `<div class="vocabulary-game-picture">${word.image}</div><p class="vocabulary-game-hint">${escapeHtml(word[source.code.toLowerCase()] || word.en)} · ${escapeHtml(word.meaning)}</p><div class="spelling-word" aria-label="Spell ${escapeHtml(answer)}">${letters.map((letter) => `<span>${letter}</span>`).join("")}</div><label class="vocabulary-answer-label" for="spelling-answer">Type the missing letter</label><input class="vocabulary-answer-input" id="spelling-answer" data-vocabulary-input maxlength="8" autocomplete="off" autocapitalize="off" spellcheck="false" value="${escapeHtml(vocabularySelectedAnswer)}" ${vocabularyChecked ? "disabled" : ""} />`;
  } else {
    prompt = `<div class="vocabulary-game-picture">${word.image}</div><p class="vocabulary-game-hint">${source.flag} ${source.name} → ${target.flag} ${target.name}</p><h2 class="vocabulary-question">What is this?</h2>`;
  }
  const choiceAnswers = options.map((option) => option[target.code.toLowerCase()] || option.en);
  return `<article class="vocabulary-game-card" data-game-kind="${vocabularyGame}">
    <div class="vocabulary-game-progress"><span>${vocabularyGame === "spelling" ? "SPELLING GAME" : "PICTURE → WORD"} · ${escapeHtml(target.name)}</span><span>⭐ ${getVocabularyProgress().xp} XP</span></div>
    ${prompt}
    ${vocabularyGame === "spelling" ? "" : `<div class="vocabulary-game-options">${choiceAnswers.map((answer) => {
      const correctOption = word[target.code.toLowerCase()] || word.en;
      const isCorrect = vocabularyChecked && answer.toLocaleLowerCase() === correctOption.toLocaleLowerCase();
      const isWrong = vocabularyChecked && vocabularySelectedAnswer === answer && !isCorrect;
      return `<button class="vocabulary-game-option ${vocabularySelectedAnswer === answer ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" data-vocabulary-choice="${escapeHtml(answer)}" ${vocabularyChecked ? "disabled" : ""}>${escapeHtml(answer)}${isCorrect ? `<b>✓</b>` : ""}</button>`;
    }).join("")}</div>`}
    ${vocabularyChecked ? `<p class="practice-feedback ${vocabularyFeedback.startsWith("Correct") ? "feedback-correct" : "feedback-wrong"}">${escapeHtml(vocabularyFeedback)}</p>` : ""}
    <button class="button button-primary vocabulary-game-check" ${vocabularyChecked ? "data-vocabulary-next-question" : "data-vocabulary-check"}>${vocabularyChecked ? "Next word ➜" : "Check Answer →"}</button>
  </article>`;
}
function getVocabularyChoices(pool, correctWord, seed) {
  const candidates = pool.filter((word) => word.id !== correctWord.id);
  const selected = [];
  for (let index = 0; index < 3; index += 1) selected.push(candidates[(seed * 3 + index * 7) % candidates.length]);
  const unique = [...new Map(selected.map((word) => [word.id, word])).values()];
  const fillers = candidates.filter((word) => !unique.some((item) => item.id === word.id));
  while (unique.length < 3) unique.push(fillers.shift());
  const choices = [correctWord, ...unique.slice(0, 3)];
  return choices.map((_, index) => choices[(index + seed) % choices.length]);
}
function resetVocabularyRound() {
  vocabularyIndex = 0;
  vocabularySelectedAnswer = "";
  vocabularyChecked = false;
  vocabularyFeedback = "";
  vocabularyMatchLeft = "";
  vocabularyMatched = [];
  vocabularyMatchWords = [];
  vocabularySpellingMissing = "";
}
function renderVocabularyMatching(pool, source, target) {
  if (!vocabularyMatchWords.length) {
    const start = (vocabularyIndex * 4) % pool.length;
    vocabularyMatchWords = Array.from({ length: 4 }, (_, index) => pool[(start + index) % pool.length]);
  }
  const remaining = vocabularyMatchWords.filter((word) => !vocabularyMatched.includes(word.id));
  return `<article class="vocabulary-game-card matching-card">
    <div class="vocabulary-game-progress"><span>MATCH THE WORDS</span><span>⭐ ${getVocabularyProgress().xp} XP</span></div>
    <p class="vocabulary-game-hint">${source.flag} ${source.name} ↔ ${target.flag} ${target.name} · Match each picture to its translation.</p>
    <div class="matching-columns"><div class="matching-column"><h3>PICTURES</h3>${remaining.map((word) => `<button class="matching-option ${vocabularyMatchLeft === word.id ? "selected" : ""}" data-match-left="${word.id}"><span>${word.image}</span><strong>${escapeHtml(word[source.code.toLowerCase()] || word.en)}</strong></button>`).join("")}</div>
    <div class="matching-column"><h3>WORDS</h3>${remaining.map((word, index) => {
      const shuffled = remaining[(index + 1) % remaining.length];
      return `<button class="matching-option" data-match-right="${shuffled.id}"><strong>${escapeHtml(shuffled[target.code.toLowerCase()] || shuffled.en)}</strong><span>↔</span></button>`;
    }).join("")}</div></div>
    <p class="practice-feedback ${vocabularyFeedback.startsWith("Correct") ? "feedback-correct" : "feedback-wrong"}">${vocabularyFeedback || `${vocabularyMatched.length} / ${vocabularyMatchWords.length} pairs matched`}</p>
    <button class="button button-primary vocabulary-game-check" data-match-next ${remaining.length ? "disabled" : ""}>${remaining.length ? "Match all pairs to continue" : "Next matching round →"}</button>
  </article>`;
}

function renderMakePlan() {
  const target = LANGUAGES[state.target];
  const nextModule = MODULES.filter(({ id }) => id !== "progress").find((module) => (pairProgress()[module.id] || 0) < 100);
  const todayModule = nextModule || MODULES.find((module) => module.id === "vocabulary");
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">Your learning path · ${target.flag} ${target.name}</p><h1 class="page-title">Your Learning Plan.</h1><p class="page-intro">A small, focused step can build a lasting learning habit.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header>
    <section class="learning-plan-summary"><div class="learning-plan-today"><span class="card-kicker">Today's lesson</span><h2>${todayModule.icon} ${todayModule.title}</h2><p>${todayModule.description} · about ${todayModule.duration} minutes</p><button class="button button-primary" data-page="${todayModule.id}">Start today's lesson →</button></div><div class="learning-plan-stats"><article><span>Recommended next</span><strong>${todayModule.title}</strong></article><article><span>Daily goal</span><strong>1 activity · 15 min</strong></article><article><span>Current streak</span><strong>🔥 ${currentDailyStreak()} days</strong></article></div></section>
    <section class="modules-section make-plan-section"><div class="section-heading"><div><h2>Choose a learning activity</h2><p>Pick a step and learn at your own pace.</p></div></div><div class="module-grid">${moduleCards()}</div></section>`;
}
function alphabetCard(entry, language, sourceLanguage, devanagari, index, progress) {
  const [letter, word, meaning, example] = entry;
  const knownWordTranslation = knownAlphabetTranslation(entry, sourceLanguage.code.toLowerCase());
  const translationText = sourceLanguage.code.toLowerCase() === "en" && language.code.toLowerCase() !== "en" ? meaning : knownWordTranslation || "Translating…";
  const isLearned = progress.learned.includes(index);
  const isCurrent = index === Math.floor(Date.now() / 86400000) % ALPHABETS[state.target].length;
  const emoji = alphabetEmoji(language.code === "EN" ? word : meaning);
  const layout = ["wide", "compact", "compact", "wide", "compact", "wide", "compact", "compact"][index % 8];
  return `<article class="letter-card letter-card-${layout} ${isLearned ? "learned" : ""} ${isCurrent ? "current" : ""} ${devanagari ? "devanagari" : ""}" data-alphabet-card="${index}">
    <button class="letter-card-select" data-alphabet-select="${index}" aria-label="Study ${escapeHtml(letter)} — ${escapeHtml(word)}">
      <span class="letter-card-symbol ${devanagari ? "devanagari" : ""}">${escapeHtml(letter)}</span><span class="letter-card-emoji" aria-hidden="true">${emoji}</span><strong class="letter-word">${escapeHtml(word)}</strong>
      <span class="letter-meaning"><span data-alphabet-word-translation>${escapeHtml(translationText)}</span></span>
      <span class="letter-example">${escapeHtml(example)}</span><span class="letter-example-translation"><span data-alphabet-example-translation class="translation-loading">Translating…</span></span>
      <span class="letter-card-status">${isLearned ? "✓ Learned" : isCurrent ? "✦ Letter of the day" : "Ready to learn"}</span>
    </button>
  </article>`;
}

function handleAlphabetClick(event) {
  const page = event.target.closest("[data-alphabet-page]");
  if (page) {
    const entries = ALPHABETS[state.target];
    const progress = getAlphabetProgress();
    const pageCount = Math.ceil(entries.length / ALPHABET_PAGE_SIZE);
    const nextPage = progress.pageIndex + Number(page.dataset.alphabetPage);
    if (!Number.isInteger(nextPage) || nextPage < 0 || nextPage >= pageCount) return true;
    const previousState = JSON.stringify(state);
    progress.pageIndex = nextPage;
    progress.selectedIndex = nextPage * ALPHABET_PAGE_SIZE;
    alphabetSelectedIndex = progress.selectedIndex;
    if (persistState()) render();
    else {
      state = JSON.parse(previousState);
      alphabetSelectedIndex = getAlphabetProgress().selectedIndex;
    }
    return true;
  }
  const selectedLetter = event.target.closest("[data-alphabet-select]");
  if (selectedLetter) {
    const index = Number(selectedLetter.dataset.alphabetSelect);
    const entries = ALPHABETS[state.target];
    const progress = getAlphabetProgress();
    if (!Number.isInteger(index) || !entries[index]) {
      showToast("That letter could not be opened.");
      return true;
    }
    const previousState = JSON.stringify(state);
    alphabetSelectedIndex = index;
    progress.selectedIndex = index;
    progress.pageIndex = Math.floor(index / ALPHABET_PAGE_SIZE);
    if (!persistState()) {
      state = JSON.parse(previousState);
      alphabetSelectedIndex = getAlphabetProgress().selectedIndex;
      return true;
    }
    render();
    document.querySelector(".alphabet-feature")?.scrollIntoView({ behavior: "smooth", block: "center" });
    return true;
  }
  const learnButton = event.target.closest("[data-alphabet-learn]");
  if (learnButton) {
    const index = Number(learnButton.dataset.alphabetLearn);
    const entries = ALPHABETS[state.target];
    const progress = getAlphabetProgress();
    if (!Number.isInteger(index) || !entries[index]) {
      showToast("That letter could not be learned.");
      return true;
    }
    if (progress.learned.includes(index)) {
      showToast(`Letter ${entries[index][0]} is already learned.`);
      return true;
    }
    const previousState = JSON.stringify(state);
    progress.learned.push(index);
    progress.xp += 10;
    recordLearningDay();
    alphabetSelectedIndex = index;
    progress.selectedIndex = alphabetSelectedIndex;
    progress.pageIndex = Math.floor(index / ALPHABET_PAGE_SIZE);
    pairProgress().alphabet = Math.round((progress.learned.length / entries.length) * 100);
    if (persistState()) {
      render();
      showToast(`Letter ${entries[index][0]} learned! +10 XP`);
    } else {
      state = JSON.parse(previousState);
      alphabetSelectedIndex = getAlphabetProgress().selectedIndex;
    }
    return true;
  }
  const dailyButton = event.target.closest("[data-alphabet-daily]");
  if (dailyButton) {
    const index = Number(dailyButton.dataset.alphabetDaily);
    const entries = ALPHABETS[state.target];
    const progress = getAlphabetProgress();
    if (progress.dailyRewardDate === todayKey()) {
      showToast("You have already claimed today’s letter reward.");
      return true;
    }
    const dailyIndex = Math.floor(Date.now() / 86400000) % entries.length;
    if (!Number.isInteger(index) || index !== dailyIndex) {
      showToast("The daily letter reward is available for the letter of the day.");
      return true;
    }
    const previousState = JSON.stringify(state);
    if (!progress.learned.includes(index)) progress.learned.push(index);
    progress.xp += 20;
    progress.dailyRewardDate = todayKey();
    recordLearningDay();
    alphabetSelectedIndex = index;
    progress.selectedIndex = alphabetSelectedIndex;
    progress.pageIndex = Math.floor(index / ALPHABET_PAGE_SIZE);
    pairProgress().alphabet = Math.round((progress.learned.length / entries.length) * 100);
    if (persistState()) {
      render();
      showToast(`Daily letter learned! +20 XP`);
    } else {
      state = JSON.parse(previousState);
      alphabetSelectedIndex = getAlphabetProgress().selectedIndex;
    }
    return true;
  }
  return false;
}

const LESSONS = {
  vocabulary: { heading: "Words for your everyday", intro: "Start with useful words you can take into real conversations.", action: "Practice these words" },
  "photo-words": { heading: "Words you can picture", intro: "Connect the things around you with the words that describe them.", action: "Explore photo words" },
};
const QUIZ_DIFFICULTIES = [
  { id: "beginner", title: "Beginner", icon: "🌱", description: "Basic words & pictures" },
  { id: "intermediate", title: "Intermediate", icon: "🌿", description: "Translations & listening" },
  { id: "advanced", title: "Advanced", icon: "🌳", description: "Longer words & challenge prompts" }
];
const QUIZ_TYPES = ["picture", "listening", "translation", "spelling"];
const CENTER_GAMES = [
  { id: "photo-match", title: "Photo Match", icon: "🖼️", description: "Match the picture with the word", difficulty: "Easy", xp: 10 },
  { id: "word-scramble", title: "Word Scramble", icon: "🔤", description: "Arrange letters to make a word", difficulty: "Easy", xp: 15 },
  { id: "listen-choose", title: "Listen & Choose", icon: "🔊", description: "Listen and select the correct word", difficulty: "Medium", xp: 20 },
  { id: "word-match", title: "Word Match", icon: "🧩", description: "Match words with their pictures", difficulty: "Medium", xp: 20 },
  { id: "speed-challenge", title: "Speed Challenge", icon: "⚡", description: "Answer as many as you can in 60 seconds", difficulty: "Hard", xp: 10 },
  { id: "memory-match", title: "Memory Match", icon: "🏆", description: "Flip cards to find matching pairs", difficulty: "Medium", xp: 15 }
];
const STORY_WORDS = {
  apple: ["🍎", "Apple", "Apfel", "Pomme", "Manzana", "सेब", "A crisp, sweet fruit."],
  dog: ["🐶", "Dog", "Hund", "Chien", "Perro", "कुत्ता", "A friendly animal that many people keep at home."],
  house: ["🏠", "House", "Haus", "Maison", "Casa", "घर", "A building where people live."],
  park: ["🌳", "Park", "Park", "Parc", "Parque", "पार्क", "A public green place to walk and play."],
  market: ["🛒", "Market", "Markt", "Marché", "Mercado", "बाज़ार", "A place where people buy and sell things."],
  friend: ["🧑‍🤝‍🧑", "Friend", "Freund", "Ami", "Amigo", "दोस्त", "A person you like and know well."],
  horse: ["🐴", "Horse", "Pferd", "Cheval", "Caballo", "घोड़ा", "A large animal that people can ride."],
  bicycle: ["🚲", "Bicycle", "Fahrrad", "Vélo", "Bicicleta", "साइकिल", "A vehicle with two wheels that you pedal."],
  street: ["🛣️", "Street", "Straße", "Rue", "Calle", "सड़क", "A road in a town or city."],
  neighbor: ["🏡", "Neighbor", "Nachbar", "Voisin", "Vecino", "पड़ोसी", "A person who lives near you."],
  garden: ["🌷", "Garden", "Garten", "Jardin", "Jardín", "बगीचा", "A place where flowers and plants grow."],
  water: ["💧", "Water", "Wasser", "Eau", "Agua", "पानी", "The clear liquid we drink every day."],
  cat: ["🐱", "Cat", "Katze", "Chat", "Gato", "बिल्ली", "A small animal often kept as a pet."],
  bird: ["🐦", "Bird", "Vogel", "Oiseau", "Pájaro", "चिड़िया", "An animal with feathers and wings."],
  teacher: ["🧑‍🏫", "Teacher", "Lehrer", "Professeur", "Maestro", "शिक्षक", "A person who helps students learn."]
};
function storyPage(en, de, fr, es, hi, word = "") {
  return { text: { en, de, fr, es, hi }, word };
}
const STORY_ADVENTURES = [
  {
    id: "lost-dog", title: "The Lost Dog", titles: { en:"The Lost Dog", de:"Der verlorene Hund", fr:"Le chien perdu", es:"El perro perdido", hi:"खोया हुआ कुत्ता" }, icon: "🐶", level: "Beginner", xp: 10, words: ["dog", "park", "house"],
    pages: [
      storyPage("Mia sees a little dog.", "Mia sieht einen kleinen Hund.", "Mia voit un petit chien.", "Mia ve un perro pequeño.", "मिया एक छोटा कुत्ता देखती है।", "dog"),
      storyPage("The dog is alone in the park.", "Der Hund ist allein im Park.", "Le chien est seul dans le parc.", "El perro está solo en el parque.", "कुत्ता पार्क में अकेला है।", "park"),
      storyPage("Mia reads the dog's name: Pip.", "Mia liest den Namen des Hundes: Pip.", "Mia lit le nom du chien : Pip.", "Mia lee el nombre del perro: Pip.", "मिया कुत्ते का नाम पढ़ती है: पिप।", "dog"),
      storyPage("Pip walks with Mia to a blue house.", "Pip geht mit Mia zu einem blauen Haus.", "Pip marche avec Mia vers une maison bleue.", "Pip camina con Mia hasta una casa azul.", "पिप मिया के साथ नीले घर तक जाता है।", "house"),
      storyPage("Pip finds his family. Mia smiles.", "Pip findet seine Familie. Mia lächelt.", "Pip retrouve sa famille. Mia sourit.", "Pip encuentra a su familia. Mia sonríe.", "पिप को उसका परिवार मिल जाता है। मिया मुस्कुराती है।", "dog")
    ],
    questions: [
      { q: ["Where does Mia see the dog?", "Wo sieht Mia den Hund?", "Où Mia voit-elle le chien ?", "¿Dónde ve Mia al perro?", "मिया कुत्ते को कहाँ देखती है?"], options: ["park", "market", "house", "garden"], answer: "park" },
      { q: ["What is the dog's name?", "Wie heißt der Hund?", "Comment s'appelle le chien ?", "¿Cómo se llama el perro?", "कुत्ते का नाम क्या है?"], options: ["Pip", "Max", "Mia", "Ben"], answer: "Pip" },
      { q: ["Who does Pip find?", "Wen findet Pip?", "Qui Pip retrouve-t-il ?", "¿A quién encuentra Pip?", "पिप किसे ढूँढ़ता है?"], options: ["his family", "a friend", "a teacher", "a cat"], answer: "his family" }
    ],
    order: [1, 2, 3], listenPage: 3
  },
  {
    id: "the-apple", title: "The Apple", titles: { en:"The Apple", de:"Der Apfel", fr:"La pomme", es:"La manzana", hi:"सेब" }, icon: "🍎", level: "Beginner", xp: 10, words: ["apple", "market", "friend"],
    pages: [
      storyPage("Maria has one red apple.", "Maria hat einen roten Apfel.", "Maria a une pomme rouge.", "María tiene una manzana roja.", "मारिया के पास एक लाल सेब है।", "apple"),
      storyPage("Maria walks to the market.", "Maria geht zum Markt.", "Maria marche jusqu'au marché.", "María camina al mercado.", "मारिया बाज़ार जाती है।", "market"),
      storyPage("She buys two more apples.", "Sie kauft zwei weitere Äpfel.", "Elle achète deux autres pommes.", "Compra dos manzanas más.", "वह दो और सेब खरीदती है।", "apple"),
      storyPage("Maria shares an apple with a friend.", "Maria teilt einen Apfel mit einem Freund.", "Maria partage une pomme avec une amie.", "María comparte una manzana con una amiga.", "मारिया एक सेब अपने दोस्त के साथ बाँटती है।", "friend"),
      storyPage("They eat and smile together.", "Sie essen und lächeln zusammen.", "Elles mangent et sourient ensemble.", "Comen y sonríen juntas.", "वे साथ खाते हैं और मुस्कुराते हैं।", "apple")
    ],
    questions: [
      { q: ["Where does Maria go?", "Wohin geht Maria?", "Où va Maria ?", "¿Adónde va María?", "मारिया कहाँ जाती है?"], options: ["market", "park", "school", "house"], answer: "market" },
      { q: ["How many more apples does she buy?", "Wie viele Äpfel kauft sie noch?", "Combien de pommes achète-t-elle en plus ?", "¿Cuántas manzanas más compra?", "वह कितने और सेब खरीदती है?"], options: ["two", "one", "three", "four"], answer: "two" },
      { q: ["Who shares the apple with Maria?", "Wer teilt den Apfel mit Maria?", "Qui partage la pomme avec Maria ?", "¿Quién comparte la manzana con María?", "मारिया के साथ सेब कौन बाँटता है?"], options: ["a friend", "her teacher", "her dog", "a neighbor"], answer: "a friend" }
    ],
    order: [1, 2, 3], listenPage: 3
  },
  {
    id: "new-friend", title: "A New Friend", titles: { en:"A New Friend", de:"Ein neuer Freund", fr:"Un nouvel ami", es:"Un nuevo amigo", hi:"एक नया दोस्त" }, icon: "🚲", level: "Intermediate", xp: 20, words: ["bicycle", "friend", "park", "horse"],
    pages: [
      storyPage("Leo rides his bicycle to the park.", "Leo fährt mit seinem Fahrrad zum Park.", "Léo va au parc à vélo.", "Leo va al parque en bicicleta.", "लियो साइकिल से पार्क जाता है।", "bicycle"),
      storyPage("He meets Sam beside a tall tree.", "Er trifft Sam neben einem hohen Baum.", "Il rencontre Sam près d'un grand arbre.", "Conoce a Sam junto a un árbol alto.", "वह एक ऊँचे पेड़ के पास सैम से मिलता है।", "friend"),
      storyPage("Sam has a small brown horse.", "Sam hat ein kleines braunes Pferd.", "Sam a un petit cheval brun.", "Sam tiene un caballo marrón pequeño.", "सैम के पास एक छोटा भूरा घोड़ा है।", "horse"),
      storyPage("Leo and Sam ride along the park path.", "Leo und Sam fahren den Parkweg entlang.", "Léo et Sam roulent sur le sentier du parc.", "Leo y Sam recorren el sendero del parque.", "लियो और सैम पार्क के रास्ते पर सवारी करते हैं।", "park"),
      storyPage("They wave goodbye and plan to meet again.", "Sie winken zum Abschied und wollen sich wiedersehen.", "Ils se disent au revoir et prévoient de se revoir.", "Se despiden y planean volver a verse.", "वे हाथ हिलाकर विदा लेते हैं और फिर मिलने की योजना बनाते हैं।", "friend")
    ],
    questions: [
      { q: ["Where does Leo ride his bicycle?", "Wohin fährt Leo mit dem Fahrrad?", "Où Léo va-t-il à vélo ?", "¿Adónde va Leo en bicicleta?", "लियो साइकिल से कहाँ जाता है?"], options: ["park", "market", "school", "house"], answer: "park" },
      { q: ["What animal does Sam have?", "Welches Tier hat Sam?", "Quel animal Sam a-t-il ?", "¿Qué animal tiene Sam?", "सैम के पास कौन-सा जानवर है?"], options: ["horse", "dog", "cat", "bird"], answer: "horse" },
      { q: ["What do Leo and Sam plan to do?", "Was planen Leo und Sam?", "Que prévoient Léo et Sam ?", "¿Qué planean hacer Leo y Sam?", "लियो और सैम क्या करने की योजना बनाते हैं?"], options: ["meet again", "go to school", "buy a bicycle", "find a dog"], answer: "meet again" }
    ],
    order: [1, 2, 3], listenPage: 3
  },
  {
    id: "helpful-neighbor", title: "A Helpful Neighbor", titles: { en:"A Helpful Neighbor", de:"Eine hilfsbereite Nachbarin", fr:"Une voisine serviable", es:"Una vecina servicial", hi:"एक मददगार पड़ोसी" }, icon: "🌷", level: "Advanced", xp: 20, words: ["neighbor", "garden", "water", "friend"],
    pages: [
      storyPage("After the rain, Nila visits her neighbor.", "Nach dem Regen besucht Nila ihre Nachbarin.", "Après la pluie, Nila rend visite à sa voisine.", "Después de la lluvia, Nila visita a su vecina.", "बारिश के बाद नीला अपनी पड़ोसी से मिलने जाती है।", "neighbor"),
      storyPage("The neighbor's garden needs water.", "Der Garten der Nachbarin braucht Wasser.", "Le jardin de sa voisine a besoin d'eau.", "El jardín de su vecina necesita agua.", "पड़ोसी के बगीचे को पानी चाहिए।", "garden"),
      storyPage("Nila carries a full watering can.", "Nila trägt eine volle Gießkanne.", "Nila porte un arrosoir rempli.", "Nila lleva una regadera llena.", "नीला पानी से भरी हुई सिंचाई की बाल्टी उठाती है।", "water"),
      storyPage("Together, they help the flowers stand tall.", "Gemeinsam helfen sie den Blumen, wieder aufrecht zu stehen.", "Ensemble, elles aident les fleurs à se redresser.", "Juntas ayudan a las flores a levantarse.", "दोनों मिलकर फूलों को फिर से सीधा खड़ा होने में मदद करती हैं।", "garden"),
      storyPage("A kind act turns a neighbor into a friend.", "Eine freundliche Tat macht aus einer Nachbarin eine Freundin.", "Un geste gentil transforme une voisine en amie.", "Un gesto amable convierte a una vecina en amiga.", "एक दयालु काम पड़ोसी को दोस्त बना देता है।", "friend")
    ],
    questions: [
      { q: ["When does Nila visit her neighbor?", "Wann besucht Nila ihre Nachbarin?", "Quand Nila rend-elle visite à sa voisine ?", "¿Cuándo visita Nila a su vecina?", "नीला अपनी पड़ोसी से कब मिलने जाती है?"], options: ["after the rain", "before sunrise", "at lunchtime", "in winter"], answer: "after the rain" },
      { q: ["What does the garden need?", "Was braucht der Garten?", "De quoi le jardin a-t-il besoin ?", "¿Qué necesita el jardín?", "बगीचे को किस चीज़ की ज़रूरत है?"], options: ["water", "a bicycle", "a new gate", "a tree"], answer: "water" },
      { q: ["What does their kind act create?", "Was bewirkt ihre freundliche Tat?", "Que crée leur geste gentil ?", "¿Qué crea su gesto amable?", "उनका दयालु काम क्या बनाता है?"], options: ["a friendship", "a market", "a new house", "a storybook"], answer: "a friendship" }
    ],
    order: [1, 2, 3], listenPage: 3
  }
];
const STORY_LEVELS = [["all", "All stories"], ["Beginner", "🌱 Beginner"], ["Intermediate", "🌿 Intermediate"], ["Advanced", "🌳 Advanced"]];
function storyWord(id) {
  const vocabulary = VOCABULARY_WORDS.find((word) => word.id === id);
  const item = STORY_WORDS[id];
  if (!item) return null;
  return vocabulary || { id, image: item[0], en: item[1], de: item[2], fr: item[3], es: item[4], hi: item[5], meaning: item[6], part: "Noun", example: `${item[1]} is in the story.` };
}
function storyText(story, pageIndex) {
  return story.pages[pageIndex].text[state.target] || story.pages[pageIndex].text.en;
}
function getQuizProgress() {
  if (!state.quizProgress || typeof state.quizProgress !== "object") state.quizProgress = {};
  const key = pairKey();
  if (!state.quizProgress[key] || typeof state.quizProgress[key] !== "object") {
    state.quizProgress[key] = { xp: 0, attempts: 0, bestScore: 0, bestStreak: 0, badges: [], history: [] };
  }
  const progress = state.quizProgress[key];
  if (!Number.isFinite(progress.xp)) progress.xp = 0;
  if (!Number.isFinite(progress.attempts)) progress.attempts = 0;
  if (!Number.isFinite(progress.bestScore)) progress.bestScore = 0;
  if (!Number.isFinite(progress.bestStreak)) progress.bestStreak = 0;
  if (!Array.isArray(progress.badges)) progress.badges = [];
  if (!Array.isArray(progress.history)) progress.history = [];
  return progress;
}
function shuffled(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}
function buildQuizQuestions() {
  const eligible = VOCABULARY_WORDS.filter((word) => word.level === quizDifficulty);
  const pool = shuffled(eligible.length ? eligible : VOCABULARY_WORDS);
  const allTranslations = [...new Set(VOCABULARY_WORDS.map((word) => word[state.target] || word.en))];
  const selectedWords = Array.from({ length: 10 }, (_, index) => pool[index % pool.length]);
  return selectedWords.map((word, index) => {
    const type = QUIZ_TYPES[index % QUIZ_TYPES.length];
    const answer = word[state.target] || word.en;
    const otherWords = shuffled(VOCABULARY_WORDS.filter((item) => item.id !== word.id));
    if (type === "spelling") {
      const letters = graphemes(answer.toLocaleUpperCase());
      const letterPositions = letters.map((letter, position) => /^[\p{L}\p{N}]$/u.test(letter) ? position : -1).filter((position) => position >= 0);
      const blankIndex = letterPositions.length ? letterPositions[Math.floor(letterPositions.length / 2)] : 0;
      const missing = letters[blankIndex];
      const alphabet = VOCABULARY_WORDS.flatMap((entry) => graphemes((entry[state.target] || entry.en).toLocaleUpperCase())).filter((letter) => /^[\p{L}\p{N}]$/u.test(letter));
      const alternatives = [...new Set([...alphabet, ...graphemes("ABCFDEGHIJKLMNOQRSTUVWXYZ")])].filter((letter) => letter !== missing);
      const choices = shuffled([missing, ...shuffled(alternatives).slice(0, 3)]);
      return { type, word, correct: missing, options: choices, letters: letters.map((letter, position) => position === blankIndex ? "_" : letter) };
    }
    if (quizDifficulty === "advanced" && type === "translation") {
      const sourceStory = STORY_ADVENTURES[index % STORY_ADVENTURES.length];
      const sentencePage = sourceStory.pages[(index + 1) % sourceStory.pages.length];
      const targetSentence = sentencePage.text[state.target] || sentencePage.text.en;
      const sentenceOptions = STORY_ADVENTURES.flatMap((story) => story.pages.map((page) => page.text[state.target] || page.text.en))
        .filter((sentence, position, sentences) => sentence !== targetSentence && sentences.indexOf(sentence) === position);
      return {
        type, word, correct: targetSentence, options: shuffled([targetSentence, ...shuffled(sentenceOptions).slice(0, 3)]),
        sourceSentence: sentencePage.text[state.source] || sentencePage.text.en,
        prompt: `Choose the matching sentence in ${LANGUAGES[state.target].name}.`
      };
    }
    const distractors = otherWords.map((item) => item[state.target] || item.en).filter((value, position, values) => value !== answer && values.indexOf(value) === position).slice(0, 3);
    const fallbacks = allTranslations.filter((value) => value !== answer && !distractors.includes(value));
    while (distractors.length < 3 && fallbacks.length) distractors.push(fallbacks.shift());
    return {
      type, word, correct: answer, options: shuffled([answer, ...distractors]),
      prompt: type === "picture" ? "What is this?" : type === "listening" ? "What did you hear?" : `“${word[state.source] || word.en}” — what is it in ${LANGUAGES[state.target].name}?`
    };
  });
}
function beginQuiz() {
  if (quizTimer) clearInterval(quizTimer);
  quizQuestions = buildQuizQuestions();
  quizIndex = 0;
  quizLives = 3;
  quizScore = 0;
  quizStreak = 0;
  quizBestStreak = 0;
  quizBonusXp = 0;
  quizTimeLeft = 60;
  quizSelectedAnswer = "";
  quizChecked = false;
  quizAnswerCorrect = false;
  quizCompletedOnce = false;
  quizSaveError = false;
  quizStage = "question";
  quizTimer = setInterval(() => {
    if (quizStage !== "question") return;
    quizTimeLeft -= 1;
    if (quizTimeLeft <= 0) finishQuiz();
    else render();
  }, 1000);
  render();
}
function finishQuiz() {
  if (quizCompletedOnce) return;
  quizCompletedOnce = true;
  if (quizTimer) {
    clearInterval(quizTimer);
    quizTimer = null;
  }
  const previousState = JSON.stringify(state);
  const progress = getQuizProgress();
  const xpEarned = quizScore * 10 + quizBonusXp;
  progress.xp += xpEarned;
  recordLearningDay();
  state.level = currentCourseLevel();
  progress.attempts += 1;
  progress.bestScore = Math.max(progress.bestScore, quizScore);
  progress.bestStreak = Math.max(progress.bestStreak, quizBestStreak);
  progress.history.unshift({
    score: quizScore,
    total: quizQuestions.length,
    percentage: Math.round((quizScore / Math.max(quizQuestions.length, 1)) * 100),
    xp: xpEarned,
    difficulty: quizDifficulty,
    streak: quizBestStreak,
    completedAt: new Date().toISOString()
  });
  progress.history = progress.history.slice(0, 20);
  if (quizScore >= 8 && !progress.badges.includes("word-explorer")) progress.badges.push("word-explorer");
  pairProgress().quiz = Math.max(pairProgress().quiz || 0, quizScore * 10);
  if (persistState()) {
    quizStage = "result";
    render();
  } else {
    state = JSON.parse(previousState);
    quizSaveError = true;
    quizStage = "result";
    render();
  }
}
function renderQuizStart() {
  const progress = getQuizProgress();
  const difficultyCards = QUIZ_DIFFICULTIES.map((item) => `<button class="quiz-difficulty-card ${quizDifficulty === item.id ? "active" : ""}" data-quiz-difficulty="${item.id}" aria-pressed="${quizDifficulty === item.id}"><span>${item.icon}</span><strong>${item.title}</strong><small>${item.description}</small></button>`).join("");
  const quizHistory = progress.history.map((attempt) => `<li><strong>${attempt.score}/${attempt.total} · ${attempt.percentage}%</strong><span>${escapeHtml(attempt.difficulty)} · +${attempt.xp} XP · ${escapeHtml(new Date(attempt.completedAt).toLocaleString())}</span></li>`).join("");
  return `<header class="page-header"><div><p class="page-kicker">${LANGUAGES[state.source].flag} ${courseName()}</p><h1 class="page-title">Language Challenge.</h1><p class="page-intro">Choose a level, answer 10 questions, and build your streak.</p></div><div class="header-course">Quiz best<strong>${progress.bestScore} / 10</strong></div></header><section class="quiz-start-card">
    <span class="quiz-start-icon">🎯</span><p class="page-kicker">LANGUAGE CHALLENGE</p><h2>${escapeHtml(courseName())}</h2>
    <div class="quiz-facts"><span>⭐ 10 Questions</span><span>⏱️ 60 Seconds</span><span>❤️ 3 Lives</span></div>
    <div class="quiz-difficulty-heading"><h3>Choose Difficulty</h3><p>Your quiz is saved separately for each language pair.</p></div>
    <div class="quiz-difficulty-grid">${difficultyCards}</div>
    <button class="button button-primary quiz-start-button" data-quiz-start>Start Quiz →</button>
  </section>${quizHistory ? `<section class="panel quiz-history"><h2>Previous quiz results</h2><ul>${quizHistory}</ul></section>` : ""}`;
}
function renderQuizQuestion() {
  const question = quizQuestions[quizIndex];
  if (!question) return "";
  const isSpelling = question.type === "spelling";
  const typeTitle = { picture: "PICTURE QUESTION", listening: "LISTENING QUESTION", translation: "TRANSLATION QUESTION", spelling: "COMPLETE THE WORD" }[question.type];
  const typeContent = question.type === "picture"
    ? `<div class="quiz-question-image">${question.word.image}</div><h2>${question.prompt}</h2><p class="quiz-question-hint">${escapeHtml(question.word[state.source] || question.word.en)} → ${LANGUAGES[state.target].name}</p>`
    : question.type === "listening"
      ? `<button class="button button-primary quiz-listen-button" data-quiz-audio>🔊 Listen carefully</button><h2>${question.prompt}</h2>`
      : question.type === "translation"
        ? `<div class="quiz-translation-prompt">${escapeHtml(question.sourceSentence || question.word[state.source] || question.word.en)}</div><h2>${question.prompt}</h2>`
        : `<div class="quiz-question-image">${question.word.image}</div><p class="quiz-question-hint">${escapeHtml(question.word[state.source] || question.word.en)} · Complete the word in ${LANGUAGES[state.target].name}</p><div class="quiz-spelling-word">${question.letters.map((letter) => `<span>${escapeHtml(letter)}</span>`).join("")}</div><h2>Choose the missing letter</h2>`;
  const choices = isSpelling ? question.options : question.options;
  const feedback = quizChecked
    ? `<p class="quiz-feedback ${quizAnswerCorrect ? "feedback-correct" : "feedback-wrong"}">${quizAnswerCorrect ? `🎉 Correct! 🔥 ${quizStreak} answer streak · +10 XP${quizStreak > 0 && quizStreak % 5 === 0 ? " · +25 streak bonus!" : ""}` : `❌ Not quite! Correct answer: ${escapeHtml(question.correct)}${isSpelling ? "" : ` = ${escapeHtml(question.sourceSentence || question.word[state.source] || question.word.en)}`}`}</p>`
    : "";
  return `<section class="quiz-question-card">
    <div class="quiz-question-top"><span>QUESTION ${quizIndex + 1} / 10 · ${typeTitle}</span><span class="quiz-timer ${quizTimeLeft <= 10 ? "urgent" : ""}" role="timer" aria-label="${quizTimeLeft} seconds remaining">⏱️ ${quizTimeLeft}s</span></div>
    <div class="quiz-timer-track ${quizTimeLeft <= 10 ? "urgent" : ""}"><span style="width:${Math.max(0, quizTimeLeft / 60 * 100)}%"></span></div>
    ${typeContent}
    <div class="quiz-options ${isSpelling ? "quiz-letter-options" : ""}">${choices.map((choice, index) => {
      const correct = quizChecked && choice === question.correct;
      const wrong = quizChecked && choice === quizSelectedAnswer && !quizAnswerCorrect;
      return `<button class="quiz-option ${quizSelectedAnswer === choice ? "selected" : ""} ${correct ? "correct" : ""} ${wrong ? "wrong" : ""}" data-quiz-answer="${escapeHtml(choice)}" ${quizChecked ? "disabled" : ""}>${isSpelling ? "" : `<span class="quiz-option-letter">${String.fromCharCode(65 + index)}.</span>`}<span>${escapeHtml(choice)}</span>${correct ? "<b>✓</b>" : ""}</button>`;
    }).join("")}</div>
    ${feedback}
    <div class="quiz-status-row"><span class="quiz-lives" aria-label="${quizLives} lives remaining">${Array.from({ length: 3 }, (_, index) => index < quizLives ? "❤️" : "🖤").join(" ")}</span><strong>⭐ Score: ${quizScore * 10}</strong></div>
    <button class="button button-primary quiz-next-button" ${quizChecked ? "data-quiz-next" : "data-quiz-check"}>${quizChecked ? quizLives === 0 || quizIndex === 9 ? "See results →" : "Next →" : "Check answer"}</button>
  </section>`;
}
function renderQuizResult() {
  const progress = getQuizProgress();
  const xpEarned = quizScore * 10 + quizBonusXp;
  return `<section class="quiz-result-card"><span class="quiz-result-confetti">🎉</span><p class="page-kicker">LANGUAGE CHALLENGE</p><h1>Quiz complete!</h1><span class="quiz-result-trophy">🏆</span><strong class="quiz-result-score">${quizScore * 10}/100</strong>
    <div class="quiz-result-stats"><div><strong>⭐ ${quizScore} / 10</strong><span>Correct answers</span></div><div><strong>🔥 ${quizBestStreak}</strong><span>Best streak</span></div><div><strong>⚡ +${xpEarned}</strong><span>XP earned</span></div><div><strong>⏱️ ${quizTimeLeft}s</strong><span>Time left</span></div><div><strong>❤️ ${quizLives}</strong><span>Lives remaining</span></div><div><strong>${progress.bestScore} / 10</strong><span>Personal best</span></div></div>
    ${quizSaveError ? `<p class="quiz-save-error">This result could not be saved. Your browser storage may be full or unavailable.</p>` : ""}
    ${progress.badges.includes("word-explorer") ? `<div class="quiz-earned-badge">🏅 <strong>Word Explorer</strong></div>` : ""}
    <div class="quiz-result-actions"><button class="button button-primary" data-quiz-replay>Play Again</button><button class="button button-quiet" data-page="home">Continue Learning</button></div>
  </section>`;
}
function renderQuiz() {
  const content = quizStage === "start" ? renderQuizStart() : quizStage === "question" ? renderQuizQuestion() : renderQuizResult();
  document.querySelector("#page-content").innerHTML = content;
}
function handleQuizClick(event) {
  const difficulty = event.target.closest("[data-quiz-difficulty]");
  if (difficulty) {
    quizDifficulty = difficulty.dataset.quizDifficulty;
    render();
    return true;
  }
  if (event.target.closest("[data-quiz-start]") || event.target.closest("[data-quiz-replay]")) {
    beginQuiz();
    return true;
  }
  if (event.target.closest("[data-quiz-audio]")) {
    if (!("speechSynthesis" in window)) {
      showToast("Speech playback is not supported by this browser.");
      return true;
    }
    const question = quizQuestions[quizIndex];
    const utterance = new SpeechSynthesisUtterance(question.correct);
    utterance.lang = LANGUAGES[state.target].voice;
    utterance.onerror = (speechEvent) => {
      if (speechEvent.error !== "canceled" && speechEvent.error !== "interrupted") showToast("Audio could not be played. Check your browser's speech settings.");
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    return true;
  }
  const answer = event.target.closest("[data-quiz-answer]");
  if (answer && !quizChecked) {
    quizSelectedAnswer = answer.dataset.quizAnswer;
    render();
    return true;
  }
  if (event.target.closest("[data-quiz-check]")) {
    if (!quizSelectedAnswer) {
      showToast("Choose an answer before checking.");
      return true;
    }
    const question = quizQuestions[quizIndex];
    quizAnswerCorrect = quizSelectedAnswer.toLocaleLowerCase() === question.correct.toLocaleLowerCase();
    quizChecked = true;
    if (quizAnswerCorrect) {
      quizScore += 1;
      quizStreak += 1;
      quizBestStreak = Math.max(quizBestStreak, quizStreak);
      if (quizStreak > 0 && quizStreak % 5 === 0) quizBonusXp += 25;
    } else {
      quizLives = Math.max(0, quizLives - 1);
      quizStreak = 0;
    }
    render();
    return true;
  }
  if (event.target.closest("[data-quiz-next]")) {
    if (quizLives === 0 || quizIndex === 9) finishQuiz();
    else {
      quizIndex += 1;
      quizSelectedAnswer = "";
      quizChecked = false;
      quizAnswerCorrect = false;
      render();
    }
    return true;
  }
  return false;
}
function finalTestWord(word, languageId) {
  return word[languageId] || word.en;
}
function finalTestOptions(correct, candidates) {
  if (typeof correct !== "string" || !correct.trim()) throw new Error("Final Test content is missing a correct answer.");
  const normalized = correct.toLocaleLowerCase();
  const distractors = shuffled([...new Set(candidates.filter((candidate) =>
    typeof candidate === "string" && candidate.trim() && candidate.toLocaleLowerCase() !== normalized
  ))]).slice(0, 3);
  if (distractors.length < 3) throw new Error("The course content does not contain enough unique answer choices for the Final Test.");
  return shuffled([correct, ...distractors]);
}
function makeFinalTestQuestion(section, index, type, prompt, correct, candidates, extra = {}) {
  return {
    id: `${section.id}-${index}`,
    section: section.id,
    sectionTitle: section.title,
    type,
    prompt,
    correct,
    options: finalTestOptions(correct, candidates),
    ...extra
  };
}
async function buildFinalTestQuestions(sourceId, targetId) {
  const questions = [];
  const localized = (word) => finalTestWord(word, targetId);
  const localizedPhoto = (word) => word.words[targetId] || word.words.en;
  const wordPool = shuffled(VOCABULARY_WORDS);
  const alphabet = shuffled(ALPHABETS[targetId]);
  const numbers = shuffled(Array.from({ length: 100 }, (_, index) => index + 1)).slice(0, 10);
  let translatedNumbers = numbers.map(numberWord);
  if (targetId !== "en") {
    let nextNumberIndex = 0;
    const translated = new Array(numbers.length);
    const workers = Array.from({ length: Math.min(4, numbers.length) }, async () => {
      while (nextNumberIndex < numbers.length) {
        const index = nextNumberIndex++;
        const result = await requestLearningTranslation(numberWord(numbers[index]), "en", targetId);
        translated[index] = result.join("").trim();
        if (!translated[index]) throw new Error("The number translation service returned an empty answer.");
      }
    });
    await Promise.all(workers);
    translatedNumbers = translated;
  }

  const alphaSection = FINAL_TEST_SECTIONS.find((section) => section.id === "alphabet");
  const numberSection = FINAL_TEST_SECTIONS.find((section) => section.id === "numbers");
  const vocabularySection = FINAL_TEST_SECTIONS.find((section) => section.id === "vocabulary");
  const photoSection = FINAL_TEST_SECTIONS.find((section) => section.id === "photo-words");
  const grammarSection = FINAL_TEST_SECTIONS.find((section) => section.id === "grammar");
  const storySection = FINAL_TEST_SECTIONS.find((section) => section.id === "stories");
  const listeningSection = FINAL_TEST_SECTIONS.find((section) => section.id === "pronunciation");
  const translationSection = FINAL_TEST_SECTIONS.find((section) => section.id === "translation");
  if (!alphaSection || !numberSection || !vocabularySection || !photoSection || !grammarSection || !storySection || !listeningSection || !translationSection) {
    throw new Error("Final Test sections are not configured correctly.");
  }

  for (let index = 0; index < alphaSection.count; index += 1) {
    const [letter, word] = alphabet[index % alphabet.length];
    questions.push(makeFinalTestQuestion(
      alphaSection, index, "multiple-choice", `Which letter begins “${word}” in ${LANGUAGES[targetId].name}?`,
      letter, alphabet.map(([candidate]) => candidate)
    ));
  }
  for (let index = 0; index < numberSection.count; index += 1) {
    const value = numbers[index];
    questions.push(makeFinalTestQuestion(
      numberSection, index, "fill-blank", `Choose the ${LANGUAGES[targetId].name} word for ${value.toLocaleString()}.`,
      translatedNumbers[index], translatedNumbers, { number: value }
    ));
  }
  const vocabularyQuestions = shuffled(wordPool).slice(0, vocabularySection.count);
  for (let index = 0; index < vocabularySection.count; index += 1) {
    const word = vocabularyQuestions[index % vocabularyQuestions.length];
    questions.push(makeFinalTestQuestion(
      vocabularySection, index, "matching", `Match “${finalTestWord(word, sourceId)}” with its ${LANGUAGES[targetId].name} translation.`,
      localized(word), wordPool.map(localized), { image: word.image }
    ));
  }
  const photoPool = shuffled(PHOTO_WORDS);
  for (let index = 0; index < photoSection.count; index += 1) {
    const word = photoPool[index % photoPool.length];
    questions.push(makeFinalTestQuestion(
      photoSection, index, "image", `What is this in ${LANGUAGES[targetId].name}?`,
      localizedPhoto(word), wordPool.map(localized), { image: word.image }
    ));
  }
  const englishGrammarQuestions = [
    ["She ___ a book every week.", "reads", ["read", "reading", "is read"]],
    ["They ___ ready for class.", "are", ["is", "am", "be"]],
    ["He ___ to school every day.", "walks", ["walk", "walking", "walked"]],
    ["We ___ learning right now.", "are", ["is", "am", "was"]],
    ["Yesterday, I ___ my friend.", "visited", ["visits", "visit", "visiting"]],
    ["She ___ coffee every morning.", "drinks", ["drink", "drank", "drinking"]],
    ["If it rains, we ___ inside.", "will stay", ["stayed", "stays", "stay"]],
    ["There ___ two apples on the table.", "are", ["is", "was", "be"]],
    ["An ___ is on the table.", "apple", ["book", "chair", "bag"]],
    ["She is taller ___ her brother.", "than", ["then", "that", "to"]],
    ["___ you like tea?", "Do", ["Does", "Are", "Is"]],
    ["Water ___ at 100°C.", "boils", ["boil", "boiled", "boiling"]],
    ["These ___ my keys.", "are", ["is", "was", "be"]],
    ["I have ___ finished my homework.", "already", ["yet", "ever", "still"]],
    ["By tomorrow, they ___ arrived.", "will have", ["would", "are", "have"]],
    ["She ___ not like cold weather.", "does", ["do", "is", "has"]],
    ["There is ___ orange in the bowl.", "an", ["a", "the", "some"]],
    ["The children ___ playing outside.", "are", ["is", "was", "be"]],
    ["I ___ dinner when you called.", "was cooking", ["cook", "am cooking", "cooked"]],
    ["This is the ___ interesting book.", "most", ["more", "much", "many"]]
  ];
  if (targetId === "en") {
    const shuffledGrammar = shuffled(englishGrammarQuestions);
    for (let index = 0; index < grammarSection.count; index += 1) {
      const [prompt, correct, options] = shuffledGrammar[index];
      questions.push(makeFinalTestQuestion(grammarSection, index, "fill-blank", prompt, correct, options));
    }
  } else {
    const normalizeToken = (token) => token.replace(/^[“"'([{]+|[.,!?;:।؟"'”)\]}]+$/gu, "");
    const grammarEntries = shuffled(ALPHABETS[targetId]).slice(0, grammarSection.count);
    for (let index = 0; index < grammarEntries.length; index += 1) {
      const [, word, , sentence] = grammarEntries[index];
      const tokens = sentence.trim().split(/\s+/);
      const blankIndex = Math.floor(tokens.length / 2);
      const correct = normalizeToken(tokens[blankIndex]);
      const answers = ALPHABETS[targetId].flatMap((entry) => entry[3].split(/\s+/).map(normalizeToken))
        .filter((token) => token && token.toLocaleLowerCase() !== correct.toLocaleLowerCase());
      questions.push(makeFinalTestQuestion(
        grammarSection,
        index,
        "fill-blank",
        `Complete this ${LANGUAGES[targetId].name} sentence: ${tokens.map((token, index) => index === blankIndex ? "____" : token).join(" ")}`,
        correct,
        answers,
        { hint: `Sentence practice · ${word}` }
      ));
    }
  }
  const storyPages = shuffled(STORY_ADVENTURES.flatMap((story) => story.pages.map((page) => ({
    story: storyTitle(story),
    target: page.text[targetId] || page.text.en,
    source: page.text[sourceId] || page.text.en
  }))));
  for (let index = 0; index < storySection.count; index += 1) {
    const page = storyPages[index % storyPages.length];
    questions.push(makeFinalTestQuestion(
      storySection, index, "sentence", `Choose the ${LANGUAGES[targetId].name} sentence from “${page.story}”.`,
      page.target, storyPages.map((item) => item.target), { hint: page.source }
    ));
  }
  const listeningWords = shuffled(wordPool).slice(0, listeningSection.count);
  for (let index = 0; index < listeningSection.count; index += 1) {
    const word = listeningWords[index % listeningWords.length];
    questions.push(makeFinalTestQuestion(
      listeningSection, index, "listening", `Listen and choose the ${LANGUAGES[targetId].name} word.`,
      localized(word), wordPool.map(localized), { speak: localized(word), voice: LANGUAGES[targetId].voice }
    ));
  }
  const translationWords = shuffled(wordPool).slice(0, translationSection.count);
  for (let index = 0; index < translationSection.count; index += 1) {
    const word = translationWords[index % translationWords.length];
    questions.push(makeFinalTestQuestion(
      translationSection, index, "translation", `Translate “${finalTestWord(word, sourceId)}” into ${LANGUAGES[targetId].name}.`,
      localized(word), wordPool.map(localized), { image: word.image }
    ));
  }
  if (questions.length !== 100) throw new Error(`Final Test question generation produced ${questions.length} questions instead of 100.`);
  return shuffled(questions);
}
function finalTestRemainingSeconds(active, now = Date.now()) {
  if (typeof active.expiresAt === "string") {
    const expiry = Date.parse(active.expiresAt);
    if (Number.isFinite(expiry)) return Math.max(0, Math.ceil((expiry - now) / 1000));
  }
  return Number.isFinite(active.remainingSeconds) ? Math.max(0, Math.min(3600, active.remainingSeconds)) : 3600;
}
function formatFinalTestTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(safeSeconds / 60)).padStart(2, "0")}:${String(safeSeconds % 60).padStart(2, "0")}`;
}
function saveFinalTestProgress() {
  const saved = persistState();
  finalTestSaveError = !saved;
  return saved;
}
function startFinalTestTimer(key = pairKey()) {
  if (finalTestTimers.has(key)) return;
  const active = getFinalTestRecord(key).active;
  if (!active) {
    const timer = finalTestTimers.get(key);
    if (timer) clearInterval(timer);
    finalTestTimers.delete(key);
    return;
  }
  let ticks = 0;
  const timer = setInterval(() => {
    const attempt = getFinalTestRecord(key).active;
    if (!attempt) {
      clearInterval(timer);
      finalTestTimers.delete(key);
      return;
    }
    const remaining = finalTestRemainingSeconds(attempt);
    attempt.remainingSeconds = remaining;
    ticks += 1;
    const timer = document.querySelector("[data-final-test-timer]");
    if (timer && key === pairKey() && currentPage === "final-test") {
      timer.textContent = formatFinalTestTime(remaining);
      timer.classList.toggle("urgent", remaining <= 300);
    }
    if (ticks % 10 === 0) saveFinalTestProgress();
    if (remaining <= 0) {
      finishFinalTest(key, true);
      clearInterval(timer);
      finalTestTimers.delete(key);
      if (key === pairKey()) render();
    }
  }, 1000);
  finalTestTimers.set(key, timer);
}
async function beginFinalTest() {
  if (finalTestGenerating) return;
  if (!finalTestUnlockStatus().unlocked) {
    showToast("Complete all required learning sections to unlock the Final Test.");
    return;
  }
  const key = pairKey();
  const sourceId = state.source;
  const targetId = state.target;
  finalTestGenerationError = "";
  finalTestGenerating = true;
  render();
  try {
    const questions = await buildFinalTestQuestions(sourceId, targetId);
    const startedAt = Date.now();
    const record = getFinalTestRecord(key);
    record.active = {
      questions,
      answers: Array(100).fill(""),
      marked: [],
      index: 0,
      mode: "question",
      startedAt: new Date(startedAt).toISOString(),
      expiresAt: new Date(startedAt + 60 * 60 * 1000).toISOString(),
      remainingSeconds: 3600
    };
    finalTestGenerating = false;
    if (saveFinalTestProgress()) {
      finalTestSaveError = false;
      startFinalTestTimer(key);
    }
    if (key === pairKey() && currentPage === "final-test") render();
  } catch (error) {
    finalTestGenerating = false;
    finalTestGenerationError = "The Final Test could not be prepared. Check your connection and try again.";
    console.error("Could not prepare the Final Test.", error);
    if (key === pairKey() && currentPage === "final-test") render();
  }
}
function finishFinalTest(key = pairKey(), automatic = false) {
  const record = getFinalTestRecord(key);
  const active = record.active;
  if (!active) return;
  const remaining = automatic ? 0 : finalTestRemainingSeconds(active);
  const sectionStats = Object.fromEntries(FINAL_TEST_SECTIONS.map((section) => [section.id, { title: section.title, correct: 0, total: section.count }]));
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let unanswered = 0;
  active.questions.forEach((question, index) => {
    const answer = active.answers[index];
    if (!answer) unanswered += 1;
    else if (answer.toLocaleLowerCase() === question.correct.toLocaleLowerCase()) {
      correctAnswers += 1;
      sectionStats[question.section].correct += 1;
    } else wrongAnswers += 1;
  });
  const xpEarned = correctAnswers * 10;
  const timeTaken = 3600 - remaining;
  const score = correctAnswers;
  const result = {
    score,
    percentage: score,
    correctAnswers,
    wrongAnswers,
    unanswered,
    timeTaken,
    xpEarned,
    sections: sectionStats,
    completedAt: new Date().toISOString(),
    attempt: record.attempts + 1,
    automatic
  };
  record.attempts += 1;
  record.latestScore = score;
  record.bestScore = Math.max(record.bestScore, score);
  record.xp += xpEarned;
  record.completedAt = result.completedAt;
  record.history.unshift(result);
  record.history = record.history.slice(0, 20);
  record.active = null;
  state.progress[key] = { ...(state.progress[key] || {}), "final-test": score };
  recordLearningDay();
  if (key === pairKey()) state.level = currentCourseLevel();
  saveFinalTestProgress();
  return result;
}
function renderFinalTestQuestion(active) {
  const question = active.questions[active.index];
  const answer = active.answers[active.index] || "";
  const optionMarkup = question.options.map((option, index) =>
    `<button class="final-test-option ${answer === option ? "selected" : ""}" data-final-test-answer="${index}" aria-pressed="${answer === option}"><span>${String.fromCharCode(65 + index)}.</span>${escapeHtml(option)}</button>`
  ).join("");
  const promptContent = question.image
    ? `<div class="final-test-image" aria-hidden="true">${escapeHtml(question.image)}</div>`
    : "";
  const audioButton = question.speak
    ? `<button class="button button-quiet final-test-listen" data-final-test-audio>🔊 Listen to the ${escapeHtml(LANGUAGES[state.target].name)} word</button>`
    : "";
  const questionNavigation = active.questions.map((item, index) =>
    `<button class="final-test-question-number ${index === active.index ? "current" : ""} ${active.answers[index] ? "answered" : ""} ${active.marked.includes(index) ? "marked" : ""}" data-final-test-jump="${index}" aria-label="Question ${index + 1}${active.answers[index] ? ", answered" : ", unanswered"}${active.marked.includes(index) ? ", marked for review" : ""}"><span>${index + 1}</span>${active.answers[index] ? "<b aria-hidden=\"true\">✓</b>" : ""}${active.marked.includes(index) ? "<i aria-hidden=\"true\">★</i>" : ""}</button>`
  ).join("");
  return `<section class="final-test-workspace">
    <header class="final-test-status"><div><span class="card-kicker">${escapeHtml(question.sectionTitle)} · Question ${active.index + 1} of 100</span><h1>Final Test</h1></div><div class="final-test-clock"><span>Time remaining</span><strong data-final-test-timer>${formatFinalTestTime(finalTestRemainingSeconds(active))}</strong></div></header>
    <nav class="final-test-question-map" aria-label="Jump to a question">${questionNavigation}</nav>
    <article class="final-test-question-card"><div class="final-test-question-heading"><span>QUESTION ${active.index + 1} / 100</span><button class="final-test-review-toggle ${active.marked.includes(active.index) ? "active" : ""}" data-final-test-mark aria-pressed="${active.marked.includes(active.index)}">${active.marked.includes(active.index) ? "⭐ Marked for review" : "☆ Mark for review"}</button></div>
      ${promptContent}<p class="final-test-question-type">${escapeHtml(question.type.replace("-", " "))}</p><h2>${escapeHtml(question.prompt)}</h2>${question.hint ? `<p class="final-test-hint">${escapeHtml(question.hint)}</p>` : ""}${audioButton}<div class="final-test-options">${optionMarkup}</div>
      <div class="final-test-controls"><button class="button button-quiet" data-final-test-previous ${active.index === 0 ? "disabled" : ""}>← Previous</button><button class="button button-primary" data-final-test-next>${active.index === 99 ? "Review All Answers →" : "Next →"}</button></div>
    </article>
    <div class="final-test-footer"><button class="button button-quiet" data-final-test-review>Review All Answers</button><span>${active.answers.filter(Boolean).length} of 100 answered</span></div>
  </section>`;
}
function renderFinalTestReview(active) {
  const cards = active.questions.map((question, index) =>
    `<button class="final-test-review-card ${active.answers[index] ? "answered" : ""} ${active.marked.includes(index) ? "marked" : ""}" data-final-test-jump="${index}"><strong>Q${index + 1} ${active.marked.includes(index) ? "⭐" : ""}</strong><span>${active.answers[index] ? escapeHtml(active.answers[index]) : "Unanswered"}</span></button>`
  ).join("");
  return `<section class="final-test-review"><header class="page-header"><div><p class="page-kicker">Check your work</p><h1 class="page-title">Review your answers.</h1><p class="page-intro">${active.answers.filter(Boolean).length} answered · ${100 - active.answers.filter(Boolean).length} unanswered · ${active.marked.length} marked for review.</p></div><div class="header-course">Time remaining<strong data-final-test-timer>${formatFinalTestTime(finalTestRemainingSeconds(active))}</strong></div></header><div class="final-test-review-grid">${cards}</div><div class="final-test-review-actions"><button class="button button-quiet" data-final-test-return>Return to test</button><button class="button button-primary" data-final-test-submit>Submit Final Test</button></div></section>`;
}
function renderFinalTestResult(record) {
  const result = record.history[0];
  if (!result) return "";
  const breakdown = FINAL_TEST_SECTIONS.map((section) => {
    const stats = result.sections[section.id];
    return `<article class="final-test-breakdown-row"><span>${escapeHtml(section.title)}</span><strong>${stats.correct} / ${stats.total}</strong><span class="final-test-breakdown-track"><i style="width:${Math.round(stats.correct / stats.total * 100)}%"></i></span></article>`;
  }).join("");
  return `<section class="final-test-result"><p class="page-kicker">🏆 COURSE COMPLETED · ${escapeHtml(courseName())}</p><h1>🎉 Final Test Completed!</h1><p class="final-test-congratulations">Congratulations! You have completed your OneStep language course.</p><div class="final-test-score">${result.score}<span>/ 100</span><small>${result.percentage}%</small></div><div class="final-test-result-stats"><article><strong>${result.correctAnswers}</strong><span>Correct answers</span></article><article><strong>${result.wrongAnswers}</strong><span>Wrong answers</span></article><article><strong>${result.unanswered}</strong><span>Unanswered</span></article><article><strong>${formatFinalTestTime(result.timeTaken)}</strong><span>Time taken</span></article><article><strong>+${result.xpEarned}</strong><span>XP earned</span></article><article><strong>${record.attempts}</strong><span>Attempt number</span></article></div><section class="final-test-breakdown"><h2>Performance breakdown</h2>${breakdown}</section><section class="final-test-completion"><h2>🏆 Course Completed</h2><p>Language: <strong>${escapeHtml(LANGUAGES[state.target].name)}</strong></p><p>Language pair: <strong>${escapeHtml(courseName())}</strong></p><p>Final score: <strong>${result.percentage}%</strong></p><p>Course completion: <strong>100%</strong></p><p>Best score: <strong>${record.bestScore}%</strong> · Latest score: ${record.latestScore}%</p></section>${finalTestSaveError ? `<p class="final-test-save-error" role="alert">Your result is visible, but could not be saved in this browser. Check available storage before leaving.</p>` : ""}<div class="final-test-result-actions"><button class="button button-primary" data-final-test-retake>Retake Final Test</button><button class="button button-quiet" data-page="home">Back to Learning Path</button></div></section>`;
}
function renderFinalTest() {
  const record = getFinalTestRecord();
  const unlock = finalTestUnlockStatus();
  let content;
  if (!unlock.unlocked) {
    const checklist = FINAL_TEST_REQUIREMENTS.map((id) => {
      const module = MODULES.find((item) => item.id === id);
      const score = pairProgress()[id] || 0;
      return `<li class="${score >= 100 ? "complete" : ""}"><span>${score >= 100 ? "✓" : "○"}</span><strong>${escapeHtml(module?.title || id)}</strong><span>${score}%</span></li>`;
    }).join("");
    content = `<section class="final-test-locked panel"><span class="final-test-lock-icon">🔒</span><p class="page-kicker">ASSESSMENT LOCKED</p><h1>Final Test Locked</h1><p class="page-intro">Complete every required learning section to unlock the comprehensive 100-question course assessment.</p><ul class="final-test-requirements">${checklist}</ul><p class="final-test-grammar-note">Grammar questions are included in the Final Test. There is no separate Grammar practice section in this course.</p><button class="button button-primary" data-page="home">Continue Learning →</button></section>`;
  } else if (finalTestGenerating) {
    content = `<section class="final-test-locked panel"><span class="final-test-lock-icon">⏳</span><p class="page-kicker">PREPARING YOUR ASSESSMENT</p><h1>Building your Final Test…</h1><p class="page-intro">Preparing 100 questions from your course content. This may take a moment.</p></section>`;
  } else if (record.active) {
    content = record.active.mode === "review" ? renderFinalTestReview(record.active) : renderFinalTestQuestion(record.active);
  } else if (record.history.length) {
    content = renderFinalTestResult(record);
  } else {
    const requirements = FINAL_TEST_REQUIREMENTS.map((id) => MODULES.find((item) => item.id === id)?.title || id).join(" · ");
    content = `<header class="page-header"><div><p class="page-kicker">${LANGUAGES[state.target].flag} ${escapeHtml(courseName())}</p><h1 class="page-title">Final Test.</h1><p class="page-intro">Test everything you have learned with a comprehensive assessment across the course.</p></div><div class="header-course">Final Test<strong>100 Questions</strong></div></header><section class="final-test-start panel"><span class="final-test-lock-icon">🏆</span><h2>Ready to test your skills?</h2><p>100 questions · 60 minutes · Multiple choice, fill-in-the-blank, image, listening, translation, and mixed question styles.</p><p>Sections: Alphabet, Numbers, Vocabulary, Photo Name, Grammar, Stories, Pronunciation / Listening, and Translation.</p><p class="final-test-prerequisite-copy">Unlocked after 100% completion in: ${escapeHtml(requirements)}.</p>${record.attempts ? `<div class="final-test-best-score">Attempt ${record.attempts} · Best score ${record.bestScore}%</div>` : ""}${finalTestGenerationError ? `<p class="final-test-save-error" role="alert">${escapeHtml(finalTestGenerationError)}</p>` : ""}<button class="button button-primary final-test-start-button" data-final-test-start>Start Final Test →</button><p class="final-test-draft-note">Your answers, question position, review marks, and timer are saved in this browser.</p></section>`;
  }
  if (finalTestSaveError && record.active) {
    content += `<p class="final-test-save-error" role="alert">This browser could not save your current Final Test progress. Answers may not survive a page refresh.</p>`;
  }
  document.querySelector("#page-content").innerHTML = content;
  if (record.active) startFinalTestTimer();
}
function handleFinalTestClick(event) {
  if (event.target.closest("[data-final-test-start]") || event.target.closest("[data-final-test-retake]")) {
    void beginFinalTest();
    return true;
  }
  const answerButton = event.target.closest("[data-final-test-answer]");
  if (answerButton) {
    const active = getFinalTestRecord().active;
    const question = active?.questions[active.index];
    const answer = question?.options[Number(answerButton.dataset.finalTestAnswer)];
    if (!active || typeof answer !== "string") {
      showToast("That answer could not be selected.");
      return true;
    }
    active.answers[active.index] = answer;
    active.remainingSeconds = finalTestRemainingSeconds(active);
    saveFinalTestProgress();
    render();
    return true;
  }
  const jumpButton = event.target.closest("[data-final-test-jump]");
  if (jumpButton) {
    const active = getFinalTestRecord().active;
    const index = Number(jumpButton.dataset.finalTestJump);
    if (!active || !Number.isInteger(index) || index < 0 || index >= 100) return true;
    active.index = index;
    active.mode = "question";
    active.remainingSeconds = finalTestRemainingSeconds(active);
    saveFinalTestProgress();
    render();
    return true;
  }
  const active = getFinalTestRecord().active;
  if (!active) return false;
  if (event.target.closest("[data-final-test-mark]")) {
    active.marked = active.marked.includes(active.index)
      ? active.marked.filter((index) => index !== active.index)
      : [...active.marked, active.index].sort((a, b) => a - b);
  } else if (event.target.closest("[data-final-test-previous]")) {
    active.index = Math.max(0, active.index - 1);
  } else if (event.target.closest("[data-final-test-next]")) {
    if (active.index === 99) active.mode = "review";
    else active.index += 1;
  } else if (event.target.closest("[data-final-test-review]")) {
    active.mode = "review";
  } else if (event.target.closest("[data-final-test-return]")) {
    active.mode = "question";
  } else if (event.target.closest("[data-final-test-submit]")) {
    if (!window.confirm("Are you sure you want to submit your Final Test? You will not be able to change your answers after submission.")) return true;
    finishFinalTest();
  } else if (event.target.closest("[data-final-test-audio]")) {
    const question = active.questions[active.index];
    if (!("speechSynthesis" in window)) {
      showToast("Speech playback is not supported by this browser.");
      return true;
    }
    const utterance = new SpeechSynthesisUtterance(question.speak);
    utterance.lang = question.voice;
    utterance.onerror = (speechEvent) => {
      if (speechEvent.error !== "canceled" && speechEvent.error !== "interrupted") showToast("Audio could not be played. Check your browser's speech settings.");
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    return true;
  } else return false;
  active.remainingSeconds = finalTestRemainingSeconds(active);
  saveFinalTestProgress();
  render();
  return true;
}
function getGameProgress() {
  if (!state.gameProgress || typeof state.gameProgress !== "object") state.gameProgress = {};
  const key = pairKey();
  if (!state.gameProgress[key] || typeof state.gameProgress[key] !== "object") {
    state.gameProgress[key] = { xp: 0, runs: 0, bestScore: 0, streak: 0, lastPlayed: "", badges: [] };
  }
  const progress = state.gameProgress[key];
  if (!Number.isFinite(progress.xp)) progress.xp = 0;
  if (!Number.isFinite(progress.runs)) progress.runs = 0;
  if (!Number.isFinite(progress.bestScore)) progress.bestScore = 0;
  if (!Number.isFinite(progress.streak)) progress.streak = 0;
  if (typeof progress.lastPlayed !== "string") progress.lastPlayed = "";
  if (!Array.isArray(progress.badges)) progress.badges = [];
  return progress;
}
function gameDefinition(id = activeGameId) {
  return CENTER_GAMES.find((game) => game.id === id);
}
function gameTargetWord(word) {
  return word[state.target] || word.en;
}
function gameSourceWord(word) {
  return word[state.source] || word.en;
}
function gameSetWords() {
  const words = shuffled(VOCABULARY_WORDS.filter((word) => word.level === "beginner"));
  gameQuestionWords = Array.from({ length: 10 }, (_, index) => words[index % words.length]);
  gameChoiceOptions = {};
}
function startCenterGame(id) {
  const definition = gameDefinition(id);
  if (!definition) return;
  if (gameTimer) clearInterval(gameTimer);
  if (gameMemoryTimeout) clearTimeout(gameMemoryTimeout);
  activeGameId = id;
  gameStage = "play";
  gameSetWords();
  gameQuestionIndex = 0;
  gameSelectedTileIds = [];
  gameSelectedOption = "";
  gameFeedback = "";
  gameAnswered = false;
  gameCorrect = 0;
  gameWrong = 0;
  gameStreak = 0;
  gameBestStreak = 0;
  gameTimeLeft = id === "speed-challenge" ? 60 : 0;
  gameMatchedIds = [];
  gameMatchLeft = "";
  gameMemoryFlipped = [];
  gameMemoryMatched = [];
  gameMemoryBusy = false;
  gameFinishedOnce = false;
  gameEarnedXp = 0;
  if (id === "memory-match") {
    const words = gameQuestionWords.slice(0, 4);
    gameMemoryCards = shuffled(words.flatMap((word) => [
      { id: `${word.id}:picture`, wordId: word.id, kind: "picture" },
      { id: `${word.id}:word`, wordId: word.id, kind: "word" }
    ]));
  } else if (id === "word-match") {
    gameQuestionWords = shuffled(gameQuestionWords.slice(0, 4));
  } else {
    gameQuestionWords = gameQuestionWords.slice(0, id === "speed-challenge" ? 10 : 5);
  }
  if (id === "speed-challenge") {
    gameTimer = setInterval(() => {
      if (gameStage !== "play") return;
      gameTimeLeft -= 1;
      if (gameTimeLeft <= 0) finishCenterGame();
      else render();
    }, 1000);
  }
  render();
}
function finishCenterGame() {
  if (gameFinishedOnce) return;
  gameFinishedOnce = true;
  if (gameTimer) {
    clearInterval(gameTimer);
    gameTimer = null;
  }
  const definition = gameDefinition();
  const previousState = JSON.stringify(state);
  const progress = getGameProgress();
  const xpEarned = gameCorrect * definition.xp;
  gameEarnedXp = xpEarned;
  progress.xp += xpEarned;
  recordLearningDay();
  state.level = currentCourseLevel();
  progress.runs += 1;
  progress.bestScore = Math.max(progress.bestScore, gameCorrect);
  progress.bestStreak = Math.max(progress.bestStreak || 0, gameBestStreak);
  if (progress.lastPlayed !== todayKey()) {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;
    progress.streak = progress.lastPlayed === yesterday ? progress.streak + 1 : 1;
    progress.lastPlayed = todayKey();
  }
  if (!progress.badges.includes("first-game")) progress.badges.push("first-game");
  if (progress.runs >= 5 && !progress.badges.includes("game-master")) progress.badges.push("game-master");
  if (gameCorrect >= 4 && !progress.badges.includes("word-master")) progress.badges.push("word-master");
  pairProgress().games = Math.max(pairProgress().games || 0, Math.min(100, Math.round(gameCorrect / Math.max(gameCorrect + gameWrong, 1) * 100)));
  if (persistState()) {
    gameStage = "result";
    render();
    showToast(`Game complete! You earned ${xpEarned} XP.`);
  } else {
    state = JSON.parse(previousState);
    gameStage = "result";
    render();
  }
}
function recordGameAnswer(correct) {
  gameAnswered = true;
  if (correct) {
    gameCorrect += 1;
    gameStreak += 1;
    gameBestStreak = Math.max(gameBestStreak, gameStreak);
    gameFeedback = "🎉 Correct!";
  } else {
    gameWrong += 1;
    gameStreak = 0;
    gameFeedback = "❌ Not quite — try the next one!";
  }
}
function advanceCenterGame() {
  if (activeGameId === "speed-challenge" && gameTimeLeft > 0) {
    gameQuestionIndex = (gameQuestionIndex + 1) % gameQuestionWords.length;
    gameAnswered = false;
    gameSelectedOption = "";
    gameFeedback = "";
    render();
    return;
  }
  if (gameQuestionIndex + 1 >= gameQuestionWords.length) {
    finishCenterGame();
    return;
  }
  gameQuestionIndex += 1;
  gameSelectedTileIds = [];
  gameSelectedOption = "";
  gameFeedback = "";
  gameAnswered = false;
  gameChoiceOptions = {};
  render();
}
function renderGameCenter() {
  const progress = getGameProgress();
  return `<header class="page-header"><div><p class="page-kicker">${LANGUAGES[state.source].flag} ${courseName()}</p><h1 class="page-title">🎮 Game Center</h1><p class="page-intro">Learn · Play · Earn XP</p></div></header>
    <section class="game-center-status" aria-label="Game progress"><span>🔥 Streak <strong>${progress.streak}</strong></span><span>⭐ ${progress.xp} XP</span><span>🏆 ${progress.badges.length} Badges</span></section>
    <section class="game-library"><div class="section-heading"><div><h2>Choose a game</h2><p>Play a quick round in your ${escapeHtml(courseName())} course.</p></div></div>
      <div class="game-library-grid">${CENTER_GAMES.map((game) => `<article class="game-library-card"><span class="game-library-icon">${game.icon}</span><div class="game-library-copy"><h3>${game.title}</h3><p>${game.description}</p><span class="game-difficulty">⭐ ${game.difficulty}</span><span class="game-reward">+${game.xp} XP / correct</span></div><button class="button button-primary game-play-button" data-game-start="${game.id}">Play →</button></article>`).join("")}</div>
    </section>`;
}
function renderGameChoiceOptions(word, usedIds = [], sourceAnswers = false) {
  if (!gameChoiceOptions[word.id]) {
    gameChoiceOptions[word.id] = shuffled([word, ...shuffled(VOCABULARY_WORDS.filter((item) => item.id !== word.id && !usedIds.includes(item.id))).slice(0, 3)]).map((item) => item.id);
  }
  const options = gameChoiceOptions[word.id].map((id) => VOCABULARY_WORDS.find((item) => item.id === id)).filter(Boolean);
  return `<div class="center-game-options">${options.map((option) => `<button class="center-game-option ${gameAnswered && option.id === word.id ? "correct" : ""} ${gameAnswered && gameSelectedOption === option.id && option.id !== word.id ? "wrong" : ""}" data-game-option="${option.id}" ${gameAnswered ? "disabled" : ""}>${escapeHtml(sourceAnswers ? gameSourceWord(option) : gameTargetWord(option))}</button>`).join("")}</div>`;
}
function renderPhotoMatch(word) {
  return `<div class="center-game-prompt"><div class="center-game-picture">${word.image}</div><h2>What is this?</h2><p>${LANGUAGES[state.target].name} · Question ${gameQuestionIndex + 1} / ${gameQuestionWords.length}</p>${renderGameChoiceOptions(word)}</div>`;
}
function renderScramble(word) {
  const letters = graphemes(gameTargetWord(word));
  const tiles = shuffled(letters.map((letter, index) => ({ id: index, letter })));
  const selectedTiles = gameSelectedTileIds.map((id) => tiles.find((tile) => tile.id === id)).filter(Boolean);
  return `<div class="center-game-prompt"><div class="center-game-picture">${word.image}</div><p class="game-word-hint">${escapeHtml(gameSourceWord(word))} · ${LANGUAGES[state.target].name}</p><h2>Arrange the letters to make a word</h2><div class="scramble-answer" aria-label="Your answer">${selectedTiles.map((tile) => `<button class="scramble-tile selected" data-game-tile-remove="${tile.id}">${escapeHtml(tile.letter)}</button>`).join("") || `<span class="scramble-placeholder">Tap letters below</span>`}</div><div class="scramble-tiles">${tiles.filter((tile) => !gameSelectedTileIds.includes(tile.id)).map((tile) => `<button class="scramble-tile" data-game-tile="${tile.id}">${escapeHtml(tile.letter)}</button>`).join("")}</div><button class="button button-primary" data-game-scramble-check ${gameAnswered ? "disabled" : ""}>Check</button><p class="game-round-count">Question ${gameQuestionIndex + 1} / ${gameQuestionWords.length}</p></div>`;
}
function renderListenChoose(word) {
  return `<div class="center-game-prompt"><button class="button button-primary listen-game-audio" data-game-audio>🔊 Listen to the word</button><h2>Choose the matching word</h2><p class="game-round-count">${LANGUAGES[state.target].name} audio → ${LANGUAGES[state.source].name}</p><p class="game-round-count">Question ${gameQuestionIndex + 1} / ${gameQuestionWords.length}</p>${renderGameChoiceOptions(word, [], true)}</div>`;
}
function renderWordMatch() {
  const remaining = gameQuestionWords.filter((word) => !gameMatchedIds.includes(word.id));
  const words = shuffled(remaining);
  return `<div class="center-game-prompt"><h2>Match the picture with its word</h2><p>Pairs matched: ${gameMatchedIds.length} / ${gameQuestionWords.length}</p><div class="center-match-columns"><div><h3>PICTURES</h3>${remaining.map((word) => `<button class="center-match-option ${gameMatchLeft === word.id ? "selected" : ""}" data-game-match-picture="${word.id}">${word.image}</button>`).join("")}</div><div><h3>WORDS</h3>${words.map((word) => `<button class="center-match-option" data-game-match-word="${word.id}">${escapeHtml(gameTargetWord(word))}</button>`).join("")}</div></div></div>`;
}
function renderSpeedChallenge(word) {
  return `<div class="center-game-prompt speed-game-prompt"><div class="speed-game-clock">⚡ 00:${String(gameTimeLeft).padStart(2,"0")}</div><div class="center-game-picture">${word.image}</div><h2>What is this?</h2>${renderGameChoiceOptions(word)}</div>`;
}
function renderMemoryMatch() {
  return `<div class="center-game-prompt"><h2>Find the matching pairs</h2><p>Pairs found: ${gameMemoryMatched.length} / 4</p><div class="memory-game-grid">${gameMemoryCards.map((card, index) => {
    const flipped = gameMemoryFlipped.includes(index) || gameMemoryMatched.includes(card.wordId);
    const word = VOCABULARY_WORDS.find((item) => item.id === card.wordId);
    const face = !flipped ? "❓" : card.kind === "picture" ? word.image : gameTargetWord(word);
    return `<button class="memory-game-card ${flipped ? "flipped" : ""} ${gameMemoryMatched.includes(card.wordId) ? "matched" : ""}" data-game-memory="${index}" aria-label="${flipped ? escapeHtml(String(face)) : "Hidden card"}" ${gameMemoryBusy || gameMemoryMatched.includes(card.wordId) || gameMemoryFlipped.includes(index) ? "disabled" : ""}>${escapeHtml(String(face))}</button>`;
  }).join("")}</div></div>`;
}
function renderCenterGamePlay() {
  const definition = gameDefinition();
  const word = gameQuestionWords[gameQuestionIndex];
  const gameMarkup = {
    "photo-match": renderPhotoMatch(word),
    "word-scramble": renderScramble(word),
    "listen-choose": renderListenChoose(word),
    "word-match": renderWordMatch(),
    "speed-challenge": renderSpeedChallenge(word),
    "memory-match": renderMemoryMatch()
  }[activeGameId];
  const canAdvance = gameAnswered && (activeGameId !== "memory-match" || gameMemoryMatched.length === 4);
  return `<div class="game-play-toolbar"><button class="button button-quiet" data-game-center>← Game Center</button><span>${definition.icon} ${definition.title}</span></div><section class="center-game-card"><div class="center-game-score"><span>${definition.difficulty} · +${definition.xp} XP each</span><strong>⭐ ${gameCorrect * definition.xp} points</strong></div>${gameMarkup}${gameFeedback ? `<p class="game-answer-feedback ${gameFeedback.startsWith("❌") ? "feedback-wrong" : "feedback-correct"}">${gameFeedback}</p>` : ""}${canAdvance ? `<button class="button button-primary" data-game-next>${activeGameId === "speed-challenge" ? "Next →" : gameQuestionIndex + 1 === gameQuestionWords.length ? "See results →" : "Next →"}</button>` : ""}</section>`;
}
function renderCenterGameResult() {
  const definition = gameDefinition();
  const total = gameCorrect + gameWrong;
  const score = total ? Math.round(gameCorrect / total * 100) : 0;
  const progress = getGameProgress();
  return `<section class="center-game-result"><span class="game-result-confetti">🎉</span><p class="page-kicker">${definition.title.toUpperCase()} COMPLETE</p><h1>Great job!</h1><div class="game-result-xp">⚡ ${gameEarnedXp} XP</div><div class="game-result-stars">${Array.from({length:5},(_,index)=>`<span class="${index < Math.round(score / 20) ? "earned" : ""}">★</span>`).join("")}</div><strong class="game-result-score">Score: ${score}/100</strong><div class="game-result-stats"><div><strong>${gameCorrect}</strong><span>Correct</span></div><div><strong>${gameWrong}</strong><span>Wrong</span></div><div><strong>${gameBestStreak} 🔥</strong><span>Best streak</span></div><div><strong>${activeGameId === "speed-challenge" ? `${gameTimeLeft}s` : `${score}%`}</strong><span>${activeGameId === "speed-challenge" ? "Time left" : "Accuracy"}</span></div></div><div class="game-result-badge">🏅 <strong>${progress.badges.includes("word-master") ? "Word Master" : progress.badges.includes("game-master") ? "Game Master" : "Game Starter"}</strong></div><div class="game-result-actions"><button class="button button-primary" data-game-replay>Play Again</button><button class="button button-quiet" data-game-center>Choose Another Game</button><button class="text-link" data-page="home">Continue Learning</button></div></section>`;
}
function renderGameCenterPage() {
  const content = gameStage === "center" ? renderGameCenter() : gameStage === "play" ? renderCenterGamePlay() : renderCenterGameResult();
  document.querySelector("#page-content").innerHTML = content;
}
function handleNumbersClick(event) {
  const selectedNumber = event.target.closest("[data-number-select]");
  if (selectedNumber) {
    const value = Number(selectedNumber.dataset.numberSelect);
    const numbers = numbersForCategory(numbersCategory);
    if (!Number.isInteger(value) || !numbers.some((number) => number.value === value)) {
      showToast("That number could not be opened.");
      return true;
    }
    const previousState = JSON.stringify(state);
    getNumberProgress().selectedValue = value;
    if (persistState()) {
      renderNumbers();
      document.querySelector(".numbers-feature")?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else state = JSON.parse(previousState);
    return true;
  }
  const category = event.target.closest("[data-numbers-category]");
  if (category) {
    numbersCategory = category.dataset.numbersCategory;
    numbersPageIndex = 0;
    rememberCurrentLearningPosition();
    renderNumbers();
    persistState();
    return true;
  }
  const page = event.target.closest("[data-numbers-page]");
  if (page) {
    numbersPageIndex += Number(page.dataset.numbersPage);
    rememberCurrentLearningPosition();
    renderNumbers();
    persistState();
    return true;
  }
  const learnButton = event.target.closest("[data-number-learn]");
  if (learnButton) {
    const value = Number(learnButton.dataset.numberLearn);
    if (!Number.isInteger(value) || value < 1 || value > 100) {
      showToast("This number cannot be added to the 1–100 progress list.");
      return true;
    }
    const previousState = JSON.stringify(state);
    const progress = getNumberProgress();
    progress.selectedValue = value;
    progress.learned = progress.learned.includes(value)
      ? progress.learned.filter((learnedValue) => learnedValue !== value)
      : [...progress.learned, value].sort((first, second) => first - second);
    pairProgress().numbers = progress.learned.length;
    recordLearningDay();
    if (persistState()) renderNumbers();
    else state = JSON.parse(previousState);
    return true;
  }
  return false;
}
function handleGameCenterClick(event) {
  const start = event.target.closest("[data-game-start]");
  if (start) {
    startCenterGame(start.dataset.gameStart);
    return true;
  }
  if (event.target.closest("[data-game-center]")) {
    if (gameTimer) {
      clearInterval(gameTimer);
      gameTimer = null;
    }
    if (gameMemoryTimeout) {
      clearTimeout(gameMemoryTimeout);
      gameMemoryTimeout = null;
    }
    gameStage = "center";
    render();
    return true;
  }
  if (event.target.closest("[data-game-replay]")) {
    startCenterGame(activeGameId);
    return true;
  }
  const option = event.target.closest("[data-game-option]");
  if (option && !gameAnswered) {
    gameSelectedOption = option.dataset.gameOption;
    const current = gameQuestionWords[gameQuestionIndex];
    recordGameAnswer(gameSelectedOption === current.id);
    render();
    return true;
  }
  const tile = event.target.closest("[data-game-tile]");
  if (tile && !gameAnswered) {
    gameSelectedTileIds.push(Number(tile.dataset.gameTile));
    render();
    return true;
  }
  const removeTile = event.target.closest("[data-game-tile-remove]");
  if (removeTile && !gameAnswered) {
    gameSelectedTileIds = gameSelectedTileIds.filter((id) => id !== Number(removeTile.dataset.gameTileRemove));
    render();
    return true;
  }
  if (event.target.closest("[data-game-scramble-check]")) {
    if (!gameSelectedTileIds.length) {
      showToast("Select the letters to build your word first.");
      return true;
    }
    const word = gameQuestionWords[gameQuestionIndex];
    const answer = gameSelectedTileIds.map((id) => {
      const letters = graphemes(gameTargetWord(word));
      return letters[id];
    }).join("");
    recordGameAnswer(answer.toLocaleLowerCase() === gameTargetWord(word).toLocaleLowerCase());
    render();
    return true;
  }
  if (event.target.closest("[data-game-audio]")) {
    const word = gameQuestionWords[gameQuestionIndex];
    if (!("speechSynthesis" in window)) showToast("Speech playback is not supported by this browser.");
    else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(gameTargetWord(word));
      utterance.lang = LANGUAGES[state.target].voice;
      utterance.onerror = (speechEvent) => {
        if (speechEvent.error !== "canceled" && speechEvent.error !== "interrupted") showToast("Audio could not be played. Check your browser's speech settings.");
      };
      window.speechSynthesis.speak(utterance);
    }
    return true;
  }
  if (event.target.closest("[data-game-match-picture]")) {
    gameMatchLeft = event.target.closest("[data-game-match-picture]").dataset.gameMatchPicture;
    render();
    return true;
  }
  const matchWord = event.target.closest("[data-game-match-word]");
  if (matchWord) {
    if (!gameMatchLeft) {
      showToast("Choose a picture first.");
      return true;
    }
    const correct = gameMatchLeft === matchWord.dataset.gameMatchWord;
    if (correct) gameMatchedIds.push(gameMatchLeft);
    gameMatchLeft = "";
    if (correct) {
      gameCorrect += 1;
      gameStreak += 1;
      gameBestStreak = Math.max(gameBestStreak, gameStreak);
    } else {
      gameWrong += 1;
      gameStreak = 0;
    }
    if (correct && gameMatchedIds.length === gameQuestionWords.length) {
      gameAnswered = true;
      gameQuestionIndex = gameQuestionWords.length - 1;
      gameFeedback = "🎉 All pairs matched!";
    } else if (!correct) {
      gameAnswered = false;
      gameFeedback = "❌ Those do not match. Try another pair.";
    } else {
      gameAnswered = false;
      gameFeedback = "🎉 Correct pair!";
    }
    render();
    return true;
  }
  const memoryCard = event.target.closest("[data-game-memory]");
  if (memoryCard && !gameMemoryBusy) {
    const index = Number(memoryCard.dataset.gameMemory);
    gameMemoryFlipped.push(index);
    if (gameMemoryFlipped.length === 2) {
      const [first, second] = gameMemoryFlipped.map((cardIndex) => gameMemoryCards[cardIndex]);
      const matched = first.wordId === second.wordId && first.kind !== second.kind;
      gameMemoryBusy = true;
      if (matched) {
        gameMemoryMatched.push(first.wordId);
        recordGameAnswer(true);
      } else {
        recordGameAnswer(false);
      }
      render();
      gameMemoryTimeout = window.setTimeout(() => {
        gameMemoryTimeout = null;
        gameMemoryFlipped = [];
        gameMemoryBusy = false;
        gameAnswered = false;
        gameFeedback = "";
        if (gameMemoryMatched.length === 4) {
          gameAnswered = true;
          gameFeedback = "🎉 All pairs found!";
          gameQuestionIndex = gameQuestionWords.length - 1;
        }
        render();
      }, 800);
    } else render();
    return true;
  }
  if (event.target.closest("[data-game-next]")) {
    advanceCenterGame();
    return true;
  }
  return false;
}
function localizedLessonItems(id) {
  const entries = ALPHABETS[state.target];
  const samples = [entries[0], entries[Math.floor(entries.length / 2)], entries[entries.length - 1]];
  const icons = id === "photo-words" ? ["☀️", "🍎", "🏠"] : id === "games" ? ["🔤", "🧠", "✨"] : ["◖", "◖", "◖"];
  return samples.map((entry, index) => {
    const [letter, word, meaning, example] = entry;
    if (id === "games") return [icons[index], `${letter} → ${word}`, `${meaning} · ${example}`, `${word}. ${example}`];
    return [icons[index], word, `${meaning} · ${example}`, `${word}. ${example}`];
  });
}
function getStoryProgress() {
  if (!state.storyProgress || typeof state.storyProgress !== "object") state.storyProgress = {};
  const key = pairKey();
  if (!state.storyProgress[key] || typeof state.storyProgress[key] !== "object") {
    state.storyProgress[key] = { completed: [], xp: 0, streak: 0, lastCompleted: "", badges: [] };
  }
  const progress = state.storyProgress[key];
  if (!Array.isArray(progress.completed)) progress.completed = [];
  if (!Number.isFinite(progress.xp)) progress.xp = 0;
  if (!Number.isFinite(progress.streak)) progress.streak = 0;
  if (typeof progress.lastCompleted !== "string") progress.lastCompleted = "";
  if (!Array.isArray(progress.badges)) progress.badges = [];
  return progress;
}
function startStory(id) {
  activeStoryId = id;
  storyEarnedXp = 0;
  storyStage = "read";
  storyPageIndex = 0;
  storyWordId = "";
  storyQuizIndex = 0;
  storyQuizAnswers = [];
  storyQuizChecked = false;
  storyOrder = [3, 1, 2];
  storyOrderChecked = false;
  storyListenChoice = "";
  storyListenChecked = false;
  rememberCurrentLearningPosition();
}
function storyById(id = activeStoryId) {
  return STORY_ADVENTURES.find((story) => story.id === id);
}
function storyTitle(story) {
  return story.titles[state.target] || story.title;
}
function storyScore(story) {
  const quizCorrect = story.questions.reduce((count, question, index) => count + (storyQuizAnswers[index] === question.answer ? 1 : 0), 0);
  const orderCorrect = storyOrder.join(",") === story.order.join(",");
  const listenCorrect = storyListenChoice === `${story.id}:${story.listenPage}`;
  return { quizCorrect, orderCorrect, listenCorrect, correct: quizCorrect + Number(orderCorrect) + Number(listenCorrect), total: story.questions.length + 2 };
}
function storyAnswerLabel(answer) {
  const fixed = {
    two: { en:"two", de:"zwei", fr:"deux", es:"dos", hi:"दो" },
    "his family": { en:"his family", de:"seine Familie", fr:"sa famille", es:"su familia", hi:"उसका परिवार" },
    "a friend": { en:"a friend", de:"ein Freund", fr:"un ami", es:"un amigo", hi:"एक दोस्त" },
    "a teacher": { en:"a teacher", de:"ein Lehrer", fr:"un professeur", es:"un maestro", hi:"एक शिक्षक" },
    "a cat": { en:"a cat", de:"eine Katze", fr:"un chat", es:"un gato", hi:"एक बिल्ली" },
    Pip: { en:"Pip", de:"Pip", fr:"Pip", es:"Pip", hi:"पिप" },
    Max: { en:"Max", de:"Max", fr:"Max", es:"Max", hi:"मैक्स" },
    Mia: { en:"Mia", de:"Mia", fr:"Mia", es:"Mia", hi:"मिया" },
    Ben: { en:"Ben", de:"Ben", fr:"Ben", es:"Ben", hi:"बेन" },
    "meet again": { en:"meet again", de:"sich wiedersehen", fr:"se revoir", es:"volver a verse", hi:"फिर मिलना" },
    "after the rain": { en:"after the rain", de:"nach dem Regen", fr:"après la pluie", es:"después de la lluvia", hi:"बारिश के बाद" },
    "before sunrise": { en:"before sunrise", de:"vor Sonnenaufgang", fr:"avant le lever du soleil", es:"antes del amanecer", hi:"सूर्योदय से पहले" },
    "at lunchtime": { en:"at lunchtime", de:"zur Mittagszeit", fr:"à l'heure du déjeuner", es:"a la hora del almuerzo", hi:"दोपहर के भोजन के समय" },
    "in winter": { en:"in winter", de:"im Winter", fr:"en hiver", es:"en invierno", hi:"सर्दियों में" },
    "a friendship": { en:"a friendship", de:"eine Freundschaft", fr:"une amitié", es:"una amistad", hi:"एक दोस्ती" },
    "a new house": { en:"a new house", de:"ein neues Haus", fr:"une nouvelle maison", es:"una casa nueva", hi:"एक नया घर" },
    "a new gate": { en:"a new gate", de:"ein neues Tor", fr:"un nouveau portail", es:"una puerta nueva", hi:"एक नया दरवाज़ा" },
    "a storybook": { en:"a storybook", de:"ein Geschichtenbuch", fr:"un livre d'histoires", es:"un libro de cuentos", hi:"एक कहानी की किताब" }
  };
  if (fixed[answer]) return fixed[answer][state.target];
  const word = storyWord(answer);
  return word ? word[state.target] || word.en : answer;
}
function renderStoryLibrary() {
  const progress = getStoryProgress();
  const stories = STORY_ADVENTURES.filter((story) => storyLevel === "all" || story.level === storyLevel);
  const filterButtons = STORY_LEVELS.map(([id, label]) => `<button class="story-filter ${storyLevel === id ? "active" : ""}" data-story-level="${id}">${label}</button>`).join("");
  return `<header class="page-header"><div>  <p class="page-kicker">${LANGUAGES[state.source].flag} ${courseName()} · Read → Listen → Understand → Play → Earn XP</p><h1 class="page-title">Story Adventure.</h1><p class="page-intro">Choose a story, explore new words, and play your way to the ending.</p></div><div class="header-course">Stories completed<strong>${progress.completed.length} / ${STORY_ADVENTURES.length}</strong></div></header>
    <section class="story-library"><div class="section-heading"><div><h2>📖 Choose a story</h2><p>Your stories and rewards are saved for ${escapeHtml(courseName())}.</p></div><span class="story-xp-total">⭐ ${progress.xp} XP</span></div>
      <div class="story-filters" role="group" aria-label="Filter stories by difficulty">${filterButtons}</div>
      <div class="story-library-grid">${stories.map((story) => {
        const completed = progress.completed.includes(story.id);
        return `<article class="story-library-card ${completed ? "story-is-complete" : ""}"><span class="story-card-icon">${story.icon}</span><h3>${escapeHtml(storyTitle(story))}</h3><span class="story-level">${story.level}</span><span class="story-card-xp">⭐ ${story.xp} XP + challenge bonuses</span><button class="button ${completed ? "button-quiet" : "button-primary"}" data-story-start="${story.id}">${completed ? "Read again" : "Start"} <span aria-hidden="true">→</span></button>${completed ? `<small class="story-completed-label">✓ Completed</small>` : ""}</article>`;
      }).join("") || `<p class="story-empty">No stories at this level yet.</p>`}</div>
    </section>`;
}
function renderStoryReading(story) {
  const text = storyText(story, storyPageIndex);
  const wordId = story.pages[storyPageIndex].word;
  const word = storyWord(wordId);
  const targetWord = word ? word[state.target] || word.en : "";
  const safeWord = targetWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const highlighted = safeWord ? escapeHtml(text).replace(new RegExp(`(${safeWord})`, "iu"), `<button class="story-inline-word" data-story-word="${wordId}">$1</button>`) : escapeHtml(text);
  const percent = Math.round(((storyPageIndex + 1) / story.pages.length) * 100);
  return `<div class="story-flow-header"><button class="button button-quiet" data-story-library>← Story library</button><span>${LANGUAGES[state.source].flag} ${LANGUAGES[state.source].name} → ${LANGUAGES[state.target].flag} ${LANGUAGES[state.target].name}</span></div>
    <section class="story-reading-card">
      <div class="story-reading-art" aria-hidden="true">${story.pages[storyPageIndex].word ? storyWord(story.pages[storyPageIndex].word).image : story.icon}</div>
      <p class="page-kicker">${story.level} · ${escapeHtml(storyTitle(story))}</p><h2>${escapeHtml(storyTitle(story))}</h2>
      <p class="story-reading-text" lang="${LANGUAGES[state.target].voice}" dir="${state.target === "hi" ? "auto" : "ltr"}">${highlighted}</p>
      <p class="story-reading-translation"><span class="translation-language-label">${LANGUAGES[state.source].flag} ${LANGUAGES[state.source].name}</span> · ${escapeHtml(story.pages[storyPageIndex].text[state.source] || "Translation unavailable")}</p>
      <p class="story-tap-hint">Tap the highlighted word to explore its meaning.</p>
      <div class="story-audio-controls" role="group" aria-label="Story audio controls"><button class="button button-primary" data-story-audio="play">🔊 Listen to Story</button><button class="button button-quiet" data-story-audio="pause">⏸ Pause</button><button class="button button-quiet" data-story-audio="replay">🔁 Replay</button></div>
      <div class="story-page-progress"><div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div><span>Page ${storyPageIndex + 1} / ${story.pages.length}</span></div>
      <div class="story-page-navigation"><button class="button button-quiet" data-story-page="-1" ${storyPageIndex === 0 ? "disabled" : ""}>← Previous</button><button class="button button-primary" data-story-page="1">${storyPageIndex === story.pages.length - 1 ? "Story Challenge →" : "Next →"}</button></div>
    </section>${storyWordId === storyWord(story.pages[storyPageIndex].word)?.id ? renderStoryWordPopup(word) : ""}`;
}
function renderStoryWordPopup(word) {
  if (!word) return "";
  const targetLanguage = LANGUAGES[state.target];
  const sourceLanguage = LANGUAGES[state.source];
  loadStoryWordTranslations(word, sourceLanguage, targetLanguage);
  return `<div class="story-word-backdrop" data-story-word-close><aside class="story-word-popup" role="dialog" aria-modal="true" aria-label="${escapeHtml(word[state.target] || word.en)} vocabulary"><button class="story-popup-close" data-story-word-close aria-label="Close">×</button><span class="story-word-icon">${word.image}</span><p class="page-kicker">📚 Story vocabulary</p><h3>${escapeHtml(word[state.target] || word.en)}</h3><p class="story-word-translation">${sourceLanguage.flag} ${sourceLanguage.name}: ${escapeHtml(word[state.source] || word.en)}</p><p class="story-popup-meaning">${targetLanguage.flag} ${targetLanguage.name}: <span data-story-word-meaning>Translating…</span></p><button class="listen-button" data-speak="${escapeHtml(word[state.target] || word.en)}" data-voice="${targetLanguage.voice}" data-story-word-speaker="${word.id}">🔊 Listen</button><p class="story-popup-example"><span class="learning-language-label">${targetLanguage.flag} ${targetLanguage.name}</span> · <span data-story-word-example>${targetLanguage.code.toLowerCase() === "en" ? escapeHtml(word.example) : "Translating…"}</span></p><p class="story-popup-example-translation"><span class="translation-language-label">${sourceLanguage.flag} ${sourceLanguage.name}</span> · <span data-story-word-example-translation>${sourceLanguage.code.toLowerCase() === "en" && targetLanguage.code.toLowerCase() !== "en" ? escapeHtml(word.example) : "Translating…"}</span></p></aside></div>`;
}
function renderStoryQuiz(story) {
  const question = story.questions[storyQuizIndex];
  const selected = storyQuizAnswers[storyQuizIndex] || "";
  const checked = storyQuizChecked;
  const correct = selected === question.answer;
  return `<div class="story-flow-header"><button class="button button-quiet" data-story-library>← Story library</button><span>🎯 Story challenge · ${storyQuizIndex + 1} / ${story.questions.length}</span></div><section class="story-stage-card">
    <p class="page-kicker">🎯 STORY CHALLENGE</p><h2>${question.q[Object.keys(LANGUAGES).indexOf(state.target)]}</h2>
    <div class="story-quiz-options">${question.options.map((option) => `<button class="story-quiz-option ${selected === option ? "selected" : ""} ${checked && option === question.answer ? "correct" : ""} ${checked && selected === option && !correct ? "wrong" : ""}" data-story-answer="${escapeHtml(option)}" ${checked ? "disabled" : ""}><span class="story-radio"></span>${escapeHtml(storyAnswerLabel(option))}${checked && option === question.answer ? "<b>✓</b>" : ""}</button>`).join("")}</div>
    ${checked ? `<p class="story-feedback ${correct ? "feedback-correct" : "feedback-wrong"}">${correct ? "🎉 Correct! +10 XP" : `Not quite — ${escapeHtml(storyAnswerLabel(question.answer))} is the answer.`}</p>` : ""}
    <button class="button button-primary story-stage-action" ${checked ? "data-story-quiz-next" : "data-story-quiz-check"}>${checked ? storyQuizIndex + 1 === story.questions.length ? "Put the story in order →" : "Next question →" : "Check answer"}</button>
  </section>`;
}
function renderStoryOrder(story) {
  const correct = storyOrder.join(",") === story.order.join(",");
  const sentences = story.order.map((pageIndex) => ({ pageIndex, text: storyText(story, pageIndex) }));
  return `<div class="story-flow-header"><button class="button button-quiet" data-story-library>← Story library</button><span>🧩 Put the story in order</span></div><section class="story-stage-card">
    <p class="page-kicker">🧩 STORY PUZZLE</p><h2>Put the story in order</h2><p class="story-stage-intro">Drag the sentences into order, or use the arrow buttons.</p>
    <div class="story-order-list" data-story-order-list>${storyOrder.map((pageIndex, index) => `<div class="story-order-item" draggable="${!storyOrderChecked}" data-story-order-item="${pageIndex}"><span class="story-drag-handle" aria-hidden="true">⠿</span><span class="story-order-text">${escapeHtml(storyText(story, pageIndex))}</span><button class="story-order-move" data-story-order-move="${index}" data-story-order-direction="-1" aria-label="Move sentence up" ${storyOrderChecked || index === 0 ? "disabled" : ""}>↑</button><button class="story-order-move" data-story-order-move="${index}" data-story-order-direction="1" aria-label="Move sentence down" ${storyOrderChecked || index === storyOrder.length - 1 ? "disabled" : ""}>↓</button></div>`).join("")}</div>
    ${storyOrderChecked ? `<p class="story-feedback ${correct ? "feedback-correct" : "feedback-wrong"}">${correct ? "🎉 Perfect order! +10 XP" : `Try again next time. The story begins: “${escapeHtml(storyText(story, story.order[0]))}”`}</p>` : ""}
    <button class="button button-primary story-stage-action" ${storyOrderChecked ? "data-story-order-next" : "data-story-order-check"}>${storyOrderChecked ? "Listen & choose →" : "Check order"}</button>
  </section>`;
}
function renderStoryListen(story) {
  const correctId = `${story.id}:${story.listenPage}`;
  const otherPages = STORY_ADVENTURES.flatMap((item) => item.pages.map((_, index) => `${item.id}:${index}`)).filter((id) => id !== correctId);
  const start = STORY_ADVENTURES.findIndex((item) => item.id === story.id) % otherPages.length;
  const options = [correctId, ...Array.from({ length: 3 }, (_, index) => otherPages[(start + index * 7) % otherPages.length])];
  const currentText = storyText(story, story.listenPage);
  const selectedCorrect = storyListenChoice === correctId;
  return `<div class="story-flow-header"><button class="button button-quiet" data-story-library>← Story library</button><span>🔊 Listen & choose</span></div><section class="story-stage-card">
    <p class="page-kicker">🔊 LISTEN & CHOOSE</p><h2>What did you hear?</h2>
    <button class="button button-primary story-listen-sentence" data-story-audio="listen">▶️ Play the sentence</button>
    <div class="story-quiz-options">${options.map((id) => {
      const [storyId, pageNumber] = id.split(":");
      const item = storyById(storyId);
      const sentence = storyText(item, Number(pageNumber));
      return `<button class="story-quiz-option ${storyListenChoice === id ? "selected" : ""} ${storyListenChecked && id === correctId ? "correct" : ""} ${storyListenChecked && storyListenChoice === id && !selectedCorrect ? "wrong" : ""}" data-story-listen-choice="${id}" ${storyListenChecked ? "disabled" : ""}><span class="story-radio"></span>${escapeHtml(sentence)}${storyListenChecked && id === correctId ? "<b>✓</b>" : ""}</button>`;
    }).join("")}</div>
    ${storyListenChecked ? `<p class="story-feedback ${selectedCorrect ? "feedback-correct" : "feedback-wrong"}">${selectedCorrect ? "🎉 Correct! +10 XP" : `The sentence was: ${escapeHtml(currentText)}`}</p>` : ""}
    <button class="button button-primary story-stage-action" ${storyListenChecked ? "data-story-finish" : "data-story-listen-check"}>${storyListenChecked ? "Complete story →" : "Check answer"}</button>
  </section>`;
}
function finishStory(story) {
  const oldState = JSON.stringify(state);
  const progress = getStoryProgress();
  const score = storyScore(story);
  const firstCompletion = !progress.completed.includes(story.id);
  if (firstCompletion) {
    progress.completed.push(story.id);
    const earnedXp = story.xp + score.correct * 10;
    storyEarnedXp = earnedXp;
    progress.xp += earnedXp;
    recordLearningDay();
    state.level = currentCourseLevel();
    if (!progress.badges.includes("story-explorer")) progress.badges.push("story-explorer");
    if (progress.lastCompleted !== todayKey()) {
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterday = `${yesterdayDate.getFullYear()}-${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getDate()).padStart(2, "0")}`;
      progress.streak = progress.lastCompleted === yesterday ? progress.streak + 1 : 1;
      progress.lastCompleted = todayKey();
    }
    story.words.forEach((id) => {
      const word = storyWord(id);
      if (word) recordVocabularyWord(word);
    });
    pairProgress().stories = Math.round((progress.completed.length / STORY_ADVENTURES.length) * 100);
  }
  if (persistState()) {
    storyStage = "complete";
    render();
    if (firstCompletion) showToast(`Story complete! You earned ${story.xp + score.correct * 10} XP and a day on your streak.`);
  } else {
    state = JSON.parse(oldState);
  }
}
function renderStoryComplete(story) {
  const progress = getStoryProgress();
  const score = storyScore(story);
  const earnedXp = storyEarnedXp;
  const learnedCount = story.words.filter((id) => state.vocabularyProgress?.[pairKey()]?.learned?.includes(id)).length;
  const nextStory = STORY_ADVENTURES.find((item) => item.id !== story.id && !progress.completed.includes(item.id));
  return `<section class="story-completion-card"><span class="story-completion-icon">🎉</span><p class="page-kicker">STORY ADVENTURE</p><h1>Story complete!</h1><div class="story-stars" aria-label="${score.correct} out of ${score.total} activities correct">${Array.from({ length: 5 }, (_, index) => `<span class="${index < score.correct ? "earned" : ""}">★</span>`).join("")}</div><p>You completed <strong>${escapeHtml(storyTitle(story))}</strong>!</p>
    <div class="story-results-grid"><div><strong>${score.correct} / ${score.total}</strong><span>Questions & games</span></div><div><strong>${learnedCount}</strong><span>Words learned</span></div><div><strong>${Math.round(score.correct / score.total * 100)}%</strong><span>Accuracy</span></div><div><strong>+${earnedXp}</strong><span>XP earned</span></div><div><strong>🔥 ${progress.streak}</strong><span>Day streak</span></div></div>
    ${progress.badges.includes("story-explorer") ? `<div class="story-earned-badge">🏆 <strong>Story Explorer</strong><span>One more adventure completed!</span></div>` : ""}
    <div class="story-completion-actions">${nextStory ? `<button class="button button-primary" data-story-start="${nextStory.id}">Next story →</button>` : ""}<button class="button button-quiet" data-story-practice>📚 Practice story words</button><button class="button button-quiet" data-story-library>Back to story library</button><button class="text-link" data-page="home">Back to learning path</button></div>
  </section>`;
}
function renderStoryAdventure() {
  if (storyStage === "library" || !storyById()) {
    storyStage = "library";
    document.querySelector("#page-content").innerHTML = renderStoryLibrary();
    return;
  }
  const story = storyById();
  const page = storyStage === "read" ? renderStoryReading(story)
    : storyStage === "quiz" ? renderStoryQuiz(story)
      : storyStage === "order" ? renderStoryOrder(story)
        : storyStage === "listen" ? renderStoryListen(story)
          : renderStoryComplete(story);
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">${LANGUAGES[state.source].flag} ${courseName()}</p><h1 class="page-title">Story Adventure.</h1><p class="page-intro">Read → Listen → Understand → Play → Earn XP</p></div><div class="header-course">Your story<strong>${escapeHtml(storyTitle(story))}</strong></div></header>${page}`;
}
function renderModule(id) {
  if (id === "alphabet") return renderAlphabet();
  if (id === "numbers") return renderNumbers();
  if (id === "vocabulary") return renderVocabulary();
  if (id === "photo-words") return renderPhotoName();
  if (id === "stories") return renderStoryAdventure();
  if (id === "quiz") return renderQuiz();
  if (id === "games") return renderGameCenterPage();
  if (id === "final-test") return renderFinalTest();
  if (id === "pronunciation") return renderPronunciation();
  if (id === "make-plan") return renderMakePlan();
  if (id === "progress") return renderProgress();
  if (id === "courses") return renderCourses();
  if (id === "profile") return renderProfile();
  if (id === "settings") return renderProfile();
  if (id === "translate") return renderTranslator();
  const module = MODULES.find((item) => item.id === id);
  const lesson = LESSONS[id];
  if (!module || !lesson) return renderHome();
  const score = pairProgress()[id] || 0;
  const lessonItems = localizedLessonItems(id);
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">${LANGUAGES[state.target].flag} ${courseName()}</p><h1 class="page-title">${module.title} practice.</h1><p class="page-intro">${module.description}—at your own pace.</p></div><div class="header-course">Your level<strong>${escapeHtml(currentCourseLevel())}</strong></div></header>
    <div class="module-content"><section class="lesson-panel"><h2>${lesson.heading}</h2><p>${lesson.intro}</p><div class="lesson-items">${lessonItems.map(([icon, title, text, speak]) => `<article class="lesson-item"><span class="item-icon">${icon}</span><span><strong>${title}</strong><small>${text}</small></span><button class="listen-button" data-speak="${escapeHtml(speak)}" data-voice="${LANGUAGES[state.target].voice}" aria-label="Listen to ${escapeHtml(title)}">◖</button></article>`).join("")}</div><button class="button button-primary" data-complete="${id}">${lesson.action} <span aria-hidden="true">→</span></button></section>
    <aside class="lesson-aside"><span class="card-kicker">Your progress</span><h3>Every step counts.</h3><p>Pick up where you left off in your ${LANGUAGES[state.target].name} course. Your progress is saved separately for each language pair.</p><div class="progress-meta"><span>${module.title}</span><span>${score}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${score}%"></div></div><button class="button button-quiet" data-page="progress">View all progress</button></aside></div>`;
}
function renderProgress() {
  const progress = pairProgress();
  const total = overallProgress();
  const rows = MODULES.filter(({ id }) => id !== "progress").map((module) => {
    const score = progress[module.id] || 0;
    return `<div class="progress-row"><span class="module-icon">${module.icon}</span><span><strong>${module.title}</strong><small>${module.description}</small><span class="mini-track"><span style="width:${score}%"></span></span></span><b>${score}%</b></div>`;
  }).join("");
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">One step at a time</p><h1 class="page-title">Look how far you’ve come.</h1><p class="page-intro">Your learning stays with each course, so every new language gets its own fresh start.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header>
    <section class="panel"><span class="card-kicker">Your course overview</span><h2>${total}% complete</h2><p class="panel-subtitle">Your progress for ${courseName()} is saved separately from your other courses.</p><div class="progress-track"><div class="progress-fill" style="width:${total}%"></div></div><div class="progress-list">${rows}</div></section>
    <section class="modules-section"><div class="section-heading"><div><h2>Your other courses</h2><p>Changing your language pair never resets a course you’ve already started.</p></div></div><div class="module-grid">${Object.keys(state.progress).filter((key) => key !== pairKey()).map((key) => {
      const [source, target] = key.split(":");
      if (!LANGUAGES[source] || !LANGUAGES[target]) return "";
      const score = Math.round(Object.values(state.progress[key]).reduce((sum, value) => sum + value, 0) / Math.max(Object.keys(state.progress[key]).length, 1));
      return `<article class="module-card"><span class="module-icon">↔</span><strong>${LANGUAGES[source].name} → ${LANGUAGES[target].name}</strong><small>${score}% course progress</small><div class="mini-track"><span style="width:${score}%"></span></div></article>`;
    }).join("") || `<article class="module-card"><span class="module-icon">✳</span><strong>A new course is waiting</strong><small>Choose another language pair to get started.</small></article>`}</div></section>`;
}
function renderCourses() {
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">Make it yours</p><h1 class="page-title">Choose your next language.</h1><p class="page-intro">Choose the language you know and the one you would like to learn.</p></div></header><section class="panel"><span class="card-kicker">Your course</span><h2>Where will you go next?</h2><p class="panel-subtitle">Your current course progress will stay saved when you switch.</p>${pairForm()}</section><section class="modules-section"><div class="section-heading"><div><h2>Available languages</h2><p>Start learning with any language, at your own pace.</p></div></div><div class="module-grid">${Object.values(LANGUAGES).map((language) => `<article class="module-card"><span class="module-icon">${language.flag}</span><strong>${language.name}</strong><small>${ALPHABETS[Object.keys(LANGUAGES).find((id) => LANGUAGES[id] === language)].length} alphabet cards · audio practice</small></article>`).join("")}</div></section>`;
}
function renderProfile() {
  const favorites = Array.isArray(state.favorites) ? state.favorites : [];
  const favoritesMarkup = favorites.map((item, index) => `<article class="favorite-item"><span><strong>${escapeHtml(item.sourceText)}</strong><small>${escapeHtml(item.resultText)} · ${LANGUAGES[item.target]?.name || "Translation"}</small></span><button class="button button-quiet" type="button" data-favorite-remove="${index}" aria-label="Remove favorite">Remove</button></article>`).join("");
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">Saved on this device</p><h1 class="page-title">Profile & Settings.</h1><p class="page-intro">Your name is optional. No account or email is needed to learn.</p></div></header><section class="panel profile-panel"><span class="card-kicker">Personal settings</span><h2>Make this space yours</h2><p class="panel-subtitle">Your preferences are stored locally in this browser and are not sent to a server.</p><form class="profile-form" id="profile-form"><div class="field"><label for="profile-name-input">Name (Optional)</label><input id="profile-name-input" name="name" type="text" maxlength="40" autocomplete="given-name" placeholder="Enter your name" value="${escapeHtml(state.name)}"></div><div class="field"><label for="appearance-select">Appearance</label><select id="appearance-select" name="appearance"><option value="light">Light</option><option value="dark">Dark</option></select></div><button class="button button-primary profile-submit" type="submit">Save Changes</button></form><div class="device-storage-notice"><p>Your progress is saved in this browser on your computer.</p><p>No login, email, or Gmail is required.</p><p class="device-storage-warning">⚠️ Mobile progress saving is not available in the current version.</p><p>If you switch to a mobile device or another browser, your previous progress will not be available.</p><p class="device-storage-recommendation">For the best experience, continue learning on the same computer and browser.</p></div></section><section class="panel favorites-panel"><span class="card-kicker">Your saved translations</span><h2>Favorites</h2><p class="panel-subtitle">Translations you’ve saved for quick reference.</p>${favoritesMarkup || `<p class="empty-favorites">No favorites saved yet. Translate a word or sentence and save it here.</p>`}</section>`;
}
function renderTranslator() {
  const result = translateResult ? `<section class="translation-result" aria-live="polite"><p class="page-kicker">${LANGUAGES[translateTarget].name}</p><h2>${escapeHtml(translateResult)}</h2><div class="translation-actions"><button class="button button-quiet" type="button" data-translation-listen>🔊 Listen</button><button class="button button-quiet" type="button" data-translation-copy>📋 Copy</button><button class="button button-quiet" type="button" data-translation-save>♡ Save</button></div></section>` : "";
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">Words open doors</p><h1 class="page-title">Translator.</h1><p class="page-intro">Translate a word or sentence between English, Hindi, German, French, and Spanish.</p></div></header><section class="translator-card"><div class="translator-languages"><div class="field"><label for="translate-source">From</label><select id="translate-source" name="source">${languageOptions(translateSource)}</select></div><button class="translate-swap" type="button" data-translate-swap aria-label="Swap languages">⇄</button><div class="field"><label for="translate-target">To</label><select id="translate-target" name="target">${languageOptions(translateTarget)}</select></div></div><form id="translator-form"><label class="sr-only" for="translate-input">Text to translate</label><textarea id="translate-input" name="text" maxlength="500" placeholder="Enter a word or sentence...">${escapeHtml(translateInput)}</textarea><p class="translate-privacy">Your text is sent to Google Translate to provide this result. Do not enter private or sensitive information.</p><button class="button button-primary translate-submit" type="submit" ${translateLoading ? "disabled" : ""}>${translateLoading ? "Translating…" : "Translate"}</button></form>${translateError ? `<p class="translate-error" role="alert">${escapeHtml(translateError)}</p>` : ""}${result}</section>`;
}
function renderPronunciation() {
  const target = LANGUAGES[state.target];
  const source = LANGUAGES[state.source];
  const progress = getPronunciationProgress();
  const items = VOCABULARY_WORDS.map((word) => {
    const listened = progress.listened.includes(word.id);
    return `<article class="pronunciation-word"><span class="pronunciation-image" aria-hidden="true">${word.image}</span><strong>${escapeHtml(word[state.target] || word.en)}</strong><span>${escapeHtml(word[source] || word.en)}</span><small class="pronunciation-listened ${listened ? "is-listened" : ""}" data-pronunciation-status="${word.id}" aria-label="${listened ? "Already listened" : "Not listened yet"}">${listened ? "✓ Heard" : "○ New"}</small><button class="button button-quiet" data-speak="${escapeHtml(word[state.target] || word.en)}" data-voice="${target.voice}" data-pronunciation-word="${word.id}">🔊 Listen</button></article>`;
  }).join("");
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">${target.flag} ${target.name} · Speak with confidence</p><h1 class="page-title">Pronunciation.</h1><p class="page-intro">Listen to useful ${escapeHtml(target.name)} words spoken aloud. ${progress.listened.length} of ${VOCABULARY_WORDS.length} words heard · ${pairProgress().pronunciation}% complete. Your browser’s speech feature provides the audio.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header><section class="pronunciation-grid">${items}</section>`;
}
function renderFeedback() {
  const categoryLabels = {
    "learning-content": "Learning Content",
    "website-experience": "Website Experience",
    "new-idea": "A New Idea",
    "something-isnt-working": "Something Isn’t Working",
    other: "Other"
  };
  const feedback = (Array.isArray(state.feedback) ? state.feedback : [])
    .sort((first, second) => Date.parse(second.createdAt) - Date.parse(first.createdAt));
  const history = feedback.length
    ? feedback.map((item) => {
      const rating = Math.max(0, Math.min(5, Number(item.rating) || 0));
      const category = Object.prototype.hasOwnProperty.call(categoryLabels, item.category) ? categoryLabels[item.category] : item.category || "Feedback";
      return `<article class="feedback-history-card"><div class="feedback-history-heading"><span class="feedback-history-stars" role="img" aria-label="${rating} out of 5 stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span><span class="feedback-history-status">${escapeHtml(item.status || "Submitted")}</span></div><h3>${escapeHtml(category)}</h3><p class="feedback-history-message">${escapeHtml(item.message || "")}</p><p class="feedback-history-date"><span>📅 ${escapeHtml(item.date || "Date unavailable")}</span>${item.time ? `<span>🕒 ${escapeHtml(item.time)}</span>` : ""}</p><button class="button button-quiet feedback-delete" type="button" data-feedback-delete="${escapeHtml(item.id)}">Delete</button></article>`;
    }).join("")
    : `<div class="feedback-history-empty"><h3>No feedback yet</h3><p>You haven't shared any feedback yet. Your feedback will appear here after you submit it.</p></div>`;
  const content = `<div class="feedback-layout"><section class="lesson-panel feedback-form-panel"><p class="page-kicker">We’re listening</p><h2>How can we make learning better?</h2><p class="feedback-description">Share what’s working, what could be clearer, or an idea you’d love to see.</p><form id="feedback-form">
      <fieldset class="feedback-rating-field"><legend>How would you rate your experience?</legend><div class="feedback-rating" role="radiogroup" aria-label="Rating">${[1, 2, 3, 4, 5].map((rating) => `<label class="feedback-star ${rating <= feedbackRating ? "selected" : ""}"><input type="radio" name="rating" value="${rating}" ${feedbackRating === rating ? "checked" : ""} required><span aria-hidden="true">★</span><span class="feedback-sr-only">${rating} ${rating === 1 ? "star" : "stars"}</span></label>`).join("")}</div><p class="feedback-rating-hint">Choose 1 to 5 stars</p></fieldset>
      <div class="field feedback-field"><label for="feedback-topic">What is your feedback about?</label><select id="feedback-topic" name="category" required><option value="">Choose a topic</option><option value="learning-content">Learning content</option><option value="website-experience">Website experience</option><option value="new-idea">A new idea</option><option value="something-isnt-working">Something isn’t working</option><option value="other">Other</option></select></div>
      <div class="field feedback-field"><label for="feedback-message">Your feedback</label><textarea id="feedback-message" name="message" maxlength="1000" minlength="10" placeholder="Tell us a little more (at least 10 characters)..." required></textarea><small class="feedback-privacy">Please don’t include passwords or other sensitive information.</small></div>
      <button class="button button-primary feedback-submit" type="submit">Save feedback <span aria-hidden="true">→</span></button>
    </form></section><aside class="lesson-aside feedback-aside"><span class="card-kicker">A note about privacy</span><h3>Your voice matters.</h3><p>This demo saves your feedback only in this browser’s local storage. It is not transmitted or visible to the Onestep Languages team.</p><div class="feedback-aside-icon" aria-hidden="true">💬</div></aside></div><section class="panel feedback-history"><div class="section-heading"><div><h2>Your Previous Feedback</h2><p>Your feedback is saved with this browser profile and stays available when you return.</p></div></div><div class="feedback-history-list">${history}</div></section>`;
  document.querySelector("#page-content").innerHTML = `<header class="page-header"><div><p class="page-kicker">Onestep Languages</p><h1 class="page-title">Share your feedback.</h1><p class="page-intro">Your ideas help shape a more welcoming way to learn.</p></div><div class="header-course">Current course<strong>${courseName()}</strong></div></header>${content}`;
}
function render() {
  syncProfile();
  renderNav();
  applyAppearance();
  if (currentPage === "home") renderHome();
  else if (currentPage === "feedback") renderFeedback();
  else renderModule(currentPage);
}
function saveFavorite(sourceText, resultText, source, target) {
  const favorites = Array.isArray(state.favorites) ? state.favorites : [];
  if (favorites.some((item) => item.sourceText === sourceText && item.resultText === resultText && item.source === source && item.target === target)) {
    showToast("This translation is already in your favorites.");
    return;
  }
  const previous = state.favorites;
  state.favorites = [...favorites, { sourceText, resultText, source, target, createdAt: new Date().toISOString() }];
  if (!persistState()) {
    if (previous === undefined) delete state.favorites;
    else state.favorites = previous;
    return;
  }
  showToast("Translation saved to Profile → Favorites.");
  if (currentPage === "profile") render();
}
async function translateText() {
  const input = translateInput.trim();
  if (!input) {
    translateError = "Enter a word or sentence to translate.";
    render();
    return;
  }
  if (input.length > 500) {
    translateError = "Please keep text to 500 characters or fewer.";
    render();
    return;
  }
  if (translateSource === translateTarget) {
    translateError = "Choose two different languages.";
    render();
    return;
  }
  translateLoading = true;
  translateError = "";
  translateResult = "";
  render();
  try {
    const params = new URLSearchParams({ client: "gtx", sl: translateSource, tl: translateTarget, dt: "t", q: input });
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`, { headers: { Accept: "application/json" }, credentials: "omit" });
    if (!response.ok) throw new Error(`Translation service returned HTTP ${response.status}.`);
    const payload = await response.json();
    const translated = Array.isArray(payload) && Array.isArray(payload[0])
      ? payload[0].filter((segment) => Array.isArray(segment) && typeof segment[0] === "string").map((segment) => segment[0]).join("")
      : "";
    if (!translated.trim()) throw new Error("The translation service returned no translation.");
    if (currentPage === "translate") translateResult = translated;
  } catch (error) {
    console.error("Could not translate text.", error);
    if (currentPage === "translate") translateError = error instanceof Error ? error.message : "Translation failed. Check your connection and try again.";
  } finally {
    translateLoading = false;
    if (currentPage === "translate") render();
  }
}
function playStoryAudio(story, text) {
  if (!("speechSynthesis" in window)) {
    showToast("Speech playback is not supported by this browser.");
    return;
  }
  window.speechSynthesis.cancel();
  storyUtterance = new SpeechSynthesisUtterance(text);
  storyUtterance.lang = LANGUAGES[state.target].voice;
  storyUtterance.onerror = (speechEvent) => {
    if (speechEvent.error !== "canceled" && speechEvent.error !== "interrupted") showToast("Audio could not be played. Check your browser's speech settings.");
  };
  window.speechSynthesis.speak(storyUtterance);
}
function handleStoryClick(event) {
  const level = event.target.closest("[data-story-level]");
  if (level) {
    storyLevel = level.dataset.storyLevel;
    render();
    return true;
  }
  const start = event.target.closest("[data-story-start]");
  if (start) {
    startStory(start.dataset.storyStart);
    render();
    return true;
  }
  if (event.target.closest("[data-story-library]")) {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    storyStage = "library";
    storyWordId = "";
    rememberCurrentLearningPosition();
    render();
    return true;
  }
  if (event.target.closest("[data-story-word-close]")) {
    storyWordId = "";
    render();
    return true;
  }
  const word = event.target.closest("[data-story-word]");
  if (word) {
    storyWordId = word.dataset.storyWord;
    render();
    return true;
  }
  const audio = event.target.closest("[data-story-audio]");
  if (audio) {
    const story = storyById();
    if (!story) return true;
    const action = audio.dataset.storyAudio;
    if (action === "pause") {
      if (!("speechSynthesis" in window)) showToast("Speech playback is not supported by this browser.");
      else if (window.speechSynthesis.paused) window.speechSynthesis.resume();
      else if (window.speechSynthesis.speaking) window.speechSynthesis.pause();
      return true;
    }
    const text = action === "listen"
      ? storyText(story, story.listenPage)
      : action === "replay" || storyStage === "read"
        ? story.pages.map((_, index) => storyText(story, index)).join(" ")
        : storyText(story, story.listenPage);
    playStoryAudio(story, text);
    return true;
  }
  const page = event.target.closest("[data-story-page]");
  if (page) {
    const story = storyById();
    if (!story) return true;
    const nextIndex = storyPageIndex + Number(page.dataset.storyPage);
    if (nextIndex < 0) storyStage = "library";
    else if (nextIndex >= story.pages.length) {
      storyStage = "quiz";
      storyQuizIndex = 0;
      storyQuizAnswers = [];
      storyQuizChecked = false;
    } else storyPageIndex = nextIndex;
    storyWordId = "";
    rememberCurrentLearningPosition();
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    render();
    return true;
  }
  const answer = event.target.closest("[data-story-answer]");
  if (answer) {
    if (!storyQuizChecked) storyQuizAnswers[storyQuizIndex] = answer.dataset.storyAnswer;
    render();
    return true;
  }
  if (event.target.closest("[data-story-quiz-check]")) {
    if (!storyQuizAnswers[storyQuizIndex]) {
      showToast("Choose an answer before checking.");
      return true;
    }
    storyQuizChecked = true;
    render();
    return true;
  }
  if (event.target.closest("[data-story-quiz-next]")) {
    const story = storyById();
    if (storyQuizIndex + 1 === story.questions.length) {
      storyStage = "order";
      storyOrderChecked = false;
    } else {
      storyQuizIndex += 1;
      storyQuizChecked = false;
    }
    rememberCurrentLearningPosition();
    render();
    return true;
  }
  const move = event.target.closest("[data-story-order-move]");
  if (move && !storyOrderChecked) {
    const index = Number(move.dataset.storyOrderMove);
    const next = index + Number(move.dataset.storyOrderDirection);
    if (next >= 0 && next < storyOrder.length) [storyOrder[index], storyOrder[next]] = [storyOrder[next], storyOrder[index]];
    render();
    return true;
  }
  if (event.target.closest("[data-story-order-check]")) {
    storyOrderChecked = true;
    render();
    return true;
  }
  if (event.target.closest("[data-story-order-next]")) {
    storyStage = "listen";
    storyListenChecked = false;
    storyListenChoice = "";
    rememberCurrentLearningPosition();
    render();
    return true;
  }
  const listenChoice = event.target.closest("[data-story-listen-choice]");
  if (listenChoice) {
    if (!storyListenChecked) storyListenChoice = listenChoice.dataset.storyListenChoice;
    render();
    return true;
  }
  if (event.target.closest("[data-story-listen-check]")) {
    if (!storyListenChoice) {
      showToast("Choose the sentence you heard.");
      return true;
    }
    storyListenChecked = true;
    render();
    return true;
  }
  if (event.target.closest("[data-story-finish]")) {
    const story = storyById();
    if (story) finishStory(story);
    return true;
  }
  if (event.target.closest("[data-story-practice]")) {
    const story = storyById();
    if (story) {
      currentPage = "vocabulary";
      vocabularyGame = "cards";
      vocabularyCategory = "all";
      vocabularyIndex = Math.max(0, VOCABULARY_WORDS.findIndex((item) => item.id === story.words[0]));
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return true;
  }
  return false;
}
function handleStoryDragStart(event) {
  const item = event.target.closest("[data-story-order-item]");
  if (!item || storyStage !== "order" || storyOrderChecked) return;
  storyDraggingIndex = storyOrder.indexOf(Number(item.dataset.storyOrderItem));
  if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
}
function handleStoryDragOver(event) {
  if (event.target.closest("[data-story-order-item]")) event.preventDefault();
}
function handleStoryDrop(event) {
  const target = event.target.closest("[data-story-order-item]");
  if (!target || storyDraggingIndex < 0 || storyOrderChecked) return;
  event.preventDefault();
  const targetIndex = storyOrder.indexOf(Number(target.dataset.storyOrderItem));
  const [moved] = storyOrder.splice(storyDraggingIndex, 1);
  storyOrder.splice(targetIndex, 0, moved);
  storyDraggingIndex = -1;
  render();
}
function handleClick(event) {
  if (event.target.closest("#theme-toggle")) {
    const darkNow = document.documentElement.dataset.theme === "dark";
    saveAppearance(darkNow ? "light" : "dark");
    return;
  }
  if (event.target.closest(".mobile-menu-toggle")) {
    const sidebar = document.querySelector(".sidebar");
    const button = event.target.closest(".mobile-menu-toggle");
    const open = sidebar.classList.toggle("mobile-open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    return;
  }
  const removeFavoriteButton = event.target.closest("[data-favorite-remove]");
  if (removeFavoriteButton) {
    const index = Number(removeFavoriteButton.dataset.favoriteRemove);
    if (!Array.isArray(state.favorites) || !Number.isInteger(index) || index < 0 || index >= state.favorites.length) {
      showToast("That favorite could not be found.");
      return;
    }
    const previous = state.favorites;
    state.favorites = previous.filter((_, favoriteIndex) => favoriteIndex !== index);
    if (persistState()) render();
    else state.favorites = previous;
    return;
  }
  if (event.target.closest("[data-translate-swap]")) {
    [translateSource, translateTarget] = [translateTarget, translateSource];
    translateResult = "";
    translateError = "";
    render();
    return;
  }
  if (event.target.closest("[data-translation-listen]")) {
    if (!translateResult) return;
    if (!("speechSynthesis" in window)) {
      showToast("Speech playback is not supported by this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(translateResult);
    utterance.lang = LANGUAGES[translateTarget].voice;
    utterance.onerror = (speechEvent) => {
      if (speechEvent.error !== "canceled" && speechEvent.error !== "interrupted") showToast("Audio could not be played. Check your browser's speech settings.");
    };
    window.speechSynthesis.speak(utterance);
    return;
  }
  if (event.target.closest("[data-translation-copy]")) {
    if (!navigator.clipboard?.writeText) {
      showToast("Clipboard access is not available in this browser.");
      return;
    }
    navigator.clipboard.writeText(translateResult).then(
      () => showToast("Copied!"),
      (error) => {
        console.error("Could not copy translation.", error);
        showToast("Could not copy. Check clipboard permissions.");
      }
    );
    return;
  }
  if (event.target.closest("[data-translation-save]")) {
    saveFavorite(translateInput.trim(), translateResult, translateSource, translateTarget);
    return;
  }
  const deleteFeedbackButton = event.target.closest("[data-feedback-delete]");
  if (deleteFeedbackButton) {
    const feedbackId = deleteFeedbackButton.dataset.feedbackDelete;
    const feedback = Array.isArray(state.feedback) ? state.feedback : [];
    const feedbackToDelete = feedback.find((item) => item.id === feedbackId);
    if (!feedbackToDelete) {
      showToast("That feedback could not be found.");
      return;
    }
    if (!window.confirm("Delete this feedback? This cannot be undone.")) return;
    state.feedback = feedback.filter((item) => item.id !== feedbackId);
    if (persistState()) render();
    else state.feedback = feedback;
    return;
  }
  const resumeButton = event.target.closest("[data-resume]");
  if (resumeButton) {
    const position = resumePosition();
    if (position) restoreLearningPosition(position);
    return;
  }
  const pageTarget = event.target.closest("[data-page]");
  if (pageTarget) {
    event.preventDefault();
    if (gameTimer && pageTarget.dataset.page !== "games") {
      clearInterval(gameTimer);
      gameTimer = null;
      if (gameStage === "play") gameStage = "center";
    }
    if (gameMemoryTimeout) {
      clearTimeout(gameMemoryTimeout);
      gameMemoryTimeout = null;
    }
    if (pageTarget.dataset.page === "quiz" && currentPage !== "quiz") quizStage = "start";
    if (quizTimer && pageTarget.dataset.page !== "quiz") {
      clearInterval(quizTimer);
      quizTimer = null;
      if (quizStage === "question") quizStage = "start";
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    currentPage = pageTarget.dataset.page;
    if (currentPage === "games") gameStage = "center";
    if (currentPage === "photo-words") {
      photoMode = "learn";
      photoCategory = "all";
      photoIndex = 0;
      resetPractice();
    }
    rememberCurrentLearningPosition();
    render();
    document.querySelector(".sidebar").classList.remove("mobile-open");
    const menuButton = document.querySelector(".mobile-menu-toggle");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (currentPage === "alphabet" && handleAlphabetClick(event)) return;
  if (currentPage === "quiz" && handleQuizClick(event)) return;
  if (currentPage === "final-test" && handleFinalTestClick(event)) return;
  if (currentPage === "numbers" && handleNumbersClick(event)) return;
  if (currentPage === "games" && handleGameCenterClick(event)) return;
  if (currentPage === "stories" && handleStoryClick(event)) return;
  const vocabCategory = event.target.closest("[data-vocabulary-category]");
  if (vocabCategory) {
    vocabularyCategory = vocabCategory.dataset.vocabularyCategory;
    resetVocabularyRound();
    vocabularyShowMore = false;
    rememberCurrentLearningPosition();
    render();
    return;
  }
  const vocabLevel = event.target.closest("[data-vocabulary-level]");
  if (vocabLevel) {
    vocabularyLevel = vocabLevel.dataset.vocabularyLevel;
    resetVocabularyRound();
    render();
    return;
  }
  const vocabGame = event.target.closest("[data-vocabulary-game]");
  if (vocabGame) {
    vocabularyGame = vocabGame.dataset.vocabularyGame;
    resetVocabularyRound();
    rememberCurrentLearningPosition();
    render();
    return;
  }
  const vocabSave = event.target.closest("[data-vocabulary-save]");
  if (vocabSave) {
    const progress = getVocabularyProgress();
    const id = vocabSave.dataset.vocabularySave;
    const wasSaved = progress.saved.includes(id);
    const succeeded = saveVocabularyMutation(() => {
      if (wasSaved) progress.saved = progress.saved.filter((savedId) => savedId !== id);
      else progress.saved.push(id);
    });
    if (succeeded) render();
    return;
  }
  if (event.target.closest("[data-vocabulary-more]")) {
    vocabularyShowMore = !vocabularyShowMore;
    render();
    return;
  }
  if (event.target.closest("[data-vocabulary-previous]")) {
    const words = filteredVocabularyWords();
    vocabularyIndex = (vocabularyIndex - 1 + words.length) % words.length;
    vocabularyShowMore = false;
    rememberCurrentLearningPosition();
    render();
    return;
  }
  if (event.target.closest("[data-vocabulary-next]")) {
    const words = filteredVocabularyWords();
    const word = words[vocabularyIndex % words.length];
    const succeeded = saveVocabularyMutation(() => recordVocabularyWord(word));
    if (succeeded) {
      vocabularyIndex = (vocabularyIndex + 1) % words.length;
      vocabularyShowMore = false;
      rememberCurrentLearningPosition();
      render();
      showToast("Word learned. Keep going!");
    }
    return;
  }
  const vocabChoice = event.target.closest("[data-vocabulary-choice]");
  if (vocabChoice) {
    if (!vocabularyChecked) {
      vocabularySelectedAnswer = vocabChoice.dataset.vocabularyChoice;
      render();
    }
    return;
  }
  if (event.target.closest("[data-vocabulary-check]")) {
    if (vocabularyChecked) return;
    if (!vocabularySelectedAnswer.trim()) {
      showToast(vocabularyGame === "spelling" ? "Type the missing letter before checking." : "Choose an answer before checking.");
      return;
    }
    const words = vocabularyGameWords(filteredVocabularyWords());
    const word = words[vocabularyIndex % words.length];
    const answer = word[LANGUAGES[state.target].code.toLowerCase()] || word.en;
    const isCorrect = vocabularyGame === "spelling"
      ? graphemes(vocabularySelectedAnswer.trim().toLocaleUpperCase()).length === 1 && vocabularySelectedAnswer.trim().toLocaleUpperCase() === vocabularySpellingMissing
      : vocabularySelectedAnswer.trim().toLocaleLowerCase() === answer.trim().toLocaleLowerCase();
    const result = saveVocabularyMutation(() => recordVocabularyWord(word, isCorrect, isCorrect, true));
    if (result) {
      vocabularyChecked = true;
      vocabularyFeedback = isCorrect ? "Correct! +10 XP ⭐" : `Not quite — the answer is ${answer}.`;
      render();
    }
    return;
  }
  if (event.target.closest("[data-match-left]")) {
    vocabularyMatchLeft = event.target.closest("[data-match-left]").dataset.matchLeft;
    vocabularyFeedback = "";
    render();
    return;
  }
  if (event.target.closest("[data-match-right]")) {
    const rightId = event.target.closest("[data-match-right]").dataset.matchRight;
    if (!vocabularyMatchLeft) {
      showToast("Choose a picture first.");
      return;
    }
    const leftId = vocabularyMatchLeft;
    const word = vocabularyMatchWords.find((item) => item.id === leftId);
    vocabularyMatchLeft = "";
    if (leftId === rightId && word) {
      if (!vocabularyMatched.includes(leftId)) vocabularyMatched.push(leftId);
      vocabularyFeedback = "Correct match! +10 XP ⭐";
      if (saveVocabularyMutation(() => recordVocabularyWord(word, true, true, true))) render();
    } else {
      vocabularyFeedback = "Those words do not match. Try another pair.";
      render();
    }
    return;
  }
  if (event.target.closest("[data-match-next]")) {
    vocabularyIndex += 1;
    resetVocabularyRound();
    rememberCurrentLearningPosition();
    render();
    return;
  }
  if (event.target.closest("[data-vocabulary-next-question]")) {
    const words = vocabularyGameWords(filteredVocabularyWords());
    vocabularyIndex = (vocabularyIndex + 1) % words.length;
    vocabularySelectedAnswer = "";
    vocabularyChecked = false;
    vocabularyFeedback = "";
    rememberCurrentLearningPosition();
    render();
    return;
  }
  const categoryButton = event.target.closest("[data-photo-category]");
  if (categoryButton) {
    photoCategory = categoryButton.dataset.photoCategory;
    photoIndex = 0;
    resetPractice();
    rememberCurrentLearningPosition();
    render();
    return;
  }
  const modeButton = event.target.closest("[data-photo-mode]");
  if (modeButton) {
    photoMode = modeButton.dataset.photoMode;
    resetPractice();
    rememberCurrentLearningPosition();
    render();
    return;
  }
  const photoStep = event.target.closest("[data-photo-step]");
  if (photoStep) {
    const words = filteredPhotoWords();
    photoIndex = (photoIndex + Number(photoStep.dataset.photoStep) + words.length) % words.length;
    rememberCurrentLearningPosition();
    render();
    return;
  }
  const practiceOption = event.target.closest("[data-practice-option]");
  if (practiceOption) {
    practiceSelection = practiceOption.dataset.practiceOption;
    rememberCurrentLearningPosition();
    render();
    return;
  }
  if (event.target.closest("[data-practice-check]")) {
    if (!practiceSelection) {
      showToast("Choose an answer before checking.");
      return;
    }
    const words = filteredPhotoWords();
    const word = words[practiceIndex % words.length];
    if (practiceSelection === word.words[state.target]) practiceScore += 1;
    practiceChecked = true;
    rememberCurrentLearningPosition();
    render();
    return;
  }
  if (event.target.closest("[data-practice-next]")) {
    const rounds = Math.min(10, filteredPhotoWords().length);
    if (practiceIndex + 1 >= rounds) {
      const progress = pairProgress();
      const previousScore = progress["photo-words"] || 0;
      progress["photo-words"] = Math.max(previousScore, Math.round((practiceScore / rounds) * 100));
      recordLearningDay();
      practiceFinished = true;
      if (!persistState()) progress["photo-words"] = previousScore;
      render();
      return;
    }
    practiceIndex += 1;
    practiceSelection = "";
    practiceChecked = false;
    rememberCurrentLearningPosition();
    render();
    return;
  }
  if (event.target.closest("[data-practice-restart]")) {
    resetPractice();
    render();
    return;
  }
  const speaker = event.target.closest("[data-speak]");
  if (speaker) {
    if (!("speechSynthesis" in window)) {
      showToast("Speech playback is not supported by this browser.");
      return;
    }
    if (speaker.dataset.pronunciationWord) {
      const previousState = JSON.stringify(state);
      const progress = getPronunciationProgress();
      const wordId = speaker.dataset.pronunciationWord;
      if (!progress.listened.includes(wordId)) {
        progress.listened.push(wordId);
        progress.listened.sort();
        recordLearningDay();
        if (persistState()) {
          const status = document.querySelector(`[data-pronunciation-status="${wordId}"]`);
          if (status) {
            status.textContent = "✓ Heard";
            status.setAttribute("aria-label", "Already listened");
            status.classList.add("is-listened");
          }
          const intro = document.querySelector(".page-intro");
          if (intro) intro.textContent = `Listen to useful ${LANGUAGES[state.target].name} words spoken aloud. ${progress.listened.length} of ${VOCABULARY_WORDS.length} words heard · ${pairProgress().pronunciation}% complete. Your browser’s speech feature provides the audio.`;
        } else state = JSON.parse(previousState);
      }
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speaker.dataset.speak);
    utterance.lang = speaker.dataset.voice;
    utterance.onerror = (speechEvent) => {
      if (speechEvent.error !== "canceled" && speechEvent.error !== "interrupted") showToast("Audio could not be played. Check your browser's speech settings.");
    };
    window.speechSynthesis.speak(utterance);
    return;
  }
  const complete = event.target.closest("[data-complete]");
  if (complete) {
    const id = complete.dataset.complete;
    const progress = pairProgress();
    const previousScore = progress[id] || 0;
    progress[id] = Math.min(previousScore + 20, 100);
    recordLearningDay();
    if (persistState()) {
      render();
      showToast("Nice work! Your course progress has been saved.");
    } else progress[id] = previousScore;
  }
}
function handleSubmit(event) {
  if (event.target.id === "translator-form") {
    event.preventDefault();
    translateInput = String(new FormData(event.target).get("text") || "");
    translateText();
    return;
  }
  if (event.target.id === "profile-form") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = String(formData.get("name") || "").trim().slice(0, 40);
    const appearance = String(formData.get("appearance") || appearancePreference);
    if (!["light", "dark"].includes(appearance)) {
      showToast("Choose Light or Dark appearance.");
      return;
    }
    const previousName = state.name;
    const previousNameConfigured = state.nameConfigured;
    state.name = name;
    state.nameConfigured = true;
    if (persistState()) {
      saveAppearance(appearance);
      render();
      showToast("Your profile has been saved.");
    } else {
      state.name = previousName;
      state.nameConfigured = previousNameConfigured;
    }
    return;
  }
  if (event.target.id === "feedback-form") {
    event.preventDefault();
    const formData = new FormData(event.target);
    const rating = Number(formData.get("rating"));
    const category = String(formData.get("category"));
    const message = String(formData.get("message")).trim();
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      showToast("Choose a star rating before saving your feedback.");
      return;
    }
    if (!category || message.length < 10 || message.length > 1000) {
      showToast("Choose a topic and enter at least 10 characters of feedback.");
      return;
    }
    const previousFeedback = state.feedback;
    const feedback = Array.isArray(previousFeedback) ? previousFeedback : [];
    const submittedAt = new Date();
    state.feedback = [...feedback, {
      id: createLocalId(),
      rating,
      category,
      message,
      course: pairKey(),
      date: submittedAt.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" }),
      time: submittedAt.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }),
      status: "Submitted",
      createdAt: submittedAt.toISOString()
    }];
    if (persistState()) {
      feedbackRating = 0;
      render();
      showToast("Your feedback has been saved.");
    } else if (previousFeedback === undefined) delete state.feedback;
    else state.feedback = previousFeedback;
    return;
  }
  if (event.target.id !== "pair-form") return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const source = String(formData.get("source"));
  const target = String(formData.get("target"));
  const name = String(formData.get("name")).trim().slice(0, 40);
  if (!LANGUAGES[source] || !LANGUAGES[target] || source === target) {
    showToast(source === target ? "Choose two different languages for your course." : "Please choose a valid language pair.");
    return;
  }
  const previousSource = state.source;
  const previousTarget = state.target;
  const previousName = state.name;
  const previousNameConfigured = state.nameConfigured;
  const key = `${source}:${target}`;
  const hadSavedProgress = Object.prototype.hasOwnProperty.call(state.progress, key);
  state.source = source;
  state.target = target;
  state.name = name;
  state.nameConfigured = true;
  pairProgress();
  if (persistState()) {
    currentPage = "home";
    render();
    showToast(`Your ${courseName()} course is ready.`);
  } else {
    state.source = previousSource;
    state.target = previousTarget;
    state.name = previousName;
    state.nameConfigured = previousNameConfigured;
    if (!hadSavedProgress) delete state.progress[key];
  }
}
function handleInput(event) {
  if (event.target.matches("#translate-input")) {
    translateInput = event.target.value;
    translateError = "";
  }
  if (event.target.matches('input[name="rating"]')) {
    feedbackRating = Number(event.target.value);
    document.querySelectorAll(".feedback-star").forEach((star, index) => {
      star.classList.toggle("selected", index < feedbackRating);
    });
  }
  if (event.target.matches("[data-vocabulary-input]") && !vocabularyChecked) {
    vocabularySelectedAnswer = event.target.value;
  }
}
function handleChange(event) {
  if (event.target.matches("#appearance-select")) saveAppearance(event.target.value);
  if (event.target.matches("#translate-source")) {
    translateSource = event.target.value;
    translateResult = "";
    translateError = "";
  }
  if (event.target.matches("#translate-target")) {
    translateTarget = event.target.value;
    translateResult = "";
    translateError = "";
  }
}
document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("input", handleInput);
document.addEventListener("change", handleChange);
document.addEventListener("dragstart", handleStoryDragStart);
document.addEventListener("dragover", handleStoryDragOver);
document.addEventListener("drop", handleStoryDrop);
render();
applyAppearance();
if (profileLoadError) showToast("Your saved profile could not be read, so a fresh course was opened.");
Object.entries(state.finalTests || {}).forEach(([key, record]) => {
  if (record?.active) startFinalTestTimer(key);
});
