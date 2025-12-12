const waterproofBeautyProducts = [
    "#FauxFilter Matte Buildable Coverage Waterproof Concealer",
    "Fenty Cheeks Suede Waterproof Powder Blush",
    "24/7 Glide-On Waterproof Eyeliner Pencil",
    "On ’Til Dawn Mattifying Waterproof Setting Spray",
    "Airbrush Flawless Waterproof Setting Spray",
    "Waterproof Size Up Mascara",
    "Colorfix – Multi-Use Eye, Cheek & Lip Waterproof Liquid Pigment",
    "Retractable EyeBrow Pencil – Waterproof",
    "Lip Snatcher Waterproof Precision Lip Liner",
    "Artist Color Pencil Extreme Waterproof Lip Liner",
    "Mighty Fine Waterproof Brow Pen",
    "Face Bond Self Setting Waterproof Foundation",
    "Ultra-Blur Talc-Free Waterproof Translucent Pressed Setting Powder",
    "BADgal BANG! Volumizing Waterproof Mascara",
    "Sephora Colorful® Waterproof Eyeshadow & Eyeliner Multi-Stick",
    "All Nighter Waterproof Makeup Setting Spray",
    "Perfect Strokes Longwear & Waterproof Gel Eyeliner",
    "Face Bond Luminizer Waterproof Glow Drops for Face + Body",
    "Quickie 24HR Full-Coverage Waterproof Concealer",
    "HD Skin Waterproof Natural Matte Foundation",
    "Waterproof 12HR Retractable Eyeliner Pencil",
    "Mini Better Than Sex Waterproof Mascara",
    "Intense Felt-Tip 12HR Liquid Waterproof Eyeliner",
    "Mini Express Waterproof Makeup Remover",
    "Life Lock™ Hydrating Waterproof Setting Spray",
    "Amazonian Clay Waterproof Bronzer",
    "We’re Even Hydrating Longwear Waterproof Concealer",
    "Long-Wear Waterproof Cream Eyeshadow Stick",
    "Lash Clash Extreme Volume Waterproof Mascara",
    "Trace’d Out Longwear Waterproof Pencil Lip Liner",
    "DIPBROW® Waterproof, Smudge Proof Brow Pomade",
    "Secure The Sweat Waterproof Mattifying Primer",
    "Precisely, My Brow Pencil Waterproof Eyebrow Definer",
    "Lash Idôle Lash-Lifting & Volumizing Waterproof Mascara",
    "Underlined Kajal Clean Waterproof Long-Wear Eyeliner",
    "Pradalines Gliding Waterproof Smudge Proof Eye Pencil",
    "Infinite Chrome Waterproof Micropencil Eyeliner",
    "On ’Til Dawn Glitter Waterproof Setting Spray",
    "Soulgazer Intensifying Waterproof Gel Eyeliner",
    "Turn Up the Base Full Beat Waterproof Liquid Foundation",
    "Better Than Sex Volumizing & Lengthening Waterproof Mascara",
    "Point Made Waterproof Liquid Eyeliner Pen",
    "Optic Intensity Eco Waterproof Gel Eyeliner Pencil",
    "Wink Stamp Long Waterproof Wing Eyeliner Stamp & Pen",
    "Waterproof Eye Makeup Remover",
    "Real Flawless Weightless Perfecting Waterproof Foundation",
    "Big By Definition Defining & Volumizing Waterproof Mascara",
    "Love The Lift Curling + Volumizing Waterproof Mascara",
    "Dual-Ended Long-Wear Waterproof Cream Eyeshadow Stick",
    "Lines Liberated 24H Waterproof Eyeliner",
    "Lights, Camera, Splashes™ Waterproof Mascara",
    "Mini Long-Wear Waterproof Cream Eyeshadow Stick Set",
    "Soft Shape Waterproof Lip Liner",
    "Bye Bye Under Eye Full Coverage Anti-Aging Waterproof Concealer",
    "Black Longwear Waterproof Crème Color",
    "Stay All Day® Waterproof Liquid Eye Liner",
    "All Nighter Waterproof Setting Powder",
    "24/7 Glide-On Waterproof Lip Liner",
    "Aqua Resist Color Ink 24HR Waterproof Liquid Eyeliner",
    "Boi-ing Cakeless Full Coverage Waterproof Liquid Concealer",
    "Surfproof Easy Glider Eye Definer Waterproof Eyeliner Pencil",
    "Sephora Colorful® Wink-It Felt Tip Liquid Waterproof Eyeliner",
    "The POREfessional: Super Setter Pore-Minimizing Waterproof Setting Spray",
    "Lash Waterproof Volumizing Mascara",
    "24/7 Glide-On Waterproof Eyeliner Pencil Space Cowboy",
    "KUSH Brow Shadow Stick Waterproof Eyebrow Pencil",
    "Hypnôse Drama Instant Full Body Volume Waterproof Mascara",
    "Tattoo Liner Vegan Waterproof Liquid Eyeliner",
    "BADgal BANG! 24-Hour Waterproof Eyeliner",
    "Darkside Waterproof Gel Matte Eyeliner",
    "Voyeur Waterproof Gel Eyeliner",
    "Aqua Smoky Extravagant Waterproof Mascara",
    "Anaheim Line Clean Waterproof Lip Liner",
    "Waterproof Matte Liquid Eyeliner",
    "Waterproof Brow Sculptor Eyebrow Pencil with Refill",
    "Wink Stamp Original Waterproof Wing Eyeliner Stamp & Pen",
    "Diorshow On Stage Waterproof Liquid Eyeliner",
    "Tattoo Pencil Liner Waterproof Long-Wear Gel Eyeliner",
    "DÉfinicils Waterproof – High Definition Mascara",
    "Clear Cut Waterproof Liquid Eyeliner",
    "Gentle Eye Gel Waterproof Eye & Lip Makeup Remover",
    "Amazonian Clay Waterproof Brow Pencil",
    "Goof Proof Waterproof Easy Shape & Fill Eyebrow Pencil",
    "Roller Liner Waterproof Liquid Eyeliner",
    "Stay All Day® Waterproof Liquid Eye Liner – Micro Tip",
    "Climax Waterproof Liquid Eyeliner",
    "Perversion Waterproof Liquid Eyeliner",
    "KUSH Waterproof Mascara",
    "Stay All Day® Smudge & Set Waterproof Gel Eye Liner",
    "Stay All Day® Dual-Ended Waterproof Liquid Eye Liner",
    "Brow Beater Waterproof Brow Pencil & Spoolie",
    "Hot Line Brush Tip Waterproof Liquid Eyeliner",
    "HYPNOSE WATERPROOF – Custom Volume Mascara",
    "Ink Liner Waterproof Felt-Tip Liquid Eyeliner",
    "Micro Waterproof Eyebrow Pencil"
];

