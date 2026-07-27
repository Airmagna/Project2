document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".main-nav");
  const toggleBtn = document.querySelector(".main-nav__toggle");

  if (!nav || !toggleBtn) return;

  // Только открытие — без toggle, без if/else
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // ← ВАЖНО: не даём клику всплыть
    nav.classList.add("show-menu");
  });

  // Закрытие по клику на крестик (отдельный обработчик)
  // Проверяем: если класс УЖЕ есть — убираем
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("show-menu") && !nav.contains(e.target)) {
      nav.classList.remove("show-menu");
    }
  });

  // Закрытие по клику на ссылку меню
  const links = nav.querySelectorAll(".main-nav__mobile-link");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("show-menu");
    });
  });
});
