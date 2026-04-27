function loadLevel1() {
    return `
        <a-marker type="barcode" value="1">
            <a-text value="LEVEL 1: LAB 1.1" look-at="[camera]" position="0 1 0" align="center"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="2">
            <a-text value="LEVEL 1: DEAN OFFICE" look-at="[camera]" position="0 1 0" align="center"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 90 0"></a-entity>
        </a-marker>
    `;
}