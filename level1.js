function loadLevel1() {
    let marker1Content = ""; // Lobby Marker
    let marker2Content = ""; // LR 5 Marker

    // NAVIGATION TO LR 5
    if (currentTarget === "LR 5") {
        // At Lobby (Marker 1), point toward LR 5
        marker1Content =`
            <a-text value="TURN RIGHT FOR LR 5" position="0 1.5 0" align="center" color="#000000" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 -90 0"></a-entity>`;
            
        // At LR 5 (Marker 2), Arrival Effect
        marker2Content = `
            <a-text value="YOU HAVE ARRIVED YOUR DESTINATION" position="0 1.8 0" align="center" color="#fffb00" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: sphere" material="color: gold" animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true"></a-entity>`;

    // NAVIGATION TO LOBBY (If they start elsewhere)
    if (currentTarget === "Lobby") {
        marker1Content = `
    <!-- Lifted 1.5 meters high (Y-axis) -->
    <a-entity position="0 1.5 0">
        <a-text value="YOU ARE AT LOBBY" align="center" color="#fffb00" scale="2 2 2" look-at="[camera]"></a-text>
    </a-entity>
    
    <!-- A large gold ball to make it obvious -->
    <a-sphere position="0 0.5 0" radius="0.3" color="gold" animation="property: position; to: 0 0.8 0; dir: alternate; dur: 1000; loop: true"></a-sphere>
`;
    }

    return `
        <a-marker type="barcode" value="1">${marker1Content}</a-marker>
        <a-marker type="barcode" value="2">${marker2Content}</a-marker>
    `;
}
}