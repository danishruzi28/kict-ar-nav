function loadLevel1() {
// --- Marker 1: Entrance Area ---
    let dir1 = "-90 0 0"; // Default: Straight
    if (currentTarget === "Mens Toilet 1") dir1 = "-90 -90 0"; // Turn Left
    if (currentTarget === "CITA Classroom" || currentTarget === "LR6") dir1 = "-90 0 0"; // Go Straight

    // --- Marker 2: Main Junction / Elevator ---
    let dir2 = "-90 0 0"; 
    if (currentTarget === "Mens Toilet 1") dir2 = "-90 180 0"; // Turn Around (behind you)
    if (currentTarget === "CITA Classroom") dir2 = "-90 90 0";  // Turn Right
    if (currentTarget === "LR6") dir2 = "-90 -90 0";           // Turn Left

    // --- Marker 3: Classroom Corridor ---
    let dir3 = "-90 0 0";
    if (currentTarget === "LR6") dir3 = "-90 0 0"; // End of hall

    return `
        <a-marker type="barcode" value="1">
            <a-text value="Entrance Checkpoint" position="0 1.2 0" align="center" rotation="-90 0 0" color="#00FFFF"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="${dir1}" scale="0.6 0.6 0.6"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="2">
            <a-text value="Elevator Junction" position="0 1.2 0" align="center" rotation="-90 0 0" color="#00FFFF"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="${dir2}" scale="0.6 0.6 0.6"></a-entity>
        </a-marker>

        <a-marker type="barcode" value="3">
            <a-text value="Classroom Hallway" position="0 1.2 0" align="center" rotation="-90 0 0" color="#00FFFF"></a-text>
            <a-entity geometry="primitive: cone" material="color: lime" rotation="${dir3}" scale="0.6 0.6 0.6"></a-entity>
        </a-marker>
    `;
}