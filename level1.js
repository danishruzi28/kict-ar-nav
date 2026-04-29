function loadLevel1() {
let dir1 = "-90 0 0"; 
    if (currentTarget === "Mens Toilet 1") dir1 = "-90 -90 0";
    if (currentTarget === "CITA Classroom") dir1 = "-90 90 0";
    if (currentTarget === "LR6") dir1 = "-90 0 0";

    return `
        <a-marker type="barcode" value="1">
            <a-entity geometry="primitive: cone" material="color: lime" rotation="${dir1}" scale="0.6 0.6 0.6"></a-entity>
        </a-marker>
    `;
}