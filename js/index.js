window.addEventListener('load',function() {
    var left_btn = document.querySelector('.leftbutton'); 
    var right_btn = document.querySelector('.rightbutton'); 
    var advertisement = this.document.querySelector('.advertisement');
    var ul = advertisement.querySelector('ul');
    var imageWidth =  ul.children[0].offsetWidth;
    var circlelist = advertisement.querySelector('ol');
    var imagenum = circlelist.children.length;//要在开始获取，因为后面会进行克隆。
    advertisement.addEventListener('mouseenter',function(){
        left_btn.style.display = 'block';
        right_btn.style.display = 'block';
    });
    advertisement.addEventListener('mouseleave',function(){
        left_btn.style.display = 'none';
        right_btn.style.display = 'none';
    });
    //console.log(circlelist.children);
    circlelist.children[0].className = 'current';
    for (var i = 0; i < imagenum; i++){
        circlelist.children[i].setAttribute('data-index',i);
        circlelist.children[i].addEventListener('click',function() {
            for (var j = 0; j < imagenum; j++){
                circlelist.children[j].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('data-index');
            console.log(imageWidth);
            animate(ul,- index * imageWidth);
        });
    }
    //克隆第一张图片和最后一张图片
    var first = ul.children[0].cloneNode(true);
    //var last = ul.children[ul.children.length-1].cloneNode(true);
    ul.appendChild(first);
    //ul.insertBefore(last,ul.children[0]);
    left_btn.addEventListener('click',function() {
        for (var i = 0;i < imagenum; i++){
            if (circlelist.children[i].className != ''){
                console.log(i);
                //var index = i % imagenum - 1;想法不错，利用整除
                circlelist.children[i].className = '';
                animate(ul,- (i-1)*imageWidth);
                circlelist.children[i-1].className = 'current';
                break;
            }
        }
    });
    right_btn.addEventListener('click',function() {
        for (var i = 0;i < imagenum; i++){
            if (circlelist.children[i].className != ''){
                console.log(i);
                circlelist.children[i].className = '';
                animate(ul, - (i+1)*imageWidth);
                circlelist.children[(i+1)%imagenum].className = 'current';
                if (i == (imagenum-1)){
                    ul.style.left = 0;
                }
                break;
            }
        }
    });
});