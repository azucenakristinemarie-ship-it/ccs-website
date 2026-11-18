/* ==========================================================
   Site content. Edit this file to add / change news,
   announcements, calendar events and resource links.
   ========================================================== */

window.CCS_DATA = {
  /* ---------- Latest news & updates ---------- */
  news: [
    {
      id: "parents-meeting",
      title: "CCS Parent's Meeting",
      date: "2026-09-12",
      cat: "Event",
      img: "images/126.png",
      excerpt: "CCS Department Holds Breakout Meeting to Address Concerns and Strengthen Parent Communication",
      body: "CCS Department Holds Breakout Meeting to Address Concerns and Strengthen Parent Communication."
    },
    {
      id: "taking-the-lead",
      title: "Taking the LEAD",
      date: "2026-08-27",
      cat: "News",
      img: "images/13.png",
      excerpt: "Pseudocode.com Society officially accepted their positions, marking the beginning of a new chapter of service.",
      body: "Pseudocode.com Society officially accepted their positions, marking the beginning of a new chapter of service.",
      link: "https://www.facebook.com/dlsjbc.ccs",
      linkLabel: "Visit our Facebook page"
    }
  ],

  /* ---------- Announcements ---------- */
  announcements: [
    {
      title: "Enrollment for 1st Semester A.Y 2026 - 2027 is now open!",
      text: "The enrollment for the 1st Semester SY 2026 - 2027 is now open. Please log in to your student portal to secure your subjects."
    },
    {
      title: "CCS Orientation Schedule",
      text: "All incoming freshmen are required to attend the CCS Orientation on September 25, 2026 (Thursday) 8: 00 AM at LC."
    },
    {
      title: "Capstone Title Hearing Schedule",
      text: "Stay informed about the upcoming capstone project presentations, including assigned schedules, time slots, and important reminders."
    }
  ],

  /* ---------- Academic calendar (start / end are YYYY-MM-DD) ---------- */
  calendar: [
    { start: "2026-08-10", end: "2026-08-14", label: "Aug 10–14",     title: "Enrollment Period – 1st Semester",   cat: "Admin" },
    { start: "2026-08-17", end: "2026-08-17", label: "Aug 17",        title: "Start of Classes – 1st Semester",    cat: "Academic" },
    { start: "2026-09-10", end: "2026-09-10", label: "Sep 10",        title: "CCS General Assembly",               cat: "Event" },
    { start: "2026-09-18", end: "2026-09-18", label: "Sep 18",        title: "Capstone Title Hearing",             cat: "Academic" },
    { start: "2026-10-05", end: "2026-10-05", label: "Oct 05",        title: "IT/CS Career Talk",                  cat: "Event" },
    { start: "2026-10-13", end: "2026-10-17", label: "Oct 13–17",     title: "Midterm Examinations",               cat: "Exam" },
    { start: "2026-10-18", end: "2026-10-18", label: "Oct 18",        title: "CCS Culminating Activity",           cat: "Event" },
    { start: "2026-11-03", end: "2026-11-07", label: "Nov 03–07",     title: "Midterm Break",                      cat: "Break" },
    { start: "2026-11-30", end: "2026-11-30", label: "Nov 30",        title: "Bonifacio Day (No Classes)",         cat: "Holiday" },
    { start: "2026-12-08", end: "2026-12-08", label: "Dec 08",        title: "Feast of the Immaculate Conception", cat: "Holiday" },
    { start: "2026-12-15", end: "2026-12-19", label: "Dec 15–19",     title: "Final Examinations – 1st Semester",  cat: "Exam" },
    { start: "2026-12-20", end: "2027-01-05", label: "Dec 20–Jan 05", title: "Christmas Break",                    cat: "Break" }
  ],

  catColors: {
    Admin: "#1e3d2c", Academic: "#10763b", Event: "#d4a843",
    Exam: "#d84a4a", Break: "#347fa3", Holiday: "#82964f"
  },

  /* ---------- Resources ---------- */
  resources: [
    {
      group: "Online Libraries",
      items: [
        { name: "IEEE Xplore Digital Library", url: "https://ieeexplore.ieee.org/", desc: "Journals, conferences and standards in computing and engineering" },
        { name: "ACM Digital Library", url: "https://dl.acm.org/", desc: "Full-text collection of computing literature" },
        { name: "DLSJBC Online Library Portal", url: "https://www.facebook.com/profile.php?id=61565553352364", desc: "Access your school's online library resources" },
        { name: "Google Scholar", url: "https://scholar.google.com/", desc: "Search scholarly articles across disciplines" },
        { name: "ResearchGate", url: "https://www.researchgate.net/", desc: "Network and share research papers" },
        { name: "SpringerLink (via CHED e-Library)", url: "https://link.springer.com/", desc: "Books and journals in science and technology" }
      ]
    },
    {
      group: "Learning & Coding",
      items: [
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/", desc: "HTML, CSS and JavaScript documentation" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", desc: "Free coding lessons and projects" },
        { name: "W3Schools", url: "https://www.w3schools.com/", desc: "Quick tutorials and references" },
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/", desc: "Algorithms, data structures and practice problems" }
      ]
    },
    {
      group: "Research & Writing Tools",
      items: [
        { name: "arXiv", url: "https://arxiv.org/", desc: "Open-access preprints in computer science" },
        { name: "Zotero", url: "https://www.zotero.org/", desc: "Collect, organize and cite your sources" },
        { name: "Overleaf", url: "https://www.overleaf.com/", desc: "Collaborative LaTeX editor for papers and capstone documents" }
      ]
    }
  ],

  /* ---------- Faculty & staff ---------- */
  faculty: [
    { name: "Ms. Glogerlie Jumandos",       role: "Dean, CCS",              photo: "images/jumandos.jpg" },
    { name: "Ms. Ronalyn S. Goyo",          role: "Program-in-Charge, CCS", photo: "images/goyo.jpg" },
    { name: "Mr. Lawrence C. Libar",        role: "Program Chair, BSCS",    photo: "images/libar.jpg" },
    { name: "Mr. Richen Temanel",           role: "Faculty",                photo: "images/temanel.jpg" },
    { name: "Ms. Jane Celeste G. Lumantas", role: "Faculty",                photo: "images/lumantas.jpg" },
    { name: "Mr. Dether Olaguir",           role: "Faculty",                photo: "images/olaguir.jpg" }
  ]
};


