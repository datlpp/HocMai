if(location.href.match('https://hocmai.vn/mod/quiz/nen-tang/')){
    document.title = location.search.slice(1);
    document.querySevalue = setInterval(() => {
  ele = document.querySelector(".btn-confirm");
  if (ele) {
    document.querySelector('#font-size-print').value = 15;
  document.querySelector('#font-size-print').value = 15;
    ele.click();
    clearInterval(value);
  }
}, 500);

}/*
//if(String(location.href).match('quiz/nen-tang/print.php'))
//document.title =  document.title= document.querySelector('.test-page-title').innerText.replace('\n'," ")
try{
params = new URLSearchParams(location.search)
scorm = params.get('scorm');
next = './'+localStorage.getItem(scorm+'next')
before = './'+localStorage.getItem(scorm+'before')
main = localStorage.getItem(scorm)
document.querySelector('.menu-icon[href="https://hocmai.vn/course/mycourse.php"]').href="/practice/"+main
document.querySelector('.btn-retest').href = next
document.querySelector('.btn-retest').innerText = 'Xem đáp án bài sau ❯'
document.querySelector('.pr-title>.prt').href = before
document.querySelector('.pr-title>.prt').innerText = '❮ Xem đáp án bài trước'
document.querySelectorAll('#footer-new,#pr-quick-select,#notification,.menu-icon.people,.menu-icon.logout,#search,.course-menu,.print-wrapp.print-wrapp2').forEach(_=>_.remove())}
catch(e){}
document.title = (new URLSearchParams(location.search)).get('scorm')+' - '+document.title
document.querySelectorAll('.btn-question-comment.no-load').forEach(_=>_.click())
instance = setInterval(()=>{
   element =  document.querySelectorAll('.loadMore-question')
    console.log(element.length)
    element.forEach(_=>_.click())
    if(element.length === 0) clearInterval(instance)
    
},500)
document.querySelector('#notification').outerHTML ='<button id="dat-button" onclick="downloaded = false;if (!downloaded) {document.querySelectorAll(\'.learn-outline-item\').forEach((_, index) => {_.dataset.fileorder = `000${index}`.slice(-3);});active = document.querySelector(\'.learn-lesson-wr.active\');fileorder = active.parentElement.dataset.fileorder;scorm = active.querySelector(\'h4>span\').innerText;section = active.parentElement.parentElement.parentElement.parentElement.querySelector(\'h3>span\').innerText?.replace(/[\\n]|[\\t]/g, \'\');list = window.player.playlist().map((_, index) =>`${JSON.stringify(_)}\\t${fileorder}\\t${`00${index}`.slice(-2)}\\t${_.clip.title}\\t${scorm}\\t${section}`);if (list.length > 0) {download(location.href, list.join(\'\\n\') + \'\\n\');window.location.href = document.querySelector(`.learn-outline-item[data-fileorder=\'${`000${parseInt(fileorder) + 1}`.slice(-3)}\'] a`).href;downloaded = true;}function download(filename, text) {var element = document.createElement(\'a\');element.setAttribute(\'href\',\'data:text/plain;charset=utf-8,\' + encodeURIComponent(text));element.setAttribute(\'download\',new Date().getTime() + \' \' + filename + \'.txt\');element.style.display = \'none\';document.body.appendChild(element);element.click();document.body.removeChild(element);}}">Click Me</button>'
setTimeout(()=>{document.querySelector('#dat-button').click()},1000)*/
/*
``.split('\n').forEach(_=>{[key,value] = _.split('\t');localStorage.setItem(key,value);})
//setInterval(()=>{document.querySelector('.modal-footer [data-toggle="print"]').click()},1000)
setTimeout(()=>{
document.querySelectorAll('script[src*=".facebook"]').forEach(_=>_.remove())
document.querySelectorAll('script[src*=".google"]').forEach(_=>_.remove())
//[...document.querySelectorAll('script')].slice(-9).forEach(_=>_.remove())

    document.querySelectorAll('#ssIFrame_google,.modal,meta,.print-wrapp,#nt-quiz-review>div>.page,#header,#fb-root,#footer-new,.pr-quick-box,.scroll-top').forEach(_=>_.remove())
},500)
document.title = localStorage.getItem(location.href) ||document.title 
document.querySelectorAll('.generalfeedback').forEach(_=>{_.style.display='block'})
``
  .split("\n")
  .forEach((_) => {
    [key, value] = _.split("\t")
    localStorage.setItem(key, value);
  });
//document.querySelector('#font-size-print option[value="14"]').selected=true
//./public/bghm.jpg
//./public/header-print.jpg

//setTimeout(()=>{document.querySelector('#dat-button').click()},1000)
document.querySelector('[value="Nộp bài"]')?.click()
if(location.href.match('https://hocmai.vn/mod/quiz/nen-tang/review.php')){
download('',location.href+'\n')
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href", 
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute(
    "download",
    new Date().getTime() + " " + filename + ".txt"
  );
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
window.close()
}*/
