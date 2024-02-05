var Predmet = /** @class */ (function () {
    function Predmet() {
    }
    return Predmet;
}());
/// <reference path="predmet.ts" />
var Ispit = /** @class */ (function () {
    function Ispit() {
    }
    return Ispit;
}());
/// <reference path="ispit.ts" />
var Fakultet = /** @class */ (function () {
    function Fakultet() {
    }
    return Fakultet;
}());
/// <reference path="fakultet.ts" />
var fakultet;
var aktivanPredmet;
function promeniAktivnog(selekt) {
    aktivanPredmet = fakultet.predmeti.filter(function (el) { return el.idPredmeta == Number(selekt.value); })[0];
    fakultet.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
function initializeData() {
    fakultet = new Fakultet("FTN");
    var p1 = new Predmet("Pera", "Peric", 1, "Algoritimi");
    var p2 = new Predmet("Mika", "Mikic", 2, "Strukture podataka");
    var p3 = new Predmet("Zika", "Zikic", 3, "Bioloski inspirisano racunarstvo");
    fakultet.predmeti = [p1, p2, p3];
    var i11 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "teorija", "2022-02-11", 5);
    var i12 = new Ispit(p1, "i1", "Jovan", "Jovanovic", "kolokvijum", "2022-03-05", 60);
    var i21 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "teorija", "2022-05-09", 25);
    var i22 = new Ispit(p1, "i2", "Ivan", "Ivanovic", "kolokvijum", "2022-07-21", 68);
    var i31 = new Ispit(p1, "i3", "Dejan", "Dejan", "teorija", "2022-05-09", 7);
    var i32 = new Ispit(p1, "i3", "Dejan", "Dejan", "kolokvijum", "2022-07-21", 69);
    var i41 = new Ispit(p2, "i4", "Marko", "Markovic", "teorija", "2022-02-11", 20);
    var i42 = new Ispit(p2, "i4", "Marko", "Markovic", "kolokvijum", "2022-03-05", 64);
    var i51 = new Ispit(p2, "i5", "Nikola", "Nikolic", "teorija", "2022-05-09", 18);
    var i52 = new Ispit(p2, "i5", "Nikola", "Nikolic", "kolokvijum", "2022-07-21", 15);
    var i61 = new Ispit(p2, "i6", "Luka", "Lukic", "teorija", "2022-05-09", 22);
    var i62 = new Ispit(p2, "i6", "Luka", "Lukic", "kolokvijum", "2022-07-21", 33);
    var i71 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "teorija", "2022-02-11", 23);
    var i72 = new Ispit(p3, "i7", "Djordje", "Djordjevic", "kolokvijum", "2022-03-05", 66);
    var i81 = new Ispit(p3, "i8", "Branko", "Brankovic", "teorija", "2022-05-09", 7);
    var i82 = new Ispit(p3, "i8", "Branko", "Brankovic", "kolokvijum", "2022-07-21", 21);
    var i91 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "teorija", "2022-05-09", 8);
    var i92 = new Ispit(p3, "i9", "Ognjen", "Ognjenovic", "kolokvijum", "2022-07-21", 34);
    var i101 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "teorija", "2022-05-09", 29);
    var i102 = new Ispit(p3, "i10", "Dimitrije", "Dimitrijevic", "kolokvijum", "2022-07-21", 70);
    var i111 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "teorija", "2022-05-09", 9);
    var i112 = new Ispit(p3, "i11", "Vladimir", "Vladimirovic", "kolokvijum", "2022-07-21", 17);
    fakultet.dodajIspit(i11);
    fakultet.dodajIspit(i12);
    fakultet.dodajIspit(i21);
    fakultet.dodajIspit(i22);
    fakultet.dodajIspit(i31);
    fakultet.dodajIspit(i32);
    fakultet.dodajIspit(i41);
    fakultet.dodajIspit(i42);
    fakultet.dodajIspit(i51);
    fakultet.dodajIspit(i52);
    fakultet.dodajIspit(i61);
    fakultet.dodajIspit(i62);
    fakultet.dodajIspit(i71);
    fakultet.dodajIspit(i72);
    fakultet.dodajIspit(i81);
    fakultet.dodajIspit(i82);
    fakultet.dodajIspit(i91);
    fakultet.dodajIspit(i92);
    fakultet.dodajIspit(i101);
    fakultet.dodajIspit(i102);
    fakultet.dodajIspit(i111);
    fakultet.dodajIspit(i112);
    var select = document.getElementById("predmet");
    fakultet.predmeti.forEach(function (el) {
        select.options.add(new Option(el.nazivPredmeta, el.idPredmeta.toString()));
    });
    aktivanPredmet = fakultet.predmeti[0];
    fakultet.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map