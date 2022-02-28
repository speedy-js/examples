import { defineGetServerData } from '@speedy-js/universal/types'

export default defineGetServerData(async () => {
  return {
    emojis: [
      {
        name: "grinning face",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128512;"],
        unicode: ["U+1F600"],
      },
      {
        name: "grinning face with smiling eyes",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128513;"],
        unicode: ["U+1F601"],
      },
      {
        name: "face with tears of joy",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128514;"],
        unicode: ["U+1F602"],
      },
      {
        name: "rolling on the floor laughing",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#129315;"],
        unicode: ["U+1F923"],
      },
      {
        name: "smiling face with open mouth",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128515;"],
        unicode: ["U+1F603"],
      },
      {
        name: "smiling face with open mouth and smiling eyes â smiling face with open mouth ",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128516;"],
        unicode: ["U+1F604"],
      },
      {
        name: "smiling face with open mouth and cold sweat â smiling face with open mouth ",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128517;"],
        unicode: ["U+1F605"],
      },
      {
        name: "smiling face with open mouth and tightly-closed eyes â smiling face with open mouth ",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128518;"],
        unicode: ["U+1F606"],
      },
      {
        name: "winking face",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128521;"],
        unicode: ["U+1F609"],
      },
      {
        name: "smiling face with smiling eyes",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128522;"],
        unicode: ["U+1F60A"],
      },
      {
        name: "face savouring delicious food",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128523;"],
        unicode: ["U+1F60B"],
      },
      {
        name: "smiling face with sunglasses",
        category: "smileys and people",
        group: "face positive",
        htmlCode: ["&#128526;"],
        unicode: ["U+1F60E"],
      },
    ],
  };
});
