// item array

var proto = {
    img0: function() {
        return Math.floor(Math.random() * 10);
    },
    img1: function() {
        return Math.floor(Math.random() * 10);
    },
    img2: function() {
        return Math.floor(Math.random() * 10);
    },
};

var nostalgia = {
    name: "Nostalgia",
    description: "A wistful desire to return in thought or in fact to a former time in one's life.",
    img0: "img/nostalgia-" + proto.img0() + ".jpg",
    img1: "img/nostalgia-" + proto.img1() + ".jpg",
    img2: "img/nostalgia-" + proto.img2() + ".jpg"
};

var repentance = {
    name: "Repentance",
    description: "Repentance is the activity of reviewing one's actions and feeling contrition or regret for past wrongs.",
    img0: "img/repentance-" + proto.img0() + ".jpg",
    img1: "img/repentance-" + proto.img1() + ".jpg",
    img2: "img/repentance-" + proto.img2() + ".jpg"
};

var sadness = {
    name: "Sadness",
    description: "Sadness is an emotional pain of disadvantage, loss, despair, grief, helplessness, disappointment and sorrow.",
    img0: "img/sadness-" + proto.img0() + ".jpg",
    img1: "img/sadness-" + proto.img1() + ".jpg",
    img2: "img/sadness-" + proto.img2() + ".jpg"
};

var ocean = {
    name: "Ocean",
    description: "The ocean is the beginning of life on Earth, and symbolizes formlessness, the unfathomable, and chaos.",
    img0: "img/ocean-" + proto.img0() + ".jpg",
    img1: "img/ocean-" + proto.img1() + ".jpg",
    img2: "img/ocean-" + proto.img2() + ".jpg"
};

var smiling = {
    name: "Smiling",
    description: "A smile expresses pleasure, sociability, happiness, joy or amusement.",
    img0: "img/smiling-" + proto.img0() + ".jpg",
    img1: "img/smiling-" + proto.img1() + ".jpg",
    img2: "img/smiling-" + proto.img2() + ".jpg"
};

var surprise = {
    name: "Surprise",
    description: "Surprise can have any valence; that is, it can be neutral/moderate, pleasant, unpleasant, positive, or negative.",
    img0: "img/repentance-" + proto.img0() + ".jpg",
    img1: "img/repentance-" + proto.img1() + ".jpg",
    img2: "img/repentance-" + proto.img2() + ".jpg"
};

let titleArray = [nostalgia, repentance, sadness, ocean, smiling, surprise];

function chooser() {
    return titleArray[Math.floor(Math.random() * titleArray.length)];
  }

export var chosen  = chooser();