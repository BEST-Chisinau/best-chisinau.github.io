
$('#input-form2').one('submit',function(){
    var inputq11 = encodeURIComponent($('#input-q11').val());
    var inputq12 = encodeURIComponent($('#input-q12').val());
    var inputq13 = encodeURIComponent($('#input-q13').val());
    var inputq14 = encodeURIComponent($('#input-q14').val());
    var inputq15 = encodeURIComponent($('#input-q15').val());

    var inputq16 = encodeURIComponent($('#input-q16').val());
    var inputq17 = encodeURIComponent($('#input-q17').val());
    var inputq18 = encodeURIComponent($('#input-q18').val());
    var inputq19 = encodeURIComponent($('#input-q19').val());
    var inputq20 = encodeURIComponent($('#input-q20').val());


    var q11ID = "entry.251838911";
    var q12ID = "entry.381860659";
    var q13ID = "entry.1389576103";
    var q14ID = "entry.1177177518";
    var q15ID = "entry.1231175216";

    var q16ID = "entry.213420359";
    var q17ID = "entry.1623121702";
    var q18ID = "entry.522561307";
    var q19ID = "entry.1828892445";
    var q20ID = "entry.328542916";

    var baseURL2 = 'https://docs.google.com/forms/d/e/1FAIpQLSef32bXUVXKJmlMg1C6v3FAWyQ1Lh8VvsKbLl2ndMxoAc9hjg/formResponse?';
    var submitRef2 = '&submit=Submit';
    var submitURL2 = (baseURL2 +q11ID + "=" + inputq11 + "&" +
                              q12ID + "=" + inputq12 + "&" +
                              q13ID + "=" + inputq13 + "&" +
                              q14ID + "=" + inputq14 + "&" +
                              q15ID + "=" + inputq15 + "&" +
                              q16ID + "=" + inputq16 + "&" +
                              q17ID + "=" + inputq17 + "&" +
                              q18ID + "=" + inputq18 + "&" +
                              q19ID + "=" + inputq19 + "&" +
                              q20ID + "=" + inputq20 + "&" +
                              submitRef2);
    // console.log(submitURL);
    $(this)[0].action=submitURL2;
    // $('#input-feedback').text('Thank You!');
});



// var FB_PUBLIC_LOAD_DATA_ = [null, [null, [
//         // [208930674, "Nume, Prenume", null, 1, [
//         //     [251838911, null, 0]
//         // ]],
//         // [907255577, "Nr. de telefon", null, 1, [
//         //     [381860659, null, 0]
//         // ]],
//         // [13760712, "Email", null, 1, [
//         //     [1389576103, null, 0]
//         // ]],
//         // [1009252901, "Grupa", null, 1, [
//         //     [213420359, null, 0]
//         // ]],
//         [250942002, "Facultatea", null, 1, [
//             [1231175216, null, 0]
//         ]],
//         [447970812, "Facebook link", null, 1, [
//             [1177177518, null, 0]
//         ]],
//         [1874621295, "Ai echipă? Dacă da, specifică numele echipei și a membrilor.", null, 1, [
//             [1623121702, null, 0]
//         ]],
//         [1982582975, "1) Intrebare tehnica 1 ", null, 1, [
//             [522561307, null, 0]
//         ]],
//         [1745046284, "2) Intrebare tehnica 2", null, 1, [
//             [1828892445, null, 0]
//         ]],
//         [377484222, "Cum ai auzit de noi?", null, 1, [
//             [328542916, null, 0]
//         ]]
