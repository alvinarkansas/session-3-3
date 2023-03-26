import chalk from 'chalk';

const score = 74;
const mentee = "Djarot";
const absensi = 2;

// apabila score minimal 75 dan absensi tidak lebih dari 5 maka print "Selamat, <mentee> kamu lulus"
// apabila score 74 print "Kamu hampir lulus"
// apabila di bawah 75 maka print "Maaf <mentee>, kamu belum lulus"

if (score >= 75 && absensi <= 5) {
  console.log(chalk.green("Selamat, " + mentee + " kamu lulus"));
} else if (score === 74) {
  console.log("Kamu hampir lulus");
} else {
  console.log(chalk.red("Maaf " + mentee + ", kamu belum lulus"));
}
