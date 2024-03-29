(()=>{
document.querySelectorAll(".learn-outline-item").forEach((_, index) => {
  _.dataset.fileorder = `000${index}`.slice(-3);
});
active = document.querySelector(".learn-lesson-wr.active");
fileorder = active.parentElement.dataset.fileorder;
scorm = active.querySelector("h4>span").innerText;
section = active.parentElement.parentElement.parentElement.parentElement
  .querySelector("h3>span")
  .innerText?.replace(/[\\n]|[\\t]/g, "");
data = window.player
  .playlist()
  .map((_, index) => [    
      ...joinArray(_),
    fileorder,
    `00${index}`.slice(-2),
    _.clip.title,
    scorm,
    section,
  ]);
if (data.length > 0) {
  result = 
    fetch(
      "https://script.google.com/macros/s/AKfycbxIQlGqssMY9WaD4DhC0uDH_MlHY9wS3tIBMDViPNJfIZzsJ5U2ZiR4pRIJDi9rYc8S/exec",
      { method: "POST", body: JSON.stringify({data:[...data]}) },
    ).then((_) => _.json())
  window.location.href = document.querySelector(
    `.learn-outline-item[data-fileorder='${`000${
      parseInt(fileorder) + 1
    }`.slice(-3)}'] a`,
  ).href;
  
}
})()
function joinArray(obj) {
    arr = obj.sources.map(({src,res})=>([res,src]))
data = [];
arr.forEach(_=>{data = [...data,..._]})
    return data
}
