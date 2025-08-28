import{o as Ca,b as v,f as la,q as B,h as U,d as x,w as P,s as f,e as C,$ as i,i as $a,M as O,g as ta,a as ia,N as V,c as ea,l as sa,j as Sa,k as na,m as oa,r as D,n as Ea,p as _a}from"./widev-DYdhAwh2.js";import"./wiauth-BD5ZUUIg.js";Ca(C,async k=>{if(!k)return window.location.href="/";try{const s=v("wiSmile");if(s)return ra(s);const d=(await la(B(U(x,"smiles"),P("usuario","==",k.displayName)))).docs[0].data();f("wiSmile",d,450),ra(d)}catch(s){console.error(s)}});i(document).on("click",".bt_salir",async()=>{await $a(C),window.location.href="/"});function ra(k){console.log(k.nombre),O("Hola "+k.nombre),i(".app").html(`
    <header class="hd">
  <nav class="nv dfw wdp">
  <a class="logo nv_left" href="#Logo">
      <h1>
          <span class="nv_titulo"><i class="fas fa-graduation-cap logo-icon"></i> wiimage</span>
          <span class="nv_descri">| Tu pizarra personalizada con notepad y anotes en imágenes 15</span>
      </h1>
  </a>
  <div class="logo nv_right dfw">
      
      <div class="witemas dpf"></div>
      <button class="bt_login"><i class="fas fa-user"></i> ${k.nombre}</button>
      <button class="bt_salir"><i class="fas fa-sign-out-alt"></i> Salir</button>
  </div>
  </nav>
  </header>

  <main class="miwb wdp">
  <section class="swb notas">
    <div class="lista wbg">
      <div class="dfw hcon dfc">
          <h2><i class="fas fa-list"></i> Notas</h2>
          <button class="agregar_nota"><i class="fas fa-plus"></i> Nota</button>
      </div>
      <div class="nts dfcc">
          <div class="nt nt0 activa" data-ki="ki0">Nota actual</div>
          
      </div>
  </div>
  <div class="editor wbg">
      <div class="hcon dfc">
          <h2><i class="fas fa-edit"></i> Editor</h2> 
          <i title="Ctrl + B" class="fas fa-bold"></i>
          <i title="Ctrl + I" class="fas fa-italic"></i>
          <i title="Ctrl + K" class="fas fa-underline"></i>
          <i title="Ctrl + L" class="fas fa-list-ul"></i>
          <i title="Ctrl + J" class="fas fa-list-ol"></i>
          <i title="Ctrl + I" class="fa-solid fa-align-left"></i>
          <i title="Ctrl + T" class="fa-solid fa-align-center"></i>
          <i title="Ctrl + D" class="fa-solid fa-align-right"></i>
          <i title="Ctrl + Z" class="fa-solid fa-rotate-left"></i>
          <button class="limpiar_nota"><i class="fas fa-trash"></i>Eliminar</button>
          <button class="guardar_nota"><i class="fas fa-save"></i> Guardar</button>
      </div>
      <div class="mcon">
          <div class="txe" contenteditable="true" id="ki0">Ejemplo de las notas </div>
      </div>

    </div>
    </section>

  <section class="swb images psr">
    <div class="paste wbg dfc">
      Área de Capturas.   
      Presiona Ctrl+V para pegar capturas de pantalla. 
    </div>
    <div class="ibx">
      <div class="bx bx1"></div><div class="bx bx2"></div><div class="bx bx3"></div><div class="bx bx4"></div>
      <div class="bx bx5"></div><div class="bx bx6"></div><div class="bx bx7"></div><div class="bx bx8"></div>
      <div class="bx bx9"></div><div class="bx bx10"></div><div class="bx bx11"></div><div class="bx bx12"></div>
    </div>

      <!-- Visor fullscreen -->
    <div class="vw" aria-hidden="true">
      <button class="ic cls" title="Cerrar (Esc)"><i class="fa-solid fa-xmark"></i></button>
      <button class="ic dl"  title="Descargar (Ctrl+S)"><i class="fa-solid fa-download"></i></button>
      <button class="ic rm"  title="Eliminar (Supr)"><i class="fa-solid fa-trash"></i></button>
      <button class="ic pv"  title="Anterior (<)"><i class="fa-solid fa-chevron-left"></i></button>
      <img alt="Vista previa">
      <button class="ic nx"  title="Siguiente (>)"><i class="fa-solid fa-chevron-right"></i></button>
      <div class="th" aria-label="Miniaturas"></div>
    </div>

  <div class='abwc psa dpn dfcc'>
    <b>Acerca de Wiimage</b>
    <p>Wiimage es una pizarra personal con editor de notas y un gestor de imágenes tipo galería. Pega capturas con Ctrl+V o selecciona por doble clic, organízalas en cuadros y míralas en pantalla completa con miniaturas y atajos de teclado. Todo funciona en tu navegador.</p>
    <p>Funciones destacadas:</p>
    <ul>
      <li>Pegar imágenes desde portapapeles (Ctrl+V) y carga por doble clic; se ubican en el siguiente cuadro libre.</li>
      <li>Visor fullscreen con miniaturas al pie, navegación anterior/siguiente y acciones rápidas (cerrar, descargar, eliminar).</li>
      <li>Atajos: > o Flecha Derecha (siguiente),  o Flecha Izquierda (anterior), Esc (cerrar), Ctrl+S (descargar), Supr (eliminar).</li>
      <li>Notas con auto-guardado, chips con vista previa y herramientas de formato (negrita, listas, alineación).</li>
      <li>Persistencia local (LocalStorage) para notas e imágenes y botón “Borrar todo”.</li>
      <li>Diseño responsivo y temas visuales para un uso tipo app.</li>
    </ul>
    <p><a href='https://wtaype.github.io/wiimage/v11' target='_blank'>v11 - Version Inicial</a></p>
    <p><a href='https://wtaype.github.io/wiimage/v12' target='_blank'>v12 - Version Blue</a></p>
    <b>Privacidad y seguridad</b>
    <p>Wiimage no recopila datos personales ni envía información a servidores. Todo se procesa localmente en tu dispositivo y se guarda en el almacenamiento del navegador. Puedes eliminarlo cuando quieras con “Borrar todo”. No usamos cookies de rastreo.</p>
    <button aria-label='ENTENDIDO' class='abwok bts'>ENTENDIDO</button>
  </div>

  </section>

  </main>

  <footer class='foo hwb txc'>
  <p>Creado con<i class="fa fa-heart"></i>by<a class='ftx lkme' href='https://wtaype.github.io/' target='_blank'>@wilder.taype</a>2025 - <span class="wty"></span><span class="abw tm11042025" id="101542394703517594">| Acerca del app | Actualizado</span><span class="wtu"></span></p>
  </footer>
    
`),ta(".txe","id",a=>a.html()),ia(".txe","id",(a,t)=>a.html(t));const s=i(".txe"),F=i(".nts"),d=i(".editor .hcon");let m=0;const u=a=>+String(a).replace(/\D+/g,"")||0,$=(a,t=28)=>i("<div>").html(a||"").text().replace(/\s+/g," ").trim().slice(0,t),ca=a=>(i('[data-ki^="ki"]').removeClass("activa"),i(`[data-ki="${a}"]`).addClass("activa")),L=(a,t)=>{const e=i(`[data-ki="${a}"]`);e.length?e.text(t):i(`<div class="nt nt${u(a)}" data-ki="${a}">${t}</div>`).appendTo(F)},S=a=>{const t=v(a)||"";s.attr("id",a).html(t).focus(),ca(a)},y=()=>Object.keys(localStorage).filter(a=>/^ki\d+$/.test(a)),w=a=>`dirty:${a}`,E=a=>`remote:${a}`,da=()=>{const a=i('[data-ki^="ki"]').map((e,n)=>u(i(n).data("ki"))).get(),t=y();m=Math.max(m,0,...a,...t.map(u)),i.each(t,(e,n)=>{const l=v(n);l&&L(n,$(l)+"...")})},G=(()=>{let a;return(t=1600)=>{const e=i(".guardar_nota");e.length&&(e.addClass("bta").text("Guardado"),clearTimeout(a),a=setTimeout(()=>{e.removeClass("bta").text("Guardar")},t))}})(),ua=async()=>{const a=C.currentUser,t=a?.email;if(!(!t||y().length))try{const e=B(U(x,"smilenotas"),P("email","==",t),sa(100)),n=await la(e);let l=0;n.forEach(c=>{const o=c.data(),r=o.ki||"ki0",b=o.nota||"";f(r,b,12),f(E(r),1,720),L(r,$(b)+"..."),l=Math.max(l,u(r))}),m=Math.max(m,l)}catch(e){console.error("Hydrate error:",e)}},W=async({silent:a=!1}={})=>{const t=C.currentUser,e=t?.email,n=t?.displayName||k?.nombre||"";if(!e)return;const l=y().filter(o=>!!v(w(o))).slice(0,100);if(!l.length){a||O("Nada que sincronizar");return}const c=Sa(x);l.forEach(o=>{const r=v(o)||"",b=$(r,22),xa=na(x,"smilenotas",`${e}_${o}`),aa={ki:o,titulo:b,usuario:n,email:e,nota:r,actualizacion:oa()};v(E(o))||(aa.creacion=oa()),c.set(xa,aa,{merge:!0})});try{await c.commit(),l.forEach(o=>{f(E(o),1,720),D(w(o))}),a||O("Notas guardadas en la nube"),G()}catch(o){console.error("Sync error:",o),a||V("Error al sincronizar notas","error")}},fa=async a=>{const t=C.currentUser,e=t?.email;try{e&&await Ea(na(x,"smilenotas",`${e}_${a}`))}catch(n){console.error("Delete cloud error:",n),V("No se pudo eliminar en la nube","error")}finally{D(a),D(w(a)),D(E(a)),i(`[data-ki="${a}"]`).remove(),s.attr("id")===a&&s.removeAttr("id").empty();const n=y().sort((l,c)=>u(l)-u(c));n.length&&S(n.includes("ki0")?"ki0":n[0]),O("Nota eliminada")}};let I=null;const ma=()=>{const a=C.currentUser,t=a?.email;if(!t)return;if(typeof I=="function")try{I()}catch{}const e=B(U(x,"smilenotas"),P("email","==",t),sa(100));I=_a(e,n=>{let l=m;if(n.docChanges().forEach(c=>{const o=c.doc.data()||{},r=o.ki||c.doc.id.split("_")[1]||"ki0",b=o.nota||"";c.type!=="removed"&&(v(w(r))||(f(r,b,12),f(E(r),1,720),s.attr("id")===r&&s.html(b)),L(r,$(v(r)||b)+"..."),l=Math.max(l,u(r)))}),m=Math.max(m,l),!s.attr("id")){const c=y().sort((o,r)=>u(o)-u(r));c.length&&S(c.includes("ki0")?"ki0":c[0])}},n=>console.error("Snapshot notas error:",n))};s.on("input",()=>{const a=s.attr("id");if(!a)return;f(a,s.html(),12),f(w(a),1,12);const t=$(v(a));t&&i(`[data-ki="${a}"]`).text(t+"..."),G()}),i(document).on("click",".guardar_nota",async()=>{const a=s.attr("id");a&&(f(a,s.html(),12),f(w(a),1,12)),await W({silent:!1})}),i(document).on("click",".agregar_nota",()=>{if(y().length>=100)return V("Máximo 100 notas por usuario","warning");const t=`ki${++m}`;L(t,`Nota ${m}`),S(t)}),i(document).on("click",'[data-ki^="ki"]',a=>S(i(a.currentTarget).data("ki"))),i(document).on("click",".limpiar_nota",async function(){const a=s.attr("id");a&&(await fa(a),ea(this,"bta","Eliminado","Eliminar"))}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&W({silent:!0})}),(async()=>{da(),await ua(),ma();const a=y().sort((t,e)=>u(t)-u(e));a.length&&!s.html()&&S(a.includes("ki0")?"ki0":a[0])})();const ga={".fa-bold":"bold",".fa-italic":"italic",".fa-underline":"underline",".fa-list-ul":"insertUnorderedList",".fa-list-ol":"insertOrderedList",".fa-align-left":"justifyLeft",".fa-align-center":"justifyCenter",".fa-align-right":"justifyRight",".fa-rotate-left":"undo"};i.each(ga,(a,t)=>d.find(a).attr("data-cmd",t));let T=null;const R=()=>{const a=window.getSelection();if(!a||!a.rangeCount)return!1;const t=a.anchorNode;return t&&(s[0]===t||i.contains(s[0],t))},q=()=>{const a=window.getSelection();a&&a.rangeCount&&R()&&(T=a.getRangeAt(0))},va=()=>{if(!T)return;const a=window.getSelection();a.removeAllRanges(),a.addRange(T)},pa=a=>{!R()&&T&&va(),document.execCommand(a,!1,null),s.focus(),q(),j()};d.on("mousedown","i",a=>a.preventDefault()).on("click","i",function(){const a=i(this).data("cmd");a&&pa(a)});const ha=[[".fa-bold","bold"],[".fa-italic","italic"],[".fa-underline","underline"],[".fa-list-ul","insertUnorderedList"],[".fa-list-ol","insertOrderedList"]],j=()=>{if(!R())return void d.find("i").removeClass("actv").addClass("is-disabled");d.find("i").removeClass("is-disabled"),i.each(ha,(e,n)=>d.find(n[0]).toggleClass("actv",document.queryCommandState(n[1])));const a=document.queryCommandState("justifyCenter"),t=document.queryCommandState("justifyRight");d.find(".fa-align-center").toggleClass("actv",a),d.find(".fa-align-right").toggleClass("actv",t),d.find(".fa-align-left").toggleClass("actv",!a&&!t)};document.addEventListener("selectionchange",()=>{q(),j()}),s.on("keyup mouseup input",()=>{q(),j()}),q(),j();const H=i(".paste"),g=i(".ibx .bx");g.each((a,t)=>i(t).attr("data-k",`im${a+1}`));const M=i(".vw"),K=i(".vw img"),p=i(".vw .th");let h=-1;const z=()=>g.map((a,t)=>i(t).attr("data-src")?a:null).get(),_=()=>{const a=z();p.empty().append(a.map(t=>`<div class="ti" data-i="${t}"><img src="${g.eq(t).attr("data-src")}"></div>`)),p.find(`[data-i="${h}"]`).addClass("on")},ba=(a,t)=>{const e=g.eq(a);e.attr("data-src",t).addClass("fill").html(`<img src="${t}">`),f(e.attr("data-k"),t,720),_()},ka=()=>g.toArray().findIndex(a=>!i(a).attr("data-src")),ya=a=>{let t=ka();t<0&&(t=0),ba(t,a)},wa=a=>{const t=new FileReader;t.onload=()=>ya(t.result),t.readAsDataURL(a)},J=a=>Array.from(a).forEach(t=>t&&/^image\//.test(t.type)&&wa(t));H.on("paste",a=>{const t=a.originalEvent.clipboardData;t&&J(Array.from(t.items).map(e=>e.getAsFile()).filter(Boolean))}),H.on("dblclick",()=>{i('<input type="file" accept="image/*" multiple hidden>').appendTo("body").on("change",a=>{J(a.target.files),i(a.target).remove()}).trigger("click")}),ia(".ibx .bx","data-k",(a,t)=>{t&&a.attr("data-src",t).addClass("fill").html(`<img src="${t}">`)}),ta(".ibx .bx","data-k",a=>a.attr("data-src")||""),_();const A=a=>{const t=g.eq(a).attr("data-src");if(!t)return;h=a,K.attr("src",t),M.addClass("show"),p.find(".ti").removeClass("on"),p.find(`[data-i="${a}"]`).addClass("on");const e=p.find(`[data-i="${a}"]`);e.length&&p.animate({scrollLeft:Math.max(0,e.position().left+p.scrollLeft()-(p.width()-e.width())/2)},180)},N=()=>{M.removeClass("show"),h=-1},Z=()=>{const a=z();if(!a.length)return N();A(a[(a.indexOf(h)+1)%a.length])},Q=()=>{const a=z();if(!a.length)return N();A(a[(a.indexOf(h)-1+a.length)%a.length])},X=()=>{const a=i("<a>").attr({href:K.attr("src"),download:`wiimage-${h+1}.png`}).appendTo("body");a[0].click(),a.remove()},Y=()=>{const a=g.eq(h);D(a.attr("data-k")),a.removeAttr("data-src").removeClass("fill").empty(),_();const t=z();t.length?A(t[0]):N()};i(document).on("click",".ibx .bx",a=>{const t=g.index(a.currentTarget);i(a.currentTarget).attr("data-src")&&A(t)}),i(document).on("click",".vw .cls, .vw",a=>{(a.target===a.currentTarget||i(a.target).closest(".cls").length)&&N()}),i(document).on("click",".vw .nx",Z),i(document).on("click",".vw .pv",Q),i(document).on("click",".vw .dl",X),i(document).on("click",".vw .rm",Y),i(document).on("click",".vw .th .ti",a=>A(+i(a.currentTarget).data("i"))),i(document).on("keydown",a=>{if(M.hasClass("show")){if(a.ctrlKey&&(a.key==="s"||a.key==="S"))return a.preventDefault(),X();if(a.key==="Escape")return N();if(a.key==="ArrowRight"||a.key===">"||a.key===".")return Z();if(a.key==="ArrowLeft"||a.key==="<"||a.key===",")return Q();if(a.key==="Delete"||a.key==="Supr"||a.key==="Backspace")return Y()}}),i(".bt_borrar").click(function(){if(confirm("¿Eliminar todo lo guardado?")){try{localStorage.clear()}catch{Object.keys(localStorage).forEach(t=>localStorage.removeItem(t))}i('[data-ki^="ki"]').remove(),$tx.removeAttr("id").empty(),cont=0,g.removeAttr("data-src").removeClass("fill").empty(),_&&_(),M.removeClass("show"),h=-1,ea(this,"bta","Eliminado","Eliminar")}})}
