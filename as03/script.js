(function(){
  var nav=document.getElementById('nav');

  function smoothScrollTo(targetY){
    var start=window.pageYOffset,dist=targetY-start,dur=800,t0=null;
    function ease(p){return p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2}
    function step(ts){
      if(!t0)t0=ts;
      var p=Math.min((ts-t0)/dur,1);
      window.scrollTo(0,start+dist*ease(p));
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      var id=a.getAttribute('href');
      var y=0;
      if(id!=='#'&&id!=='#top'){
        var el=document.querySelector(id);
        if(!el)return;
        y=el.getBoundingClientRect().top+window.pageYOffset;
      }
      smoothScrollTo(y);
    });
  });
})();
