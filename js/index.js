const softwareData = [
    {
        name: "whisper",
        category: "software",
        icon: "images/whisper-icon.png",
        description: "多平台内网传输软件",
        detailsUrl: "whisper.html"
    },
    {
        name: "Google",
        category: "website",
        icon: "images/google-icon.webp",
        description: "代理谷歌查询",
        detailsUrl: "https://google.127014.xyz/"
    },
    {
        name: "Google translate",
        category: "website",
        icon: "images/google-icon.webp",
        description: "代理谷歌翻译",
        detailsUrl: "https://translate.127014.xyz"
    },
    {
        name: "GitHub代理",
        category: "website",
        icon: "images/github-icon.jpeg",
        description: "代理站GitHub",
        detailsUrl: "https://mirror.127014.xyz"
    },
    {
        name: "documents",
        category: "website",
        icon: "images/default.jpeg",
        description: "整理一点文档",
        detailsUrl: "page/doc.html"
    },
    {
        name: "代理站",
        category: "website",
        icon: "images/default.jpeg",
        description: "代理站1",
        detailsUrl: "https://192.127014.xyz"
    },
    {
        name: "tool",
        category: "website",
        icon: "images/fanyan.jpg",
        description: "backup",
        detailsUrl: "2.html"
    },
    // 可以添加更多软件数据
];

document.addEventListener("DOMContentLoaded", () => {
    displaySoftware(softwareData);
});

function displaySoftware(data) {
    const softwareList = document.getElementById('softwareList');
    softwareList.innerHTML = '';
    data.forEach(software => {
        const softwareItem = document.createElement('div');
        softwareItem.className = 'software-item';
        softwareItem.innerHTML = `
            <img src="${software.icon}" alt="${software.name}">
            <p>${software.name}</p> 
            <div class="description">${software.description}</div>
        `;
        softwareItem.onclick = () => {
            // window.location.href = software.detailsUrl;
            window.open(software.detailsUrl, '_blank');
        };
        softwareList.appendChild(softwareItem);
    });
}

function filterSoftware(category) {
    const filteredData = category === 'all' ? softwareData : softwareData.filter(software => software.category.includes(category));
    displaySoftware(filteredData);
}

function searchSoftware() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = softwareData.filter(software => software.name.toLowerCase().includes(query));
    displaySoftware(filteredData);
}
