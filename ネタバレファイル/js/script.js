document.addEventListener("DOMContentLoaded", function () {
  // すべての <details> 要素にイベントをつける
  document.querySelectorAll("details").forEach(detail => {
    detail.addEventListener("toggle", function () {
      setTimeout(updateHeight, 50); // ← 開閉後に高さ通知
    });
  });

  // 既存の choice-btn 処理もここにまとめてOK
  document.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const outputId = this.dataset.output;
      const text = this.dataset.text;
      const out = document.getElementById(outputId);

      if (out) {
        out.innerHTML = text;

        const line = document.createElement("div");
        line.classList.add("line");
        out.appendChild(line);

        out.style.display = "block";
        this.disabled = true;

        setTimeout(updateHeight, 50);
      }
    });
  });

  setTimeout(updateHeight, 50); // 初回通知
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1); // "#sitai" → "sitai"
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const outputId = this.dataset.output;
      const patternKey = this.dataset.pattern;
      const out = document.getElementById(outputId);
      const pdfList = pdfPatterns[patternKey];

      if (out && pdfList) {
        out.innerHTML = pdfList.map(pdf => {
          return `
            <div class="pdf-entry">
              <a href="${pdf.url}" target="_blank" rel="noopener noreferrer">${pdf.label}</a>
              <p class="pdf-description">${pdf.description}</p>
            </div>
          `;
        }).join("");

        out.style.display = "block";
        this.disabled = true;

        setTimeout(updateHeight, 50);
      }
    });
  });

  setTimeout(updateHeight, 50);
});


const pdfPatterns = {
  A: [
    {
      label: "▶ 三田 聴取記録（0325）",
      url: "../pdf/0325_三田_聴取.pdf",
      description: ""

    },
    {
      label: "▶ 御膳 聴取記録（0325）",
      url: "../pdf/0325_御膳_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２５日」、「三田」と「御膳」から話を聞いた。"
    }
  ],
  B: [
    {
      label: "▶ 三田 聴取記録（0326）",
      url: "../pdf/0326_三田_聴取.pdf",
      description: ""

    },
    {
      label: "▶ 御膳 聴取記録（0326）",
      url: "../pdf/0326_御膳_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２６日」、「三田」と「御膳」から話を聞いた。"
    }
  ],
    C: [
    {
      label: "▶ 一ノ瀬 聴取記録（0328）",
      url: "../pdf/0328_一ノ瀬_聴取.pdf",
      description: ""
    },
    {
      label: "▶ 双葉 聴取記録（0328）",
      url: "../pdf/0328_双葉_聴取.pdf",
      description: ""
    },
    {
      label: "▶ 陸良 聴取記録（0328）",
      url: "../pdf/0328_陸良_聴取.pdf",
      description: ""
    },
    {
      label: "▶ 九重 聴取記録（0328）",
      url: "../pdf/0328_九重_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２８日」、「一ノ瀬」と「双葉」、「陸良」、「九重」から話を聞いた。"
    }
  ],
    D: [
    {
      label: "▶ 一ノ瀬 聴取記録（0328）",
      url: "../pdf/0328_一ノ瀬_聴取.pdf",
      description: ""
    },
    {
      label: "▶ 双葉 聴取記録（0328）",
      url: "../pdf/0328_双葉_聴取.pdf",
      description: ""
    },
    {
      label: "▶ 陸良 聴取記録（0328）",
      url: "../pdf/0328_陸良_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２８日」、「一ノ瀬」と「双葉」、「陸良」から話を聞いた。"
    }
  ],
  E: [
    {
      label: "▶ 双葉 聴取記録（0325）",
      url: "../pdf/0325_双葉_聴取.pdf",
      description: ""

    },
    {
      label: "▶ 志知沢 聴取記録（0325）",
      url: "../pdf/0325_志知沢_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２５日」、「双葉」と「志知沢」から話を聞いた。"
    }
  ],
  F: [
    {
      label: "▶ 一ノ瀬 聴取記録（0326）",
      url: "../pdf/0326_一ノ瀬_聴取.pdf",
      description: ""

    },
    {
      label: "▶ 双葉 聴取記録（0326）",
      url: "../pdf/0326_双葉_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２６日」、「一ノ瀬」と「双葉」から話を聞いた。"
    }
  ],
  G: [
    {
      label: "▶ 双葉 聴取記録（0327）",
      url: "../pdf/0327_双葉_聴取.pdf",
      description: ""

    },
    {
      label: "▶ 御膳 聴取記録（0327）",
      url: "../pdf/0327_御膳_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２７日」、「双葉」と「御膳」から話を聞いた。"
    }
  ],
  H: [
    {
      label: "▶ 一ノ瀬 聴取記録（0327）",
      url: "../pdf/0327_一ノ瀬_聴取.pdf",
      description: ""

    },
    {
      label: "▶ 双葉 聴取記録（0327）",
      url: "../pdf/0327_双葉_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２７日」、「一ノ瀬」と「双葉」から話を聞いた。"
    }
  ],
    I: [
    {
      label: "▶ 御膳 聴取記録（0327）",
      url: "../pdf/0327_御膳_聴取.pdf",
      description: ""

    },
    {
      label: "▶ 九重 聴取記録（0327）",
      url: "../pdf/0327_九重_聴取.pdf",
      description: "あなたたちは、事件が起こった前夜の話とそれぞれの客人の印象を「３月２７日」、「御膳」と「九重」から話を聞いた。"
    }
  ]
};
