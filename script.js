$(document).ready(function() {

    // A central data object to hold all project URLs. This is much cleaner than multiple if/else blocks.
    const projectData = {
        '1': {
            selector: '#ph1sel',
            projects: {
                '1': 'projects/Ironman1.html', '2': 'projects/Incrediblehulk.html', '3': 'projects/Ironman2.html',
                '4': 'projects/CaptainAmerica1.html', '5': 'projects/Thor1.html', '6': 'projects/Avengers1.html'
            }
        },
        '2': {
            selector: '#ph2sel',
            projects: {
                '1': 'projects/CaptainAmerica2.html', '2': 'projects/Ironman3.html', '3': 'projects/Thor2.html',
                '4': 'projects/GOG1.html', '5': 'projects/Avengers2.html', '6': 'projects/Antman1.html'
            }
        },
        '3': {
            selector: '#ph3sel',
            projects: {
                '1': 'projects/CaptainAmerica3.html', '2': 'projects/SpiderManHC.html', '3': 'projects/Doctorstrange1.html',
                '4': 'projects/GOG2.html', '5': 'projects/Thor3.html', '6': 'projects/BlackPanther1.html',
                '7': 'projects/CaptainMarvel1.html', '8': 'projects/Avengers3.html', '9': 'projects/Antman2.html',
                '10': 'projects/Avengers4.html', '11': 'projects/SpiderManFFH.html'
            }
        },
        '4': {
            selector: '#ph4sel',
            projects: {
                '1': 'projects/Wandavision.html', '2': 'projects/FAWS.html', '3': 'projects/BlackWidow.html',
                '4': 'projects/ShangChi1.html', '5': 'projects/MsMarvel.html', '6': 'projects/LokiS1.html',
                '7': 'projects/Eternals.html', '8': 'projects/DoctorStrange2.html', '9': 'projects/BlackPanther2.html',
                '10': 'projects/Hawkeye.html', '11': 'projects/SheHulk.html', '12': 'projects/GOGHS.html',
                '13': 'projects/Werewolf.html', '14': 'projects/Thor4.html', '15': 'projects/SpidermanNWH.html',
                '16': 'projects/MoonKnight.html', '17': 'projects/WhatIfS1.html'
            }
        },
        '5': {
            selector: '#ph5sel',
            projects: {
                '1': 'projects/Antman3.html', '2': 'projects/SecretInvasion.html', '3': 'projects/GOG3.html',
                '4': 'projects/LokiS2.html', '5': 'projects/Marvels.html', '6': 'projects/WhatIfS2.html',
                '7': 'projects/Echo.html', '8': 'projects/Deadpool3.html', '9': 'projects/AgathaAllAlong.html',
                '10': 'projects/WhatIfS3.html', '11': 'projects/CaptainAmerica4.html', '12': 'projects/Thunderbolts.html',
                '13': 'projects/Ironheart.html'
            }
        },
        '6': {
            selector: '#ph6sel',
            projects: {
                '1': 'projects/FantasticFour.html', '2': 'projects/EyesofWakanda.html', '3': 'projects/MarvelZombies.html'
            }
        },
        'cannon': {
            selector: '#cansel',
            projects: {
                '1': 'projects/AgentCarter.html', '2': 'projects/GrootS1.html', '3': 'projects/GrootS2.html',
                '4': 'projects/Spiderman123.html', '5': 'projects/AmazSpiderman12.html', '6': 'projects/Venom12.html',
                '7': 'X MEN_POSTER_DIAGRAM.pdf'
            }
        }
    };

    // Single event listener for all project dropdowns
    function handleProjectSelection(selector, projects) {
        // .off() prevents attaching multiple listeners to the same element
        $(selector).off('change').on('change', function() {
            const projectValue = $(this).val();
            const url = projects[projectValue];
            if (url) {
                window.open(url, '_blank');
                // Reset the dropdown to the placeholder after selection
                $(this).val($("option:first", this).val());
            }
        });
    }

    // Main event listener for the Phase selector
    $('#phsel').on('change', function() {
        const phaseValue = $(this).val();
        const phaseInfo = projectData[phaseValue];

        // Hide any project dropdowns that might already be visible
        $('.hidden').hide();

        if (phaseInfo) {
            // Show the correct project dropdown with a smooth fade-in effect
            $(phaseInfo.selector).fadeIn(400);

            // Set up the event listener for the newly visible dropdown
            handleProjectSelection(phaseInfo.selector, phaseInfo.projects);

            // Disable the phase selector and show the reset button
            $(this).prop('disabled', true);
            $('#hidden2').fadeIn(400);
        }
    });

    // Reset button functionality remains the same
    $('#rest').on('click', function() {
        location.reload();
    });
});