
$('#input-form').one('submit',function(){
    var inputq1 = encodeURIComponent($('#input-q1').val());
    var inputq2 = encodeURIComponent($('#input-q2').val());
    var inputq3 = encodeURIComponent($('#input-q3').val());
    var inputq4 = encodeURIComponent($('#input-q4').val());
    var inputq5 = encodeURIComponent($('#input-q5').val());

    var inputq6 = encodeURIComponent($('#input-q6').val());
    var inputq7 = encodeURIComponent($('#input-q7').val());
    var inputq8 = encodeURIComponent($('#input-q8').val());
    var inputq9 = encodeURIComponent($('#input-q9').val());
    var inputq10 = encodeURIComponent($('#input-q10').val());


    var q1ID = "entry.1884796473";
    var q2ID = "entry.1826125864";
    var q3ID = "entry.1737047467";
    var q4ID = "entry.1873768167";
    var q5ID = "entry.1850925596";

    var q6ID = "entry.853761927";
    var q7ID = "entry.2105160654";
    var q8ID = "entry.401868963";
    var q9ID = "entry.1268075372";
    var q10ID = "entry.905190401";

    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfhgntYusoJU-BcAc-HQtCyTBZsTrltm7P5FUtfkF6m96lAng/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL +q1ID + "=" + inputq1 + "&" +
                              q2ID + "=" + inputq2 + "&" +
                              q3ID + "=" + inputq3 + "&" +
                              q4ID + "=" + inputq4 + "&" +
                              q5ID + "=" + inputq5 + "&" +
                              q6ID + "=" + inputq6 + "&" +
                              q7ID + "=" + inputq7 + "&" +
                              q8ID + "=" + inputq8 + "&" +
                              q9ID + "=" + inputq9 + "&" +
                              q10ID + "=" + inputq10 + "&" +
                              submitRef);
    // console.log(submitURL);
    $(this)[0].action=submitURL;
    // $('#input-feedback').text('Thank You!');
});