/* ==========================================================
   DLSJBC – College of Computer Studies
   Site behaviour (vanilla JavaScript, no dependencies)
   ========================================================== */
(function () {
  "use strict";
  var DATA = window.CCS_DATA || {};
  var PAGE = "home";

  /* ---------- tiny helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(str) { return String(str).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function parseDate(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function key(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function midnight(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var MON3 = MONTHS.map(function (m) { return m.slice(0, 3); });

  /* ---------- icons ---------- */
  var I = {
    arrow: '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h17M14 6l6 6-6 6"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="M12 15l-3-3a22 22 0 0 1 2-4 12.9 12.9 0 0 1 11-6c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z"/><path d="M9 12H4s.5-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.5 4-2c1.1-1.6 0-5 0-5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4.5" width="19" height="15" rx="1.5"/><path d="M2.5 6l9.5 7 9.5-7M2.5 19l7-7M21.5 19l-7-7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M8 9l2 2-2 2M12 13h4"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5a3 3 0 0 1 0 6M18 14.3c1.8.8 3 2.6 3 4.7"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5z"/><path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20M8 7h8M8 10h8"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="#fff" fill-opacity=".14" stroke="#fff" stroke-width="1.5"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    chevD: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l7 7 7-7"/></svg>',
    up: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
  };
  window.CCS_ICONS = I;

  /* ---------- shared header / footer ---------- */
  var TICKER = "📢 Enrollment for 1st Semester A.Y 2026 - 2027 is now open!     |     CCS Orientation Schedule     |    Capstone Title Hearing Schedule 📢     ";
  var NAV = [
    ["home", "#home", "Home"], ["about", "#about", "About CCS"], ["programs", "#programs", "Programs"],
    ["faculty", "#faculty", "Faculty & Staff"], ["news", "#news", "News & Events"],
    ["resources", "#resources", "Resources"], ["contact", "#contact", "Contact Us"]
  ];
  function brandHTML() {
    return '<a class="brand" href="#home" aria-label="DLSJBC College of Computer Studies – Home">' +
      '<span class="brand-logo"><img src="images/ccs-logo.png" alt=""></span>' +
      '<span class="brand-text"><strong>De La Salle John Bosco College</strong><small>College of Computer Studies</small></span></a>';
  }
  function injectChrome() {
    var h = $("#site-header");
    if (h) {
      h.outerHTML = '<header class="site-header">' +
        '<div class="ticker" role="marquee" aria-label="Announcements"><div class="ticker-track"><span>' + TICKER + TICKER + '</span><span>' + TICKER + TICKER + '</span></div></div>' +
        '<div class="navbar"><div class="container nav-inner">' + brandHTML() +
        '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links"><span></span></button>' +
        '<nav class="nav-links" id="nav-links" aria-label="Main">' +
        NAV.map(function (n) { return '<a href="' + n[1] + '"' + (n[0] === PAGE ? ' class="active" aria-current="page"' : "") + ">" + esc(n[2]) + "</a>"; }).join("") +
        "</nav></div></div></header>";
    }
    var f = $("#site-footer");
    if (f) {
      f.outerHTML = '<footer class="site-footer"><div class="footer-main"><div class="container footer-grid">' +
        '<div><div class="footer-brand"><span class="brand-logo"><img src="images/ccs-logo.png" alt=""></span>' +
        '<span class="brand-text"><strong>De La Salle John Bosco College</strong><small>College of Computer Studies</small></span></div>' +
        '<div class="footer-values"><span>Faith.</span><span>Service.</span><span>Communion.</span></div></div>' +
        '<div><h4>Quick Links</h4><ul><li><a href="#home">Home</a></li><li><a href="#about">About</a></li><li><a href="#programs">Programs</a></li><li><a href="#faculty">Faculty &amp; Staffs</a></li></ul></div>' +
        '<div><ul class="offset"><li><a href="#news">News &amp; Events</a></li><li><a href="#resources">Resources</a></li><li><a href="#contact">Contact Us</a></li></ul></div>' +
        '<div><h4>Contact US</h4><ul class="f-contact">' +
        '<li>' + I.phone + '<a href="tel:+63868533415" style="text-decoration:none">(086) 853 3415</a></li>' +
        '<li>' + I.mail + '<a href="mailto:pseudocode.comsociety@gmail.com">pseudocode.comsociety@gmail.com</a></li>' +
        '<li>' + I.facebook + '<a href="https://www.facebook.com/dlsjbc.ccs" target="_blank" rel="noopener noreferrer">DLSJBC - CCS Facebook Page</a></li>' +
        '<li>' + I.pin + '<a href="https://www.bing.com/maps/default.aspx?where1=La%20Salle%20Drive%2C%20Mangagoy%2C%20Bislig%2C%20Philippines%2C%208311" target="_blank" rel="noopener">La Salle Drive, Mangagoy, Bislig, Philippines, 8311</a></li>' +
        '</ul></div></div></div>' +
        '<div class="footer-bottom"><div class="container"><p>© 2026 De La Salle John Bosco College – College of Computer Studies. All Rights Reserved.</p></div></div></footer>';
    }
    var tg = $(".nav-toggle");
    if (tg) tg.addEventListener("click", function () {
      var open = $("#nav-links").classList.toggle("open");
      tg.setAttribute("aria-expanded", open);
    });
    $$(".nav-links a").forEach(function (a) { a.addEventListener("click", function () { $("#nav-links").classList.remove("open"); }); });
  }

  /* ---------- toast ---------- */
  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 3200);
  }

  /* ---------- modal ---------- */
  var modalBack, lastFocus;
  function openModal(html, dark) {
    lastFocus = document.activeElement;
    if (!modalBack) {
      modalBack = document.createElement("div"); modalBack.className = "modal-back";
      modalBack.addEventListener("click", function (e) { if (e.target === modalBack) closeModal(); });
      document.body.appendChild(modalBack);
    }
    modalBack.innerHTML = '<div class="modal' + (dark ? " dark" : "") + '" role="dialog" aria-modal="true"><button class="modal-close" aria-label="Close">&times;</button>' + html + "</div>";
    $(".modal-close", modalBack).addEventListener("click", closeModal);
    modalBack.classList.add("show"); document.body.style.overflow = "hidden";
    $(".modal-close", modalBack).focus();
  }
  function closeModal() {
    if (!modalBack) return;
    modalBack.classList.remove("show"); document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* hide broken images so the gradient placeholder underneath shows */
  document.addEventListener("error", function (e) { if (e.target && e.target.tagName === "IMG") e.target.style.display = "none"; }, true);

  /* ---------- reveal on scroll + back to top ---------- */
  function initScrollFx() {
    var items = $$(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
      }, { threshold: 0.12 });
      items.forEach(function (el) { io.observe(el); });
    } else items.forEach(function (el) { el.classList.add("in"); });
    var b = document.createElement("button");
    b.className = "to-top"; b.setAttribute("aria-label", "Back to top"); b.innerHTML = I.up;
    b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    document.body.appendChild(b);
    window.addEventListener("scroll", function () { b.classList.toggle("show", window.scrollY > 600); }, { passive: true });
  }

  /* ---------- news cards (home + news page) ---------- */
  function fmtBadge(d) { return MON3[d.getMonth()].toUpperCase() + "<b>" + d.getDate() + "</b>" + d.getFullYear(); }
  function tagClass(c) { return "tag tag-" + c.toLowerCase(); }
  function newsCard(n) {
    var d = parseDate(n.date);
    return '<button type="button" class="news-card reveal" data-id="' + esc(n.id) + '" aria-label="Read: ' + esc(n.title) + '">' +
      '<div class="nc-img"><img src="' + esc(n.img) + '" alt="" loading="lazy"></div>' +
      '<div class="nc-body"><div class="date-badge">' + fmtBadge(d) + "</div><div><h3>" + esc(n.title) + "</h3><p>" + esc(n.excerpt) +
      '</p><span class="' + tagClass(n.cat) + '">' + esc(n.cat) + "</span></div></div></button>";
  }
  function openNews(id) {
    var n = (DATA.news || []).filter(function (x) { return x.id === id; })[0]; if (!n) return;
    var d = parseDate(n.date);
    openModal('<div class="m-img"><img src="' + esc(n.img) + '" alt=""></div><div class="m-body"><div class="meta"><span class="' + tagClass(n.cat) + '">' + esc(n.cat) +
      "</span><span>" + MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + "</span></div><h3>" + esc(n.title) + "</h3><p>" + esc(n.body) + "</p>" +
      (n.link ? '<a class="btn btn-sm" href="' + esc(n.link) + '" target="_blank" rel="noopener">' + esc(n.linkLabel || "Read more") + " " + I.arrow + "</a>" : "") + "</div>");
  }
  function bindNewsClicks(box) {
    box.addEventListener("click", function (e) { var c = e.target.closest(".news-card"); if (c) openNews(c.getAttribute("data-id")); });
  }
  function initHomeNews() {
    var box = $("#home-news"); if (!box) return;
    var list = (DATA.news || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).slice(0, 2);
    box.innerHTML = list.map(newsCard).join(""); bindNewsClicks(box);
  }
  function initNewsPage() {
    var box = $("#news-list"); if (!box) return;
    var state = { cat: "All", q: "", sort: "new" };
    var cats = ["All"]; (DATA.news || []).forEach(function (n) { if (cats.indexOf(n.cat) < 0) cats.push(n.cat); });
    var chipBox = $("#news-chips");
    chipBox.innerHTML = cats.map(function (c) { return '<button type="button" class="chip' + (c === "All" ? " on" : "") + '" data-c="' + esc(c) + '">' + esc(c === "All" || c === "News" ? c : c + "s") + "</button>"; }).join("");
    function render() {
      var list = (DATA.news || []).filter(function (n) {
        return (state.cat === "All" || n.cat === state.cat) && (n.title + " " + n.excerpt).toLowerCase().indexOf(state.q) > -1;
      }).sort(function (a, b) { return state.sort === "new" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date); });
      box.innerHTML = list.map(newsCard).join("") + '<p class="empty-note' + (list.length ? "" : " show") + '">No updates match your search.</p>';
      $$(".reveal", box).forEach(function (el) { el.classList.add("in"); });
    }
    chipBox.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", chipBox).forEach(function (x) { x.classList.toggle("on", x === b); });
      state.cat = b.getAttribute("data-c"); render();
    });
    $("#news-q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });
    $("#news-sort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });
    bindNewsClicks(box); render();
  }

  /* ---------- announcements ---------- */
  function initAnnouncements() {
    var box = $("#announce-list"); if (!box) return;
    box.innerHTML = (DATA.announcements || []).map(function (a, i) {
      return '<button type="button" class="announce reveal" aria-expanded="true" aria-controls="an' + i + '"><span class="pill">Important</span>' +
        "<h3>" + esc(a.title) + I.chevD + '</h3><div class="body" id="an' + i + '">' + esc(a.text) + "</div></button>";
    }).join("");
    box.addEventListener("click", function (e) {
      var a = e.target.closest(".announce"); if (!a) return;
      var c = a.classList.toggle("collapsed"); a.setAttribute("aria-expanded", !c);
    });
  }

  /* ---------- academic calendar ---------- */
  function initCalendar() {
    var sched = $("#sched"); if (!sched) return;
    var today = midnight(new Date());
    var events = (DATA.calendar || []).map(function (e, i) { return Object.assign({ i: i, s: parseDate(e.start), e: parseDate(e.end) }, e); });
    var state = { y: 2026, m: 8, sel: null, cat: "All", row: null };
    var cats = ["All"]; events.forEach(function (e) { if (cats.indexOf(e.cat) < 0) cats.push(e.cat); });
    var chips = $("#cal-chips");
    chips.innerHTML = cats.map(function (c) { return '<button type="button" class="chip' + (c === "All" ? " on" : "") + '" data-c="' + c + '">' + c + "</button>"; }).join("");

    function visible(e) { return state.cat === "All" || e.cat === state.cat; }
    function eventsOn(d) { var t = d.getTime(); return events.filter(function (e) { return visible(e) && t >= e.s.getTime() && t <= e.e.getTime(); }); }

    function renderList() {
      var list = events.filter(visible);
      sched.innerHTML = list.map(function (e) {
        return '<button type="button" class="sched-row' + (state.row === e.i ? " active" : "") + '" style="--event-color:' + esc(DATA.catColors[e.cat] || "#10763b") + '" data-i="' + e.i + '"><span class="d">' + esc(e.label) +
          '</span><span class="t">' + esc(e.title) + '</span><span class="cat cat-' + e.cat + '">' + e.cat + "</span></button>";
      }).join("") + '<div class="sched-empty' + (list.length ? "" : " show") + '">No schedule for this category.</div>';
    }
    function renderGrid() {
      $("#cal-title").textContent = MONTHS[state.m] + " " + state.y;
      var first = new Date(state.y, state.m, 1), off = first.getDay(), dim = new Date(state.y, state.m + 1, 0).getDate();
      var weeks = Math.ceil((off + dim) / 7), html = "";
      ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].forEach(function (d) { html += '<div class="cal-dow">' + d + "</div>"; });
      for (var c = 0; c < weeks * 7; c++) {
        var d = new Date(state.y, state.m, 1 - off + c), ev = eventsOn(d), cls = "cal-day";
        if (d.getMonth() !== state.m) cls += " out";
        if (ev.length) { cls += " has"; if (ev.some(function (x) { return x.s.getTime() !== x.e.getTime(); })) cls += " range"; }
        if (d.getTime() === today.getTime()) cls += " today";
        if (state.sel === key(d)) cls += " sel";
        var dot = ev.length ? ' style="--dot:' + (DATA.catColors[ev[0].cat] || "#3d8b5e") + '"' : "";
        html += '<button type="button" class="' + cls + '"' + dot + ' data-k="' + key(d) + '" aria-label="' + MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() +
          (ev.length ? ": " + ev.map(function (x) { return x.title; }).join("; ") : "") + '">' + d.getDate() + "</button>";
      }
      $("#cal-grid").innerHTML = html;
    }
    function status(e) {
      var t = today.getTime(), D = 86400000;
      if (t < e.s.getTime()) { var n = Math.round((e.s - today) / D); return "Starts in " + n + " day" + (n === 1 ? "" : "s"); }
      if (t > e.e.getTime()) { var m = Math.round((today - e.e) / D); return "Ended " + m + " day" + (m === 1 ? "" : "s") + " ago"; }
      return "Happening now";
    }
    function renderDetail() {
      var hd = $("#cal-detail-hd"), bd = $("#cal-detail-bd");
      if (!state.sel) { hd.textContent = "Click a date to see details"; bd.textContent = "Select a highlighted day on the calendar."; return; }
      var d = parseDate(state.sel), ev = eventsOn(d);
      hd.textContent = MONTHS[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
      bd.innerHTML = ev.length ? ev.map(function (e) {
        return '<div class="ev"><b>' + esc(e.title) + ' <span class="cat cat-' + e.cat + '">' + e.cat + '</span></b><span class="when">' + esc(e.label) + " · " + status(e) + "</span></div>";
      }).join("") : "No events scheduled on this date.";
    }
    function refresh() { renderList(); renderGrid(); renderDetail(); }

    $("#cal-prev").addEventListener("click", function () { state.m--; if (state.m < 0) { state.m = 11; state.y--; } renderGrid(); });
    $("#cal-next").addEventListener("click", function () { state.m++; if (state.m > 11) { state.m = 0; state.y++; } renderGrid(); });
    $("#cal-today").addEventListener("click", function () { state.y = today.getFullYear(); state.m = today.getMonth(); state.sel = key(today); state.row = null; refresh(); });
    $("#cal-grid").addEventListener("click", function (e) {
      var b = e.target.closest(".cal-day"); if (!b) return;
      state.sel = b.getAttribute("data-k"); state.row = null;
      var d = parseDate(state.sel); if (d.getMonth() !== state.m) { state.m = d.getMonth(); state.y = d.getFullYear(); }
      refresh();
    });
    sched.addEventListener("click", function (e) {
      var r = e.target.closest(".sched-row"); if (!r) return;
      var ev = events[+r.getAttribute("data-i")];
      state.row = ev.i; state.sel = key(ev.s); state.y = ev.s.getFullYear(); state.m = ev.s.getMonth(); refresh();
      if (window.matchMedia("(max-width:1280px)").matches) $("#cal-widget").scrollIntoView({ behavior: "smooth", block: "center" });
    });
    chips.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", chips).forEach(function (x) { x.classList.toggle("on", x === b); });
      state.cat = b.getAttribute("data-c"); state.row = null; refresh();
    });
    $("#cal-legend").innerHTML = Object.keys(DATA.catColors).map(function (k) { return '<span><i style="background:' + DATA.catColors[k] + '"></i>' + k + "</span>"; }).join("");
    refresh();
  }

  /* ---------- contact form ---------- */
  function initContact() {
    var form = $("#contact-form"); if (!form) return;
    var TO = "pseudocode.comsociety@gmail.com";
    var rules = {
      name: function (v) { return v.trim().length >= 2 ? "" : "Please enter your full name."; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address."; },
      phone: function (v) { if (!v.trim()) return ""; var n = v.replace(/\D/g, ""); return n.length >= 7 && n.length <= 15 ? "" : "Enter a valid phone number."; },
      program: function (v) { return v ? "" : "Please choose a program."; },
      message: function (v) { return v.trim().length >= 10 ? "" : "Message should be at least 10 characters."; }
    };
    function check(name) {
      var f = form.elements[name], wrap = f.closest(".field"), msg = rules[name](f.value);
      wrap.classList.toggle("invalid", !!msg); $(".err", wrap).textContent = msg; f.setAttribute("aria-invalid", !!msg);
      return !msg;
    }
    Object.keys(rules).forEach(function (n) {
      var f = form.elements[n];
      f.addEventListener("blur", function () { check(n); });
      f.addEventListener("input", function () { if (f.closest(".field").classList.contains("invalid")) check(n); });
    });
    form.elements.phone.addEventListener("input", function (e) { e.target.value = e.target.value.replace(/[^\d+\-\s()]/g, ""); });
    var cnt = $("#msg-count");
    form.elements.message.addEventListener("input", function (e) { cnt.textContent = e.target.value.length + " / 500"; });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = Object.keys(rules).map(check).every(Boolean);
      if (!ok) { var bad = $(".field.invalid input, .field.invalid select, .field.invalid textarea", form); if (bad) bad.focus(); toast("Please fix the highlighted fields."); return; }
      var f = form.elements, btn = $(".submit-btn", form);
      var subject = "CCS Inquiry – " + f.program.value + " (" + f.name.value.trim() + ")";
      var body = "Full name: " + f.name.value.trim() + "\nEmail: " + f.email.value.trim() + "\nPhone: " + (f.phone.value.trim() || "—") +
        "\nProgram of interest: " + f.program.value + "\n\nMessage:\n" + f.message.value.trim();
      var href = "mailto:" + TO + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      $("#mail-fallback").setAttribute("href", href);
      form.style.display = "none";
      $("#form-success").classList.add("show");
      window.location.href = href;
    });
    $("#write-another").addEventListener("click", function () {
      form.reset(); cnt.textContent = "0 / 500";
      $$(".field", form).forEach(function (w) { w.classList.remove("invalid"); $(".err", w).textContent = ""; });
      $("#form-success").classList.remove("show"); form.style.display = ""; form.elements.name.focus();
    });
  }

  /* ---------- resources ---------- */
  function initResources() {
    var box = $("#res-groups"); if (!box) return;
    var state = { g: "All", q: "" };
    var chipBox = $("#res-chips");
    var groups = DATA.resources || [];
    chipBox.innerHTML = ["All"].concat(groups.map(function (g) { return g.group; })).map(function (g) {
      return '<button type="button" class="chip' + (g === "All" ? " on" : "") + '" data-g="' + esc(g) + '">' + esc(g) + "</button>";
    }).join("");
    function render() {
      var total = 0;
      var html = groups.map(function (g, gi) {
        if (state.g !== "All" && state.g !== g.group) return "";
        var items = g.items.map(function (it, ii) { return { it: it, ii: ii }; }).filter(function (o) {
          return (o.it.name + " " + (o.it.desc || "")).toLowerCase().indexOf(state.q) > -1;
        });
        if (!items.length) return "";
        total += items.length;
        var icon = g.group === "Online Libraries" ? I.book :
          g.group === "Learning & Coding" ? I.monitor : I.doc;
        return '<section class="res-group"><h2><span class="res-icon" aria-hidden="true">' + icon + '</span>' + esc(g.group) + '</h2><ul class="res-list">' +
          items.map(function (o) {
            return '<li><a class="res-item" href="' + (o.it.url ? esc(o.it.url) : "#") + '" target="_blank" rel="noopener" data-g="' + gi + '" data-i="' + o.ii + '">' +
              '<span class="l"><span class="badge-link">LINK</span><span><span class="nm">' + esc(o.it.name) + '</span><span class="desc">' + esc(o.it.desc || "") + "</span></span></span>" +
              '<span class="actions"><button type="button" class="copy-btn" data-copy aria-label="Copy link to ' + esc(o.it.name) + '">Copy</button><span class="arrow-dl" aria-hidden="true">↓</span></span></a></li>';
          }).join("") + "</ul></section>";
      }).join("");
      box.innerHTML = html;
      $("#res-empty").classList.toggle("show", total === 0);
    }
    chipBox.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", chipBox).forEach(function (x) { x.classList.toggle("on", x === b); });
      state.g = b.getAttribute("data-g"); render();
    });
    $("#res-q").addEventListener("input", function (e) { state.q = e.target.value.trim().toLowerCase(); render(); });
    box.addEventListener("click", function (e) {
      var a = e.target.closest(".res-item"); if (!a) return;
      var it = groups[+a.getAttribute("data-g")].items[+a.getAttribute("data-i")];
      var copy = e.target.closest("[data-copy]");
      if (copy) {
        e.preventDefault(); e.stopPropagation();
        if (!it.url) { toast("No link set yet for this resource."); return; }
        (navigator.clipboard ? navigator.clipboard.writeText(it.url) : Promise.reject()).then(function () { toast("Link copied"); }, function () { toast(it.url); });
        return;
      }
      if (!it.url) { e.preventDefault(); toast("This link hasn't been added yet – set it in the CCS_DATA block at the top of script.js"); }
    });
    render();
  }

  /* ---------- faculty ---------- */
  function initFaculty() {
    var box = $("#faculty-grid"); if (!box) return;
    function initials(n) { return n.replace(/^(Mr|Ms|Mrs|Dr|Prof)\.?\s+/i, "").split(/\s+/).filter(function (w) { return !/^[A-Z]\.$/.test(w); }).slice(0, 2).map(function (w) { return w[0]; }).join(""); }
    box.innerHTML = (DATA.faculty || []).map(function (p, i) {
      return '<button type="button" class="faculty-card reveal" data-i="' + i + '" aria-label="' + esc(p.name) + ", " + esc(p.role) + '">' +
        '<div class="faculty-photo"><span class="initials">' + esc(initials(p.name)) + '</span><img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
        '<div class="faculty-info"><h3' + (p.name.length > 24 ? ' class="long"' : "") + ">" + esc(p.name) + "</h3><span>" + esc(p.role) + "</span></div></button>";
    }).join("");
    box.addEventListener("click", function (e) {
      var c = e.target.closest(".faculty-card"); if (!c) return;
      var p = DATA.faculty[+c.getAttribute("data-i")];
      openModal('<div class="m-img faculty-full-photo"><img src="' + esc(p.photo) + '" alt="' + esc(p.name) + '"></div>' +
        '<div class="m-body"><h3>' + esc(p.name) + '</h3><p style="margin:0">' + esc(p.role) + " · College of Computer Studies</p></div>", true);
    });
  }

  /* ---------- single-page router (hash based) ---------- */
  var ROUTES = ["home", "about", "programs", "faculty", "news", "resources", "contact"];
  var ANCHORS = { bscs: "programs", bsit: "programs" };   /* #bscs / #bsit open Programs and scroll to that program */
  var TITLES = {
    home: "DLSJBC – College of Computer Studies", about: "About CCS | DLSJBC – College of Computer Studies",
    programs: "Programs | DLSJBC – College of Computer Studies", faculty: "Faculty & Staff | DLSJBC – College of Computer Studies",
    news: "News & Events | DLSJBC – College of Computer Studies", resources: "Resources | DLSJBC – College of Computer Studies",
    contact: "Contact Us | DLSJBC – College of Computer Studies"
  };
  function route() {
    var h = decodeURIComponent((location.hash || "").replace(/^#\/?/, "")).toLowerCase();
    var anchor = ANCHORS[h] ? h : null;
    var page = anchor ? ANCHORS[h] : (ROUTES.indexOf(h) > -1 ? h : "home");
    PAGE = page;
    $$(".page").forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-page") === page); });
    var cur = $("#page-" + page);
    document.body.setAttribute("data-page", page);
    document.body.classList.toggle("page-grey", cur.classList.contains("page-grey-bg"));
    document.title = TITLES[page];
    $$(".nav-links a").forEach(function (a) {
      var on = a.getAttribute("href") === "#" + page;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    var t = anchor ? document.getElementById(anchor) : null;
    if (t) {
      t.scrollIntoView();
      if (t.animate) t.animate([{ transform: "scale(1.02)" }, { transform: "scale(1)" }], { duration: 600, easing: "ease-out" });
    } else window.scrollTo(0, 0);
  }

  /* ---------- boot ---------- */
  function boot() {
    injectChrome();
    initHomeNews(); initNewsPage(); initAnnouncements(); initCalendar();
    initContact(); initResources(); initFaculty();
    initScrollFx();
    window.addEventListener("hashchange", route);
    route();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
