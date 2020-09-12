function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

var ranNums = shuffle([0,1,2,3,4,5,6,7,8,9]);

var nostalgia = {
    name: "Nostalgia",
    description: "A wistful desire to return in thought or in fact to a former time in one's life.",
    img0: "img/nostalgia-" + ranNums[0] + ".jpg",
    img1: "img/nostalgia-" + ranNums[1] + ".jpg",
    img2: "img/nostalgia-" + ranNums[2] + ".jpg",
    img3: "img/nostalgia-" + ranNums[3] + ".jpg",
    img4: "img/nostalgia-" + ranNums[4] + ".jpg"
};

var repentance = {
    name: "Repentance",
    description: "Repentance is the activity of reviewing one's actions and feeling contrition or regret for past wrongs.",
    img0: "img/repentance-" + ranNums[0] + ".jpg",
    img1: "img/repentance-" + ranNums[1] + ".jpg",
    img2: "img/repentance-" + ranNums[2] + ".jpg",
    img3: "img/repentance-" + ranNums[3] + ".jpg",
    img4: "img/repentance-" + ranNums[4] + ".jpg"
};

var sadness = {
    name: "Sadness",
    description: "Sadness is an emotional pain of disadvantage, loss, despair, grief, helplessness, disappointment and sorrow.",
    img0: "img/sadness-" + ranNums[0] + ".jpg",
    img1: "img/sadness-" + ranNums[1] + ".jpg",
    img2: "img/sadness-" + ranNums[2] + ".jpg",
    img3: "img/sadness-" + ranNums[3] + ".jpg",
    img4: "img/sadness-" + ranNums[4] + ".jpg"
};

var ocean = {
    name: "Ocean",
    description: "The ocean is the beginning of life on Earth, and symbolizes formlessness, the unfathomable, and chaos.",
    img0: "img/ocean-" + ranNums[0] + ".jpg",
    img1: "img/ocean-" + ranNums[1] + ".jpg",
    img2: "img/ocean-" + ranNums[2] + ".jpg",
    img3: "img/ocean-" + ranNums[3] + ".jpg",
    img4: "img/ocean-" + ranNums[4] + ".jpg"
};

var smiling = {
    name: "Smiling",
    description: "A smile expresses pleasure, sociability, happiness, joy or amusement.",
    img0: "img/smiling-" + ranNums[0] + ".jpg",
    img1: "img/smiling-" + ranNums[1] + ".jpg",
    img2: "img/smiling-" + ranNums[2] + ".jpg",
    img3: "img/smiling-" + ranNums[3] + ".jpg",
    img4: "img/smiling-" + ranNums[4] + ".jpg"
};

var surprise = {
    name: "Surprise",
    description: "Surprise can have any valence; that is, it can be neutral/moderate, pleasant, unpleasant, positive, or negative.",
    img0: "img/surprise-" + ranNums[0] + ".jpg",
    img1: "img/surprise-" + ranNums[1] + ".jpg",
    img2: "img/surprise-" + ranNums[2] + ".jpg",
    img3: "img/surprise-" + ranNums[3] + ".jpg",
    img4: "img/surprise-" + ranNums[4] + ".jpg"
};

let titleArray = [nostalgia, repentance, sadness, ocean, smiling, surprise];

function chooser() {
    return titleArray[Math.floor(Math.random() * titleArray.length)];
  }

export var chosen  = chooser();