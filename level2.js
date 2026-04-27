function loadLevel2() {
    return `
        <a-marker type="barcode" value="3">
            <a-text value="LEVEL 2: LAB 2.1" look-at="[camera]" position="0 1 0" align="center"></a-text>
            <a-entity geometry="primitive: cone" material="color: orange" rotation="-90 0 0"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="4">
            <a-text value="LEVEL 2: MEETING ROOM" look-at="[camera]" position="0 1 0" align="center"></a-text>
            <a-entity geometry="primitive: cone" material="color: orange" rotation="-90 -90 0"></a-entity>
        </a-marker>
    `;
}
