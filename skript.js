document.write("Задание 1 - Объявите переменную и запишите в нее свое имя как литерал строки.<br/>");
let $name = "Виталий Буянов";
document.write($name+"<br/>");
document.write("Задание 2 - Объявите константы и запишите в нее месяц и год своего рождения как литерал числа.<br/>");
let $month = "2002.06";
let $year = "2002.06";
document.write("month: " + $month + "; year: " + $year+"<br/>");
document.write("Задание 3 Создайте функцию, которая печатает приветствие и имеет три  аргумента: name, month, year.<br/>");
let $nmy = ("Name: " + $name + "; month: " + $month + "; year: " + $year);  
function zd3 ($name,$month,$year)
{
let $nmy = ("Name: " + $name + "; month: " + $month + "; year: " + $year);   
document.write($nmy+"<br/>"); 
return $nmy
}
zd3($name,$month,$year);
document.write("Задание 4 Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [-15, 15] включая крайние числа.<br/>");
function range(start: number, end: number)
{
let arr = new Array();
let arr = [start,end]

}