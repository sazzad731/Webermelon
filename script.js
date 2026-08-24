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



// customer experience section
  const handleCustomerState = () => {
    const stateValue = document.querySelector(".percentage");
    const progress = document.querySelector(".progress-circle");
    let counter = null;

    function startCounting(element) {
      const target = parseFloat(element.getAttribute("data-stat-value"));
      let count = 0;

      const duration = 500;
      const stepTime = 20;
      const increment = target / (duration / stepTime);

      clearInterval(counter);

      progress.style.setProperty("--progress", `${target}%`);

      counter = setInterval(() => {
        count += increment;

        if (count >= target) {
          element.textContent = `${target}%`;
          clearInterval(counter);
        } else {
          const currentProgress = Number.isInteger(target)
            ? Math.floor(count)
            : count.toFixed(1);
          element.textContent = `${currentProgress}%`;
        }
      }, stepTime);
    }

    function resetCounting(element) {
      clearInterval(counter);
      element.textContent = "0%";

      progress.style.setProperty("--progress", "0%");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting(entry.target);
          } else {
            resetCounting(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (stateValue) observer.observe(stateValue);
  };
  handleCustomerState();
});




// templates section
const templateSwiper = new Swiper(".template-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 64,
  freeMode: true,

  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 64,
    },
    1030: {
      slidesPerView: 2.5,
    },
    1920: {
      slidesPerView: 2.5,
    },
  },
});





// Completed Project section
const fruitData = [
  {
    color: "#443747", // Grape Color
    name: "Completed Project",
    paragraph:
      "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.",
    circleRotate: "-8deg",
  },
  {
    color: "#588C43", // Avocado Color
    name: "Avocado",
    paragraph:
      "Avocado is a unique fruit known for its creamy texture and rich, mild flavor. It is packed with healthy monounsaturated fats, which are great for heart health. Unlike most fruits that are high in carbohydrates, avocado is low in sugar and high in fiber. It is loaded with essential vitamins and minerals, including Potassium, Vitamin E, and Vitamin K.",
    circleRotate: "5deg",
  },
  {
    color: "#504959", // Blackberry Color
    name: "Blackberry",
    paragraph:
      "Blackberry is a delicious dark-colored fruit known for its sweet, tangy flavor and juicy texture. It is rich in powerful antioxidants, particularly anthocyanins, which give the berry its deep purple hue. The fruit is packed with essential nutrients, including Vitamin C, Vitamin K, and manganese. Blackberries contain a high amount of dietary fiber, which aids digestion and supports gut health. They are commonly enjoyed fresh, or used to make jams, desserts, juices, and smoothies.",
    circleRotate: "17deg",
  },
  {
    color: "#9B3327", // Strawberry Color
    name: "Strawberry",
    paragraph:
      "Strawberry is a bright red, heart-shaped fruit known for its sweet flavor and juicy texture. It is exceptional for boosting immunity because it is packed with Vitamin C and antioxidants. Uniquely, strawberries are one of the only fruits that carry their seeds on the outside. They are low in calories and high in dietary fiber, making them a great snack for health-conscious individuals. Strawberries are widely used across the world in desserts, smoothies, jams, and ice creams.",
    circleRotate: "32deg",
  },
  {
    color: "#C74928", // Orange Color
    name: "Orange",
    paragraph:
      "Orange is a popular citrus fruit known for its vibrant orange color and refreshing, sweet-tangy taste. It is world-famous as an excellent source of Vitamin C, which helps strengthen the immune system and protect cells. The fruit has high water content and a good amount of dietary fiber, keeping you hydrated and promoting smooth digestion. Regular consumption of oranges supports healthy skin and aids in lower blood pressure and cholesterol levels.",
    circleRotate: "60deg",
  },
  {
    color: "#C71E3E", // Pomegranate Color
    name: "Pomegranate",
    paragraph:
      "Pomegranate is a nutrient-rich fruit known for its tough, thick red skin and hundreds of juicy, edible seed pods called arils inside. It has a delightful sweet and tart flavor, making it a popular choice for snacking, salads, and fresh juices. The fruit is loaded with powerful antioxidants, particularly punicalagins, which help reduce inflammation and boost heart health.",
    circleRotate: "80deg",
  },
];
// Swiper Initialize
const direction = window.screen.width <= 425 ? "horizontal" : "vertical";
const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-next-btn",
    prevEl: ".swiper-prev-btn",
  },
  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;
      const data = fruitData[activeIndex];

      if (data) {
        document.getElementById("projectSection").style.backgroundColor =
          data.color;
        document
          .querySelector(".completed-project-circle-2")
          .style.setProperty("--pseudo-deg", `${data.circleRotate}`);
        const titleEl = document.querySelector(".completed-project-h2");
        const paraEl = document.querySelector(".completed-project-h2-p");
        titleEl.style.opacity = 0;
        paraEl.style.opacity = 0;

        setTimeout(() => {
          titleEl.innerText = data.name;
          paraEl.innerText = data.paragraph;

          titleEl.style.opacity = 1;
          paraEl.style.opacity = 1;
        }, 800);
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


