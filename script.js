const manubtn = document.querySelector("#manu-button")
const closebtn = document.querySelector("#close-button")
const sidebar = document.querySelector(".sidebar")
const togglebtn = document.querySelector(".pc-sizetoggle")
const innerins = document.querySelector(".iner-ins")

if (manubtn && closebtn && sidebar) {
    manubtn.addEventListener("click", () => { sidebar.style.display = "flex"; });
    closebtn.addEventListener("click", () => { sidebar.style.display = "none"; });
}

if (togglebtn && innerins) {
    togglebtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        togglebtn.classList.toggle("clorechange");
        innerins.classList.toggle("sun");
    });
}

const partnersWheel = document.querySelector(".partners-wheel");
const previousPartnerButton = document.querySelector(".wheel-prev");
const nextPartnerButton = document.querySelector(".wheel-next");

if (partnersWheel) {
    const partners = [
        { image: "assests/3_3-1.webp", name: "YouTube" },
        { image: "assests/download (1).png", name: "Partner crest" },
        { image: "assests/download (2).jpg", name: "Ministry of Education" },
        { image: "assests/download (2).png", name: "Education partner" },
        { image: "assests/download (3).jpg", name: "MTN" },
        { image: "assests/download.png", name: "Health partner" },
        { image: "assests/images (2).jpg", name: "Chasing the Dream and Techway Thursday" }
    ];

    const createPartnerCards = () => {
        const fragment = document.createDocumentFragment();

        partners.forEach((partner) => {
            const card = document.createElement("div");
            card.className = "partner-card";

            const image = document.createElement("img");
            image.src = partner.image;
            image.alt = partner.name;
            image.loading = "lazy";

            card.appendChild(image);
            fragment.appendChild(card);
        });

        return fragment;
    };

    partnersWheel.appendChild(createPartnerCards());

    partnersWheel.appendChild(createPartnerCards());

    const scrollSpeed = 0.5;
    partnersWheel.style.scrollBehavior = "auto";

    const keepLooping = () => {
        const firstSetWidth = partnersWheel.scrollWidth / 2;

        if (partnersWheel.scrollLeft >= firstSetWidth) {
            partnersWheel.scrollLeft -= firstSetWidth;
        }
    };

    const autoScrollPartners = () => {
        partnersWheel.scrollLeft += scrollSpeed;
        keepLooping();

        requestAnimationFrame(autoScrollPartners);
    };

    const movePartners = (direction) => {
        const card = partnersWheel.querySelector(".partner-card");
        const cardWidth = card ? card.getBoundingClientRect().width + 18 : 208;
        const firstSetWidth = partnersWheel.scrollWidth / 2;

        if (direction < 0 && partnersWheel.scrollLeft <= 0) {
            partnersWheel.scrollLeft = firstSetWidth;
        }

        partnersWheel.scrollLeft += direction * cardWidth;
        keepLooping();
    };

    previousPartnerButton.addEventListener("click", () => movePartners(-1));
    nextPartnerButton.addEventListener("click", () => movePartners(1));

    partnersWheel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") movePartners(-1);
        if (event.key === "ArrowRight") movePartners(1);
    });

    requestAnimationFrame(autoScrollPartners);
}

