
function mmLoadMenus() {
  if (window.mm_menu_0816141315_0) return;
  window.mm_menu_0816141315_0 = new Menu("root",92,20,"Verdana, Arial, Helvetica, sans-serif",10,"#44442c","#000000","#bebb90","#e7eace","left","middle",5,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0816141315_0.addMenuItem("DELIVERY &amp; SHIPPING", "location='temp_delivery.html'");
  //mm_menu_0816141315_0.addMenuItem("SHIPPING", "location='temp_delivery.html'");
  // mm_menu_0816141315_0.addMenuItem("PALLATIZING", "location='comingsoon.html'");
  // mm_menu_0816141315_0.addMenuItem("SEMINARS", "location='comingsoon.html'");
   mm_menu_0816141315_0.fontWeight="bold";
   mm_menu_0816141315_0.hideOnMouseOut=true;
   mm_menu_0816141315_0.menuBorder=1;
   mm_menu_0816141315_0.menuLiteBgColor='#ffffff';
   mm_menu_0816141315_0.menuBorderBgColor='#555555';
   mm_menu_0816141315_0.bgColor='#555555';
  window.mm_menu_0816120146_0 = new Menu("root",158,20,"Verdana, Arial, Helvetica, sans-serif",10,"#44442c","#000000","#bebb90","#e7eace","left","middle",5,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0816120146_0.addMenuItem("POOLS", "location='pools.html'");
  mm_menu_0816120146_0.addMenuItem("LANDSCAPING", "location='landscape.html'");
  mm_menu_0816120146_0.addMenuItem("RESIDENTIAL");
  mm_menu_0816120146_0.addMenuItem("COMMERCIAL");
  mm_menu_0816120146_0.addMenuItem("ARCHITECTURE&nbsp;/&nbsp;DESIGN", "location='arch.html'");
  mm_menu_0816120146_0.addMenuItem("THIN&nbsp;VENEER", "location='thinveneerdisplay.html'");
   mm_menu_0816120146_0.fontWeight="bold";
   mm_menu_0816120146_0.hideOnMouseOut=true;
   mm_menu_0816120146_0.menuBorder=1;
   mm_menu_0816120146_0.menuLiteBgColor='#ffffff';
   mm_menu_0816120146_0.menuBorderBgColor='#555555';
   mm_menu_0816120146_0.bgColor='#555555';
  window.mm_menu_0816115830_0 = new Menu("root",190,20,"Verdana, Arial, Helvetica, sans-serif",10,"#44442c","#000000","#bebb90","#e7eace","left","middle",5,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0816115830_0.addMenuItem("PATIO&nbsp;STONES", "location='patio.html'");
  mm_menu_0816115830_0.addMenuItem("THIN&nbsp;VENEER&nbsp;NATURAL&nbsp;STONE", "location='thinveneer.html'");
  mm_menu_0816115830_0.addMenuItem("TUMBLED&nbsp;/&nbsp;CHOPPED&nbsp;STONE", "location='chopped.html'");
  mm_menu_0816115830_0.addMenuItem("BOULDERS&nbsp;/&nbsp;RIVER&nbsp;ROCK","location='bouldersriverrock.html'");
  mm_menu_0816115830_0.addMenuItem("BUILDING&nbsp;STONE&nbsp;/&nbsp;DRY&nbsp;STACK");
  mm_menu_0816115830_0.addMenuItem("CHOPPED&nbsp;OR&nbsp;COURSE&nbsp;BLOCK");
  mm_menu_0816115830_0.addMenuItem("BELLGUARD&nbsp;PAVERS","location='pavers.html'");
  mm_menu_0816115830_0.addMenuItem("MASONRY&nbsp;MATERIAL");
   mm_menu_0816115830_0.fontWeight="bold";
   mm_menu_0816115830_0.hideOnMouseOut=true;
   mm_menu_0816115830_0.menuBorder=1;
   mm_menu_0816115830_0.menuLiteBgColor='#ffffff';
   mm_menu_0816115830_0.menuBorderBgColor='#555555';
   mm_menu_0816115830_0.bgColor='#555555';
  window.mm_menu_0816115546_1 = new Menu("root",65,20,"Verdana, Arial, Helvetica, sans-serif",10,"#44442c","#000000","#bebb90","#e7eace","left","middle",5,0,1000,-5,7,true,true,true,0,true,true);
  mm_menu_0816115546_1.addMenuItem("HISTORY","location='aboutus.html'");
  mm_menu_0816115546_1.addMenuItem("OWNER","location='owner.html'");
  mm_menu_0816115546_1.addMenuItem("STAFF","location='staff.html'");
   mm_menu_0816115546_1.fontWeight="bold";
   mm_menu_0816115546_1.hideOnMouseOut=true;
   mm_menu_0816115546_1.menuBorder=1;
   mm_menu_0816115546_1.menuLiteBgColor='#ffffff';
   mm_menu_0816115546_1.menuBorderBgColor='#555555';
   mm_menu_0816115546_1.bgColor='#555555';

  mm_menu_0816115546_1.writeMenus();
}
function makeMaps(){
    var maps = '<map name="m_test2">' +
        '   <area shape="rect" coords="26,9,64,22" href="index_.html" alt="" ><area shape="rect" coords="563,8,633,21" href="contact.html" alt="" ><area shape="rect" coords="447,7,544,22" href="contact.html" alt="" ><area shape="rect" coords="372,8,426,22" href="#" alt="" onMouseOut="MM_startTimeout();"  onMouseOver="MM_showMenu(window.mm_menu_0816141315_0,372,22,null,\'test2\');"  ><area shape="rect" coords="247,8,350,21" href="#" alt="" onMouseOut="MM_startTimeout();"  onMouseOver="MM_showMenu(window.mm_menu_0816120146_0,248,21,null,\'test2\');"  ><area shape="rect" coords="168,9,227,21" href="#" alt="" onMouseOut="MM_startTimeout();"  onMouseOver="MM_showMenu(window.mm_menu_0816115830_0,169,22,null,\'test2\');"  ><area shape="rect" coords="87,9,142,21" href="#" alt="" onMouseOut="MM_startTimeout();"  onMouseOver="MM_showMenu(window.mm_menu_0816115546_1,88,25,null,\'test2\');"  ></map>';
    document.write(maps);
}