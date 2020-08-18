
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.",
    img: src = "https://picsum.photos/200/300?random=2",
    color: proto.color(),
    medium: proto.medium()
};

var repentance = {
    name: "Repentance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.",
    img: src = "https://picsum.photos/200/300?random=3",
    color: proto.color(),
    medium: proto.medium()
};

var sadness = {
    name: "Sadness",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.",
    img: src = "https://picsum.photos/200/300?random=4",
    color: proto.color(),
    medium: proto.medium()
};

var theSea = {
    name: "The Sea",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.",
    img: src = "https://picsum.photos/200/300?random=5",
    color: proto.color(),
    medium: proto.medium()
};

var smiling = {
    name: "Smiling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.",
    img: src = "https://picsum.photos/200/300?random=6",
    color: proto.color(),
    medium: proto.medium()
};

var surprise = {
    name: "Surprise",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat nunc quis tellus rhoncus ullamcorper.",
    img: src = "https://picsum.photos/200/300?random=7",
    color: proto.color(),
    medium: proto.medium()
};

let titleArray = [nostalgia, repentance, sadness, theSea, smiling, surprise];

function chooser() {
    return titleArray[Math.floor(Math.random() * titleArray.length)];
  }

var chosen  = chooser();

// Title And Description
document.getElementById("title").innerHTML = chosen.name;
document.getElementById("description").innerHTML = chosen.description;

// Images
document.getElementById("img").innerHTML = chosen.img;
document.getElementById("color").innerHTML = chosen.color;
document.getElementById("medium").innerHTML = chosen.medium;