let captions = [
    ["I like this", "wp"],
    ["I’m gonna add this", "wp"],
    ["I usually use this", "wp"],
    ["wp", "in a lighter shade than the other one"],
    ["This cute", "wp"],
    ["I’m in love with this", "wp"],
    ["wp", "is to me, the best in the world"],
    ["Next in my routine, I use", "wp"],
    ["This is the", "wp"],
    ["I start with", "wp"],
    ["I love this", "wp"],
    ["I’m not wasting any", "wp", "let me tell you"],
    ["So next, thank you mother for the best advice,", "wp"],
    ["The finale for this is my favorite", "wp"],
    ["My loyalty lies with the", "wp"],
    ["I just do", "wp"],
    ["I like this", "wp"],
    ["I am a real fan of the", "wp"],
    ["This is", "wp"],
    ["The", "wp"],
    ["I really, really like this", "wp"],
    ["This is another product that I use,", "wp"],
    ["So I like this", "wp", "because I like this color"],
    ["So this is", "wp"],
    ["I use the", "wp"],
    ["My next step is my", "wp"],
    ["This is", "wp", "which I really like"],
    ["Then I take my", "wp"],
    ["Gonna get my", "wp"],
    ["I really like this", "wp"],
    ["Holy grail,", "wp"],
    ["The", "wp"],
    ["First step is", "wp"],
    ["wp", "I have used this since I was 18."],
    ["A little product called", "wp"],
    ["I really love, love, love this", "wp"],
    ["It's this", "wp"],
    ["Now I’m gonna take this", "wp"],
    ["The great", "wp"],
    ["First up is this", "wp"],
    ["So here’s my", "wp"],
    ["My next step is this", "wp"],
    ["My", "wp"],
    ["Next step, we have the", "wp"],
    ["Next step is this", "wp"],
    ["My next step is going to be the", "wp"],
    ["I’m gonna start with this, which is the", "wp"],
    ["I’m going to use", "wp"],
    ["So I’m gonna do the", "wp"],
    ["This is", "wp"],
    ["So this is the", "wp"],
    ["And it’s called", "wp"],
    ["And it’s called", "wp"],
    ["So, here’s the", "wp"],
    ["It’s called", "wp"],
    ["Today, I’m gonna be using the", "wp"],
    ["This is my mom’s", "wp"],
    ["I have this", "wp"],
    ["wp", "this one’s really good"],
    ["I found this", "wp", "at Sephora"],
    ["What I’m gonna start with is", "wp"],
    ["I’ll use this", "wp"],
    ["I have this product,", "wp"],
    ["So I’m gonna use a little bit of this", "wp"],
    ["I just use this little", "wp"],
    ["I really, really love the", "wp"],
    ["I’ve talked about this", "wp", "before"]
    ["Next I’m gonna go in with the", "wp"],
    ["It is called", "wp"],
    ["Number one,", "wp"],
    ["Go back in with the", "wp"],
    ["I’m gonna go in with my", "wp"],
    ["I’ll use my", "wp", "right here"],
    ["I like to use my", "wp"],
    ["I have used the", "wp", "forever"],
    ["We’re gonna go with", "wp"],
    ["Really quickly, we’re gonna go in with this", "wp"],
    ["wp", "just the darkest shade"],
    ["I’m just gonna go in with this", "wp"],
    ["wp", "I’ll just take a little bit on my finger"],
    ["Anyway, I’ve been doing the", "wp"],
    ["So what I use is the", "wp"],
    ["This", "wp"],
    ["wp", "which is very much used"],
    ["wp", "a classic"],
    ["A tiny bit of", "wp"],
    ["finish it off with the", "wp"],
    ["I pretty much only use", "wp"],
    ["The", "wp"],
    ["I literally just use", "wp", "again"],
]

