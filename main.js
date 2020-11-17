//Exercice 5 : boucle for (insertion des balises HTML dans les scripts). 
//[moyen] Ecrire une page HTML faisant apparaitre la table de multiplication 
//pour les entiers compris entre 1 et 9 et présenter le résultat dans un 
//tableau [10 x 10].



document.write("<center>");




document.write("<table border=1>");


document.write("<tr><td>","x","</td>");
for(var i=1;i<=9;i++)
document.write("<td>",i,"</td>");

for(var i=1;i<10;i++)
{

document.write("<tr>");
document.write("<td>",i,"</td>");
for(var j=1;j<=9;j++)
{

document.write("<td>",i*j,"</td>");
}
document.write("</tr>");
}
document.write("</table>");
