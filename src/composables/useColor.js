import { ref } from "@vue/reactivity";

export default function useColor () {

    const colors = ["green", "red", "blue", "purple"];
    const message = ref("Pick a color...");
    const matchColor = (value) => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      if (colors[randomNumber] === value) {
        message.value = `You win... [answer: ${colors[randomNumber]}]`;
        return;
      }
      message.value = `You loose [answer: ${colors[randomNumber]}]`;
    };
    return { colors, message, matchColor };
};