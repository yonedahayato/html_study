var str = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sta"];
document.writeln("<h1>");
var d = new Date();
var m = d.getMonth();
// 月の値を取得
document.writeln(m+1 + "月");
//見出しとして表示
document.writeln("</h1>")

document.writeln("<table>");
//月の最初の日を取得
var fd = new Date(d.getFullYear(), d.getMonth(), 1);
//月の最初の曜日を取得
var f = fd.getDay();
//月の最後の日を取得
var ld = new Date(d.getFullYear(), d.getMonth()+1, 0);

for (var i=1; i<=ld.getDate(); i++){
  document.writeln("<tr>");
  document.writeln("<td>");
  //日付を表示
  document.writeln(i);
  document.writeln("</td>");
  document.writeln("<td>");
  document.writeln(str[(f+i-1)%7])
  document.writeln("</td>");
  document.writeln("</tr>");
}
document.writeln("</table>");
