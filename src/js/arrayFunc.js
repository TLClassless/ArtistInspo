var nostalgia = {
  name: "Nostalgia",
  uid: "iN-0182-001",
  description:
    "A wistful desire to return in thought or in fact to a former time in one's life.",
  img0: "img/nostalgia/0.jpg",
  img1: "img/nostalgia/1.jpg",
  img2: "img/nostalgia/2.jpg",
  img3: "img/nostalgia/3.jpg",
  img4: "img/nostalgia/4.jpg",
};

var repentance = {
  name: "Repentance",
  uid: "iN-0182-002",
  description:
    "Repentance is the activity of reviewing one's actions and feeling contrition or regret for past wrongs.",
  img0: "img/repentance/0.jpg",
  img1: "img/repentance/1.jpg",
  img2: "img/repentance/2.jpg",
  img3: "img/repentance/3.jpg",
  img4: "img/repentance/4.jpg",
};

var sadness = {
  name: "Sadness",
  uid: "iN-0182-003",
  description:
    "Sadness is an emotional pain of disadvantage, loss, despair, grief, helplessness, disappointment and sorrow.",
  img0: "img/sadness/0.jpg",
  img1: "img/sadness/1.jpg",
  img2: "img/sadness/2.jpg",
  img3: "img/sadness/3.jpg",
  img4: "img/sadness/4.jpg",
};

var ocean = {
  name: "Ocean",
  uid: "iN-0182-004",
  description:
    "The ocean is the beginning of life on Earth, and symbolizes formlessness, the unfathomable, and chaos.",
  img0: "img/ocean/0.jpg",
  img1: "img/ocean/1.jpg",
  img2: "img/ocean/2.jpg",
  img3: "img/ocean/3.jpg",
  img4: "img/ocean/4.jpg",
};

var smiling = {
  name: "Smiling",
  uid: "iN-0182-005",
  description:
    "A smile expresses pleasure, sociability, happiness, joy or amusement.",
  img0: "img/smiling/0.jpg",
  img1: "img/smiling/1.jpg",
  img2: "img/smiling/2.jpg",
  img3: "img/smiling/3.jpg",
  img4: "img/smiling/4.jpg",
};

var surprise = {
  name: "Surprise",
  uid: "iN-0182-006",
  description:
    "Surprise can have any valence; that is, it can be neutral/moderate, pleasant, unpleasant, positive, or negative.",
  img0: "img/surprise/0.jpg",
  img1: "img/surprise/1.jpg",
  img2: "img/surprise/2.jpg",
  img3: "img/surprise/3.jpg",
  img4: "img/surprise/4.jpg",
};

let titleArray = [nostalgia, repentance, sadness, ocean, smiling, surprise];

function chooser() {
  return titleArray[Math.floor(Math.random() * titleArray.length)];
}

export var chosen = chooser();
