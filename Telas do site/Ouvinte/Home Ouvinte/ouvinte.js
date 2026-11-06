const menuToggle = document.querySelector("#menuToggle");

        const layout = document.querySelector(".layout-container");


        menuToggle.addEventListener("click", () => {

            const isCollapsed = layout.classList.toggle("menu-collapsed");

            menuToggle.setAttribute(
                "aria-expanded",
                String(!isCollapsed)
            );

            menuToggle.setAttribute(
                "aria-label",
                isCollapsed
                    ? "Expandir menu"
                    : "Recolher menu"
            );

        });

        const pills = document.querySelectorAll(".pill");

        const todayEco = document.querySelector("#todayEco");

        const ecoLabel = document.querySelector("#ecoLabel");

        const ecoTitle = document.querySelector("#ecoTitle");

        const ecoDescription = document.querySelector("#ecoDescription");

        const ecoButtonText = document.querySelector("#ecoButtonText");


        const ecoData = {
            
            normal: {
                label: "ECO DO DIA",
                title: "As músicas perfeitas<br>para qualquer situação.",
                description: "Uma seleção baseada no seu momento, no seu histórico e no que você costuma ouvir.",
                button: "Ouvir agora"
            },


            foco: {
                label: "ECO PARA FOCO",
                title: "Concentre-se.<br>Deixe a música fazer o resto.",
                description: "Uma seleção com sons mais discretos para acompanhar momentos de estudo, trabalho e concentração.",
                button: "Começar foco"
            },


            relax: {
                label: "ECO PARA RELAXAR",
                title:
                    "Respire fundo.<br>Desacelere no seu ritmo.",
                description:
                    "Faixas suaves para acompanhar momentos tranquilos, sem pressa e sem distrações.",
                button:
                    "Relaxar agora"
            },


            animado: {
                label: "ECO ANIMADO",
                title:
                    "Mais energia.<br>Mais música. Mais você.",
                description:
                    "Uma seleção cheia de ritmo para acompanhar seu momento e manter a energia lá em cima.",
                button:
                    "Aumentar o som"
            },

            surpresa: {
                label: "ECO SURPRESA",
                title:
                    "Deixe o ECO<br>escolher por você.",
                description:
                    "Uma seleção inesperada baseada nos seus gostos e em sons que talvez você ainda não conheça.",
                button:
                    "Surpreenda-me"
            }

        };


        function changeEco(mood) {

            const data =
                ecoData[mood];

            if (!data) {
                return;
            }

            todayEco.classList.add("eco-changing");

            setTimeout(() => {

                todayEco.classList.remove(
                    "mood-normal",
                    "mood-foco",
                    "mood-relax",
                    "mood-animado",
                    "mood-surpresa"
                );

                todayEco.classList.add(
                    `mood-${mood}`
                );

                ecoLabel.innerHTML = data.label;
                ecoTitle.innerHTML = data.title;
                ecoDescription.innerHTML = data.description;
                ecoButtonText.innerHTML = data.button;
                todayEco.classList.remove(
                    "eco-changing"
                );
            }, 180);

        }

        pills.forEach((pill) => {

            pill.addEventListener("click", () => {

                const mood =
                    pill.dataset.mood;

                pills.forEach((item) => {
                    item.classList.remove("active");
                });

                pill.classList.add("active");

                changeEco(mood);

            });

        });
