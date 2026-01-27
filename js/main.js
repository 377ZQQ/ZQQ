// 当页面所有资源加载完后执行
window.onload = function() {
    const loader = document.getElementById('loader');
    // 模拟载入时间：2.5秒后切入直播间
    setTimeout(() => {
        loader.style.opacity = '0'; // 淡出
        setTimeout(() => {
            loader.style.display = 'none'; // 彻底隐藏
        }, 1000);
    }, 2500);
};