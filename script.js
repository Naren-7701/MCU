$(document).ready(function()
{
    $("#ph").show();
    $("#phsel").show();
    $('#phsel').on('change',function() 
    {
        $("#projselect").show();
        var phase = $(this).val();
        $("#phsel").prop('disabled',true);
        if(phase==1)
        {
            $("#ph1sel").show();
            $('#ph1sel').on('change',function() 
            {
                var movie = $(this).val();
                if(movie==1)
                    window.open("projects/Ironman1.html")
                else if(movie==2)
                    window.open("projects/Incrediblehulk.html")
                else if(movie==3)
                    window.open("projects/Ironman2.html")
                else if(movie==4)
                    window.open("projects/CaptainAmerica1.html")
                else if(movie==5)
                    window.open("projects/Thor1.html")
                else
                    window.open("projects/Avengers1.html")
            });
            $("#hidden2").show();
        }
        else if(phase==2)
        {
            $("#ph2sel").show();
            $('#ph2sel').on('change',function() 
            {
                var movie = $(this).val();
                if(movie==1)
                    window.open("projects/CaptainAmerica2.html")
                else if(movie==2)
                    window.open("projects/Ironman3.html")
                else if(movie==3)
                    window.open("projects/Thor2.html")
                else if(movie==4)
                    window.open("projects/GOG1.html")
                else if(movie==5)
                    window.open("projects/Avengers2.html")
                else
                    window.open("projects/Antman1.html")
            });
            $("#hidden2").show();
        }
        else if(phase==3)
        {
            $("#ph3sel").show();
            $('#ph3sel').on('change',function() 
            {
                var movie = $(this).val();
                if(movie==1)
                    window.open("projects/CaptainAmerica3.html")
                else if(movie==2)
                    window.open("projects/SpiderManHC.html")
                else if(movie==3)
                    window.open("projects/Doctorstrange1.html")
                else if(movie==4)
                    window.open("projects/GOG2.html")
                else if(movie==5)
                    window.open("projects/Thor3.html")
                else if(movie==6)
                    window.open("projects/BlackPanther1.html")
                else if(movie==7)
                    window.open("projects/CaptainMarvel1.html")
                else if(movie==8)
                    window.open("projects/Avengers3.html")
                else if(movie==9)
                    window.open("projects/Antman2.html")
                else if(movie==10)
                    window.open("projects/Avengers4.html")
                else
                    window.open("projects/SpiderManFFH.html")
            });
            $("#hidden2").show();
        }
        else if(phase==4)
        {
            $("#ph4sel").show();
            $('#ph4sel').on('change',function() 
            {
            var movie = $(this).val();
            if(movie==1)
                window.open("projects/Wandavision.html")
            else if(movie==2)
                window.open("projects/FAWS.html")
            else if(movie==3)
                window.open("projects/BlackWidow.html")
            else if(movie==4)
                window.open("projects/ShangChi1.html")
            else if(movie==5)
                window.open("projects/MsMarvel.html")
            else if(movie==6)
                window.open("projects/LokiS1.html")
            else if(movie==7)
                window.open("projects/Eternals.html")
            else if(movie==8)
                window.open("projects/DoctorStrange2.html")
            else if(movie==9)
                window.open("projects/BlackPanther2.html")
            else if(movie==10)
                window.open("projects/Hawkeye.html")
            else if(movie==11)
                window.open("projects/SheHulk.html")
            else if(movie==12)
                window.open("projects/GOGHS.html")
            else if(movie==13)
                window.open("projects/Werewolf.html")
            else if(movie==14)
                window.open("projects/Thor4.html")
            else if(movie==15)
                window.open("projects/SpidermanNWH.html")
            else if(movie==16)
                window.open("projects/MoonKnight.html")
            else
                window.open("projects/WhatIfS1.html")
        });
        $("#hidden2").show();
    }
    else if(phase==5)
    {
        $("#ph5sel").show();
        $('#ph5sel').on('change',function() 
        {
            var movie = $(this).val();
            if(movie==1)
                window.open("projects/Antman3.html")
            else if(movie==2)
                window.open("projects/SecretInvasion.html")
            else if(movie==3)
                window.open("projects/GOG3.html")
            else if(movie==4)
                window.open("projects/LokiS2.html")
            else if(movie==5)
                window.open("projects/Marvels.html")
            else if(movie==6)
                window.open("projects/WhatIfS2.html")
            else if(movie==7)
                window.open("projects/Echo.html")
            else if(movie==8)
                window.open("projects/Deadpool3.html")
            else if(movie==9)
                window.open("projects/AgathaAllAlong.html")
            else
                window.open("projects/Deadpool3.html")
        });
        $("#hidden2").show();
    }
    else
    {
        $("#cansel").show();
        $('#cansel').on('change',function() 
        {
            var movie = $(this).val();
            if(movie==1)
                window.open("projects/AgentCarter.html")
            else if(movie==2)
                window.open("projects/GrootS1.html")
            else if(movie==3)
                window.open("projects/GrootS2.html")
            else if(movie==4)
                window.open("projects/Spiderman123.html")
            else if(movie==5)
                window.open("projects/AmazSpiderman12.html")
            else if(movie==6)
                window.open("projects/Venom12.html")
            else
                window.open("X MEN_POSTER_DIAGRAM.pdf")
        });
        $("#hidden2").show();
    }
    });
    $('#rest').on('click',function()
    {
        location.reload();
    });
}); 