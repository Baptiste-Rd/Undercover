import React from "react";

const Rules = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1 style={{ color: "#2c3e50" }}>Règles du jeu Undercover</h1>
      <h2 style={{ color: "#16a085" }}>Version Classique</h2>
      <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
        Undercover est un jeu de société où les joueurs doivent découvrir qui
        parmi eux est l'imposteur. Chaque joueur reçoit une carte avec un mot.
        La majorité des joueurs ont le même mot, sauf l'imposteur qui a un mot
        différent mais similaire. Le but du jeu est de découvrir qui est
        l'imposteur avant que celui-ci ne découvre le mot des autres joueurs.
      </p>
      <h3 style={{ color: "#2980b9" }}>Déroulement du jeu</h3>
      <ol style={{ paddingLeft: "20px", fontSize: "16px" }}>
        <li>Distribuez une carte à chaque joueur.</li>
        <li>
          Chaque joueur prend connaissance de son mot sans le révéler aux
          autres.
        </li>
        <li>À tour de rôle, chaque joueur donne un indice sur son mot.</li>
        <li>
          Après chaque tour, les joueurs votent pour éliminer un joueur qu'ils
          pensent être l'imposteur.
        </li>
        <li>
          Le jeu continue jusqu'à ce que l'imposteur soit découvert ou qu'il ne
          reste plus que deux joueurs.
        </li>
      </ol>
      <h2 style={{ color: "#16a085" }}>Version Imposteur</h2>
      <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
        La version Imposteur d'Undercover suit les mêmes règles de base que la
        version classique, avec quelques modifications pour augmenter la
        difficulté.
      </p>
      <h3 style={{ color: "#2980b9" }}>Règles supplémentaires</h3>
      <ul style={{ paddingLeft: "20px", fontSize: "16px" }}>
        <li>Il peut y avoir plusieurs imposteurs dans une partie.</li>
        <li>Les imposteurs peuvent se connaître entre eux.</li>
        <li>
          Les imposteurs doivent essayer de se protéger mutuellement tout en
          essayant de découvrir le mot des autres joueurs.
        </li>
      </ul>
    </div>
  );
};

export default Rules;
