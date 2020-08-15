const BASE_ROULER = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];
const BASE_SPRINTER = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9, 9];

const MUSCLE_ADD = [5];
const PELOTON_ADD = [0];

const MUSCLE_ROULER = [...BASE_ROULER];
const MUSCLE_SPRINTER = [...BASE_SPRINTER, ...MUSCLE_ADD];
const PELOTON = [...BASE_ROULER, ...PELOTON_ADD];

export { MUSCLE_ROULER, MUSCLE_SPRINTER, PELOTON };
