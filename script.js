/* ============================================================
   Chakka Chinni Krishna · Pokédex Portfolio Interactions
   ============================================================ */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Views
  const homeView = document.getElementById("home");
  const infoView = document.getElementById("info");
  const pokeballBtn = document.getElementById("pokeball");
  const hintBtn = document.getElementById("hintBtn");
  const backBtn = document.getElementById("backBtn");
  const flash = document.getElementById("flash");

  // Certificate Modal elements
  const certModal = document.getElementById("certModal");
  const certModalTitle = document.getElementById("certModalTitle");
  const certModalIssuer = document.getElementById("certModalIssuer");
  const certModalImg = document.getElementById("certModalImg");
  const certModalDl = document.getElementById("certModalDl");
  const certModalClose = document.getElementById("certModalClose");

  // ------------------------------------------------------------
  // 1. Navigation & View Switching (Meadow <-> Details)
  // ------------------------------------------------------------
  function showDetails() {
    if (homeView) homeView.classList.remove("is-active");
    if (infoView) {
      infoView.classList.add("is-active");
      infoView.scrollIntoView({ behavior: "smooth" });
    }
    window.location.hash = "details";
  }

  function showHome() {
    if (infoView) infoView.classList.remove("is-active");
    if (homeView) {
      homeView.classList.add("is-active");
      window.scrollTo(0, 0);
    }
    history.replaceState(null, "", window.location.pathname);
  }

  // Poké Ball Catch & Burst Sequence
  let isCatching = false;
  function triggerPokeBallCatch() {
    if (isCatching) return;
    isCatching = true;

    if (reduceMotion) {
      showDetails();
      isCatching = false;
      return;
    }

    if (pokeballBtn) {
      pokeballBtn.classList.add("shake");
    }

    setTimeout(() => {
      if (pokeballBtn) {
        pokeballBtn.classList.remove("shake");
        pokeballBtn.classList.add("spin");
      }

      // Flash & view transition
      setTimeout(() => {
        if (flash) flash.classList.add("go");
        setTimeout(() => {
          showDetails();
          if (pokeballBtn) pokeballBtn.classList.remove("spin");
          setTimeout(() => {
            if (flash) flash.classList.remove("go");
            isCatching = false;
          }, 350);
        }, 300);
      }, 500);
    }, 600);
  }

  if (pokeballBtn) pokeballBtn.addEventListener("click", triggerPokeBallCatch);
  if (hintBtn) hintBtn.addEventListener("click", triggerPokeBallCatch);
  if (backBtn) backBtn.addEventListener("click", showHome);

  // Check URL hash on load
  if (window.location.hash === "#details" || window.location.pathname.endsWith("details.html")) {
    showDetails();
  } else if (homeView) {
    showHome();
  }

  // ------------------------------------------------------------
  // 2. Ambient Pollen Motes in Home Meadow
  // ------------------------------------------------------------
  (function initPollenMotes() {
    if (!homeView || reduceMotion) return;
    const count = 18;
    for (let i = 0; i < count; i++) {
      const mote = document.createElement("div");
      mote.className = "mote";
      mote.style.left = Math.random() * 100 + "%";
      mote.style.top = (30 + Math.random() * 60) + "%";
      mote.style.setProperty("--dx", (Math.random() * 80 - 40) + "px");
      mote.style.setProperty("--dy", (-80 - Math.random() * 120) + "px");
      mote.style.setProperty("--dur", (8 + Math.random() * 8) + "s");
      mote.style.setProperty("--delay", (-Math.random() * 10) + "s");
      const size = 3 + Math.random() * 5;
      mote.style.width = size + "px";
      mote.style.height = size + "px";
      homeView.appendChild(mote);
    }
  })();

  // ------------------------------------------------------------
  // 2b. About Me "Read More" Toggle
  // ------------------------------------------------------------
  (function initAboutToggle() {
    const aboutToggleBtn = document.getElementById("aboutToggleBtn");
    const aboutMore = document.getElementById("aboutMore");
    if (!aboutToggleBtn || !aboutMore) return;

    aboutToggleBtn.addEventListener("click", () => {
      const isExpanded = aboutMore.classList.toggle("is-expanded");
      aboutToggleBtn.classList.toggle("is-expanded", isExpanded);
      aboutToggleBtn.setAttribute("aria-expanded", isExpanded);
      const textSpan = aboutToggleBtn.querySelector(".about-toggle-text");
      if (textSpan) {
        textSpan.textContent = isExpanded ? "Read Less" : "Read More";
      }
    });
  })();

  // ------------------------------------------------------------
  // 3. Experience / Training Tabs
  // ------------------------------------------------------------
  (function initXpTabs() {
    const xpWrap = document.getElementById("xp");
    if (!xpWrap) return;

    xpWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".xp-co");
      if (!btn) return;
      const targetId = btn.dataset.co;

      xpWrap.querySelectorAll(".xp-co").forEach((tab) => tab.classList.toggle("is-active", tab === btn));
      xpWrap.querySelectorAll(".xp-detail").forEach((detail) => detail.classList.toggle("is-active", detail.dataset.co === targetId));
    });
  })();

  // ------------------------------------------------------------
  // 4. Interactive Certificate Modal
  // ------------------------------------------------------------
  const certData = {
    python: {
      title: "Python: Basics to Advance",
      issuer: "Edtechniketan · Completed July 2026",
      src: "certificates/web/python.png",
      full: "certificates/rendered/python.png",
      pdf: "certificates/python.pdf"
    },
    dbms: {
      title: "Database Management System",
      issuer: "Infosys Springboard · Completed June 2026",
      src: "certificates/web/dbms.png",
      full: "certificates/rendered/dbms part1.png",
      pdf: "certificates/dbms part1.pdf"
    },
    linux: {
      title: "Linux Commands and Shell Scripting",
      issuer: "Skillera · Completed March 2025",
      src: "certificates/web/linux.png",
      full: "certificates/linux.png",
      pdf: "certificates/linux.png"
    },
    c_programming: {
      title: "Introduction to C Programming",
      issuer: "Udemy · Completed January 2025",
      src: "certificates/web/c_programming.png",
      full: "certificates/C programming.png",
      pdf: "certificates/C programming.png"
    },
    cpp: {
      title: "C++ Programming Mastery",
      issuer: "Programming Academy · Completed 2025",
      src: "certificates/web/cpp.png",
      full: "certificates/rendered/c++.png",
      pdf: "certificates/c++.pdf"
    },
    software_testing: {
      title: "Fundamentals of Software Testing",
      issuer: "Quality Assurance Institute · 2026",
      src: "certificates/web/software_testing.png",
      full: "certificates/Fundamentals of Software Testing.png",
      pdf: "certificates/Fundamentals of Software Testing.png"
    },
    code_a_haunt: {
      title: "Code A Haunt Hackathon",
      issuer: "Competitive Programming & Problem Solving · 2026",
      src: "certificates/web/code_a_haunt.png",
      full: "certificates/rendered/Code A Haunt.png",
      pdf: "certificates/Code A Haunt.pdf"
    },
    cybersmart: {
      title: "CyberSmart Awareness & Security",
      issuer: "Cyber Security Certification · 2025",
      src: "certificates/web/cybersmart.png",
      full: "certificates/rendered/cybersmart.png",
      pdf: "certificates/cybersmart.pdf"
    },
    chinni_krishna: {
      title: "Certificate of Achievement",
      issuer: "Issued to Chakka Chinni Krishna · 2026",
      src: "certificates/web/chinni_krishna.png",
      full: "certificates/rendered/Chakka Chinni Krishna.png",
      pdf: "certificates/Chakka Chinni Krishna.pdf"
    }
  };

  function openCertModal(key) {
    const cert = certData[key];
    if (!cert || !certModal) return;

    certModalTitle.textContent = cert.title;
    certModalIssuer.textContent = cert.issuer;
    certModalImg.src = cert.full || cert.src;
    certModalImg.alt = cert.title;
    certModalDl.href = cert.pdf || cert.full;
    certModalDl.setAttribute("download", cert.title + ".pdf");

    certModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".cert-card").forEach((card) => {
    card.addEventListener("click", () => {
      const certKey = card.dataset.cert;
      if (certKey) openCertModal(certKey);
    });
  });

  if (certModalClose) certModalClose.addEventListener("click", closeCertModal);
  if (certModal) {
    certModal.addEventListener("click", (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && certModal && certModal.classList.contains("is-open")) {
      closeCertModal();
    }
  });

  // ------------------------------------------------------------
  // 5. "Drop a Pokémon" Interactive Crowd Footer
  // ------------------------------------------------------------
  (function initPokeFooter() {
    const stage = document.getElementById("pfootStage");
    const btn = document.getElementById("pfootBtn");
    const count = document.getElementById("pfootCount");
    if (!stage) return;

    const track = document.createElement("div");
    track.className = "pfoot-track";
    stage.appendChild(track);

    function fitCrowd() {
      const avail = stage.clientWidth;
      const w = track.scrollWidth;
      const scale = (w > avail && avail > 0) ? (avail / w) : 1;
      track.style.transform = `scale(${scale.toFixed(3)})`;
      track.style.setProperty("--inv", (1 / scale).toFixed(3));
    }

    window.addEventListener("resize", fitCrowd);

    const ART_URL = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const DROP_KEY = "pokedrop_chinni:done";
    let dropped = false;
    try {
      dropped = localStorage.getItem(DROP_KEY) === "1";
    } catch (e) {}

    let namesCache = null;
    function fetchPokemonNames() {
      if (!namesCache) {
        namesCache = fetch("https://pokeapi.co/api/v2/pokemon?limit=1025", { cache: "force-cache" })
          .then((r) => r.json())
          .then((d) => d.results.map((x) => x.name))
          .catch(() => null);
      }
      return namesCache;
    }

    const formatName = (n) => n ? n.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "Pokémon";

    let crowdTotal = 0;
    function updateCounter() {
      if (!count) return;
      const n = crowdTotal;
      count.textContent = n === 0 ? "Be the first to drop a Pokémon" : `${n.toLocaleString()} trainers stopped by`;
    }

    function addPokemonToStage(id, animated = true) {
      const wrap = document.createElement("div");
      wrap.className = "pfoot-mon";
      const size = 68 + Math.floor(Math.random() * 28);
      wrap.style.width = wrap.style.height = size + "px";
      wrap.style.setProperty("--rot", (Math.random() * 12 - 6).toFixed(1) + "deg");
      if (!animated) wrap.style.animation = "none";

      const img = new Image();
      img.className = "pfoot-sprite";
      img.alt = "Pokémon";
      img.onerror = () => {
        wrap.remove();
        crowdTotal = Math.max(0, crowdTotal - 1);
        updateCounter();
        fitCrowd();
      };
      img.src = ART_URL(id);

      const tag = document.createElement("span");
      tag.className = "pfoot-name";
      tag.textContent = "…";

      wrap.appendChild(img);
      wrap.appendChild(tag);
      track.appendChild(wrap);

      fetchPokemonNames().then((names) => {
        const name = formatName(names && names[id - 1]);
        tag.textContent = name;
        img.alt = name;
      });

      crowdTotal++;
      updateCounter();
      fitCrowd();
    }

    // Populate initial friendly Pokémon crowd (Pikachu, Bulbasaur, Charmander, Squirtle, Eevee, Gengar, Lucario)
    const starterIds = [25, 1, 4, 7, 133, 94, 448, 149, 150];
    starterIds.forEach((id) => addPokemonToStage(id, false));

    function lockButton(text) {
      if (!btn) return;
      btn.disabled = true;
      btn.textContent = text;
      try {
        localStorage.setItem(DROP_KEY, "1");
      } catch (e) {}
    }

    if (dropped) {
      lockButton("✓ You dropped a Pokémon");
    }

    if (btn) {
      btn.addEventListener("click", () => {
        if (dropped) return;
        dropped = true;
        // Pick a random exciting Pokémon (Generations 1 through 9)
        const randomId = 1 + Math.floor(Math.random() * 1025);
        addPokemonToStage(randomId, true);
        lockButton("✓ You dropped one!");
      });
    }
  })();

})();
