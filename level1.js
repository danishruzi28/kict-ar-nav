function loadLevel1() {
// --- SETTINGS FOR MARKER 1 (ENTRANCE) ---
    // (Assume Barcode 1 is just a starting point/hallway marker)
    let dir1 = "-90 0 0"; 
    let dist1 = "Distance: --";
    if (currentTarget === "Mens Toilet 1") { dir1 = "-90 -90 0"; dist1 = "10m"; }
    if (currentTarget === "CITA Classroom") { dir1 = "-90 90 0"; dist1 = "25m"; }
    if (currentTarget === "LR6") { dir1 = "-90 0 0"; dist1 = "40m"; }

    // --- SETTINGS FOR MARKER 5 (MENS TOILET 1) ---
    // If the user chooses 'Mens Toilet 1', Barcode 5 becomes the 'Arrival' point.
    let marker5Content = "";
    if (currentTarget === "Mens Toilet 1") {
        marker5Content = `
            <a-text value="DESTINATION REACHED" position="0 1.8 0" align="center" color="#00FF00" scale="1.2 1.2 1.2"></a-text>
            <a-text value="MENS TOILET 1" position="0 1.4 0" align="center" color="#FFFFFF"></a-text>
            <a-entity geometry="primitive: sphere" material="color: gold; emissive: #664400" 
                      animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; dur: 1000; loop: true"></a-entity>`;
    } else {
        marker5Content = `<a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0"></a-entity>`;
    }

    // --- SETTINGS FOR MARKER 6 (CITA CLASSROOM) ---
    let marker6Content = "";
    if (currentTarget === "CITA Classroom") {
        marker6Content = `
            <a-text value="DESTINATION REACHED" position="0 1.8 0" align="center" color="#00FF00" scale="1.2 1.2 1.2"></a-text>
            <a-text value="CITA CLASSROOM" position="0 1.4 0" align="center" color="#FFFFFF"></a-text>
            <a-entity geometry="primitive: torusKnot" material="color: #00FFFF" scale="0.5 0.5 0.5"
                      animation="property: rotation; to: 0 360 0; dur: 3000; loop: true"></a-entity>`;
    } else {
        marker6Content = `<a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0"></a-entity>`;
    }

    // --- RETURN THE HTML ---
    return `
        <a-marker type="barcode" value="1">
            <a-text value="ENTRANCE" position="0 1.5 0" align="center" color="#00FFFF"></a-text>
            <a-text value="${dist1}" position="0 1.2 0" align="center" color="#FFD700"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="${dir1}"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="5">
            ${marker5Content}
        </a-marker>

        <a-marker type="barcode" value="6">
            ${marker6Content}
        </a-marker>
    `;
}