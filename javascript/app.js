import { btnPaper,btnScissors,btnStone } from "./modules/variables.js";

import { showPaper,showScissors,showStone } from "./modules/funciones.js";

btnStone.addEventListener('click', showStone);

btnPaper.addEventListener('click', showPaper);

btnScissors.addEventListener('click', showScissors);

//* References
// 0 => stone
// 1 => paper
// 2 => scissors