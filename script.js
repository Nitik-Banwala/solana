const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("hidden");
    setTimeout(() => menuOverlay.classList.remove("opacity-0"), 10);
});

closeMenu.addEventListener("click", () => {
    menuOverlay.classList.add("opacity-0");
    setTimeout(() => menuOverlay.classList.add("hidden"), 300);
});
const accordionButtons = document.querySelectorAll(".accordion-button")
        accordionButtons.forEach(button => {
            button.addEventListener("click", () => {
                const item = button.closest(".accordion-item");
                const body = button.nextElementSibling;
                const icon = button.querySelector(".arrow-icon");
                const isCurrentlyActive = item.classList.contains("active");

                document.querySelectorAll(".accordion-item").forEach(i => {
                    const bodyToClose = i.querySelector(".accordion-body");
                    const btnToClose = i.querySelector(".accordion-button");
                    const iconToClose = i.querySelector(".arrow-icon");

                    i.classList.remove("active",  );
                    i.classList.add("mb-4");

                    btnToClose.classList.remove("font-semibold", "rounded-b-none", "border-b-0");
                    btnToClose.classList.add("font-semibold");

                    if (bodyToClose) bodyToClose.classList.add("hidden");
                    if (iconToClose) iconToClose.classList.remove("rotate-180");
                });
                if (!isCurrentlyActive) {
                    item.classList.add("active");
                    item.classList.remove("mb-4");
                    item.classList.add( );
                    button.classList.add("font-semibold",   );
                    button.classList.remove("rounded-lg",  "border-b");
                    body.classList.remove("hidden");
                    icon.classList.add("rotate-180");
                }
            });
        });
        const firstItem = document.querySelector(".accordion-item.active");
        if (firstItem) {
            const firstButton = firstItem.querySelector(".accordion-button");
            if (firstButton) {
                firstButton.classList.remove("rounded-lg");
                firstButton.classList.add("rounded-t-lg", "border-b-0");
            }
        }