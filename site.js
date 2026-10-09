const pageName = document.body.dataset.page;
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

document.querySelectorAll(`[data-nav="${pageName}"]`).forEach((link) => {
  link.setAttribute("aria-current", "page");
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  navigation?.classList.toggle("is-open", !isExpanded);
});

document.querySelector("[data-inquiry-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const subject = encodeURIComponent(`Website inquiry: ${formData.get("topic")}`);
  const body = encodeURIComponent(
    `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nTopic: ${formData.get("topic")}\n\n${formData.get("message")}`,
  );
  document.querySelector("[data-form-status]").textContent = "Your email app will open with your message ready to send.";
  window.location.href = `mailto:n03007418781@gmail.com?subject=${subject}&body=${body}`;
});