import Crossword from "./Crossword";

const item = {
  name: "11",
  id: "28",
  words: [
    {
      groupid: "28",
      word: "asleep",
      question: "When you are _____, you might dream.",
      full_word: "asleep",
    },
    {
      groupid: "28",
      word: "brown",
      question: "This is a colour; the colour of chocolate or coffee with milk",
      full_word: "brown",
    },

    {
      groupid: "28",
      word: "careful",
      question:
        "When you are going to do something dangerous, some… to you, Be _____! It means, look after yourself!",
      full_word: "careful",
    },
    {
      groupid: "28",
      word: "clean",
      question:
        "This is the opposite of dirty. If something is _____, it has no marks on it.",
      full_word: "clean",
    },
    {
      groupid: "28",
      word: "dark",
      question:
        "When the sun goes down at night, it is _____, so that it's difficult to see.",
      full_word: "dark",
    },
    {
      groupid: "28",
      word: "dirty",
      question:
        "This is the opposite of clean. _____ clothes need to be washed.",
      full_word: "dirty",
    },
    {
      groupid: "28",
      word: "dry",
      question:
        "This is the opposite of wet. When something is ___…s no water. Deserts, for example, are very _____.",
      full_word: "dry",
    },
    {
      groupid: "28",
      word: "easy",
      question:
        "This is the opposite of difficult or hard. For exa…s very _____, I finished it quickly and got 100%!",
      full_word: "easy",
    },
    {
      groupid: "28",
      word: "empty",
      question:
        "When something is _____ it has nothing in it. My glass was _____, so I filled it with wine.",
      full_word: "empty",
    },
    {
      groupid: "28",
      word: "fat",
      question:
        "When someone is _____, they should lose some weight. It is the opposite of thin.",
      full_word: "fat",
    },
    {
      groupid: "28",
      word: "full",
      question:
        "This is the opposite of empty. When something is _____, you can't put anything else into it.",
      full_word: "full",
    },
    {
      groupid: "28",
      word: "grey",
      question:
        "This is a neutral colour. It is the colour of the sky when it is completely covered in clouds.",
      full_word: "grey",
    },
    {
      groupid: "28",
      word: "handsome",
      question:
        "Women are beautiful; men are _____. Jamie Dornan is a very _____ actor.",
      full_word: "handsome",
    },
    {
      groupid: "28",
      word: "hard",
      question:
        "This is the opposite of easy, and also the opposit…t, and _____ butter can't be put on bread easily.",
      full_word: "hard",
    },
    {
      groupid: "28",
      word: "kind",
      question:
        "A person who is _____ will do anything to help ano…e ____ old lady fed all the cats in the district.",
      full_word: "kind",
    },
    {
      groupid: "28",
      word: "late",
      question:
        "This is the opposite of early. If you are _____ fo…school, you must hurry or you will be in trouble!",
      full_word: "late",
    },
    {
      groupid: "28",
      word: "long",
      question:
        "If something is _____, it is many kilometres from …h. It's a _____ way from New York to Los Angeles.",
      full_word: "long",
    },
    {
      groupid: "28",
      word: "old",
      question:
        "This is the opposite of new or young. When your ca… someone is _____, they are maybe 80 years _____.",
      full_word: "old",
    },
    {
      groupid: "28",
      word: "pink",
      question:
        "This is the colour of some roses. A lot of girls love this colour.",
      full_word: "pink",
    },
    {
      groupid: "28",
      word: "rich",
      question:
        "This is the opposite of poor. When you are _____, you have a lot of money.",
      full_word: "rich",
    },
    {
      groupid: "28",
      word: "sad",
      question:
        "This is the opposite of happy. When you are _____ you want to cry.",
      full_word: "sad",
    },
    {
      groupid: "28",
      word: "shut",
      question:
        "This adjective means the same as closed. Either a door is open or it is _____",
      full_word: "shut",
    },
    {
      groupid: "28",
      word: "sick",
      question:
        "If you eat something bad, then maybe you will feel _____. It means the same thing as ill.",
      full_word: "sick",
    },
    {
      groupid: "28",
      word: "small",
      question:
        "If something is _____ then it isn't very big. Luxembourg is a _____ country.",
      full_word: "small",
    },
    {
      groupid: "28",
      word: "soft",
      question:
        "This is the opposite of hard. A _____ bed is very nice to lie on, because you sink into it.",
      full_word: "soft",
    },
    {
      groupid: "28",
      word: "tall",
      question:
        "If you are _____ you may be good at basketball. He's very _____, at 2.05 metres.",
      full_word: "tall",
    },
    {
      groupid: "28",
      word: "thick",
      question:
        "This is the opposite of thin. You should wear a _____ coat if it is cold outside.",
      full_word: "thick",
    },
    {
      groupid: "28",
      word: "true",
      question:
        "If what someone tells you is _____, then it is the correct information. It's the opposite of false.",
      full_word: "true",
    },
    {
      groupid: "28",
      word: "useful",
      question:
        "If something is _____, you need it for a lot of th…my knife is very _____ if you want to go camping.",
      full_word: "useful",
    },
    {
      groupid: "28",
      word: "weak",
      question:
        "This is the opposite of strong. If someone is _____ they can't lift heavy objects.",
      full_word: "weak",
    },
    {
      groupid: "28",
      word: "young",
      question:
        "If someone is _____, then they may be, for example a teenager. It is the opposite of old.",
      full_word: "young",
    },
  ],
  data: {
    c_title: "Adjectives",
    c_intro: "",
    c_levelid: "2",
    c_width: "10",
    c_height: "10",
    c_showwords: "1",
    c_lengths: "1",
    c_author_id: "81167",
    c_created: "2016-01-11 13:16:24",
    c_ownerid: "0",
    c_icon: "",
  },
};

function App() {
  return (
    <div>
      <Crossword edit={false} item={item} />
    </div>
  );
}

export default App;
