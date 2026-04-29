function loadLevel1() {
// We will use Barcode 1 as the primary Entrance marker
    let arrow1 = "-90 0 0"; // Default
    let dist1 = "0m";

    switch(currentTarget) {
        case 'Mens Toilet 1': 
            arrow1 = "-90 -90 0"; dist1 = "10m"; break;
        case 'LR6': 
            arrow1 = "-90 0 0"; dist1 = "45m"; break;
        case 'Cafe 1': 
            arrow1 = "-90 90 0"; dist1 = "20m"; break;
        case 'Elevator': 
            arrow1 = "-90 0 0"; dist1 = "30m"; break;
        // Add more cases here as we set directions...
        default:
            arrow1 = "-90 0 0"; dist1 = "Scan to Begin";
    }

    // Logic for the Arrival (Target) Markers
    // This part makes the destination show the 'Arrival Effect' automatically
    let arrivalEffect = `
        <a-text value="YOU HAVE ARRIVED" position="0 1.8 0" align="center" color="#00FF00"></a-text>
        <a-text value="${currentTarget}" position="0 1.4 0" align="center" color="#FFFFFF"></a-text>
        <a-entity geometry="primitive: sphere" material="color: gold" animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true"></a-entity>
    `;

    return `
        <a-marker type="barcode" value="1">
            <a-text value="CHECKPOINT 1" position="0 1.5 0" align="center" color="#00FFFF"></a-text>
            <a-text value="To ${currentTarget}: ${dist1}" position="0 1.2 0" align="center" color="#FFD700" scale="0.8 0.8 0.8"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="${arrow1}"></a-entity>
        </a-marker>

        `;
}