const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.querySelector(".modal-close");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalRole = document.getElementById("modalRole");
const modalDescription = document.getElementById("modalDescription");

const modalData = {
  "night-side": {
    category: "2019 · DRAMA · SUB VILLAIN",
    title: "밤의 이면",
    role: "강태서 역",
    description:
      "속을 알 수 없는 능글맞은 사이코패스 강태서 역을 맡았다. 선과 악이 공존하는 마스크와 섬세한 감정 연기로 혜찬의 이름을 대중에게 각인시킨 대표작이다."
  },

  blackout: {
    category: "2015 · FILM · DEBUT",
    title: "블랙아웃",
    role: "이름 없는 웨이터 역",
    description:
      "화면에 잡히는 분량은 몇 초에 불과했지만, 배우 주혜찬이 연기 인생의 첫걸음을 뗀 작품이다."
  },

  romance: {
    category: "2021 · DRAMA · ROMANTIC COMEDY",
    title: "연애의 온도 차이",
    role: "유성우 역",
    description:
      "다정하면서도 은근히 능글맞은 서브 남주인공 유성우를 연기했다. 작품을 통해 ‘서브병 유발자’라는 호칭을 얻었으며, 파격적인 핑크색 헤어스타일링도 큰 화제가 되었다."
  },

  "blue-moon": {
    category: "2022 · FILM · NOIR",
    title: "블루 문",
    role: "최도일 역",
    description:
      "조직에 잠입한 언더커버 경찰 최도일 역을 맡아 날카로운 눈빛과 화려한 액션 연기를 선보였다. 배역을 위해 체중을 감량하고 피부를 태우는 등 역할에 완전히 몰입했다."
  },

  "red-alert": {
    category: "2024 · FILM · SUPPORTING ROLE",
    title: "적색경보",
    role: "이해일 역",
    description:
      "주인공을 돕는 유쾌하면서도 미스터리한 정보원 이해일 역으로 출연했다. 극의 긴장감 사이에서 분위기를 환기하는 탄탄한 감초 연기를 선보였다."
  },

  radio: {
    category: "2020 — 2021 · SBS POWER FM",
    title: "주혜찬의 밤의 세레나데",
    role: "고정 DJ",
    description:
      "달콤하고 나직한 중저음 보이스, 뛰어난 발성, 재치 있는 사연 피드백으로 심야 라디오 청취율 1위를 기록했다. 라디오를 통해 탄탄한 코어 팬덤을 구축했다."
  },

  reality: {
    category: "COMING SOON · REALITY SHOW",
    title: "연애 리얼리티 프로그램",
    role: "출연 예정",
    description:
      "배우로서 소비되는 이미지에서 벗어나, 자신의 삶과 진짜 감정을 마주하기 위해 출연을 결심했다. 가벼운 만남이 아닌 진짜 인연을 찾고 싶은 혜찬의 새로운 도전이다."
  },

  fan: {
    category: "ALWAYS · FAN SERVICE",
    title: "팬들과 함께하는 시간",
    role: "팬 바보 주혜찬",
    description:
      "팬들이 원하는 것이라면 웬만하면 다 해주는 것으로 유명하다. 무대와 작품 밖에서도 팬들과 진심으로 소통하며 다정한 팬 서비스를 이어가고 있다."
  }
};

function openModal(key) {
  const data = modalData[key];

  if (!data) return;

  modalCategory.textContent = data.category;
  modalTitle.textContent = data.title;
  modalRole.textContent = data.role;
  modalDescription.textContent = data.description;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    openModal(button.dataset.modal);
  });
});

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});
