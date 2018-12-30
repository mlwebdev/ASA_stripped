// fs-framework.js
(function (
  id__,            // document.getElementById()
  tag_,           // document.getElementsByTagName()
  class__,         // document.getElementsByClassName()
  name_,          // document.getElementsByName()
  query_,          // document.query()
  create_,         // document.create_ement()
  item_,          // localStorage.item_()
  setAttributes,    // Set multiple attributes to one element
  addElementOnTag,  // Append child to parent with innerHTML
  addElementOnId,   // Append child to parent with innerHTML
  id_,
  a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
  ) 
  {
     this.id__ = function(a) {
       return document.getElementById(a)
  }, this.tag_ = function(a) {
       return document.getElementsByTagName(a)[0]
  }, this.class__ = function(a, i) {
       return document.getElementsByClassName(a)[i]
  }, this.name_ = function(a) {
       return document.getElementsByName(a)[0]
  }, this.query_ = function(a) {
      return document.querySelector(a)
  }, this.queryAll = function(a) {
      return document.querySelectorAll(a)
  }, this.create_ = function(a) {
      return document.createElement(a)
  }, this.item_ = function(a, b) {
       return localStorage.item_(a, b)
  }, this.setAttributes = function (el, attrs) {
       for(var key in attrs) {
         el.setAttribute(key, attrs[key]);
       } 
  }, this.id_ = function (a, b) {
       return a.id = b;
  }, this.class_ = function (a, b) {
       return a.classList.add(b);
  }, this.addElementOnTag = function (elp, elc, inp) {
       elc = this.create_(elc)
       elp = this.tag_(elp).appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.addElementOnId = function (elp, elc, inp) {
       elc = this.create_(elc)
       elp = this.id__(elp)
        .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.a_=this.create_("a"),this.abbr_=this.create_("abbr"),this.address_=this.create_("address"),this.area_=this.create_("area"),this.article_=this.create_("article"),this.aside_=this.create_("aside"),this.audio_=this.create_("audio"),this.b_=this.create_("b"),this.base_=this.create_("base"),this.bdi_=this.create_("bdi"),this.bdo_=this.create_("bdo"),this.blockquote_=this.create_("blockquote"),this.body_=this.create_("body"),this.br_=this.create_("br"),this.button_=this.create_("button"),this.canvas_=this.create_("canvas"),this.caption_=this.create_("caption"),this.cite_=this.create_("cite"),this.code_=this.create_("code"),this.col_=this.create_("col"),this.colgroup_=this.create_("colgroup"),this.data_=this.create_("data"),this.datalist_=this.create_("datalist"),this.dd_=this.create_("dd"),this.del_=this.create_("del"),this.details_=this.create_("details"),this.dfn_=this.create_("dfn"),this.div_=this.create_("div"),this.dl_=this.create_("dl"),this.dt_=this.create_("dt"),this.em_=this.create_("em"),this.embed_=this.create_("embed"),this.fieldset_=this.create_("fieldset"),this.figcaption_=this.create_("figcaption"),this.figure_=this.create_("figure"),this.footer_=this.create_("footer"),this.form_=this.create_("form"),this.h1_=this.create_("h1"),this.h2_=this.create_("h2"),this.h3_=this.create_("h3"),this.h4_=this.create_("h4"),this.h5_=this.create_("h5"),this.h6_=this.create_("h6"),this.head_=this.create_("head"),this.header_=this.create_("header"),this.hr_=this.create_("hr"),this.html_=this.create_("html"),this.i_=this.create_("i"),this.iframe_=this.create_("iframe"),this.img_=this.create_("img"),this.input_=this.create_("input"),this.ins_=this.create_("ins"),this.kbd_=this.create_("kbd"),this.label_=this.create_("label"),this.legend_=this.create_("legend"),this.li_=this.create_("li"),this.link_=this.create_("link"),this.main_=this.create_("main"),this.map_=this.create_("map"),this.mark_=this.create_("mark"),this.menu_=this.create_("menu"),this.menuitem_=this.create_("menuitem"),this.meta_=this.create_("meta"),this.meter_=this.create_("meter"),this.nav_=this.create_("nav"),this.noframes_=this.create_("noframes"),this.noscript_=this.create_("noscript"),this.object_=this.create_("object"),this.ol_=this.create_("ol"),this.optgroup_=this.create_("optgroup"),this.option_=this.create_("option"),this.output_=this.create_("output"),this.p_=this.create_("p"),this.param_=this.create_("param"),this.pre_=this.create_("pre"),this.progress_=this.create_("progress"),this.q_=this.create_("q"),this.rp_=this.create_("rp"),this.rt_=this.create_("rt"),this.rtc_=this.create_("rtc"),this.ruby_=this.create_("ruby"),this.s_=this.create_("s"),this.samp_=this.create_("samp"),this.script_=this.create_("script"),this.section_=this.create_("section"),this.select_=this.create_("select"),this.slot_=this.create_("slot"),this.small_=this.create_("small"),this.source_=this.create_("source"),this.span_=this.create_("span"),this.strong_=this.create_("strong"),this.style_=this.create_("style"),this.sub_=this.create_("sub"),this.summary_=this.create_("summary"),this.sup_=this.create_("sup"),this.table_=this.create_("table"),this.tbody_=this.create_("tbody"),this.td_=this.create_("td"),this.template_=this.create_("template"),this.textarea_=this.create_("textarea"),this.tfoot_=this.create_("tfoot"),this.th_=this.create_("th"),this.thead_=this.create_("thead"),this.time_=this.create_("time"),this.title_=this.create_("title"),this.tr_=this.create_("tr"),this.track_=this.create_("track"),this.u_=this.create_("u"),this.ul_=this.create_("ul"),this.var_=this.create_("var"),this.video_=this.create_("video"),this.wbr__=this.create_("wbr");     
   return { 
      a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
}
})();