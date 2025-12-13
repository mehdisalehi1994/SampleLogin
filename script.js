const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

// دکمه‌های toggle موبایل
const loginToggle = document.querySelector('.login-toggle');
const registerToggle = document.querySelector('.register-toggle');

// برای دسکتاپ
if (RegisterLink) {
    RegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add('active');
        updateMobileToggle();
    });
}

if (LoginLink) {
    LoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('active');
        updateMobileToggle();
    });
}

// برای موبایل
if (loginToggle) {
    loginToggle.addEventListener('click', () => {
        container.classList.remove('active');
        updateMobileToggle();
    });
}

if (registerToggle) {
    registerToggle.addEventListener('click', () => {
        container.classList.add('active');
        updateMobileToggle();
    });
}

// تابع به‌روزرسانی دکمه‌های toggle
function updateMobileToggle() {
    if (window.innerWidth <= 576) {
        if (container.classList.contains('active')) {
            loginToggle?.classList.remove('active');
            registerToggle?.classList.add('active');
        } else {
            loginToggle?.classList.add('active');
            registerToggle?.classList.remove('active');
        }
    }
}

// به‌روزرسانی در resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateMobileToggle();
    }, 250);
});

// اجرای اولیه
updateMobileToggle();

// جلوگیری از زوم دابل تپ در موبایل
if (window.innerWidth <= 576) {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// جلوگیری از submit فرم (برای تست)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formType = form.closest('.Login') ? 'ورود' : 'ثبت نام';
        alert(`فرم ${formType} با موفقیت ارسال شد!`);
    });
});