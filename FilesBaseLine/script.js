document.addEventListener("DOMContentLoaded", function() {
    // Initialize with saved language or default to English
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLanguage);

    // Show language selection page after 1 second
    setTimeout(() => {
        const languagePage = document.getElementById("language-page");
        if (languagePage) {
            languagePage.style.display = "block";
            void languagePage.offsetWidth;
            languagePage.classList.add("fade-in");
        }
    }, 1000);

    // Language selection event handlers
    document.querySelectorAll(".language-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const selectedLang = this.getAttribute("data-lang");
            switchLanguage(selectedLang);
            
            // Transition from language page to login page
            const languagePage = document.getElementById("language-page");
            languagePage.classList.remove("fade-in");
            languagePage.style.opacity = "0";
            
            setTimeout(() => {
                languagePage.style.display = "none";
                const loginPage = document.getElementById("login-page");
                if (loginPage) {
                    loginPage.style.display = "block";
                    void loginPage.offsetWidth;
                    loginPage.classList.add("fade-in");
                }
            }, 1000);
        });
    });

    // Email validation and login handler
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", function(e) {
            e.preventDefault();
            const emailInput = document.getElementById("email-input");
            const emailValue = emailInput ? emailInput.value.trim() : "";
            
            // Validate Zain email
            if (!/@.*zain/i.test(emailValue)) { 
                alert("Please enter a valid Zain email address.");
                return;
            }
            
            // Store email
            localStorage.setItem("userEmail", emailValue);
            
            // Send to server if CSRF token exists
            const token = document.querySelector('meta[name="csrf-token"]');
            if (token) {
                fetch('/baseLineTest/saveMail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': token.getAttribute('content'),
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        value: emailValue,
                        key: "email"
                    })
                }).catch(error => console.log('API call failed:', error));
            }

            // Transition to main content
            const loginPage = document.getElementById("login-page");
            loginPage.classList.remove("fade-in");
            loginPage.style.opacity = "0";
            
            setTimeout(() => {
                loginPage.style.display = "none";
                const mainContainer = document.getElementById("main-container");
                if (mainContainer) {
                    mainContainer.style.display = "block";
                    void mainContainer.offsetWidth;
                    mainContainer.classList.add("show");
                }
            }, 1000);
        });
    }

    // Language switching function
    function switchLanguage(langCode) {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations && translations[langCode] && translations[langCode][key]) {
                if (element.tagName === 'INPUT') {
                    element.placeholder = translations[langCode][key];
                } else {
                    element.textContent = translations[langCode][key];
                }
            }
        });

        // Set document direction and font
        if (langCode === 'ar' || langCode === 'ku') {
            document.dir = 'rtl';
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.style.fontFamily = langCode === 'ar' ? "'Noto Sans Arabic', Arial, sans-serif" : "Arial, sans-serif";
        } else {
            document.dir = 'ltr';
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.style.fontFamily = "Arial, sans-serif";
        }

        localStorage.setItem('selectedLanguage', langCode);
    }

    // Question section - Module 1
    document.querySelectorAll("#question-section .option").forEach(btn => {
        btn.addEventListener("click", function() {
            // Disable all options
            document.querySelectorAll("#question-section .option").forEach(b => b.disabled = true);
            
            if (this.getAttribute("data-correct") === "true") {
                this.style.backgroundColor = "green";
            } else {
                this.style.backgroundColor = "red";
                const correctBtn = document.querySelector('#question-section .option[data-correct="true"]');
                if (correctBtn) {
                    correctBtn.classList.add("correct");
                }
            }
            
            // Auto-transition to module 2
            setTimeout(() => {
                const module1 = document.getElementById("module1");
                if (module1) {
                    module1.classList.add("fade-out");
                    setTimeout(() => {
                        module1.remove();
                        showModule("module2");
                    }, 1000);
                }
            }, 1500);
        });
    });

    // Password tester - Module 2
    const submitPasswordBtn = document.getElementById("submit-password");
    if (submitPasswordBtn) {
        submitPasswordBtn.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Clear previous results
            clearPasswordInterval();
            removeElements(["password-message", "brute-visual"]);

            const password = document.getElementById("password-input").value;
            const currentLang = localStorage.getItem('selectedLanguage') || 'en';
            
            // Create brute force visual
            const bruteContainer = createBruteContainer();
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
            const isStrong = isPasswordStrong(password);
            
            if (!isStrong) {
                handleWeakPassword(password, chars, bruteContainer, currentLang);
            } else {
                handleStrongPassword(password, chars, bruteContainer, currentLang);
            }
        });
    }

    // Malware detection game - Module 3
    const zipFile = document.getElementById("zip-file");
    if (zipFile) {
        zipFile.addEventListener("click", () => {
            const zipContents = document.getElementById("zip-contents");
            if (zipContents) {
                zipContents.style.display = "block";
            }
        });
    }

    // File safety checks
    document.querySelectorAll("#file-container .file-item").forEach(item => {
        item.addEventListener("click", function() {
            if (this.getAttribute("data-type") !== "zip") {
                alert("This file is safe.");
            }
        });
    });

    // Zip file malware detection
    document.querySelectorAll(".zip-file-item").forEach(item => {
        item.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "malware") {
                alert("Correct! safe.exe is infected!");
                transitionToModule("module3", "module4");
            } else {
                alert("This file is safe. Try again!");
            }
        });
    });
    
    // WiFi ordering game - Module 4
    initializeWiFiGame();

    // Finish button
    const finishBtn = document.getElementById("next-module-btn");
    if (finishBtn) {
        finishBtn.addEventListener("click", function(e) {
            e.preventDefault();
            
            const wifiList = document.getElementById("wifi-list");
            if (!wifiList) return;
            
            const items = Array.from(wifiList.querySelectorAll(".wifi-item"));
            const currentOrder = items.map(item => parseInt(item.getAttribute("data-security")));
            const correctOrder = [4, 3, 2, 1];
            const isCorrect = currentOrder.every((val, index) => val === correctOrder[index]);
            
            if (isCorrect) {
                showCongratulations();
            } else {
                showIncorrectFeedback(finishBtn);
            }
        });
    }

    // Helper Functions
    function showModule(moduleId) {
        const module = document.getElementById(moduleId);
        if (module) {
            module.style.display = "block";
            void module.offsetWidth;
            module.classList.add("fade-in");
        }
    }

    function transitionToModule(fromModuleId, toModuleId) {
        const fromModule = document.getElementById(fromModuleId);
        if (fromModule) {
            fromModule.classList.add("fade-out");
            setTimeout(() => {
                fromModule.remove();
                showModule(toModuleId);
            }, 1000);
        }
    }

    function clearPasswordInterval() {
        if (window.currentPasswordInterval) {
            clearInterval(window.currentPasswordInterval);
            window.currentPasswordInterval = null;
        }
    }

    function removeElements(ids) {
        ids.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.remove();
        });
    }

    function createBruteContainer() {
        const container = document.createElement('div');
        container.id = 'brute-visual';
        container.style.cssText = 'font-family: monospace; font-size: 24px; text-align: center; margin: 10px auto 0;';
        document.getElementById("password-tester").appendChild(container);
        return container;
    }

    function isPasswordStrong(password) {
        return password.length >= 10 && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);
    }

    function handleWeakPassword(password, chars, container, lang) {
        const revealed = Array(password.length).fill(false);
        
        window.currentPasswordInterval = setInterval(() => {
            const notRevealed = revealed.map((r, i) => r ? null : i).filter(i => i !== null);
            if (notRevealed.length > 0) {
                const randIndex = notRevealed[Math.floor(Math.random() * notRevealed.length)];
                revealed[randIndex] = true;
            }
            
            let displayStr = "";
            for (let i = 0; i < password.length; i++) {
                displayStr += revealed[i] ? password[i] : chars[Math.floor(Math.random() * chars.length)];
            }
            container.textContent = displayStr;
            
            if (revealed.every(v => v)) {
                clearPasswordInterval();
                setTimeout(() => showWeakPasswordMessage(password, lang), 500);
            }
        }, 100);
    }

    function handleStrongPassword(password, chars, container, lang) {
        window.currentPasswordInterval = setInterval(() => {
            let displayStr = "";
            for (let i = 0; i < password.length; i++) {
                displayStr += chars[Math.floor(Math.random() * chars.length)];
            }
            container.textContent = displayStr;
        }, 50);
        
        setTimeout(() => {
            clearPasswordInterval();
            showStrongPasswordMessage(lang);
            setTimeout(() => transitionToModule("module2", "module3"), 2000);
        }, 1000);
    }

    function showWeakPasswordMessage(password, lang) {
        const missing = [];
        if (password.length < 10) missing.push(translations[lang].needsCharacters);
        if (!/[0-9]/.test(password)) missing.push(translations[lang].needsNumber);
        if (!/[^A-Za-z0-9]/.test(password)) missing.push(translations[lang].needsSymbol);
        
        const messageEl = document.createElement("div");
        messageEl.id = "password-message";
        messageEl.style.cssText = `margin-top: 10px; font-size: 20px; text-align: ${(lang === 'ar' || lang === 'ku') ? 'right' : 'left'};`;
        messageEl.textContent = translations[lang].passwordWeak + missing.join(", ") + "!";
        document.getElementById("password-tester").appendChild(messageEl);
    }

    function showStrongPasswordMessage(lang) {
        const messageEl = document.createElement("div");
        messageEl.id = "password-message";
        messageEl.style.cssText = `margin-top: 10px; font-size: 20px; text-align: ${(lang === 'ar' || lang === 'ku') ? 'right' : 'left'};`;
        messageEl.textContent = translations[lang].passwordStrong;
        document.getElementById("password-tester").appendChild(messageEl);
    }

    function initializeWiFiGame() {
        const wifiList = document.getElementById("wifi-list");
        if (!wifiList) return;

        let draggedItem = null;
        const wifiItems = document.querySelectorAll(".wifi-item");
        
        wifiItems.forEach(item => {
            let longPressTimer;
            let isDragging = false;

            // Mouse events
            item.addEventListener("mousedown", function(e) {
                this.style.transform = "scale(0.98)";
                longPressTimer = setTimeout(() => {
                    if (!isDragging) this.classList.add("dragged-out");
                }, 500);
            });

            item.addEventListener("mouseup", function(e) {
                clearTimeout(longPressTimer);
                if (!isDragging) {
                    this.style.transform = "";
                    this.classList.remove("dragged-out");
                }
            });

            item.addEventListener("mouseleave", function(e) {
                clearTimeout(longPressTimer);
                if (!isDragging) {
                    this.style.transform = "";
                    this.classList.remove("dragged-out");
                }
            });

            // Drag events
            item.addEventListener("dragstart", function(e) {
                isDragging = true;
                draggedItem = this;
                this.classList.add("dragging");
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/html", this.outerHTML);
                setTimeout(() => this.style.opacity = "0.5", 0);
            });

            item.addEventListener("dragend", function(e) {
                isDragging = false;
                this.classList.remove("dragging", "dragged-out");
                this.style.transform = "";
                this.style.opacity = "";
                document.querySelectorAll(".wifi-item").forEach(item => item.classList.remove("drag-over"));
            });

            item.addEventListener("dragover", function(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                if (draggedItem && draggedItem !== this) {
                    this.classList.add("drag-over");
                }
            });

            item.addEventListener("dragleave", function(e) {
                this.classList.remove("drag-over");
            });

            item.addEventListener("drop", function(e) {
                e.preventDefault();
                this.classList.remove("drag-over");
                
                if (draggedItem && draggedItem !== this) {
                    draggedItem.style.transition = "transform 0.3s ease, opacity 0.3s ease";
                    draggedItem.classList.add("dragged-out");
                    
                    setTimeout(() => {
                        const allItems = Array.from(wifiList.children);
                        const draggedIndex = allItems.indexOf(draggedItem);
                        const dropIndex = allItems.indexOf(this);
                        
                        if (draggedIndex < dropIndex) {
                            wifiList.insertBefore(draggedItem, this.nextSibling);
                        } else {
                            wifiList.insertBefore(draggedItem, this);
                        }
                        
                        // Reset styles
                        draggedItem.classList.remove("dragged-out");
                        draggedItem.style.transition = "";
                        draggedItem.style.opacity = "";
                        draggedItem.style.transform = "";
                    }, 150);
                }
            });
        });

        // Shuffle WiFi items
        const items = Array.from(wifiList.children);
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            wifiList.insertBefore(items[j], items[i]);
        }
    }

    function showCongratulations() {
        document.getElementById("main-container").style.display = "none";
        
        const currentLang = localStorage.getItem('selectedLanguage') || 'en';
        
        // Create congratulations page
        const congratsPage = document.createElement("div");
        congratsPage.id = "congrats-page";
        congratsPage.className = "fade-in";
        congratsPage.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            display: flex; justify-content: center; align-items: center;
            z-index: 2000; pointer-events: none;
        `;
        
        congratsPage.innerHTML = `
            <div style="position: relative; text-align: center;">
                <h2 style="font-size:48px; color:#fff; position: relative; z-index:2;">
                    ${translations[currentLang].congratulations}
                </h2>
            </div>
        `;
        
        // Create brush container
        const brushContainer = document.createElement("div");
        brushContainer.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 1;
        `;
        
        // Create overlapping spiral brushes
        const brushes = [
            { src: 'FilesBaseLine/recource/ZN_Active_01-01.png', top: 'calc(50% - 120px)', left: 'calc(50% - 200px)', size: '80px', delay: '0s', zIndex: '3', rotation: '0deg' },
            { src: 'FilesBaseLine/recource/ZN_Active_01-02.png', top: 'calc(50% - 100px)', left: 'calc(50% - 160px)', size: '80px', delay: '0.3s', zIndex: '2', rotation: '120deg' },
            { src: 'FilesBaseLine/recource/ZN_Active_01-05.png', top: 'calc(50% - 80px)', left: 'calc(50% - 220px)', size: '80px', delay: '0.6s', zIndex: '1', rotation: '240deg' }
        ];
        
        brushes.forEach((brush) => {
            const brushElement = document.createElement('img');
            brushElement.src = brush.src;
            brushElement.style.cssText = `
                position: absolute; top: ${brush.top}; left: ${brush.left};
                width: ${brush.size}; height: ${brush.size}; z-index: ${brush.zIndex};
                opacity: 0; transform: rotate(${brush.rotation});
                animation: popCircle 1.5s forwards ${brush.delay}, rotateClockwise 20s linear infinite ${brush.delay};
            `;
            brushContainer.appendChild(brushElement);
        });
        
        document.body.appendChild(brushContainer);
        document.body.appendChild(congratsPage);
    }

    function showIncorrectFeedback(button) {
        button.style.border = "2px solid red";
        button.classList.add("shake");
        setTimeout(() => {
            button.classList.remove("shake");
            button.style.border = "2px solid var(--primary-green)";
        }, 500);
    }
});