const originalCaptions = [...captions];
let newString = "";
let newCaption = "";
let currentCaption = "";
let newCaptionArray = [];
let currentStringIndex = 0;
let currentCaptionIndex = 0;
let waterproofFontSize = 11;
let captionFontSize = 100;
let div;
let mark;
let captionDiv = document.getElementById("caption");
let captionsDiv = document.getElementById("captions");
let allText = [];
let mode = "comment";
let width = window.innerWidth;
let height = window.innerHeight;
let speedMode = false;
let typingTimeout;
let captionTypingTimeout;
let newCommentTimeout;
let captionTimeout;
let colorpalette = ["#f38db2", "#8799ac", "#874830", "#c28c70", "#ecac9d"];
console.log("*CLICK* or press *SPACE* to change channels");
console.log("★.｡.:*☆:**:. ⓦ𝕖𝓑s𝕚𝓉𝐄 Ｂʸ 𝓶ⓐ𝐲ᗩ 𝐌𝕒𝓝 .:**:.☆*.:｡.★ ♡ www.mayaontheinter.net ♡ 萬美亞");
console.log("https://www.youtube.com/watch?v=dntyqXZLk3g&list=PLztAHXmlMZFS9ZN7GTlZ2UOB2JmxICdt8&index=7&ab_channel=Vogue");
console.log("GRWM 4EVER XOXOXO");

window.addEventListener("resize", onWindowResize);

// setTimeout(() => {
//     kickoff();
// }, 5000);

kickoff();

function kickoff() {
    mode = "caption";
    captionsDiv.style.display = "inline";
    captionsDiv.style.opacity = "1";
    chooseNewCaption();
    clearTimeout(newCommentTimeout);
    clearTimeout(typingTimeout);
}

