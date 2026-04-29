function loadLevel1() {
let m5Content = ""; // Toilet Marker
    let m2Content = ""; // Junction Marker
    let m3Content = ""; // LR6 Marker

    // --- NAVIGATION LOGIC: TO LR6 ---
    if (currentTarget === "LR6") {
        
        // At Marker 5 (Toilet): Exit and go to junction
        // Rotation 180 assumes the toilet is 'behind' the main flow
        m5Content = `
            <a-text value="EXIT TOILET AREA" position="0 1.5 0" align="center" color="#00FFFF"></a-text>
            <a-text value="Head to Main Junction (15m)" position="0 1.2 0" align="center" scale="0.8 0.8 0.8"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 180 0"></a-entity>`;

        // At Marker 2 (Junction): Turn toward Classrooms
        // Rotation 90 assumes a Right turn is needed
        m2Content = `
            <a-text value="MAIN JUNCTION" position="0 1.5 0" align="center" color="#00FFFF"></a-text>
            <a-text value="Turn Right for LR6 (20m)" position="0 1.2 0" align="center" scale="0.8 0.8 0.8"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 90 0"></a-entity>`;

        // At Marker 3 (LR6): Arrival!
        m3Content = `
            <a-text value="DESTINATION REACHED" position="0 1.8 0" align="center" color="#00FF00" scale="1.2 1.2 1.2"></a-text>
            <a-text value="LR6" position="0 1.4 0" align="center" color="#FFFFFF"></a-text>
            <a-entity geometry="primitive: sphere" material="color: gold" 
                      animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; dur: 1000; loop: true"></a-entity>`;
    }

    return `
        <a-marker type="barcode" value="5">${m5Content}</a-marker>
        <a-marker type="barcode" value="2">${m2Content}</a-marker>
        <a-marker type="barcode" value="3">${m3Content}</a-marker>
    `;
}