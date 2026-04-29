function loadLevel2() {
return `
        <a-marker type="barcode" value="8">
            <a-text value="POSTGRADUATE OFFICE" look-at="[camera]" position="0 1.2 0" align="center" color="#FFD700"></a-text>
            <a-entity geometry="primitive: cone" material="color: orange" rotation="-90 0 0" scale="0.5 0.5 0.5"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="9">
            <a-text value="MAIN MEETING ROOM" look-at="[camera]" position="0 1.2 0" align="center" color="#FFD700"></a-text>
            <a-entity geometry="primitive: cone" material="color: orange" rotation="-90 90 0" scale="0.5 0.5 0.5"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="10">
            <a-text value="FEMALE MUSALLA" look-at="[camera]" position="0 1.2 0" align="center" color="#FFD700"></a-text>
            <a-entity geometry="primitive: cone" material="color: orange" rotation="-90 -90 0" scale="0.5 0.5 0.5"></a-entity>
        </a-marker>
    `;
}
