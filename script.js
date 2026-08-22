document.addEventListener("DOMContentLoaded", function () {
  const handleNavbar = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav-ul");

    menuBtn.addEventListener("click", () => {
      if (navUl.classList.contains("active")) {
        navUl.classList.remove("active");
      } else {
        navUl.classList.add("active");
      }
    });
  };
  handleNavbar();

  const handleImageFollower = () => {
    const projectListItems = document.querySelectorAll(".project-list-item");

    projectListItems.forEach((item) => {
      const projectListHoverImg = item.querySelector(".project-list-hover-img");

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
});



const fruitData = [
  {
    color: "#443747", // Grape Color
  },
  {
    color: "#588C43", // Avocado Color
  },
  {
    color: "#504959", // Blackberry Color
  },
  {
    color: "#9B3327", // Strawberry Color
  },
  {
    color: "#C74928", // Orange Color
  },
  {
    color: "#C71E3E", // Pomegranate Color
  },
];

// Swiper Initialize
const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-next-btn",
    prevEl: ".swiper-prev-btn",
  },
  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;
      const data = fruitData[activeIndex];


      if (data) {
        document.getElementById("projectSection").style.backgroundColor = data.color;
        // document.getElementById("dynamicText").innerText = data.text;
      }


      const menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((item, index) => {
        item.classList.remove("active-menu");
        if (index === activeIndex) {
          item.classList.add("active-menu");
        }
      });
    },
  },
});


const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    swiper.slideTo(index);
  });
});