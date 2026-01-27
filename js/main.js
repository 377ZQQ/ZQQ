// 1. 加载层逻辑
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 2000); // 2秒后进入
});

// 2. 标签页切换逻辑
function showTab(tabId) {
    // 隐藏所有内容
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    // 取消所有按钮高亮
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 显示选中的内容和按钮
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
