
{
  "langs": [
    {
      "lang_name": "English",
      "lang_value": "en"
    },
    {
      "lang_name": "French",
      "lang_value": "fr"
    }
  ]
}

// backend 
// localhost:1234/api/languages

{
  "langs": [
    {
      "lang_name": "Franch",
      "lang_value": "fr"
    }
  ]
}



get request for product
localhost:8000/api/product?lang=fr

post request for product

localhost:8000/api/product
{
  "name": {
    "en": "Apple iphone",
    "fr":"Téléphone iApple",
    "hi":"एप्पल आईफोन"
  },
  "description": {
    "en": "iPhone is indeed a smartphone developed by Apple Inc. It revolutionized the mobile industry when it was first introduced in 2007. The iPhone combines various functionalities such as computing, multimedia playback (including music and videos), digital photography, and telephony into a single device. It features a touchscreen interface that allows users to interact with the device through gestures such as tapping, swiping, and pinching. Over the years, Apple has released multiple versions of the iPhone, each introducing new features and improvements to the device's hardware and software.",
    "fr": "L'iPhone est en effet un smartphone développé par Apple Inc. Il a révolutionné l'industrie mobile lors de son introduction en 2007. L'iPhone combine diverses fonctionnalités telles que l'informatique, la lecture multimédia (y compris la musique et les vidéos), la photographie numérique et la téléphonie en un seul appareil. . Il dispose d'une interface à écran tactile qui permet aux utilisateurs d'interagir avec l'appareil via des gestes tels que tapoter, glisser et pincer. Au fil des années, Apple a publié plusieurs versions de l'iPhone, chacune introduisant de nouvelles fonctionnalités et améliorations du matériel et des logiciels de l'appareil.",
    "hi":"आईफोन ने 2007 में अपने मोबाइल उद्योग में क्रांतिकारी बदलाव के लिए ऐप्पल इंक द्वारा एक स्मार्टफोन विकसित किया था। , ला फोटोग्राफी न्यूमेरिक एट ला टेलीफोनी एन अन सेउल अपैरिल। . मैं अपने इंटरफ़ेस को एक स्पर्शनीय तरीके से डिस्पोज़ करता हूं, जिससे आपको इंटरएक्टिव टूल्स और अन्य उपकरणों की अनुमति मिलती है, जो कि टैपोटर, ग्लिसर और पिंसर के माध्यम से होते हैं। एक वर्ष से अधिक समय में, Apple ने iPhone के एक सार्वजनिक प्लस संस्करण को लॉन्च किया, नए फोन्कनेशनलाइट्स और सामग्री सुधार और उपकरणों के तर्क प्रस्तुत किए।"
  }
}

