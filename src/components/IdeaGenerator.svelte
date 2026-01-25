<script>
  // 1. Define the arrays
  // first attempt - generate an idea, no time to make it good
  // const prompt = ["make", "invent", "create", "code", "write"];
  // const something = ["story", "app", "software", "tool", "mobile app", "api"];
  // const adj = ["a useful", "a useless", "a speculative", "a pragmatic"];
  // const verbPosSubject = ["increase", "create"];
  // const posSubject = ["world peace", "mutual understanding", "empathy"];
  // const verbNegSubject = ["solve", "fix"];
  // const negSubject = ["a problem", "hunger", "homelessness"];

  // using other generators instead
  const sites = [
    {
      name: "App Idea Generator",
      url: "https://appideagenerator.com",
      level: "🎲",
    },
    {
      name: "Random Prompts' Random Idea Generator",
      url: "https://randomprompts.org/generators/idea",
      level: "🎲🎲",
    },
    {
      name: "Tell me a stupid app idea and I'll make it",
      url: "https://dev.to/virejdasani/tell-me-a-stupid-app-idea-and-ill-make-it-1a9f",
      level: "🎲🎲🎲🎲",
    },
    {
      name: "Crazy & Unique App Ideas",
      url: "https://community.kodular.io/t/need-crazy-unique-app-ideas-suggest-me-something-cool/307941/4",
      level: "🎲🎲",
    },
    {
      name: "Bozho's Random App Ideas",
      url: "https://techblog.bozho.net/random-app-ideas/",
      level: "🎲",
    },
    {
      name: "🚀 Creative Project Idea Generator",
      url: "https://perchance.org/kustom-creative-project-idea-generator-v1",
      level: "🎲🎲🎲",
    },
    {
      name: "Scratch’s Project Idea Generator",
      url: "https://scratch.mit.edu/ideas",
      level: "🎲🎲🎲",
    },
  ];

  // 2. A function to pick a random item
  const getRandomFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // 3. A reactive state variable to store the phrase
  let phrase = "";

  // 4. A function to update the selected items on user interaction
  function updateRandomPhrase() {
    // first attempt - generate an idea, no time to make it good
    // phrase = `${capitalizeFirstLetter(getRandomFromArr(prompt))} ${getRandomFromArr(adj)} ${getRandomFromArr(something)} to `;
    // if (Math.random() > 0.05)
    //   phrase += `${getRandomFromArr(verbNegSubject)} ${getRandomFromArr(negSubject)}`;
    // else
    //   phrase += `${getRandomFromArr(verbPosSubject)} ${getRandomFromArr(posSubject)}`;

    const obj = getRandomFromArr(sites);
    phrase = `<a href="${obj.url}" target="_blank">${obj.name}</a> ${obj.level}`;
  }

  // 5. Add the first phrase as soon as the component has been mounted to the DOM (client side only)
  import { onMount } from "svelte";
  onMount(() => {
    updateRandomPhrase();
  });
</script>

<button
  on:click={updateRandomPhrase}
  title="Generate"
  class="inline-block align-middle"
  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44c-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71z"/></svg></button
><span class="pl-2"> {@html phrase}</span>

<style>
  button {
    padding: 0.2em 0.4em;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    cursor: pointer;
  }
</style>
