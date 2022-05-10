$(document).ready(function(){

    $('.openMenu').click(function(){
        $('.dapromenuUl').slideToggle(200);
        
        if($(this).children('img').attr('src') == 'images/menu.png'){
                $(this).children('img').attr('src','images/close.png');
           }else{
               $(this).children('img').attr('src','images/menu.png');
           }
    });
    
 
    
    $('.footleft3 ul li').mouseover(function(){
        String.prototype.filename=function(extension){
        var s= this.replace(/\\/g, '/');
        s= s.substring(s.lastIndexOf('/')+ 1);
        return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
    }
        var imgname = $(this).find('img').attr('src').filename();        
        $(this).children('a').find('img').attr('src','images/'+imgname+'1.png') ;
        
    });
    
    $('.footleft3 ul li').mouseout(function(){
        String.prototype.filename=function(extension){
        var s= this.replace(/\\/g, '/');
        s= s.substring(s.lastIndexOf('/')+ 1);
        return extension? s.replace(/[?#].+$/, ''): s.split('1.')[0];
    }
        var imgname = $(this).find('img').attr('src').filename();  
        $(this).children('a').find('img').attr('src','images/'+imgname+'.png'); 
    });
    
    
        $('.footleft4 ul li').mouseover(function(){
        String.prototype.filename=function(extension){
        var s= this.replace(/\\/g, '/');
        s= s.substring(s.lastIndexOf('/')+ 1);
        return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
    }
        var imgname = $(this).find('img').attr('src').filename();        
        $(this).children('a').find('img').attr('src','images/'+imgname+'1.png') ;
        
    });
    
    $('.footleft4 ul li').mouseout(function(){
        String.prototype.filename=function(extension){
        var s= this.replace(/\\/g, '/');
        s= s.substring(s.lastIndexOf('/')+ 1);
        return extension? s.replace(/[?#].+$/, ''): s.split('1.')[0];
    }
        var imgname = $(this).find('img').attr('src').filename();  
        $(this).children('a').find('img').attr('src','images/'+imgname+'.png'); 
    });

    
    

});

