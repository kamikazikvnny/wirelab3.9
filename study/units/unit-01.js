/* =========================================================
WIRELAB — UNIT 01
SAFETY
========================================================= */

const COMPLETED_KEY = "wirelab-study-completed";
const UNIT_NUMBER = 1;

/* =========================================================
GET COMPLETED UNITS
========================================================= */

function getCompletedUnits() {


try {

    const saved =
        localStorage.getItem(COMPLETED_KEY);

    if (!saved) {
        return [];
    }

    const units =
        JSON.parse(saved);

    if (!Array.isArray(units)) {
        return [];
    }

    return units;

} catch (error) {

    return [];

}


}

/* =========================================================
SAVE COMPLETED UNITS
========================================================= */

function saveCompletedUnits(units) {


localStorage.setItem(
    COMPLETED_KEY,
    JSON.stringify(units)
);


}

/* =========================================================
COMPLETE UNIT
========================================================= */

function completeUnit() {

const completed =
    getCompletedUnits();

if (completed.includes(UNIT_NUMBER)) {

    // Deselect / mark unit incomplete
    const index =
        completed.indexOf(UNIT_NUMBER);

    completed.splice(index, 1);

} else {

    // Select / mark unit complete
    completed.push(UNIT_NUMBER);

    completed.sort(
        (a, b) => a - b
    );

}

saveCompletedUnits(completed);

updateCompleteButton();

}

/* =========================================================
UPDATE BUTTON
========================================================= */

function updateCompleteButton() {

const button =
    document.getElementById(
        "completeUnit"
    );

if (!button) {
    return;
}

const completed =
    getCompletedUnits();

if (completed.includes(UNIT_NUMBER)) {

    button.textContent =
        "UNIT COMPLETED";

    button.classList.add(
        "completed"
    );

} else {

    button.textContent =
        "COMPLETE UNIT";

    button.classList.remove(
        "completed"
    );

}

}

/* =========================================================
INITIALIZE
========================================================= */

document.addEventListener(
"DOMContentLoaded",
function () {

    updateCompleteButton();

    const button =
        document.getElementById(
            "completeUnit"
        );

    if (button) {

        button.addEventListener(
            "click",
            completeUnit
        );

    }

}

);
