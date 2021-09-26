const notifyCloses = document.getElementsByClassName("notify__close");
const notifyButtonsShow = document.getElementsByClassName("notify-show");
const rulesList = document.querySelector(".rules-list");
let timer;



if (rulesList) {
    renderRulesList("../json/rules.json").then();
}


if (notifyCloses.length > 0) {
    for (let notifyClose of notifyCloses) {
        notifyClose.addEventListener("click", function (e) {
            this.parentElement.classList.remove("active");
            timer = null;
        });
    }
}

if (notifyButtonsShow.length > 0) {
    for (let notifyButtonShow of notifyButtonsShow) {
        notifyButtonShow.addEventListener("click", function () {
            const notify = document.querySelector(this.dataset.target);
            notify.classList.add("active");
            if (!timer) {
                timer = setTimeout(() => {
                    if (notify.classList.contains("active")) {
                        notify.classList.remove("active");
                        timer = null;
                    }
                }, 3000);
            }
        });
    }
}



function copyToClipboard(value) {
    const el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

async function renderRulesList(url) {
    if (rulesList) {
        let response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            let arrNotes = Object.values(json['notes']),
                arrRules = Object.values(json['rules']);

            let htmlItemRule, htmlItemNode;
            arrRules.forEach(rule => {
                htmlItemRule = `
                    <li class="rules-list__rule">
                        <i class="fas fa-times"></i>
                        <span>${rule}.</span>
                    </li>
                    `;
                rulesList.insertAdjacentHTML("beforeend", htmlItemRule);
            });

            arrNotes.forEach(note => {
                htmlItemNode = `
                    <li class="rules-list__note">
                        <i class="fas fa-exclamation"></i>
                        <span>${note}.</span>
                    </li>
                    `;
                rulesList.insertAdjacentHTML("beforeend", htmlItemNode);
            });
        } else {
            console.log(response.status);
        }
    }
}


