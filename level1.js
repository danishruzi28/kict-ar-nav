function loadLevel1() {
return `
        <a-marker type="barcode" value="5">
            <a-text value="AL-TABARI LAB" look-at="[camera]" position="0 1.2 0" align="center" color="#00FFFF"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 0 0" scale="0.5 0.5 0.5"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="6">
            <a-text value="CAFE / LOUNGE" look-at="[camera]" position="0 1.2 0" align="center" color="#00FFFF"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 90 0" scale="0.5 0.5 0.5"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="7">
            <a-text value="MALE MUSALLA" look-at="[camera]" position="0 1.2 0" align="center" color="#00FFFF"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="-90 -90 0" scale="0.5 0.5 0.5"></a-entity>
        </a-marker>
    `;
}