function renderCaption() {
    console.log(newCaptionArray);
    // if (currentCaptionIndex < newCaptionArray.length) {
    //     let word2Add = newCaptionArray[currentCaptionIndex];

    //     if (currentCaptionIndex != 0) {
    //         currentCaption = currentCaption + " " + word2Add;
    //     } else {
    //         currentCaption = word2Add;
    //     }
    //     captionDiv.innerHTML = currentCaption;
    //     currentCaptionIndex++;
    //     const newInterval = 111 + Math.random() * 333;
    //     captionTypingTimeout = setTimeout(() => {
    //         renderText();
    //     }, newInterval);
    // } else {
    //     chooseNewCaption();
    //     // const newInterval = 3333 + Math.random() * 11111;
    //     const newInterval = 3333;
    //     captionTimeout = setTimeout(() => {
    //         renderCaption();
    //     }, newInterval);
    // }
    const newDiv = document.createElement("div");
    newDiv.innerHTML = currentCaption;
    // newDiv.style.fontSize = 12 + Math.random() * 24 + "px";
    // newDiv.style.fontSize = captionFontSize + "px";
    // captionFontSize-=5;
    newDiv.style.fontSize = 11 + "px";

    captionDiv.appendChild(newDiv);
    // const newBr = document.createElement("br");
    // captionDiv.appendChild(newBr);
}

function chooseNewCaption() {
    currentCaptionIndex = 0;
    currentCaption = "";
    const newCaptionIndex = Math.floor(Math.random() * captions.length);
    let chosenCaptionArray = captions[newCaptionIndex];
    captions.splice(newCaptionIndex, 1);

    let finalCaption = "";
    for (let w = 0; w < chosenCaptionArray.length; w++) {
        if (chosenCaptionArray[w] == "wp") {
            const newWaterproofProductIndex = Math.floor(Math.random() * waterproofBeautyProducts.length);
            finalCaption = finalCaption + " " + '<span class="product" style="font-size:' + waterproofFontSize + 'px;">' + waterproofBeautyProducts[newWaterproofProductIndex] + "</span>" + " ";
            waterproofBeautyProducts.splice(newWaterproofProductIndex, 1);
        } else {
            finalCaption = finalCaption + chosenCaptionArray[w] + " ";
        }
    }
    console.log('final caption: ', finalCaption);
    // finalCaption = "I really, really love this Lights, Camera, Splashes™ Waterproof Mascara";
    // finalCaption = "My loyalty lies with the Boi-ing Cakeless Full Coverage Waterproof Liquid Concealer"
    newCaption = finalCaption.replaceAll('.', '');
    newCaption = newCaption.replaceAll('Waterproof', '<span class="waterproof" style="font-size:' + waterproofFontSize + 'px;">Waterproof</span>');
    newCaption = newCaption.replaceAll('WATERPROOF', '<span class="waterproof">WATERPROOF</span>');

    currentCaption = newCaption;
    // newCaption = finalCaption;

    // captions.splice(newCaptionIndex, 1);
    console.log('new caption: ', newCaption);
    console.log(captions);
    // If all captions have been shown, reset caption library
    if (captions.length < 1) {
        captions = [...originalCaptions];
    }

    // const maxCaptionLength = 86;
    // while (newCaption.length > maxCaptionLength) {
    //     newCaption = captions[Math.floor(Math.random() * captions.length)].replaceAll('.', '').replaceAll(',', '');
    // }

    // newCaption = newCaption.toLowerCase();
    newCaption = newCaption.replaceAll(/\bi\b/g, "I"); // Only an isolated I should be uppercase
    newCaption = newCaption.replaceAll(/i'/g, "I'");
    // const doubleLineLength = 55;

    // newCaptionArray = newCaption.split(" ");
    // let wIndex = newCaptionArray.indexOf('Waterproof');
    // if (wIndex < 0) {
    //     wIndex = newCaptionArray.indexOf('WATERPROOF');
    //     newCaptionArray[wIndex] = '<span class="waterproof">WATERPROOF</span>';
    // } else {
    //     newCaptionArray[wIndex] = '<span class="waterproof">Waterproof</span>';
    // }
    // console.log(newCaptionArray);
    // if (newCaption.length >= doubleLineLength) {
    //     console.log("splitting double line!")
    //     const halfCaptionIndex = Math.floor(newCaptionArray.length * .47);
    //     newCaptionArray[halfCaptionIndex] = newCaptionArray[halfCaptionIndex] + "<br>";
    // }

    // currentCaption = "";
    // for (let i = 0; i < newCaptionArray.length; i++) {
    //     let word2Add = newCaptionArray[i];
    //     if (i != 0) {
    //         currentCaption = currentCaption + " " + word2Add;
    //     } else {
    //         currentCaption = word2Add;
    //     }
    // }
    renderCaption();
    waterproofFontSize++;
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
}

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        event.preventDefault(); // prevent page scroll
        chooseNewCaption();
    }
});

