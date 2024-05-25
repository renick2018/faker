document.addEventListener("DOMContentLoaded", () => {
    const softwareDetails = {
        name: "软件A",
        category: "效率",
        icon: "../images/default.jpeg",
        description: "这是软件A的详细描述。",
        version: "1.0.0",
        developer: "开发者名称",
        price: "免费"
    };

    document.getElementById('softwareName').textContent = softwareDetails.name;
    document.getElementById('softwareIcon').src = softwareDetails.icon;
    document.getElementById('softwareNameDetails').textContent = softwareDetails.name;
    document.getElementById('softwareDescription').textContent = softwareDetails.description;
    document.getElementById('softwareCategory').textContent = softwareDetails.category;
    document.getElementById('softwareVersion').textContent = softwareDetails.version;
    document.getElementById('softwareDeveloper').textContent = softwareDetails.developer;
    document.getElementById('softwarePrice').textContent = softwareDetails.price;
});

function goBack() {
    window.history.back();
}
    