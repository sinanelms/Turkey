var iscountyselected = false;
var previouscountyselected = "blank";
var start = true;
var past = null;
var content_dir = "details";
var allobjs = [];

$(function(){

var w = 1000, h=500;
var r = Raphael('map', w, h),
attributes = {
    fill: '#666',
    stroke: '#fff',
    'stroke-width':.5,
    'stroke-linejoin': 'round',
},
arr = new Array();
r.setViewBox(28, 120, w,h,true);
r.setSize('100%', '100%');


$(window).resize(function(){
    r.setViewBox(28,120,w,h,true);
    r.setSize('100%', '100%');
});



    

for (var county in paths) {
    var obj = r.path(paths[county].path);
    console.log(obj)
    allobjs.push(obj);
    obj.attr(attributes);
    arr[obj.id] = county;
                                
    if (arr[obj.id] != 'blank'){	
        obj.data('selected', 'notSelected');
        obj.node.id = arr[obj.id];
        obj.attr(attributes).attr({title: paths[arr[obj.id]].name});        
    }
}	
});
