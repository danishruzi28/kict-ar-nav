function loadLevel2() {
    let m6="", m7="", m8="", m9="";
    if (currentTarget === "MPH") {
        m6 = `
            <a-text value="TURN RIGHT" position="0 1.8 0" align="center" color="#00FFFF" look-at="[camera]" scale ="1 1 1"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 -90 0" position="0 0.2 0" scale="0.5 0.7 0.5"></a-entity>`;

        
        m7 = `
            <a-text value="TURN RIGHT THE TURN LEFT TO THE HALLWAY" position="0 1.5 0" align="center" color="#00FFFF" look-at="[camera]" scale ="1 1 1"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 -90 0" position="0 0.2 0" scale="0.5 0.7 0.5"></a-entity>`;

       
        m8 = `
            <a-text value="TAKE THE STAIRS TO LEVEL 2" position="0 1.5 0" align="center" color="#00FFFF" look-at="[camera]" scale ="1 1 1"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0" position="0 0.2 0" scale="0.5 0.7 0.5"></a-entity>`;

        m9 = `
            <a-text value="DESTINATION REACHED" position="0 1.8 0" align="center" color="#00FF00" look-at="[camera]" scale ="1 1 1"></a-text>
            <a-text value="MPH" position="0 1.8 0" align="center" color="white" look-at="[camera]"></a-text>
            <a-entity geometry="primitive: sphere" material="color: gold" animation="property: scale; to: 0.5 0.5 0.5; dir: alternate; loop: true"></a-entity>`;
    }

    return `
        <a-marker type="barcode" value="6">${m6}</a-marker>
        <a-marker type="barcode" value="7">${m7}</a-marker>
        <a-marker type="barcode" value="8">${m8}</a-marker>
        <a-marker type="barcode" value="9">${m9}</a-marker>
    `;
}
