
var sel_y = document.getElementById("y");
var sel_d = document.getElementById("d");
var sel_m = document.getElementById("m");

//give years
for (var i = 1402; i > 1300; i--) {
  var opt = document.createElement("option");
  opt.text = i;
  opt.setAttribute("value", i);
  sel_y.add(opt);
}
//give days
for (var i = 0; i < 32; i++) {
  var opt = document.createElement("option");
  opt.text = i;
  opt.setAttribute("value", i);
  sel_d.add(opt);
}



function btn() {
  var final = document.getElementById("final").value;
  var name = document.getElementById("name").value;
  var gols = document.getElementById("gols").value;
  
  var yy = sel_y.value;
  var mm = sel_m.value;
  var dd = sel_d.value;
  
  var gols_split = gols.split("#");
  
  var main_div = document.getElementById("cont");
  main_div.remove();
  var new_main = document.createElement("div");
  new_main.setAttribute("class", "main_div");
  new_main.setAttribute("id", "new");
  //child codes
  //h4 is for showing name
  var h4 = document.createElement("h1");
  var txt_for_h4 = document.createTextNode("Dear "+name);
  h4.appendChild(txt_for_h4);
  new_main.appendChild(h4);
  //some calculate
  var date = new Date().toLocaleDateString("fa-IR");
  //i feel bad bc i copied this one line code from stack to convert numbers to latin
  var latin = date.replace(/([۰-۹])/g, token => String.fromCharCode(token.charCodeAt(0) - 1728));
  var date1 = new Date();
  var meth = Math;
  var now_h = date1.getHours();
  var now_m = date1.getMinutes();
  var now_s = date1.getSeconds();
  var new_latin = latin.split("/");
  var age_now_y = new_latin[0] - yy;
  var age_now_m = new_latin[1] - mm;
  var age_now_d = new_latin[2] - dd;
  if(age_now_m < 0){
    age_now_y --;
    new_mont = 12 - meth.abs(age_now_m);
    age_now_m = new_mont;
  }
  if(age_now_d < 0){
    age_now_m --;
    new_day = 30 - meth.abs(age_now_d);
    age_now_d = new_day;
  }
  
  //add age to page
  var date_h3 = document.createElement("h3");
  var shoma = "شما";
  var sal = "سال";
  var mah = "ماه";
  var rooz = "روز";
  var va = "و";
  var sp = " ";
  var farsi_date_txt1 = "عمر کرده‌اید";
  var date_final = shoma +sp+ age_now_y +sp+ sal +sp+ va +sp+ age_now_m +sp+ mah +sp+ va + age_now_d +sp+ rooz +sp+farsi_date_txt1;
  var text_date = document.createTextNode(date_final);
  date_h3.appendChild(text_date);
  date_h3.setAttribute("dir", "rtl");
  new_main.appendChild(date_h3);
  //calculate for remain
  var freshDate = new Date();
  var now_h1 = freshDate.getHours();
  var now_m1 = freshDate.getMinutes();
  var now_s1 = freshDate.getSeconds();
  var rem_y = final - age_now_y;   var rem_m = 12 - age_now_m;
  var rem_d = 30 - age_now_d;
  var rem_hor = 24 - now_h1;
  var rem_min = 60 - now_m1;
  var rem_sec = 60 - now_s1;
  
  
  var mishavid = "می‌شوید";
  var dar = "در";
  var saat = "ساعت";
  var dagh = "دقیقه";
  var sanie = "ثانیه";
  var payan = "ی دیگر";
  var sale = "ساله";
  var rem_text = shoma + sp + dar + sp+ rem_y +sp+ sal+sp+va+sp+rem_m+sp+dagh+sp+va+rem_d+sp+rooz+sp+va+sp+rem_hor+sp+saat+sp+va+sp+rem_m+sp+dagh+sp+va+sp+rem_sec+sp+sanie+sp;
  var rem_text1 = rem_text+payan+sp+final+sp+sale+sp+mishavid;
  var rem_node_text = document.createTextNode(rem_text1);
  var rem_tag = document.createElement("h3");
  rem_tag.setAttribute("id","rem_tag")
  rem_tag.appendChild(rem_node_text);
  new_main.appendChild(rem_tag);
  function cal(){
  var freshDate = new Date();
  var now_h1 = freshDate.getHours();
  var now_m1 = freshDate.getMinutes();
  var now_s1 = freshDate.getSeconds();
  var rem_y = final - age_now_y;   var rem_m = 12 - age_now_m;
  var rem_d = 30 - age_now_d;
  var rem_hor = 24 - now_h1;
  var rem_min = 60 - now_m1;
  var rem_sec = 60 - now_s1;
  var rem_text = shoma + sp + dar + sp+ rem_y +sp+ sal+sp+va+sp+rem_m+sp+dagh+sp+va+rem_d+sp+rooz+sp+va+sp+rem_hor+sp+saat+sp+va+sp+rem_min+sp+dagh+sp+va+sp+rem_sec+sp+sanie+sp;
  var rem_text1 = rem_text+payan+sp+final+sp+sale+sp+mishavid;
  var clock = document.getElementById("rem_tag");
  clock.innerHTML = rem_text1
  }
  window.setInterval(cal, 1000);
  //append works
  for (var i = 0; i < gols_split.length; i++) {
    //gols_split[i];
    var box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("id", gols_split);
    var label = document.createElement("label");
    label.setAttribute("for", gols_split[i]);
    var work = document.createTextNode(gols_split[i]);
    label.appendChild(work)
    
    new_main.appendChild(label)
    new_main.appendChild(box)
    
  }
  
  
  //append main cont to page 
  var papa = document.getElementById("papa");
  papa.appendChild(new_main);
  
  
  
  
  
  
}
