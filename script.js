document.addEventListener("DOMContentLoaded", function () {
    const handleNavbar = () => {
        const menuBtn = document.querySelector(".menu-btn");
        const navUl = document.querySelector(".nav-ul");

        menuBtn.addEventListener("click", () => {
            if (navUl.classList.contains("active")) {
                navUl.classList.remove("active")
            } else {
                navUl.classList.add("active");
            }
        })
    }
    handleNavbar();



    const handleImageFollower = () => {
      const projectListItems = document.querySelectorAll(".project-list-item");

      projectListItems.forEach((item) => {
        const projectListHoverImg = item.querySelector(
          ".project-list-hover-img",
        );

        item.addEventListener("mousemove", (e) => {
          const rect = item.getBoundingClientRect();

          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          projectListHoverImg.style.left = `${x}px`;
          projectListHoverImg.style.top = `${y}px`;
        });
      });
    };

    handleImageFollower();
})