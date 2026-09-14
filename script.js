const details = document.querySelectorAll(".accordion details");


details.forEach(function (item) {

    item.addEventListener("click", function (e) {

        e.preventDefault();

        const content = item.querySelector(".content");

        if (item.open) {

            content.style.maxHeight = "0px";
            content.style.paddingBottom = "0px";
            content.style.opacity = "0";

            setTimeout(function () {
                item.open = false;
            }, 800);

        } else {

            details.forEach(function (other) {

                if (other !== item && other.open) {

                    const otherContent = other.querySelector(".content");

                    otherContent.style.maxHeight = "0px";
                    otherContent.style.paddingBottom = "0px";
                    otherContent.style.opacity = "0";

                    setTimeout(function () {
                        other.open = false;
                    }, 800);
                }

            });

            item.open = true;

            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingBottom = "20px";
            content.style.opacity = "1";
        }

    });

});
    const sampleRows = document.querySelectorAll(".sample-row");


    sampleRows.forEach(function(row) {
        const arrow = row.querySelector(".sample-arrow");
        arrow.addEventListener("click", function() {
            sampleRows.forEach(function(otherRow) {

                if (otherRow !== row) {
                    otherRow.classList.remove("active");
                }

            });
            row.classList.toggle("active");

        });

    });

