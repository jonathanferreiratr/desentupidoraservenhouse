
// Número do WhatsApp do proprietário (SUBSTITUIR PELO NÚMERO REAL)
const NUMERO_DONO = "5561996033287"; // 🔁 Troque pelo número real: DDD + número, ex: 5561987654321

// Navegação entre seções
function showHome() {
    document.getElementById("homeSection").style.display = "block";
    document.getElementById("servicosSection").style.display = "none";
    document.getElementById("sobreSection").style.display = "none";
    document.getElementById("contatoSection").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showServicos() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("servicosSection").style.display = "block";
    document.getElementById("sobreSection").style.display = "none";
    document.getElementById("contatoSection").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSobre() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("servicosSection").style.display = "none";
    document.getElementById("sobreSection").style.display = "block";
    document.getElementById("contatoSection").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showContato() {
    document.getElementById("homeSection").style.display = "none";
    document.getElementById("servicosSection").style.display = "none";
    document.getElementById("sobreSection").style.display = "none";
    document.getElementById("contatoSection").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navList = document.getElementById("navList");

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}

// Fechar menu ao clicar em link
document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => {
        navList?.classList.remove("active");
    });
});

// Scroll Reveal
const revealElements = document.querySelectorAll(
    ".reveal, .service-card, .diferencial, .depoimento",
);
const revealOnScroll = () => {
    revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
};
revealElements.forEach((el) => el.classList.add("reveal"));
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// WhatsApp Form
function buildWhatsAppMessage() {
    const nome = document.getElementById("nome")?.value.trim();
    const telefone = document.getElementById("telefone")?.value.trim();
    const servicoSelect = document.getElementById("servicoSelect");
    const servico =
        servicoSelect?.options[servicoSelect.selectedIndex]?.text || "";
    const problema = document.getElementById("problema")?.value.trim();

    if (!nome) {
        alert("Por favor, digite seu nome.");
        return null;
    }
    if (!telefone) {
        alert("Por favor, digite seu telefone.");
        return null;
    }
    if (!problema) {
        alert("Por favor, descreva seu problema.");
        return null;
    }

    let msg = `🛠️ *SERVEN HOUSE - DESENTUPIDORA EM BRASÍLIA DF*%0A%0A`;
    msg += `*Cliente:* ${nome}%0A`;
    msg += `*Telefone:* ${telefone}%0A`;
    if (servico && servico !== "Selecione o serviço") {
        msg += `*Serviço:* ${servico}%0A`;
    }
    msg += `*Problema:* ${problema}%0A%0A`;
    msg += `📅 Enviado via site servenhousehidroeletrica.com`;

    return encodeURIComponent(msg);
}

const btnEnviar = document.getElementById("btnEnviarWhats");
if (btnEnviar) {
    btnEnviar.addEventListener("click", () => {
        const message = buildWhatsAppMessage();
        if (!message) return;

        if (NUMERO_DONO === "61996033287") {
            if (
                confirm(
                    "⚠️ ATENÇÃO: Configure o número do WhatsApp do proprietário!\n\nClique em OK para testar ou CANCELAR para instruções.",
                )
            ) {
                const whatsappLink = `https://wa.me/${61996033287}UMERO_DONO?text=${message}`;
                window.open(whatsappLink, "_blank");
            } else {
                alert(
                    "Por favor, edite o código e substitua NUMERO_DONO pelo número real.\nExemplo: const NUMERO_DONO = '61996033287';",
                );
            }
        } else {
            const whatsappLink = `https://wa.me/${61996033287}?text=${message}`;
            window.open(whatsappLink, "_blank");
        }

        btnEnviar.innerHTML =
            '<i class="fab fa-whatsapp"></i> Redirecionando...';
        setTimeout(() => {
            btnEnviar.innerHTML =
                '<i class="fab fa-whatsapp"></i> Enviar para o WhatsApp';
        }, 2500);
    });
}

// Máscara de telefone
const telefoneInput = document.getElementById("telefone");
if (telefoneInput) {
    telefoneInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 6) {
            if (value.length <= 10) {
                e.target.value = value.replace(
                    /(\d{2})(\d{4})(\d{0,4})/,
                    "($1) $2-$3",
                );
            } else {
                e.target.value = value.replace(
                    /(\d{2})(\d{5})(\d{0,4})/,
                    "($1) $2-$3",
                );
            }
        } else if (value.length > 2) {
            e.target.value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
        } else if (value.length > 0) {
            e.target.value = value.replace(/(\d{0,2})/, "($1");
        }
    });
}

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
