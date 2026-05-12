function loadLevel1() {
    let m1="", m2="", m3="", m4="", m5="";

    if (currentTarget === "LR 5") {
        // --- MARKER 1: LOBBY ---
        m1 = `
            <a-text value="TURN LEFT AND GO TO JUNCTION 1" position="0 1.5 0" align="center" color="#00FFFF" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0"></a-entity>`;

        // --- MARKER 2: FIRST JUNCTION ---
        m2 = `
            <a-text value="TURN LEFT AND GO STRAIGHT UNTIL JUNCTION 2" position="0 1.5 0" align="center" color="#00FFFF" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 -90 0"></a-entity>`;

        // --- MARKER 3: SECOND JUNCTION (Confirmation) ---
        m3 = `
            <a-text value="TURN LEFT" position="0 1.5 0" align="center" color="#00FFFF" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0"></a-entity>`;

        // --- MARKER 4: FINAL JUNCTION ---
        m4 = `
            <a-text value="ENTER THE HALLWAY BEHIND YOUR BACK AND LR 5 IS ON YOUR RIGHT" position="0 1.5 0" align="center" color="#00FFFF" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 90 0"></a-entity>`;

        // --- MARKER 5: ARRIVAL (LR 5) ---
        m5 = `
            <a-text value="DESTINATION REACHED" position="0 1.8 0" align="center" color="#00FF00" look-at="[camera]"></a-text>
            <a-text value="LR 5" position="0 1.4 0" align="center" color="white" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: sphere" material="color: gold" animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true"></a-entity>`;
    }

    return `
        <a-marker type="barcode" value="1">${m1}</a-marker>
        <a-marker type="barcode" value="2">${m2}</a-marker>
        <a-marker type="barcode" value="3">${m3}</a-marker>
        <a-marker type="barcode" value="4">${m4}</a-marker>
        <a-marker type="barcode" value="5">${m5}</a-marker>
    `;
}