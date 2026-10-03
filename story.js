(() => {
  const cast = {
    kingpin: {
      name: "KINGPIN",
      role: "Rage Bait's heavyweight.",
      bio: "Carries more than most people ever will: grief, pressure, chaos and the weight of everybody around him. Loyal, stubborn, scarred and still standing.",
      tags: ["BUILT TO CARRY IT", "LOYAL", "STILL HERE"]
    },
    minorz: {
      name: "MINORZ",
      role: "The original Rage Bait outlaw.",
      bio: "Robert “Minorz” Minors. Born in VR, escaped into the real world and turned chaos into a brand. Part troll, part outlaw, all attitude.",
      tags: ["WEAR THE TROLL", "VIRTUAL ROOTS", "PROBLEMATIC BY DESIGN"]
    },
    littlemac: {
      name: "LITTLE MAC",
      role: "Rage Bait's resident troll queen.",
      bio: "Sweet on the surface, chaos underneath. Little Mac flirts, provokes, stirs the pot and turns comment sections into fuel.",
      tags: ["PRETTY PROBLEMATIC", "ALL TROLL", "STAY TOXIC"]
    },
    wizz: {
      name: "WIZZ",
      role: "Cute chaos. Too many thoughts.",
      bio: "Autistic, stressy, anxious, hyperfocused and permanently online. Wizz overthinks everything, then somehow still finds enough energy to troll everybody.",
      tags: ["OVERTHINKER", "TROLL ENERGY", "CHAOS CREATIVE"]
    },
    ragz: {
      name: "RAGZ",
      role: "Rage Bait's resident degenerate.",
      bio: "A walking contradiction of chaos, sarcasm and survival. Stitched together from bad decisions and worse ideas. Ragz doesn't follow rules. He mocks them.",
      tags: ["BORN BROKEN", "PATCH NOTES FAILED", "STAY TOXIC"]
    },
    scab: {
      name: "SCAB",
      role: "Still not impressed.",
      bio: "Social irritant. Sore point. Professional eye-roll with boots. Scab has had better arguments with walls and would like you to know it.",
      tags: ["DON'T PICK THE SCAB", "OFFENDED? GOOD.", "PROBLEMATIC BY DESIGN"]
    }
  };

  const chapters = {
    "01": ["ISSUE 01", "THE TROLLS ASSEMBLE", "The origin chapter. A scattered crew of virtual-world misfits find each other and discover that bad ideas get significantly worse when shared."],
    "02": ["ISSUE 02", "THE DRAMA ENGINE", "The machine starts turning. Feeds, egos and chaos collide, and somebody discovers that attention is an extremely flammable fuel."],
    "03": ["ISSUE 03", "PUNCHLINE PROTOCOL", "The crew discovers the ultimate anti-ego weapon: jokes, roasting and relentless troll warfare. The comic reader is ready for the finished panels."],
    "04": ["ISSUE 04", "EGO OVERLOAD", "Every meter has a red line. Somebody finally finds theirs."]
  };

  const profile = {
    name: document.getElementById("castName"),
    role: document.getElementById("castRole"),
    bio: document.getElementById("castBio"),
    tags: document.getElementById("castTags")
  };

  document.querySelectorAll("[data-cast]").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.cast;
      const item = cast[key];
      if (!item) return;
      document.querySelectorAll("[data-cast]").forEach(el => el.classList.remove("active"));
      button.classList.add("active");
      profile.name.textContent = item.name;
      profile.role.textContent = item.role;
      profile.bio.textContent = item.bio;
      profile.tags.innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join("");
    });
  });

  document.getElementById("resetCast")?.addEventListener("click", () => {
    document.querySelector('[data-cast="kingpin"]')?.click();
  });

  const dialog = document.getElementById("chapterDialog");
  const dialogIssue = document.getElementById("dialogIssue");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogCopy = document.getElementById("dialogCopy");

  function openChapter(number){
    const chapter = chapters[number];
    if (!chapter || !dialog) return;
    dialogIssue.textContent = chapter[0];
    dialogTitle.textContent = chapter[1];
    dialogCopy.textContent = chapter[2];
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  document.querySelectorAll("[data-chapter]").forEach(button => {
    button.addEventListener("click", () => openChapter(button.dataset.chapter));
  });

  document.querySelectorAll("[data-open-chapter]").forEach(button => {
    button.addEventListener("click", () => openChapter(button.dataset.openChapter));
  });

  document.getElementById("chapterClose")?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  document.getElementById("showAllChapters")?.addEventListener("click", () => {
    document.getElementById("chapters")?.scrollIntoView({behavior:"smooth", block:"start"});
  });

  const toggle = document.getElementById("universeMenuToggle");
  const nav = document.getElementById("universeNav");
  toggle?.addEventListener("click", () => {
    const open = nav?.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(Boolean(open)));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded","false");
  }));
})();