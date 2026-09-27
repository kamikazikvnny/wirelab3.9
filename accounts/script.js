/* =========================================================
WIRELAB ACCOUNTS
PROFILE + ICON FUNCTIONALITY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


/* =====================================================
   PROFILE ELEMENTS
===================================================== */

const profileName =
    document.querySelector(".profile-name");


const profileAvatar =
    document.getElementById("profile-avatar");


const editProfileButton =
    document.querySelector(".account-button");


/* =====================================================
   LOAD SAVED PROFILE NAME
===================================================== */

const savedName =
    localStorage.getItem(
        "wirelabProfileName"
    );


if (
    savedName &&
    profileName
) {

    profileName.textContent =
        savedName;

}


/* =====================================================
   LOAD SAVED PROFILE ICON
===================================================== */

const savedIcon =
    localStorage.getItem(
        "wirelabProfileIcon"
    );


if (
    savedIcon &&
    profileAvatar
) {

    profileAvatar.textContent =
        savedIcon;

}


/* =====================================================
   EDIT PROFILE
===================================================== */

if (!editProfileButton) {
    return;
}


editProfileButton.addEventListener(
    "click",
    function () {


        /* =============================================
           DISPLAY NAME
        ============================================= */

        const currentName =
            profileName.textContent.trim();


        const newName =
            prompt(
                "Enter your WireLab display name:",
                currentName
            );


        if (newName === null) {
            return;
        }


        const cleanName =
            newName.trim();


        if (cleanName === "") {

            alert(
                "Please enter a name."
            );

            return;

        }


        profileName.textContent =
            cleanName;


        localStorage.setItem(
            "wirelabProfileName",
            cleanName
        );


        /* =============================================
           PROFILE ICON
        ============================================= */

        const currentIcon =
            profileAvatar.textContent.trim();


        const newIcon =
            prompt(
                "Choose a profile icon:\n\n" +
                "Examples:\n" +
                "♙  ⚡  ◉  ◇  ◆  ⌂  ★  ●  ◎  ✦",
                currentIcon
            );


        if (newIcon === null) {
            return;
        }


        const cleanIcon =
            newIcon.trim();


        if (cleanIcon === "") {

            alert(
                "Please enter an icon."
            );

            return;

        }


        profileAvatar.textContent =
            cleanIcon;


        localStorage.setItem(
            "wirelabProfileIcon",
            cleanIcon
        );


    }
);

});
