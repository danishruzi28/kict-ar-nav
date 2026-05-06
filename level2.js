function loadLevel2() {
    let marker10Content = ""; // Level 2 Landing
    let marker11Content = ""; // MPH Marker

    if (currentTarget === "MPH") {
        // At Landing (Marker 10), point to MPH
        marker10Content = `
            <a-text value="TURN LEFT FOR MPH" position="0 1.5 0" align="center" color="#00FFFF" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 -90 0"></a-entity>`;
        // At MPH (Marker 11), Arrival Effect
        marker11Content = `
            <a-text value="YOU HAVE ARRIVED YOUR DESTINATION" position="0 1.8 0" align="center" color="#00FF00" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: sphere" material="color: gold" animation="property: scale; to: 1.1 1.1 1.1; dir: alternate; loop: true"></a-entity>`;
    }

    return `
        <a-marker type="barcode" value="10">${marker10Content}</a-marker>
        <a-marker type="barcode" value="11">${marker11Content}</a-marker>
    `;
}
