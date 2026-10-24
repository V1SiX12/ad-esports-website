const TEAM_LINKS = {
  discord: "https://discord.gg/BcNgV343R",
  tiktok: "https://www.tiktok.com/@ad__esports"
};

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Menü schließen" : "Menü öffnen"
      );
      menuButton.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Menü öffnen");
        menuButton.textContent = "☰";
      });
    });
  }

  const discord = document.querySelector("#discord-link");
  const tiktok = document.querySelector("#tiktok-link");

  if (discord) discord.href = TEAM_LINKS.discord;
  if (tiktok) tiktok.href = TEAM_LINKS.tiktok;

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav a[href^='#']");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`
              );
            });
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
