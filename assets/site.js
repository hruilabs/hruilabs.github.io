"use strict";

// The page and project details remain readable without JavaScript.
const demoToggle = document.querySelector("#demo-toggle");
const demoErrors = document.querySelectorAll(".demo-error");
const demoInputs = document.querySelectorAll(".demo-form input");
const demoAnnouncement = document.querySelector("#demo-announcement");

if (demoToggle && demoAnnouncement) {
  demoToggle.hidden = false;
  demoToggle.addEventListener("click", () => {
    const showErrors = demoToggle.getAttribute("aria-pressed") !== "true";
    demoToggle.setAttribute("aria-pressed", String(showErrors));
    demoToggle.querySelector(".button-label").textContent = showErrors
      ? "隐藏校验提示"
      : "显示校验提示";
    demoErrors.forEach((error) => {
      error.hidden = !showErrors;
    });
    demoInputs.forEach((input) => {
      if (showErrors) {
        input.setAttribute("aria-invalid", "true");
        input.setAttribute(
          "aria-describedby",
          input.id === "demo-name-before" ? "demo-error-before" : "demo-error-after"
        );
      } else {
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
      }
    });
    demoAnnouncement.textContent = showErrors
      ? "提示已出现：左侧下方字段移动，右侧保持位置。"
      : "提示已隐藏：右侧仍为提示保留位置。";
  });
}

// Navigation state is an enhancement; all links are ordinary anchors.
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
if ("IntersectionObserver" in window && navLinks.length) {
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const visibleSections = new Map();
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.boundingClientRect.top);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });
      const nearestSection = Array.from(visibleSections.entries()).sort(
        (a, b) => Math.abs(a[1]) - Math.abs(b[1])
      )[0];
      navLinks.forEach((link) => {
        if (nearestSection && link.getAttribute("href") === `#${nearestSection[0]}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-15% 0px -60% 0px", threshold: 0 }
  );
  observedSections.forEach((section) => navObserver.observe(section));
}
