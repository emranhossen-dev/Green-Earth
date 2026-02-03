const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => displayLessons(data.data));
};
const loadWords = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWords(data.data))
}

const displayWords = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    for (let word of words) {
        const wordDiv = document.createElement('div');
        wordDiv.innerHTML = ` 
        <p>Hi</p>`;
        wordContainer.append(wordDiv);
    }
}
loadWords();

const displayLessons = (lessons) => {
  // 1. get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = " ";
  // 2. get into every lessons
  for (let lesson of lessons) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
            <button onclick="loadWords(${lesson.level_no})"
            class="btn bg-[#FACC15] text-[#15803D] rounded-full py-3 px-5 border-none"
          >
            Lesson - ${lesson.id}
          </button>
        `;
    levelContainer.append(btnDiv);
  }
  // 3. create Element
  // 4.  append into container
};

loadLessons();
