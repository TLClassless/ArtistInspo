
// color array

var colors = ["Monochromatic", "Analogous", "Complementary", "Split-Complementary", "Triad", "Tetradic"]
var medium = ["Acrylic Painting", "Digital Painting", "Stencil Art", "Oil Painting", "Sketch"]

// item array

var proto = {
    color: function () {
        return colors[Math.floor(Math.random() * colors.length)];
    },
    medium: function () {
        return medium[Math.floor(Math.random() * medium.length)];
    }
};

var nostalgia = {
    name: "Nostalgia",
    description: "A wistful desire to return in thought or in fact to a former time in one's life.",
    img: "img/nostalgia.jpg",
    color: proto.color(),
    medium: proto.medium()
};

var repentance = {
    name: "Repentance",
    description: "Repentance is the activity of reviewing one's actions and feeling contrition or regret for past wrongs.",
    img: "img/repentance.jpg",
    color: proto.color(),
    medium: proto.medium()
};

var sadness = {
    name: "Sadness",
    description: "Sadness is an emotional pain of disadvantage, loss, despair, grief, helplessness, disappointment and sorrow.",
    img: "img/sadness.jpg",
    color: proto.color(),
    medium: proto.medium()
};

var theSea = {
    name: "Ocean",
    description: "The ocean is the beginning of life on Earth, and symbolizes formlessness, the unfathomable, and chaos.",
    img: "img/thesea.jpg",
    color: proto.color(),
    medium: proto.medium()
};

var smiling = {
    name: "Smiling",
    description: "A smile expresses pleasure, sociability, happiness, joy or amusement.",
    img: "img/smiling.jpg",
    color: proto.color(),
    medium: proto.medium()
};

var surprise = {
    name: "Surprise",
    description: "Surprise can have any valence; that is, it can be neutral/moderate, pleasant, unpleasant, positive, or negative.",
    img: "img/surprise.jpg",
    color: proto.color(),
    medium: proto.medium()
};

let titleArray = [nostalgia, repentance, sadness, theSea, smiling, surprise];

function chooser() {
    return titleArray[Math.floor(Math.random() * titleArray.length)];
  }

export var chosen  = chooser();