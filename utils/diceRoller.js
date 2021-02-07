module.exports = (nDice) => {
  const results = {
    successes: 0,
    fumbles: 0,
    nRolled: nDice,
    rolled: [],
  };

  for (let i = 0; i < nDice; i += 1) {
    const result = Math.floor(Math.random() * 10) + 1;
    results.rolled.push(result);
    if (result >= 7) {
      if (result === 10) {
        results.successes += 2;
      } else {
        results.successes += 1;
      }
    } else if (result === 1) {
      results.fumbles += 1;
    }
  }

  return results;
};
