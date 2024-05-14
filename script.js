document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const texts = ['Hello!', 'Welcome!', 'Nice to see you!', 'Have a great day!', 'You are awesome!', 'Keep it up!', 'Cheers!', 'Good luck!'];

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links and contents
            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked link and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 添加点击事件监听器以显示弹射文字
    document.body.addEventListener('click', function (e) {
        const flyingText = document.createElement('div');
        flyingText.className = 'flying-text';
        
        // 随机选择一个文字
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        flyingText.textContent = randomText;
        
        flyingText.style.left = `${e.pageX}px`;
        flyingText.style.top = `${e.pageY}px`;
        document.body.appendChild(flyingText);

        flyingText.addEventListener('animationend', function () {
            flyingText.remove();
        });
    });
});
