function loadLevel2() {
let m9Content = ""; // Content for LR 9 Marker
    let m_start = "";   // Content for Starting Marker (e.g., Stairs/Elevator)

    // Example: User is at Elevator 1 (Barcode 10) and wants LR 9
    if (currentTarget === "LR 9") {
        // STARTING POINT
        m_start = `
            <a-text value="GO TO LR 9" position="0 1.5 0" align="center" color="#00FFFF"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0"></a-entity>
        `;

        // ARRIVAL POINT (Barcode 11 is outside LR 9)
        m9Content = `
            <a-text value="SCAN TO CONFIRM ARRIVAL" position="0 1.8 0" align="center" color="#FFD700" animation="property: opacity; from: 1; to: 0.2; loop: true; dur: 800"></a-text>
            <a-text value="LR 9" position="0 1.4 0" align="center" color="#FFFFFF"></a-text>
            <a-entity geometry="primitive: box" material="color: gold" animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"></a-entity>
        `;
    }

    return `
        <a-marker type="barcode" value="10">${m_start}</a-marker>
        <a-marker type="barcode" value="11">${m9Content}</a-marker>
    `;
}
