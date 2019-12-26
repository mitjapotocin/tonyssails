/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
window.addEventListener("scroll", e => {
  let scrollTop = document.documentElement.scrollTop;
  let scissors = document.getElementById("scissors");
  let scissors2 = document.getElementById("scissors2");
  let newPos = scrollTop * 2.4 - 400 + "px";
  let newPos2 = scrollTop * 0.7 - 100 + "px";
  scissors.style.left = newPos;
  scissors2.style.left = newPos2;
  console.log(newPos);
});
